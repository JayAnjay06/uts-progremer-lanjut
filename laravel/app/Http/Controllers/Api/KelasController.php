<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kelas;
use App\Http\Resources\KelasResource;
use Illuminate\Http\Request;

class KelasController extends Controller
{
    public function index()
    {
        return KelasResource::collection(Kelas::all());
    }

    public function store(StoreKelasRequest $request)
    {
        $kelas = Kelas::create($request->validated());
        return new KelasResource($kelas);
    }

    public function show(Kelas $kelas)
    {
        return new KelasResource($kelas);
    }

    public function update(UpdateKelasRequest $request, Kelas $kelas)
    {
        $kelas->update($request->validated());
        return new KelasResource($kelas);
    }

    public function destroy(Kelas $kelas)
    {
        $kelas->delete();
        return response()->noContent();
    }
}
