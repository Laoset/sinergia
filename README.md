# Desafío Técnico Sinergia Creativa - Desarrollador Frontend

Este proyecto es un simulador de comisiones y planificador de actividades desarrollado con **React + Vite** enfocado principalmente a la vista móvil. Permite a los usuarios calcular su rendimiento comercial basado en diferentes variables y organizar sus actividades para maximizar su eficiencia.

## 🚀 Instalación y ejecución

Sigue estos pasos para levantar el servidor localmente:

1. Instala las dependencias:
   ```bash
   npm install  # o pnpm install
   ```
2. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev  # o pnpm run dev
   ```
3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la app.

## 📌 Estructura del Código

El proyecto sigue una convención de nomenclatura clara y consistente para facilitar la comprensión y el mantenimiento del código:

- **Nombres en camelCase**: La primera letra de la primera palabra se escribe en minúscula, y las demás palabras se escriben con la primera letra en mayúscula.

  - Ejemplo: `actionPlan.component.tsx`.

- **Sufijos descriptivos**: Cada archivo tiene un sufijo que indica su tipo o propósito:
  - `.component.tsx`: Componentes.
  - `.ui.tsx`: Componentes de UI reutilizables.
  - `.types.ts`: Tipos de TypeScript.
  - `.hooks.ts`: Custom hooks de React.
  - `.utils.ts`: Funciones utilitarias.

Ejemplos:

- `formInput.ui.tsx`: Un componente de UI reutilizable para inputs de formulario.
- `generics.types.ts`: Definiciones de tipos genéricos.
- `useTab.hooks.ts`: Un custom hook para manejar la lógica de pestañas.

## 🧪 Testing

Este proyecto utiliza **Jest** y **Testing Library** para pruebas unitarias y de integración.

### 🔹 Ejecutar pruebas con Jest Y Testing Library

1. Ejecuta los tests con:
   ```bash
   npm run test  # o pnpm run test
   ```

## 🛠️ Tecnologías utilizadas

- React 19
- TypeScript
- TailwindCSS
- Lucide Icons
- Jest
- Testing Library
- Vite
- Zod
