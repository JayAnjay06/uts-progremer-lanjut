<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use Illuminate\Http\Request;

class GuruController extends Controller
{
        public function index()
        {
            $guru = Guru::all();
            return response()->json($guru);
        }
    
        public function store(Request $request)
        {
            $request->validate([
                'nama' => 'required|string|max:255',
                'kontak' => 'required|string|max:255',
            ]);
    
            $guru = Guru::create($request->all());
    
            return response()->json(['message' => 'Guru berhasil ditambahkan', 'data' => $guru], 201);
        }
    
        public function show($id)
        {
            $guru = Guru::find($id);
    
            if (!$guru) {
                return response()->json(['message' => 'Guru tidak ditemukan'], 404);
            }
    
            return response()->json($guru);
        }
    
        public function update(Request $request, $id)
        {
            $guru = Guru::find($id);
    
            if (!$guru) {
                return response()->json(['message' => 'Guru tidak ditemukan'], 404);
            }
    
            // Validasi input
            $request->validate([
                'nama' => 'sometimes|required|string|max:255',
                'kontak' => 'sometimes|required|string|max:255',
            ]);
    
            $guru->update($request->all());
    
            return response()->json(['message' => 'Guru berhasil diupdate', 'data' => $guru]);
        }
    
        public function destroy($id)
        {
            $guru = Guru::find($id);
    
            if (!$guru) {
                return response()->json(['message' => 'Guru tidak ditemukan'], 404);
            }
    
            $guru->delete();
    
            return response()->json(['message' => 'Guru berhasil dihapus']);
        }
}
