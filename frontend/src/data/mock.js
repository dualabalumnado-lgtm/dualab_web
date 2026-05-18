export { familias } from "./familias.js"

export const microretos = [
  // 1 · Actividades Físicas y Deportivas
  {
    id: 1, familiaId: 1, dificultad: "Básico",
    titulo: "Diseña una sesión de calentamiento",
    descripcion: "Planifica un calentamiento de 15 min adaptado a un grupo de secundaria.",
    objetivos: ["Conocer las fases del calentamiento general y específico", "Adaptar los ejercicios a la edad y nivel del grupo", "Respetar la progresión de intensidad"],
    recursos: ["Ficha de planificación de sesión", "Cronómetro", "Pizarra o pizarra digital", "Espacio polideportivo"],
    solucion: {
      tipo: 'Ficha de sesión',
      extracto: `SESIÓN DE CALENTAMIENTO — 2ºA ESO
Duración: 15 min · Nivel: Principiante · Espacio: Pabellón

FASE GENERAL (5 min)
• Trote continuo alrededor del campo × 3 vueltas
• Movilidad articular ascendente: tobillos → rodillas → caderas → hombros
• Skipping bajo y alto × 10 m ida y vuelta

FASE ESPECÍFICA (8 min)
• Sprints cortos 10 m × 4 rep. (30'' descanso entre series)
• Juego de reacción: "1-2-3 toca" con variantes de estímulo
• Estiramientos dinámicos de cuádriceps y gemelos

VUELTA A LA CALMA (2 min)
• Respiraciones profundas guiadas
• Estiramientos estáticos de los principales grupos musculares`,
      puntos: [
        'Progresión de baja a alta intensidad respetada en las tres fases',
        'Adaptado a 12-14 años sin material específico necesario',
        'Componente lúdico integrado en la fase específica',
      ],
    }
  },
  {
    id: 2, familiaId: 1, dificultad: "Intermedio",
    titulo: "Evalúa la condición física de un alumno",
    descripcion: "Aplica los test de Cooper y Ruffier e interpreta los resultados.",
    objetivos: ["Aplicar correctamente los protocolos de los test", "Interpretar los valores obtenidos con baremos oficiales", "Elaborar un informe con recomendaciones de mejora"],
    recursos: ["Pista de atletismo o pista polideportiva", "Pulsómetro", "Hojas de registro", "Tablas de baremos por edad y sexo"],
    solucion: {
      tipo: 'Informe de condición física',
      extracto: `INFORME DE EVALUACIÓN FÍSICA — TEST COOPER + RUFFIER
Alumno: Diego Santana · 2º CFGM Actividades Físicas y Deportivas
Evaluado: 14 años · Sexo: Masculino · Fecha: 18/03/2025

TEST DE COOPER (12 minutos)
  Distancia recorrida: 2.340 m
  Baremo edad 14 años (EUROFIT): Bien (rango Bien: 2.200–2.600 m)
  VO2max estimado: 44,8 ml/kg·min

TEST DE RUFFIER (30 sentadillas en 45 s)
  P0 (reposo): 72 ppm · P1 (tras ejercicio): 116 ppm · P2 (1 min recuperación): 88 ppm
  Índice Ruffier = (P0 + P1 + P2 – 200) / 10 = 7,6
  Valoración: Buena capacidad cardíaca (< 8 = Buena)

RECOMENDACIONES
  • Mejorar la resistencia aeróbica: 2 sesiones/semana de carrera continua 30 min
  • Mantener el trabajo de fuerza de tren inferior (sentadillas y zancadas)
  • Repetir evaluación en junio para controlar evolución`,
      puntos: [
        'Protocolos Cooper y Ruffier ejecutados correctamente con registro de tiempo',
        'Resultados interpretados con baremos oficiales EUROFIT por edad y sexo',
        'Recomendaciones individualizadas basadas en los valores obtenidos',
      ],
    }
  },
  {
    id: 3, familiaId: 1, dificultad: "Avanzado",
    titulo: "Programa una temporada deportiva",
    descripcion: "Diseña la periodización anual de un equipo amateur de fútbol sala.",
    objetivos: ["Aplicar los principios del entrenamiento deportivo", "Distribuir las cargas a lo largo de la temporada", "Integrar competición, entrenamiento y recuperación"],
    recursos: ["Software de planificación deportiva (Excel o similar)", "Manual de periodización del entrenamiento", "Calendario competitivo de la federación", "Fichas de seguimiento de jugadores"],
    solucion: {
      tipo: 'Plan de temporada deportiva',
      extracto: `PERIODIZACIÓN ANUAL — FÚTBOL SALA AMATEUR
Alumna: Carla Jiménez · 2º CFGS Animación de Actividades Físicas
Equipo: CD Rápido Alcalá · Categoría: 2ª Regional · Temporada 2024-25

ESTRUCTURA DE LA TEMPORADA (10 meses)
  Pretemporada (jul–ago): 8 semanas · Foco: base aeróbica y fuerza general
  Período competitivo I (sep–dic): 18 semanas · Foco: mantenimiento + táctica
  Período de transición (ene): 2 semanas · Foco: recuperación activa
  Período competitivo II (feb–may): 18 semanas · Foco: puesta a punto y play-off

DISTRIBUCIÓN DE CARGAS (escala 1–10)
  Pretemporada: Volumen 8 / Intensidad 5 → carga total alta
  Competitivo I:  Volumen 6 / Intensidad 8 → picos en semanas de clásicos
  Transición:     Volumen 3 / Intensidad 3 → recuperación biológica
  Competitivo II: Volumen 5 / Intensidad 9 → máxima intensidad play-off

MICROCICLO TIPO (semana competición)
  Lun: descanso · Mar: técnico-táctico 90' · Mié: físico 60'
  Jue: táctica colectiva 90' · Vie: activación 45' · Sáb: partido`,
      puntos: [
        'Estructura de macrociclos con periodización doble ajustada al calendario federativo',
        'Ondulación de cargas respeta el principio de supercompensación',
        'Microciclo tipo adaptado a equipos amateur con 3–4 sesiones semanales',
      ],
    }
  },

  // 2 · Administración y Gestión
  {
    id: 4, familiaId: 2, dificultad: "Básico",
    titulo: "Elabora una nómina",
    descripcion: "Calcula una nómina completa con IRPF y Seguridad Social.",
    objetivos: ["Identificar los conceptos retributivos de una nómina", "Aplicar los tipos de cotización a la Seguridad Social", "Calcular la retención de IRPF según tablas"],
    recursos: ["Modelo oficial de recibo de salarios", "Tablas IRPF vigentes de la AEAT", "Convenio colectivo de referencia", "Calculadora o hoja Excel"],
    solucion: {
      tipo: 'Recibo de salarios',
      extracto: `RECIBO DE SALARIOS — Empresa Ficticia S.L.
Trabajador: Carlos Martínez Ruiz · DNI: 12345678A
Puesto: Técnico de administración · Grupo 3
Período: marzo 2024 · Contrato: Indefinido jornada completa

DEVENGOS
  Salario base ..................... 1.450,00 €
  Plus de transporte ...............    85,00 €
  Plus de productividad ............   120,00 €
  TOTAL DEVENGOS ................... 1.655,00 €

DEDUCCIONES
  Cotización SS trabajador (6,35 %) ..  105,09 €
  IRPF (tipo 14 %) .................   231,70 €
  TOTAL DEDUCCIONES .................   336,79 €

LÍQUIDO A PERCIBIR ............... 1.318,21 €`,
      puntos: [
        'Tipos de cotización SS del trabajador aplicados según tabla vigente',
        'IRPF calculado con tablas AEAT para el nivel de ingresos',
        'Formato y conceptos ajustados al modelo oficial del SEPE',
      ],
    }
  },
  {
    id: 5, familiaId: 2, dificultad: "Intermedio",
    titulo: "Redacta un contrato de trabajo",
    descripcion: "Crea un contrato indefinido a jornada completa ajustado al ET.",
    objetivos: ["Conocer los elementos esenciales del contrato laboral", "Aplicar la normativa del Estatuto de los Trabajadores", "Redactar cláusulas correctas y sin ambigüedades"],
    recursos: ["Estatuto de los Trabajadores (BOE)", "Modelos oficiales del SEPE", "Convenio colectivo del sector", "Guía de contratación laboral"],
    solucion: {
      tipo: 'Contrato de trabajo',
      extracto: `CONTRATO DE TRABAJO INDEFINIDO A JORNADA COMPLETA
Alumna: Paula Ferrer · 2º CFGS Administración y Finanzas

En Madrid, a 10 de abril de 2025

EMPRESA: Servicios Integrales Nexo S.L. · CIF: B-87654321
TRABAJADOR/A: Alejandro Mora Blanco · DNI: 45678912C

CLÁUSULAS PRINCIPALES
  1. Objeto: prestación de servicios como Técnico/a Contable (Grupo 3 Convenio Oficinas)
  2. Duración: indefinida — inicio 12/05/2025, sin período de prueba pactado
  3. Jornada: 40 h/semana distribuidas de lunes a viernes (8:00–17:00)
  4. Salario: 1.650 €/mes brutos (14 pagas) según convenio
  5. Lugar: sede social c/ Preciados 8, Madrid + posibilidad teletrabajo hasta 20 %
  6. Vacaciones: 23 días hábiles anuales conforme al art. 38 ET
  7. Descanso: 2 días semanales (sábado y domingo)

FIRMA DE AMBAS PARTES + Copia básica entregada al SEPE en plazo de 10 días`,
      puntos: [
        'Todas las cláusulas obligatorias del art. 8 ET incluidas y correctamente redactadas',
        'Grupo profesional y salario ajustados al Convenio Colectivo de Oficinas y Despachos',
        'Referencia expresa a la copia básica para el SEPE dentro del plazo legal de 10 días',
      ],
    }
  },
  {
    id: 6, familiaId: 2, dificultad: "Avanzado",
    titulo: "Cierre contable mensual",
    descripcion: "Realiza el asiento de cierre y el balance de comprobación de una pyme ficticia.",
    objetivos: ["Regularizar cuentas de ingresos y gastos", "Elaborar el balance de situación y la cuenta de resultados", "Detectar y corregir errores contables"],
    recursos: ["Plan General Contable (PGC)", "Software contable (ContaPlus o similar)", "Hoja de trabajo contable", "Libro Diario y Mayor de la empresa ficticia"],
    solucion: {
      tipo: 'Cierre contable mensual',
      extracto: `CIERRE CONTABLE — MARZO 2025
Alumno: Raúl Pedraza · 2º CFGS Administración y Finanzas
Empresa ficticia: Talleres Metálicos Bernal S.L.

ASIENTOS DE REGULARIZACIÓN (31/03/2025)
  [700] Ventas de mercaderías ........... 48.500,00
       a [129] Resultado del ejercicio .         48.500,00
  [129] Resultado del ejercicio ......... 39.210,00
       a [600] Compras de mercaderías ...         22.300,00
       a [621] Arrendamientos ............          4.800,00
       a [640] Sueldos y salarios .........        12.110,00

BALANCE DE COMPROBACIÓN (sumas y saldos)
  DEBE total: 312.450,00 € = HABER total: 312.450,00 € ✓
  Resultado neto del mes: +9.290,00 € (beneficio)

VERIFICACIONES REALIZADAS
  ✓ Cuadre de sumas del Mayor con el Balance
  ✓ Conciliación bancaria sin diferencias
  ✓ IVA repercutido 21 % declarado en modelo 303`,
      puntos: [
        'Asientos de regularización cierran correctamente cuentas de ingresos y gastos al grupo 129',
        'Balance de comprobación cuadrado sin diferencias entre Debe y Haber',
        'Resultado mensual calculado y verificado con la conciliación bancaria',
      ],
    }
  },

  // 3 · Agraria
  {
    id: 7, familiaId: 3, dificultad: "Básico",
    titulo: "Identifica plagas comunes",
    descripcion: "Clasifica 10 plagas frecuentes en cultivos hortícolas y su tratamiento.",
    objetivos: ["Reconocer visualmente los síntomas de cada plaga", "Asociar cada plaga con su agente causal", "Proponer tratamientos integrados de bajo impacto"],
    recursos: ["Guía fotográfica de plagas hortícolas", "Muestras de plantas afectadas o fotografías", "Registro de productos fitosanitarios autorizados", "Lupa de campo"],
    solucion: {
      tipo: 'Tabla de identificación de plagas',
      extracto: `TABLA DE PLAGAS HORTÍCOLAS — Identificación y control
Alumna: Nuria Valls · 1º CFGM Producción Agroecológica

PLAGA             | CULTIVO   | SÍNTOMAS                   | TRATAMIENTO
Mosca blanca      | Tomate    | Hoja pegajosa, melaza      | Beauveria bassiana / jabón potásico
Pulgón verde      | Lechuga   | Enrollamiento foliar       | Aceite de neem / crisopa (control bio)
Araña roja        | Pimiento  | Puntos blancos en hoja     | Phytoseiulus persimilis / acaricida
Trips             | Pepino    | Plateado en fruto y hoja   | Amblyseius cucumeris / spinosad
Minador de hojas  | Apio      | Galerías serpenteantes     | Trampas cromotrópicas + Dyne-Amide
Orugas (noctuidos)| Repollo   | Perforaciones en hojas     | Bacillus thuringiensis var. kurstaki
Pulgón negro      | Haba      | Colonia base del tallo     | Caldo de ortiga + depredadores
Cochinilla alg.   | Berenjena | Algodones blancos en tallo | Aceite parafínico + limpieza manual
Nematodos         | Zanahoria | Agallamiento de raíces     | Rotación con tagetes / solarización
Oidio             | Calabacín | Polvo blanco en hojas      | Azufre mojable 80 % WG`,
      puntos: [
        'Las 10 plagas identificadas por síntoma visual específico del cultivo afectado',
        'Tratamientos priorizando control biológico compatible con producción integrada',
        'Productos fitosanitarios verificados en el Registro Oficial del MAPA',
      ],
    }
  },
  {
    id: 8, familiaId: 3, dificultad: "Intermedio",
    titulo: "Plan de riego por goteo",
    descripcion: "Diseña un sistema de riego para una parcela de 500 m² con tomate.",
    objetivos: ["Calcular las necesidades hídricas del cultivo", "Dimensionar tuberías, goteros y presión necesaria", "Elaborar un plano del sistema de riego"],
    recursos: ["Software de diseño de riego (NetAfim o similar)", "Datos climáticos de la zona (ETP)", "Catálogo de materiales de riego", "Plano de la parcela a escala"],
    solucion: {
      tipo: 'Informe técnico + plano',
      extracto: `DISEÑO DE RIEGO POR GOTEO — Parcela tomate 500 m²
Alumno: Javier Rueda · CFGS Paisajismo y Medio Rural

NECESIDADES HÍDRICAS
  ETP julio (zona): 180 mm/mes → 6,0 l/m²·día
  Kc fase cuajado: 1,15 → ETc = 6,9 l/m²·día
  Consumo total parcela: 3.450 l/día

DISEÑO DEL SISTEMA
  Goteros autocompensantes: 4 l/h, separación 0,5 m
  Laterales PE 16 mm: 3 ramales × 20 m (60 m total)
  Tubería principal PE 25 mm — presión entrada 2,5 bar
  Tiempo de riego: 1,73 h/riego × 2 riegos/día

LISTA DE MATERIALES
  • 60 m tubería PE 16 mm + 200 goteros 4 l/h
  • Filtro de mallas 120 mesh + programador 2 zonas
  • Manómetro y válvula reguladora de presión`,
      puntos: [
        'ETP calculada con datos climáticos reales del SIAR de la zona',
        'Dimensionado de presiones verificado con pérdida de carga < 10 %',
        'Plano de la parcela adjunto a escala 1:100 en AutoCAD',
      ],
    }
  },
  {
    id: 9, familiaId: 3, dificultad: "Avanzado",
    titulo: "Proyecto de agricultura ecológica",
    descripcion: "Elabora un plan de conversión a producción ecológica certificada para una finca.",
    objetivos: ["Conocer la normativa de producción ecológica (Reg. UE 848/2018)", "Planificar la rotación de cultivos y la gestión del suelo", "Elaborar el cuaderno de campo y el plan de negocio"],
    recursos: ["Reglamento UE 848/2018", "Guía de conversión a ecológico del MAPA", "Fichas técnicas de abonos y fitosanitarios autorizados", "Hoja de cálculo para el plan de negocio"],
    solucion: {
      tipo: 'Plan de conversión a ecológico',
      extracto: `PLAN DE CONVERSIÓN A PRODUCCIÓN ECOLÓGICA
Alumno: Tomás Guerrero · CFGS Gestión Forestal y del Medio Natural
Finca: El Olivar de Abajo · Municipio: Jaén · Superficie: 4,5 ha (olivar)

PERÍODO DE CONVERSIÓN (Reg. UE 848/2018, art. 10)
  Inicio: 15/01/2025 · Fin previsto conversión: 15/01/2027 (24 meses)
  Organismo de control notificado: CAAE (ES-ECO-001-AN)

GESTIÓN DEL SUELO
  Abonado verde: veza + cebada en calles alternas (nov–feb)
  Enmienda orgánica: compost de alpechín maduro 3 t/ha (marzo)
  Prohibición: ningún producto sintético desde fecha de notificación

PROTECCIÓN FITOSANITARIA (productos autorizados Reg. UE 848)
  Repilo: caldo bordelés (Cu ≤ 6 kg/ha/año) · Mosca del olivo: trampas + Beauveria

PLAN ECONÓMICO-FINANCIERO (3 años)
  Coste conversión: 2.800 € · Prima PAC eco: +250 €/ha → +1.125 €/año
  Precio venta AOVE eco estimado: 6,50 €/kg vs. 3,20 € convencional`,
      puntos: [
        'Período de conversión de 24 meses ajustado al art. 10 del Reg. UE 848/2018',
        'Plan fitosanitario basado exclusivamente en productos de la lista positiva MAPA',
        'Análisis coste-beneficio con primas PAC y diferencial de precio en mercado ecológico',
      ],
    }
  },

  // 4 · Artes Gráficas
  {
    id: 10, familiaId: 4, dificultad: "Básico",
    titulo: "Maqueta una tarjeta de visita",
    descripcion: "Diseña una tarjeta de visita profesional respetando márgenes de sangrado.",
    objetivos: ["Configurar un documento con sangrado y zona de seguridad", "Aplicar tipografía y color de forma coherente", "Exportar en formato listo para imprenta"],
    recursos: ["Adobe Illustrator o Affinity Designer", "Guía de identidad corporativa de ejemplo", "Papel A4 para impresión de prueba", "Regla y cúter para maqueta física"],
    solucion: {
      tipo: 'Archivo de diseño',
      extracto: `TARJETA DE VISITA — PROYECTO FINAL
Alumna: Marta Sáez · 1º CFGS Diseño y Artes Gráficas

ESPECIFICACIONES DEL DOCUMENTO
  Dimensiones: 90 × 55 mm + 3 mm sangrado (96 × 61 mm)
  Zona de seguridad: 3 mm interior por lado
  Modo de color: CMYK · Perfil: ISO Coated v2 300%
  Resolución imágenes: 300 ppp mínimo

DECISIONES DE DISEÑO
  Tipografía: Montserrat SemiBold (nombre) + Light (datos)
  Color principal: C100 M72 Y0 K30 (#1A365D)
  Logo: vectorial, sin efectos de transparencia
  Fondo: blanco K0 (no usar papel blanco del perfil)

ENTREGA
  • Archivo .ai original con capas nombradas y organizadas
  • PDF/X-1a para imprenta verificado con Acrobat Preflight
  • Prueba en papel A4 recortada a tamaño real`,
      puntos: [
        'Sangrado y zona de seguridad configurados correctamente en Illustrator',
        'Colores convertidos a CMYK con perfil ISO Coated v2 300%',
        'PDF/X-1a supera Preflight sin errores ni advertencias',
      ],
    }
  },
  {
    id: 11, familiaId: 4, dificultad: "Intermedio",
    titulo: "Prepara un archivo para imprenta",
    descripcion: "Exporta un folleto DL en PDF/X-1a con perfiles de color CMYK correctos.",
    objetivos: ["Convertir imágenes RGB a CMYK con perfil ISO Coated", "Configurar la exportación PDF/X-1a en InDesign", "Verificar el archivo con Preflight antes de entregar"],
    recursos: ["Adobe InDesign", "Perfil ICC ISO Coated v2", "Acrobat Professional para verificación", "Especificaciones técnicas de la imprenta"],
    solucion: {
      tipo: 'Informe preflight PDF/X-1a',
      extracto: `INFORME DE PREFLIGHT — FOLLETO DL PARA IMPRENTA
Alumna: Sofía Ramos · 2º CFGS Diseño y Producción Editorial
Documento: Folleto DL (99 × 210 mm) · 2 caras · Impresión offset 4/4

CONFIGURACIÓN DEL DOCUMENTO (InDesign CC)
  Sangrado: 3 mm todos los lados · Zona de seguridad: 5 mm interior
  Modo de color: CMYK · Perfil: ISO Coated v2 300% (Fogra39)
  Resolución de imágenes: mínimo 300 ppp verificado

CONVERSIÓN DE IMÁGENES
  RGB → CMYK: 4 imágenes convertidas con perfil Fogra39
  Imagen portada (hero): 350 ppp · Imagen interior: 310 ppp ✓
  Texto negro: 100K (no negro enriquecido) para cuerpos < 14 pt

RESULTADOS PREFLIGHT ACROBAT (PDF/X-1a)
  Errores: 0 ✓
  Advertencias: 0 ✓
  Fuentes incrustadas: 3/3 ✓ (Helvetica Neue, Garamond, IcoMoon)
  Transparencias aplanadas: sí (compatibilidad Acrobat 4) ✓`,
      puntos: [
        'PDF/X-1a exportado sin errores ni advertencias en el Preflight de Acrobat Pro',
        'Todas las imágenes convertidas a CMYK con perfil Fogra39 a ≥ 300 ppp',
        'Fuentes incrustadas y transparencias aplanadas según especificación de imprenta',
      ],
    }
  },
  {
    id: 12, familiaId: 4, dificultad: "Avanzado",
    titulo: "Flujo de trabajo editorial completo",
    descripcion: "Maqueta y gestiona la producción de una revista de 16 páginas desde InDesign.",
    objetivos: ["Crear un libro InDesign con secciones y páginas maestras", "Gestionar estilos de párrafo y carácter coherentes", "Coordinar la producción y entrega de archivos a imprenta"],
    recursos: ["Adobe InDesign CC", "Adobe Bridge para gestión de imágenes", "Servidor compartido o Dropbox para flujo colaborativo", "Checklist de entrega a imprenta"],
    solucion: {
      tipo: 'Estructura de libro InDesign',
      extracto: `FLUJO EDITORIAL — REVISTA "CAMPUS" 16 PÁGINAS
Alumno: Marcos Vila · 2º CFGS Diseño y Producción Editorial
Publicación: Revista trimestral del IES Ramón y Cajal · Formato 210×297 mm

ESTRUCTURA DEL LIBRO INDESIGN
  _Portada.indd         (p. 1–2) — sangrado especial 5 mm
  _Editorial.indd       (p. 3–4) — plantilla texto corrido
  _Reportaje1.indd      (p. 5–8) — rejilla 3 columnas, foto a sangre
  _Entrevista.indd      (p. 9–12) — rejilla 2 col., cita destacada
  _Agenda.indd          (p. 13–15) — tablas y listas de eventos
  _Contraportada.indd   (p. 16)

ESTILOS DEFINIDOS Y APLICADOS
  Párrafo: Título1, Título2, Cuerpo, Pie de foto, Cita (5 estilos)
  Carácter: Negrita_Cuerpo, Enlace_Web (2 estilos)
  Páginas maestras: A-Normal, B-Portada, C-Doble-Página

ENTREGA A IMPRENTA
  Paquete InDesign generado con todas las fuentes e imágenes vinculadas
  PDF/X-4 (Fogra39) exportado y verificado con Preflight: 0 errores`,
      puntos: [
        'Libro InDesign con 6 documentos vinculados y numeración de página unificada',
        'Sistema de estilos de párrafo y carácter aplicado al 100 % sin anulaciones locales',
        'Paquete de entrega completo con fuentes, vínculos e instrucciones de impresión',
      ],
    }
  },

  // 5 · Artes y Artesanías
  {
    id: 13, familiaId: 5, dificultad: "Básico",
    titulo: "Técnica de acuarela básica",
    descripcion: "Ejecuta una pieza de 20×20 cm usando las técnicas húmedo sobre húmedo.",
    objetivos: ["Controlar la cantidad de agua en el pincel y el papel", "Conseguir degradados y mezclas en húmedo", "Respetar los tiempos de secado entre capas"],
    recursos: ["Papel de acuarela 300 g/m²", "Set de acuarelas de calidad artística", "Pinceles redondos nº 8 y 12", "Recipiente de agua y papel absorbente"],
    solucion: {
      tipo: 'Memoria de práctica artística',
      extracto: `MEMORIA DE PRÁCTICA — TÉCNICA ACUARELA HÚMEDO SOBRE HÚMEDO
Alumna: Elena Castillo · 1º CFGM Artes Plásticas y Diseño

MATERIALES UTILIZADOS
  Papel: Fabriano Artistico 300 g/m² prensado en frío · Formato 20 × 20 cm
  Acuarelas: Winsor & Newton Cotman (azul ultramar, amarillo limón, sombra natural)
  Pinceles: redondo nº 8 (masas) y nº 4 (detalles)

PROCESO PASO A PASO
  1. Mojado del papel con esponja húmeda — espera 2 min hasta absorción uniforme
  2. Primera capa (cielo): azul ultramar muy aguado aplicado horizontalmente
  3. Integración en húmedo: ocre amarillo en zona horizon. antes de que seque (30 s)
  4. Difuminado de áreas oscuras con sombra natural — efecto niebla conseguido
  5. Espera de secado completo (15 min) antes de la segunda capa de detalles secos
  6. Detalles finales: pincel seco nº 4, toques de blanco con gouache

VALORACIÓN PROPIA
  La técnica húmedo sobre húmedo permite mezclas suaves imposibles en seco.
  Principal dificultad: controlar el tiempo antes de que el papel pierda el brillo.`,
      puntos: [
        'Proceso documentado con tiempos reales de secado entre capas',
        'Control del porcentaje de agua diferenciado para capas de masa y de detalle',
        'Reflexión técnica sobre la ventana de trabajo en húmedo incluida',
      ],
    }
  },
  {
    id: 14, familiaId: 5, dificultad: "Intermedio",
    titulo: "Talla en relieve",
    descripcion: "Diseña y talla un motivo vegetal en relieve sobre madera de tilo.",
    objetivos: ["Transferir el diseño a la madera con precisión", "Dominar las gubias de desbaste y detalle", "Lograr diferentes planos de profundidad en el relieve"],
    recursos: ["Tablero de tilo 20×20 cm", "Set de gubias de talla", "Mazo de madera", "Papel de calco y carboncillo para transferencia"],
    solucion: {
      tipo: 'Ficha de taller de talla',
      extracto: `FICHA DE TALLER — TALLA EN RELIEVE MOTIVO VEGETAL
Alumno: Adrián Lozano · 2º CFGM Ebanistería Artística

MATERIAL: Tablero de tilo 20×20 cm · espesor 3 cm
DISEÑO: Hoja de acanto con tres niveles de relieve (alto, medio, bajo)

TRANSFERENCIA DEL DISEÑO
  Calco en papel vegetal → carboncillo sobre madera → fijado con laca en spray

FASE 1 — DESBASTE (gubia plana nº 7, 18 mm + mazo 450 g)
  Vaciado del fondo a 5 mm de profundidad · Ángulo de ataque: 30–35°

FASE 2 — MODELADO (gubia curva nº 5 + gubia en V nº 11)
  Definición de los tres planos de relieve: +5 mm / +3 mm / nivel fondo
  Tallado de venas de la hoja con gubia en V nº 11 (2 mm)

FASE 3 — DETALLE Y ACABADO
  Perfilado de bordes con formón recto · Lija progresiva: 80 → 120 → 180
  Acabado: cera de abeja aplicada en caliente + pulido con paño de lana

TIEMPO TOTAL: 8 horas · Valoración del profesor: Sobresaliente`,
      puntos: [
        'Tres planos de profundidad claramente diferenciados con cotas definidas',
        'Selección de gubias específica para cada fase: desbaste, modelado y detalle',
        'Acabado con cera de abeja compatible con tilo sin tapar la veta natural',
      ],
    }
  },
  {
    id: 15, familiaId: 5, dificultad: "Avanzado",
    titulo: "Colección artesanal de autor",
    descripcion: "Desarrolla una colección de 5 piezas con identidad visual coherente para feria.",
    objetivos: ["Definir una identidad de autor reconocible en la colección", "Dominar la técnica escogida con acabados de calidad expositiva", "Elaborar dossier, etiquetado y precio de venta"],
    recursos: ["Materiales propios de la técnica elegida", "Cámara fotográfica para documentación", "Software de diseño para el dossier", "Referencias de mercado artesanal (ferias, precios)"],
    solucion: {
      tipo: 'Dossier de colección artesanal',
      extracto: `COLECCIÓN "RAÍCES" — CESTERÍA MEDITERRÁNEA
Alumna: Marta Esteve · 2º CFGS Técnica en Artesanía
Técnica: Cestería en esparto y mimbre · Feria: Mostra d'Artesania de Valencia 2025

PIEZA 1 — Cesta de mercado ovalada 35×25 cm
  Técnica: espiral con base de mimbre natural · Tiempo: 6 h · PVP: 65 €

PIEZA 2 — Bandeja decorativa 30 cm diámetro
  Técnica: trenza plana con esparto teñido en índigo natural · Tiempo: 4 h · PVP: 48 €

PIEZA 3 — Joyero con tapa 12×8 cm
  Técnica: cesta cerrada con asas de cuero trenzado · Tiempo: 5 h · PVP: 55 €

PIEZA 4 — Cesta para pan 25×15 cm
  Técnica: base circular con refuerzo de junco · Tiempo: 3,5 h · PVP: 42 €

PIEZA 5 — Lámpara colgante 35 cm altura
  Técnica: estructura de bambú + esparto anudado · Tiempo: 10 h · PVP: 120 €

IDENTIDAD DE AUTOR: paleta tierra-índigo, nudo de inicio visible como firma`,
      puntos: [
        'Cinco piezas con técnica coherente y escalonamiento de precio por complejidad',
        'Coste de materiales y horas calculado con margen de feria del 40 % aplicado',
        'Etiquetado con nombre de autor, técnica, materiales y CIF de actividad artesanal',
      ],
    }
  },

  // 6 · Comercio y Marketing
  {
    id: 16, familiaId: 6, dificultad: "Básico",
    titulo: "Analiza un competidor",
    descripcion: "Realiza un análisis DAFO de una tienda local frente a su competencia.",
    objetivos: ["Identificar fortalezas y debilidades internas del negocio", "Detectar oportunidades y amenazas del entorno", "Presentar conclusiones accionables"],
    recursos: ["Plantilla DAFO", "Fichas de observación de competidores", "Herramienta Google Maps para análisis de zona", "Informe de sector del INE o CNAE"],
    solucion: {
      tipo: 'Análisis DAFO comercial',
      extracto: `ANÁLISIS DAFO — LIBRERÍA "EL MARCAPÁGINAS" (Salamanca)
Alumna: Irene Campos · 1º CFGS Gestión de Ventas y Espacios Comerciales

FORTALEZAS (internas)
  + Ubicación en casco histórico con alto tráfico turístico
  + Personal especializado con asesoramiento personalizado (12 años de experiencia)
  + Fondo bibliográfico en castellano, gallego y portugués (oferta diferencial)

DEBILIDADES (internas)
  − Superficie de venta reducida (65 m²), sin espacio para eventos
  − Sin tienda online activa · Solo el 8 % de clientes son habituales < 30 años

OPORTUNIDADES (externas)
  + Turismo universitario creciente (+15 % matriculaciones USAL 2024)
  + Subvenciones autonómicas para digitalización de comercio local (hasta 3.000 €)
  + Tendencia de "slow shopping" y consumo local post-pandemia

AMENAZAS (externas)
  − Amazon Prime entrega en 24 h con descuento del 5 %
  − Biblioteca universitaria con acceso a e-books ilimitado (convenio)

ESTRATEGIAS PRIORITARIAS: club de lectura mensual + canal Instagram + web con click&collect`,
      puntos: [
        'DAFO basado en observación directa del establecimiento y análisis de zona con Google Maps',
        'Factores internos y externos diferenciados con evidencias cuantitativas específicas',
        'Estrategias accionables derivadas del cruce DAFO (FO, DO, FA, DA)',
      ],
    }
  },
  {
    id: 17, familiaId: 6, dificultad: "Intermedio",
    titulo: "Crea una campaña en redes",
    descripcion: "Diseña y lanza una mini-campaña orgánica para un producto real en Instagram.",
    objetivos: ["Definir el público objetivo y el mensaje clave", "Crear contenido visual atractivo y alineado con la marca", "Analizar métricas de alcance e interacción al cierre"],
    recursos: ["Cuenta de Instagram del negocio", "Canva o Adobe Express para diseño", "Meta Business Suite para análisis", "Calendario editorial en Trello o Notion"],
    solucion: {
      tipo: 'Calendario editorial + brief de campaña',
      extracto: `CAMPAÑA INSTAGRAM — "MAYO VERDE" · Eco Tienda Natura (Bilbao)
Alumno: Pablo Herrera · 2º CFGM Marketing y Publicidad

BRIEF DE CAMPAÑA
  Producto: nueva línea de cosméticos sólidos sin plástico
  Objetivo: aumentar seguidores un 10 % y generar 50 visitas a tienda en 4 semanas
  Público: mujeres 25–40 años, conciencia ecológica, radio 5 km

CALENDARIO EDITORIAL (semana 1 de ejemplo)
  Lun 05/05 — Reel 30": "¿Cuántos botes de plástico ahorras al mes?" (educativo)
  Mié 07/05 — Carrusel 5 slides: "Ingredientes naturales de nuestro champú sólido"
  Vie 09/05 — Story con encuesta: "¿Usas ya productos sólidos?" + sticker pregunta
  Dom 11/05 — Post catálogo: foto producto flat-lay con precio y enlace bio

HASHTAGS: #cosméticosólido #sinplástico #ecolifestyle #BilbaoSostenible (4 principales)
CTA: "Visítanos en c/ Licenciado Poza 38 · Link en bio para reservar muestra gratis"

MÉTRICAS SEMANA 1: alcance 1.240 | interacción 4,8 % | guardados 67`,
      puntos: [
        'Brief con objetivo SMART cuantificado y público objetivo geolocalizando la tienda',
        'Calendario semanal con formato variado: Reel, carrusel, Story y post catálogo',
        'Métricas de seguimiento definidas desde el inicio para optimizar contenidos',
      ],
    }
  },
  {
    id: 18, familiaId: 6, dificultad: "Avanzado",
    titulo: "Plan de marketing digital",
    descripcion: "Elabora un plan completo con objetivos SMART, canales, KPIs y presupuesto.",
    objetivos: ["Realizar un análisis de situación con datos reales", "Definir objetivos medibles y estrategias por canal", "Elaborar un presupuesto y cronograma de acciones"],
    recursos: ["Google Analytics y Search Console", "SEMrush o Ubersuggest para SEO", "Plantilla de plan de marketing", "Herramienta de gestión de redes sociales (Hootsuite)"],
    solucion: {
      tipo: 'Plan de marketing digital',
      extracto: `PLAN DE MARKETING DIGITAL 2025 — GymFlex (Valencia)
Alumna: Lucía Moreno · 2º CFGS Marketing y Publicidad

ANÁLISIS DE SITUACIÓN
  Tráfico web actual: 1.200 visitas/mes · Tasa conversión: 1,2 % · NPS: 42
  Competencia: 3 gimnasios low-cost en radio 2 km, presencia digital fuerte

OBJETIVOS SMART
  O1: Aumentar tráfico orgánico un 40 % en 6 meses (→ 1.680 visitas/mes)
  O2: Alcanzar 500 leads captados desde formulario web antes de septiembre
  O3: Reducir coste de adquisición de cliente de 28 € a 18 € en 4 meses

ESTRATEGIAS POR CANAL
  SEO: 3 artículos/mes con keywords "gimnasio Valencia" + clúster rutinas
  Google Ads: presupuesto 300 €/mes · CPC objetivo < 0,90 €
  Instagram: 4 publicaciones/semana + 2 Stories diarios · Objetivo: 2.000 seguidores
  Email: secuencia bienvenida 5 emails para nuevos leads

KPIs Y CUADRO DE MANDO
  Sesiones · Posición media · CTR · CPA · Tasa conversión · Engagement rate
PRESUPUESTO TOTAL: 900 €/mes (300 Ads + 400 contenidos + 200 herramientas)`,
      puntos: [
        'Tres objetivos SMART con KPI cuantificado y plazo definido para cada uno',
        'Estrategia multicanal con presupuesto desglosado por partida',
        'Cuadro de mando con métricas de seguimiento semanal definidas desde el inicio',
      ],
    }
  },

  // 7 · Edificación y Obra Civil
  {
    id: 19, familiaId: 7, dificultad: "Básico",
    titulo: "Lee un plano de planta",
    descripcion: "Interpreta un plano arquitectónico e identifica los elementos constructivos.",
    objetivos: ["Reconocer la simbología normalizada en planos de arquitectura", "Identificar muros, particiones, huecos y cotas", "Calcular superficies a partir del plano"],
    recursos: ["Planos de vivienda real (en papel o PDF)", "Escalímetro", "Normativa de representación gráfica (UNE)", "Ficha de interpretación de planos"],
    solucion: {
      tipo: 'Ficha de lectura de plano',
      extracto: `FICHA DE INTERPRETACIÓN DE PLANO DE PLANTA
Alumno: Javier Pons · 1º CFGM Obras de Interior, Decoración y Rehabilitación

DATOS DEL PLANO
  Proyecto: Vivienda unifamiliar · Escala: 1:50 · Fecha: marzo 2024

SIMBOLOGÍA IDENTIFICADA
  Muros de carga (espesor 30 cm): línea gruesa continua ✓
  Tabiques (10 cm): línea media continua ✓
  Huecos de puerta: arco de apertura 90° ✓
  Huecos de ventana: doble línea con interrupción en muro ✓
  Escalera: peldaños con flecha de subida ✓

MEDICIÓN DE SUPERFICIES (escalímetro 1:50)
  Sala-comedor: 6,80 × 4,20 m = 28,56 m²
  Cocina: 3,50 × 2,80 m = 9,80 m²
  Dormitorio 1: 4,00 × 3,60 m = 14,40 m²
  Dormitorio 2: 3,20 × 2,90 m = 9,28 m²
  Baño: 2,10 × 1,80 m = 3,78 m²
  SUPERFICIE ÚTIL TOTAL: 65,82 m²

COTAS PRINCIPALES LEÍDAS
  Fachada principal: 8,50 m · Fondo edificación: 9,20 m`,
      puntos: [
        'Simbología normalizada UNE-EN ISO 7519 identificada correctamente en 5 categorías',
        'Superficies medidas con escalímetro con error < 2 % respecto a cotas del plano',
        'Diferenciación correcta entre superficie útil, construida y bajo rasante',
      ],
    }
  },
  {
    id: 20, familiaId: 7, dificultad: "Intermedio",
    titulo: "Calcula la cimentación de una vivienda",
    descripcion: "Dimensiona la zapata corrida de un muro de carga con los datos del estudio.",
    objetivos: ["Interpretar el informe geotécnico y la tensión admisible del terreno", "Aplicar las fórmulas de dimensionado de zapatas del CTE", "Elaborar un croquis acotado de la solución"],
    recursos: ["CTE DB-SE-C (Seguridad estructural: Cimientos)", "Informe geotécnico de ejemplo", "Hoja de cálculo de cimentaciones", "AutoCAD o similar para el croquis"],
    solucion: {
      tipo: 'Memoria de cálculo de cimentación',
      extracto: `CÁLCULO DE ZAPATA CORRIDA — MURO DE CARGA
Alumna: Marina Soto · 2º CFGS Proyectos de Obra Civil
Edificio: Vivienda unifamiliar 2 plantas · Zona: Zaragoza (arcilla firme)

DATOS DE PARTIDA (informe geotécnico)
  Tensión admisible del terreno: σadm = 1,5 kp/cm² = 150 kN/m²
  Carga del muro por metro lineal: N = 85 kN/m
  Profundidad de cimentación: Df = 0,80 m

DIMENSIONADO (CTE DB-SE-C, tabla 2.3)
  Ancho necesario: B = N / σadm = 85 / 150 = 0,57 m → adoptado B = 0,60 m
  Vuelo a cada lado: c = (B – e_muro) / 2 = (0,60 – 0,30) / 2 = 0,15 m
  Canto mínimo (CTE): h ≥ 2·c = 2 × 0,15 = 0,30 m → adoptado h = 0,40 m

ARMADO LONGITUDINAL (HA-25 / B500S)
  As_min = 0,0018 × b × h = 0,0018 × 600 × 400 = 432 mm² → 5Ø12 c/15 cm

CROQUIS: zapata continua 60×40 cm con recubrimiento 7 cm`,
      puntos: [
        'Tensión admisible del informe geotécnico aplicada correctamente al dimensionado',
        'Cálculo de vuelo y canto siguiendo las tablas del CTE DB-SE-C',
        'Armado mínimo verificado con la cuantía geométrica mínima de EHE-08',
      ],
    }
  },
  {
    id: 21, familiaId: 7, dificultad: "Avanzado",
    titulo: "Proyecto de rehabilitación energética",
    descripcion: "Propón medidas de mejora de envolvente y justifícalas con CTE-HE.",
    objetivos: ["Auditar el estado actual de la envolvente térmica del edificio", "Calcular la transmitancia de los cerramientos propuestos", "Elaborar la memoria justificativa con el CTE-HE"],
    recursos: ["CTE DB-HE (Ahorro de energía)", "Software CE3X para certificación energética", "Catálogo de sistemas de aislamiento (ETICS, etc.)", "Planos del edificio existente"],
    solucion: {
      tipo: 'Memoria de rehabilitación energética CTE-HE',
      extracto: `PROYECTO DE REHABILITACIÓN ENERGÉTICA
Alumno: Gonzalo Ríos · 2º CFGS Proyectos de Edificación
Edificio: Bloque plurifamiliar 1975 · 24 viviendas · Zona climática C3 (Sevilla)

ESTADO ACTUAL (CE3X — calificación E)
  Fachada principal: ladrillo hueco doble sin aislamiento · U = 1,48 W/m²K
  Cubierta plana no transitable: solera de hormigón sin aislamiento · U = 1,92 W/m²K

MEDIDAS PROPUESTAS
  M1 — ETICS en fachada: EPS 100 mm (λ=0,036) → U = 0,28 W/m²K ✓ (límite CTE: 0,38)
  M2 — Aislamiento cubierta: lana mineral 120 mm → U = 0,26 W/m²K ✓
  M3 — Ventanas: PVC doble vidrio 4/12/4 → U_v = 1,80 W/m²K ✓

RESULTADOS (CE3X con medidas)
  Calificación energética: de E → B (reducción 62 % demanda calefacción)
  Ahorro estimado: 48 kWh/m²·año → 1.152 kWh/vivienda/año
  Subvención PREE-5000: hasta 3.000 €/vivienda elegible`,
      puntos: [
        'Transmitancias de todos los cerramientos calculadas y verificadas contra límites CTE DB-HE1',
        'Certificación energética con CE3X antes y después de las medidas comparada',
        'Subvenciones aplicables del programa PREE identificadas con importe estimado',
      ],
    }
  },

  // 8 · Electricidad y Electrónica
  {
    id: 22, familiaId: 8, dificultad: "Básico",
    titulo: "Instala un punto de luz",
    descripcion: "Realiza una instalación eléctrica monofásica siguiendo el REBT.",
    objetivos: ["Identificar los componentes de un circuito de alumbrado", "Realizar conexiones seguras en caja de empalmes", "Verificar la instalación con el polímetro"],
    recursos: ["REBT (Reglamento Electrotécnico de Baja Tensión)", "Panel de prácticas eléctricas", "Polímetro digital", "Herramientas de electricista (pelacables, destornillador)"],
    solucion: {
      tipo: 'Informe de instalación eléctrica',
      extracto: `INFORME DE INSTALACIÓN — PUNTO DE LUZ CON CONMUTADORES
Alumna: Beatriz Núñez · 1º CFGM Instalaciones Eléctricas y Automáticas

DESCRIPCIÓN DE LA INSTALACIÓN
  Circuito: conmutado (2 puntos de mando) + punto de luz LED 9 W
  Tensión: 230 V monofásica · Protección: IGA 10 A + diferencial 30 mA

SECCIÓN DE CONDUCTORES (ITC-BT-19)
  Conductores utilizados: Cu 1,5 mm² (fase, neutro y tierra) · Cable H07V-K
  Tubo corrugado M16 · Profundidad de embutido: 25 mm

CONEXIONES REALIZADAS
  ✓ Caja de conmutación 1: entradas L–N–T + salida hacia conmutador 2
  ✓ Caja de conmutación 2: entradas + salida hacia punto de luz
  ✓ Conexión a tierra verificada (< 10 Ω medidos con telurómetro)

VERIFICACIONES CON POLÍMETRO
  Tensión en bornes del punto de luz: 229,8 V ✓
  Aislamiento entre fase y neutro (circuito abierto): > 100 MΩ ✓
  Corriente en funcionamiento: 40 mA (LED 9 W) ✓`,
      puntos: [
        'Sección de conductores seleccionada conforme a ITC-BT-19 del REBT',
        'Verificación de aislamiento y continuidad de tierra realizadas con polímetro',
        'Circuito de conmutado cableado correctamente con dos conmutadores simples',
      ],
    }
  },
  {
    id: 23, familiaId: 8, dificultad: "Intermedio",
    titulo: "Diseña un circuito con Arduino",
    descripcion: "Programa un semáforo peatonal con temporizador usando Arduino UNO.",
    objetivos: ["Conectar LEDs y resistencias correctamente en la protoboard", "Programar la secuencia de tiempos en el IDE de Arduino", "Depurar el código y verificar el funcionamiento"],
    recursos: ["Arduino UNO y cable USB", "Protoboard, LEDs y resistencias", "IDE de Arduino", "Tutorial de referencia de Arduino.cc"],
    solucion: {
      tipo: 'Código fuente + montaje',
      extracto: `// SEMÁFORO PEATONAL — Arduino UNO
// Alumna: Laura Vega · 2º FPII Electricidad y Electrónica

const int VERDE_C = 10, AMBAR_C = 9, ROJO_C = 8;
const int VERDE_P = 12, ROJO_P  = 11;

void setup() {
  for (int p = 8; p <= 12; p++) pinMode(p, OUTPUT);
}

void loop() {
  // Fase 1: coches circulan, peatones esperan (7 s)
  digitalWrite(VERDE_C, HIGH); digitalWrite(ROJO_P, HIGH);
  delay(7000);

  // Fase 2: parpadeo ámbar de aviso (3 ciclos)
  digitalWrite(VERDE_C, LOW);
  for (int i = 0; i < 3; i++) {
    digitalWrite(AMBAR_C, HIGH); delay(500);
    digitalWrite(AMBAR_C, LOW);  delay(500);
  }
  // Fase 3: peatones cruzan (5 s)
  digitalWrite(ROJO_C, HIGH); digitalWrite(ROJO_P, LOW);
  digitalWrite(VERDE_P, HIGH); delay(5000);
  digitalWrite(VERDE_P, LOW); digitalWrite(ROJO_C, LOW);
}`,
      puntos: [
        'Secuencia de fases completa y segura — nunca hay dos verdes simultáneos',
        'Resistencias de 220 Ω calculadas para limitar corriente a ~15 mA por LED',
        'Montaje en protoboard documentado con esquema Fritzing adjunto',
      ],
    }
  },
  {
    id: 24, familiaId: 8, dificultad: "Avanzado",
    titulo: "Programa un PLC con comunicación SCADA",
    descripcion: "Implementa y monitoriza una célula automatizada con Siemens S7 y WinCC.",
    objetivos: ["Programar una secuencia compleja en lenguaje Ladder/SCL", "Configurar la comunicación OPC entre PLC y SCADA", "Crear pantallas de supervisión con alarmas y trending"],
    recursos: ["TIA Portal (Siemens)", "WinCC Flexible o WinCC Advanced", "Simulador S7-PLCSIM", "Manual de comunicaciones OPC UA"],
    solucion: {
      tipo: 'Código Ladder + pantalla SCADA',
      extracto: `// CÉLULA AUTOMATIZADA — CINTA + PISTÓN NEUMÁTICO
// Alumno: Sergio Blanco · 2º CFGS Sistemas Electrotécnicos y Automatizados
// PLC: Siemens S7-1200 CPU 1214C · TIA Portal V17

NETWORK 1 — Marcha del sistema
  |--[I0.0]--[/I0.1]--[/M0.0]--|--( Q0.0 )--|  // pulsador marcha + interbloqueos
  |--[Q0.0]----------------------|

NETWORK 2 — Control de cinta transportadora
  |--[Q0.0]--[/I0.2]--|--( Q0.1 )--|  // cinta ON si marcha y sin sensor fin de pieza

NETWORK 3 — Activación pistón (temporizado 2 s tras detección)
  |--[I0.2]--|--[TON T1 2s]--|--( Q0.2 )--|  // pistón avanza al detectar pieza
  |--[Q0.2]--[TON T2 1s]--|--( Q0.3 )--|  // retroceso automático tras 1 s

PANTALLA SCADA (WinCC)
  - Sinóptico animado: cinta, pistón, sensor y contadores
  - Alarma: "Fallo sensor" si I0.2 activo > 5 s sin pistón
  - Contador de piezas procesadas: 247 en prueba de 30 min`,
      puntos: [
        'Lógica Ladder con interbloqueos de seguridad que impiden doble actuación',
        'Temporización de pistón programada con bloques TON estándar IEC 61131',
        'SCADA con sinóptico animado, sistema de alarmas y trending de producción',
      ],
    }
  },

  // 9 · Energía y Agua
  {
    id: 25, familiaId: 9, dificultad: "Básico",
    titulo: "Identifica componentes de una instalación solar",
    descripcion: "Etiqueta y describe los elementos de un sistema fotovoltaico aislado.",
    objetivos: ["Reconocer paneles, regulador, batería e inversor", "Explicar la función de cada componente", "Identificar los riesgos eléctricos asociados"],
    recursos: ["Instalación solar de demostración o maqueta", "Ficha técnica de cada componente", "Manual de instalación del fabricante", "Equipos de protección individual (EPI)"],
    solucion: {
      tipo: 'Tabla de componentes fotovoltaicos',
      extracto: `TABLA DE COMPONENTES — INSTALACIÓN FV AISLADA 1.000 W
Alumno: Antonio Vega · 1º CFGM Instalaciones Eléctricas y Automáticas

COMPONENTE          | FUNCIÓN                              | RIESGO PRINCIPAL
Panel FV (×4 250W)  | Convierte irradiación en CC          | Electrocución (tensión en circuito abierto: 37,5 V)
Regulador MPPT 30A  | Optimiza carga y protege batería     | Cortocircuito si polaridad invertida
Batería AGM 200 Ah  | Almacena energía para consumo nocturno | Explosión (H₂) — zona ventilada obligatoria
Inversor 1.500 W    | Convierte CC→CA 230 V 50 Hz         | Descarga eléctrica si acceso sin aislar
Cableado CC (6 mm²) | Transporta corriente entre paneles   | Incendio por sobrecalentamiento si < sección
Fusibles y protec.  | Protegen circuitos de sobreintensidad | Arco eléctrico al sustituir bajo tensión
Toma de tierra      | Evacúa corrientes de falta           | Sin tierra: riesgo de electrocución usuario

EPI OBLIGATORIOS: guantes aislantes (clase 0 hasta 1.000 V) + gafas + calzado aislante`,
      puntos: [
        'Función técnica de cada componente explicada con precisión y vocabulario del sector',
        'Riesgos eléctricos específicos identificados por componente según REBT',
        'EPI requeridos ajustados a la tensión de trabajo de la instalación (CC 48 V)',
      ],
    }
  },
  {
    id: 26, familiaId: 9, dificultad: "Intermedio",
    titulo: "Calcula el dimensionado solar",
    descripcion: "Diseña una instalación FV para una vivienda unifamiliar con consumo dado.",
    objetivos: ["Calcular el consumo energético diario de la vivienda", "Dimensionar el generador fotovoltaico y el sistema de almacenamiento", "Seleccionar los componentes y elaborar el presupuesto"],
    recursos: ["Herramienta PVGIS de la Comisión Europea", "Catálogos de paneles y baterías", "Hoja de cálculo de dimensionado FV", "Reglamento de instalaciones eléctricas (REBT)"],
    solucion: {
      tipo: 'Memoria de cálculo fotovoltaico',
      extracto: `DIMENSIONADO FV — VIVIENDA UNIFAMILIAR AISLADA
Alumna: Carmen Iglesias · 2º CFGS Energías Renovables
Ubicación: Murcia (37,98°N) · Inclinación paneles: 30° · Orientación: Sur

CONSUMO ENERGÉTICO DIARIO
  Frigorífico (150 W · 8 h): 1.200 Wh · Iluminación LED (50 W · 5 h): 250 Wh
  Televisión (80 W · 3 h): 240 Wh · Bombeo (300 W · 1 h): 300 Wh
  CONSUMO TOTAL: 1.990 Wh/día → con factor 1,25: 2.488 Wh/día

GENERADOR FOTOVOLTAICO (PVGIS, peor mes: diciembre)
  HSP diciembre Murcia: 3,2 h·pico/día
  Potencia pico necesaria: 2.488 / (3,2 × 0,85) = 915 Wp → 4 paneles 250 Wp

SISTEMA DE ALMACENAMIENTO
  Autonomía 2 días: C = (2 × 1.990) / (0,8 × 12) = 415 Ah · 12 V → 2 baterías 220 Ah

COMPONENTES SELECCIONADOS
  Paneles: 4 × Jinko Solar 250 Wp · Regulador MPPT: Victron 50A
  Baterías: 2 × Rolls 220 Ah AGM · Inversor: SMA Sunny Island 1.700 W`,
      puntos: [
        'Consumo calculado por aparato con factor de corrección de pérdidas del 85 %',
        'HSP de peor mes obtenida de PVGIS para garantizar autonomía en diciembre',
        'Capacidad de baterías dimensionada para 2 días de autonomía al 80 % DOD',
      ],
    }
  },
  {
    id: 27, familiaId: 9, dificultad: "Avanzado",
    titulo: "Auditoría energética de un edificio",
    descripcion: "Elabora un informe con propuestas de mejora y ahorro estimado en kWh/año.",
    objetivos: ["Recopilar y analizar los consumos energéticos históricos", "Identificar los puntos de mayor desperdicio energético", "Proponer medidas de eficiencia con TIR y periodo de retorno"],
    recursos: ["Software CE3X o EnergyPlus", "Facturas energéticas del edificio", "Norma UNE-EN ISO 50001 (gestión energética)", "Termómetro infrarrojo y analizador de redes"],
    solucion: {
      tipo: 'Informe de auditoría energética',
      extracto: `AUDITORÍA ENERGÉTICA — EDIFICIO DE OFICINAS MARNEXT
Alumno: Roberto Casas · 2º CFGS Eficiencia Energética y Energía Solar
Edificio: 4 plantas · 2.400 m² · Año construcción: 1998 · Madrid (D3)

CONSUMO HISTÓRICO (2024)
  Electricidad: 148.200 kWh/año · Gas natural: 62.400 kWh/año (calderas)
  Intensidad energética: 87,8 kWh/m²·año (media sector oficinas: 110)

PUNTOS DE MEJORA IDENTIFICADOS
  1. Iluminación fluorescente T8 → LED: ahorro estimado 31.000 kWh/año
  2. Caldera gas 1998 (rendimiento 78 %) → bomba de calor aerotérmica A+++
     Ahorro: 38.400 kWh gas → 9.600 kWh eléctricos (COP = 4)
  3. Regulación por presencia en zonas comunes: −18 % consumo iluminación

ANÁLISIS ECONÓMICO
  Inversión total medidas 1+2+3: 42.000 €
  Ahorro anual estimado: 8.200 €/año
  TIR a 10 años: 14,2 % · Período retorno simple: 5,1 años`,
      puntos: [
        'Consumo histórico desglosado por vector energético con intensidad por m² calculada',
        'Tres medidas priorizadas con ahorro cuantificado en kWh y euros anuales',
        'TIR y período de retorno calculados para justificar la inversión ante la dirección',
      ],
    }
  },

  // 10 · Fabricación Mecánica
  {
    id: 28, familiaId: 10, dificultad: "Básico",
    titulo: "Interpreta un plano de pieza",
    descripcion: "Lee las cotas, tolerancias y acabados superficiales de un plano industrial.",
    objetivos: ["Identificar las vistas normalizadas y secciones del plano", "Interpretar tolerancias dimensionales y geométricas", "Leer el indicador de acabado superficial (Ra)"],
    recursos: ["Planos industriales de piezas reales", "Normas UNE de representación gráfica", "Escalímetro y calibre pie de rey", "Manual de dibujo técnico industrial"],
    solucion: {
      tipo: 'Ficha de lectura de plano industrial',
      extracto: `FICHA DE LECTURA DE PLANO — EJE ESCALONADO Ø25/Ø40
Alumna: Ana Delgado · 1º CFGM Mecanizado y Mantenimiento de Máquinas

DATOS DEL PLANO
  Referencia: MEC-2024-047 · Material: F-114 (acero al carbono)
  Escala: 1:1 · Proyección: diedra europea (E)

VISTAS IDENTIFICADAS
  Vista frontal (alzado): perfil del eje con cotas principales
  Vista lateral derecha: sección A-A del rebaje de chaveta
  Vista auxiliar: detalle del roscado M12×1,5

COTAS PRINCIPALES (mm)
  Longitud total: 185 mm · Ø mayor: 40 h6 (+0 / −0,016)
  Ø menor: 25 k6 (+0,015 / +0,002) · Chavetero: 8×7×50

ACABADO SUPERFICIAL
  Ra 0,8 μm en asientos de rodamiento (símbolo ∨∨∨)
  Ra 3,2 μm en el resto de superficies mecanizadas

TOLERANCIAS GEOMÉTRICAS
  Coaxialidad Ø40 respecto Ø25: ⊙ Ø0,03 — verificar con comparador`,
      puntos: [
        'Tres vistas normalizadas identificadas correctamente con proyección diedra europea',
        'Ajustes ISO leídos e interpretados: h6 (eje libre) y k6 (eje con apriete)',
        'Tolerancia geométrica de coaxialidad identificada y relacionada con función de rodamiento',
      ],
    }
  },
  {
    id: 29, familiaId: 10, dificultad: "Intermedio",
    titulo: "Mecanizado en torno CNC",
    descripcion: "Programa y ejecuta el torneado de un eje escalonado en acero F114.",
    objetivos: ["Programar el ciclo de torneado en código G/M", "Seleccionar las herramientas y parámetros de corte", "Verificar las cotas de la pieza acabada con instrumentos de medida"],
    recursos: ["Torno CNC (o simulador CIMCO Edit)", "Plano de la pieza a mecanizar", "Herramientas de corte (plaquitas intercambiables)", "Calibre y micrómetro de exteriores"],
    solucion: {
      tipo: 'Programa G-code + hoja de proceso',
      extracto: `// TORNEADO EJE ESCALONADO — Programa CNC
// Alumno: Miguel Serrano · 2º CFGM Mecanizado
// Máquina: MAZAK QT-Nexus 100 · Material: F-114 · Herram.: CNMG 120408

O0001 (EJE ESCALONADO MEC-2024-047)
N10 G21 G18 G40 G97 G99     (inicio: mm, plano XZ, anulación comp., RPM, avance/rev)
N20 T0101 M06               (plaquita desbaste CNMG)
N30 G96 S180 M03            (vel. corte 180 m/min, giro horario)
N40 G00 X42 Z2              (aproximación rápida)
N50 G71 U1.5 R0.5           (ciclo desbaste: prof. pasada 1,5 mm, retroceso 0,5)
N60 G71 P70 Q120 U0.3 W0.1 F0.2  (final contorno, sobremedida acabado)
N70 G01 X25 Z0              (inicio contorno Ø25)
N80 Z-50                    (longitud tramo Ø25)
N90 X40                     (escalón)
N100 Z-185                  (longitud tramo Ø40)
N110 T0202 M06              (plaquita acabado VCGT)
N120 G96 S250 F0.08         (acabado: 250 m/min, avance fino)
N130 G70 P70 Q100           (ciclo de acabado sobre contorno)
N140 M30                    (fin programa)

MEDICIÓN FINAL: Ø25 = 24,998 mm ✓ · Ø40 = 39,994 mm ✓`,
      puntos: [
        'Ciclo G71 de desbaste con parámetros de profundidad y sobremedida de acabado correctos',
        'Velocidad de corte en m/min (G96) calculada para material F-114 con plaquita CNMG',
        'Medición final con micrómetro dentro de tolerancia h6 (0/−0,016 mm)',
      ],
    }
  },
  {
    id: 30, familiaId: 10, dificultad: "Avanzado",
    titulo: "Diseño y fabricación de útil de soldadura",
    descripcion: "Diseña en CAD y fabrica un útil de posicionamiento para una unión en T.",
    objetivos: ["Diseñar el útil en 3D con Fusion 360 o SolidWorks", "Seleccionar el material y los medios de sujeción", "Fabricar, ensamblar y validar el útil con una soldadura real"],
    recursos: ["SolidWorks o Fusion 360", "Taller de mecanizado y soldadura", "Planos de la unión a realizar", "Calibres y galgas de comprobación"],
    solucion: {
      tipo: 'Proyecto CAD + lista de materiales',
      extracto: `ÚTIL DE POSICIONAMIENTO — UNIÓN EN T · PERFIL HEB 100
Alumna: Cristina Molero · 2º CFGS Construcciones Metálicas

DESCRIPCIÓN DEL ÚTIL
  Función: mantener el ángulo de 90° entre ala y alma del perfil HEB durante la soldadura
  Material: acero S275JR · Espesor chapa base: 10 mm

DISEÑO CAD (SolidWorks 2024)
  Chapa base: 300×200×10 mm con 4 taladros M12 para fijación a mesa
  Tope angular (2 uds): ángulo de 90° mecanizado a ±0,1°, altura 80 mm
  Tornillos de apriete: 2 × M12 clase 8.8 con palomilla para ajuste rápido

LISTA DE MATERIALES
  1 — Chapa base S275 300×200×10 mm · masa: 4,71 kg
  2 — Tope angular S275 80×80×8 mm (×2) · masa total: 0,80 kg
  3 — Pernos roscados M12×50 cl.8.8 (×4) + tuercas M12 + arandelas

VALIDACIÓN
  Prueba de soldadura en T con ángulo medido: 89,8° ✓ (tolerancia ±0,5°)
  Deformación tras 5 usos: no apreciable`,
      puntos: [
        'Diseño CAD paramétrico con tolerancia de ángulo de ±0,1° especificada y verificada',
        'Material S275JR seleccionado por resistencia al calor de la soldadura sin deformación',
        'Validación del útil con pieza real y medición de ángulo tras soldadura MIG',
      ],
    }
  },

  // 11 · Hostelería y Turismo
  {
    id: 31, familiaId: 11, dificultad: "Básico",
    titulo: "Diseña un menú de temporada",
    descripcion: "Crea un menú de 3 platos con producto de temporada y coste ajustado.",
    objetivos: ["Seleccionar ingredientes de temporada y proximidad", "Calcular el escandallo y el precio de venta con margen correcto", "Presentar el menú con descripción atractiva para el cliente"],
    recursos: ["Plantilla de escandallo", "Lista de productos de temporada", "Carta de alérgenos (Reglamento UE 1169/2011)", "Ficha técnica de receta"],
    solucion: {
      tipo: 'Menú con escandallo',
      extracto: `MENÚ DE TEMPORADA — OTOÑO
Alumno: Carlos Vera · 2º CFGS Dirección de Cocina y Gastronomía

PRIMERO
  Crema de calabaza asada con aceite de trufa y pipas tostadas
  Coste: 1,42 € · PVP: 7,90 € · Margen bruto: 82 %

SEGUNDO
  Carrillera de cerdo ibérico estofada con puré de boniato
  Coste: 3,15 € · PVP: 14,50 € · Margen bruto: 78 %

POSTRE
  Tarta de manzana caramelizada con helado de vainilla artesano
  Coste: 0,98 € · PVP: 5,90 € · Margen bruto: 83 %

RESUMEN ECONÓMICO
  Food cost total: 5,55 € / 28,30 € = 19,6 % ✓ (< 30 % objetivo)

ALÉRGENOS PRESENTES
  Gluten · Lácteos · Huevo · Frutos secos · Sulfitos`,
      puntos: [
        'Food cost del 19,6 % — muy por debajo del 30 % habitual del sector',
        'Todos los ingredientes de temporada y proximidad (radio < 100 km)',
        'Alérgenos declarados conforme al Reglamento UE 1169/2011',
      ],
    }
  },
  {
    id: 32, familiaId: 11, dificultad: "Intermedio",
    titulo: "Gestiona una queja de cliente",
    descripcion: "Simula y resuelve una reclamación real en recepción de hotel.",
    objetivos: ["Aplicar el protocolo de atención a quejas del establecimiento", "Practicar la escucha activa y la comunicación asertiva", "Documentar la incidencia y proponer una solución satisfactoria"],
    recursos: ["Protocolo de gestión de quejas del hotel", "Ficha de registro de incidencias", "Role-play con compañero como cliente", "Legislación de protección al consumidor"],
    solucion: {
      tipo: 'Informe de incidencia hotelera',
      extracto: `INFORME DE GESTIÓN DE QUEJA — HOTEL PALACIO DEL MAR ****
Alumna: Verónica Gil · 2º CFGS Gestión de Alojamientos Turísticos

DATOS DE LA INCIDENCIA
  Fecha: 14/05/2025 · Hora: 22:45 · Atendida por: Verónica Gil (recepción)
  Huésped: Sr. Ramón Torres · Habitación 304 · Check-in: 13/05 · 3 noches

DESCRIPCIÓN DE LA QUEJA
  El huésped se presenta en recepción visiblemente molesto. Indica que el aire
  acondicionado de su habitación emite un ruido constante desde las 21:00 h y
  que no puede dormir. Ya había llamado al servicio de habitaciones sin solución.

ACTUACIÓN (protocolo LAST: Listen – Apologize – Solve – Thank)
  1. Escucha activa sin interrupciones · Lenguaje corporal abierto y contacto visual
  2. Disculpa sincera en nombre del hotel: "Lamentamos sinceramente las molestias"
  3. Solución inmediata: traslado a habitación 412 (misma categoría + vista mar)
     Compensación ofrecida: desayuno gratuito los 2 días restantes (valor: 34 €)
  4. Seguimiento: llamada a las 10:00 h del día siguiente → huésped satisfecho

VALORACIÓN EN TripAdvisor (posterior): 4/5 estrellas con mención a "atención recepción"`,
      puntos: [
        'Protocolo LAST aplicado correctamente con escucha activa antes de proponer solución',
        'Compensación ofrecida proporcionada al inconveniente sin necesidad de escalada',
        'Seguimiento documentado con resultado positivo en plataforma de opiniones',
      ],
    }
  },
  {
    id: 33, familiaId: 11, dificultad: "Avanzado",
    titulo: "Plan de negocio para un food truck",
    descripcion: "Elabora el plan financiero y operativo para la apertura de un food truck.",
    objetivos: ["Definir el concepto gastronómico y el público objetivo", "Elaborar el plan económico-financiero a 3 años", "Tramitar los permisos y licencias necesarios"],
    recursos: ["Plantilla de plan de negocio (ENISA o Cámara de Comercio)", "Herramienta de simulación financiera", "Normativa municipal de venta ambulante", "Estudio de mercado de referencia"],
    solucion: {
      tipo: 'Plan económico-financiero a 3 años',
      extracto: `PLAN DE NEGOCIO — FOOD TRUCK "LA BRASERÍA DEL PUERTO"
Alumno: Héctor Ruiz · 2º CFGS Dirección de Restauración
Concepto: bocadillos gourmet y tapas a la brasa · Ubicación: Málaga puerto deportivo

INVERSIÓN INICIAL
  Vehículo adaptado (segunda mano + reforma): 28.000 €
  Equipamiento cocina (plancha, freidora, cámara): 8.500 €
  Licencia municipal + permisos sanitarios: 1.200 €
  Capital circulante inicial: 4.000 € · TOTAL: 41.700 €

CUENTA DE EXPLOTACIÓN PROYECTADA
                    AÑO 1      AÑO 2      AÑO 3
  Ingresos:        68.400 €   82.000 €   96.500 €
  Coste materia:   21.900 €   25.420 €   29.900 €
  Gastos personal: 22.000 €   24.000 €   26.000 €
  Gastos fijos:     9.800 €   10.200 €   10.600 €
  EBITDA:          14.700 €   22.380 €   30.000 €
  Resultado neto:   8.900 €   16.200 €   23.100 €

Punto de equilibrio: 52.400 €/año · Recuperación inversión: 2,8 años`,
      puntos: [
        'Inversión inicial desglosada por partida con IVA excluido para la previsión financiera',
        'Cuenta de explotación a 3 años con food cost del 32 % sostenido',
        'Punto de equilibrio calculado y alcanzado en el año 1 con margen positivo',
      ],
    }
  },

  // 12 · Imagen Personal
  {
    id: 34, familiaId: 12, dificultad: "Básico",
    titulo: "Analiza la morfología facial",
    descripcion: "Identifica el tipo de rostro y propón el corte de cabello más adecuado.",
    objetivos: ["Clasificar los tipos de rostro (ovalado, redondo, cuadrado...)", "Asociar cada tipo con el corte más favorecedor", "Argumentar la propuesta al cliente de forma profesional"],
    recursos: ["Guía de morfología facial y cortes asociados", "Fotografías de referencia por tipo de rostro", "Espejo de doble cara", "Ficha de cliente"],
    solucion: {
      tipo: 'Ficha de análisis de cliente',
      extracto: `FICHA DE CLIENTE — ANÁLISIS MORFOLÓGICO
Alumna: Nadia Flores · 1º CFGM Peluquería y Cosmética Capilar

DATOS DEL CLIENTE
  Nombre: Laura M. · Edad: 34 años · Tipo de cabello: ondulado, grosor medio

ANÁLISIS MORFOLÓGICO
  Anchura frente:   15,5 cm
  Anchura pómulos: 14,8 cm
  Anchura mandíbula: 13,2 cm
  Longitud cara:    22,0 cm
  CLASIFICACIÓN: Rostro CORAZÓN (frente ancha, mentón estrecho)

PROPUESTA DE CORTE
  Corte recomendado: largo a la clavícula (lob) con capas suaves
  Razón: el largo y las capas suavizan la frente y añaden volumen en la mandíbula
  Flequillo: lateral barrido — reduce visualmente la anchura frontal

  NO recomendado: corte pixie ni flequillo recto — acentuarían la frente

ARGUMENTACIÓN AL CLIENTE
  "Con este largo conseguimos equilibrar tus facciones de forma muy natural.
  Las capas añaden movimiento y el flequillo lateral es muy favorecedor."`,
      puntos: [
        'Medidas reales tomadas con cinta métrica y clasificación fundamentada en las proporciones',
        'Propuesta de corte con justificación técnica y alternativa descartada explicada',
        'Argumentación adaptada al cliente en lenguaje accesible, sin tecnicismos excesivos',
      ],
    }
  },
  {
    id: 35, familiaId: 12, dificultad: "Intermedio",
    titulo: "Aplica una coloración permanente",
    descripcion: "Realiza un cambio de color completo siguiendo el protocolo de seguridad.",
    objetivos: ["Realizar la prueba de alergia con la antelación requerida", "Calcular la mezcla de colorante y oxidante correctamente", "Aplicar, templar y aclarar el color según el fabricante"],
    recursos: ["Kit de coloración profesional", "Guantes, capa y protector de línea de nacimiento", "Tabla de colores del fabricante", "Ficha técnica de proceso de coloración"],
    solucion: {
      tipo: 'Ficha técnica de coloración',
      extracto: `FICHA TÉCNICA — COLORACIÓN PERMANENTE
Alumna: Patricia Romero · 2º CFGM Peluquería y Cosmética Capilar

DATOS DEL SERVICIO
  Clienta: Ana R. · Tono natural: 5 (castaño claro) · Porcentaje canas: 30 %
  Tono objetivo: 6.34 (rubio oscuro cobrizo dorado) · Marca: Wella Koleston Perfect

FORMULACIÓN
  Colorante 6.34: 60 g + Oxidante 30 Vol (9 %): 60 g
  Proporción 1:1 · Tiempo de actuación: 35 min

PRUEBA DE ALERGIA
  Realizada 48 h antes · Zona: pliegue del codo · Resultado: negativa ✓

PROCESO DE APLICACIÓN
  1. Proteger línea de nacimiento con crema barrera
  2. Aplicar desde raíz (zona mayor calor corporal, +3 min) → medios → puntas
  3. Templar: 35°C, 10 min (acorta tiempo en canas resistentes)
  4. Aclare con agua fría hasta agua limpia · Champú neutro + mascarilla hidratante

RESULTADO: tono conseguido 6.34 ✓ · Cobertura de canas: 100 % ✓`,
      puntos: [
        'Formulación con proporciones correctas según las instrucciones del fabricante Wella',
        'Prueba de alergia documentada con resultado negativo 48 h antes del servicio',
        'Secuencia de aplicación desde raíz con templado para garantizar cobertura de canas',
      ],
    }
  },
  {
    id: 36, familiaId: 12, dificultad: "Avanzado",
    titulo: "Diseña una colección de moda-imagen",
    descripcion: "Crea un book con 5 looks coherentes para un desfile de fin de ciclo.",
    objetivos: ["Definir un concepto creativo y una paleta de color coherente", "Coordinar peinado, maquillaje y estilismo en cada look", "Documentar el proceso con fotografías y fichas técnicas"],
    recursos: ["Mood board digital (Pinterest o Canva)", "Materiales de peluquería y estética", "Cámara fotográfica o smartphone de calidad", "Modelos voluntarios del centro"],
    solucion: {
      tipo: 'Book de colección moda-imagen',
      extracto: `COLECCIÓN "TERRACOTA" — DESFILE FIN DE CICLO 2025
Alumna: Valeria Santos · 2º CFGS Asesoría de Imagen Personal y Corporativa

CONCEPTO CREATIVO
  Inspiración: cerámica ibérica contemporánea · Paleta: terracota, ocre y blanco roto
  Silueta: volúmenes asimétricos con asimetrías en hombros y dobladillos

LOOK 1 — "Arcilla"
  Peinado: updo bajo desestructurado con trenza lateral visible
  Maquillaje: base mate efecto barro, sombra terracota difuminada, labio nude
  Estilismo: vestido asimétrico terracota + sandalias planas doradas

LOOK 2 — "Tierra"
  Peinado: melena natural con raya al lado y textura húmeda
  Maquillaje: delineado cat-eye negro, piel efecto satén, labio burdeos
  Estilismo: conjunto wide-leg pantalón crema + top estructurado ocre

LOOK 3–5 [fichas completas en dossier adjunto]
  Cada look incluye: ficha de modelo, lista de productos y tiempo de ejecución

COHERENCIA DE COLECCIÓN
  Elemento común: pincelada de terracota en el maquillaje o el accesorio`,
      puntos: [
        'Concepto creativo con paleta de color definida aplicada de forma consistente en los 5 looks',
        'Ficha técnica de cada look con productos, herramientas y tiempo de ejecución',
        'Documentación fotográfica profesional con fondo neutro para el dossier final',
      ],
    }
  },

  // 13 · Imagen y Sonido
  {
    id: 37, familiaId: 13, dificultad: "Básico",
    titulo: "Graba un plano secuencia",
    descripcion: "Captura una escena cotidiana en un único plano continuo sin cortes.",
    objetivos: ["Planificar el movimiento de cámara con un story board previo", "Controlar la exposición manual durante el desplazamiento", "Conseguir un plano estable y con intención narrativa"],
    recursos: ["Cámara DSLR o mirrorless", "Trípode con cabeza fluida o estabilizador", "Guion o story board de la escena", "Software de edición para revisión (DaVinci Resolve)"],
    solucion: {
      tipo: 'Storyboard + notas de rodaje',
      extracto: `STORYBOARD — PLANO SECUENCIA "EL ÚLTIMO CAFÉ"
Alumno: Daniel Reyes · 1º CFGS Realización Audiovisual y Espectáculos

DESCRIPCIÓN DE LA ESCENA
  Duración: 2 min 15 s · Espacio: cafetería del instituto · Sin cortes

VIÑETA 1 — Exterior cafetería (0:00–0:12)
  Cámara en la puerta; personaje entra. MOVIMIENTO: dolly hacia adentro.
  Encuadre: plano general → medio siguiendo al personaje.

VIÑETA 2 — Mostrador (0:12–0:55)
  Personaje pide café. Camarero responde. MOVIMIENTO: travelling lateral suave.
  Encuadre: plano americano. Profundidad de campo: f/2.8 para desfocar fondo.

VIÑETA 3 — Mesa (0:55–2:00)
  Personaje se sienta, revisa el móvil. MOVIMIENTO: zoom óptico muy lento.
  Encuadre: plano medio → primer plano en la expresión final.

PARÁMETROS TÉCNICOS
  ISO 400 · f/2.8 · 1/50 s (obturador 180°) · Focal: 24 mm
  Formato: 1920×1080, 25 fps, perfil S-Log2

NOTAS DE RODAJE
  Toma 1 (13:30): fallo en dolly — repetir. Toma 2 (13:45): OK ✓`,
      puntos: [
        'Storyboard con movimientos de cámara descritos técnicamente por viñeta',
        'Parámetros de exposición manual calculados para luz natural de interior',
        'Notas de rodaje con registro de tomas y selección de la válida',
      ],
    }
  },
  {
    id: 38, familiaId: 13, dificultad: "Intermedio",
    titulo: "Edita un cortometraje de 3 minutos",
    descripcion: "Monta, coloriza y añade música a un corto rodado en clase.",
    objetivos: ["Organizar el material en el proyecto de edición", "Aplicar una LUT de corrección y gradación de color", "Sincronizar la banda sonora y los efectos de sonido"],
    recursos: ["DaVinci Resolve o Premiere Pro", "Material rodado en clase", "Banco de música libre de derechos (Epidemic Sound)", "Auriculares de monitorización"],
    solucion: {
      tipo: 'Notas de montaje y gradación de color',
      extracto: `NOTAS DE MONTAJE — CORTOMETRAJE "SINFONÍA GRIS"
Alumna: Claudia Ortega · 2º CFGS Realización Audiovisual
Software: DaVinci Resolve 18 · Duración final: 3 min 02 s

ESTRUCTURA DE LA TIMELINE
  Pista V1: vídeo principal · Pista V2: títulos y rótulos
  Pista A1: diálogos · Pista A2: música · Pista A3: FX ambientales

DECISIONES DE MONTAJE
  Ritmo: corte a ritmo de música en secuencia de 12 planos (compás 4/4 a 80 bpm)
  Transición: solo corte directo — sin fundidos para mantener tensión
  Raccord de mirada verificado en 5 contraplanos · Sin jump cuts no intencionales

GRADACIÓN DE COLOR (nodo árbol DaVinci)
  Nodo 1 — Balance de blancos: +150 K (de 3.200 K → 5.600 K)
  Nodo 2 — LUT creativa: Kodak 2383 (Look cinematográfico)
  Nodo 3 — Power Window: cielo −0,3 exposición sin afectar cara del actor

AUDIO
  Diálogos: EQ high-pass a 80 Hz + compresión 4:1 · Música a −18 LUFS
  Mezcla final exportada: −14 LUFS (estándar plataformas streaming)`,
      puntos: [
        'Corte a ritmo musical con raccord de mirada verificado en todos los contraplanos',
        'Gradación con árbol de nodos en DaVinci: balance, LUT y Power Window separados',
        'Mezcla de audio normalizada a −14 LUFS según estándar de plataformas digitales',
      ],
    }
  },
  {
    id: 39, familiaId: 13, dificultad: "Avanzado",
    titulo: "Produce un spot publicitario",
    descripcion: "Planifica, rueda y postproduce un spot de 30 segundos para una marca ficticia.",
    objetivos: ["Desarrollar el concepto creativo y el guion técnico", "Dirigir el rodaje gestionando equipo y tiempos", "Postproducir con VFX, color y mezcla de audio finalizada"],
    recursos: ["Cámara Cinema (o DSLR avanzada)", "DaVinci Resolve Studio o Premiere + After Effects", "Micrófono de cañón y grabadora de campo", "Brief de la marca ficticia"],
    solucion: {
      tipo: 'Brief creativo + notas de postproducción',
      extracto: `SPOT PUBLICITARIO 30" — MARCA: "AQUANOVA" (agua mineral)
Alumno: Iván Castellanos · 2º CFGS Producción Audiovisual y Espectáculos

BRIEF CREATIVO
  Concepto: "El origen de la calma" — agua que nace en silencio
  Público: adultos 25–45 urbanitas, estilo de vida saludable
  Tono: minimalista, contemplativo, premium

GUION TÉCNICO (30 segundos)
  0–5 s:   Plano detalle gota cayendo en slow-motion (240 fps) — sin música
  5–12 s:  Manantial entre rocas — drone 4K suave alejamiento — entrada música piano
  12–22 s: Manos sosteniendo botella, fondo verde borroso — plano medio
  22–28 s: Packshot botella sobre fondo blanco — logo aparece con fade in
  28–30 s: Claim "AQUANOVA. La calma en cada sorbo." — voz en off suave

NOTAS DE POSTPRODUCCIÓN
  VFX: partículas de agua en After Effects (Trapcode Particular) en plano gota
  Color: LUT "Teal & Orange" suavizado + brillo en highlights de botella
  Audio: música original piano 30 s + voz en off mezclada a −18 LUFS`,
      puntos: [
        'Brief con concepto creativo, público objetivo y tono definidos antes del rodaje',
        'Guion técnico con timing ajustado al segundo y descripción del movimiento de cámara',
        'Postproducción con VFX en After Effects y mezcla de audio finalizada a estándar',
      ],
    }
  },

  // 14 · Industrias Alimentarias
  {
    id: 40, familiaId: 14, dificultad: "Básico",
    titulo: "Aplica el etiquetado alimentario",
    descripcion: "Etiqueta correctamente un producto según el Reglamento UE 1169/2011.",
    objetivos: ["Identificar las menciones obligatorias en el etiquetado", "Calcular la tabla nutricional por 100 g y por porción", "Declarar los alérgenos en formato correcto"],
    recursos: ["Reglamento UE 1169/2011", "Plantilla de etiqueta alimentaria", "Tablas de composición de alimentos (BEDCA)", "Software de etiquetado (o Excel)"],
    solucion: {
      tipo: 'Etiqueta nutricional completa',
      extracto: `ETIQUETA ALIMENTARIA — MERMELADA DE FRESA ARTESANA
Alumna: Raquel Muñoz · 2º CFGM Elaboración de Productos Alimenticios

MENCIONES OBLIGATORIAS (Reg. UE 1169/2011, art. 9)
  Denominación: "Mermelada de fresa" (contenido mínimo fruta 35 %)
  Ingredientes: fresa (58 %), azúcar, zumo de limón, pectina (E440)
  Cantidad neta: 370 g · Caducidad: 24 meses cerrado / consumir en 15 días abierto
  Empresa: Conservas Muñoz S.L. · Lote: L-230504 · País origen: España
  Condiciones conservación: lugar fresco y seco; refrigerar tras apertura

INFORMACIÓN NUTRICIONAL (por 100 g — Reg. UE 1169, Anexo XV)
  Valor energético:  1.009 kJ / 238 kcal
  Grasas:            0,3 g · de las cuales saturadas: 0,0 g
  Hidratos de carbono: 58,2 g · de los cuales azúcares: 57,8 g
  Proteínas:         0,4 g · Sal: 0,01 g

ALÉRGENOS: ninguno declarado en ingredientes (verificado en especificaciones)`,
      puntos: [
        'Las 10 menciones obligatorias del art. 9 del Reglamento UE 1169/2011 incluidas',
        'Tabla nutricional con todos los nutrientes obligatorios expresados por 100 g',
        'Alérgenos verificados en la cadena de ingredientes incluyendo contaminación cruzada',
      ],
    }
  },
  {
    id: 41, familiaId: 14, dificultad: "Intermedio",
    titulo: "Control de puntos críticos APPCC",
    descripcion: "Identifica los PCC en la elaboración de una conserva y define los límites.",
    objetivos: ["Describir el diagrama de flujo del proceso productivo", "Aplicar el árbol de decisión del Codex para identificar PCC", "Establecer límites críticos, vigilancia y medidas correctoras"],
    recursos: ["Codex Alimentarius — sistema APPCC", "Diagrama de flujo del proceso elegido", "Plantilla APPCC (cuadro de gestión)", "Normativa de higiene alimentaria (Reg. CE 852/2004)"],
    solucion: {
      tipo: 'Tabla APPCC con PCC y límites críticos',
      extracto: `ANÁLISIS APPCC — CONSERVA DE TOMATE TRITURADO
Alumno: Fernando López · 2º CFGM Elaboración de Productos Alimenticios

DIAGRAMA DE FLUJO: Recepción → Lavado → Triturado → Dosificado → Esterilización → Cierre → Enfriado → Almacén

TABLA DE PCC (árbol de decisión Codex CAC/RCP 1-1969, Rev. 4)

ETAPA        | PELIGRO              | PCC | LÍMITE CRÍTICO       | VIGILANCIA           | MEDIDA CORRECTORA
Recepción    | Pesticidas           | No  | —                    | Albarán + cert.      | —
Esteriliz.   | C. botulinum (esporas)| Sí | T ≥ 121°C · t ≥ 3 min | Termógrafo continuo  | Reprocesar o destruir lote
Cierre       | Recontaminación       | Sí | Vacío > 0,45 bar     | Vacuómetro 1/h       | Ajustar selladora

REGISTROS REQUERIDOS: termograma de cada lote + registro de vacuómetro firmado por operario`,
      puntos: [
        'Árbol de decisión Codex aplicado correctamente para identificar los dos PCC del proceso',
        'Límite crítico de esterilización (F0 ≥ 3 equivale a 121°C·3 min) justificado científicamente',
        'Sistema de vigilancia continuo con termógrafo para el PCC de esterilización',
      ],
    }
  },
  {
    id: 42, familiaId: 14, dificultad: "Avanzado",
    titulo: "Desarrolla un nuevo producto cárnico",
    descripcion: "Formula, elabora y valida un embutido crudo-curado con ficha técnica completa.",
    objetivos: ["Formular la mezcla de ingredientes cumpliendo la normativa", "Controlar el proceso de curado (humedad, temperatura y aw)", "Elaborar la ficha técnica, etiquetado y vida útil"],
    recursos: ["Laboratorio de industrias alimentarias", "Aditivos y especias autorizados (lista positiva)", "Cámara de curado con control de T° y HR", "Normativa de productos cárnicos (RD 474/2014)"],
    solucion: {
      tipo: 'Ficha técnica de producto cárnico',
      extracto: `FICHA TÉCNICA — LONGANIZA FRESCA ARTESANA "SEGURA"
Alumna: Rosa Jiménez · 2º CFGM Industrias Alimentarias

FORMULACIÓN (por kg de masa)
  Magro de cerdo (80/20): 700 g · Panceta fresca: 250 g · Hielo: 50 g
  Especias: pimentón dulce 18 g, ajo en polvo 4 g, orégano 2 g, sal 18 g
  Aditivos: nitrito sódico (E250) 0,5 g/kg ✓ (máx. 150 mg/kg según lista positiva)

PROCESO DE ELABORACIÓN
  1. Troceado y enfriamiento a 2–4 °C · 2. Picado: disco 8 mm
  3. Amasado 5 min + incorporación especias · 4. Embutido en tripa natural cerdo 30/32
  5. Atado cada 15 cm · 6. Reposo 12 h en cámara a 4 °C

PARÁMETROS DE CONTROL
  pH final: 5,8 (medido con pH-metro) · aw: 0,97 (actividad de agua)
  Vida útil: 7 días en refrigeración (2–7 °C) bajo vacío

ETIQUETADO (RD 474/2014): "Longaniza fresca" + ingredientes + alérgenos: GLUTEN (tripa) `,
      puntos: [
        'Formulación con dosificación de nitrito E250 dentro del límite legal de 150 mg/kg',
        'Parámetros de aw y pH medidos y registrados para garantizar la seguridad microbiológica',
        'Etiquetado ajustado al RD 474/2014 con mención específica del alérgeno gluten',
      ],
    }
  },

  // 15 · Industrias Extractivas
  {
    id: 43, familiaId: 15, dificultad: "Básico",
    titulo: "Identifica tipos de roca y minerales",
    descripcion: "Clasifica 15 muestras de laboratorio según sus propiedades físicas.",
    objetivos: ["Determinar dureza, brillo, exfoliación y densidad de cada muestra", "Clasificar las rocas como ígneas, sedimentarias o metamórficas", "Cumplimentar la ficha de laboratorio con los resultados"],
    recursos: ["Colección de 15 muestras de roca y mineral", "Escala de Mohs (set de puntas)", "Ácido clorhídrico diluido para carbonatos", "Fichas de clasificación mineralógica"],
    solucion: {
      tipo: 'Tabla de laboratorio mineralógico',
      extracto: `FICHA DE LABORATORIO — IDENTIFICACIÓN DE ROCAS Y MINERALES
Alumno: Álvaro Crespo · 1º CFGM Operaciones de Cantera

Nº | MUESTRA      | DUREZA | BRILLO  | EXFOL. | REAC.HCl | TIPO         | CLASIFICACIÓN
1  | Cuarzo       |  7     | Vítreo  | No     | No       | Mineral      | Silicato
2  | Calcita      |  3     | Nacarado| Sí (3) | Fuerte   | Mineral      | Carbonato
3  | Feldespato K |  6     | Vítreo  | Sí (2) | No       | Mineral      | Silicato
4  | Granito      |  —     | —       | —      | No       | Roca ígnea   | Plutónica
5  | Basalto      |  —     | —       | —      | No       | Roca ígnea   | Volcánica
6  | Caliza       |  —     | —       | —      | Fuerte   | Roca sedim.  | Química
7  | Arenisca     |  —     | —       | —      | Débil    | Roca sedim.  | Detrítica
8  | Pizarra      |  —     | Sedoso  | Sí (1) | No       | Roca metam.  | Foliada
9  | Mármol       |  —     | —       | —      | Fuerte   | Roca metam.  | No foliada
10 | Yeso         |  2     | Nacarado| Sí (1) | No       | Mineral      | Sulfato
[Muestras 11–15 en hoja adjunta]

CONCLUSIÓN: 6 minerales + 9 rocas identificados con 100 % de acierto`,
      puntos: [
        'Determinación de dureza con escala de Mohs aplicada sistemáticamente a cada mineral',
        'Reacción con HCl usada correctamente para distinguir carbonatos de otros minerales',
        'Clasificación genética (ígnea/sedimentaria/metamórfica) justificada para cada roca',
      ],
    }
  },
  {
    id: 44, familiaId: 15, dificultad: "Intermedio",
    titulo: "Calcula la voladura de un banco",
    descripcion: "Diseña la malla de perforación y carga explosiva para un banco de 10 m.",
    objetivos: ["Calcular la burden y el espaciado según el tipo de roca", "Determinar la carga específica de explosivo", "Elaborar el plano de la malla y el esquema de retardo"],
    recursos: ["Manual de voladura de rocas (MAXAM o equivalente)", "Parámetros geomecánicos de la roca", "Hoja de cálculo de diseño de voladuras", "Normativa de explosivos (ITC-MIE-AP2)"],
    solucion: {
      tipo: 'Diseño de malla de perforación',
      extracto: `DISEÑO DE VOLADURA — BANCO CALIZA 10 m
Alumna: Sandra Polo · 2º CFGM Operaciones Mineras
Roca: caliza compacta · RQD = 75 % · UCS = 80 MPa · Densidad: 2.650 kg/m³

PARÁMETROS DE DISEÑO (método de Langefors)
  Diámetro de barreno: Ø = 89 mm (DTH)
  Burden: B = 45 × Ø = 45 × 0,089 = 4,0 m
  Espaciado: E = 1,25 × B = 5,0 m
  Longitud de barreno: H + sobreperforación = 10 + 0,3×4 = 11,2 m
  Taco de retención: T = 0,7 × B = 2,8 m

CARGA EXPLOSIVA (ANFO densidad 0,85 g/cm³)
  Carga de fondo: L = 11,2 – 2,8 = 8,4 m
  Peso carga/barreno: q = π/4 × 0,089² × 8,4 × 0,85 × 1.000 = 44,5 kg
  Carga específica total: Ce = 0,35 kg/m³ ✓ (rango recomendado caliza: 0,30–0,45)

MALLA: 8 × 5 barrenos = 40 barrenos · Retardos: 42 ms entre filas
VIBRACIÓN ESTIMADA: PPV = 8,4 mm/s (< 15 mm/s límite edificios cercanos)`,
      puntos: [
        'Burden calculado con método de Langefors adaptado al diámetro de barreno DTH 89 mm',
        'Carga específica verificada dentro del rango recomendado para caliza compacta',
        'Vibración estimada comprobada por debajo del límite normativo para edificios próximos',
      ],
    }
  },
  {
    id: 45, familiaId: 15, dificultad: "Avanzado",
    titulo: "Plan de restauración de cantera",
    descripcion: "Elabora el plan de cierre y restauración ambiental de una cantera de caliza.",
    objetivos: ["Caracterizar el estado final de la explotación", "Diseñar la revegetación y la estabilización de taludes", "Elaborar el presupuesto y el cronograma de restauración"],
    recursos: ["Ley de minas y normativa autonómica de restauración", "Plano topográfico de la explotación", "Catálogo de especies vegetales autóctonas", "Software SIG (QGIS) para cartografía"],
    solucion: {
      tipo: 'Plan de restauración de cantera',
      extracto: `PLAN DE RESTAURACIÓN — CANTERA CALIZA "LAS LOMAS" (Guadalajara)
Alumno: Eduardo Martín · 2º CFGS Supervisión y Control de Máquinas e Instalaciones Mineras

ESTADO FINAL DE LA EXPLOTACIÓN
  Superficie afectada: 18,5 ha · Talud final: 60° · Bermas cada 10 m de altura

ESTABILIZACIÓN DE TALUDES
  Ángulo de reposo final: 35° (tras perfilado) · Malla de triple torsión en zonas friables
  Cunetas de guardia en coronación: sección trapezoidal 0,5×0,5 m

REVEGETACIÓN (especies autóctonas Castilla-La Mancha)
  Bermas: encina (Quercus ilex) 400 u. + romero (Rosmarinus off.) 1.200 u.
  Taludes: esparceta (Onobrychis viciifolia) + lastón (Brachypodium retusum) — siembra directa
  Fondo de cantera: chopo negro (Populus nigra) en zona húmeda 150 u.

PRESUPUESTO Y CRONOGRAMA
  Trabajos tierra + cunetas: 42.000 € · Revegetación: 28.500 € · Mantenimiento 5 años: 18.000 €
  TOTAL: 88.500 € · Garantía provisional depositada: 95.000 €
  Cronograma: Año 1 — tierra y cunetas / Año 2-3 — plantación / Años 4-6 — mantenimiento`,
      puntos: [
        'Ángulo de talud final calculado con factor de seguridad ≥ 1,3 para arcilla compacta',
        'Selección de especies autóctonas adaptadas a clima mediterráneo continental',
        'Garantía económica depositada superior al presupuesto total según normativa minera',
      ],
    }
  },

  // 16 · Informática y Comunicaciones
  {
    id: 46, familiaId: 16, dificultad: "Básico",
    titulo: "Monta tu primera red local",
    descripcion: "Configura una red doméstica con router, switch y dos equipos.",
    objetivos: ["Conectar físicamente los dispositivos de red", "Configurar direccionamiento IP estático en los equipos", "Verificar la conectividad con ping y traceroute"],
    recursos: ["Router doméstico y switch de 4 puertos", "Dos equipos con Windows o Linux", "Cables de red RJ-45", "Simulador Packet Tracer (Cisco)"],
    solucion: {
      tipo: 'Informe de configuración de red',
      extracto: `INFORME DE CONFIGURACIÓN — RED LOCAL DOMÉSTICA
Alumna: Laura Blanco · 1º CFGM Sistemas Microinformáticos y Redes

TOPOLOGÍA
  Router (192.168.1.1/24) — Switch 4p — PC1 y PC2
  Todos los dispositivos en la misma subred: 192.168.1.0/24

CONFIGURACIÓN IP ESTÁTICA (PC1 — Windows 11)
  Dirección IP:     192.168.1.10
  Máscara:          255.255.255.0
  Puerta de enlace: 192.168.1.1
  DNS preferido:    8.8.8.8 (Google) · DNS alternativo: 1.1.1.1

CONFIGURACIÓN IP ESTÁTICA (PC2 — Ubuntu 22.04)
  /etc/netplan/00-installer-config.yaml:
    addresses: [192.168.1.11/24]
    gateway4: 192.168.1.1
    nameservers: {addresses: [8.8.8.8, 1.1.1.1]}

VERIFICACIÓN DE CONECTIVIDAD
  PC1 → PC2: ping 192.168.1.11 → 4 paquetes enviados, 4 recibidos (0 % pérdida) ✓
  PC1 → Router: ping 192.168.1.1 → OK ✓
  PC1 → Internet: tracert 8.8.8.8 → 2 saltos, latencia 12 ms ✓`,
      puntos: [
        'Direccionamiento IP estático configurado sin conflictos en ambos sistemas operativos',
        'Conectividad verificada con ping entre equipos y hacia la puerta de enlace',
        'Configuración de DNS funcional verificada con resolución de nombres externos',
      ],
    }
  },
  {
    id: 47, familiaId: 16, dificultad: "Intermedio",
    titulo: "Script de backup automatizado",
    descripcion: "Crea un script Bash que haga copias de seguridad diarias en Linux.",
    objetivos: ["Diseñar la lógica de copia incremental con rsync", "Programar la ejecución automática con cron", "Implementar un sistema de rotación de copias antiguas"],
    recursos: ["Servidor Linux (Ubuntu Server o Debian)", "Acceso SSH al servidor", "Man page de rsync y cron", "Almacenamiento externo o NAS de prácticas"],
    solucion: {
      tipo: 'Script Bash + configuración crontab',
      extracto: `#!/bin/bash
# backup_diario.sh — Backup incremental con rsync + rotación 30 días
# Alumno: Marcos Peña · 2º CFGM SMR · Servidor: Ubuntu 22.04 LTS

ORIGEN="/var/www/html /etc /home"
DESTINO="/mnt/nas/backups"
FECHA=$(date +%Y-%m-%d)
LOG="/var/log/backup_diario.log"
DIAS_RETENCION=30

echo "=== Backup iniciado: $(date) ===" >> "$LOG"

for DIR in $ORIGEN; do
  NOMBRE=$(basename "$DIR")
  rsync -avz --delete \
    --link-dest="$DESTINO/ultimo/$NOMBRE" \
    "$DIR/" "$DESTINO/$FECHA/$NOMBRE/" >> "$LOG" 2>&1

  if [ $? -eq 0 ]; then
    echo "OK: $NOMBRE" >> "$LOG"
  else
    echo "ERROR: $NOMBRE — revisa $LOG" | mail -s "Backup fallido" admin@empresa.local
  fi
done

ln -sfn "$DESTINO/$FECHA" "$DESTINO/ultimo"
find "$DESTINO" -maxdepth 1 -type d -mtime +$DIAS_RETENCION -exec rm -rf {} \;

# CRONTAB: 0 2 * * * /usr/local/bin/backup_diario.sh`,
      puntos: [
        'Copia incremental con --link-dest evita duplicar archivos no modificados (hardlinks)',
        'Sistema de rotación automática elimina copias de más de 30 días con find -mtime',
        'Alerta por correo al administrador en caso de fallo de rsync en cualquier directorio',
      ],
    }
  },
  {
    id: 48, familiaId: 16, dificultad: "Avanzado",
    titulo: "Despliega una app en Docker",
    descripcion: "Containeriza una app web y publícala en un registro local.",
    objetivos: ["Escribir un Dockerfile optimizado con multi-stage build", "Orquestar la app con docker-compose (web + base de datos)", "Publicar la imagen en un registry privado (Harbor o similar)"],
    recursos: ["Docker Desktop o Docker Engine en Linux", "Aplicación web de ejemplo (Node.js o Python)", "Documentación oficial de Docker", "Servidor de registro Harbor (o Docker Hub)"],
    solucion: {
      tipo: 'Proyecto Docker',
      extracto: `# docker-compose.yml
# Alumno: Álvaro Méndez · CFGS ASIR 2º curso

version: '3.9'
services:
  web:
    build:
      context: .
      target: production        # multi-stage: imagen final 43 MB
    ports: ["80:3000"]
    environment:
      NODE_ENV: production
      DATABASE_URL: postgres://app:secret@db:5432/appdb
    depends_on:
      db: { condition: service_healthy }
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: appdb
    volumes: [pgdata:/var/lib/postgresql/data]
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 10s
      retries: 5

volumes:
  pgdata:`,
      puntos: [
        'Multi-stage build reduce la imagen final de 890 MB a 43 MB',
        'Healthcheck evita race condition al arrancar la app antes que la BD',
        'Imagen publicada y etiquetada en registry privado Harbor del centro',
      ],
    }
  },

  // 17 · Instalación y Mantenimiento
  {
    id: 49, familiaId: 17, dificultad: "Básico",
    titulo: "Identifica averías en fontanería",
    descripcion: "Diagnostica y repara una fuga en una instalación de agua fría.",
    objetivos: ["Localizar el origen de la fuga con la instalación en servicio", "Cortar el suministro y aislar el tramo afectado", "Realizar la reparación con los materiales adecuados"],
    recursos: ["Instalación de prácticas de fontanería", "Llaves de paso, manómetro y detector de fugas", "Kit de reparación (cinta PTFE, racores, soldadura)","EPI de fontanería"],
    solucion: {
      tipo: 'Parte de reparación de fontanería',
      extracto: `PARTE DE REPARACIÓN — FUGA EN INSTALACIÓN DE AGUA FRÍA
Alumno: Pablo Torres · 1º CFGM Instalaciones en Edificios

DATOS DE LA INTERVENCIÓN
  Fecha: 20/05/2025 · Duración: 1 h 45 min
  Ubicación: tramo bajo lavabo baño principal — tubería PE 20 mm

DIAGNÓSTICO
  Localización de fuga: unión racor 20 mm × 1/2" macho roscado — pérdida visible
  Presión en red detectada: 3,8 bar (manómetro en llave de paso general)
  Causa: apriete insuficiente y ausencia de cinta PTFE en rosca macho

PROCESO DE REPARACIÓN
  1. Corte suministro: llave de paso sección WC-lavabo (sector 2)
  2. Vaciado del tramo afectado (grifo lavabo abierto)
  3. Desmontaje del racor: llave inglesa 17 mm
  4. Inspección rosca: sin daño — limpieza con cepillo metálico
  5. Aplicación cinta PTFE: 3 vueltas sentido horario + pasta de sellado
  6. Montaje: apriete con llave dinamométrica 25 N·m
  7. Apertura gradual y comprobación: sin fugas durante 15 min ✓

MATERIALES: cinta PTFE 12 mm × 0,1 m + pasta sellante (1 aplicación)`,
      puntos: [
        'Corte de suministro en el sector afectado sin interrumpir el resto del edificio',
        'Causa raíz identificada (ausencia de PTFE) y reparación duradera sin sustitución de tubo',
        'Prueba de estanqueidad de 15 minutos a presión de red documentada',
      ],
    }
  },
  {
    id: 50, familiaId: 17, dificultad: "Intermedio",
    titulo: "Mantén un sistema de climatización",
    descripcion: "Realiza el mantenimiento preventivo de una bomba de calor doméstica.",
    objetivos: ["Seguir el protocolo de mantenimiento del fabricante", "Revisar presiones, caudales y estado del refrigerante", "Cumplimentar el libro de mantenimiento de la instalación"],
    recursos: ["Bomba de calor de prácticas", "Manómetros de gases refrigerantes", "Certificado de manipulador de gases fluorados", "Documentación técnica del equipo"],
    solucion: {
      tipo: 'Ficha de mantenimiento preventivo',
      extracto: `FICHA DE MANTENIMIENTO PREVENTIVO — BOMBA DE CALOR AIRE-AGUA
Alumna: Isabel Cruz · 2º CFGM Instalaciones de Producción de Calor
Equipo: Daikin Altherma 16 kW · R-32 · Fecha: 22/05/2025

COMPROBACIONES REALIZADAS
  ✓ Limpieza de filtros de unidad exterior (suciedad media — 3 meses uso)
  ✓ Limpieza evaporador con espuma no corrosiva + secado
  ✓ Revisión conexiones eléctricas: apriete tornillos bornes + medida aislamiento > 50 MΩ

MEDICIÓN DE PRESIONES (manifold R-32, certificado F-Gas)
  Presión baja (aspiración): 12,4 bar → T° saturación: 5,2 °C ✓
  Presión alta (descarga): 28,6 bar → T° saturación: 44,8 °C ✓
  Sobrecalentamiento: 8 K (rango óptimo 5–10 K) ✓
  Subenfriamiento: 6 K (rango óptimo 5–8 K) ✓

CAUDAL DE AGUA CIRCUITO PRIMARIO
  T° impulsión: 45 °C · T° retorno: 40 °C · ΔT = 5 K ✓
  COP estimado en condiciones actuales: 3,8

ANOTACIONES: lubricar rodamientos ventilador exterior en siguiente revisión (6 meses)`,
      puntos: [
        'Presiones de alta y baja verificadas con manómetros de gas fluorado F-Gas R-32',
        'Sobrecalentamiento y subenfriamiento dentro de rango óptimo — sin carga de refrigerante necesaria',
        'COP estimado de 3,8 documentado para comparación histórica de rendimiento',
      ],
    }
  },
  {
    id: 51, familiaId: 17, dificultad: "Avanzado",
    titulo: "Puesta en marcha de una instalación ACS",
    descripcion: "Instala y regula un sistema de agua caliente sanitaria con apoyo solar.",
    objetivos: ["Montar el circuito primario y secundario solar", "Ajustar la centralita de regulación diferencial", "Verificar el rendimiento de la instalación y corregir desviaciones"],
    recursos: ["Kit de instalación solar térmica de prácticas", "Centralita diferencial y sondas de temperatura", "RITE (Reglamento de Instalaciones Térmicas en Edificios)", "Herramientas de fontanería y soldadura de cobre"],
    solucion: {
      tipo: 'Informe de puesta en marcha ACS solar',
      extracto: `INFORME DE PUESTA EN MARCHA — INSTALACIÓN ACS SOLAR TÉRMICA
Alumno: Jorge Navarro · 2º CFGS Instalaciones Térmicas y de Fluidos
Sistema: captador plano 2 m² + acumulador 200 L + apoyo caldera gas

VERIFICACIONES PREVIAS AL LLENADO
  ✓ Estanqueidad circuito primario: presión prueba 4 bar, 30 min — sin pérdidas
  ✓ Purgado del circuito primario con bomba de llenado — sin aire en manómetro
  ✓ Mezcla glicol: 30 % propilenglicol → protección anticongelante a −15 °C

AJUSTE DE LA CENTRALITA DIFERENCIAL (Resol BS/3)
  Sonda S1 (captador): instalada en zona superior del absorbedor
  Sonda S2 (acumulador): instalada en 1/3 inferior del depósito
  ΔT arranque bomba: configurado a 8 K ✓ (RITE recomendación: 6–10 K)
  ΔT parada bomba: configurado a 3 K ✓

VERIFICACIÓN DE FUNCIONAMIENTO (12:30 h, cielo despejado)
  T° captador (S1): 68 °C · T° acumulador (S2): 42 °C · ΔT = 26 K → bomba activa ✓
  Caudal primario: 2,1 L/min (rango diseño: 1,5–2,5 L/min) ✓
  T° ACS en consumo: 52 °C (≥ 50 °C reglamentario RITE IT 1.2.4.3) ✓`,
      puntos: [
        'Prueba de estanqueidad a 4 bar durante 30 min documentada antes del llenado',
        'Parámetros diferenciales de la centralita ajustados dentro de la recomendación RITE',
        'Temperatura ACS en consumo verificada por encima de 50°C según exigencia RITE',
      ],
    }
  },

  // 18 · Madera, Mueble y Corcho
  {
    id: 52, familiaId: 18, dificultad: "Básico",
    titulo: "Identifica especies de madera",
    descripcion: "Clasifica 10 muestras según veta, color y propiedades tecnológicas.",
    objetivos: ["Observar la veta, el poro y el color de cada muestra", "Asociar cada especie con sus usos más comunes", "Cumplimentar la ficha de identificación de maderas"],
    recursos: ["Colección de 10 muestras de madera cepillada", "Lupa de mano 10x", "Guía de identificación de maderas", "Ficha de propiedades tecnológicas"],
    solucion: {
      tipo: 'Tabla de identificación de maderas',
      extracto: `FICHA DE IDENTIFICACIÓN DE MADERAS — 10 MUESTRAS
Alumna: Silvia Gutiérrez · 1º CFGM Carpintería y Mueble

Nº | ESPECIE        | COLOR        | VETA         | PORO  | DUREZA   | USO PRINCIPAL
1  | Roble          | Pardo-amarillo | Rayada      | Grueso| Dura     | Estructura, tarima
2  | Pino silvestre | Rojizo-marrón  | Paralela    | —     | Semi.    | Carpintería interior
3  | Haya           | Blanco-rosado  | Homogénea   | Fino  | Dura     | Mobiliario, pisos
4  | Teca           | Marrón dorado  | Ondulada    | Medio | Muy dura | Exterior, náutica
5  | Cerezo         | Rojo pardo     | Irregular   | Fino  | Dura     | Mobiliario noble
6  | Nogal          | Marrón oscuro  | Veteada     | Medio | Dura     | Enchapado, lujo
7  | Abeto          | Blanco-crema   | Paralela    | —     | Blanda   | Construcción, embalaje
8  | Caoba          | Rojo-marrón    | Entrelazada | Medio | Semi.    | Mobiliario, barcos
9  | Chopo          | Blanco-gris    | Recta       | Fino  | Blanda   | Contrachapado, pasta
10 | Olivo          | Amarillo-verde | Sinuosa     | Fino  | Muy dura | Tornería, utensilios

METODOLOGÍA: observación veta con lupa 10× + test dureza (navaja) + comparación guía`,
      puntos: [
        'Identificación basada en color, veta y porosidad observados con lupa de 10 aumentos',
        'Dureza relativa determinada con test de navaja y comparación táctil entre muestras',
        'Usos principales asociados a las propiedades tecnológicas de cada especie',
      ],
    }
  },
  {
    id: 53, familiaId: 18, dificultad: "Intermedio",
    titulo: "Fabrica una silla en taller",
    descripcion: "Mecaniza, ensambla y lacas una silla de madera maciza siguiendo el plano.",
    objetivos: ["Interpretar el plano de construcción y la lista de materiales", "Mecanizar las piezas con sierra, fresadora y lijadora", "Ensamblar con colas y herrajes y aplicar el acabado final"],
    recursos: ["Taller de madera con maquinaria", "Plano de la silla en escala 1:5 y 1:1", "Madera de haya o roble macizo", "Cola blanca, prensas y kit de lacado"],
    solucion: {
      tipo: 'Parte de taller con fases de fabricación',
      extracto: `PARTE DE TALLER — FABRICACIÓN DE SILLA CUATRO PATAS
Alumno: Rubén Sanz · 2º CFGM Carpintería y Mueble
Material: Haya maciza · Acabado: lacado en agua satinado blanco roto

LISTA DE PIEZAS (haya maciza seca 8 % H.)
  4 patas: 42×42×430 mm · 2 travesaños frontales: 35×30×420 mm
  2 travesaños laterales: 35×30×380 mm · Asiento: tablero macizo 400×400×22 mm
  Respaldo: 2 listones 35×20×460 mm curvados

FASES DE MECANIZADO
  1. Escuadrado en sierra circular: todas las piezas a medida (±0,5 mm)
  2. Fresado de espigas 10×40 mm en travesaños (fresadora de banco)
  3. Taladrado de cajas en patas: Ø10×42 mm (taladro de columna, guía angular)
  4. Lijado progresivo piezas sueltas: 80 → 120 → 180 grano

ENSAMBLAJE
  5. Encolado dry-fit previo — verificar ángulos con escuadra 90° ✓
  6. Encolado definitivo cola Titebond II, prensas 4 h, 20 °C

ACABADO
  7. Masilla poros + lija 220 · Imprimación + 2 capas laca satinada agua
  8. Lija entre capas con estropajo fino · Tiempo total: 18 h taller`,
      puntos: [
        'Union espiga-caja con holgura de ajuste de 0,2 mm para encolado óptimo',
        'Dry-fit previo al encolado definitivo para detectar desviaciones angulares',
        'Sistema de lacado al agua con imprimación selladora entre capas documentado',
      ],
    }
  },
  {
    id: 54, familiaId: 18, dificultad: "Avanzado",
    titulo: "Diseña una colección de mobiliario",
    descripcion: "Desarrolla en CAD y prototipa una línea de tres muebles con identidad de autor.",
    objetivos: ["Diseñar los tres muebles en 3D con coherencia estética", "Elaborar los planos de fabricación y la lista de materiales", "Construir un prototipo a escala 1:5 y presentar el dossier"],
    recursos: ["SolidWorks, Fusion 360 o SketchUp Pro", "Taller de maquetas con cortadora láser", "Maderas y materiales para prototipo", "Plantilla de dossier de colección"],
    solucion: {
      tipo: 'Dossier de colección de mobiliario',
      extracto: `COLECCIÓN "MÍNIMA" — MOBILIARIO RESIDENCIAL
Alumna: Carmen Villalba · 2º CFGS Diseño y Amueblamiento
Software: Fusion 360 · Prototipo: escala 1:5 en DM lacado

MUEBLE 1 — Estantería modular "CELDA"
  Dimensiones: 200×35×180 cm · Material: tablero DM lacado blanco + estructura acero negro
  Plano: 3 vistas + despiece · Lista materiales: 6 estantes 196×33 cm + perfil HEB 30

MUEBLE 2 — Mesa de comedor "PLANO"
  Dimensiones: 200×90×75 cm · Material: madera maciza de roble + pata acero corten
  Plano: alzado, planta, lateral + detalle unión pata-tablero
  Precio material estimado: 680 € · PVP: 1.450 €

MUEBLE 3 — Banco de entrada "BORDE"
  Dimensiones: 120×35×42 cm · Material: nogal macizo + asiento cuero natural
  Plano: 3 vistas + detalle tapizado

COHERENCIA DE COLECCIÓN
  Estética: línea recta y materiales naturales con contrastes metal/madera/cuero
  Acabados: sin lacas brillantes — mato aceite de nuez en maderas

PRESUPUESTO PROTOTIPO 1:5 (DM 3 mm cortadora láser): 34,50 €`,
      puntos: [
        'Tres muebles con planos de fabricación acotados y lista de materiales cuantificada',
        'Prototipo a escala 1:5 fabricado con cortadora láser para validar proporciones',
        'Precio de venta calculado con margen del 113 % sobre coste de materiales',
      ],
    }
  },

  // 19 · Marítimo Pesquera
  {
    id: 55, familiaId: 19, dificultad: "Básico",
    titulo: "Lee una carta náutica",
    descripcion: "Identifica balizas, sondas y líneas de peligro en una carta de la zona costera.",
    objetivos: ["Reconocer los símbolos del sistema IALA en la carta", "Leer las sondas y calcular la profundidad corregida por marea", "Identificar los peligros para la navegación en la zona"],
    recursos: ["Carta náutica del SHOM o IHM de la zona costera", "Escalímetro y compás de puntas", "Tabla de mareas del año en curso", "Manual de simbología náutica (IHO S-4)"],
    solucion: {
      tipo: 'Ficha de lectura de carta náutica',
      extracto: `FICHA DE LECTURA — CARTA NÁUTICA IHM 4441 (Ría de Vigo)
Alumno: Óscar Fernández · 1º CFGM Operación, Control y Mantenimiento de Buques
Escala: 1:40.000 · Datum: WGS84 · Sondas en metros referidas a BMVE

SIMBOLOGÍA IALA IDENTIFICADA (sistema A — Europa)
  Boya cónica roja (bbd): puerto a babor entrando → laterales estribor
  Boya cilíndrica verde (est.): puerto a estribor entrando → laterales babor
  Luz de sector Fl(2)R 5s: centelleo grupo 2, rojo, período 5 s — peligro
  Marca de peligro aislado Fl(2) 5s: tope bolas negras — escollo sumergido

SONDAS Y PROFUNDIDADES CORREGIDAS (marea actual: +1,8 m sobre BMVE)
  Canal principal (sonda 12): prof. real = 12 + 1,8 = 13,8 m ✓ para buque 4 m calado
  Zona de fondeo (sonda 4): prof. real = 5,8 m — aceptable con ancla de 20 m

PELIGROS IDENTIFICADOS
  Bajo Punta Subrido (sonda 0,5 m + marea = 2,3 m) — EVITAR para calado > 1,5 m
  Zona de fondeo prohibido marcada con círculo punteado al N de la isla`,
      puntos: [
        'Simbología IALA sistema A identificada correctamente diferenciando balizas laterales y cardinales',
        'Corrección de sondas por altura de marea calculada con tabla oficial del Servicio Hidrográfico',
        'Peligros para la navegación evaluados en función del calado de la embarcación',
      ],
    }
  },
  {
    id: 56, familiaId: 19, dificultad: "Intermedio",
    titulo: "Planifica una singladura costera",
    descripcion: "Traza el rumbo, calcula la estima y prevé los puntos de recalada.",
    objetivos: ["Trazar la derrota considerando vientos, corrientes y separaciones", "Calcular ETA en cada waypoint con la velocidad de la embarcación", "Preparar el cuaderno de bitácora con los datos del viaje"],
    recursos: ["Carta náutica y paralelas", "GPS de prácticas o simulador de navegación", "Almanaque náutico o aplicación de predicción meteorológica", "Compás de variación y tablas de corrección"],
    solucion: {
      tipo: 'Cuaderno de bitácora con rumbos y ETAs',
      extracto: `CUADERNO DE BITÁCORA — SINGLADURA VIGO → A CORUÑA
Alumna: Noa Rodríguez · 2º CFGM Pesca y Transporte Marítimo
Embarcación: Velero 10 m · Velocidad media: 5 nudos · Fecha: 15/06/2025

WAYPOINTS Y CÁLCULO DE ESTIMA
  WP1 — Salida: Vigo 42°14'N 008°44'W · Hora: 06:00 UTC
  WP2 — Cíes Norte: Rmv = 310° · Distancia = 8,2 mn · ETA: 07:38 UTC
  WP3 — Pta. Carreiro: Rmv = 348° · Distancia = 21,5 mn · ETA: 11:54 UTC
  WP4 — A Coruña Torre: Rmv = 002° · Distancia = 37,8 mn · ETA: 19:33 UTC

CORRECCIONES APLICADAS
  Variación magnética zona: 1°30'W (2025) → Rc = Rmv − 1,5° = 308,5° (WP1-WP2)
  Corriente: NNE 0,8 kn → derivación 4° a sotavento → rumbo a proa corregido

CONDICIONES METEOROLÓGICAS (Meteogalicia)
  Viento: SW 15 kn (fuerza 4) · Mar: 1,5 m · Visibilidad: > 10 mn

ANOTACIONES DE GUARDIA
  06:00 — Salida; motor hasta abrir la ría. 07:15 — Vela mayor + génova izada
  11:00 — Reducción velocidad por racha 22 kn — rizos en mayor`,
      puntos: [
        'Rumbos verdaderos calculados con corrección de variación magnética aplicada en cada tramo',
        'ETAs calculadas con velocidad media y corriente de la zona aplicada como derivación',
        'Cuaderno de guardia con registro horario de condiciones y maniobras realizadas',
      ],
    }
  },
  {
    id: 57, familiaId: 19, dificultad: "Avanzado",
    titulo: "Gestión de cuota pesquera",
    descripcion: "Elabora el plan de pesca óptimo respetando las vedas y cuotas de la UE.",
    objetivos: ["Interpretar el reglamento de cuotas de la Política Pesquera Común", "Optimizar la distribución de días de pesca por caladero", "Elaborar el informe de capturas y el libro diario de pesca"],
    recursos: ["Reglamento PPC (UE) de cuotas vigente", "Datos históricos de capturas de la embarcación", "Hoja de cálculo de gestión de cuotas", "Formulario oficial de diario de pesca electrónico"],
    solucion: {
      tipo: 'Plan de pesca con gestión de cuotas',
      extracto: `PLAN DE PESCA ÓPTIMO — PESQUERO "ESTRELLA DO MAR" (Vigo)
Alumno: Martín Sousa · CFGS Gestión Pesquera Sostenible
Arte: arrastre fondo · Caladero: Gran Sol (ICES VII) · Año 2025

CUOTAS ASIGNADAS (Reg. UE 2025/100 — especie principal)
  Merluza (HKE) zona VIIa: 28.400 kg · Cigala (NEP): 12.200 kg
  Lenguado (SOL) VII: 4.800 kg (especie sensible — cuota agotada en agosto histórico)

DISTRIBUCIÓN DE DÍAS DE PESCA
  Temporada: 220 días · Vedas: 3 semanas en febrero (zona reproducción)
  Cuota diaria media merluza: 28.400 / 197 días efectivos = 144 kg/día

ESTRATEGIA DE OPTIMIZACIÓN
  Campaña alta (ene–abr): 60 % cuota merluza + foco cigala (precio +22 % invierno)
  Parada biológica voluntaria 7 días julio: ahorro 1.008 kg → acumular para sep.
  Alerta de cuota: alarma al 80 % → reducir esfuerzo o cambiar caladero

LIBRO DIARIO DE PESCA (extracto 15/05/2025)
  Salida: 06:00 · Zonas: VIIb · Lances: 3 · Captura: merluza 128 kg + cigala 45 kg
  Descartes: 12 kg (tallas < mín. legal 27 cm) — registrados en DCP electrónico`,
      puntos: [
        'Cuota diaria media calculada descontando días de veda y parada biológica voluntaria',
        'Estrategia estacional con foco en cigala en invierno aprovechando el diferencial de precio',
        'Sistema de alerta al 80 % de cuota para evitar el cierre anticipado de la campaña',
      ],
    }
  },

  // 20 · Química
  {
    id: 58, familiaId: 20, dificultad: "Básico",
    titulo: "Prepara una disolución valorada",
    descripcion: "Calcula y prepara 250 mL de NaOH 0,1 M a partir del sólido.",
    objetivos: ["Calcular la masa necesaria de NaOH aplicando la definición de molaridad", "Utilizar correctamente el matraz aforado", "Etiquetar la disolución con todos los datos de seguridad"],
    recursos: ["Balanza analítica", "Matraz aforado de 250 mL", "NaOH (pellets) y agua desionizada", "Ficha de seguridad del NaOH (FDS)"],
    solucion: {
      tipo: 'Informe de laboratorio químico',
      extracto: `INFORME DE LABORATORIO — PREPARACIÓN NaOH 0,1 M
Alumna: Ana García · 1º CFGM Laboratorio de Análisis y Control de Calidad

CÁLCULO PREVIO
  M = n/V → n = M × V = 0,1 mol/L × 0,250 L = 0,025 mol NaOH
  Masa molar NaOH = 22,99 + 16 + 1 = 39,99 g/mol
  Masa necesaria: m = n × Mm = 0,025 × 39,99 = 1,00 g NaOH

PROCEDIMIENTO
  1. Tarar el vaso de precipitados de 100 mL en la balanza analítica
  2. Pesar 1,0012 g de NaOH (pellets secos de desecador) → error: +0,12 mg
  3. Disolver en 50 mL de agua desionizada con agitación
  4. Transferir cuantitativamente al matraz aforado 250 mL (3 enjuagues del vaso)
  5. Enrasar a temperatura ambiente (20 °C) — línea inferior del menisco
  6. Homogeneizar invirtiendo el matraz tapado 10 veces

ETIQUETA DE LA DISOLUCIÓN
  NaOH 0,1 M · 250 mL · Preparada: 19/05/2025 · Caduca: 19/11/2025
  Peligro: corrosivo (H290, H314) — almacenar en armario de corrosivos`,
      puntos: [
        'Masa calculada aplicando la definición de molaridad con Mm de tabla periódica',
        'Transferencia cuantitativa con triple enjuague del vaso garantiza exactitud de la concentración',
        'Etiqueta con código H de peligro y fecha de caducidad según normativa de laboratorio',
      ],
    }
  },
  {
    id: 59, familiaId: 20, dificultad: "Intermedio",
    titulo: "Realiza una titulación ácido-base",
    descripcion: "Determina la concentración de ácido acético en vinagre comercial por volumetría.",
    objetivos: ["Estandarizar la disolución de NaOH con ftalato ácido de potasio", "Realizar la titulación por triplicado y calcular la media", "Expresar el resultado con su incertidumbre analítica"],
    recursos: ["Bureta de 25 mL y soporte universal", "Indicador fenolftaleína", "Vinagre comercial y NaOH 0,1 M", "Calculadora y hoja de resultados analíticos"],
    solucion: {
      tipo: 'Informe analítico de titulación',
      extracto: `INFORME ANALÍTICO — TITULACIÓN ÁCIDO ACÉTICO EN VINAGRE
Alumno: Diego Ferrer · 2º CFGM Laboratorio de Análisis y Control de Calidad

ESTANDARIZACIÓN DEL NaOH (ftalato ácido de potasio KHP)
  Masa KHP pesada: 510,3 mg · Mm(KHP) = 204,22 g/mol
  mol KHP = 0,5103/204,22 = 2,499×10⁻³ mol → [NaOH] = 2,499/25,00 = 0,09996 M

TITULACIÓN VINAGRE (alícuota 5,00 mL diluida 1:5)
  Muestra | V NaOH (mL) | mmol CH₃COOH | [AcH] (M)
     1    |    18,24    |     1,824    |    0,9147
     2    |    18,19    |     1,819    |    0,9097
     3    |    18,22    |     1,822    |    0,9117
  Media: 0,9120 M · Desviación estándar: 0,0025 M · RSD: 0,27 %

RESULTADO FINAL
  Acidez acética = 0,9120 M × 60,05 g/mol × 10 = 54,8 g/L = 5,48 %
  Etiqueta del vinagre declara: 5,0–5,5 % ✓ (dentro del rango declarado)

INCERTIDUMBRE EXPANDIDA (k=2): ± 0,06 g/L (95 % confianza)`,
      puntos: [
        'Estandarización del NaOH con KHP antes de la titulación garantiza trazabilidad metrológica',
        'Triplicado con RSD de 0,27 % acredita precisión de la técnica dentro de criterios QC',
        'Incertidumbre expandida calculada con factor de cobertura k=2 para intervalo de confianza 95 %',
      ],
    }
  },
  {
    id: 60, familiaId: 20, dificultad: "Avanzado",
    titulo: "Optimiza un proceso de síntesis",
    descripcion: "Diseña el escalado de una reacción de esterificación con rendimiento >85%.",
    objetivos: ["Calcular el balance másico y el rendimiento teórico de la reacción", "Optimizar las variables de proceso (T°, tiempo, catalizador)", "Elaborar el informe de proceso con los parámetros escalados"],
    recursos: ["Laboratorio de síntesis orgánica", "Software Aspen Plus o ChemCAD (o Excel avanzado)", "Bibliografía de cinética química (Fogler o Levenspiel)", "EPI específicos de síntesis (gafas, guantes criogénicos)"],
    solucion: {
      tipo: 'Informe de optimización de síntesis',
      extracto: `INFORME DE PROCESO — ESTERIFICACIÓN ESCALONADA (Fischer)
Alumna: María Palacios · 2º CFGS Química Industrial
Reacción: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (cat. H₂SO₄)

BALANCE MÁSICO (escala laboratorio: 100 g AcOH)
  mol AcOH = 100/60,05 = 1,665 mol · mol EtOH (1:1,2) = 2,0 mol = 92,0 g
  Masa teórica AcOEt = 1,665 × 88,11 = 146,7 g
  Masa obtenida (destilación): 128,4 g → Rendimiento = 87,5 % ✓ (> 85 % objetivo)

OPTIMIZACIÓN DE VARIABLES
  T° reacción: 78 °C (punto ebullición AcOEt para arrastre in situ → K desplazada)
  Catalizador: H₂SO₄ 98 % — 5 mL por 100 g AcOH · Tiempo: 90 min
  Exceso EtOH: 20 % (relación 1:1,2) → conversión AcOH = 89,3 %

ESCALADO PROPUESTO (× 1.000 para planta piloto)
  AcOH: 100 kg · EtOH: 92 kg · Reactor agitado 250 L con camisa calefactora
  Separación: columna destilación 10 platos teóricos (simulación Aspen+)
  Productividad estimada: 128 kg AcOEt/lote · 3 lotes/día = 384 kg/día`,
      puntos: [
        'Balance másico con rendimiento del 87,5 % superando el objetivo del 85 %',
        'Desplazamiento del equilibrio mediante destilación in situ del éster formado',
        'Escalado ×1.000 con simulación en Aspen Plus para diseño de columna de destilación',
      ],
    }
  },

  // 21 · Sanidad
  {
    id: 61, familiaId: 21, dificultad: "Básico",
    titulo: "Primeros auxilios básicos",
    descripcion: "Practica RCP y la maniobra de Heimlich con un maniquí de prácticas.",
    objetivos: ["Evaluar correctamente la escena y al paciente (PAS)", "Ejecutar la RCP con la frecuencia y profundidad correctas", "Aplicar la maniobra de Heimlich en caso de atragantamiento"],
    recursos: ["Maniquí de RCP adulto y pediátrico", "DEA de prácticas", "Guía ERC (European Resuscitation Council)", "Guantes de nitrilo y mascarilla de barrera"],
    solucion: {
      tipo: 'Ficha de práctica evaluada',
      extracto: `PRÁCTICA RCP BÁSICA — Evaluación de competencias
Alumna: Sara Molina · 1º CFGM Emergencias Sanitarias

EVALUACIÓN DE LA ESCENA (PAS)
  ✓ Proteger: verificados los peligros del entorno antes de actuar
  ✓ Avisar: llamada al 112 simulada con datos correctos
       – Localización exacta, nº víctimas, estado y acciones en curso
  ✓ Socorrer: protocolo iniciado en < 30 segundos

EJECUCIÓN DE LA RCP (adulto)
  Comprobación respuesta: estimulación hombros + llamada verbal
  Apertura vía aérea: maniobra frente-mentón correcta
  Verificación respiración: máx. 10 segundos respetados
  Compresiones: 30 × 2 ventilaciones
    · Frecuencia medida: 108 ppm  ✓ (rango 100-120 ppm)
    · Profundidad: ~5,5 cm estimada  ✓ (rango 5-6 cm)
  DEA: conectado y operado correctamente en ciclo 2

RESULTADO OBSERVADOR: Técnica correcta en 4/4 ciclos evaluados`,
      puntos: [
        'Protocolo PAS completado correctamente antes de iniciar la RCP',
        'Frecuencia y profundidad de compresiones dentro de guías ERC 2021',
        'Maniobra de Heimlich practicada en maniquí adulto y pediátrico',
      ],
    }
  },
  {
    id: 62, familiaId: 21, dificultad: "Intermedio",
    titulo: "Lectura de signos vitales",
    descripcion: "Interpreta constantes de un paciente simulado y elabora un informe.",
    objetivos: ["Medir TA, FC, FR, SpO2 y temperatura con los equipos correctos", "Identificar valores fuera del rango normal por edad", "Registrar y comunicar los hallazgos en la hoja de enfermería"],
    recursos: ["Tensiómetro digital, pulsioxímetro y termómetro", "Paciente simulado o maniquí avanzado", "Hoja de registro de constantes vitales", "Valores de referencia por grupo de edad (AHA/ESC)"],
    solucion: {
      tipo: 'Hoja de constantes vitales con interpretación',
      extracto: `HOJA DE REGISTRO DE CONSTANTES VITALES
Alumna: Teresa Abad · 2º CFGM Cuidados Auxiliares de Enfermería
Paciente simulado: varón, 68 años, ingresado por EPOC agudizada

CONSTANTES MEDIDAS (08:30 h)
  Tensión arterial: 148/92 mmHg → Hipertensión grado 1 (normal < 130/80)
  Frecuencia cardíaca: 96 lpm → Taquicardia leve (normal adulto: 60–100)
  Frecuencia respiratoria: 24 rpm → TAQUIPNEA (normal: 12–20) ⚠️
  SpO₂ (pulsioxímetro): 91 % → Hipoxemia leve (normal ≥ 95 %) ⚠️
  Temperatura axilar: 37,8 °C → Febrícula (normal 36–37,5 °C)
  Glucemia capilar: 118 mg/dL → Normal en ayunas (< 100 leve elevación)

INTERPRETACIÓN Y COMUNICACIÓN
  Paciente con signos de agudización: SpO₂ 91 % + FR 24 rpm requieren
  comunicación INMEDIATA al profesional de enfermería/médico.

  SBAR comunicado: Situación (paciente agitado, FR elevada) | Antecedentes (EPOC)
  | Análisis (posible broncospasmo) | Recomendación (O₂ en gafas 2 L/min)`,
      puntos: [
        'Las seis constantes vitales medidas con el equipo correcto y registradas con unidades',
        'Valores fuera de rango identificados y comparados con rangos de referencia AHA/ESC',
        'Comunicación SBAR redactada para escalado inmediato ante SpO₂ crítica',
      ],
    }
  },
  {
    id: 63, familiaId: 21, dificultad: "Avanzado",
    titulo: "Simulación de triaje en urgencias",
    descripcion: "Clasifica 10 casos clínicos según el sistema Manchester en menos de 20 min.",
    objetivos: ["Aplicar el árbol de decisión del Sistema Manchester Triage", "Priorizar correctamente los casos de mayor gravedad", "Documentar el triaje y justificar cada decisión"],
    recursos: ["Sistema Manchester Triage (libro y app)", "10 casos clínicos simulados", "Fichas de paciente con signos y síntomas", "Escenario de urgencias simuladas"],
    solucion: {
      tipo: 'Informe de triaje Manchester',
      extracto: `INFORME DE TRIAJE — SISTEMA MANCHESTER (10 CASOS)
Alumno: Alejandro Vidal · 2º CFGS Emergencias Sanitarias
Tiempo total de triaje: 17 min 30 s ✓ (límite: 20 min)

CASO | MOTIVO CONSULTA              | DISCRIMINADOR              | COLOR | T° MAX ATENCIÓN
1    | Dolor torácico opresivo       | Dolor actual severo        | ROJO  | Inmediato
2    | Fractura abierta antebrazo    | Hemorragia grave           | ROJO  | Inmediato
3    | Cefalea intensa súbita        | Inicio súbito muy severo   | NARANJA| 10 min
4    | Fiebre 39,5 °C + tos          | Fiebre en adulto           | VERDE | 120 min
5    | Herida incisa superficial dedos| Dolor moderado            | VERDE | 120 min
6    | Disnea en reposo              | Dificultad respiratoria    | NARANJA| 10 min
7    | Vómitos repetidos sin sangre  | Vómitos persistentes       | AMARILLO| 30 min
8    | Ansiedad sin síntomas físicos | Problema conductual        | AZUL  | 240 min
9    | Dolor abdominal moderado      | Dolor actual moderado      | AMARILLO| 30 min
10   | Caída anciana con dolor cadera| Dolor al caminar           | NARANJA| 10 min

RESULTADO: 10/10 clasificaciones correctas · Tasa de acierto: 100 %`,
      puntos: [
        'Los 10 casos clasificados correctamente con discriminador específico del árbol Manchester',
        'Dos casos rojos identificados en primero y segundo lugar por criterio de prioridad absoluta',
        'Tiempo total de triaje de 17 min 30 s dentro del límite de 20 min del protocolo',
      ],
    }
  },

  // 22 · Seguridad y Medioambiente
  {
    id: 64, familiaId: 22, dificultad: "Básico",
    titulo: "Identifica riesgos en un puesto de trabajo",
    descripcion: "Cumplimenta la ficha de evaluación de riesgos de un puesto de oficina.",
    objetivos: ["Reconocer los riesgos ergonómicos, eléctricos y de incendio", "Valorar la probabilidad y consecuencia de cada riesgo", "Proponer medidas preventivas específicas"],
    recursos: ["Guía de evaluación de riesgos del INSST", "Plantilla de evaluación de riesgos", "Checklist de inspección de puesto de trabajo", "Ley 31/1995 de Prevención de Riesgos Laborales"],
    solucion: {
      tipo: 'Evaluación de riesgos laboral',
      extracto: `EVALUACIÓN DE RIESGOS — PUESTO ADMINISTRATIVO (OFICINA TIPO)
Alumna: Rocío Álvarez · 2º CFGS Prevención de Riesgos Profesionales
Empresa ficticia: Gestoría Financiera Argos S.L. · Puesto: Técnico/a Administrativo/a

RIESGO              | PROB. | CONSEC. | NIVEL     | MEDIDA PREVENTIVA
Fatiga visual       |  3-F  |   1-L   | TOLERABLE | Pantalla ≥ 50 cm, pausa 5'/h, luz natural
Lumbalgia (sedentarismo)| 3-F| 2-G   | MODERADO  | Silla ergonómica + reposapiés + micropausas
Estrés crónico      |  2-M  |   3-E   | MODERADO  | Gestión carga trabajo + evaluación psicosocial
Caídas al mismo nivel| 1-B  |   2-G   | TOLERABLE | Organizar cables, antideslizante en pasillos
Contacto eléctrico  |  1-B  |   3-E   | MODERADO  | Revisión reglamentaria instalación eléctrica
Incendio            |  1-B  |   4-D   | MODERADO  | Extintores revisados + plan de evacuación

Escala: Prob. (1-Baja, 2-Media, 3-Alta) × Cons. (1-Leve, 2-Grave, 3-Extremo, 4-Dañino)
Nivel: Trivial / Tolerable / Moderado / Importante / Intolerable

RIESGO PRIORITARIO: lumbalgia y estrés → acción correctiva en < 3 meses (Mod.)`,
      puntos: [
        'Matriz de riesgo con probabilidad y consecuencia aplicada conforme a metodología INSST',
        'Seis riesgos identificados en categorías ergonómica, eléctrica y psicosocial del puesto',
        'Medidas preventivas específicas con plazo de implantación definido por nivel de riesgo',
      ],
    }
  },
  {
    id: 65, familiaId: 22, dificultad: "Intermedio",
    titulo: "Elabora un plan de emergencia",
    descripcion: "Diseña el plan de evacuación de un centro educativo de 300 personas.",
    objetivos: ["Identificar las vías de evacuación y los puntos de reunión", "Asignar roles y responsabilidades en la emergencia", "Elaborar el plano de evacuación y el plan de actuación"],
    recursos: ["Planos del edificio", "Norma UNE 23032 y Manual de autoprotección", "Software de diseño (AutoCAD o similar)", "RD 393/2007 (Norma básica de autoprotección)"],
    solucion: {
      tipo: 'Plan de evacuación de centro educativo',
      extracto: `PLAN DE EMERGENCIA Y EVACUACIÓN
Alumno: Luis Méndez · 2º CFGS Gestión de Emergencias y Protección Civil
Centro: IES Río Tormes · Superficie: 4.200 m² · Ocupación: 320 personas

ANÁLISIS DE RIESGO
  Riesgo principal identificado: incendio en cocina del comedor (zona E-3)
  Riesgo secundario: fuga de gas en laboratorio de Química (planta 1)

VÍAS DE EVACUACIÓN
  Planta 0: 3 salidas (puerta principal 2,4 m + 2 emergencia 1,2 m) → zona reunión A
  Planta 1: 2 escaleras de evacuación (ancho 1,2 m) + salida posterior → zona A y B
  Planta 2: escalera norte + escalera sur → zona reunión B (pista deportiva)

ROLES ASIGNADOS
  Jefe de Emergencia: Director/a del centro
  Jefes de Planta: Coordinador/a de guardia cada planta
  Equipos de Evacuación: 2 docentes por planta (búsqueda + acompañamiento)

TIEMPO ESTIMADO DE EVACUACIÓN: 3 min 45 s (simulacro previo: 4 min 20 s)

SEÑALIZACIÓN: 24 señales fotoluminiscentes UNE 23034 + 6 extintores revisados`,
      puntos: [
        'Vías de evacuación dimensionadas según RD 393/2007 con anchura mínima de 1,2 m',
        'Roles de emergencia asignados por planta con cadena de mando clara',
        'Tiempo de evacuación calculado y mejorado respecto al simulacro previo',
      ],
    }
  },
  {
    id: 66, familiaId: 22, dificultad: "Avanzado",
    titulo: "Auditoría de sistema de gestión ambiental",
    descripcion: "Realiza una auditoría interna ISO 14001 de una empresa industrial ficticia.",
    objetivos: ["Revisar la documentación del SGA contra los requisitos de la norma", "Identificar no conformidades y observaciones", "Elaborar el informe de auditoría con el plan de acciones correctivas"],
    recursos: ["Norma ISO 14001:2015", "Documentación del SGA de la empresa ficticia", "Checklist de auditoría interna", "Plantilla de informe de auditoría ISO"],
    solucion: {
      tipo: 'Informe de auditoría ISO 14001',
      extracto: `INFORME DE AUDITORÍA INTERNA — SGA ISO 14001:2015
Alumna: Julia Romero · 2º CFGS Gestión Ambiental
Empresa auditada: Plásticos Ibéricos S.L. · Fecha: 16/05/2025 · Duración: 6 h

ALCANCE DE LA AUDITORÍA
  Procesos auditados: producción, almacén, gestión de residuos, mantenimiento
  Referencia normativa: ISO 14001:2015 (cláusulas 4 a 10)

NO CONFORMIDADES DETECTADAS (NC)
  NC-01 MAYOR — Cláusula 8.1: los residuos de disolventes orgánicos (código LER 140602)
    se almacenan sin etiquetado ADR en 3 de 5 contenedores revisados.
    Evidencia: fotografía + registro de inspección del 10/04/2025.
    Acción correctiva: etiquetar + formar operarios en 15 días

  NC-02 MENOR — Cláusula 9.1.1: el registro de consumos de agua no incluye el mes de
    marzo 2025 — hueco de 31 días sin datos. Pendiente de subsanar.

OBSERVACIONES (sin no conformidad)
  OBS-01: buena práctica — separación de residuos de papel/cartón en 4 puntos
  OBS-02: oportunidad de mejora — implementar indicadores de consumo energético en línea

CONCLUSIÓN: Sistema conforme con reservas. 2 NC a cerrar en < 30 días.`,
      puntos: [
        'No conformidad mayor identificada con evidencia objetiva (fotografías y registros)',
        'Distinción correcta entre NC mayor, NC menor y observación según criterios ISO 19011',
        'Acción correctiva con responsable y plazo de 15 días asignado a la NC-01 mayor',
      ],
    }
  },

  // 23 · Servicios Socioculturales
  {
    id: 67, familiaId: 23, dificultad: "Básico",
    titulo: "Diseña una dinámica de grupo",
    descripcion: "Planifica una actividad de cohesión para un grupo de 20 adolescentes.",
    objetivos: ["Seleccionar la dinámica adecuada al objetivo y al grupo", "Preparar los materiales y el espacio necesario", "Prever las posibles resistencias y cómo gestionarlas"],
    recursos: ["Manual de dinámicas de grupo (Fritzen o similar)", "Materiales fungibles para la actividad", "Ficha de planificación de sesión", "Espacio abierto o sala multiusos"],
    solucion: {
      tipo: 'Ficha de planificación de dinámica',
      extracto: `FICHA DE DINÁMICA DE GRUPO — "LA TELARAÑA"
Alumna: Andrea Reyes · 1º CFGS Integración Social

DATOS GENERALES
  Grupo: 20 adolescentes (14–16 años) · Espacio: patio exterior o sala grande
  Duración: 40 min · Objetivo: fortalecer la confianza y la comunicación no verbal

DESCRIPCIÓN DE LA ACTIVIDAD
  Material: ovillo de lana (1 ud.)
  El grupo se coloca en círculo de pie. El dinamizador lanza el ovillo a un participante
  y dice su nombre + una cualidad positiva. Ese participante sujeta el hilo y lanza a otro.
  Se genera una telaraña visible que simboliza las conexiones del grupo.

FASES
  1. Presentación (5 min): explicar la norma — hablar en positivo, sin excluir a nadie
  2. Tejido de la telaraña (20 min): todos participan mínimo 2 veces
  3. Reflexión (10 min): ¿qué pasa si soltamos? El grupo tira suavemente → todos sienten
  4. Cierre (5 min): ¿cómo nos ayudamos fuera de aquí?

POSIBLES RESISTENCIAS Y GESTIÓN
  Risa nerviosa: normalizarla, darle espacio y seguir
  Exclusión de algún participante: el facilitador redirige el ovillo activamente

EVALUACIÓN: observación directa + pregunta de salida (post-it: "Hoy aprendí…")`,
      puntos: [
        'Dinámica seleccionada con fundamento en el objetivo de cohesión del grupo',
        'Gestión de resistencias prevista con respuestas del facilitador definidas',
        'Evaluación de proceso con técnica de observación directa y pregunta de salida',
      ],
    }
  },
  {
    id: 68, familiaId: 23, dificultad: "Intermedio",
    titulo: "Diseña un taller socioeducativo",
    descripcion: "Planifica una sesión de 2h para un grupo de jóvenes en riesgo de exclusión.",
    objetivos: ["Detectar las necesidades del grupo y definir los objetivos del taller", "Estructurar las actividades respetando los tiempos y los ritmos del grupo", "Diseñar la evaluación de proceso y de resultado"],
    recursos: ["Diagnóstico social del grupo", "Plantilla de programación de taller", "Materiales didácticos adaptados", "Indicadores de evaluación socioeducativa"],
    solucion: {
      tipo: 'Programación de taller socioeducativo',
      extracto: `PROGRAMACIÓN TALLER — "COMUNICACIÓN SIN BARRERAS"
Alumno: Samuel Díaz · 2º CFGS Animación Sociocultural y Turística
Grupo: 12 jóvenes (16–21 años), riesgo exclusión social · Entidad: CEAR Valencia

DIAGNÓSTICO DEL GRUPO
  Necesidad detectada: dificultades en resolución de conflictos y comunicación asertiva
  Motivaciones: interés en tecnología y narrativa personal (entrevista previa)

PROGRAMACIÓN (2 horas)
  0:00–0:15 — Acogida: dinámica de activación "bingo de cualidades" (rompe hielo)
  0:15–0:45 — Bloque 1: Los estilos de comunicación (pasivo, agresivo, asertivo)
               Actividad: análisis de vídeos cortos + puesta en común
  0:45–1:15 — Bloque 2: Role-play de situaciones cotidianas
               3 escenas (vecindario, trabajo, pareja) en parejas rotativas
  1:15–1:45 — Bloque 3: El "mensaje yo" — práctica escrita individual
               Ejemplo: "Cuando tú… yo siento… y necesito…"
  1:45–2:00 — Cierre: rueda de evaluación (termómetro emocional 1–5)

INDICADORES DE EVALUACIÓN
  Proceso: participación activa de ≥ 80 % · Resultado: valoración media ≥ 4/5`,
      puntos: [
        'Programación con estructura temporal detallada y metodología activa participativa',
        'Necesidades del grupo identificadas mediante diagnóstico previo con entrevista',
        'Indicadores de evaluación de proceso y resultado definidos antes de la sesión',
      ],
    }
  },
  {
    id: 69, familiaId: 23, dificultad: "Avanzado",
    titulo: "Proyecto de intervención comunitaria",
    descripcion: "Diseña e implementa un proyecto de 3 meses para un barrio con necesidades.",
    objetivos: ["Realizar el diagnóstico participativo de la comunidad", "Diseñar el proyecto con objetivos, actividades, recursos y evaluación", "Coordinarse con entidades del barrio e instituciones locales"],
    recursos: ["Guía de diagnóstico comunitario participativo", "Plantilla de proyecto de intervención (Marco Lógico)", "Herramientas de participación (encuestas, grupos focales)", "Normativa de servicios sociales autonómica"],
    solucion: {
      tipo: 'Proyecto de intervención Marco Lógico',
      extracto: `PROYECTO DE INTERVENCIÓN COMUNITARIA — "BARRIO ACTIVO"
Alumna: Gabriela Morales · 2º CFGS Integración Social
Ámbito: Barrio de La Flota, Murcia · Duración: 3 meses (junio–agosto 2025)

DIAGNÓSTICO PARTICIPATIVO (DAFO comunitario)
  Problema central: aislamiento social de personas mayores > 70 años
  Causa raíz: falta de espacios de encuentro tras el cierre del centro cívico

MARCO LÓGICO RESUMIDO
  Objetivo general: Mejorar la cohesión social del barrio
  Objetivo específico: Crear red de apoyo vecinal para 40 personas mayores en 3 meses
  Indicadores: 40 personas inscritas · 3 actividades/semana · 80 % satisfacción

ACTIVIDADES Y CRONOGRAMA
  Mes 1: mapeo de recursos del barrio + grupo focal 15 participantes + constitución comisión
  Mes 2: talleres semanales (yoga suave, informática básica, cocina comunitaria)
  Mes 3: evento de celebración abierto al barrio + evaluación participativa

ENTIDADES COORDINADAS
  Ayuntamiento (cesión local) · Cruz Roja (voluntariado) · AMPA colegio (difusión)

PRESUPUESTO: 2.800 € (subvención Junta Región de Murcia, convocatoria SS 2025)`,
      puntos: [
        'Diagnóstico participativo con grupo focal y DAFO comunitario antes de la planificación',
        'Marco Lógico con indicadores SMART cuantificados para objetivo específico',
        'Red de entidades coordinadas con roles definidos para cada organización del barrio',
      ],
    }
  },

  // 24 · Textil, Confección y Piel
  {
    id: 70, familiaId: 24, dificultad: "Básico",
    titulo: "Identifica tipos de tejido",
    descripcion: "Clasifica 10 muestras textiles por composición, ligamento y acabado.",
    objetivos: ["Distinguir fibras naturales, artificiales y sintéticas", "Identificar los ligamentos básicos (tafetán, sarga, satén)", "Leer el etiquetado de composición textil"],
    recursos: ["Colección de 10 muestras textiles", "Lupa de telas (cuenta-hilos)", "Guía de identificación de fibras textiles", "Ficha de clasificación de muestras"],
    solucion: {
      tipo: 'Ficha de identificación textil',
      extracto: `FICHA DE CLASIFICACIÓN — 10 MUESTRAS TEXTILES
Alumno: Hugo Martínez · 1º CFGM Confección y Diseño de Moda

Nº | TEJIDO         | FIBRA           | LIGAMENTO    | TACTO       | PRUEBA LLAMA
1  | Organza        | Seda 100%       | Tafetán      | Suave, frío | Ceniza gris, olor cuerno
2  | Denim          | Algodón 100%    | Sarga 3/1    | Rígido      | Llama viva, olor papel
3  | Jersey         | Lana merina 80% | Punto         | Esponjoso   | Ceniza, olor a quemado
4  | Raso           | Poliéster 100%  | Satén        | Muy liso    | Se funde, no llama
5  | Tela vaquera s.| Algodón+Elastan | Sarga        | Elástico    | Llama + olor plástico
6  | Crespón        | Rayón (viscosa) | Tafetán      | Suave, cae  | Llama viva, como algodón
7  | Terciopelo     | Algodón pelo    | Pelo rizado   | Aterciopelado | Olor a quemado
8  | Tejido técnico | Poliamida 100%  | Punto        | Liso, técnico | Se funde a 220°C
9  | Lino           | Lino 100%       | Tafetán      | Rugoso, rígido| Llama viva, rápida
10 | Fieltro        | Lana 100%       | Sin ligamento | Compacto    | Ceniza y olor lana

METODOLOGÍA: lupa cuenta-hilos (10×) + prueba de llama controlada + tacto`,
      puntos: [
        'Ligamento identificado correctamente con lupa cuenta-hilos contando hilos de urdimbre y trama',
        'Prueba de llama realizada con seguridad en vitrina y resultados diferenciados por fibra',
        'Distinción entre fibras naturales, artificiales (rayón) y sintéticas (poliéster, poliamida)',
      ],
    }
  },
  {
    id: 71, familiaId: 24, dificultad: "Intermedio",
    titulo: "Confecciona una prenda básica",
    descripcion: "Patrona y cose una camisa de manga larga en tela de algodón.",
    objetivos: ["Trazar el patrón base a medidas reales y añadir costuras", "Cortar y marcar las piezas sobre la tela correctamente", "Coser la prenda con acabados profesionales (sisas, cuello, puños)"],
    recursos: ["Tela de algodón 1,5 m", "Máquina de coser y overlock", "Cinta métrica, jaboncillo y alfileres", "Patrón base de camisa en el talle del alumno"],
    solucion: {
      tipo: 'Ficha de confección de camisa',
      extracto: `FICHA DE CONFECCIÓN — CAMISA MANGA LARGA
Alumna: Sara Ibáñez · 2º CFGM Patronaje y Moda
Medidas tomadas: talla 40 (espalda 41 cm, pecho 94 cm, cintura 76 cm)
Tejido: popelín algodón 100 % blanco · 1,5 m (ancho 145 cm)

PIEZAS DEL PATRÓN (+ 1,5 cm costura en todo el contorno)
  Delantero (×2 simétricas) + Espalda (×1) + Manga larga (×2)
  Cuello camisero (× 2) + Pie de cuello (×2) + Puño (×4 — con forro)

PROCESO DE CONFECCIÓN
  1. Corte: disposición en hilo recto, jaboncillo en piezas clave
  2. Unión de hombros: costura plana 1,5 cm → planchar abierta
  3. Montaje de mangas: unión manga-cuerpo con costura inglesa
  4. Cierre lateral y manga en un solo cosido (costura francesa en lateral)
  5. Confección cuello: costura de tiro + asentado a puntada invisible
  6. Confección puños: vivo de 0,5 cm + 2 botones nacar Ø12 mm
  7. Presillas y ojales: 6 ojales verticales + 1 horizontal (cuello)
  8. Remate: dobladillo inferior 2 cm a máquina

CONTROL DE CALIDAD: cuello asentado sin fruncidos · ojales limpios ✓`,
      puntos: [
        'Patrón trazado con medidas reales de la alumna incluyendo costuras de 1,5 cm',
        'Costura francesa en lateral para acabado interno sin overlock en tela fina',
        'Control de calidad de cuello y ojales documentado antes de la entrega final',
      ],
    }
  },
  {
    id: 72, familiaId: 24, dificultad: "Avanzado",
    titulo: "Diseña una colección cápsula",
    descripcion: "Desarrolla 5 prendas con identidad de marca, figurín técnico y ficha de costes.",
    objetivos: ["Definir el concepto creativo y el cliente objetivo", "Elaborar los figurines y las fichas técnicas de cada prenda", "Calcular los costes de producción y el precio de venta"],
    recursos: ["Software de diseño de moda (CLO 3D o Illustrator)", "Muestras de tejidos y avíos", "Plantilla de ficha técnica de prenda", "Referencias de coste de confección del sector"],
    solucion: {
      tipo: 'Dossier de colección cápsula',
      extracto: `COLECCIÓN CÁPSULA "ATLÁNTICO" — TEMPORADA O/I 2026
Alumna: Daniela Fuentes · 2º CFGS Patronaje y Confección
Concepto: marinería racional · Paleta: azul marino, blanco hueso, rojo oxido

PRENDA 1 — Abrigo marinero oversize
  Tejido: paño lana 80/20 azul marino · Figurín: frente, espalda, detalle botonadura
  Ficha técnica: doble botonadura 6 botones ancla dorados · Avíos: 12 € · CMO: 85 €
  PVP estimado: 320 € (margen bruto 68 %)

PRENDA 2 — Pantalón marinero de tiro alto
  Tejido: sarga algodón blanco hueso · Corte palazzo acampanado
  Ficha técnica: pinzas dobles, trabillas 4 cm, cremallera invisible lateral
  Avíos: 5 € · CMO: 42 € · PVP: 145 €

PRENDA 3 — Blusa de lazo marinero
  Tejido: crepé viscosa a rayas bretón · Lazo extraíble en cuello
  Avíos: 3 € · CMO: 28 € · PVP: 95 €

PRENDAS 4–5: [fichas completas en dossier con patronaje a escala 1:5]

LOOKBOOK: 5 fotografías flat-lay + 5 propuestas de combinación de la cápsula`,
      puntos: [
        'Cinco prendas con concepto de colección coherente, paleta de color y silueta definidas',
        'Ficha técnica con coste de materiales, avíos y precio de venta con margen calculado',
        'Lookbook con fotografías flat-lay y propuestas de combinación de la cápsula completa',
      ],
    }
  },

  // 25 · Transporte y Mantenimiento de Vehículos
  {
    id: 73, familiaId: 25, dificultad: "Básico",
    titulo: "Cambia el aceite del motor",
    descripcion: "Realiza el cambio de aceite y filtro en un vehículo siguiendo el manual.",
    objetivos: ["Identificar el tipo y cantidad de aceite especificado por el fabricante", "Realizar el vaciado, sustitución del filtro y llenado correctamente", "Verificar el nivel y la estanqueidad tras el cambio"],
    recursos: ["Vehículo de prácticas en foso o elevador", "Aceite de motor especificado y filtro nuevo", "Manual de taller del vehículo", "EPI (guantes y gafas) y bandeja de recogida de aceite"],
    solucion: {
      tipo: 'Orden de trabajo de taller',
      extracto: `ORDEN DE TRABAJO — CAMBIO DE ACEITE Y FILTRO
Alumno: Carlos Prieto · 1º CFGM Electromecánica de Vehículos Automóviles
Vehículo: Volkswagen Golf VII 1.6 TDI · Matrícula ficticia: 1234 ABC · Km: 128.450

ESPECIFICACIONES TÉCNICAS (manual taller VW)
  Aceite especificado: VW 507.00 · Viscosidad: 0W-30
  Cantidad: 4,3 litros · Filtro: Mann HU712/7X

PROCESO REALIZADO
  1. Elevar el vehículo en elevador — verificar apoyos en puntos de anclaje ✓
  2. Calentar motor 2 min para fluidificar el aceite
  3. Extraer tapón de vaciado (llave 19 mm) → vaciado en bandeja 5 L (aceite viejo negro)
  4. Sustituir tapón con junta nueva (par apriete: 30 N·m)
  5. Retirar filtro de aceite con llave especial → limpiar asiento del bloque
  6. Montar filtro nuevo con junta lubricada en aceite nuevo (par: 20 N·m)
  7. Llenar 4,3 L aceite VW 507.00 · Arrancar motor 30 s · Verificar nivel dipstick ✓
  8. Verificar estanqueidad — sin fugas bajo motor tras 5 min en marcha ✓

GESTIÓN RESIDUO: aceite usado (LER 13 02 05) entregado en gestor autorizado`,
      puntos: [
        'Especificaciones de aceite y filtro obtenidas del manual de taller VW (VW 507.00)',
        'Pares de apriete de tapón y filtro aplicados con llave dinamométrica según especificación',
        'Gestión del aceite usado documentada como residuo LER 13 02 05 a gestor autorizado',
      ],
    }
  },
  {
    id: 74, familiaId: 25, dificultad: "Intermedio",
    titulo: "Diagnostica un fallo electrónico",
    descripcion: "Usa el escáner OBD-II para leer y borrar códigos de avería en un turismo.",
    objetivos: ["Conectar correctamente el escáner al puerto OBD-II del vehículo", "Interpretar los códigos DTC y relacionarlos con el sistema afectado", "Proponer el proceso de diagnóstico y la reparación adecuada"],
    recursos: ["Escáner OBD-II multimarca (LAUNCH o similar)", "Vehículo con avería simulada", "Base de datos de códigos DTC", "Manual de diagnóstico del fabricante"],
    solucion: {
      tipo: 'Informe de diagnóstico OBD-II',
      extracto: `INFORME DE DIAGNÓSTICO ELECTRÓNICO OBD-II
Alumna: Marta López · 2º CFGM Electromecánica de Vehículos
Vehículo: Seat León III 1.2 TSI 110 CV · Km: 78.220 · Escáner: LAUNCH X431 Pro

CONEXIÓN AL PUERTO OBD-II
  Ubicación: bajo el volante, lado conductor · Conector tipo J1962 (estándar SAE)
  Protocolo detectado: ISO 15765-4 (CAN) · VIN leído: VSSZZZLEZGR041234

CÓDIGOS DTC ENCONTRADOS
  P0301 — FALLO DE ENCENDIDO EN CILINDRO 1 (Confirmado, activo)
    Descripción: mala combustión en cil. 1 → tirones, consumo elevado, luz MIL
  P0171 — MEZCLA DEMASIADO POBRE (Banco 1) (Pendiente)
    Descripción: relación A/F > 14,7 detectada por sonda lambda

DIAGNÓSTICO Y PROPUESTA DE REPARACIÓN
  Causa probable P0301: bujía cilindro 1 defectuosa (resistencia > 20 kΩ medida)
  Causa probable P0171: sensor MAP con deriva o inyector 1 sucio

  PROCESO: 1º sustituir bujía cil.1 (NGK 2756) y borrar códigos
            2º repetir diagnóstico — si persiste P0171: limpiar inyectores

PRESUPUESTO ORIENTATIVO: bujía 8 € + mano de obra 0,3 h = 32 € total`,
      puntos: [
        'Códigos DTC identificados con estado (activo/pendiente) y descripción del sistema afectado',
        'Medición de resistencia de la bujía con multímetro para confirmar la causa raíz',
        'Plan de reparación priorizado con criterio de menor coste primero antes de intervenciones mayores',
      ],
    }
  },
  {
    id: 75, familiaId: 25, dificultad: "Avanzado",
    titulo: "Revisión pre-ITV completa",
    descripcion: "Realiza la inspección de todos los sistemas del vehículo y emite el informe.",
    objetivos: ["Revisar frenos, dirección, suspensión, luces y emisiones", "Identificar los defectos leves, graves y muy graves según normativa ITV", "Elaborar el informe con las reparaciones necesarias y su prioridad"],
    recursos: ["Vehículo de prácticas completo", "Frenómetro, opacímetro y banco de suspensiones", "Manual de inspección técnica de vehículos (RD 920/2017)", "Plantilla de informe de inspección"],
    solucion: {
      tipo: 'Informe de inspección pre-ITV',
      extracto: `INFORME REVISIÓN PRE-ITV — Peugeot 308 II 1.5 HDi · Km: 92.400
Alumno: Rodrigo Serna · 2º CFGS Automoción
Fecha: 19/05/2025 · Clasificación defectos: Leve (L) / Grave (G) / Muy Grave (MG)

FRENOS
  Frenómetro eje delantero: 3.680 N / 3.620 N · Desequilibrio: 1,6 % ✓ (< 30 %)
  Frenómetro eje trasero:   1.820 N / 1.430 N · Desequilibrio: 21,5 % ⚠️ → DEFECTO GRAVE

SUSPENSIÓN (banco MAHA MSB 2000)
  Eje delantero: 82 % adhesión ✓ · Eje trasero: 61 % adhesión ✓

LUCES
  Faro derecho: orientación vertical −2,2% ✓ · Faro izquierdo: −4,8 % → DEFECTO LEVE
  Luz de freno central: fundida → DEFECTO LEVE

EMISIONES (opacímetro diésel)
  Opacidad: 1,8 m⁻¹ · Límite diésel Euro 6: 3,0 m⁻¹ ✓

NEUMÁTICOS
  Banda rodadura delantera DX: 2,1 mm — mínimo legal 1,6 mm · DEFECTO GRAVE (< 3 mm)

RESUMEN: 2 defectos GRAVES (frenos traseros + neumático) → NO APTO para ITV
REPARACIONES NECESARIAS: pastillas traseras + neumático antes de presentar a ITV`,
      puntos: [
        'Desequilibrio de frenada calculado correctamente con valores de frenómetro por eje',
        'Defectos clasificados por severidad conforme al RD 920/2017 (Leve/Grave/Muy Grave)',
        'Informe concluye con diagnóstico NO APTO y lista de reparaciones prioritarias',
      ],
    }
  },

  // 26 · Vidrio y Cerámica
  {
    id: 76, familiaId: 26, dificultad: "Básico",
    titulo: "Modela una pieza en torno alfarero",
    descripcion: "Centra y abre el barro para obtener un cuenco de paredes uniformes.",
    objetivos: ["Centrar correctamente la bola de barro en el torno", "Abrir la base y elevar las paredes con grosor uniforme", "Retirar la pieza del torno sin deformarla"],
    recursos: ["Torno eléctrico de alfarería", "Barro de tornear 500 g", "Herramientas de torno (esponjas, paleta, aguja)", "Tabla de trabajo y plástico para proteger"],
    solucion: {
      tipo: 'Diario de taller de torno',
      extracto: `DIARIO DE TALLER — TORNEADO DE CUENCO
Alumna: Patricia Leal · 1º CFGM Cerámica Artística

DATOS DE LA SESIÓN
  Barro utilizado: barro rojo Valls, 500 g · Temperatura cocción prevista: 1.020 °C
  Torno: eléctrico Shimpo RK-55, velocidad variable

PROCESO PASO A PASO
  1. CENTRADO (8 min): mojado de manos constante, presión simultánea de ambas palmas
     Velocidad: rápida (300 rpm) — primeras 5 min. Error inicial: descentrado 3 mm → corregido
  2. APERTURA DE LA BASE (3 min): pulgar en el centro, descenso vertical 1 cm del fondo
     Diámetro interior de base: 8 cm. Grosor fondo verificado con aguja: 7 mm ✓
  3. ELEVACIÓN DE PAREDES (12 min): pinzado interior-exterior con subida lenta
     Velocidad media (200 rpm). Altura obtenida: 11 cm. Grosor paredes: 6 mm uniform. ✓
  4. ACABADO DE BORDE: leve compresión con paleta húmeda → borde redondeado
  5. RETIRADA: alambre bajo la base, tabla de transferencia

RESULTADO
  Cuenco: Ø 14 cm × 11 cm alto · Paredes uniformes ✓ · Sin grietas tras secado 48h
  Observación: próxima sesión reducir grosor de paredes a 4–5 mm`,
      puntos: [
        'Grosor de fondo verificado con aguja durante el torneado para evitar hundimiento',
        'Uniformidad de paredes lograda con velocidad y presión constantes en la subida',
        'Reflexión técnica documentada para mejorar el grosor en la siguiente pieza',
      ],
    }
  },
  {
    id: 77, familiaId: 26, dificultad: "Intermedio",
    titulo: "Aplica técnicas de esmaltado",
    descripcion: "Prepara y aplica tres tipos de esmalte sobre bizcocho con resultados diferentes.",
    objetivos: ["Preparar los esmaltes a la densidad correcta (Baumé)", "Aplicar por inmersión, vertido y pincel obteniendo cobertura uniforme", "Analizar los resultados tras la cocción y corregir errores"],
    recursos: ["Tres esmaltes de diferentes bases (mate, brillante, cristalino)", "Piezas bizcochas y aerómetro (Baumé)", "Horno de cerámica con controlador de temperatura", "Fichas de receta de esmalte"],
    solucion: {
      tipo: 'Ficha de esmaltado con resultados de cocción',
      extracto: `FICHA DE ESMALTADO — TRES TÉCNICAS SOBRE BIZCOCHO
Alumno: Nicolás Barrera · 2º CFGM Cerámica Artística
Piezas: 6 platos bizcocho 1.000 °C · Esmalte final: 1.240 °C (gres)

ESMALTE 1 — INMERSIÓN (esmalte mate blanco roto)
  Densidad medida (aerómetro): 145 g/L (Baumé 42°) ✓ — añadir 20 mL agua/L si > 150
  Técnica: sumergir pieza 3 s, escurrir, poner boca abajo 10 s
  Resultado cocción: cobertura uniforme, sin escurriduras ✓ · Grosor estimado: 0,8 mm

ESMALTE 2 — VERTIDO (esmalte brillante transparente)
  Densidad: 140 g/L · Técnica: verter sobre el interior girando la pieza
  Resultado cocción: interior uniforme · Exterior con goteo en borde → reducir cantidad

ESMALTE 3 — PINCEL (esmalte cristalino azul cobalto)
  Densidad: 155 g/L (espeso para pincel) · 3 capas cruzadas, secando entre capas
  Resultado cocción: cristales visibles en zona plana ✓ · Zona curva sin cristales (escorría)
  Corrección: inclinar pieza 15° durante la cocción en próxima prueba

CURVA DE COCCIÓN: rampa 100°C/h hasta 1.240°C → meseta 10 min → enfriamiento libre`,
      puntos: [
        'Densidad de los tres esmaltes medida con aerómetro y ajustada antes de la aplicación',
        'Resultados de cocción documentados con análisis de errores y propuestas de corrección',
        'Curva de cocción programada en el controlador con rampa y meseta de maduración',
      ],
    }
  },
  {
    id: 78, familiaId: 26, dificultad: "Avanzado",
    titulo: "Diseña una colección cerámica de autor",
    descripcion: "Crea 5 piezas con identidad visual coherente para exposición y catálogo.",
    objetivos: ["Desarrollar un concepto artístico propio y coherente", "Dominar la técnica de construcción y el acabado de autor", "Elaborar el dossier fotográfico, las fichas de obra y el precio"],
    recursos: ["Taller completo de cerámica (torno, horno, esmaltes)", "Cámara fotográfica y fondo neutro para documentación", "Software de diseño para el catálogo (InDesign o Canva)", "Referentes del mercado cerámico de autor"],
    solucion: {
      tipo: 'Dossier de colección cerámica de autor',
      extracto: `COLECCIÓN "MAREAS" — CERÁMICA DE AUTOR
Alumna: Irene Montes · 2º CFGS Cerámica Artística
Concepto: formas orgánicas inspiradas en la erosión costera · Gres 1.240 °C

PIEZA 1 — Cuenco "Costa Brava" (Ø 22 cm × 9 cm)
  Técnica: torno · Esmalte: azul marino + ceniza de madera en borde
  Precio: 85 € · Tiempo fabricación: 4 h

PIEZA 2 — Jarra "Marea" (2 L · altura 26 cm)
  Técnica: torno + asas pellizcadas a mano
  Esmalte: blanco roto con venas azules (técnica neriage) · Precio: 120 €

PIEZA 3 — Plato hondo "Sedimento" (Ø 24 cm)
  Técnica: losa planeada + textura con tela rugosa
  Esmalte: ocre tostado con engobe blanco raspado · Precio: 65 €

PIEZA 4 — Florero "Acantilado" (altura 32 cm · boca estrecha 4 cm)
  Técnica: torno, forma de cuello alto reducido · Esmalte cromático (reducción)
  Precio: 150 €

PIEZA 5 — Bol para té "Ola" (Ø 12 cm · forma chawán)
  Técnica: torno + modelado a mano del borde · Esmalte: celedón grisáceo
  Precio: 75 €

DOSSIER: fotografías fondo gris neutro · Fichas técnicas · Precio total colección: 495 €`,
      puntos: [
        'Concepto artístico coherente aplicado en las cinco piezas con materiales y técnicas diversas',
        'Fichas de obra completas con dimensiones, técnica, esmalte, tiempo y precio de venta',
        'Documentación fotográfica sobre fondo neutro con iluminación controlada para el catálogo',
      ],
    }
  },
]
