# Text Encryptor Challenge

Este proyecto es un encriptador y desencriptador de texto desarrollado en JavaScript. El objetivo es transformar un texto dado en una versión encriptada mediante reglas específicas, y permitir su posterior desencriptado al estado original.

## Funcionalidades

### 1. Encriptar Texto
La función `encriptador(texto)` convierte un texto ingresado en una versión encriptada siguiendo estas reglas:
- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

### 2. Desencriptar Texto
La función `desencriptador(texto)` revierte la encriptación, devolviendo el texto original siguiendo las reglas opuestas:
- `enter` se convierte en `e`
- `imes` se convierte en `i`
- `ai` se convierte en `a`
- `ober` se convierte en `o`
- `ufat` se convierte en `u`

### 3. Validación de Texto
La función `validacionTexto(texto)` verifica que el texto ingresado contenga solo letras minúsculas y no tenga acentos. Si el texto no cumple con este criterio, las funciones de encriptado y desencriptado devolverán un mensaje de error.

### 4. Copiar Texto al Portapapeles
La función `copiarTexto()` permite copiar el resultado del texto encriptado o desencriptado al portapapeles para un uso posterior. Una vez copiado, se oculta el contenido actual y se muestra un mensaje indicando que no hay resultado disponible.

### 5. Encriptar y Desencriptar desde la Interfaz
Las funciones `encriptar()` y `desencriptar()` manejan la interacción con la interfaz de usuario, encriptando o desencriptando el texto ingresado en un campo de entrada y mostrando el resultado en otro campo. También resetean el campo de entrada tras procesar el texto.

## Requisitos
- El texto debe estar en minúsculas y sin acentos para ser válido.

## Uso
1. Ingresa el texto en el campo de entrada.
2. Haz clic en el botón para encriptar o desencriptar.
3. Copia el resultado usando el botón correspondiente.

## Ejecución del Proyecto
Este proyecto es ejecutable directamente en un navegador web. Solo necesitas clonar el repositorio y abrir el archivo `index.html` en tu navegador para probar la funcionalidad.