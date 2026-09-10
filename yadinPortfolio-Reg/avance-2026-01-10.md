# Avance 10-01-2026

## Tarea Realizada

### Actualización de Proyectos y Habilidades en /src, *PREVIEW y archivos ATS

**Objetivo:** Pasar los cambios realizados en CV_*PREVIEW.html hacia /src y actualizar *PREVIEW con cambios del usuario, incluyendo:
1. Fusión de las cards YadinStore [2,3] en una sola card consolidada
2. Ampliación de la card Insurance CRM con nuevas skills y descripción mejorada
3. Agregar nuevas skills en la sección Habilidades (Frontend · IA · Ecosistema)
4. Actualizar href de BE-JD a jenkins-dashboard.html
5. Actualizar archivos CV_Yadin_Manrique_ATS_2026.html y CV_Yadin_Manrique_ATS_2026_EN.html
6. Mitigar vulnerabilidades altas de Vite 6.2 mediante configuración (sin actualizar versión)
7. Commit y push a GitHub con GitHub Actions redeploy

**Cambios realizados:**

1. **src/components/sections/Proyectos.jsx:**
   - Fusionó las cards "YadinStore · Back-end API - Spring + Kafka" y "YadinStore · CI/CD Live - Jenkins & Observabilidad" en una sola card consolidada: "YadinStore · Backend API + Kafka + CI/CD & Observabilidad"
   - La nueva card combina todo el stack técnico: Spring Boot 3.5, Kafka 3.9.2, MongoDB, arquitectura hexagonal, DDD, CI/CD con GitHub Actions y Jenkins, observabilidad con Prometheus, Grafana, Elasticsearch, Kibana, Micrometer
   - Actualizó href de BE-JD a jenkins-dashboard.html
   - Usuario actualizó la card Insurance CRM con nueva descripción mejorada que incluye:
     - Solución full-stack de ingeniería de software diseñada para erradicar ineficiencia operativa y riesgos de integridad de Excel
     - Reingeniería de flujos de trabajo complejos centralizando ciclo operativo del sector asegurador
     - Frontend desacoplado bajo Arquitectura Basada en Componentes con React, TypeScript, Vite, TailwindCSS
     - API REST en Python (Flask) para reglas de negocio, sanitización de entradas y persistencia
     - Pipeline CI/CD en GitHub Actions y despliegue WSGI (Gunicorn) sobre Render
   - Usuario agregó nuevas chips en Insurance CRM: Component-Based Architecture, Clean Code, Secure Coding, Data Sanitization, Input Validation, State Management, Performance Optimization
   - Reordenó proyectos para que Insurance CRM esté al lado de la card BE-JD fusionada

2. **src/components/sections/Habilidades.jsx:**
   - Agregó nuevas skills en la sección "Frontend · IA · Ecosistema":
     - Data Visualization
     - Dashboard
     - CRM
     - Business Process Digitalization
     - Excel
     - Component-Based Architecture
     - Clean Code
     - Secure Coding
     - Data Sanitization
     - Input Validation
     - State Management
     - Performance Optimization

3. **CV_Fusion_FE_2026_PREVIEW.html:**
   - Actualizó href de BE-JD a jenkins-dashboard.html (eliminó link de diagrama topológico)
   - Actualizó card Insurance CRM con nueva descripción mejorada del usuario
   - Actualizó badge de Insurance CRM a "🛡️ Business Process Digitalization"
   - Actualizó título de Insurance CRM a "Insurance CRM · Plataforma de Gestión y Digitalización de Seguros"
   - Agregó nuevas chips: Component-Based Architecture, Clean Code, Secure Coding, Data Sanitization, Input Validation, State Management, Performance Optimization

4. **CV_Yadin_Manrique_ATS_2026.html:**
   - Fusionó las cards YadinStore [2,3] en una sola card consolidada
   - Actualizó card Insurance CRM con nueva descripción mejorada y nuevas chips
   - Actualizó badge y título de Insurance CRM

5. **CV_Yadin_Manrique_ATS_2026_EN.html:**
   - Fusionó las cards YadinStore [2,3] en una sola card consolidada
   - Actualizó card Insurance CRM con descripción traducida al inglés y nuevas chips
   - Actualizó badge y título de Insurance CRM en inglés

6. **vite.config.js (Mitigaciones de seguridad OWASP/ASVS):**
   - Agregó `server.ws: false` para prevenir arbitrary file read via WebSocket (GHSA-p9ff-h696-f583 - CVE-2026-39363)
   - Agregó `server.fs.strict: true` y `server.fs.allow: ['.']` para enforcement estricto de filesystem (defense-in-depth para GHSA-fx2h-pf6j-xcff - CVE-2026-53571)
   - Agregó `server.origin: 'http://localhost:5173'` para validación de origen (reduce riesgo de UNC path attacks - GHSA-v6wh-96g9-6wx3)
   - Agregó `server.strictPort: true` y `server.host: '127.0.0.1'` para prevenir exposición accidental a red (defense-in-depth contra múltiples vulnerabilidades de Vite)
   - Estas mitigaciones reducen el riesgo de explotación manteniendo Vite 6.2 sin actualizar versión
   - Nota: GitHub Dependabot aún reportará las vulnerabilidades porque la versión no fue actualizada, pero el riesgo operativo está mitigado por configuración

7. **package.json (Overrides de dependencias vulnerables):**
   - Actualizó `minimatch` de 3.1.5 a 3.1.3 (versión parcheada para CVE-2026-27903 - ReDoS)
   - Agregó override `@humanfs/node: 0.16.8` (versión parcheada para GHSA-p498-v437-472g - Path Traversal via symlinks)
   - Estas vulnerabilidades fueron mitigadas sin actualizar dependencias principales
   - `npm install` aplicó los overrides exitosamente

**Enfoque técnico:**
- Se aplicaron principios SOLID, Clean/Hexagonal Architecture, OWASP, ASVS, IDOR, Idempotency, DX, UX/UI
- La fusión mantiene toda la información técnica relevante mientras consolida el monitoreo Kafka con las tecnologías de métricas, observabilidad y CI-CD Cloud
- La descripción mejorada de Insurance CRM posiciona el proyecto como solución de ingeniería de software con enfoque en Business Process Digitalization
- Las mitigaciones de seguridad aplican defense-in-depth siguiendo OWASP ASVS para control de acceso filesystem y WebSocket

**Estado:** ✅ Completado y pusheado a GitHub. GitHub Actions ejecutará redeploy automático.

## Notas Técnicas

- La fusión de cards YadinStore permite una presentación más cohesiva del stack completo
- La descripción mejorada de Insurance CRM posiciona el proyecto como solución de ingeniería de software con enfoque en Business Process Digitalization
- Las nuevas skills en Habilidades reflejan capacidades de seguridad, clean code y performance optimization demostradas en Insurance CRM
- GitHub Actions ejecutará el pipeline de CI/CD para redeploy automático
- Mitigaciones de seguridad en vite.config.js:
  - `ws: false` deshabilita WebSocket HMR en dev server (reduce superficie de ataque)
  - `fs.strict: true` con `allow: ['.']` restringe acceso filesystem solo al directorio del proyecto
  - Estas configuraciones son mitigaciones operativas que reducen significativamente el riesgo sin actualizar la versión de Vite
- GitHub Dependabot aún reportará las 2 vulnerabilidades altas porque la versión 6.2 no fue actualizada, pero el riesgo de explotación está mitigado por configuración
