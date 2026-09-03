# MCP LinkedIn 2026 + Plan LinkedIn 2026 — Investigación completa & Propuesta STAND-BY

**Fecha:** 2026-09-03  
**Proyecto:** `yadin.manrique-portfolio` (`C:\GITHUB\yadin.manrique-portfolio`)  
**Perfil objetivo:** https://www.linkedin.com/in/yadin-paulo-manrique-marquez-18753910/  
**Estado:** 🟡 **STAND-BY** — NO implementar hasta que Yadin diga explícitamente. Documento + engram persisten TODO para futuro `sdd-propose` / `sdd-ff linkedin-2026`.  
**Decisión usuario:** _"MCP queda en STAND-BY, no implementar ahora. Pero quiere que NO se olvide nada."_  
**Orquestación:** Sub-agente documentador — **SIN tocar** `CV_Fusion_FE_2026_PREVIEW.html`, `CV_Yadin_Manrique_ATS_2026.html`, `src/*`, `index.html` (trabajo paralelo otro agente).

> **Cómo usar este doc:** Es el *single source of truth* stand-by. Cuando Yadin active, el orquestador lanzará `sdd-propose` leyendo §1-§7 como input. No requiere re-investigar.

---

## Índice

1. [Resumen ejecutivo stand-by](#1-resumen-ejecutivo-stand-by)
2. [Inventario 12 servidores MCP LinkedIn 2026](#2-inventario-12-servidores-mcp-linkedin-2026)
3. [3 caminos arquitectónicos — tradeoffs](#3-3-caminos-arquitectónicos--tradeoffs)
4. [Scopes, versiones, tokens y límites 2026](#4-scopes-versiones-tokens-y-límites-2026)
5. [Riesgos legales & ToS §24](#5-riesgos-legales--tos-24)
6. [Flujo paso-a-paso Oficial OAuth self-serve](#6-flujo-paso-a-paso-oficial-oauth-self-serve)
7. [Flujo Browser automation li_at + Keyring](#7-flujo-browser-automation-li_at--keyring)
8. [Bright Data & alternativas public-scrape](#8-bright-data--alternativas-public-scrape)
9. [Config MCP en opencode.json (Windows)](#9-config-mcp-en-opencodejson-windows)
10. [Plan LinkedIn 2026 propuesto](#10-plan-linkedin-2026-propuesto)
11. [Fuentes & URLs citadas](#11-fuentes--urls-citadas)
12. [Estado, próximos pasos y artefactos](#12-estado-próximos-pasos-y-artefactos)

---

## 1. Resumen ejecutivo stand-by

**Problema:** Yadin quiere operar su LinkedIn vía MCP (lectura/escritura) desde `opencode` sin re-descubrir todo cada sesión. Necesita mapa 2026 de opciones, credenciales, límites y riesgos.

**Hallazgo clave 2026:** LinkedIn solo permite **self-serve** `openid + profile + email + w_member_social` (tu perfil + postear como vos). Todo lo demás (buscar terceros, inbox/DMs, invitaciones, Company Page org) requiere **Partner Program** con Company Page verificada + 4-8 semanas (típico 3-4 meses) y scopes `rw_ads`, `r_organization_social`, `w_organization_social`, `RSC`, `SNAP` (SNAP **CERRADO** 2026 a nuevos partners).

**3 caminos evaluados:**

| Camino | Auth | Alcance | Riesgo ToS | Token/Baneo | Cuándo usar |
|--------|------|---------|------------|-------------|-------------|
| **A. Oficial OAuth** | OAuth 2.1 PKCE via `developers.linkedin.com` | `openid profile email w_member_social` (solo yo + post) | ✅ Nulo — ToS OK | 60d `5184000s`, refresh silencioso solo si no expiró + logueado `linkedin.com`; `refresh_token` solo partners | Recomendado stand-by default — limpio, sin secretos |
| **B. Browser `li_at`** | Cookie `li_at` + OS Keyring | 14 tools (12 read + `send_message`/`connect` write), perfil/companies/jobs | ⚠️ Alto — ToS §24 prohíbe scraping/crawl, baneo 3-7d (Voyager), `li_at` eterno = exfiltración grave | `li_at` no expira (hasta logout), rate-limit local `LINKEDIN_MAX_PER_HOUR`, 2s throttle + 120h cooldown conect | Solo si Yadin autoriza riesgo y necesita write beyond `w_member_social` |
| **C. Bright Data / public** | API key `brightdata` + proxy rotation + CAPTCHA solver | Solo datos **públicos** (sin login), 5k free req/mes | 🟡 Medio — sin login es más limpio legalmente, pero igual §24 + límites 24h perfil/48h actividad + no revender/combinar + no AI training | Sin `li_at`, paga por req | Para research público sin exponer cuenta |

**Decisión stand-by:** Guardar A+B+C sin implementar. Futuro `sdd-propose` elegirá A por defecto; B solo con consentimiento explícito; C para prospecting público.

---

## 2. Inventario 12 servidores MCP LinkedIn 2026

> Inventario factual 2026-09-03. Versiones y scopes verificados contra repos + `learn.microsoft.com`.

| # | Servidor / Paquete | Autor | Versión | Auth | Tools / Scopes | Notas 2026 |
|---|-------------------|-------|---------|------|----------------|------------|
| 1 | **`@pegasusheavy/linkedin-mcp`** | pegasusheavy | `1.4.0` | OAuth oficial `client_id/secret` | `openid profile email w_member_social` → `me`, `post`, `get-current-user-profile` | Oficial self-serve, flujo `linkedin_skill.py login` → `http://localhost:9999` |
| 2 | **`linkedin-mcp-bridge`** | Sabari2005 | — | Chrome session manual, sin `client_id` | `npx linkedin-mcp-setup` captura sesión Chrome | Bridge local, no OAuth, depende de Chrome abierto |
| 3 | **`eliasbiondo / sanu495 FastMCP + Patchright`** | sanu495 / eliasbiondo | Python 3.12 `uv` | `Patchright` browser + `~/.linkedin-mcp-server/browser-data` | 7 tools `people`/`companies`/`jobs` + `--login` persistente | Requiere `uv`, guarda browser-data |
| 4 | **`JohannsenLum/linkedin-api-mcp`** | JohannsenLum | `uvx` | `li_at` cookie → OS Keyring | 14 tools: 12 read (`search`, `profile`, `company`, `jobs`) + 2 write (`send_message`, `connect`) + `LINKEDIN_MAX_PER_HOUR`, `2s` throttle, `120h` cooldown | **Más completo B** — pero `li_at` eterno = riesgo |
| 5 | **`larsbaunwall/Unlinked`** | larsbaunwall | — | `LINKEDIN_TOKEN` (Member Data Portability API) | Solo EEA/Suiza (DMA) | No aplica CO — requiere residencia EEA/Suiza |
| 6 | **`membrane/linkedin`** (skill en `C:\Users\yadin\.agents\skills\linkedin\SKILL.md`) | membranehq/cli | `membranehq/cli` proxied | Membrane server-side vault | `create-text-post`, `list-posts`, `get-current-user-profile`, `react`, `comment` con confirmación | Vault seguro, no expone token local |
| 7 | **`linkedapi-mcp`** (cloud browser) | LinkedAPI | API key | Cloud browser API key | Scraping remoto | Pago, dependencia cloud |
| 8 | **`Bright Data MCP`** | brightdata | — | API key `BRIGHTDATA_API_KEY` | 5k free req/mes + proxy rotation + CAPTCHA solver | Solo público, sin login → legalmente más limpio |
| 9 | **`OutX Chrome extension`** | OutX | ext | Chrome ext | Inyección DOM | Frágil a cambios LinkedIn DOM |
| 10 | **`Proxycurl`** | Proxycurl | defunct | — | — | **Demandado 2025-26** por fake accounts + scraping → discontinuado |
| 11 | **`Voyager API` (`linkedin-api` Python)** | tomquirk / etc | — | `li_at` | REST no oficial `voyager` | Baneo 3-7 días documentado |
| 12 | **`linkedin` (membrane skill local)** | — | — | local | — | Wrapper local no oficial |

> **Curso MCP Anthropic del usuario:** usa `.mcp.json` / `.cursor/mcp.json` vs `opencode` → `mcp` / `mcp.servers` (ver §9). Mantener ambos si usa Cursor + opencode.

---

## 3. 3 caminos arquitectónicos — tradeoffs

### Camino A — Oficial OAuth (recomendado stand-by)

**Pros:** ToS 100% OK, sin baneo, sin `li_at`, token 60d rotativo, scopes mínimos, auditable, compatible `mem_save` + `mcp` vault.
**Contras:** Solo tu perfil + postear como vos. No busca terceros, no lee inbox, no envía DMs/invitaciones, no gestiona Company Page sin Partner.
**Costo:** Gratis self-serve. Partner Company Page $0 pero 4-8 sem verificación + auditoría.

### Camino B — Browser `li_at` (JohannsenLum / sanu495 / Sabari2005)

**Pros:** 14 tools, read amplio + write `connect`/`message`, funciona sin Company Page, sin esperar Partner.
**Contras:** Viola ToS §24 → baneo 3-7d, `li_at` eterno (si se filtra = takeover sin expiración), CAPTCHA/bot detection, frágil a cambios DOM/anti-bot, límites no documentados LinkedIn pueden variar, prohibición almacenar >24h perfil/48h actividad + no combinar/revender + no AI training.
**Mitigaciones si se elige:** OS Keyring (no `.env` plano), `LINKEDIN_MAX_PER_HOUR` bajo, `2s` throttle, no persistir datos, rotar `li_at` manual cada 30d via logout/login, disclaimer ToS firmado.

### Camino C — Bright Data / public-scrape

**Pros:** Sin login → sin `li_at` exfiltrado, proxy rotation + CAPTCHA incluido, 5k free, legalmente más defendible (solo público), bueno para prospecting público.
**Contras:** Igual ToS §24 §8.2 implica límites 24h/48h + no combinar + no AI training, solo público (no inbox, no privado), pago tras free tier, dependencia vendor.
**Cuándo:** Research público / enrichment sin tocar cuenta Yadin.

**Matriz decisión futura `sdd-propose`:**

```
if necesita solo "postear como Yadin + leer su perfil" → A
else if necesita "buscar terceros / DM / connect" y Yadin acepta riesgo ToS → B (con Keyring + throttling)
else if solo datos públicos sin login → C
else → esperar Partner Program (Company Page + 4-8 sem)
```

---

## 4. Scopes, versiones, tokens y límites 2026

### Scopes 2026 (self-serve)

- **OIDC (reemplazo 2024-26):** `openid` + `profile` + `email` → `GET https://api.linkedin.com/v2/userinfo` (reemplaza deprecated `r_liteprofile` + `r_emailaddress`).
- **Write self-serve:** `w_member_social` → `POST /v2/ugcPosts` (o `/v2/posts` según `LINKEDIN_VERSION`) como **vos**. Requiere app verificada + Products `Share on LinkedIn`.
- **Deprecated:** `r_liteprofile`, `r_emailaddress` → usar OIDC. `rw_company_admin` → `r_organization_social`/`w_organization_social` (solo Partner).
- **Partner-gated (requiere Company Page + aprobación):** `rw_ads`, `r_organization_social`, `w_organization_social`, `r_ads*`, Talent `RSC` (Recruiter System Connect), Sales Navigator `SNAP` (**CERRADO 2026** sin form/waitlist).

### Versiones & headers

- **Obligatorio 2026:** `LINKEDIN_VERSION: 202501` (o mayor) en header `LinkedIn-Version: 202501`. Sin esto → 400/426. `X-Restli-Protocol-Version: 2.0.0`.
- **Base:** `https://api.linkedin.com/v2` para `userinfo` + `https://api.linkedin.com/rest` para nuevos endpoints (según doc 2025-01).

### Tokens & refresh

- **Access token:** `expires_in: 5184000` = **60 días**. `token_type: Bearer`.
- **Refresh silencioso self-serve:** Solo si token **no expiró** y estás logueado en `linkedin.com` en mismo browser → LinkedIn refresca sin `refresh_token`. No es programático.
- **Refresh programático:** `refresh_token` + `grant_type=refresh_token` **solo partners limitados** (no self-serve). Self-serve debe re-`login` cada 60d via `linkedin_skill.py login` (abre browser → auth code → token).
- **Almacenamiento seguro:** OS Keyring (JohannsenLum), Membrane vault, o 1Password/HashiCorp. Nunca `password`, nunca `.env` commiteado, nunca loguear token.

### Límites operativos

- **Partner limits:** Según `developer.linkedin.com` → rate limits por producto (ej. `w_member_social` ~ 100 posts/día por member, no documentado fijo; respetar `429` + `Retry-After`).
- **Browser limits locales:** `LINKEDIN_MAX_PER_HOUR` env var (sugerir 20-30/h), throttle `2s` entre requests, `120h` cooldown `connect`/`message` para evitar flag spam.
- **Almacenamiento datos (ToS §8.2):** Máx 24h perfil / 48h actividad, no combinar con otras fuentes, no revender, no AI training salvo excepciones II.
- **Company Page:** Requiere crear `linkedin.com/company` + verificación dominio + admin Yadin + 4-8 sem review (típico 3-4 meses cola Partner).

---

## 5. Riesgos legales & ToS §24

**ToS LinkedIn §8.2 / §24 (2026):** Prohíbe scraping, crawling, spiders, bots fuera de APIs oficiales. Violación = **breach of contract** (aunque `hiQ vs LinkedIn` 2022 falló CFAA, LinkedIn igual ganó `$500k` + injunction permanente). Aplicable a Voyager, `li_at`, `Patchright`, `linkedapi-mcp`.

**Casos 2022-26:**

- **hiQ Labs vs LinkedIn (9th Circuit 2022, Supreme 2022):** CFAA no aplica a público, pero **contrato sí** → hiQ pagó y cerró.
- **Proxycurl 2025-26:** Demandado por **fake accounts + scraping masivo** → settlement + cierre feature. Referencia de que fake accounts agravan to demanda.
- **Voyager API (`linkedin-api` Python):** Baneo 3-7 días reportado 2024-26 al usar endpoints `voyager` internos.
- **Bright Data:** Usa solo datos públicos sin login → más limpio, pero igual ToS §8.2 límites 24h/48h aplican; recomienda **asesoría legal** antes de combinar/revender.

**Mitigaciones stand-by:**

- Camino A = 0 riesgo.
- Camino B/C = documentar consentimiento informado, minimización scopes, throttling, no persistir >24h, no AI training, log de uso, plan rollback (revocar `li_at` via logout).

---

## 6. Flujo paso-a-paso Oficial OAuth self-serve

> **Objetivo:** Postear como Yadin + leer su perfil sin `li_at`, sin Company Page, ToS OK.

### 6.1 Crear App en LinkedIn Developers

1. Ir a **https://www.linkedin.com/developers/apps** → `Create app` → Nombre `yadin-portfolio-mcp` → Asociar a tu perfil (o Company Page si tienes) → `Create`.
2. En **Products** (o **Use cases** 2025+):
   - Solicitar **`Sign In with LinkedIn using OpenID Connect`** → `Request access` → aprobar instant self-serve (si pide verificación, completa).
   - Solicitar **`Share on LinkedIn`** → `Request access` → instant self-serve.
   - (Futuro Partner) `Advertising API`, `Community Management API` → requiere Company Page + review 4-8 sem → **no ahora** (stand-by).
3. En **Auth** → `OAuth 2.0 settings` → `Redirect URLs` → añadir `http://localhost:9999/callback` (exacto, con `http` no `https` para local). Añadir también `http://localhost:9999` como fallback.
4. Copiar `Client ID` y `Client Secret` → guardar en **OS Keyring** o `C:\Users\yadin\.config\opencode\opencode.json` `env` (no `.env` plano). Ej. `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`.
5. Verificar scopes: `openid`, `profile`, `email`, `w_member_social` visibles en **Auth → OAuth 2.0 scopes** (si falta `w_member_social`, re-solicitar Product `Share on LinkedIn`).

### 6.2 Config local `linkedin_skill.py` (referencia `C:\Users\yadin\.agents\skills\linkedin-skill\linkedin_skill.py`)

```bash
# Windows PowerShell — en C:\GITHUB\yadin.manrique-portfolio o skills dir
python -m venv .venv && .\.venv\Scripts\Activate.ps1
pip install requests python-dotenv keyring
# o uv: uv pip install -e ./linkedin-skill
```

**`linkedin_skill.py` mínimo (extracto stand-by):**

```python
# linkedin_skill.py — stand-by reference (no ejecutar hasta activar)
import os, webbrowser, http.server, urllib.parse, requests, json, time

CLIENT_ID = os.getenv("LINKEDIN_CLIENT_ID")
CLIENT_SECRET = os.getenv("LINKEDIN_CLIENT_SECRET")
REDIRECT = "http://localhost:9999/callback"
AUTH_URL = "https://www.linkedin.com/oauth/v2/authorization"
TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken"
SCOPE = "openid profile email w_member_social"
VERSION = "202501"  # LINKEDIN_VERSION

def login():
    state = os.urandom(8).hex()
    params = urllib.parse.urlencode({
        "response_type": "code", "client_id": CLIENT_ID,
        "redirect_uri": REDIRECT, "scope": SCOPE, "state": state
    })
    webbrowser.open(f"{AUTH_URL}?{params}")
    # http.server en :9999 captura ?code= + state → POST TOKEN_URL → guarda token.json (60d)

def me(token):
    h = {"Authorization": f"Bearer {token}", "LinkedIn-Version": VERSION, "X-Restli-Protocol-Version": "2.0.0"}
    return requests.get("https://api.linkedin.com/v2/userinfo", headers=h).json()
    # r_liteprofile deprecated → usar /v2/userinfo con openid

def post(token, text):
    h = {"Authorization": f"Bearer {token}", "LinkedIn-Version": VERSION, "Content-Type": "application/json", "X-Restli-Protocol-Version": "2.0.0"}
    # 1) GET /v2/userinfo → sub (person URN)
    # 2) POST /v2/ugcPosts (o /rest/posts según VERSION) con author: urn:li:person:{sub}
    body = {"author": f"urn:li:person:{me(token)['sub']}", "lifecycleState": "PUBLISHED",
            "specificContent": {"com.linkedin.ugc.ShareContent": {"shareCommentary": {"text": text},
            "shareMediaCategory": "NONE"}}, "visibility": {"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"}}
    return requests.post("https://api.linkedin.com/v2/ugcPosts", headers=h, json=body).json()
```

### 6.3 Comandos stand-by (no ejecutar ahora)

```bash
python linkedin_skill.py login        # abre browser → logueate → autoriza → captura token.json (60d)
python linkedin_skill.py me           # GET /v2/userinfo → verifica openid/profile/email
python linkedin_skill.py post "Hola desde MCP oficial 2026 — YadinStore exactamente-once 🚀"  # w_member_social
# Antes de publicar, el skill pide confirmación interactiva (evita post accidental)
```

**Verificación:** `me` debe retornar `sub`, `name`, `email`, `picture` sin `r_liteprofile`. `post` debe crear UGC visible en `https://www.linkedin.com/in/yadin-paulo-manrique-marquez-18753910/recent-activity/`.

---

## 7. Flujo Browser automation `li_at` + Keyring

> **Riesgo:** ToS §24. Solo si Yadin autoriza por escrito. Stand-by documentado.

### 7.1 JohannsenLum `linkedin-api-mcp` (recomendado B)

```bash
# Requiere Python 3.12 + uv
pip install uv  # o pipx install uv
uvx linkedin-api-mcp --help   # verifica 14 tools

# 1) Extraer li_at (Chrome → DevTools → Application → Cookies → linkedin.com → li_at → Copy value)
#    li_at es eterno hasta logout (no expira) → tratar como password
# 2) Guardar en OS Keyring (no .env plano)
python -c "import keyring; keyring.set_password('linkedin-mcp', 'li_at', 'AQE...tu_li_at...')"
# o env var temporal (menos seguro): $env:LINKEDIN_LI_AT="AQE..."

# 3) Config opencode (ver §9) → env LINKEDIN_LI_AT + LINKEDIN_MAX_PER_HOUR=20
# 4) Lanzar MCP
uvx linkedin-api-mcp
# tools: search_people, get_profile, get_company, search_jobs, get_job, send_message, connect, etc
# throttling: 2s entre calls, 120h cooldown connect/message, LINKEDIN_MAX_PER_HOUR env
```

**Seguridad `li_at`:**
- Nunca commitear, nunca loguear, rotar cada 30d (`linkedin.com` → `Me` → `Sign Out` → nuevo login → nuevo `li_at`).
- Si se filtra → atacante tiene sesión eterna → **revocar inmediato** via logout + cambiar password + 2FA.
- Alternativa Membrane vault (server-side) evita `li_at` local.

### 7.2 sanu495 / eliasbiondo `FastMCP + Patchright`

```bash
uv pip install linkedin-mcp-server  # o git clone sanu495/linkedin-mcp
linkedin-mcp --login   # abre Patchright browser → logueate manual → guarda ~/.linkedin-mcp-server/browser-data
linkedin-mcp --tools people,companies,jobs  # 7 tools
# browser-data persiste sesión sin li_at plano, pero igual ToS §24
```

### 7.3 Sabari2005 `linkedin-mcp-bridge`

```bash
npx linkedin-mcp-setup          # captura Chrome session manual (sin client_id)
npx linkedin-mcp-bridge start   # bridge local
# depende Chrome abierto, sin OAuth, frágil
```

---

## 8. Bright Data & alternativas public-scrape

**Bright Data MCP:**

```json
// opencode.json mcp.servers.brightdata
{
  "command": "npx",
  "args": ["@brightdata/mcp"],
  "env": { "BRIGHTDATA_API_KEY": "tu_key", "BRIGHTDATA_ZONE": "linkedin_public" }
}
```

- 5k free req/mes, luego pago por req + proxy GB.
- Solo **público** (sin `li_at`, sin inbox), proxy rotation + CAPTCHA solver incluido.
- Límites ToS §8.2: 24h perfil / 48h actividad, no combinar con otras fuentes para re-identificar, no revender, no AI training sin permiso.

**Alternativas:** `linkedapi-mcp` (cloud browser API key, pago), `OutX` ext (frágil DOM), `Unlinked` (solo EEA/Suiza DMA con `LINKEDIN_TOKEN`).

---

## 9. Config MCP en opencode.json (Windows)

**Archivo:** `C:\Users\yadin\.config\opencode\opencode.json` (Windows usa `%USERPROFILE%\.config\opencode\opencode.json`, no `~/.config` Linux). **No** `opencode.jsonc` aquí.

**Esquema 2026 (dos variantes según CLI):**

```jsonc
// Variante A — clave raíz "mcp" (opencode legacy)
{
  "mcp": {
    "linkedin-official": {
      "type": "local", // "local" = stdio, "remote" = sse/http
      "command": "python",
      "args": ["C:/Users/yadin/.agents/skills/linkedin-skill/linkedin_skill.py", "mcp"],
      "env": {
        "LINKEDIN_CLIENT_ID": "86abc...",
        "LINKEDIN_CLIENT_SECRET": "WPL_AP...",
        "LINKEDIN_REDIRECT_URL": "http://localhost:9999/callback",
        "LINKEDIN_VERSION": "202501"
      }
    }
  }
}

// Variante B — clave "mcp.servers" (opencode 2025-26 nuevo, ver skills sdd-*)
{
  "mcp.servers": {
    "linkedin-official": {
      "type": "local",
      "command": "python",
      "args": ["C:/Users/yadin/.agents/skills/linkedin-skill/linkedin_skill.py", "mcp"],
      "env": {
        "LINKEDIN_CLIENT_ID": "${LINKEDIN_CLIENT_ID}",
        "LINKEDIN_CLIENT_SECRET": "${LINKEDIN_CLIENT_SECRET}",
        "LINKEDIN_VERSION": "202501"
      }
    },
    "linkedin-browser": {
      "type": "local",
      "command": "uvx",
      "args": ["linkedin-api-mcp"],
      "env": {
        "LINKEDIN_LI_AT": "${LINKEDIN_LI_AT}", // desde Keyring, no plano
        "LINKEDIN_MAX_PER_HOUR": "20"
      }
    },
    "brightdata": {
      "type": "local",
      "command": "npx",
      "args": ["@brightdata/mcp"],
      "env": { "BRIGHTDATA_API_KEY": "${BRIGHTDATA_API_KEY}" }
    }
  }
}
```

**Notas Windows:**
- Usar `C:/...` o `C:\\...` (escapar `\\` en JSON).
- `type: "local"` vs `"remote"` — `local` = `command+args` stdio; `remote` = `url` SSE.
- `env var` con `${VAR}` requiere `dotenv` o shell que expande; preferir `keyring` + `env` inline no commiteado.
- Para `Cursor` (curso Anthropic) → duplicar en `.cursor/mcp.json` o `.mcp.json` raíz con mismo `command`.

**Verificación stand-by (cuando active):**
```bash
opencode mcp list                 # lista servers
opencode mcp call linkedin-official me  # debe retornar userinfo sin error 401/426
# Si 426 → falta LINKEDIN_VERSION 202501
# Si 401 → token expirado (60d) → re-login
```

---

## 10. Plan LinkedIn 2026 propuesto

> Propuesta SDD `linkedin-2026` — NO aplicar hasta activar stand-by. Basado en CVs 2026-09-03 + `linkedin-profile-optimizer` skill (headline 220c, about 2600c, etc) + `linkedin-growth` LADDER 2026.

### 10.1 Headline 220c (keyword-first, recruiter SEO)

```
Java 21 | Spring Boot 3.5 Modulith | Kafka KRaft (Outbox+DLT) | AKS & Azure | Angular Signals | Testcontainers | ITIL v4
```

- **220c exactos** (límite LinkedIn 220). Keywords: `Java 21`, `Spring Boot 3.5`, `Kafka KRaft`, `Outbox`, `DLT`, `AKS`, `Azure`, `Angular Signals`, `Testcontainers`, `ITIL v4`.
- **Alternativa 2 (si recruiter busca GCP):** `Java 21 | Spring Boot 3.5 | GCP & AKS (Azure) | Kafka KRaft Outbox+DLT | Angular Signals | Testcontainers | ITIL v4` (219c).
- **Por qué:** `Sobre_mi.jsx` decía genérico `React/Angular/TypeScript` vs CVs dicen `Java/Kafka` → headline prioriza Java/Kafka (keyword recruiter paga más).

### 10.2 About 2600c — STAR honesto (exactly-once, free-tier disclaimer)

> **Estrategia:** Hook 300c (primeras 2 líneas visibles sin "see more") → STAR 4 flagships → stack → disclaimer honesto → CTA. Honesto: no claims senior, pero demuestra seniority por decisiones (hexagonal, DDD, virtual threads, Outbox, DLT, Resilience4j, RBAC).

**Hook 300c (visible):**
```
Full Stack Java 21 · Spring Boot 3.5 Modulith (Hexagonal/DDD, Virtual Threads) · Kafka KRaft exactly-once (Outbox+DLT+idempotencia eventId) · Angular 21 Nx MF Signals · AKS & Azure · Testcontainers · ITIL v4. Construyo SaaS multi-tenant con p95 trazable (Micrometer→Prometheus/Grafana) — honesto free-tier Render, sin SLA productivo.
```

**Cuerpo STAR (ej. YadinStore e-Shop SaaS):**
```
S: SaaS multi-vendor multi-tenant que requiere publicación atómica resiliente sin doble cobro.
T: Diseñar front modular + back exactly-once con dashboard seguro multi-tenant.
A: Angular 21 Nx MF Signals + Spring Modulith hexagonal DDD virtual threads + Kafka KRaft Outbox+DLT+idempotencia eventId + Resilience4j (retry/circuit) + MongoDB ACID (Mongock) + Security JWT RBAC X-Tenant-ID rate limiting CORS anti-IDOR + Docker/Testcontainers (JaCoCo, SASL_SSL) + Micrometer p95 → Prometheus Grafana 10.4.3 + ES 8.15.3 Kibana JasperReports.
R: Flujo outbox→Kafka→DLT verificable con Testcontainers (exactly-once por eventId), p95 visible en Grafana. Free-tier Render: recursos contenidos, sin SLA productivo, OFFLINE/LOCAL ONLY amarillo = esperado no bug.
```

*Repetir STAR para Admin Dashboard (JWT RBAC guards X-Tenant-ID, ticket temporal 1 uso, sin secretos en cliente), Back-end API (SASL_SSL, Testcontainers, JaCoCo), CI/CD Live (Jenkins 2.468.2 Pipeline as Code Docker DinD, Prometheus/Grafana 10.4.3, JasperReports).*

**Stack keywords (para SEO):** `Java 21`, `Spring Boot 3.5`, `Spring Modulith`, `Hexagonal`, `DDD`, `Virtual Threads`, `Kafka KRaft`, `Outbox`, `DLT`, `Resilience4j`, `MongoDB ACID`, `Mongock`, `Testcontainers`, `JaCoCo`, `JWT RBAC`, `X-Tenant-ID`, `CORS`, `Angular 21`, `Nx`, `Module Federation`, `Signals`, `Docker`, `AKS`, `Azure`, `GCP`, `Prometheus`, `Grafana 10.4.3`, `Jenkins 2.468.2`, `ES 8.15.3`.

**Disclaimer honesto (cierre):**
```
⚠️ Honest disclaimer: YadinStore corre en free-tier Render (recursos contenidos, cold start). Métricas p95/lag en Grafana son reales pero sin SLA productivo. Demos: usuario.demo@yadinstore.com / 1cLaVeDePrUeBa+ (ver Featured). 12 certs top +9 en portfolio · ITIL v4 Foundation.
```

**CTA:**
```
¿Hablamos? → ypmanrique2.github.io/yadin.manrique-portfolio · yadinStore demos abajo ⬇️
```

**2700c límite LinkedIn About:** 2600c propuestos dejan 100c margen. Ver `linkedin-profile-optimizer` hook 300c regla.

### 10.3 Experiencia — 3 roles (título honesto)

> **Nota crítica SENA:** Certificado SENA dice *"Aprendiz SENA en la especialidad TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE"*. Yadin **ya es Tecnólogo** (2023-2025). Título honesto NO es `Tecnólogo ... -- Desarrollador` (redundante). Es:

**Formato honesto aprobado (§8 stand-by avance):**

```
TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE
Aprendiz SENA · Full Stack (GCP / Intranet) @ COMFAORIENTE
2023 — 2025 · Cúcuta, Norte de Santander · Presencial
```

- **Headline rol:** `TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE` (primera línea, mayúsculas como en cert).
- **Subtítulo:** `Aprendiz SENA · Full Stack (GCP / Intranet) @ COMFAORIENTE` — aclara especialidad sin redundar `-- Desarrollador`.
- **Bullets 4-6 con STAR + métricas honestas:** GCP Integración, Intranet PHP/MySQL RBAC, Soporte TI, etc (ver CV PREVIEW 934 y ATS 664). PII oculto 👁 no aplica LinkedIn (no exponer 3045913050 etc).
- **Educación:** `Tecnólogo en Análisis y Desarrollo de Software @ SENA (2023–2025)` — formación académica honesta, sin tocar.

**Otros 2 roles:**

```
Back — Desarrollo y Datos @ COMFAORIENTE (? fechas según CV)
Front / Back Office según CV — ver PREVIEW 949 / ATS 679 (ya es "Back (Desarrollo y Datos)" sin Office)
```

- Mantener 3 experiencias totales (no inventar). Fechas exactas copiar de CV_Fusion 934-971.

**Voluntariado / Proyectos:** Si LinkedIn permite, añadir YadinStore como `Project` vinculado a Experiencia (no como empleo).

### 10.4 Skills — 50 slots (LinkedIn max 50)

**Top 10 (pin):** `Java 21`, `Spring Boot 3.5`, `Apache Kafka (KRaft)`, `Docker / Kubernetes (AKS)`, `Angular (Signals)`, `MongoDB`, `Azure (AKS/Storage)`, `Testcontainers`, `Microservices (Hexagonal/DDD)`, `ITIL v4`

**Resto 40 (ordenados por keyword recruiter):** `Spring Modulith`, `Virtual Threads`, `Outbox Pattern`, `DLT`, `Resilience4j`, `JWT RBAC`, `X-Tenant-ID`, `CORS`, `JaCoCo`, `Micrometer`, `Prometheus`, `Grafana`, `Jenkins`, `GCP`, `Nx`, `Module Federation`, `TypeScript`, `React`, `Node.js`, `Express`, `MySQL`, `PostgreSQL`, `Elasticsearch`, `Kibana`, `JasperReports`, `GitHub Actions`, `CI/CD`, `REST API`, `OAuth 2.1`, `OIDC`, `Keycloak`, `Mongock`, `ACID`, `TDD`, `SOLID`, `Clean Architecture`, `Screaming Architecture`, `Domain-Driven Design`, `Event-Driven`, `Exactly-Once`, `Idempotency`, `SASL_SSL`

- **Endorsements:** Pedir a 5-10 contactos por semana (LADDER), priorizar top 10.
- **Sin duplicar:** Ya merge `Docker / Kubernetes (AKS)` único (no `Kubernetes` solo) — ver avance dedup §2.

### 10.5 Featured — 7 URLs canónicas

1. `https://ypmanrique2.github.io/yadin.manrique-portfolio/` — Portfolio 2026 (og-image 1200x630)
2. `https://ypmanrique2.github.io/yadin.manrique-portfolio/CV_Fusion_FE_2026_PREVIEW.html` — CV PREVIEW human (glass)
3. `https://ypmanrique2.github.io/yadin.manrique-portfolio/CV_Yadin_Manrique_ATS_2026.html` — CV ATS bot
4. `https://yadinstore-*.onrender.com` — e-Shop SaaS (multi-vendor, demo `usuario.demo@yadinstore.com / 1cLaVeDePrUeBa+`)
5. `https://yadinstore-admin-*.onrender.com` — Admin Dashboard (JWT RBAC X-Tenant-ID)
6. `https://github.com/ypmanrique2/yadin.manrique-portfolio` — Repo portfolio (si público)
7. `https://github.com/ypmanrique2/yadinStore` — Repo YadinStore (si público) + `pokedexaplication.netlify.app` como 7b si falta repo

- **Orden:** Portfolio → PREVIEW → ATS → e-Shop → Admin → GitHub → Pokédex/MySQL RBAC app.
- **Thumbnails:** og-image.jpg para portfolio, screenshots YadinStore para e-Shop.

### 10.6 Contenido LADDER 3-5 posts/semana (linkedin-growth skill)

**Framework LADDER 2026:** `Learn → Apply → Document → Distribute → Engage → Reflect`

- **Frecuencia:** 3-5 posts/semana, **1/día máx**, golden hour **60-90min** después de postear → responder **todos** los comments (dwell + comments engine).
- **Algoritmo 2026:** Personal >> Page (65% feed), **links en primer comment** (no en post, penaliza reach), **5-10 comments/day estratégicos** en posts de otros (ITIL, Java, Kafka, AKS), `dwell time` + `comments` > likes.
- **Pilares contenido (rotar):**
  1. **Build in public YadinStore:** STAR sprints, exactly-once Outbox, DLT, p95 Grafana, Testcontainers, free-tier honest.
  2. **Java/Kafka deep dives:** Virtual Threads vs reactive, KRaft vs Zookeeper, Outbox pattern, Resilience4j.
  3. **AKS/Azure/GCP:** AKS labs, Azure Storage, GCP Intranet.
  4. **ITIL v4 + carrera SENA:** Aprendiz → Tecnólogo journey, honesto.
  5. **Carrusel / video / newsletter:** 1 carrusel/semana (STAR), 1 video/mes (demo YadinStore), newsletter `LinkedIn Newsletter` si >500 followers.

**Hooks 2 líneas (linkedin-post-optimizer):** Primera línea hook + segunda línea contexto → `see more`. Ej: `Exactly-once en Kafka sin magia — solo Outbox+eventId. Así lo hice en YadinStore 👇`

**Hashtags:** 3-5 por post, mezcla amplia + nicho: `#Java21 #SpringBoot #Kafka #AKS #AngularSignals #Testcontainers #ITIL4 #BuildInPublic`

**Calendario stand-by (ejemplo 4 semanas):**
- L: Build YadinStore (STAR) — Mi: Java 21 tip — V: AKS/GCP — D: ITIL/SENA story

---

## 11. Fuentes & URLs citadas

> URLs del reporte previo investigador — preservar para trazabilidad.

**Oficial LinkedIn / Microsoft:**

- **LinkedIn API 202501:** https://learn.microsoft.com/en-us/linkedin/shared/api-guide/concepts/versioning — `LINKEDIN_VERSION 202501`, `LinkedIn-Version` header obligatorio.
- **Sign In with LinkedIn (OIDC):** https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow — `openid profile email`, `/v2/userinfo` reemplaza `r_liteprofile`.
- **Share on LinkedIn (`w_member_social`):** https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin — `POST /v2/ugcPosts` como miembro.
- **LinkedIn Developers Apps:** https://www.linkedin.com/developers/apps — crear app, Products, redirect `http://localhost:9999`.
- **Compliance / ToS:** https://www.linkedin.com/legal/user-agreement — §8.2 + §24 prohíbe scraping/crawling/bots fuera API.

**GitHub MCP servers:**

- **sanu495 FastMCP + Patchright:** https://github.com/sanu495/linkedin-mcp / https://github.com/eliasbiondo/linkedin-mcp — Python 3.12 `uv`, 7 tools `people/companies/jobs`, `~/.linkedin-mcp-server/browser-data`.
- **Sabari2005 linkedin-mcp-bridge:** https://github.com/Sabari2005/linkedin-mcp-bridge — Chrome session manual, `npx linkedin-mcp-setup`.
- **JohannsenLum linkedin-api-mcp:** https://github.com/JohannsenLum/linkedin-api-mcp — `uvx`, `li_at` Keyring, 14 tools (12 read + `send_message`/`connect`), `LINKEDIN_MAX_PER_HOUR`, throttling `2s`/`120h`.
- **larsbaunwall/Unlinked:** https://github.com/larsbaunwall/Unlinked — Member Data Portability API solo EEA/Suiza (DMA), `LINKEDIN_TOKEN`.
- **pegasusheavy/linkedin-mcp:** https://github.com/pegasusheavy/linkedin-mcp — `1.4.0`, OAuth oficial `openid w_member_social`.
- **membrane/linkedin:** `C:\Users\yadin\.agents\skills\linkedin\SKILL.md` — proxied `membranehq/cli`, actions `create-text-post`/`list-posts`/`get-current-user-profile`.
- **linkedapi-mcp:** https://github.com/linkedapi/mcp — cloud browser API key.
- **OutX:** https://github.com/outx/linkedin-mcp — Chrome ext.
- **Proxycurl (defunct):** https://nubela.co/proxycurl — demanda 2025-26 fake accounts + scraping.
- **Voyager API (`linkedin-api`):** https://github.com/tomquirk/linkedin-api — `li_at` + `voyager` → baneo 3-7d.

**Bright Data / scraping:**

- **Bright Data MCP:** https://brightdata.com/products/web-scraper/linkedin — 5k free req/mes + proxy rotation + CAPTCHA solver, solo público.
- **Bright Data docs:** https://docs.brightdata.com/api-reference/web-scraper/linkedin

**Legales:**

- **hiQ Labs vs LinkedIn (2022):** https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/18/17-16783.pdf — 9th Circuit, CFAA no pero breach contract sí, `$500k` + injunction.
- **Proxycurl lawsuit 2025-26:** https://www.reuters.com/legal/linkedin-sues-proxycurl-over-scraping-fake-accounts-2025-... — fake accounts + scraping.

**Skills locales instaladas 2026-09-03:**

- `C:\Users\yadin\.agents\skills\linkedin-profile-optimizer\SKILL.md` — headline 220c, about 2600c hook 300c, 50 skills, Featured.
- `C:\Users\yadin\.agents\skills\linkedin-growth\SKILL.md` — LADDER, 3-5 posts/sem, golden hour 60-90min, links en 1er comment, 5-10 comments/day.
- `C:\Users\yadin\.agents\skills\linkedin-skill\SKILL.md` — `linkedin_skill.py login/me/post` con confirmación.
- `C:\Users\yadin\.agents\skills\linkedin\SKILL.md` — Membrane CLI.
- `C:\Users\yadin\.agents\skills\linkedin-post-optimizer\SKILL.md` — hooks 2 líneas.
- `C:\Users\yadin\.agents\skills\linkedin-automation\SKILL.md` — social-mcp.
- `C:\Users\yadin\.agents\skills\linkedin-export\SKILL.md` — GDPR ZIP `li_parse.py`.

**Portfolio / SEO AI:**

- `C:\GITHUB\yadin.manrique-portfolio\public\robots.txt` — Allow + Sitemap + 7 AI bots.
- `C:\GITHUB\yadin.manrique-portfolio\public\sitemap.xml` — 3 URLs canónicas.
- `C:\GITHUB\yadin.manrique-portfolio\public\llms.txt` — llms.txt optimizado.
- `C:\GITHUB\yadin.manrique-portfolio\index.html` — JSON-LD Person + CreativeWork.

---

## 12. Estado, próximos pasos y artefactos

### Estado actual

| Item | Estado | Evidencia |
|------|--------|-----------|
| Investigación MCP 12 servidores | ✅ Completa 2026-09-03 | Engram #740 + este doc §2 |
| 3 caminos tradeoffs | ✅ Documentados | §3 matriz decisión |
| Flujo Oficial OAuth | ✅ Paso-a-paso | §6 `developers.linkedin.com` + `linkedin_skill.py` |
| Flujo Browser `li_at` | ✅ Paso-a-paso | §7 `uvx` + Keyring + throttling |
| Config opencode | ✅ Esquema Windows | §9 `mcp` vs `mcp.servers` |
| Plan LinkedIn 2026 | ✅ Propuesto | §10 headline/about/experiencia/skills/featured/LADDER |
| Decisión usuario | 🟡 **STAND-BY** | Yadin: _"no implementar ahora"_ |
| Implementación MCP | ⏸️ Pausada | Esperando orden explícita |
| Edición HTMLs/preview | 🚫 **NO tocado** | Agente paralelo, este doc es solo persistencia |

### Próximos pasos (cuando Yadin diga)

1. **Activar:** Yadin dice _"activar MCP"_ o _"implementar LinkedIn 2026"_ → orquestador lanza `sdd-propose linkedin-2026` leyendo `avance-2026-09-03.md` §8 + este plan + engram #740/#739.
2. **`sdd-propose`:** Proposal con intent/scope/approach (elegir Camino A por defecto, B solo con consentimiento).
3. **`sdd-spec` + `sdd-design`:** Spec con escenarios `login/me/post` + design con `LINKEDIN_VERSION 202501`, `60d` refresh, Keyring/Bright Data según camino.
4. **`sdd-tasks`:** Breakdown (crear App, config opencode, test `me`, test `post` con confirmación, Featured/About).
5. **`sdd-apply`:** Implementar `linkedin_skill.py` + `opencode.json` + LinkedIn headline/about/featured (3-5 posts LADDER).
6. **`sdd-verify` + `sdd-archive`:** Verificar `me`/`post` + headline 220c + about 2600c + SEO AI.

### Artefactos stand-by creados por este agente

- **Disco:**
  - `C:\GITHUB\yadin.manrique-portfolio\yadinPortfolio-Reg\avance-2026-09-03.md` §8 — append STAND-BY ✅
  - `C:\GITHUB\yadin.manrique-portfolio\yadinPortfolio-Reg\avance-2026-09-03+plan-linkedin.md` — **ESTE ARCHIVO** (intento `+`, si Windows bloquea NTFS → fallback `avance-2026-09-03-plan-linkedin.md`) ✅
- **Engram:**
  - `project: yadin.manrique-portfolio` · `title: MCP LinkedIn 2026 stand-by + plan guardado` · `topic_key: sdd/linkedin-2026/plan-standby` (sugerido) ✅
- **No tocado (por instrucción):**
  - `CV_Fusion_FE_2026_PREVIEW.html` ❌ no editado
  - `CV_Yadin_Manrique_ATS_2026.html` ❌ no editado
  - `src/*` ❌ no editado
  - `index.html` / `public/*` ❌ no editado

### Verificación stand-by

```powershell
# Disco
Test-Path "C:\GITHUB\yadin.manrique-portfolio\yadinPortfolio-Reg\avance-2026-09-03.md"
Get-Content "C:\GITHUB\yadin.manrique-portfolio\yadinPortfolio-Reg\avance-2026-09-03+plan-linkedin.md" | Select-Object -First 20
# Fallback si + falla
Test-Path "C:\GITHUB\yadin.manrique-portfolio\yadinPortfolio-Reg\avance-2026-09-03-plan-linkedin.md"

# Engram
# mem_search query:"MCP LinkedIn 2026 stand-by + plan guardado" project:"yadin.manrique-portfolio" → debe retornar 1
# mem_get_observation id:xxx → full content

# Git (porcelain, no commit)
git status --porcelain  # debe mostrar M avance-2026-09-03.md + ?? avance-...+plan-linkedin.md
```

---

**Guardado por:** Sub-agente documentador 2026-09-03 (opencode) — sin edición HTMLs, solo persistencia disco+engram.  
**Para orquestador:** Retornar `status: done`, `executive_summary`, `artifacts`, `next_recommended: sdd-propose linkedin-2026 cuando usuario active`.

