<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;

class RegisterController extends Controller
{
    //
    public function store(Request $request) {
        
        $request-> validate([
            'name' => ['required', 'string', 'max:255',],
            'email' => ['required', 'string', 'max:255','unique:users,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'created_by' => $request->name,
        ]);

        event(new Registered($user));

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'user register berhasil',
            'token' => $token,
            'user' => $user
        ]);
    }
}
