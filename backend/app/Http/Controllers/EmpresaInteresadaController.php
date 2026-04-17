<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmpresaInteresadaController extends Controller
{
    public function show(Lead $lead): JsonResponse
    {
        if (!$lead->empresa) {
            return response()->json(['message' => 'No encontrado'], 404);
        }

        return response()->json($lead->empresa);
    }

    public function store(Request $request, Lead $lead): JsonResponse
    {
        if ($lead->empresa) {
            return response()->json(['message' => 'Este lead ya tiene empresa asociada'], 409);
        }

        $validated = $request->validate([
            'nombre_empresa' => 'required|string|max:255',
            'sector'         => 'nullable|string|max:100',
            'tamano'         => 'nullable|string|max:50',
            'municipio'      => 'nullable|string|max:100',
            'provincia'      => 'nullable|string|max:100',
            'necesidad'      => 'nullable|string',
        ]);

        $empresa = $lead->empresa()->create($validated);

        return response()->json($empresa, 201);
    }

    public function update(Request $request, Lead $lead): JsonResponse
    {
        if (!$lead->empresa) {
            return response()->json(['message' => 'No encontrado'], 404);
        }

        $validated = $request->validate([
            'nombre_empresa' => 'sometimes|string|max:255',
            'sector'         => 'nullable|string|max:100',
            'tamano'         => 'nullable|string|max:50',
            'municipio'      => 'nullable|string|max:100',
            'provincia'      => 'nullable|string|max:100',
            'necesidad'      => 'nullable|string',
        ]);

        $lead->empresa->update($validated);

        return response()->json($lead->empresa);
    }

    public function destroy(Lead $lead): JsonResponse
    {
        $lead->empresa?->delete();

        return response()->json(null, 204);
    }
}
