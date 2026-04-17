<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProblemaEmpresa; // Le decimos que use nuestro Modelo

class ProblemaEmpresaController extends Controller
{
    // Esta función recibe el "paquete" de datos ($request) del formulario
    public function store(Request $request)
    {
        // 1. EL RECEPCIONISTA REVISA: Validamos los datos
        $request->validate([
            'nombre_empresa' => 'required|string|max:255',
            'email_contacto' => 'required|email|max:255', // Comprueba que tenga formato @...
            'telefono_contacto' => 'nullable|string', // nullable = opcional
            'titulo_problema' => 'required|string|max:255',
            'descripcion_problema' => 'required|string',
            'tecnologias' => 'nullable|string',
        ]);

        // 2. EL RECEPCIONISTA GUARDA: Si todo está bien, crea la fila en la BD
        $problema = ProblemaEmpresa::create($request->all());

        // 3. EL RECEPCIONISTA RESPONDE: Le dice a Vue que todo ha ido genial (Código 201)
        return response()->json([
            'mensaje' => '¡Formulario enviado correctamente!',
            'data' => $problema
        ], 201);
    }
}