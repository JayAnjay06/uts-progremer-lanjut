<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SiswaController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/siswas', [SiswaController::class, 'index']);
Route::get('/siswas/{id}', [SiswaController::class, 'show']);
Route::post('/siswas', [SiswaController::class, 'store']);
Route::put('/siswas/{id}', [SiswaController::class, 'update']);
Route::delete('/siswas/{id}', [SiswaController::class, 'destroy']);