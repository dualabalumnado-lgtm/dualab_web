# Landing Module

Este módulo contiene la pantalla inicial (landing) de la aplicación, que es la primera vista que ve el usuario antes del login.

## 🎯 Objetivo

Captar la atención de usuarios nuevos y dirigirlos rápidamente según su perfil:

* 🎓 Estudiantes → explorar retos
* 🏫 Centros educativos → gestionar alumnado
* 🏢 Empresas → crear retos

## 🧩 Contenido

* `PantallaInicio.vue` → vista principal de la landing
* Interfaz orientada a conversión (call to action, tarjetas, estructura clara)

## 🧠 Enfoque UX

La landing está diseñada para:

* Explicar el valor de la plataforma de forma rápida
* Reducir la fricción en la toma de decisiones
* Guiar al usuario hacia una acción (explorar, solicitar demo, contactar)

## 🔗 Integración futura

* Se conectará con el sistema de autenticación (login)
* Las acciones de las tarjetas dirigirán a flujos específicos según el rol

## 🛠️ Notas

* Módulo independiente para evitar conflictos con otras partes del proyecto
* Pensado para ser escalable (posible separación en componentes en el futuro)
