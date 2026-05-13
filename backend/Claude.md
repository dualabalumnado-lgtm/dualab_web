# Contexto del Proyecto y Reglas para Claude

## Arquitectura
- Backend: Laravel 13 (Modo API estricto).
- Frontend: Vue 3 (SPA totalmente separada).
- Base de datos: MySQL.
- Autenticación: Laravel Breeze API + Sanctum (Tokens, NO sesiones de cookies).

## Reglas de Negocio (Usuarios)
El sistema requiere registro para poder hacer login. Existen exactamente 3 tipos de cuentas:
1. `alumno`
2. `centro_educativo`
3. `empresa`

## Reglas de Seguridad (Obligatorias)
- Usar siempre `FormRequest` para validación.
- Contraseñas siempre hasheadas (Bcrypt).
- Prevenir SQL Injection usando Eloquent.
- Respuestas siempre en formato JSON estandarizado con códigos HTTP correctos.

## Formato de Respuesta (Para el desarrollador Junior)
Siempre que introduzcas un concepto técnico o de seguridad en tu código, debes explicarlo usando esta estructura exacta:
1. ¿Qué hace?
2. ¿Cómo funciona?
3. ¿Por qué lo has implementado así en este código?
4. Enséñame a leer este código como un Senior y detectar vulnerabilidades.

/* RESUMEN REALIZADO HASTA AHORA LLOGING-AUTH

Estado completo del proyecto — dualab_web/backend

Contexto (CLAUDE.md)

Laravel 13 · API estricta · MySQL · Sanctum tokens (sin cookies/sesiones) · 3 roles: alumno, centro_educativo, empresa · Siempre FormRequest · Respuestas JSON estandarizadas.

Archivos creados

app/Enums/UserRole.php

PHP backed enum con los 3 roles como constantes tipadas. Fuente única de verdad para los valores string de rol.

app/Http/Requests/Auth/RegisterRequest.php

FormRequest de registro. Valida name, email, password + confirmed, role (via Rule::enum), y cif con doble regla: exclude_if:role,alumno (lo descarta de validated() si es alumno) + Rule::requiredIf (lo exige para empresa y centro_educativo). Mensajes de error en español.

app/Http/Requests/Auth/ForgotPasswordRequest.php

FormRequest mínimo: solo valida que email sea string válido. La lógica anti-enumeración vive en el controller, no aquí.

Archivos modificados

database/migrations/0001_01_01_000000_create_users_table.php

Añadidas dos columnas a users:

role → ENUM('alumno','centro_educativo','empresa') not null

cif → VARCHAR(9) nullable unique

app/Models/User.php

#[Fillable] ampliado a ['name', 'email', 'password', 'role', 'cif']

Cast 'role' => UserRole::class (Eloquent devuelve el enum, no el string crudo)

app/Http/Controllers/Auth/RegisteredUserController.php

Reescrito. Recibe RegisterRequest, llama User::create($request->validated()), dispara evento Registered, crea token Sanctum, devuelve 201 con { message, token, user }.

app/Http/Requests/Auth/LoginRequest.php

throttleKey() cambiado a solo IP ('login|'.$this->ip()) — bloquea la IP entera, no por email.

RateLimiter::hit() con decay de 900 segundos (15 min) y máximo 5 intentos.

Eliminado remember (sin sesiones).

app/Http/Controllers/Auth/AuthenticatedSessionController.php

Reescrito completamente.

store(): llama $request->authenticate(), obtiene Auth::user(), extrae $user->role->value como ability, emite token Sanctum con esa ability, devuelve 200 con { message, token, user }.

destroy(): revoca solo el token actual con currentAccessToken()->delete(), devuelve 200.

app/Http/Controllers/Auth/PasswordResetLinkController.php

Reescrito. Llama Password::sendResetLink() e ignora su valor de retorno — siempre devuelve 200 con mensaje genérico. Elimina la bifurcación 200/422 que permitía enumeración de usuarios.

routes/auth.php

Logout: middleware cambiado de auth a auth:sanctum.

Forgot-password: añadido throttle:5,15 al array de middlewares.

Flujo completo implementado



POST /register → ForgotPasswordRequest → User::create() → token(ability) → 201

POST /login → LoginRequest (RateLimit IP/5/900s) → Auth::attempt() → token(ability) → 200

POST /logout → auth:sanctum → currentAccessToken()->delete() → 200

POST /forgot-password → throttle:5,15 → Password::sendResetLink() [resultado ignorado] → 200 siempre

Pendiente / no tocado

NewPasswordController (reset con token), verificación de email, rutas protegidas por ability.  */