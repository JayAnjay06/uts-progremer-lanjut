<?php

namespace App\Http\Controllers\API;

use App\Models\Siswa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\SiswaController;

class SiswaController extends Controller
{
    public function index()
    {
        return response()->json(Siswa::all());
    }

    public function show($id)
    {
        $siswa = Siswa::find($id);
        if ($siswa) {
            return response()->json($siswa);
        }
        return response()->json(['message' => 'Siswa not found'], 404);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'gender' => 'required|string|max:1',
        ]);

        $siswa = Siswa::create($request->all());
        return response()->json($siswa, 201);
    }

    public function update(Request $request, $id)
    {
        $siswa = Siswa::findOrFail($id);
        $siswa->update($request->all());
        return response()->json($siswa);
    }

    public function destroy($id)
    {
        $siswa = Siswa::findOrFail($id);
        $siswa->delete();
        return response()->json(['message' => 'Siswa deleted successfully']);
    }
}