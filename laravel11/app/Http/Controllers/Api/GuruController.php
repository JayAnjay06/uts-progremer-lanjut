<?php

namespace App\Http\Controllers\Api;

use App\Models\Guru;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\GuruController;
use Illuminate\Support\Facades\Validator;


class GuruController extends Controller
{
    /**
     * Menampilkan daftar semua guru.
     */
    public function index()
    {
        $gurus = Guru::all();
        return response()->json($gurus);
    }

    /**
     * Menambahkan guru baru.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nama' => 'required|string|max:255',
            'Tanggal_Lahir' => 'required|date',
            'Jenis_Kelamin' => 'required|string|max:10',
            'Alamat' => 'required|string|max:255',
            'Mata_Pelajaran' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $guru = Guru::create($request->all());
        return response()->json($guru, 201);
    }

    /**
     * Menampilkan detail guru berdasarkan ID.
     */
    public function show($id)
    {
        $guru = Guru::find($id);

        if (!$guru) {
            return response()->json(['message' => 'Guru not found'], 404);
        }

        return response()->json($guru);
    }

    /**
     * Memperbarui data guru.
     */
    public function update(Request $request, $id)
    {
        $guru = Guru::find($id);

        if (!$guru) {
            return response()->json(['message' => 'Guru not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'Nama' => 'sometimes|required|string|max:255',
            'Tanggal_Lahir' => 'sometimes|required|date',
            'Jenis_Kelamin' => 'sometimes|required|string|max:10',
            'Alamat' => 'sometimes|required|string|max:255',
            'Mata_Pelajaran' => 'sometimes|required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $guru->update($request->all());
        return response()->json($guru);
    }

    /**
     * Menghapus guru.
     */
    public function destroy($id)
    {
        $guru = Guru::find($id);

        if (!$guru) {
            return response()->json(['message' => 'Guru not found'], 404);
        }

        $guru->delete();
        return response()->json(['message' => 'Guru deleted successfully']);
    }
}