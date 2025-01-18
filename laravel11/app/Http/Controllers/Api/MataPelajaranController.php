<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\MataPelajaran;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\MataPelajaranController;
use Illuminate\Support\Facades\Validator;

class MataPelajaranController extends Controller
{
    public function index()
    {
        $mataPelajaran = MataPelajaran::with('guru')->get(); 
        return response()->json($mataPelajaran);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nama_Mata_Pelajaran' => 'required|string|max:255',
            'Guru_ID' => 'required|exists:guru,ID_Guru',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $mataPelajaran = MataPelajaran::create($request->all());
        return response()->json($mataPelajaran, 201);
    }

    /**
     * Menampilkan detail mata pelajaran berdasarkan ID.
     */
    public function show($id)
    {
        $mataPelajaran = MataPelajaran::with('guru')->find($id);

        if (!$mataPelajaran) {
            return response()->json(['message' => 'Mata Pelajaran not found'], 404);
        }

        return response()->json($mataPelajaran);
    }

    /**
     * Memperbarui data mata pelajaran.
     */
    public function update(Request $request, $id)
    {
        $mataPelajaran = MataPelajaran::find($id);

        if (!$mataPelajaran) {
            return response()->json(['message' => 'Mata Pelajaran not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'Nama_Mata_Pelajaran' => 'sometimes|required|string|max:255',
            'Guru_ID' => 'sometimes|required|exists:guru,ID_Guru',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $mataPelajaran->update($request->all());
        return response()->json($mataPelajaran);
    }

    /**
     * Menghapus mata pelajaran.
     */
    public function destroy($id)
    {
        $mataPelajaran = MataPelajaran::find($id);

        if (!$mataPelajaran) {
            return response()->json(['message' => 'Mata Pelajaran not found'], 404);
        }

        $mataPelajaran->delete();
        return response()->json(['message' => 'Mata Pelajaran deleted successfully']);
    }
}