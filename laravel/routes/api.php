<?php

use App\Http\Controllers\Api\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test',function (Request $request){
    return response()-> json([
        'message' => 'login berhasil'
    ]);
});

Route::get('/register', [RegisterController::class, 'store']);