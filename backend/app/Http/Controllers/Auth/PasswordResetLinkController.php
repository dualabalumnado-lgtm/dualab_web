<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Password;

class PasswordResetLinkController extends Controller
{
    public function store(ForgotPasswordRequest $request): JsonResponse
    {
        // Intentamos enviar el enlace, pero deliberadamente ignoramos
        // el valor de retorno para la respuesta HTTP.
        // Si el email no existe, Password::sendResetLink() no hace nada;
        // si existe, envía el correo. En ambos casos devolvemos el mismo 200.
        Password::sendResetLink($request->only('email'));

        return response()->json([
            'message' => 'Si el correo está registrado, recibirás un enlace de recuperación en breve.',
        ]);
    }
}
