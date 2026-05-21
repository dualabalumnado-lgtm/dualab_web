<?php

namespace App\Http\Controllers;

use App\Models\Microreto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MicroretoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Microreto::with('familia');

        if ($request->filled('familia_id')) {
            $query->where('familia_id', $request->familia_id);
        }

        if ($request->filled('dificultad')) {
            $query->where('dificultad', $request->dificultad);
        }

        return response()->json($query->get());
    }

    public function show(Microreto $microreto): JsonResponse
    {
        return response()->json(
            $microreto->load('familia')
        );
    }
}
