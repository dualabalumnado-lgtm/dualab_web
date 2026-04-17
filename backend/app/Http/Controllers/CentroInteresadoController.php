<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CentroInteresadoController extends Controller
{
    public function show(Lead $lead): JsonResponse
    {
        if (!$lead->centro) {
            return response()->json(['message' => 'No encontrado'], 404);
        }

        return response()->json($lead->centro);
    }

    public function store(Request $request, Lead $lead): JsonResponse
    {
        if ($lead->centro) {
            return response()->json(['message' => 'Este lead ya tiene centro asociado'], 409);
        }

        $validated = $request->validate([
            'nombre'           => 'required|string|max:255',
            'municipio'        => 'nullable|string|max:100',
            'persona_contacto' => 'nullable|string|max:255',
        ]);

        $centro = $lead->centro()->create($validated);

        return response()->json($centro, 201);
    }

    public function update(Request $request, Lead $lead): JsonResponse
    {
        if (!$lead->centro) {
            return response()->json(['message' => 'No encontrado'], 404);
        }

        $validated = $request->validate([
            'nombre'           => 'sometimes|string|max:255',
            'municipio'        => 'nullable|string|max:100',
            'persona_contacto' => 'nullable|string|max:255',
        ]);

        $lead->centro->update($validated);

        return response()->json($lead->centro);
    }

    public function destroy(Lead $lead): JsonResponse
    {
        $lead->centro?->delete();

        return response()->json(null, 204);
    }
}
