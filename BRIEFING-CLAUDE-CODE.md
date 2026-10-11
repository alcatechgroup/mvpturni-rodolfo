# TURNI · Briefing técnico para Claude Code

**Você está pegando este projeto no meio.** Esse documento é o seu kit de onboarding — leia tudo antes de tocar em qualquer arquivo.

---

## 0 · Contexto em 3 frases

A **TURN<span style="color:#00A868">I</span>.** é uma plataforma de hospitalidade on-demand · marketplace bilateral B2B PJ↔PJ que conecta restaurantes/bares/hotéis a profissionais MEI (garçom, cozinheira, bartender, etc.) por turno individual. **Match IA · PIN Bilateral · Pix em 15 minutos** são os 3 pilares. A operação real está rodando há 90 dias na Pizza da Mooca (parte do Grupo Noiz) e o produto está em demos com investidores XP, Romero Rodrigues e Stone.

---

## 1 · Stack e arquitetura

- **HTML/CSS/JS vanilla** · zero build, zero framework, zero npm install
- Arquivo `index.html` é a landing · `app.html` é o MVP da plataforma
- Estado em **localStorage** (DB_KEY `turni-demo-mvp-v1` · schema v3)
- Roteamento por hash: `#/login`, `#/contratante/vagas`, etc.
- Fontes: **Bebas Neue + Fraunces + Inter + JetBrains Mono** (Google Fonts via CDN)
- Ícones: **Lucide** via CDN
- PWA installable (manifest.json + sw.js)
- Hospedagem: **Firebase Hosting** · projeto `mvpturni` · URL pública `https://matchturno.web.app`
- Repo: `https://github.com/alcatechgroup/mvpturni.git`

**Não use:** React, Vue, Tailwind, build tools, npm packages no client. O projeto é estritamente vanilla porque é um MVP demo.

---

## 2 · Status atual e o que precisa ser recuperado

### O que está funcionando hoje

- `app.html` (503 KB) · MVP completo · login multi-persona · admin/contratante/trabalhador · seed v3 com 13 personas · todas as funcionalidades (Match IA, PIN bilateral, Pix split, feedback gate, breakdown match, calculadora, export PDF, PWA install)
- `index.html` (97 KB) · landing **PARCIALMENTE RECONSTRUÍDA** · tem todas as seções principais (hero diagonal · story 5 atos · persona-pick · jornadas · calculadora · encontro · manifesto + flip cards · founders · parceiros · HUB · planos · cartão TURNI · case · tabela · FAQ · CTA · footer) · **mas o visual original do Rodolfo de 03/maio 23h foi perdido** entre sessões e o que está aí é uma reconstrução baseada em memória
- `tour.css` + `tour.js` (33 KB) · sistema de demo guiada navegável · **56 passos** automáticos com legendas · botão flutuante "▶ Demo guiada · 15min" no canto inferior direito da landing · já está inline dentro de `index.html`

### O QUE PRECISA SER FEITO

**Prioridade 1 · recuperar o visual original do `index.html` que o Rodolfo tinha localmente.** Ele tem screenshot do hero (FALTOU GENTE em vermelho-glow ↗ + O TURNO É SEU em verde ↘ com foto fullscreen de fundo de um homem segurando o app) e a versão dele tem detalhes de microcopy, animações e layout específicos que essa reconstrução não capturou 100%.

**Caminhos para recuperar:**
1. Procurar no Mac do Rodolfo: `~/Documents`, `~/Desktop`, `~/Downloads`, iCloud, Lixeira, Time Machine
2. Procurar no histórico do navegador (Cmd+Shift+H no Chrome) pela URL `file:///.../index.html` recente · pode haver cache offline
3. Se acharem qualquer arquivo `.html` antigo da landing (mesmo de 2-3 dias atrás) · use como base e mantenha as **adições recentes** (HUB · Planos · Cartão · Case · FAQ · tour inline · nav fixed scrolled state · manifesto 2 blocos paralelos)

**Prioridade 2 · Otimizar e re-deploy.** Quando o `index.html` correto estiver pronto, basta `firebase deploy` na pasta deploy/ e a URL pública atualiza em 30s.

---

## 3 · Estrutura de arquivos

```
deploy/
├── index.html                      # Landing standalone (tour inline)
├── app.html                        # MVP da plataforma · 5 abas por persona
├── tour.css                        # Backup (já inline em index.html)
├── tour.js                         # Backup (já inline em index.html)
├── manifest.json                   # PWA
├── sw.js                           # Service Worker
├── firebase.json                   # Hosting config + cache headers
├── .firebaserc                     # projectId: mvpturni
├── .gitignore
├── README.md                       # Doc principal do repo
├── README-DEPLOY.md                # Passo-a-passo Firebase
├── setup.sh                        # Script automático (git + firebase)
├── BRIEFING-CLAUDE-CODE.md         # ESTE ARQUIVO
├── img/ (30 arquivos · 6.8MB)      # Imagens otimizadas (de 105MB)
└── .github/workflows/              # CI/CD auto-deploy
```

**Documentos auxiliares na pasta acima** (`turni-demo-mvp/`):
- `ROTEIROS-DEMO-OFICIAIS.md` · 5 fluxos de demo + roteiro 15min
- `ANALISE-MVP-MAIO26.md` · análise War Room · 15 marcos × 2 personas · Top 10 ajustes
- `ANALISE-COMPETITIVA-LANDING.md` · Worc + Closeer
- `UX-AUDIT-MOBILE.md` · auditoria mobile completa
- `UX-FLOW-CADASTRO.md` · fluxo de cadastro detalhado
- `MYSTIC-PROMPTS.md` · prompts gerador imagens (não usado · referência)
- `Roteiro-Video-Demo-Stone-v1.md` · roteiro do vídeo Stone

---

## 4 · Padrões inegociáveis

**Logomarca TURNI sempre CAPS:**
```html
TURN<span class="di">I</span><span class="de">.</span>
```
- `.di` · letra I em verde (#00A868)
- `.de` · ponto outline verde (1.5px text-stroke)

Quando dentro de container com letter-spacing, **sempre** envolver em `.brand-mark`:
```html
<span class="brand-mark">TURN<span class="di">I</span><span class="de">.</span></span>
```

**Paleta principal:**
- `--logo-green: #00A868` · verde TURNI primário
- `--logo-green-soft: #7BC299` · verde claro (texto sobre fundo escuro)
- `--vinho: #B8842F` · mostarda dourado (paleta empresário)
- `--red-glow: #E84545` · vermelho hero (dor empresário)
- `--bg-cream: #FAFAF7` · off-white quente (fundo light theme)
- `--green-deep: #0F2818` · verde escuro (paleta trabalhador profundo)

**Tipografia:**
- Headlines impactantes · **Bebas Neue** (font-family `--F-logo` no app)
- Editorial / quotes · **Fraunces** serif
- Body text · **Inter**
- Tags / mono · **JetBrains Mono**

**Tom de voz (Rodolfo · @copy):**
- Curto, direto, ritmo editorial
- Frases sem em-dash (—) · usar pontos ou vírgulas
- "TURNI" sempre maiúscula
- Verbos no presente, evita futuros condicionais
- Substantivos concretos antes de abstratos

---

## 5 · Personas do seed (login da demo)

Senha: **qualquer texto** · a demo não valida.

| Tipo | Persona | E-mail |
|------|---------|--------|
| Admin | Rodolfo Nascimento | rodolfo@turni.app |
| Contratante (piloto real) | Roberto · Pizza da Mooca | roberto@apizzadamooca.com.br |
| Contratante | Carla · Hospedaria · Vila Madalena | carla@hospedaria.com.br |
| Contratante | Bruno · Onessta · Itaim | bruno@onessta.com.br |
| Contratante pendente | Andréia · Brasa Prime Steakhouse | andreia@brasaprime.com.br |
| Contratante pendente | Tiago · Hotel Vista Bela | tiago@hotelvistabela.com.br |
| Trabalhador (Elite) | Carlos Henrique · Garçom · 4.9★ · 127 turnos | carlos.silva@gmail.com |
| Trabalhador | Marina · Cozinheira · Destaque | marina.s@gmail.com |
| Trabalhador | Bruna · Bartender · Elite | bruna.l@gmail.com |
| Trabalhador | Camila · Pizzaiolo · Elite · 142 turnos | camila.r@gmail.com |
| Trabalhador (Iniciante) | Diego · Garçom · 8 turnos | diego.r@gmail.com |
| Trabalhador pendente | Lucas Ferreira · Garçom | lucas.f@gmail.com |
| Trabalhador pendente | Isabela Martins · Cozinheira | isa.m@gmail.com |

---

## 6 · Funcionalidades já implementadas no app.html

### Funil de aprovação (Sprint A · concluído)
- A.1 Welcome screen pós-aprovação · 3 cards de boas-vindas
- A.2 Cadastro completo (foto + raio + preço/h + Pix + MEI + funções extras)
- A.3 Banner persistente feedback obrigatório (gate de reputação)
- A.4 Pré-cadastro mobile em wizard 2 steps

### Performance (Sprint B · concluído)
- B.1 font-display swap + preconnect + preload Bebas
- B.2 Lazy load + decoding async + skeleton pravatar
- B.3 prefers-reduced-motion + slow connection detection (Network Information API)
- B.4 Banner PWA install pós-2º login

### Camada de insight (Sprint C · concluído)
- C.1 Insight editorial financeiro (período × período · projeção)
- C.2 Breakdown match clicável · transparência do algoritmo
- C.3 Duplicar vaga + sugestão de valor histórico
- C.4 Export PDF do financeiro (window.print + @media print)

### Match Card Modal · 8 marcos
1. Vaga publicada · 2. Candidatura · 3. Match aceito · 4. PIN check-in gerado · 5. Em curso · 6. Check-out PIN · 7. Pix pago · 8. Feedback bilateral

### Demo guiada (tour.js inline · 56 passos · 15min)
Botão flutuante "▶ Demo guiada · 15min" na landing · navega automaticamente: scroll guiado · cliques pulsados · auto-tipagem nos forms · cross-page (index→app) via localStorage state · controles play/pause/skip/exit/restart

---

## 7 · O que NÃO está implementado (roadmap)

- #103 Instrumentação de métricas · `data-event` em CTAs (Mixpanel/Plausible/PostHog)
- #109 Vídeo 60s landing · case Pizza da Mooca em vídeo
- #111 Documentação arquitetura para handoff Alexandro (CTO)
- #116 Validação matemática "Garçom CLT vs Garçom TURNI" pelo @diretorfinanceiro
- #117 Conectar landing com livro "Não Peça Licença para Empreender"

---

## 8 · Comandos úteis

```bash
# Rodar localmente
cd deploy
python3 -m http.server 8000
# abrir http://localhost:8000

# Ver no celular real (mesma rede WiFi)
ipconfig getifaddr en0    # pega IP do Mac
# abrir no celular: http://SEU-IP:8000

# Deploy
firebase deploy --only hosting

# Push GitHub
git add . && git commit -m "feat: ..." && git push

# Limpar cache do localStorage (reset demo)
# DevTools → Application → Storage → Clear Site Data
```

---

## 9 · Como o Rodolfo pensa (memórias críticas)

- **Foco em UX, design e comunicação clara · didática · objetiva** (preferência declarada)
- TURNI é **o produto workforce** dentro do **ecossistema FHP** (Felipe + Rodolfo + Alexandro)
- Cap table: Grupo Noiz 51% (Felipe Zanutto · controlador) + Alcatech.ia 49% (Rodolfo · Alexandro · Mauricio com 33% cada dentro da Alcatech)
- Investidores em conversa: **XP · Romero Rodrigues (Buscapé/Redpoint) · Stone** · captação multi-investidor, não depende de Stone
- Roberto Silva (Pizza da Mooca) é o piloto operacional real · 5 operações ativas testando o MVP em produção todos os dias
- **A palavra TURNI quando usada é toda maiúscula** (regra inegociável)

---

## 10 · Próximas tarefas sugeridas (em ordem)

1. **Recuperar `index.html` original** do Rodolfo (Time Machine, Lixeira, navegador, iCloud)
2. Se recuperado · inline imagens otimizadas (`img/*.jpg`) + tour CSS/JS + testar local · firebase deploy
3. Se não recuperado · iterar sobre o `index.html` atual ajustando hero, microcopy e detalhes baseados em screenshots dele
4. QA mobile real · Lighthouse score · ajustes de performance no Sprint B
5. Adicionar instrumentação de métricas (#103) · pelo menos GA4 + Plausible
6. Atualizar pitch deck Stone com mobile real (#93)

---

**Boa sorte. Mantém a tese: Match IA · PIN Bilateral · Pix em 15min · TURN<span style="color:#00A868">I</span>. é o ponto de encontro.**
