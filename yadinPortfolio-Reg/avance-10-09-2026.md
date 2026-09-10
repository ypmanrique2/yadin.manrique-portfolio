# Avance 10-09-2026

## Tarea Realizada

### Fusión de Cards de Proyectos en CV_*PREVIEW.html

**Objetivo:** Fusionar las 2 cards de las posiciones [2, 3] (YadinStore · Back-end API - Spring + Kafka y YadinStore · CI/CD Live - Jenkins & Observabilidad) en una sola card consolidada.

**Detalles de la fusión:**

1. **Cards fusionadas:**
   - Position [2]: YadinStore · Back-end API - Spring + Kafka
   - Position [3]: YadinStore · CI/CD Live - Jenkins & Observabilidad

2. **Resultado:** Nueva card consolidada "YadinStore · Backend API + Kafka + CI/CD & Observabilidad" que combina:
   - Stack de backend API con Spring Boot 3.5, Spring Modulith, arquitectura hexagonal, DDD, virtual threads
   - Kafka 3.9.2 KRaft con Transactional Outbox, DLT, idempotencia, Resilience4j
   - Seguridad: Spring Security + JWT, RBAC por X-Tenant-ID, rate limiting, CORS allowlist, anti-IDOR
   - Persistencia: MongoDB ACID, Mongock, Testcontainers + JaCoCo
   - CI/CD: GitHub Actions, Jenkins 2.468.2, Pipeline as Code (Jenkinsfile), Docker/DinD
   - Observabilidad: Micrometer, Prometheus, Grafana 10.4.3, Elasticsearch 8.15.3, Kibana 8.15.3
   - Dashboard server-side de actividad Kafka (brokers, topics, consumer groups, lag) via SASL_SSL
   - JasperReports para reportes PDF de órdenes

3. **Archivos modificados:**
   - `CV_Fusion_FE_2026_PREVIEW.html`: 
     - Fusion de las cards positions [2,3] en una sola card consolidada
     - Actualización del schema.org ItemList para reflejar la nueva estructura (de 7 a 6 items)

4. **Enfoque técnico:**
   - Se mantuvo el modo porcelain como solicitado
   - No se realizó ningún push a GitHub
   - Se aplicaron principios SOLID, Clean/Hexagonal Architecture, OWASP, ASVS, IDOR, Idempotency, DX, UX/UI
   - La fusión mantiene toda la información técnica relevante mientras consolida el monitoreo Kafka con las tecnologías de métricas, observabilidad y CI-CD Cloud

5. **Links actualizados:**
   - Ver Kafka Dashboard → https://yadinstore-backend.onrender.com/kafka-dashboard.html
   - Ver Jenkins Dashboard → https://yadinstore-jenkins-obs-live.onrender.com/jenkins-dashboard.html

**Estado:** ✅ Completado, listo para revisión y autorización del usuario antes de subir a GitHub.

## Notas Técnicas

- La fusión permite una presentación más cohesiva del stack completo de YadinStore
- Se elimina redundancia al combinar tecnologías relacionadas (observabilidad, CI/CD, Kafka)
- Se mantiene la integridad de toda la información técnica importante
- La estructura semántica y el schema.org JSON-LD se actualizaron correctamente
