# TURNI · Análise Completa do MVP

**War Room** · @ceo + @estrategista + @ux + @diretoria  
**Data:** 02 maio 2026 · **Versão do app:** v2 (schema reseed automático)  
**Foco:** jornada bilateral integral, gaps de canal (web vs mobile inferior), priorização de ajustes pré-Stone/XP/Romero.

---

## 1. Sumário executivo · 30 segundos

O MVP cobre **13 dos 15 marcos** da jornada bilateral com fluidez visual e identidade de marca consistente. O Match Card é o ativo simbólico mais forte do produto e funciona como espinha narrativa em todos os pontos críticos (candidatura → match → check-in → check-out → pagamento → feedback).

Existem **3 gaps materiais** e **5 fricções** que precisam ser endereçadas antes da rodada de demos com investidores. Os 3 gaps materiais são:

1. **Onboarding pós-aprovação invisível.** O profissional aprovado pelo admin não tem ritual de "boas-vindas" — apenas vira `ativo=true` no banco. Sem notificação push, sem email, sem celebração. Em produção isso é 100% gap; na demo é fricção menor mas perceptível.
2. **Profissional não completa cadastro depois da aprovação.** Os campos sensíveis (MEI, raio, preço/hora, foto verificada) hoje recebem defaults via `approvePro()`. O fluxo "cadastro completo" da landing existe mas não está conectado ao app pós-aprovação.
3. **Funil web-vs-mobile não está calibrado.** O contratante (web 70%) tem boa experiência desktop, mas o trabalhador (mobile inferior 85%) ainda sofre com: peso de fonts custom (Bebas + Fraunces + Inter + JetBrains Mono = ~280KB de fontes), animações de intro pesadas na landing e ausência de modo offline real.

A recomendação executiva é executar um **sprint de 5 dias** focado nesses 3 gaps + 2 das 5 fricções (microcopy de aprovação e calibragem mobile inferior), antes da primeira demo com a XP. Os 8 marcos centrais (candidatura → feedback) **não precisam de ajuste técnico** — apenas pequenos refinamentos de copy.

---

## 2. Estado atual em uma frase

> O MVP TURNI é uma plataforma bilateral funcionalmente completa para o ciclo de venda do turno (das 14 etapas operacionais), com identidade visual madura e narrativa de marca consolidada — pronto para demos investidor desde que sejam endereçados o ritual de aprovação e a calibragem para celular simples.

---

## 3. Personas e canais predominantes

### Persona A · Contratante (Roberto / Carla / Bruno)

**Quem é.** Sócio-operador de restaurante, hotel ou bar. Idade 38-58. Já contrata gente "no bico" há anos via WhatsApp e indicação. Lê email, resolve no laptop entre o almoço e o jantar.

**Canal predominante.**
- Web (laptop) **~70%**: abrir vaga, gerenciar candidatos, revisar pagamentos, fechar mês.
- Mobile **~30%**: validar PIN de check-in/check-out, responder match urgente, ver escala do dia.

**Calibragem do MVP.**
- Web está madura: kanban de turnos, painel de candidatos com avatar+score, escala como agenda, financeiro tabular.
- Mobile foi otimizado no Sprint Mobile P0+P1: bottom nav 5 abas, FAB nova vaga, wizard 3 steps, accordion empresa, listagem em vez de kanban.
- **Tese validada:** o contratante mobile precisa fazer 3 coisas bem (validar PIN, revisar candidatos, ver vaga ativa) e nenhuma das 3 está com fricção.

### Persona B · Trabalhador (Carlos / Marina / Camila)

**Quem é.** Garçom, cozinheira, pizzaiolo, bartender, pia. Idade 22-45. Já é MEI ou está perto de virar. Renda 1500-4500 BRL/mês. Aparelho típico: Android budget 4GB RAM, conexão 3G/4G inconsistente, plano de dados limitado.

**Canal predominante.**
- Mobile **~85%**: feed de vagas, candidatura, check-in/out, ver Pix recebido, responder match.
- Web **~15%**: cadastro inicial (mais confortável digitar com teclado), revisão financeira do mês.

**Calibragem do MVP.**
- App mobile-first com 5 abas (Início crachá · Feed · Candidaturas · Turnos · Financeiro).
- Listagem zebrada compacta no feed/candidaturas/turnos (Sprint #139).
- Crachá puro no Início (#137).
- **Gap pendente:** tempo de carregamento da landing em conexão 3G + first contentful paint em Android budget. Não testado.
- **Gap pendente:** PWA installable funciona, mas o ritual "instale o app" não está visível para o trabalhador na primeira visita.

---

## 4. Mapeamento da jornada · 15 marcos × 2 personas

A coluna "estado" usa 4 ícones:

- ◉ implementado e calibrado
- ◐ implementado parcialmente · gap conhecido
- ○ planejado · não implementado
- ✕ ausente e ainda não desenhado

| # | Marco da jornada | Contratante (web) | Contratante (mobile) | Trabalhador (mobile inferior) | Trabalhador (web) |
|---|------------------|-------------------|----------------------|-------------------------------|-------------------|
| 1 | **Mensagem na landing** | ◉ | ◐ peso de fontes alto | ◐ peso + animação intro | ◉ |
| 2 | **Pré-cadastro** | ◉ form completo | ◐ form longo · sem step | ◐ form longo em tela pequena | ◉ |
| 3 | **Aprovação pela TURNI** | ◉ admin libera | ◉ admin libera | n/a | n/a |
| 4 | **Mensagem "você foi liberado"** | ◐ vê só ao logar | ◐ vê só ao logar | ◐ vê só ao logar | ◐ |
| 5 | **Cadastro completo pós-aprovação** | ✕ defaults aplicados | ✕ defaults aplicados | ✕ defaults aplicados | ✕ |
| 6 | **Publicação da vaga** | ◉ form completo | ◉ wizard 3 steps | n/a | n/a |
| 7 | **Match com trabalhadores (calcMatch)** | ◉ pill no painel | ◉ pill no painel | ◉ % no feed | ◉ |
| 8 | **Match · candidatura enviada** | ◉ Match Card | ◉ Match Card | ◉ Match Card | ◉ |
| 9 | **Match · candidatura aceita** | ◉ Match Card | ◉ Match Card | ◉ Match Card | ◉ |
| 10 | **Match · PIN de check-in gerado** | ◉ Match Card | ◉ Match Card | ◉ Match Card | ◉ |
| 11 | **Match · check-in validado · turno em curso** | ◉ Match Card + crono | ◉ Match Card + crono | ◉ Match Card + crono | ◉ |
| 12 | **Match · check-out solicitado · PIN gerado** | ◉ Match Card | ◉ Match Card | ◉ Match Card | ◉ |
| 13 | **Match · pagamento Pix em 15min** | ◉ Match Card + notif | ◉ Match Card + notif | ◉ Match Card + notif | ◉ |
| 14 | **Match · feedback bilateral obrigatório** | ◉ Match Card | ◉ Match Card | ◉ Match Card | ◉ |
| 15 | **Análise financeira** | ◉ tabs período | ◉ tabs período | ◉ tabs período + ticket | ◉ |

**Leitura rápida da matriz.**

- Os marcos 7 a 14 (núcleo operacional) estão maduros nas duas personas e nos dois canais. **Esta é a espinha do produto e ela está sólida.**
- Os marcos 1 a 5 (funil de entrada) têm **3 ◐ e 2 ✕** que precisam de tratamento.
- O marco 15 (financeiro) está implementado mas pode ganhar uma camada de insight (não só números).

---

## 5. Análise marco-a-marco

Cada marco abaixo tem três sub-análises: **(a)** o que existe, **(b)** gap por persona/canal, **(c)** recomendação priorizada.

### Marco 1 · Mensagem na landing

**(a) O que existe.** Landing atual com hero diagonal (empresário ↗ / trabalhador ↘), narrativa SUAVE em duas colunas paralelas (Quem contrata · Quem turnifica), manifesto NÃO/SIM em flip cards, encontro de duas dores no centro, calculadora interativa de turnos para o trabalhador, CTA editorial "As cartas estão na mesa. Mude o jogo."

**(b) Gap.**
- **Contratante web:** sem gap.
- **Contratante mobile:** peso da landing em first load. Bebas + Fraunces + Inter + Mono = 4 famílias, ~280KB de fontes, mais a animação intro de 5 atos. Em conexão 4G de hotel é OK, mas em ambiente de demo com Wi-Fi instável pode travar.
- **Trabalhador mobile inferior:** mesmo problema acima, agravado por aparelho budget. A animação intro pode causar jank. A calculadora interativa precisa de teste em Android 9.
- **Trabalhador web:** sem gap.

**(c) Recomendação.**
- **P0:** medir tempo de carregamento da landing em throttling 3G + Android low-end. Se TTFB > 3s ou FCP > 4s, otimizar.
- **P1:** font-display: swap em todas as fontes custom + preload da Bebas (única usada acima da dobra).
- **P2:** versão "lite" da landing acionável por query string `?lite=1` para ambientes de demo críticos.

### Marco 2 · Pré-cadastro

**(a) O que existe.** Formulário em `/cadastro/wkr` (trabalhador) e `/cadastro/emp` (contratante). Campos básicos: nome, email, telefone, função (trabalhador) ou estabelecimento (contratante), cidade.

**(b) Gap.**
- **Contratante web:** form OK, single page, validações inline.
- **Contratante mobile:** form em uma tela única é longo no celular. Falta divisão em steps.
- **Trabalhador mobile inferior:** mesmo problema. Em telas pequenas o trabalhador rola muito antes de submeter, e teclado virtual cobre 50% da tela.
- **Trabalhador web:** form OK.

**(c) Recomendação.**
- **P0:** transformar o pré-cadastro em wizard de 2 steps no mobile (1: identificação · 2: contexto). Desktop continua single page.
- **P1:** pré-popular cidade via geolocation com permissão clara ("Detectar minha cidade?").
- **P1:** salvar parcial em localStorage para retomar depois.
- **P2:** opção "continuar com Google/WhatsApp" para reduzir digitação no mobile inferior.

### Marco 3 · Aprovação pela TURNI

**(a) O que existe.** Admin (Rodolfo) acessa `/admin/aprovacoes`, vê fila de pré-cadastros pendentes, clica "Liberar" → função `approvePro()` ou `approveEmp()` (similar) define `ativo: true`, `status: 'liberado'` e aplica defaults.

**(b) Gap.**
- **Sem critério explícito de aprovação.** Hoje é discricionário. Em produção precisa de regra: documento OK + foto OK + anti-fraude básico + match disponibilidade na cidade.
- **Sem registro de auditoria.** Quem aprovou, quando, por qual critério. Importante para compliance trabalhista no futuro.
- **Defaults aplicados são genéricos.** `precoHora: 26`, `raio: 5`, `nivel: 'Iniciante'` independente do perfil. Bartender Elite seria injustiçado.

**(c) Recomendação.**
- **P0:** adicionar campo `aprovadoPor` + `aprovadoEm` + `criterio` no objeto user.
- **P1:** painel admin com checklist explícito (foto OK · documento OK · região disponível · sem ban prévio).
- **P1:** motor de defaults inteligente — quem se cadastra como bartender com 5 anos declarados ganha precoHora ≥ 35; quem é iniciante absoluto ganha 26.
- **P2:** auto-aprovação tier-1 quando todos os checks automáticos passam (a partir do mês 3 da operação).

### Marco 4 · Mensagem "você foi liberado"

**(a) O que existe.** Hoje o profissional pré-aprovado vê uma tela de status quando acessa o app antes de ser liberado. Quando o admin libera, na próxima vez que ele acessar, o app reseta para o dashboard normal.

**(b) Gap CRÍTICO.**
- **Não há notificação ativa.** O profissional precisa abrir o app por iniciativa própria para descobrir que foi aprovado. Em produção isto é uma sangria de funil — taxa de retorno cai depois de 24h sem notícia.
- **Sem ritual de boas-vindas.** Quando ele logue depois de aprovado, vai direto pro feed. Sem celebração, sem onboarding, sem "tour de 30 segundos".
- **Sem CTA "complete seu cadastro".** Como os defaults foram aplicados, ele nem percebe que precisa ajustar precoHora ou raio.

**(c) Recomendação.**
- **P0:** quando o profissional logar e detectar `status === 'liberado'` E `loginCount === 1`, mostrar tela de "Bem-vindo · sua TURN<i style="color:#00A868">I</i> está pronta" com 3 cards ("complete seu perfil · explore o feed · faça seu primeiro turno").
- **P0:** no MVP/demo, simular notificação push via banner amarelo no topo do app: "Você foi aprovado! Complete seu cadastro para subir de nível."
- **P1:** em produção: email + SMS no momento da aprovação com link mágico "/login?welcome=1".
- **P2:** WhatsApp via Evolution API com mensagem editorial e CTA pra completar.

### Marco 5 · Cadastro completo pós-aprovação

**(a) O que existe.** Hoje, **nada**. A função `approvePro()` aplica defaults (`mei: true`, `raio: 5`, `precoHora: 26`, `nivel: 'Iniciante'`) e o profissional segue direto pro feed.

**(b) Gap CRÍTICO.**
- **Defaults inadequados para o real.** Em produção um pizzaiolo Elite com 142 turnos não pode entrar como Iniciante com R$26/h.
- **MEI não é validado.** O default `mei: true` é mentira útil para a demo, mas em produção precisa upload de comprovante.
- **Foto verificada não existe.** Hoje qualquer URL serve.
- **Conta bancária / chave Pix não é capturada.** Sem isso, Asaas não consegue fazer split.

**(c) Recomendação.**
- **P0 (demo):** adicionar **uma única tela** de cadastro completo logo após o welcome do marco 4: 6 campos (foto upload · raio · preço/hora · banco/Pix · comprovante MEI · 2 funções secundárias). Pode ficar com 50% pré-preenchido pelos defaults inteligentes mas com CTA grande "ajuste o que precisa".
- **P0 (produção):** validação real de MEI via API da Receita.
- **P1:** progress bar na trilha de níveis mostrando "Iniciante (sem foto verificada) → Confiável (foto + 5 turnos) → Destaque (foto + 30 turnos + média 4.5+) → Elite". Cria gamificação real.
- **P2:** integração com Asaas direto na tela de cadastro completo.

### Marco 6 · Publicação da vaga (Contratante)

**(a) O que existe.** Wizard de 3 steps no mobile (#96), form completo single page no desktop. Campos: função, data início, duração, valor, número de vagas, observações.

**(b) Gap.**
- **Contratante web:** sem gap material. Polir microcopy.
- **Contratante mobile:** wizard funciona. Faltam dois bons defaults: "pegar template da última vaga aberta" e "abrir vaga recorrente (toda quarta às 19h)".

**(c) Recomendação.**
- **P1:** botão "duplicar vaga" no kanban de vagas. Reduz fricção em 80% para contratantes que abrem turnos recorrentes.
- **P1:** sugestão de valor baseada no histórico ("você pagou R$160 nas últimas 3 vagas de garçom").
- **P2:** vaga recorrente (template semanal).

### Marco 7 · Match com trabalhadores (cálculo)

**(a) O que existe.** Função `calcMatch(u, v)` que combina função primária + secundária + nível + raio + preço. Resultado em % com pill colorida (verde ≥80, mostarda 60-79, cinza <60).

**(b) Gap.**
- O algoritmo é caixa-preta. O trabalhador vê o número mas não entende o que somou os pontos.
- Sem ranking dinâmico por proximidade ou disponibilidade real-time.

**(c) Recomendação.**
- **P1:** breakdown do match clicável ("Por que 92%? Função: ✓ · Nível: ✓ · Distância: 4km de você · Preço: dentro do seu mínimo").
- **P2:** match revisado a cada 30 segundos (ranking live em períodos quentes).

### Marco 8 · Match · candidatura enviada

**(a) O que existe.** `fireMatchEvent('candidatura', ...)` dispara Match Card overlay com 2 cards face-to-face (perfil do trabalhador + crachá da empresa) + timeline 8 marcos + Match Focus Mode (esconde sidebar, bottom-nav, FAB). Auto-fecha em 5s ou clique fora.

**(b) Gap.**
- **Pequeno UX:** o card é poderoso mas pode ser percebido como "modal interrompendo" em fluxo rápido. Há toggle para silenciar?
- **Notificação ao contratante:** o contratante recebe banner mas não recebe push real (em produção precisa).

**(c) Recomendação.**
- **P1:** preferência "modo silencioso" do Match Card no perfil do contratante (recebe só na lista, sem overlay).
- **P2:** push notification via web push API ou OneSignal.

### Marcos 9-13 · Aceite, PIN check-in, turno em curso, check-out, pagamento

Status: ◉ implementado nas 4 combinações persona × canal. Match Card cobre cada transição com:
- Card visual + handshake center + logo TURNI rodapé
- Timeline 8 marcos atualizada em tempo real
- Match Focus Mode esconde UI do app
- Cronômetro bilateral durante turno em curso
- Notificação de Pix em até 15 min após validação do check-out

**Recomendações pontuais:**
- **P1 marco 10 (PIN check-in):** copy do contratante deve ressaltar "geofence ativo · 100m" com mais clareza visual.
- **P1 marco 11 (turno em curso):** botão "reportar incidente" precisa estar ESCONDIDO até toque longo, para não acionar acidentalmente.
- **P1 marco 13 (Pix):** mostrar estado intermediário "processando split na Asaas" entre check-out e Pix recebido. Hoje vai direto.

### Marco 14 · Feedback bilateral obrigatório

**(a) O que existe.** Marco 8 do timeline. Hoje em demo é dispensável; em produção, bloqueio do próximo turno até feedback dado.

**(b) Gap.**
- **Não-obrigatoriedade na demo.** Pode passar a ideia de que é opcional.
- **Sem nuance no feedback.** Hoje é estrelas + comentário livre. Falta categorização (pontualidade, postura, técnica, atendimento).

**(c) Recomendação.**
- **P0 demo:** banner persistente "Avalie o turno de Marina · libera próxima candidatura" para evidenciar a obrigatoriedade.
- **P1:** feedback estruturado em 4 dimensões (pontualidade, postura, técnica, comunicação) + comentário livre opcional. Alimenta o motor de match.
- **P1:** "feedback rápido" com 3 toques (5★ default · só ajusta se quiser).

### Marco 15 · Análise financeira

**(a) O que existe.** Tabs de período (dia/semana/quinzena/mês) tanto no app do trabalhador quanto do contratante. KPIs: total · turnos no período · valor médio/hora · ticket médio. Lista compacta de pagamentos do período.

**(b) Gap.**
- **Falta camada de insight.** Hoje são números crus. Sem comparação entre períodos ("você ganhou 18% a mais que mês passado") nem projeção ("nesse ritmo você fecha o mês em R$3.840").
- **Sem exportação.** Em produção, o trabalhador MEI precisa baixar nota fiscal/relatório para o contador.
- **Sem comparação setorial.** O bartender não sabe se R$42/h é alto ou baixo na média do mercado SP.

**(c) Recomendação.**
- **P1:** card "Insight do mês" no topo do financeiro com 1 frase editorial gerada ("Você cresceu 18% no faturamento · ritmo médio R$3.840/mês · seu ticket médio está acima da média de Garçons Elite em SP").
- **P1:** botão "exportar PDF" no financeiro (NF-e + extrato consolidado).
- **P2:** benchmarks setoriais ("preço médio Garçom Elite em SP: R$32/h").

---

## 6. Diferenças críticas · web vs mobile inferior

### Premissa

Contratante usa **web 70%** (laptop em ambiente de trabalho, conexão fibra ou 4G estável). Trabalhador usa **mobile inferior 85%** (Android budget 4GB RAM, conexão 3G/4G inconsistente, plano de dados limitado). O MVP precisa servir ambos sem comprometer nenhum.

### Calibragem atual da plataforma

| Dimensão | Web (contratante) | Mobile inferior (trabalhador) |
|----------|-------------------|-------------------------------|
| Layout | Kanban + tabela densa | Bottom nav + cards/listagem zebrada |
| Densidade | Alta · 4 KPIs em linha | Baixa · 3 stats máximo na tela |
| Touch targets | irrelevante (mouse) | 44x44px mínimo · cumprido |
| Inputs | font-size 14px ok | font-size 16px (resolve zoom iOS) |
| Imagens | Pravatar 240px + logos PNG/SVG | Pravatar 240px (mesmo, downscale CSS) |
| Animações | Animação intro 5 atos OK | Animação intro PODE causar jank |
| PWA | Não usado | Installable funcional, mas ritual fraco |
| Offline | Não necessário | Service Worker básico cobre app shell |
| Network | Otimizado para 4G+ fibra | NÃO otimizado para 3G real |

### Gaps específicos do mobile inferior

1. **Peso da landing.** ~280KB em fontes + animação intro 5 atos. Calculadora interativa não testada em Android low-end.
2. **PWA install ritual.** Hoje o trabalhador precisa descobrir sozinho que o site é installable. Falta CTA editorial "Instale o TURN<i style="color:#00A868">I</i> no celular · funciona offline".
3. **Sem modo de baixa banda.** Imagens não têm srcset/lazy loading agressivo nem versões WebP.
4. **Sem indicador de offline.** Se o trabalhador está em túnel ou área de baixa cobertura, ele submete uma candidatura e não sabe se foi enviada.

### Recomendações P0 mobile inferior

- **P0:** medir performance real em Android budget Throttle 4G slow + 3G. Lighthouse mobile.
- **P0:** banner de PWA install no app (não na landing) — após o segundo login bem-sucedido, "instale para receber turnos no momento que abrirem".
- **P1:** fallback offline com fila de ações (candidatura, check-in, check-out queue local que sincroniza quando volta a conexão).
- **P1:** lazy load de pravatar com placeholder cinza enquanto carrega.

---

## 7. Análise financeira por persona

### Persona Contratante · onde aparece o financeiro

- **Início (crachá):** sem números financeiros (decisão #140 — foco em identidade).
- **Vagas:** valor da vaga + ticket médio.
- **Turnos:** valor de cada turno em curso e finalizado.
- **Financeiro:** painel completo com tabs período, total pago, pré-autorizado, ticket médio, histórico Asaas.
- **Empresa (RH):** sem números financeiros (foco em cultura).

**Análise.** O contratante consegue responder em ≤2 cliques: "quanto gastei essa semana?", "qual meu ticket médio?", "quanto está reservado em pré-autorização?".

**Gaps.**
- Não há projeção de gasto do mês ("nesse ritmo você fecha em R$X").
- Não há análise por função ("você está pagando R$28/h em média de garçom · mercado em R$32/h").
- Não há aviso de descontrole ("3 vagas abertas com pré-autorização total de R$1.200 em 24h · acima do seu padrão").

### Persona Trabalhador · onde aparece o financeiro

- **Início (crachá):** sem números (decisão #137 — foco em identidade + próximo turno).
- **Feed:** valor de cada vaga listada.
- **Candidaturas:** valor de cada vaga candidatada.
- **Turnos:** valor de cada turno + total no histórico.
- **Financeiro:** painel completo com tabs período, faturamento líquido, turnos no período, valor médio/hora, ticket médio, lista Pix.

**Análise.** O trabalhador também consegue responder rápido: "quanto recebi essa semana?", "qual meu R$/h?", "qual meu ticket médio?".

**Gaps.**
- Não há comparação inter-período ("ganhei mais ou menos que mês passado").
- Não há projeção ("nesse ritmo fecha em R$X").
- Não há simulação de hipóteses ("se eu fizer 4 turnos extras essa semana, fecho em R$X").
- Não há benchmark ("seu R$/h está em P75 do mercado SP").
- Não há export para o contador (MEI precisa de NF + extrato).

### Recomendação consolidada para ambas as personas

- **P1 ambos:** card "Insight" no topo do financeiro · 1 frase editorial gerada com comparação + projeção.
- **P1 ambos:** export PDF do período selecionado.
- **P2 ambos:** benchmarks setoriais (média mercado SP por função/segmento).
- **P2 trabalhador:** simulador de hipóteses ("e se eu trabalhar X turnos a mais?") — herda da calculadora da landing.

---

## 8. Top 10 ajustes priorizados (ordem de execução)

| # | Ajuste | Persona | Canal | Esforço | P |
|---|--------|---------|-------|---------|---|
| 1 | Welcome screen pós-aprovação ("você foi liberado · 3 passos pra começar") | Trabalhador + Contratante | Mobile + Web | 1d | P0 |
| 2 | Tela de cadastro completo pós-aprovação (foto + raio + preço + Pix + MEI) | Trabalhador | Mobile + Web | 2d | P0 |
| 3 | Banner persistente "avalie o turno · libera próxima candidatura" | Trabalhador | Mobile | 0.5d | P0 |
| 4 | Performance audit mobile inferior (3G + Android low-end) + correções imediatas | Trabalhador | Mobile | 1.5d | P0 |
| 5 | Pré-cadastro mobile em wizard de 2 steps | Ambos | Mobile | 1d | P0 |
| 6 | Insight editorial no topo do financeiro (comparação + projeção) | Ambos | Web + Mobile | 1d | P1 |
| 7 | Breakdown do match clicável | Trabalhador | Mobile | 1d | P1 |
| 8 | "Duplicar vaga" no kanban + sugestão de valor histórico | Contratante | Web + Mobile | 0.5d | P1 |
| 9 | Banner PWA install no app pós-2º login | Trabalhador | Mobile | 0.5d | P1 |
| 10 | Export PDF do financeiro (NF + extrato) | Ambos | Web | 1d | P1 |

**Total esforço P0:** 6 dias-pessoa.  
**Total esforço P1:** 4 dias-pessoa.  
**Sprint sugerido:** 5 dias com 2 devs em paralelo (P0 completo).

---

## 9. Riscos não-mitigados (snapshot pra board)

1. **Compliance trabalhista.** O modelo "MEI vende turno via plataforma" tem precedente jurídico em construção. Risco de re-classificação para CLT em massa se não houver cláusulas contratuais robustas e separação operacional clara.
2. **Concentração inicial em hospitalidade.** Se o setor sofrer um choque (regulação, crise econômica), o MVP perde tração rápido. Diversificação setorial é fase 2.
3. **Dependência da Asaas.** Pix em 15min é o nosso diferencial chave. Se o split atrasar ou falhar, a confiança do trabalhador desmorona em 1 turno.
4. **Curva de aprendizado do contratante.** O modelo "abrir vaga e receber match" assume que o contratante já sabe o que precisa. Para casas pequenas isso é OK; para grupos maiores com RH estruturado, a venda é mais lenta.
5. **Saturação geográfica.** São Paulo capital tem ~12k restaurantes elegíveis. Captação efetiva de 5% (600 casas) gera receita de R$3M-5M/ano com take rate de 15%. Expansão para regiões metropolitanas é fase 2/3.

---

## 10. Próximos sprints sugeridos

### Sprint A · 5 dias · "Funil de aprovação completo" (P0 #1, #2, #3, #5)

- Welcome screen pós-aprovação + cadastro completo + banner feedback obrigatório + wizard pré-cadastro mobile
- **Owner:** @ux + @dev + @copy
- **Bloqueia:** primeira demo XP

### Sprint B · 3 dias · "Calibragem mobile inferior" (P0 #4 + P1 #9)

- Lighthouse audit + correções (lazy load, srcset, font-display swap, preload Bebas) + banner PWA install
- **Owner:** @dev + @testes
- **Bloqueia:** demo Romero (perfil mais cético com tech)

### Sprint C · 5 dias · "Camada de insight" (P1 #6, #7, #8, #10)

- Insight editorial financeiro + breakdown match + duplicar vaga + export PDF
- **Owner:** @dev + @diretorfinanceiro + @copy
- **Bloqueia:** demo Stone (que pede prova de stickiness)

---

## 11. O que NÃO precisa de ajuste

Para evitar "feature creep" pré-investidor, aqui está o que está **bom o suficiente** e que a diretoria não deve mexer:

- Match Card e timeline 8 marcos (#133, #134, #135, #136)
- Identidade visual e padronização TURN<i style="color:#00A868">I</i> (#118, #121, #122, #123, #127)
- Manifesto NÃO/SIM com flip cards (#125, #126, #128)
- Crachá puro no Início (#137, #140)
- Listagem zebrada no trabalhador (#139)
- 5 abas do contratante com foco em identidade (#138)
- Demo rica com fotos + logos SVG (#141)

Estes 12 pontos são a **espinha narrativa do produto**. Tocar neles agora corre risco de regressão sem ganho proporcional.

---

## Encerramento

O MVP está em estado de **demo investidor-ready com 3 ajustes obrigatórios**. Os 3 ajustes do Sprint A (#1, #2, #3 + #5) são bloqueadores reais; o Sprint B é forte mitigação de risco; o Sprint C eleva o produto a "vendável", não só "demonstrável".

Recomendo que **@ceo Rodolfo aprove o Sprint A imediatamente** e calendarize as 3 demos (XP, Romero, Stone) **após o término do Sprint A**, com Sprint B e C rodando em paralelo entre as três demos.

— War Room TURN<i style="color:#00A868">I</i> · 02 maio 2026
