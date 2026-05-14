<?php

namespace Database\Seeders;

use App\Models\Familia;
use Illuminate\Database\Seeder;

class FamiliaSeeder extends Seeder
{
    public function run(): void
    {
        $familias = [
            ['nombre' => 'Actividades Físicas y Deportivas',        'icono' => '🏈', 'color' => 'bg-orange-500',  'imagen' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1280&h=720&fit=crop'],
            ['nombre' => 'Administración y Gestión',                'icono' => '📊', 'color' => 'bg-purple-500',  'imagen' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1280&h=720&fit=crop'],
            ['nombre' => 'Agraria',                                 'icono' => '🌱', 'color' => 'bg-green-600',   'imagen' => 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1280&h=720&fit=crop'],
            ['nombre' => 'Artes Gráficas',                         'icono' => '🖥️', 'color' => 'bg-pink-500',    'imagen' => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop'],
            ['nombre' => 'Artes y Artesanías',                     'icono' => '🎨', 'color' => 'bg-rose-500',    'imagen' => 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1280&h=720&fit=crop'],
            ['nombre' => 'Comercio y Marketing',                   'icono' => '📈', 'color' => 'bg-emerald-500', 'imagen' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&h=720&fit=crop'],
            ['nombre' => 'Edificación y Obra Civil',               'icono' => '🏗️', 'color' => 'bg-stone-500',   'imagen' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1280&h=720&fit=crop'],
            ['nombre' => 'Electricidad y Electrónica',             'icono' => '⚡', 'color' => 'bg-yellow-500',  'imagen' => 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1280&h=720&fit=crop'],
            ['nombre' => 'Energía y Agua',                         'icono' => '💧', 'color' => 'bg-cyan-500',    'imagen' => 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1280&h=720&fit=crop'],
            ['nombre' => 'Fabricación Mecánica',                   'icono' => '⚙️', 'color' => 'bg-zinc-500',    'imagen' => 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1280&h=720&fit=crop'],
            ['nombre' => 'Hostelería y Turismo',                   'icono' => '🏨', 'color' => 'bg-amber-500',   'imagen' => 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1280&h=720&fit=crop'],
            ['nombre' => 'Imagen Personal',                        'icono' => '💄', 'color' => 'bg-fuchsia-500', 'imagen' => 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1280&h=720&fit=crop'],
            ['nombre' => 'Imagen y Sonido',                        'icono' => '🎬', 'color' => 'bg-violet-500',  'imagen' => 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1280&h=720&fit=crop'],
            ['nombre' => 'Industrias Alimentarias',                'icono' => '🍗', 'color' => 'bg-lime-600',    'imagen' => 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&h=720&fit=crop'],
            ['nombre' => 'Industrias Extractivas',                 'icono' => '⛏️', 'color' => 'bg-neutral-600', 'imagen' => 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?w=1280&h=720&fit=crop'],
            ['nombre' => 'Informática y Comunicaciones',           'icono' => '💻', 'color' => 'bg-blue-500',    'imagen' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=720&fit=crop'],
            ['nombre' => 'Instalación y Mantenimiento',            'icono' => '🔧', 'color' => 'bg-slate-500',   'imagen' => 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1280&h=720&fit=crop'],
            ['nombre' => 'Madera, Mueble y Corcho',               'icono' => '🪵', 'color' => 'bg-orange-700',  'imagen' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1280&h=720&fit=crop'],
            ['nombre' => 'Marítimo Pesquera',                      'icono' => '🚢', 'color' => 'bg-sky-600',     'imagen' => 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1280&h=720&fit=crop'],
            ['nombre' => 'Química',                                'icono' => '🧪', 'color' => 'bg-teal-500',    'imagen' => 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1280&h=720&fit=crop'],
            ['nombre' => 'Sanidad',                                'icono' => '🩺', 'color' => 'bg-red-500',     'imagen' => 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1280&h=720&fit=crop'],
            ['nombre' => 'Seguridad y Medioambiente',              'icono' => '🌍', 'color' => 'bg-green-500',   'imagen' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1280&h=720&fit=crop'],
            ['nombre' => 'Servicios Socioculturales',              'icono' => '🏠', 'color' => 'bg-indigo-500',  'imagen' => 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1280&h=720&fit=crop'],
            ['nombre' => 'Textil, Confección y Piel',             'icono' => '👕', 'color' => 'bg-pink-400',    'imagen' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&h=720&fit=crop'],
            ['nombre' => 'Transporte y Mantenimiento de Vehículos','icono' => '🚗', 'color' => 'bg-blue-700',    'imagen' => 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1280&h=720&fit=crop'],
            ['nombre' => 'Vidrio y Cerámica',                      'icono' => '🏺', 'color' => 'bg-amber-700',   'imagen' => 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1280&h=720&fit=crop'],
        ];

        foreach ($familias as $data) {
            Familia::create($data);
        }
    }
}
