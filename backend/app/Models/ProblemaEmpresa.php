<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProblemaEmpresa extends Model
{
 use HasFactory;

    // Esta es nuestra "Lista VIP" por seguridad
    protected $fillable = [
        'nombre_empresa',
        'email_contacto',
        'telefono_contacto',
        'titulo_problema',
        'descripcion_problema',
        'tecnologias'
    ];
}