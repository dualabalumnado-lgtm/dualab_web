<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmpresaInteresada extends Model
{
    protected $table = 'empresas_interesadas';

    protected $fillable = [
        'lead_id',
        'nombre_empresa',
        'sector',
        'tamano',
        'municipio',
        'provincia',
        'necesidad',
    ];

    const UPDATED_AT = null;

    public function lead(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Lead::class, 'lead_id');
    }
}