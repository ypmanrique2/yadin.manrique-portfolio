# Avance 2026-09-08 — Sync /src con lienzos (k3d + cambios usuario)

## Qué cambios del usuario encontré (preservados, no pisados)
- `Habilidades.jsx`: `(AKS)` → `(K3d - AKS)` en `dataCloud` + `tagGroups` (2 sitios).
- `Sobre_mi.jsx`: mismo cambio en `cloudSeguridadChips` (1 sitio).
- `Proyectos.jsx` Admin Dashboard: agregados `Docker` + `Kubernetes (K3d - AKS)` + `Github Actions` a chips.
- `Proyectos.jsx` Back-end API: agregado `Kubernetes (K3d - AKS)` a chips.

## Qué porté de lienzos (merge encima del cambio del usuario)
- `Proyectos.jsx` — chip `k3d` separado (estilo lienzo FE, sin duplicar "Kubernetes"):
  - e-Shop SaaS: `Docker, k3d, Testcontainers` (faltaba k3d).
  - Admin: `Kubernetes (K3d - AKS)` → `k3d`; `Github Actions` → `GitHub Actions` (casing como e-Shop + lienzo). Docker del usuario intacto.
  - Back-end: `Kubernetes (K3d - AKS)` → `k3d`, orden `Docker, k3d, SASL_SSL` según lienzo.
  - CI/CD Live: `k3d` tras `DinD` (faltaba).
- `Habilidades.jsx` + `Sobre_mi.jsx`: normalizado `(K3d - AKS)` → `(k3d · AKS)` (formato lienzo, minúscula + punto medio).
- Verificado ya en sync: descripciones humanizadas, título TECNÓLOGO limpio y PII toggle 👁 en `Experiencia.jsx` — sin tocar (parity OK).

## Archivos tocados
- `src/components/sections/Proyectos.jsx` (4 líneas chips)
- `src/components/sections/Habilidades.jsx` (2 líneas)
- `src/components/sections/Sobre_mi.jsx` (1 línea)

## Grep counts (post-commit)
- `Proyectos.jsx`: `"k3d"` = 4 (uno por proyecto YadinStore)
- `Habilidades.jsx`: `k3d · AKS` = 2 · `Sobre_mi.jsx`: 1

## Git
- Commit `dbd2794` — `feat: sync src con lienzos (chip k3d en 4 YadinStore + skills)`
- Push `612a018..dbd2794 main -> main` OK. Porcelain final limpio.
- NO build (regla). NO tocados `.skill` ni `Experiencia.jsx`.
