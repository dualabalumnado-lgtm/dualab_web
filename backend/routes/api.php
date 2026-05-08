<?php

use App\Http\Controllers\AlumnoInteresadoController;
use App\Http\Controllers\CentroInteresadoController;
use App\Http\Controllers\EmpresaInteresadaController;
use App\Http\Controllers\FamiliaController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\MicroretoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Familias profesionales
Route::get('familias', [FamiliaController::class, 'index']);
Route::get('familias/{familia}', [FamiliaController::class, 'show']);

// Microretos
Route::get('microretos', [MicroretoController::class, 'index']);
Route::get('microretos/{microreto}', [MicroretoController::class, 'show']);

// Leads
Route::apiResource('leads', LeadController::class);

Route::prefix('leads/{lead}')->group(function () {
    Route::get('empresa', [EmpresaInteresadaController::class, 'show']);
    Route::post('empresa', [EmpresaInteresadaController::class, 'store']);
    Route::patch('empresa', [EmpresaInteresadaController::class, 'update']);
    Route::delete('empresa', [EmpresaInteresadaController::class, 'destroy']);

    Route::get('centro', [CentroInteresadoController::class, 'show']);
    Route::post('centro', [CentroInteresadoController::class, 'store']);
    Route::patch('centro', [CentroInteresadoController::class, 'update']);
    Route::delete('centro', [CentroInteresadoController::class, 'destroy']);

    Route::get('alumno', [AlumnoInteresadoController::class, 'show']);
    Route::post('alumno', [AlumnoInteresadoController::class, 'store']);
    Route::patch('alumno', [AlumnoInteresadoController::class, 'update']);
    Route::delete('alumno', [AlumnoInteresadoController::class, 'destroy']);
});
