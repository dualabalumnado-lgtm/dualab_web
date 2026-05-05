export { familias } from "./familias.js"

export const microretos = [
  // 1 · Actividades Físicas y Deportivas
  {
    id: 1, familiaId: 1, dificultad: "Básico",
    titulo: "Diseña una sesión de calentamiento",
    descripcion: "Planifica un calentamiento de 15 min adaptado a un grupo de secundaria.",
    objetivos: ["Conocer las fases del calentamiento general y específico", "Adaptar los ejercicios a la edad y nivel del grupo", "Respetar la progresión de intensidad"],
    recursos: ["Ficha de planificación de sesión", "Cronómetro", "Pizarra o pizarra digital", "Espacio polideportivo"]
  },
  {
    id: 2, familiaId: 1, dificultad: "Intermedio",
    titulo: "Evalúa la condición física de un alumno",
    descripcion: "Aplica los test de Cooper y Ruffier e interpreta los resultados.",
    objetivos: ["Aplicar correctamente los protocolos de los test", "Interpretar los valores obtenidos con baremos oficiales", "Elaborar un informe con recomendaciones de mejora"],
    recursos: ["Pista de atletismo o pista polideportiva", "Pulsómetro", "Hojas de registro", "Tablas de baremos por edad y sexo"]
  },
  {
    id: 3, familiaId: 1, dificultad: "Avanzado",
    titulo: "Programa una temporada deportiva",
    descripcion: "Diseña la periodización anual de un equipo amateur de fútbol sala.",
    objetivos: ["Aplicar los principios del entrenamiento deportivo", "Distribuir las cargas a lo largo de la temporada", "Integrar competición, entrenamiento y recuperación"],
    recursos: ["Software de planificación deportiva (Excel o similar)", "Manual de periodización del entrenamiento", "Calendario competitivo de la federación", "Fichas de seguimiento de jugadores"]
  },

  // 2 · Administración y Gestión
  {
    id: 4, familiaId: 2, dificultad: "Básico",
    titulo: "Elabora una nómina",
    descripcion: "Calcula una nómina completa con IRPF y Seguridad Social.",
    objetivos: ["Identificar los conceptos retributivos de una nómina", "Aplicar los tipos de cotización a la Seguridad Social", "Calcular la retención de IRPF según tablas"],
    recursos: ["Modelo oficial de recibo de salarios", "Tablas IRPF vigentes de la AEAT", "Convenio colectivo de referencia", "Calculadora o hoja Excel"]
  },
  {
    id: 5, familiaId: 2, dificultad: "Intermedio",
    titulo: "Redacta un contrato de trabajo",
    descripcion: "Crea un contrato indefinido a jornada completa ajustado al ET.",
    objetivos: ["Conocer los elementos esenciales del contrato laboral", "Aplicar la normativa del Estatuto de los Trabajadores", "Redactar cláusulas correctas y sin ambigüedades"],
    recursos: ["Estatuto de los Trabajadores (BOE)", "Modelos oficiales del SEPE", "Convenio colectivo del sector", "Guía de contratación laboral"]
  },
  {
    id: 6, familiaId: 2, dificultad: "Avanzado",
    titulo: "Cierre contable mensual",
    descripcion: "Realiza el asiento de cierre y el balance de comprobación de una pyme ficticia.",
    objetivos: ["Regularizar cuentas de ingresos y gastos", "Elaborar el balance de situación y la cuenta de resultados", "Detectar y corregir errores contables"],
    recursos: ["Plan General Contable (PGC)", "Software contable (ContaPlus o similar)", "Hoja de trabajo contable", "Libro Diario y Mayor de la empresa ficticia"]
  },

  // 3 · Agraria
  {
    id: 7, familiaId: 3, dificultad: "Básico",
    titulo: "Identifica plagas comunes",
    descripcion: "Clasifica 10 plagas frecuentes en cultivos hortícolas y su tratamiento.",
    objetivos: ["Reconocer visualmente los síntomas de cada plaga", "Asociar cada plaga con su agente causal", "Proponer tratamientos integrados de bajo impacto"],
    recursos: ["Guía fotográfica de plagas hortícolas", "Muestras de plantas afectadas o fotografías", "Registro de productos fitosanitarios autorizados", "Lupa de campo"]
  },
  {
    id: 8, familiaId: 3, dificultad: "Intermedio",
    titulo: "Plan de riego por goteo",
    descripcion: "Diseña un sistema de riego para una parcela de 500 m² con tomate.",
    objetivos: ["Calcular las necesidades hídricas del cultivo", "Dimensionar tuberías, goteros y presión necesaria", "Elaborar un plano del sistema de riego"],
    recursos: ["Software de diseño de riego (NetAfim o similar)", "Datos climáticos de la zona (ETP)", "Catálogo de materiales de riego", "Plano de la parcela a escala"]
  },
  {
    id: 9, familiaId: 3, dificultad: "Avanzado",
    titulo: "Proyecto de agricultura ecológica",
    descripcion: "Elabora un plan de conversión a producción ecológica certificada para una finca.",
    objetivos: ["Conocer la normativa de producción ecológica (Reg. UE 848/2018)", "Planificar la rotación de cultivos y la gestión del suelo", "Elaborar el cuaderno de campo y el plan de negocio"],
    recursos: ["Reglamento UE 848/2018", "Guía de conversión a ecológico del MAPA", "Fichas técnicas de abonos y fitosanitarios autorizados", "Hoja de cálculo para el plan de negocio"]
  },

  // 4 · Artes Gráficas
  {
    id: 10, familiaId: 4, dificultad: "Básico",
    titulo: "Maqueta una tarjeta de visita",
    descripcion: "Diseña una tarjeta de visita profesional respetando márgenes de sangrado.",
    objetivos: ["Configurar un documento con sangrado y zona de seguridad", "Aplicar tipografía y color de forma coherente", "Exportar en formato listo para imprenta"],
    recursos: ["Adobe Illustrator o Affinity Designer", "Guía de identidad corporativa de ejemplo", "Papel A4 para impresión de prueba", "Regla y cúter para maqueta física"]
  },
  {
    id: 11, familiaId: 4, dificultad: "Intermedio",
    titulo: "Prepara un archivo para imprenta",
    descripcion: "Exporta un folleto DL en PDF/X-1a con perfiles de color CMYK correctos.",
    objetivos: ["Convertir imágenes RGB a CMYK con perfil ISO Coated", "Configurar la exportación PDF/X-1a en InDesign", "Verificar el archivo con Preflight antes de entregar"],
    recursos: ["Adobe InDesign", "Perfil ICC ISO Coated v2", "Acrobat Professional para verificación", "Especificaciones técnicas de la imprenta"]
  },
  {
    id: 12, familiaId: 4, dificultad: "Avanzado",
    titulo: "Flujo de trabajo editorial completo",
    descripcion: "Maqueta y gestiona la producción de una revista de 16 páginas desde InDesign.",
    objetivos: ["Crear un libro InDesign con secciones y páginas maestras", "Gestionar estilos de párrafo y carácter coherentes", "Coordinar la producción y entrega de archivos a imprenta"],
    recursos: ["Adobe InDesign CC", "Adobe Bridge para gestión de imágenes", "Servidor compartido o Dropbox para flujo colaborativo", "Checklist de entrega a imprenta"]
  },

  // 5 · Artes y Artesanías
  {
    id: 13, familiaId: 5, dificultad: "Básico",
    titulo: "Técnica de acuarela básica",
    descripcion: "Ejecuta una pieza de 20×20 cm usando las técnicas húmedo sobre húmedo.",
    objetivos: ["Controlar la cantidad de agua en el pincel y el papel", "Conseguir degradados y mezclas en húmedo", "Respetar los tiempos de secado entre capas"],
    recursos: ["Papel de acuarela 300 g/m²", "Set de acuarelas de calidad artística", "Pinceles redondos nº 8 y 12", "Recipiente de agua y papel absorbente"]
  },
  {
    id: 14, familiaId: 5, dificultad: "Intermedio",
    titulo: "Talla en relieve",
    descripcion: "Diseña y talla un motivo vegetal en relieve sobre madera de tilo.",
    objetivos: ["Transferir el diseño a la madera con precisión", "Dominar las gubias de desbaste y detalle", "Lograr diferentes planos de profundidad en el relieve"],
    recursos: ["Tablero de tilo 20×20 cm", "Set de gubias de talla", "Mazo de madera", "Papel de calco y carboncillo para transferencia"]
  },
  {
    id: 15, familiaId: 5, dificultad: "Avanzado",
    titulo: "Colección artesanal de autor",
    descripcion: "Desarrolla una colección de 5 piezas con identidad visual coherente para feria.",
    objetivos: ["Definir una identidad de autor reconocible en la colección", "Dominar la técnica escogida con acabados de calidad expositiva", "Elaborar dossier, etiquetado y precio de venta"],
    recursos: ["Materiales propios de la técnica elegida", "Cámara fotográfica para documentación", "Software de diseño para el dossier", "Referencias de mercado artesanal (ferias, precios)"]
  },

  // 6 · Comercio y Marketing
  {
    id: 16, familiaId: 6, dificultad: "Básico",
    titulo: "Analiza un competidor",
    descripcion: "Realiza un análisis DAFO de una tienda local frente a su competencia.",
    objetivos: ["Identificar fortalezas y debilidades internas del negocio", "Detectar oportunidades y amenazas del entorno", "Presentar conclusiones accionables"],
    recursos: ["Plantilla DAFO", "Fichas de observación de competidores", "Herramienta Google Maps para análisis de zona", "Informe de sector del INE o CNAE"]
  },
  {
    id: 17, familiaId: 6, dificultad: "Intermedio",
    titulo: "Crea una campaña en redes",
    descripcion: "Diseña y lanza una mini-campaña orgánica para un producto real en Instagram.",
    objetivos: ["Definir el público objetivo y el mensaje clave", "Crear contenido visual atractivo y alineado con la marca", "Analizar métricas de alcance e interacción al cierre"],
    recursos: ["Cuenta de Instagram del negocio", "Canva o Adobe Express para diseño", "Meta Business Suite para análisis", "Calendario editorial en Trello o Notion"]
  },
  {
    id: 18, familiaId: 6, dificultad: "Avanzado",
    titulo: "Plan de marketing digital",
    descripcion: "Elabora un plan completo con objetivos SMART, canales, KPIs y presupuesto.",
    objetivos: ["Realizar un análisis de situación con datos reales", "Definir objetivos medibles y estrategias por canal", "Elaborar un presupuesto y cronograma de acciones"],
    recursos: ["Google Analytics y Search Console", "SEMrush o Ubersuggest para SEO", "Plantilla de plan de marketing", "Herramienta de gestión de redes sociales (Hootsuite)"]
  },

  // 7 · Edificación y Obra Civil
  {
    id: 19, familiaId: 7, dificultad: "Básico",
    titulo: "Lee un plano de planta",
    descripcion: "Interpreta un plano arquitectónico e identifica los elementos constructivos.",
    objetivos: ["Reconocer la simbología normalizada en planos de arquitectura", "Identificar muros, particiones, huecos y cotas", "Calcular superficies a partir del plano"],
    recursos: ["Planos de vivienda real (en papel o PDF)", "Escalímetro", "Normativa de representación gráfica (UNE)", "Ficha de interpretación de planos"]
  },
  {
    id: 20, familiaId: 7, dificultad: "Intermedio",
    titulo: "Calcula la cimentación de una vivienda",
    descripcion: "Dimensiona la zapata corrida de un muro de carga con los datos del estudio.",
    objetivos: ["Interpretar el informe geotécnico y la tensión admisible del terreno", "Aplicar las fórmulas de dimensionado de zapatas del CTE", "Elaborar un croquis acotado de la solución"],
    recursos: ["CTE DB-SE-C (Seguridad estructural: Cimientos)", "Informe geotécnico de ejemplo", "Hoja de cálculo de cimentaciones", "AutoCAD o similar para el croquis"]
  },
  {
    id: 21, familiaId: 7, dificultad: "Avanzado",
    titulo: "Proyecto de rehabilitación energética",
    descripcion: "Propón medidas de mejora de envolvente y justifícalas con CTE-HE.",
    objetivos: ["Auditar el estado actual de la envolvente térmica del edificio", "Calcular la transmitancia de los cerramientos propuestos", "Elaborar la memoria justificativa con el CTE-HE"],
    recursos: ["CTE DB-HE (Ahorro de energía)", "Software CE3X para certificación energética", "Catálogo de sistemas de aislamiento (ETICS, etc.)", "Planos del edificio existente"]
  },

  // 8 · Electricidad y Electrónica
  {
    id: 22, familiaId: 8, dificultad: "Básico",
    titulo: "Instala un punto de luz",
    descripcion: "Realiza una instalación eléctrica monofásica siguiendo el REBT.",
    objetivos: ["Identificar los componentes de un circuito de alumbrado", "Realizar conexiones seguras en caja de empalmes", "Verificar la instalación con el polímetro"],
    recursos: ["REBT (Reglamento Electrotécnico de Baja Tensión)", "Panel de prácticas eléctricas", "Polímetro digital", "Herramientas de electricista (pelacables, destornillador)"]
  },
  {
    id: 23, familiaId: 8, dificultad: "Intermedio",
    titulo: "Diseña un circuito con Arduino",
    descripcion: "Programa un semáforo peatonal con temporizador usando Arduino UNO.",
    objetivos: ["Conectar LEDs y resistencias correctamente en la protoboard", "Programar la secuencia de tiempos en el IDE de Arduino", "Depurar el código y verificar el funcionamiento"],
    recursos: ["Arduino UNO y cable USB", "Protoboard, LEDs y resistencias", "IDE de Arduino", "Tutorial de referencia de Arduino.cc"]
  },
  {
    id: 24, familiaId: 8, dificultad: "Avanzado",
    titulo: "Programa un PLC con comunicación SCADA",
    descripcion: "Implementa y monitoriza una célula automatizada con Siemens S7 y WinCC.",
    objetivos: ["Programar una secuencia compleja en lenguaje Ladder/SCL", "Configurar la comunicación OPC entre PLC y SCADA", "Crear pantallas de supervisión con alarmas y trending"],
    recursos: ["TIA Portal (Siemens)", "WinCC Flexible o WinCC Advanced", "Simulador S7-PLCSIM", "Manual de comunicaciones OPC UA"]
  },

  // 9 · Energía y Agua
  {
    id: 25, familiaId: 9, dificultad: "Básico",
    titulo: "Identifica componentes de una instalación solar",
    descripcion: "Etiqueta y describe los elementos de un sistema fotovoltaico aislado.",
    objetivos: ["Reconocer paneles, regulador, batería e inversor", "Explicar la función de cada componente", "Identificar los riesgos eléctricos asociados"],
    recursos: ["Instalación solar de demostración o maqueta", "Ficha técnica de cada componente", "Manual de instalación del fabricante", "Equipos de protección individual (EPI)"]
  },
  {
    id: 26, familiaId: 9, dificultad: "Intermedio",
    titulo: "Calcula el dimensionado solar",
    descripcion: "Diseña una instalación FV para una vivienda unifamiliar con consumo dado.",
    objetivos: ["Calcular el consumo energético diario de la vivienda", "Dimensionar el generador fotovoltaico y el sistema de almacenamiento", "Seleccionar los componentes y elaborar el presupuesto"],
    recursos: ["Herramienta PVGIS de la Comisión Europea", "Catálogos de paneles y baterías", "Hoja de cálculo de dimensionado FV", "Reglamento de instalaciones eléctricas (REBT)"]
  },
  {
    id: 27, familiaId: 9, dificultad: "Avanzado",
    titulo: "Auditoría energética de un edificio",
    descripcion: "Elabora un informe con propuestas de mejora y ahorro estimado en kWh/año.",
    objetivos: ["Recopilar y analizar los consumos energéticos históricos", "Identificar los puntos de mayor desperdicio energético", "Proponer medidas de eficiencia con TIR y periodo de retorno"],
    recursos: ["Software CE3X o EnergyPlus", "Facturas energéticas del edificio", "Norma UNE-EN ISO 50001 (gestión energética)", "Termómetro infrarrojo y analizador de redes"]
  },

  // 10 · Fabricación Mecánica
  {
    id: 28, familiaId: 10, dificultad: "Básico",
    titulo: "Interpreta un plano de pieza",
    descripcion: "Lee las cotas, tolerancias y acabados superficiales de un plano industrial.",
    objetivos: ["Identificar las vistas normalizadas y secciones del plano", "Interpretar tolerancias dimensionales y geométricas", "Leer el indicador de acabado superficial (Ra)"],
    recursos: ["Planos industriales de piezas reales", "Normas UNE de representación gráfica", "Escalímetro y calibre pie de rey", "Manual de dibujo técnico industrial"]
  },
  {
    id: 29, familiaId: 10, dificultad: "Intermedio",
    titulo: "Mecanizado en torno CNC",
    descripcion: "Programa y ejecuta el torneado de un eje escalonado en acero F114.",
    objetivos: ["Programar el ciclo de torneado en código G/M", "Seleccionar las herramientas y parámetros de corte", "Verificar las cotas de la pieza acabada con instrumentos de medida"],
    recursos: ["Torno CNC (o simulador CIMCO Edit)", "Plano de la pieza a mecanizar", "Herramientas de corte (plaquitas intercambiables)", "Calibre y micrómetro de exteriores"]
  },
  {
    id: 30, familiaId: 10, dificultad: "Avanzado",
    titulo: "Diseño y fabricación de útil de soldadura",
    descripcion: "Diseña en CAD y fabrica un útil de posicionamiento para una unión en T.",
    objetivos: ["Diseñar el útil en 3D con Fusion 360 o SolidWorks", "Seleccionar el material y los medios de sujeción", "Fabricar, ensamblar y validar el útil con una soldadura real"],
    recursos: ["SolidWorks o Fusion 360", "Taller de mecanizado y soldadura", "Planos de la unión a realizar", "Calibres y galgas de comprobación"]
  },

  // 11 · Hostelería y Turismo
  {
    id: 31, familiaId: 11, dificultad: "Básico",
    titulo: "Diseña un menú de temporada",
    descripcion: "Crea un menú de 3 platos con producto de temporada y coste ajustado.",
    objetivos: ["Seleccionar ingredientes de temporada y proximidad", "Calcular el escandallo y el precio de venta con margen correcto", "Presentar el menú con descripción atractiva para el cliente"],
    recursos: ["Plantilla de escandallo", "Lista de productos de temporada", "Carta de alérgenos (Reglamento UE 1169/2011)", "Ficha técnica de receta"]
  },
  {
    id: 32, familiaId: 11, dificultad: "Intermedio",
    titulo: "Gestiona una queja de cliente",
    descripcion: "Simula y resuelve una reclamación real en recepción de hotel.",
    objetivos: ["Aplicar el protocolo de atención a quejas del establecimiento", "Practicar la escucha activa y la comunicación asertiva", "Documentar la incidencia y proponer una solución satisfactoria"],
    recursos: ["Protocolo de gestión de quejas del hotel", "Ficha de registro de incidencias", "Role-play con compañero como cliente", "Legislación de protección al consumidor"]
  },
  {
    id: 33, familiaId: 11, dificultad: "Avanzado",
    titulo: "Plan de negocio para un food truck",
    descripcion: "Elabora el plan financiero y operativo para la apertura de un food truck.",
    objetivos: ["Definir el concepto gastronómico y el público objetivo", "Elaborar el plan económico-financiero a 3 años", "Tramitar los permisos y licencias necesarios"],
    recursos: ["Plantilla de plan de negocio (ENISA o Cámara de Comercio)", "Herramienta de simulación financiera", "Normativa municipal de venta ambulante", "Estudio de mercado de referencia"]
  },

  // 12 · Imagen Personal
  {
    id: 34, familiaId: 12, dificultad: "Básico",
    titulo: "Analiza la morfología facial",
    descripcion: "Identifica el tipo de rostro y propón el corte de cabello más adecuado.",
    objetivos: ["Clasificar los tipos de rostro (ovalado, redondo, cuadrado...)", "Asociar cada tipo con el corte más favorecedor", "Argumentar la propuesta al cliente de forma profesional"],
    recursos: ["Guía de morfología facial y cortes asociados", "Fotografías de referencia por tipo de rostro", "Espejo de doble cara", "Ficha de cliente"]
  },
  {
    id: 35, familiaId: 12, dificultad: "Intermedio",
    titulo: "Aplica una coloración permanente",
    descripcion: "Realiza un cambio de color completo siguiendo el protocolo de seguridad.",
    objetivos: ["Realizar la prueba de alergia con la antelación requerida", "Calcular la mezcla de colorante y oxidante correctamente", "Aplicar, templar y aclarar el color según el fabricante"],
    recursos: ["Kit de coloración profesional", "Guantes, capa y protector de línea de nacimiento", "Tabla de colores del fabricante", "Ficha técnica de proceso de coloración"]
  },
  {
    id: 36, familiaId: 12, dificultad: "Avanzado",
    titulo: "Diseña una colección de moda-imagen",
    descripcion: "Crea un book con 5 looks coherentes para un desfile de fin de ciclo.",
    objetivos: ["Definir un concepto creativo y una paleta de color coherente", "Coordinar peinado, maquillaje y estilismo en cada look", "Documentar el proceso con fotografías y fichas técnicas"],
    recursos: ["Mood board digital (Pinterest o Canva)", "Materiales de peluquería y estética", "Cámara fotográfica o smartphone de calidad", "Modelos voluntarios del centro"]
  },

  // 13 · Imagen y Sonido
  {
    id: 37, familiaId: 13, dificultad: "Básico",
    titulo: "Graba un plano secuencia",
    descripcion: "Captura una escena cotidiana en un único plano continuo sin cortes.",
    objetivos: ["Planificar el movimiento de cámara con un story board previo", "Controlar la exposición manual durante el desplazamiento", "Conseguir un plano estable y con intención narrativa"],
    recursos: ["Cámara DSLR o mirrorless", "Trípode con cabeza fluida o estabilizador", "Guion o story board de la escena", "Software de edición para revisión (DaVinci Resolve)"]
  },
  {
    id: 38, familiaId: 13, dificultad: "Intermedio",
    titulo: "Edita un cortometraje de 3 minutos",
    descripcion: "Monta, coloriza y añade música a un corto rodado en clase.",
    objetivos: ["Organizar el material en el proyecto de edición", "Aplicar una LUT de corrección y gradación de color", "Sincronizar la banda sonora y los efectos de sonido"],
    recursos: ["DaVinci Resolve o Premiere Pro", "Material rodado en clase", "Banco de música libre de derechos (Epidemic Sound)", "Auriculares de monitorización"]
  },
  {
    id: 39, familiaId: 13, dificultad: "Avanzado",
    titulo: "Produce un spot publicitario",
    descripcion: "Planifica, rueda y postproduce un spot de 30 segundos para una marca ficticia.",
    objetivos: ["Desarrollar el concepto creativo y el guion técnico", "Dirigir el rodaje gestionando equipo y tiempos", "Postproducir con VFX, color y mezcla de audio finalizada"],
    recursos: ["Cámara Cinema (o DSLR avanzada)", "DaVinci Resolve Studio o Premiere + After Effects", "Micrófono de cañón y grabadora de campo", "Brief de la marca ficticia"]
  },

  // 14 · Industrias Alimentarias
  {
    id: 40, familiaId: 14, dificultad: "Básico",
    titulo: "Aplica el etiquetado alimentario",
    descripcion: "Etiqueta correctamente un producto según el Reglamento UE 1169/2011.",
    objetivos: ["Identificar las menciones obligatorias en el etiquetado", "Calcular la tabla nutricional por 100 g y por porción", "Declarar los alérgenos en formato correcto"],
    recursos: ["Reglamento UE 1169/2011", "Plantilla de etiqueta alimentaria", "Tablas de composición de alimentos (BEDCA)", "Software de etiquetado (o Excel)"]
  },
  {
    id: 41, familiaId: 14, dificultad: "Intermedio",
    titulo: "Control de puntos críticos APPCC",
    descripcion: "Identifica los PCC en la elaboración de una conserva y define los límites.",
    objetivos: ["Describir el diagrama de flujo del proceso productivo", "Aplicar el árbol de decisión del Codex para identificar PCC", "Establecer límites críticos, vigilancia y medidas correctoras"],
    recursos: ["Codex Alimentarius — sistema APPCC", "Diagrama de flujo del proceso elegido", "Plantilla APPCC (cuadro de gestión)", "Normativa de higiene alimentaria (Reg. CE 852/2004)"]
  },
  {
    id: 42, familiaId: 14, dificultad: "Avanzado",
    titulo: "Desarrolla un nuevo producto cárnico",
    descripcion: "Formula, elabora y valida un embutido crudo-curado con ficha técnica completa.",
    objetivos: ["Formular la mezcla de ingredientes cumpliendo la normativa", "Controlar el proceso de curado (humedad, temperatura y aw)", "Elaborar la ficha técnica, etiquetado y vida útil"],
    recursos: ["Laboratorio de industrias alimentarias", "Aditivos y especias autorizados (lista positiva)", "Cámara de curado con control de T° y HR", "Normativa de productos cárnicos (RD 474/2014)"]
  },

  // 15 · Industrias Extractivas
  {
    id: 43, familiaId: 15, dificultad: "Básico",
    titulo: "Identifica tipos de roca y minerales",
    descripcion: "Clasifica 15 muestras de laboratorio según sus propiedades físicas.",
    objetivos: ["Determinar dureza, brillo, exfoliación y densidad de cada muestra", "Clasificar las rocas como ígneas, sedimentarias o metamórficas", "Cumplimentar la ficha de laboratorio con los resultados"],
    recursos: ["Colección de 15 muestras de roca y mineral", "Escala de Mohs (set de puntas)", "Ácido clorhídrico diluido para carbonatos", "Fichas de clasificación mineralógica"]
  },
  {
    id: 44, familiaId: 15, dificultad: "Intermedio",
    titulo: "Calcula la voladura de un banco",
    descripcion: "Diseña la malla de perforación y carga explosiva para un banco de 10 m.",
    objetivos: ["Calcular la burden y el espaciado según el tipo de roca", "Determinar la carga específica de explosivo", "Elaborar el plano de la malla y el esquema de retardo"],
    recursos: ["Manual de voladura de rocas (MAXAM o equivalente)", "Parámetros geomecánicos de la roca", "Hoja de cálculo de diseño de voladuras", "Normativa de explosivos (ITC-MIE-AP2)"]
  },
  {
    id: 45, familiaId: 15, dificultad: "Avanzado",
    titulo: "Plan de restauración de cantera",
    descripcion: "Elabora el plan de cierre y restauración ambiental de una cantera de caliza.",
    objetivos: ["Caracterizar el estado final de la explotación", "Diseñar la revegetación y la estabilización de taludes", "Elaborar el presupuesto y el cronograma de restauración"],
    recursos: ["Ley de minas y normativa autonómica de restauración", "Plano topográfico de la explotación", "Catálogo de especies vegetales autóctonas", "Software SIG (QGIS) para cartografía"]
  },

  // 16 · Informática y Comunicaciones
  {
    id: 46, familiaId: 16, dificultad: "Básico",
    titulo: "Monta tu primera red local",
    descripcion: "Configura una red doméstica con router, switch y dos equipos.",
    objetivos: ["Conectar físicamente los dispositivos de red", "Configurar direccionamiento IP estático en los equipos", "Verificar la conectividad con ping y traceroute"],
    recursos: ["Router doméstico y switch de 4 puertos", "Dos equipos con Windows o Linux", "Cables de red RJ-45", "Simulador Packet Tracer (Cisco)"]
  },
  {
    id: 47, familiaId: 16, dificultad: "Intermedio",
    titulo: "Script de backup automatizado",
    descripcion: "Crea un script Bash que haga copias de seguridad diarias en Linux.",
    objetivos: ["Diseñar la lógica de copia incremental con rsync", "Programar la ejecución automática con cron", "Implementar un sistema de rotación de copias antiguas"],
    recursos: ["Servidor Linux (Ubuntu Server o Debian)", "Acceso SSH al servidor", "Man page de rsync y cron", "Almacenamiento externo o NAS de prácticas"]
  },
  {
    id: 48, familiaId: 16, dificultad: "Avanzado",
    titulo: "Despliega una app en Docker",
    descripcion: "Containeriza una app web y publícala en un registro local.",
    objetivos: ["Escribir un Dockerfile optimizado con multi-stage build", "Orquestar la app con docker-compose (web + base de datos)", "Publicar la imagen en un registry privado (Harbor o similar)"],
    recursos: ["Docker Desktop o Docker Engine en Linux", "Aplicación web de ejemplo (Node.js o Python)", "Documentación oficial de Docker", "Servidor de registro Harbor (o Docker Hub)"]
  },

  // 17 · Instalación y Mantenimiento
  {
    id: 49, familiaId: 17, dificultad: "Básico",
    titulo: "Identifica averías en fontanería",
    descripcion: "Diagnostica y repara una fuga en una instalación de agua fría.",
    objetivos: ["Localizar el origen de la fuga con la instalación en servicio", "Cortar el suministro y aislar el tramo afectado", "Realizar la reparación con los materiales adecuados"],
    recursos: ["Instalación de prácticas de fontanería", "Llaves de paso, manómetro y detector de fugas", "Kit de reparación (cinta PTFE, racores, soldadura)","EPI de fontanería"]
  },
  {
    id: 50, familiaId: 17, dificultad: "Intermedio",
    titulo: "Mantén un sistema de climatización",
    descripcion: "Realiza el mantenimiento preventivo de una bomba de calor doméstica.",
    objetivos: ["Seguir el protocolo de mantenimiento del fabricante", "Revisar presiones, caudales y estado del refrigerante", "Cumplimentar el libro de mantenimiento de la instalación"],
    recursos: ["Bomba de calor de prácticas", "Manómetros de gases refrigerantes", "Certificado de manipulador de gases fluorados", "Documentación técnica del equipo"]
  },
  {
    id: 51, familiaId: 17, dificultad: "Avanzado",
    titulo: "Puesta en marcha de una instalación ACS",
    descripcion: "Instala y regula un sistema de agua caliente sanitaria con apoyo solar.",
    objetivos: ["Montar el circuito primario y secundario solar", "Ajustar la centralita de regulación diferencial", "Verificar el rendimiento de la instalación y corregir desviaciones"],
    recursos: ["Kit de instalación solar térmica de prácticas", "Centralita diferencial y sondas de temperatura", "RITE (Reglamento de Instalaciones Térmicas en Edificios)", "Herramientas de fontanería y soldadura de cobre"]
  },

  // 18 · Madera, Mueble y Corcho
  {
    id: 52, familiaId: 18, dificultad: "Básico",
    titulo: "Identifica especies de madera",
    descripcion: "Clasifica 10 muestras según veta, color y propiedades tecnológicas.",
    objetivos: ["Observar la veta, el poro y el color de cada muestra", "Asociar cada especie con sus usos más comunes", "Cumplimentar la ficha de identificación de maderas"],
    recursos: ["Colección de 10 muestras de madera cepillada", "Lupa de mano 10x", "Guía de identificación de maderas", "Ficha de propiedades tecnológicas"]
  },
  {
    id: 53, familiaId: 18, dificultad: "Intermedio",
    titulo: "Fabrica una silla en taller",
    descripcion: "Mecaniza, ensambla y lacas una silla de madera maciza siguiendo el plano.",
    objetivos: ["Interpretar el plano de construcción y la lista de materiales", "Mecanizar las piezas con sierra, fresadora y lijadora", "Ensamblar con colas y herrajes y aplicar el acabado final"],
    recursos: ["Taller de madera con maquinaria", "Plano de la silla en escala 1:5 y 1:1", "Madera de haya o roble macizo", "Cola blanca, prensas y kit de lacado"]
  },
  {
    id: 54, familiaId: 18, dificultad: "Avanzado",
    titulo: "Diseña una colección de mobiliario",
    descripcion: "Desarrolla en CAD y prototipa una línea de tres muebles con identidad de autor.",
    objetivos: ["Diseñar los tres muebles en 3D con coherencia estética", "Elaborar los planos de fabricación y la lista de materiales", "Construir un prototipo a escala 1:5 y presentar el dossier"],
    recursos: ["SolidWorks, Fusion 360 o SketchUp Pro", "Taller de maquetas con cortadora láser", "Maderas y materiales para prototipo", "Plantilla de dossier de colección"]
  },

  // 19 · Marítimo Pesquera
  {
    id: 55, familiaId: 19, dificultad: "Básico",
    titulo: "Lee una carta náutica",
    descripcion: "Identifica balizas, sondas y líneas de peligro en una carta de la zona costera.",
    objetivos: ["Reconocer los símbolos del sistema IALA en la carta", "Leer las sondas y calcular la profundidad corregida por marea", "Identificar los peligros para la navegación en la zona"],
    recursos: ["Carta náutica del SHOM o IHM de la zona costera", "Escalímetro y compás de puntas", "Tabla de mareas del año en curso", "Manual de simbología náutica (IHO S-4)"]
  },
  {
    id: 56, familiaId: 19, dificultad: "Intermedio",
    titulo: "Planifica una singladura costera",
    descripcion: "Traza el rumbo, calcula la estima y prevé los puntos de recalada.",
    objetivos: ["Trazar la derrota considerando vientos, corrientes y separaciones", "Calcular ETA en cada waypoint con la velocidad de la embarcación", "Preparar el cuaderno de bitácora con los datos del viaje"],
    recursos: ["Carta náutica y paralelas", "GPS de prácticas o simulador de navegación", "Almanaque náutico o aplicación de predicción meteorológica", "Compás de variación y tablas de corrección"]
  },
  {
    id: 57, familiaId: 19, dificultad: "Avanzado",
    titulo: "Gestión de cuota pesquera",
    descripcion: "Elabora el plan de pesca óptimo respetando las vedas y cuotas de la UE.",
    objetivos: ["Interpretar el reglamento de cuotas de la Política Pesquera Común", "Optimizar la distribución de días de pesca por caladero", "Elaborar el informe de capturas y el libro diario de pesca"],
    recursos: ["Reglamento PPC (UE) de cuotas vigente", "Datos históricos de capturas de la embarcación", "Hoja de cálculo de gestión de cuotas", "Formulario oficial de diario de pesca electrónico"]
  },

  // 20 · Química
  {
    id: 58, familiaId: 20, dificultad: "Básico",
    titulo: "Prepara una disolución valorada",
    descripcion: "Calcula y prepara 250 mL de NaOH 0,1 M a partir del sólido.",
    objetivos: ["Calcular la masa necesaria de NaOH aplicando la definición de molaridad", "Utilizar correctamente el matraz aforado", "Etiquetar la disolución con todos los datos de seguridad"],
    recursos: ["Balanza analítica", "Matraz aforado de 250 mL", "NaOH (pellets) y agua desionizada", "Ficha de seguridad del NaOH (FDS)"]
  },
  {
    id: 59, familiaId: 20, dificultad: "Intermedio",
    titulo: "Realiza una titulación ácido-base",
    descripcion: "Determina la concentración de ácido acético en vinagre comercial por volumetría.",
    objetivos: ["Estandarizar la disolución de NaOH con ftalato ácido de potasio", "Realizar la titulación por triplicado y calcular la media", "Expresar el resultado con su incertidumbre analítica"],
    recursos: ["Bureta de 25 mL y soporte universal", "Indicador fenolftaleína", "Vinagre comercial y NaOH 0,1 M", "Calculadora y hoja de resultados analíticos"]
  },
  {
    id: 60, familiaId: 20, dificultad: "Avanzado",
    titulo: "Optimiza un proceso de síntesis",
    descripcion: "Diseña el escalado de una reacción de esterificación con rendimiento >85%.",
    objetivos: ["Calcular el balance másico y el rendimiento teórico de la reacción", "Optimizar las variables de proceso (T°, tiempo, catalizador)", "Elaborar el informe de proceso con los parámetros escalados"],
    recursos: ["Laboratorio de síntesis orgánica", "Software Aspen Plus o ChemCAD (o Excel avanzado)", "Bibliografía de cinética química (Fogler o Levenspiel)", "EPI específicos de síntesis (gafas, guantes criogénicos)"]
  },

  // 21 · Sanidad
  {
    id: 61, familiaId: 21, dificultad: "Básico",
    titulo: "Primeros auxilios básicos",
    descripcion: "Practica RCP y la maniobra de Heimlich con un maniquí de prácticas.",
    objetivos: ["Evaluar correctamente la escena y al paciente (PAS)", "Ejecutar la RCP con la frecuencia y profundidad correctas", "Aplicar la maniobra de Heimlich en caso de atragantamiento"],
    recursos: ["Maniquí de RCP adulto y pediátrico", "DEA de prácticas", "Guía ERC (European Resuscitation Council)", "Guantes de nitrilo y mascarilla de barrera"]
  },
  {
    id: 62, familiaId: 21, dificultad: "Intermedio",
    titulo: "Lectura de signos vitales",
    descripcion: "Interpreta constantes de un paciente simulado y elabora un informe.",
    objetivos: ["Medir TA, FC, FR, SpO2 y temperatura con los equipos correctos", "Identificar valores fuera del rango normal por edad", "Registrar y comunicar los hallazgos en la hoja de enfermería"],
    recursos: ["Tensiómetro digital, pulsioxímetro y termómetro", "Paciente simulado o maniquí avanzado", "Hoja de registro de constantes vitales", "Valores de referencia por grupo de edad (AHA/ESC)"]
  },
  {
    id: 63, familiaId: 21, dificultad: "Avanzado",
    titulo: "Simulación de triaje en urgencias",
    descripcion: "Clasifica 10 casos clínicos según el sistema Manchester en menos de 20 min.",
    objetivos: ["Aplicar el árbol de decisión del Sistema Manchester Triage", "Priorizar correctamente los casos de mayor gravedad", "Documentar el triaje y justificar cada decisión"],
    recursos: ["Sistema Manchester Triage (libro y app)", "10 casos clínicos simulados", "Fichas de paciente con signos y síntomas", "Escenario de urgencias simuladas"]
  },

  // 22 · Seguridad y Medioambiente
  {
    id: 64, familiaId: 22, dificultad: "Básico",
    titulo: "Identifica riesgos en un puesto de trabajo",
    descripcion: "Cumplimenta la ficha de evaluación de riesgos de un puesto de oficina.",
    objetivos: ["Reconocer los riesgos ergonómicos, eléctricos y de incendio", "Valorar la probabilidad y consecuencia de cada riesgo", "Proponer medidas preventivas específicas"],
    recursos: ["Guía de evaluación de riesgos del INSST", "Plantilla de evaluación de riesgos", "Checklist de inspección de puesto de trabajo", "Ley 31/1995 de Prevención de Riesgos Laborales"]
  },
  {
    id: 65, familiaId: 22, dificultad: "Intermedio",
    titulo: "Elabora un plan de emergencia",
    descripcion: "Diseña el plan de evacuación de un centro educativo de 300 personas.",
    objetivos: ["Identificar las vías de evacuación y los puntos de reunión", "Asignar roles y responsabilidades en la emergencia", "Elaborar el plano de evacuación y el plan de actuación"],
    recursos: ["Planos del edificio", "Norma UNE 23032 y Manual de autoprotección", "Software de diseño (AutoCAD o similar)", "RD 393/2007 (Norma básica de autoprotección)"]
  },
  {
    id: 66, familiaId: 22, dificultad: "Avanzado",
    titulo: "Auditoría de sistema de gestión ambiental",
    descripcion: "Realiza una auditoría interna ISO 14001 de una empresa industrial ficticia.",
    objetivos: ["Revisar la documentación del SGA contra los requisitos de la norma", "Identificar no conformidades y observaciones", "Elaborar el informe de auditoría con el plan de acciones correctivas"],
    recursos: ["Norma ISO 14001:2015", "Documentación del SGA de la empresa ficticia", "Checklist de auditoría interna", "Plantilla de informe de auditoría ISO"]
  },

  // 23 · Servicios Socioculturales
  {
    id: 67, familiaId: 23, dificultad: "Básico",
    titulo: "Diseña una dinámica de grupo",
    descripcion: "Planifica una actividad de cohesión para un grupo de 20 adolescentes.",
    objetivos: ["Seleccionar la dinámica adecuada al objetivo y al grupo", "Preparar los materiales y el espacio necesario", "Prever las posibles resistencias y cómo gestionarlas"],
    recursos: ["Manual de dinámicas de grupo (Fritzen o similar)", "Materiales fungibles para la actividad", "Ficha de planificación de sesión", "Espacio abierto o sala multiusos"]
  },
  {
    id: 68, familiaId: 23, dificultad: "Intermedio",
    titulo: "Diseña un taller socioeducativo",
    descripcion: "Planifica una sesión de 2h para un grupo de jóvenes en riesgo de exclusión.",
    objetivos: ["Detectar las necesidades del grupo y definir los objetivos del taller", "Estructurar las actividades respetando los tiempos y los ritmos del grupo", "Diseñar la evaluación de proceso y de resultado"],
    recursos: ["Diagnóstico social del grupo", "Plantilla de programación de taller", "Materiales didácticos adaptados", "Indicadores de evaluación socioeducativa"]
  },
  {
    id: 69, familiaId: 23, dificultad: "Avanzado",
    titulo: "Proyecto de intervención comunitaria",
    descripcion: "Diseña e implementa un proyecto de 3 meses para un barrio con necesidades.",
    objetivos: ["Realizar el diagnóstico participativo de la comunidad", "Diseñar el proyecto con objetivos, actividades, recursos y evaluación", "Coordinarse con entidades del barrio e instituciones locales"],
    recursos: ["Guía de diagnóstico comunitario participativo", "Plantilla de proyecto de intervención (Marco Lógico)", "Herramientas de participación (encuestas, grupos focales)", "Normativa de servicios sociales autonómica"]
  },

  // 24 · Textil, Confección y Piel
  {
    id: 70, familiaId: 24, dificultad: "Básico",
    titulo: "Identifica tipos de tejido",
    descripcion: "Clasifica 10 muestras textiles por composición, ligamento y acabado.",
    objetivos: ["Distinguir fibras naturales, artificiales y sintéticas", "Identificar los ligamentos básicos (tafetán, sarga, satén)", "Leer el etiquetado de composición textil"],
    recursos: ["Colección de 10 muestras textiles", "Lupa de telas (cuenta-hilos)", "Guía de identificación de fibras textiles", "Ficha de clasificación de muestras"]
  },
  {
    id: 71, familiaId: 24, dificultad: "Intermedio",
    titulo: "Confecciona una prenda básica",
    descripcion: "Patrona y cose una camisa de manga larga en tela de algodón.",
    objetivos: ["Trazar el patrón base a medidas reales y añadir costuras", "Cortar y marcar las piezas sobre la tela correctamente", "Coser la prenda con acabados profesionales (sisas, cuello, puños)"],
    recursos: ["Tela de algodón 1,5 m", "Máquina de coser y overlock", "Cinta métrica, jaboncillo y alfileres", "Patrón base de camisa en el talle del alumno"]
  },
  {
    id: 72, familiaId: 24, dificultad: "Avanzado",
    titulo: "Diseña una colección cápsula",
    descripcion: "Desarrolla 5 prendas con identidad de marca, figurín técnico y ficha de costes.",
    objetivos: ["Definir el concepto creativo y el cliente objetivo", "Elaborar los figurines y las fichas técnicas de cada prenda", "Calcular los costes de producción y el precio de venta"],
    recursos: ["Software de diseño de moda (CLO 3D o Illustrator)", "Muestras de tejidos y avíos", "Plantilla de ficha técnica de prenda", "Referencias de coste de confección del sector"]
  },

  // 25 · Transporte y Mantenimiento de Vehículos
  {
    id: 73, familiaId: 25, dificultad: "Básico",
    titulo: "Cambia el aceite del motor",
    descripcion: "Realiza el cambio de aceite y filtro en un vehículo siguiendo el manual.",
    objetivos: ["Identificar el tipo y cantidad de aceite especificado por el fabricante", "Realizar el vaciado, sustitución del filtro y llenado correctamente", "Verificar el nivel y la estanqueidad tras el cambio"],
    recursos: ["Vehículo de prácticas en foso o elevador", "Aceite de motor especificado y filtro nuevo", "Manual de taller del vehículo", "EPI (guantes y gafas) y bandeja de recogida de aceite"]
  },
  {
    id: 74, familiaId: 25, dificultad: "Intermedio",
    titulo: "Diagnostica un fallo electrónico",
    descripcion: "Usa el escáner OBD-II para leer y borrar códigos de avería en un turismo.",
    objetivos: ["Conectar correctamente el escáner al puerto OBD-II del vehículo", "Interpretar los códigos DTC y relacionarlos con el sistema afectado", "Proponer el proceso de diagnóstico y la reparación adecuada"],
    recursos: ["Escáner OBD-II multimarca (LAUNCH o similar)", "Vehículo con avería simulada", "Base de datos de códigos DTC", "Manual de diagnóstico del fabricante"]
  },
  {
    id: 75, familiaId: 25, dificultad: "Avanzado",
    titulo: "Revisión pre-ITV completa",
    descripcion: "Realiza la inspección de todos los sistemas del vehículo y emite el informe.",
    objetivos: ["Revisar frenos, dirección, suspensión, luces y emisiones", "Identificar los defectos leves, graves y muy graves según normativa ITV", "Elaborar el informe con las reparaciones necesarias y su prioridad"],
    recursos: ["Vehículo de prácticas completo", "Frenómetro, opacímetro y banco de suspensiones", "Manual de inspección técnica de vehículos (RD 920/2017)", "Plantilla de informe de inspección"]
  },

  // 26 · Vidrio y Cerámica
  {
    id: 76, familiaId: 26, dificultad: "Básico",
    titulo: "Modela una pieza en torno alfarero",
    descripcion: "Centra y abre el barro para obtener un cuenco de paredes uniformes.",
    objetivos: ["Centrar correctamente la bola de barro en el torno", "Abrir la base y elevar las paredes con grosor uniforme", "Retirar la pieza del torno sin deformarla"],
    recursos: ["Torno eléctrico de alfarería", "Barro de tornear 500 g", "Herramientas de torno (esponjas, paleta, aguja)", "Tabla de trabajo y plástico para proteger"]
  },
  {
    id: 77, familiaId: 26, dificultad: "Intermedio",
    titulo: "Aplica técnicas de esmaltado",
    descripcion: "Prepara y aplica tres tipos de esmalte sobre bizcocho con resultados diferentes.",
    objetivos: ["Preparar los esmaltes a la densidad correcta (Baumé)", "Aplicar por inmersión, vertido y pincel obteniendo cobertura uniforme", "Analizar los resultados tras la cocción y corregir errores"],
    recursos: ["Tres esmaltes de diferentes bases (mate, brillante, cristalino)", "Piezas bizcochas y aerómetro (Baumé)", "Horno de cerámica con controlador de temperatura", "Fichas de receta de esmalte"]
  },
  {
    id: 78, familiaId: 26, dificultad: "Avanzado",
    titulo: "Diseña una colección cerámica de autor",
    descripcion: "Crea 5 piezas con identidad visual coherente para exposición y catálogo.",
    objetivos: ["Desarrollar un concepto artístico propio y coherente", "Dominar la técnica de construcción y el acabado de autor", "Elaborar el dossier fotográfico, las fichas de obra y el precio"],
    recursos: ["Taller completo de cerámica (torno, horno, esmaltes)", "Cámara fotográfica y fondo neutro para documentación", "Software de diseño para el catálogo (InDesign o Canva)", "Referentes del mercado cerámico de autor"]
  },
]
