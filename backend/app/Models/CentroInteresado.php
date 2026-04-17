<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CentroInteresado extends Model
{
    protected $table = 'centros_interesados';

    protected $fillable = [
        'lead_id',
        'nombre',
        'municipio',
        'persona_contacto',
    ];

    const UPDATED_AT = null;

    public function lead(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Lead::class, 'lead_id');
    }
}