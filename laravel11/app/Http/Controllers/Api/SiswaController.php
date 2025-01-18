<?php

namespace App\Http\Controllers\Api;

use App\Models\Siswa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\SiswaController;

class SiswaController extends Controller
{
    /**
     * Menampilkan daftar semua siswa.
     */
    public function index()
    {
        $siswa = Siswa::with('kelas')->get(); // Mengambil semua siswa beserta kelas
        return response()->json($siswa);
    }

    /**
     * Menambahkan siswa baru.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nama' => 'required|string|max:255',
            'Tanggal_Lahir' => 'required|date',
            'Jenis_Kelamin' => 'required|string|max:10',
            'Alamat' => 'required|string|max:255',
            'Kelas_ID' => 'required|exists:kelas,ID_Kelas', // Validasi untuk memastikan kelas ada
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $siswa = Siswa::create($request->all());
        return response()->json($siswa, 201);
    }

    /**
     * Menampilkan detail siswa berdasarkan ID.
     */
    public function show($id)
    {
        $siswa = Siswa::with('kelas')->find($id);

        if (!$siswa) {
            return response()->json(['message' => 'Siswa not found'], 404);
        }

        return response()->json($siswa);
    }

    /**
     * Memperbarui data siswa.
     */
    public function update(Request $request, $id)
    {
        $siswa = Siswa::find($id);

        if (!$siswa) {
            return response()->json(['message' => 'Siswa not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'Nama' => 'sometimes|required|string|max:255',
            'Tanggal_Lahir' => 'sometimes|required|date',
            'Jenis_Kelamin' => 'sometimes|required|string|max:10',
            'Alamat' => 'sometimes|required|string|max:255',
            'Kelas_ID' => 'sometimes|required|exists:kelas,ID_Kelas',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $siswa->update($request->all());
        return response()->json($siswa);
    }

    /**
     * Menghapus siswa.
     */
    public function destroy($id)
    {
        $siswa = Siswa::find($id);

        if (!$siswa) {
            return response()->json(['message' => 'Siswa not found'], 404);
        }

        $siswa->delete();
        return response()->json(['message' => 'Siswa deleted successfully']);
    }
}
