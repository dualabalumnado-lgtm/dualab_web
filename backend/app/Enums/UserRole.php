<?php

namespace App\Enums;

enum UserRole: string
{
    case Alumno          = 'alumno';
    case CentroEducativo = 'centro_educativo';
    case Empresa         = 'empresa';
}
