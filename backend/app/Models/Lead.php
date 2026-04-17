<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'nombre',
        'email',
        'telefono',
        'tipo',
        'mensaje',
        'estado',
        'origen',
    ];

    protected $casts = [
        'tipo'   => 'string',
        'estado' => 'string',
    ];

    // Timestamps: solo created_at, sin updated_at
    const UPDATED_AT = null;

    // Relaciones
    public function empresa(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(EmpresaInteresada::class, 'lead_id');
    }

    public function centro(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(CentroInteresado::class, 'lead_id');
    }

    public function alumno(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(AlumnoInteresado::class, 'lead_id');
    }
}