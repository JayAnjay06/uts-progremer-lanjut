<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GuruController;
use App\Http\Controllers\Api\KelasController;
use App\Http\Controllers\Api\NilaiController;
use App\Http\Controllers\Api\SiswaController;
use App\Http\Controllers\Api\MataPelajaranController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/gurus', GuruController::class);
Route::apiResource('/kelas', KelasController::class);
Route::apiResource('/siswas', SiswaController::class);
Route::apiResource('/matapelajarans', MataPelajaranController::class);
Route::apiResource('/nilais', NilaiController::class);
