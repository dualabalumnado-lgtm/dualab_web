<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('microretos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('familia_id')->constrained('familias')->cascadeOnDelete();
            $table->string('titulo');
            $table->text('descripcion');
            $table->enum('dificultad', ['Básico', 'Intermedio', 'Avanzado']);
            $table->json('objetivos');
            $table->json('recursos');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('microretos');
    }
};
