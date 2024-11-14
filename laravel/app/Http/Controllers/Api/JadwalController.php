<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Jadwal;
use Illuminate\Http\Request;

class JadwalController extends Controller
{
        public function index()
        {
            $jadwal = Jadwal::all();
            return response()->json($jadwal);
        }
    
        public function store(Request $request)
        {
            $request->validate([
                'hari' => 'required|string|max:255',
                'waktu' => 'required|date_format:H:i',
            ]);
    
            $jadwal = Jadwal::create($request->all());
    
            return response()->json(['message' => 'Jadwal berhasil ditambahkan', 'data' => $jadwal], 201);
        }
    
        public function show($id)
        {
            $jadwal = Jadwal::find($id);
    
            if (!$jadwal) {
                return response()->json(['message' => 'Jadwal tidak ditemukan'], 404);
            }
    
            return response()->json($jadwal);
        }
    
        public function update(Request $request, $id)
        {
            $jadwal = Jadwal::find($id);
    
            if (!$jadwal) {
                return response()->json(['message' => 'Jadwal tidak ditemukan'], 404);
            }
    
            $request->validate([
                'hari' => 'sometimes|required|string|max:255',
                'waktu' => 'sometimes|required|date_format:H:i',
            ]);
    
            $jadwal->update($request->all());
    
            return response()->json(['message' => 'Jadwal berhasil diupdate', 'data' => $jadwal]);
        }
    
        public function destroy($id)
        {
            $jadwal = Jadwal::find($id);
    
            if (!$jadwal) {
                return response()->json(['message' => 'Jadwal tidak ditemukan'], 404);
            }
    
            $jadwal->delete();
    
            return response()->json(['message' => 'Jadwal berhasil dihapus']);
        }
}
