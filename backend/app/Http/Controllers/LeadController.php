<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class LeadController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Lead::with(['empresa', 'centro', 'alumno']);

        if ($request->filled('estado')) {
            $query->where('estado', $request->estado);
        }
        if ($request->filled('tipo')) {
            $query->where('tipo', $request->tipo);
        }
        if ($request->filled('origen')) {
            $query->where('origen', $request->origen);
        }

        return response()->json($query->latest('created_at')->get());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nombre'   => 'required|string|max:255',
            'email'    => 'required|email|max:255',
            'telefono' => 'nullable|string|max:20',
            'tipo'     => ['required', Rule::in(['empresa', 'centro', 'alumno'])],
            'mensaje'  => 'nullable|string',
            'estado'   => ['nullable', Rule::in(['nuevo', 'contactado', 'convertido', 'descartado'])],
            'origen'   => 'nullable|string|max:100',

            'datos.nombre_empresa'   => 'required_if:tipo,empresa|string|max:255',
            'datos.sector'           => 'nullable|string|max:100',
            'datos.tamano'           => 'nullable|string|max:50',
            'datos.municipio'        => 'nullable|string|max:100',
            'datos.provincia'        => 'nullable|string|max:100',
            'datos.necesidad'        => 'nullable|string',

            'datos.nombre'           => 'required_if:tipo,centro|string|max:255',
            'datos.persona_contacto' => 'nullable|string|max:255',

            'datos.centro'           => 'required_if:tipo,alumno|string|max:255',
            'datos.ciclo'            => 'nullable|string|max:100',
            'datos.interes'          => 'nullable|string',
        ]);

        $lead = Lead::create([
            'nombre'   => $validated['nombre'],
            'email'    => $validated['email'],
            'telefono' => $validated['telefono'] ?? null,
            'tipo'     => $validated['tipo'],
            'mensaje'  => $validated['mensaje'] ?? null,
            'estado'   => $validated['estado'] ?? 'nuevo',
            'origen'   => $validated['origen'] ?? null,
        ]);

        $datos = $request->input('datos', []);

        match ($validated['tipo']) {
            'empresa' => $lead->empresa()->create([
                'nombre_empresa' => $datos['nombre_empresa'],
                'sector'         => $datos['sector'] ?? null,
                'tamano'         => $datos['tamano'] ?? null,
                'municipio'      => $datos['municipio'] ?? null,
                'provincia'      => $datos['provincia'] ?? null,
                'necesidad'      => $datos['necesidad'] ?? null,
            ]),
            'centro' => $lead->centro()->create([
                'nombre'           => $datos['nombre'],
                'municipio'        => $datos['municipio'] ?? null,
                'persona_contacto' => $datos['persona_contacto'] ?? null,
            ]),
            'alumno' => $lead->alumno()->create([
                'centro'  => $datos['centro'],
                'ciclo'   => $datos['ciclo'] ?? null,
                'interes' => $datos['interes'] ?? null,
            ]),
        };

        return response()->json($lead->load(['empresa', 'centro', 'alumno']), 201);
    }

    public function show(Lead $lead): JsonResponse
    {
        return response()->json($lead->load(['empresa', 'centro', 'alumno']));
    }

    public function update(Request $request, Lead $lead): JsonResponse
    {
        $validated = $request->validate([
            'nombre'   => 'sometimes|string|max:255',
            'email'    => 'sometimes|email|max:255',
            'telefono' => 'nullable|string|max:20',
            'tipo'     => ['sometimes', Rule::in(['empresa', 'centro', 'alumno'])],
            'mensaje'  => 'nullable|string',
            'estado'   => ['sometimes', Rule::in(['nuevo', 'contactado', 'convertido', 'descartado'])],
            'origen'   => 'nullable|string|max:100',
        ]);

        $lead->update($validated);

        return response()->json($lead->load(['empresa', 'centro', 'alumno']));
    }

    public function destroy(Lead $lead): JsonResponse
    {
        $lead->delete();

        return response()->json(null, 204);
    }
}
