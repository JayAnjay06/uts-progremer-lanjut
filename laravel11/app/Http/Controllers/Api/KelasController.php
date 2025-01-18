<?php

namespace App\Http\Controllers\Api;

use App\Models\Kelas;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\KelasController;
use Illuminate\Support\Facades\Validator;

class KelasController extends Controller
{
    public function index()
    {
        $kelas = Kelas::with('waliKelas')->get(); // Mengambil semua kelas beserta wali kelas
        return response()->json($kelas);
    }

    /**
     * Menambahkan kelas baru.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nama_Kelas' => 'required|string|max:255',
            'Wali_Kelas_ID' => 'required|exists:guru,ID_Guru', // Validasi untuk memastikan wali kelas ada
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $kelas = Kelas::create($request->all());
        return response()->json($kelas, 201);
    }

    /**
     * Menampilkan detail kelas berdasarkan ID.
     */
    public function show($id)
    {
        $kelas = Kelas::with('waliKelas')->find($id);

        if (!$kelas) {
            return response()->json(['message' => 'Kelas not found'], 404);
        }

        return response()->json($kelas);
    }

    /**
     * Memperbarui data kelas.
     */
    public function update(Request $request, $id)
    {
        $kelas = Kelas::find($id);

        if (!$kelas) {
            return response()->json(['message' => 'Kelas not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'Nama_Kelas' => 'sometimes|required|string|max:255',
            'Wali_Kelas_ID' => 'sometimes|required|exists:guru,ID_Guru',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $kelas->update($request->all());
        return response()->json($kelas);
    }

    /**
     * Menghapus kelas.
     */
    public function destroy($id)
    {
        $kelas = Kelas::find($id);

        if (!$kelas) {
            return response()->json(['message' => 'Kelas not found'], 404);
        }

        $kelas->delete();
        return response()->json(['message' => 'Kelas deleted successfully']);
    }
}
