# DuaLab Web

Plataforma que conecta alumnado, empresas y centro educativo.

## Stack
- **Backend:** Laravel (PHP) — API REST
- **Frontend:** Vue 3 SPA — Vite + Vue Router + Pinia

## Levantar el proyecto

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Ramas
- `main` → código estable
- `develop` → rama de trabajo