<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MataPelajaranResource;
use App\Models\MataPelajaran;
use Illuminate\Http\Request;

class MataPelajaranController extends Controller
{
    public function index()
    {
        $mataPelajaran = MataPelajaran::all();
        return MataPelajaranResource::collection($mataPelajaran);
    }

    public function show($id)
    {
        $mataPelajaran = MataPelajaran::find($id);

        if (!$mataPelajaran) {
            return response()->json(['message' => 'Mata Pelajaran tidak ditemukan'], 404);
        }

        return new MataPelajaranResource($mataPelajaran);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'kode' => 'required|string|unique:mata_pelajaran,kode|max:10',
        ]);

        $mataPelajaran = MataPelajaran::create($request->all());
        return response()->json(['message' => 'Mata Pelajaran berhasil ditambahkan!', 'data' => new MataPelajaranResource($mataPelajaran)], 201);
    }

    public function update(Request $request, $id)
    {
        $mataPelajaran = MataPelajaran::find($id);

        if (!$mataPelajaran) {
            return response()->json(['message' => 'Mata Pelajaran tidak ditemukan'], 404);
        }

        $request->validate([
            'nama' => 'sometimes|string|max:255',
            'kode' => 'sometimes|string|unique:mata_pelajaran,kode,' . $mataPelajaran->id . '|max:10',
        ]);

        $mataPelajaran->update($request->all());
        return response()->json(['message' => 'Mata pelajaran berhasil diupdate', 'data' => $mataPelajaran]);
    }

    public function destroy($id)
    {
        $mataPelajaran = MataPelajaran::find($id);

        if (!$mataPelajaran) {
            return response()->json(['message' => 'Mata Pelajaran tidak ditemukan'], 404);
        }

        $mataPelajaran->delete();
        return response()->json(['message' => 'Mata Pelajaran berhasil dihapus']);
    }
}