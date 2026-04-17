<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlumnoInteresado extends Model
{
    protected $table = 'alumnos_interesados';

    protected $fillable = [
        'lead_id',
        'centro',
        'ciclo',
        'interes',
    ];

    const UPDATED_AT = null;

    public function lead(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Lead::class, 'lead_id');
    }
}