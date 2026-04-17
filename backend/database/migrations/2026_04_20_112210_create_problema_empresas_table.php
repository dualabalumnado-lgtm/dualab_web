<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('problema_empresas', function (Blueprint $table) {
            $table->id(); // Crea un ID único automático para cada empresa (1, 2, 3...)
            
            // Usamos 'string' para textos cortos (como el nombre o el email)
            $table->string('nombre_empresa');
            $table->string('email_contacto');
            
            // Le ponemos 'nullable()' porque el teléfono lo dejamos como opcional.
            // Así la base de datos no dará error si la empresa lo deja en blanco.
            $table->string('telefono_contacto')->nullable(); 
            
            $table->string('titulo_problema');
            
            // Usamos 'text' porque la descripción será larga (varios párrafos).
            // 'string' se quedaría corto porque tiene un límite de unos 255 caracteres.
            $table->text('descripcion_problema'); 
            
            $table->string('tecnologias')->nullable(); // Opcional también
            
            $table->timestamps(); // Crea automáticamente 'created_at' y 'updated_at' 
                                  // para saber qué día y hora rellenaron el formulario.
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('problema_empresas');
    }
};
