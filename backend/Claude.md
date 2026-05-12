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