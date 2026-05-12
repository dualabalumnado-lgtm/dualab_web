<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Autentica al usuario y emite un token Sanctum con la ability de su rol.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();

        $user    = Auth::user();
        $ability = $user->role->value;

        $token = $user->createToken('auth_token', [$ability])->plainTextToken;

        return response()->json([
            'message' => 'Inicio de sesión correcto.',
            'token'   => $token,
            'user'    => $user,
        ]);
    }

    /**
     * Revoca el token actual del usuario (equivalente a logout en API).
     */
    public function destroy(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sesión cerrada con éxito.',
        ]);
    }
}
