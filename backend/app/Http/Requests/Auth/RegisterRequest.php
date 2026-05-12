<?php

namespace App\Http\Requests\Auth;

use App\Enums\UserRole;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role'     => ['required', 'string', Rule::enum(UserRole::class)],

            // exclude_if elimina el campo de validated() cuando el rol es alumno,
            // por lo que nunca se guarda en BD aunque el cliente lo envíe.
            // requiredIf lo exige para los otros dos roles.
            'cif' => [
                'exclude_if:role,' . UserRole::Alumno->value,
                Rule::requiredIf(fn () => in_array($this->input('role'), [
                    UserRole::Empresa->value,
                    UserRole::CentroEducativo->value,
                ])),
                'string',
                'max:9',
                'unique:users,cif',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'cif.required' => 'El CIF es obligatorio para empresas y centros educativos.',
            'cif.unique'   => 'Este CIF ya está registrado.',
            'cif.max'      => 'El CIF no puede superar los 9 caracteres.',
            'role.enum'    => 'El tipo de cuenta no es válido. Valores permitidos: alumno, centro_educativo, empresa.',
        ];
    }
}
