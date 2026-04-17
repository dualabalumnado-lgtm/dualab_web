<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('empresas_interesadas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lead_id')->constrained('leads')->cascadeOnDelete();
            $table->string('nombre_empresa');
            $table->string('sector')->nullable();
            $table->string('tamano')->nullable();
            $table->string('municipio')->nullable();
            $table->string('provincia')->nullable();
            $table->text('necesidad')->nullable();
            $table->timestamp('created_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('empresas_interesadas');
    }
};
