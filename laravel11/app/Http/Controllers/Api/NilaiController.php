<?php

namespace App\Http\Controllers\Api;

use App\Models\Nilai;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\NilaiController;

class NilaiController extends Controller
{
    /**
     * Menampilkan daftar semua nilai.
     */
    public function index()
    {
        $nilai = Nilai::with(['siswa', 'mataPelajaran'])->get(); // Mengambil semua nilai beserta siswa dan mata pelajaran
        return response()->json($nilai);
    }

    /**
     * Menambahkan nilai baru.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Siswa_ID' => 'required|exists:siswa,ID_Siswa', // Validasi untuk memastikan siswa ada
            'Mata_Pelajaran_ID' => 'required|exists:mata_pelajaran,ID_Mata_Pelajaran', // Validasi untuk memastikan mata pelajaran ada
            'Nilai' => 'required|integer|min:0|max:100', // Validasi nilai
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $nilai = Nilai::create($request->all());
        return response()->json($nilai, 201);
    }

    /**
     * Menampilkan detail nilai berdasarkan ID.
     */
    public function show($id)
    {
        $nilai = Nilai::with(['siswa', 'mataPelajaran'])->find($id);

        if (!$nilai) {
            return response()->json(['message' => 'Nilai not found'], 404);
        }

        return response()->json($nilai);
    }

    /**
     * Memperbarui data nilai.
     */
    public function update(Request $request, $id)
    {
        $nilai = Nilai::find($id);

        if (!$nilai) {
            return response()->json(['message' => 'Nilai not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'Siswa_ID' => 'sometimes|required|exists:siswa,ID_Siswa',
            'Mata_Pelajaran_ID' => 'sometimes|required|exists:mata_pelajaran,ID_Mata_Pelajaran',
            'Nilai' => 'sometimes|required|integer|min:0|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $nilai->update($request->all());
        return response()->json($nilai);
    }

    /**
     * Menghapus nilai berdasarkan ID.
     */
    public function destroy($id)
    {
        $nilai = Nilai::find($id);

        if (!$nilai) {
            return response()->json(['message' => 'Nilai not found'], 404);
        }

        $nilai->delete();
        return response()->json(['message' => 'Nilai deleted successfully']);
    }
}