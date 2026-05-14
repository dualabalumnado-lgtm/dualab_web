<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Microreto extends Model
{
    protected $fillable = [
        'familia_id',
        'titulo',
        'descripcion',
        'dificultad',
        'objetivos',
        'recursos',
    ];

    protected $casts = [
        'objetivos' => 'array',
        'recursos'  => 'array',
    ];

    public function familia(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Familia::class, 'familia_id');
    }
}
