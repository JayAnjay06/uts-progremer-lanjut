<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/siswas', App\Http\Controllers\Api\SiswaController::class);
Route::apiResource('/kelass', App\Http\Controllers\Api\KelasController::class);
Route::apiResource('/gurus', App\Http\Controllers\Api\GuruController::class);
Route::apiResource('/jadwals', App\Http\Controllers\Api\JadwalController::class);
Route::apiResource('/matapelajarans', App\Http\Controllers\Api\MataPelajaranController::class);