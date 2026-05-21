<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Familia extends Model
{
    protected $fillable = [
        'nombre',
        'icono',
        'color',
        'imagen',
    ];

    public function microretos(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Microreto::class, 'familia_id');
    }
}
