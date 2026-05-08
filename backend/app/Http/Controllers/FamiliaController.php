<?php

namespace App\Http\Controllers;

use App\Models\Familia;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FamiliaController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Familia::orderBy('nombre')->get());
    }

    public function show(Familia $familia): JsonResponse
    {
        return response()->json(
            $familia->load('microretos')
        );
    }
}
