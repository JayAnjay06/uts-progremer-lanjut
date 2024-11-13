<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SiswaResource;
use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    public function index()
    {
        $siswa = Siswa::with('kelas')->get();
        return SiswaResource::collection($siswa);
    }

    public function show($id)
    {
        $siswa = Siswa::with('kelas')->find($id);

        if (!$siswa) {
            return response()->json(['message' => 'Siswa tidak ditemukan'], 404);
        }

        return new SiswaResource($siswa);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'nis' => 'required|string|unique:siswa,nis|max:20',
            'id_kelas' => 'required|exists:kelas,id',
            'tanggal_lahir' => 'required|date',
            'alamat' => 'required|string',
            'jenis_kelamin' => 'required|string',
            'no_telepon' => 'nullable|string',
            'orang_tua' => 'required|string',
        ]);

        $siswa = Siswa::create($request->all());
        return response()->json(['message' => 'Siswa berhasil ditambahkan!', 'data' => new SiswaResource($siswa)], 201);
    }

    public function update(Request $request, $id)
    {
        $siswa = Siswa::find($id);

        if (!$siswa) {
            return response()->json(['message' => 'Siswa tidak ditemukan'], 404);
        }

        $request->validate([
            'nama' => 'sometimes|string|max:255',
            'nis' => 'sometimes|string|unique:siswa,nis,' . $siswa->id . '|max:20',
            'id_kelas' => 'sometimes|exists:kelas,id',
            'tanggal_lahir' => 'sometimes|date',
            'alamat' => 'sometimes|string',
            'jenis_kelamin' => 'sometimes|string',
            'no_telepon' => 'sometimes|nullable|string',
            'orang_tua' => 'sometimes|string',
        ]);

        $siswa ->update($request->all());
        return response()->json(['message' => 'Siswa berhasil diperbarui!', 'data' => new SiswaResource($siswa)]);
    }

    public function destroy($id)
    {
        $siswa = Siswa::find($id);

        if (!$siswa) {
            return response()->json(['message' => 'Siswa tidak ditemukan'], 404);
        }

        $siswa->delete();
        return response()->json(['message' => 'Siswa berhasil dihapus']);
    }
}