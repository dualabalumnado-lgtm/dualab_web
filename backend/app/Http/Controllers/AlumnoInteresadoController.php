<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AlumnoInteresadoController extends Controller
{
    public function show(Lead $lead): JsonResponse
    {
        if (!$lead->alumno) {
            return response()->json(['message' => 'No encontrado'], 404);
        }

        return response()->json($lead->alumno);
    }

    public function store(Request $request, Lead $lead): JsonResponse
    {
        if ($lead->alumno) {
            return response()->json(['message' => 'Este lead ya tiene alumno asociado'], 409);
        }

        $validated = $request->validate([
            'centro'  => 'required|string|max:255',
            'ciclo'   => 'nullable|string|max:100',
            'interes' => 'nullable|string',
        ]);

        $alumno = $lead->alumno()->create($validated);

        return response()->json($alumno, 201);
    }

    public function update(Request $request, Lead $lead): JsonResponse
    {
        if (!$lead->alumno) {
            return response()->json(['message' => 'No encontrado'], 404);
        }

        $validated = $request->validate([
            'centro'  => 'sometimes|string|max:255',
            'ciclo'   => 'nullable|string|max:100',
            'interes' => 'nullable|string',
        ]);

        $lead->alumno->update($validated);

        return response()->json($lead->alumno);
    }

    public function destroy(Lead $lead): JsonResponse
    {
        $lead->alumno?->delete();

        return response()->json(null, 204);
    }
}
