# TURNI · Roteiros Oficiais de Demo

**Versão:** 1.0 · **Data:** 02 maio 2026  
**Owners:** @po + @ux + @dev  
**Uso:** Toda demo investidor (XP · Romero · Stone) e demo comercial (Pizza da Mooca · Hospedaria · Onessta) parte deste documento.

---

## 0. Tese

Com **um único MVP navegável** (turni-demo-mvp/index.html + app.html) coberto por **5 roteiros encadeados**, qualquer pessoa do time pode apresentar a plataforma TURNI ponta a ponta para investidor ou cliente — sem ambiente staging dedicado, sem dados ad-hoc, sem improviso.

Os 5 fluxos são desenhados para serem usados **isoladamente** (cada um tem 2-4 minutos de demo) **ou em sequência narrativa** (15 minutos cobrindo o ecossistema inteiro).

---

## 1. Pré-flight checklist · 90 segundos antes de qualquer demo

Antes de toda apresentação, o demonstrador roda este checklist:

1. **Reset da demo.** Acessar `app.html#/login` → login como Rodolfo (admin) → painel admin → botão **"↺ Resetar demo"** (canto inferior do painel ou no drawer da tela de login). Isso garante que o seed v3 está limpo (todos os 13 usuários no estado inicial, 4 vagas no feed, 0 turnos finalizados).
2. **Logout.** Voltar para `index.html` (landing).
3. **Limpar tela de notificações** do navegador (DevTools fechado, abas extras fechadas).
4. **Verificar conexão.** Pravatar.cc precisa estar acessível para mostrar fotos dos profissionais.
5. **Tema.** Definir light mode no `app.html` se a luz da sala for escura, ou dark se for clara — garante contraste melhor no projetor.
6. **Resolution.** Em projetor ou TV, manter zoom em 100% no Chrome. Mobile preview: usar Pixel 5 (DevTools responsive).
7. **Pré-aquecer página.** Abrir `index.html` uma vez antes da demo para garantir que fontes Bebas/Fraunces/Inter estão carregadas em cache.

---

## 2. Personas e credenciais oficiais da demo

Toda demo usa **personas pré-cadastradas no seed**, exceto quando o roteiro pede para criar um pré-cadastro novo.

### Admin (uso fixo em toda demo)

| Persona | E-mail | Acesso |
|---------|--------|--------|
| **Rodolfo Nascimento** | `rodolfo@turni.app` | Super Admin · aprova pré-cadastros, monitora turnos, gerencia ecossistema |

### Contratantes liberados

| Persona | Estabelecimento | E-mail | Plano |
|---------|----------------|--------|-------|
| **Roberto Silva** | A Pizza da Mooca | `roberto@apizzadamooca.com.br` | Member |
| Carla Mendes | Hospedaria · Vila Madalena | `carla@hospedaria.com.br` | Member |
| Bruno Otto | Onessta · Itaim | `bruno@onessta.com.br` | Enterprise |

**Persona-protagonista padrão:** Roberto Silva (Pizza da Mooca) — tem todos os dados completos, identidade visual rica, é o piloto real da operação.

### Contratantes em pré-cadastro (uso no Fluxo 3)

| Persona | Estabelecimento | E-mail |
|---------|----------------|--------|
| Andréia Camargo | Brasa Prime Steakhouse · Tatuapé | `andreia@brasaprime.com.br` |
| Tiago Marçal | Hotel Vista Bela · Pinheiros | `tiago@hotelvistabela.com.br` |

### Trabalhadores liberados

| Persona | Função | Nível | Score | Turnos |
|---------|--------|-------|-------|--------|
| **Carlos Henrique Silva** | Garçom · Hostess | Elite | 4.9 | 127 |
| Marina Santos | Cozinheira · Forneiro | Destaque | 4.7 | 84 |
| Bruna Lima | Bartender · Garçom | Elite | 4.8 | 98 |
| Camila Rocha | Pizzaiolo · Forneiro · Cozinheira | Elite | 4.9 | 142 |
| Diego Reis | Garçom | Iniciante | 4.2 | 8 |
| ... | ... | ... | ... | ... |

**Persona-protagonista padrão:** Carlos Henrique Silva — Elite, 127 turnos, narrativa rica.

### Trabalhadores em pré-cadastro (uso no Fluxo 3)

| Persona | Função | E-mail |
|---------|--------|--------|
| Lucas Ferreira | Garçom | `lucas.f@gmail.com` |
| Isabela Martins | Cozinheira | `isa.m@gmail.com` |

**Senha em todos os logins:** qualquer string · a demo não valida senha (é cosmética).

---

## 3. Roteiro 1 · Pré-cadastro Contratante

**Tempo:** 2 minutos · **Foco:** mostrar como um dono de bar ou restaurante chega à plataforma e se cadastra.

### Tela 1 · Landing (00:00 – 00:30)

**URL:** `index.html`

**Ações do demonstrador:**
1. Aguardar a animação intro de 5 atos (ou clicar para skipar se ela ainda estiver rolando)
2. Scroll suave até a seção "Hero diagonal" (empresário ↗ · trabalhador ↘)
3. Pausar 2 segundos no manifesto NÃO/SIM (cards flip)
4. Continuar o scroll até "QUEM TURNIFICA" (logos parceiros)
5. **Voltar ao topo** e clicar no botão "Já sou TURNI" superior direito **somente para mostrar onde fica** — depois fechar e clicar em qualquer card que leve a "pré-cadastre-se"

**Pontos de fala:**
- "A landing tem dois lados: empresário no canto superior e profissional no canto inferior. Eles se encontram no centro, no símbolo da TURNI."
- "O manifesto é o nosso compromisso: o que rejeitamos vs o que defendemos."
- "Embaixo, os 3 pilares: Match IA · PIN Bilateral · Pix em 15 minutos."

### Tela 2 · Escolha do tipo de cadastro (00:30 – 00:50)

**URL:** `app.html#/cadastro`

**Ações:**
1. Clicar no botão **"Sou contratante"** ou na seção do empresário
2. A landing redireciona para a escolha → clicar em "Sou contratante"

**Pontos de fala:**
- "Aqui o usuário escolhe se está vindo como contratante ou trabalhador. Cada lado tem uma jornada visual e narrativa próprias."

### Tela 3 · Formulário de pré-cadastro contratante (00:50 – 01:50)

**URL:** `app.html#/cadastro/emp`

**Ações desktop:**
1. Preencher na coluna direita:
   - Nome: **Felipe Demonstração**
   - Estabelecimento: **Bar do Demo · Itaim**
   - E-mail: **demo@bardodemo.com.br**
   - WhatsApp: **(11) 99999-0000**
   - Tipo de operação: **Bar**
   - Cidade: **São Paulo**
2. Clicar **"Enviar pré-cadastro"**

**Ações mobile:**
- Preencher Step 1 (nome + e-mail + WhatsApp), clicar "Continuar", preencher Step 2 (estabelecimento + tipo + cidade), clicar "Enviar pré-cadastro"

**Pontos de fala:**
- "Cadastro grátis, em 2 minutos. No mobile o formulário vira wizard de 2 steps para não cobrir o teclado virtual."
- "Em produção, o pré-cadastro entra na fila de aprovação do admin TURNI. Aqui na demo, vai aparecer no painel do Rodolfo em segundos."

### Tela 4 · Confirmação de pré-cadastro recebido (01:50 – 02:00)

**Ações:** Mostrar a tela de "Pré-cadastro recebido" e ler o copy.

**Pontos de fala:**
- "Ele agora aguarda aprovação. Vou para o admin para mostrar como esse fluxo termina."

**Transição para Fluxo 3** ou Fluxo 2 (se quiser cadastrar o trabalhador antes).

---

## 4. Roteiro 2 · Pré-cadastro Trabalhador

**Tempo:** 2 minutos · **Foco:** mostrar a jornada do profissional MEI chegando à plataforma.

### Tela 1 · Landing · clicar em "trabalhar" (00:00 – 00:30)

**URL:** `index.html`

**Ações:**
1. Scroll até a metade inferior da landing — calculadora interativa de turnos
2. Mexer no slider para mostrar projeção: "3 turnos por semana = R$1.440/mês"
3. Clicar em **"Sou trabalhador"** (botão na seção persona-pick)

**Pontos de fala:**
- "Aqui a tese de marketing é poderosa: trabalhar deixa de ser submissão à CLT e vira escolha. Sua agenda, seu preço, seu Pix em 15 minutos."
- "A calculadora mostra projeção realista: o profissional vê quanto pode ganhar antes de aceitar a plataforma."

### Tela 2 · Formulário de pré-cadastro trabalhador (00:30 – 01:30)

**URL:** `app.html#/cadastro/wkr`

**Ações:**
1. Preencher:
   - Nome: **Marina Demo Souza**
   - E-mail: **marina.demo@gmail.com**
   - WhatsApp: **(11) 99999-1111**
   - Função pretendida: **Bartender**
   - Cidade: **São Paulo**
   - MEI: **"Sim, já tenho"**
2. Clicar **"Enviar pré-cadastro"**

**Pontos de fala:**
- "Note que a plataforma exige MEI. É a tese B2B PJ↔PJ que protege das objeções trabalhistas — e que a Stone validou na conversa inicial."
- "Quem ainda não tem MEI vê o link 'Abra grátis em 5 minutos' que vai direto para o gov.br."

### Tela 3 · Confirmação (01:30 – 02:00)

Igual ao fluxo do contratante — confirmação de pré-cadastro recebido, fica aguardando aprovação.

**Transição para Fluxo 3.**

---

## 5. Roteiro 3 · Login Admin · aprova ambos os pré-cadastros

**Tempo:** 2 minutos · **Foco:** mostrar a curadoria humana da TURNI · não é match automático cego.

### Tela 1 · Login admin (00:00 – 00:20)

**URL:** `app.html#/login`

**Ações:**
1. Digite no campo e-mail: **`rodolfo@turni.app`**
2. Senha: qualquer coisa (ex: `demo`)
3. Clicar **"Entrar"**

**Alternativa:** abrir o drawer "Demo · entre como persona pré-cadastrada", filtrar por "Admin", clicar em Rodolfo.

**Pontos de fala:**
- "Admin do TURNI é a operação humana que valida cada cadastro. Aqui é o Rodolfo, mas em produção é um pequeno time."
- "O ato de aprovar é deliberado, com critério. Não é match automático cego."

### Tela 2 · Painel admin (00:20 – 00:40)

**URL:** `app.html#/admin`

**Ações:** Apontar para o action banner amarelo no topo: "X cadastros aguardando".

**Pontos de fala:**
- "O sino acende quando há fila. Aqui ele já está alertando que tem 4 pré-cadastros pendentes — os 2 do seed (Andréia Brasa Prime e Tiago Hotel Vista Bela, Lucas Ferreira e Isabela Martins) mais os 2 que acabamos de criar."

### Tela 3 · Fila de aprovação (00:40 – 01:30)

**URL:** `app.html#/admin/aprovacoes`

**Ações:**
1. Clicar em **"Liberar"** no card do Lucas Ferreira (trabalhador pré-cadastrado)
2. Toast confirma: "Lucas liberado · será guiado pelo onboarding"
3. Clicar em **"Liberar"** no card da Andréia Camargo (contratante)
4. Repetir para Isabela Martins e Tiago Marçal se quiser
5. **Opcional:** clicar no ícone "ver perfil" para mostrar dados completos do profissional antes de aprovar

**Pontos de fala:**
- "Cada aprovação grava `aprovadoPor`, `aprovadoEm` — auditoria completa para compliance trabalhista."
- "Quando o profissional logar de novo, ele cai na tela de boas-vindas e depois no cadastro completo (foto, raio, preço/hora, chave Pix, MEI). Os defaults aplicados aqui são preliminares."

### Tela 4 · Logout admin (01:30 – 02:00)

**Ações:** Botão "Sair" da sidebar → volta para login.

**Pontos de fala:**
- "Agora vou logar como o Lucas que acabamos de aprovar para mostrar o ritual de boas-vindas."

**Transição para Fluxo 5 (trabalhador) ou Fluxo 4 (contratante).**

---

## 6. Roteiro 4 · Login Contratante · abre vaga

**Tempo:** 3 minutos · **Foco:** mostrar como um contratante real publica uma vaga e a leva ao feed em segundos.

**Persona-protagonista:** Roberto Silva (Pizza da Mooca · `roberto@apizzadamooca.com.br`).

### Tela 1 · Login (00:00 – 00:15)

**URL:** `app.html#/login`

**Ações:** Digitar `roberto@apizzadamooca.com.br` → senha `demo` → Entrar.

**Pontos de fala:**
- "Roberto é sócio da Pizza da Mooca, 7ª melhor pizzaria do Brasil pela Folha 2024. Casa de 38 funcionários, parte do Grupo Noiz. É a operação piloto real."

### Tela 2 · Crachá da empresa · Início (00:15 – 00:50)

**URL:** `app.html#/contratante`

**Ações:**
1. Pausar no crachá: logo, endereço, segmento, plano Member, operação almoço/jantar
2. Mostrar a seção "A casa em movimento" (escala dos próximos turnos)

**Pontos de fala:**
- "Início é a IDENTIDADE da casa, não operação. Logo, endereço, cultura, time. O contratante começa pelo orgulho de quem ele é."
- "Embaixo, a escala em movimento: quem está confirmado, quem está em curso. Operacional vive em 'A casa em movimento', identidade vive no crachá."

### Tela 3 · Aba Vagas (00:50 – 01:15)

**URL:** `app.html#/contratante/vagas`

**Ações:**
1. Mostrar as 4 vagas abertas no kanban / lista
2. Apontar para o botão "Duplicar" (ícone copy) num dos cards

**Pontos de fala:**
- "Vagas é onde o operacional acontece. Cada card tem o ícone 'duplicar' — abrir uma vaga recorrente é 1 clique, não preencher tudo de novo."

### Tela 4 · Nova vaga · wizard 3 steps (01:15 – 02:30)

**URL:** `app.html#/contratante/vagas/nova` (botão FAB no mobile, "Abrir vaga" no desktop)

**Ações:**
1. **Step 1 · Função e horário:** escolher Garçom · data início amanhã 18:00 · fim 23:00 · Próximo
2. **Step 2 · Posições e remuneração:** valor/hora R$ 35 · 2 posições. **Mostrar a sugestão de valor histórico:** "Você pagou em média R$ 32/h nas últimas 3 vagas de Garçom · Usar R$32" — clicar no botão para mostrar como aplica
3. **Step 3 · Detalhes:** observações: "Uniforme escuro · entrada pelo Galpão 2 · Marina coordena"
4. Clicar **"Publicar vaga"**

**Pontos de fala:**
- "Wizard de 3 passos no mobile, single page no desktop. Sugestão de valor histórico aprende com as últimas 3 vagas da mesma função."
- "A vaga sai para o feed em tempo real — qualquer trabalhador habilitado vê em segundos."

### Tela 5 · Confirmação · de volta a Vagas (02:30 – 03:00)

**Ações:** A nova vaga aparece no kanban com candidatos = 0.

**Pontos de fala:**
- "Pronto. Em poucos minutos vou trocar de tela e mostrar essa vaga aparecendo no feed do trabalhador."

**Transição para Fluxo 5.**

---

## 7. Roteiro 5 · Login Trabalhador · dá match com vaga

**Tempo:** 4 minutos · **Foco:** mostrar a experiência mobile-first do profissional, transparência do match, fluxo até o Pix.

**Persona-protagonista:** Carlos Henrique Silva (Garçom Elite · `carlos.silva@gmail.com`).

### Tela 1 · Login (00:00 – 00:15)

**URL:** `app.html#/login`

**Ações:** Digitar `carlos.silva@gmail.com` → Entrar.

**Pontos de fala:**
- "Carlos é Elite, 127 turnos sem ocorrência. 10 anos de salão, vem do Famiglia Mancini, passou pelo Brasa Prime."

### Tela 2 · Crachá TURNI · Início (00:15 – 00:45)

**URL:** `app.html#/profissional`

**Ações:**
1. Mostrar saudação dinâmica ("Bom dia/Boa tarde/Boa noite, Carlos")
2. Apontar para o próximo turno hero (se houver) ou para o crachá
3. Mostrar trilha de níveis: Iniciante → Confiável → Destaque → **Elite** (atual)
4. Stats: Score 4.9 · 127 turnos · faturamento total

**Pontos de fala:**
- "Início do trabalhador é o crachá TURNI. Quem ele é na rede, sua reputação, sua identidade. As 5 abas embaixo: Início · Feed · Candidaturas · Turnos · Financeiro."

### Tela 3 · Feed de vagas (00:45 – 01:30)

**URL:** `app.html#/profissional/feed`

**Ações:**
1. Mostrar a lista zebrada compacta
2. Apontar para a vaga recém-criada pelo Roberto (será a primeira no topo, ordem por match)
3. Clicar no **% de match** (à direita) para abrir o breakdown

**Pontos de fala:**
- "Listagem zebrada compacta — otimizada para celular simples. Em vez de cards pesados, linhas densas escaneáveis."
- "O match% não é caixa-preta. Clica e vê a fórmula."

### Tela 4 · Modal Breakdown do match (01:30 – 02:00)

**Ações:** Modal abre. Apontar para cada linha:
- Função: ✓ Garçom bate com sua primária (+40)
- Distância: ✓ dentro do raio de 8km (+20)
- Histórico: ✓ 4.9★ em 127 turnos (+27)
- Nível: ✓ Elite, topo da trilha (+10)
- Preço: ✓ R$35/h compatível com seu mínimo R$32

**Pontos de fala:**
- "Transparência do algoritmo é a base de confiança. O profissional sabe por que apareceu no feed. Sabe o que precisa para subir match. Sabe que não é loteria."

Fechar modal.

### Tela 5 · Detalhe da vaga + candidatura (02:00 – 02:40)

**URL:** `app.html#/profissional/vaga?id=...`

**Ações:**
1. Clicar na linha da vaga → entra no detalhe
2. Mostrar KPIs: Match · Você recebe · Carga horária · Concorrência
3. Detalhes do turno + observações do contratante
4. Clicar **"Candidatar agora"**

**Pontos de fala:**
- "O profissional vê tudo antes de aceitar: quanto recebe (líquido, sem desconto), quem está concorrendo, qual a observação do contratante."

### Tela 6 · Match Card · candidatura enviada (02:40 – 03:00)

**Ações:** Match Card overlay abre automaticamente. Mostrar:
- Card do profissional + Card da empresa face-to-face
- Handshake center
- Timeline 8 marcos · marco "Candidatura" verde, demais cinza
- Logo TURNI no rodapé do modal

**Pontos de fala:**
- "Match Card é a figura central da plataforma. Cada transição importante (candidatura, aceite, PIN check-in, check-out, Pix, feedback) acende um marco da timeline."

### Tela 7 · Trocar de aba para o contratante (03:00 – 03:30)

**Sugestão:** Abrir uma nova aba do navegador, logar como Roberto novamente, mostrar a vaga com 1 candidato.

**Ações:**
1. Aba 2 → `app.html#/login` → roberto@apizzadamooca.com.br
2. `/contratante/vagas` → vaga tem "1 candidato"
3. Clicar na vaga → ver candidato Carlos com avatar, score, histórico
4. Clicar **"Aprovar candidato"**

**Pontos de fala:**
- "Do outro lado, Roberto vê o Carlos com nome, foto, score, histórico. Não é currículo cego, é reputação acumulada na rede."
- "Aceitar gera contrato instantâneo + reserva Asaas + dispara o próximo Match Card."

### Tela 8 · De volta ao Carlos · turno confirmado (03:30 – 04:00)

**Ações:** Voltar à aba 1 (Carlos). O Match Card aparece automaticamente (cross-tab sync).
- Banner verde no app: "CANDIDATURA ACEITA · TURNO CONFIRMADO"
- Match Card mostra marco "Match" aceso (verde)

**Pontos de fala:**
- "Cross-tab sync em tempo real. Em produção isso seria push notification, mas na demo via localStorage funciona perfeitamente."
- "Daqui o Carlos vai gerar PIN de check-in quando chegar no local. O Roberto valida. Cronômetro bilateral. No fim, novo PIN de check-out e Pix em 15 min via Asaas. E feedback bilateral obrigatório que libera a próxima candidatura."

**Demonstração opcional do ciclo completo:** continuar até check-in, check-out, Pix e feedback. Adiciona +3 minutos.

---

## 8. Roteiro Integrado · 15 minutos para investidor

Versão encadeada dos 5 fluxos como uma única apresentação narrativa. Use isto para XP, Romero, Stone.

### Bloco 1 · Tese visual (3 min) · só landing

- Abertura: "TURNI é a infraestrutura que faltava para o food service brasileiro encontrar gente em horas."
- Scroll guiado pela landing: hero diagonal · manifesto NÃO/SIM · calculadora · QUEM TURNIFICA
- Pausa no flip card NÃO/SIM: "Aqui está nosso compromisso. O que rejeitamos. O que defendemos."
- Pausa em "QUEM TURNIFICA": Stone, Asaas, Grupo Noiz como parceiros já alinhados

### Bloco 2 · Onboarding bilateral (3 min) · pré-cadastros

- Volta ao topo da landing → clica "Pré-cadastre-se" no menu
- Cria pré-cadastro de **contratante** (Bar do Demo) — 1 min
- Volta para landing → cria pré-cadastro de **trabalhador** (Marina Demo) — 1 min
- "Em 2 minutos, dois lados do mercado entraram na rede. Agora a curadoria humana valida."

### Bloco 3 · Curadoria admin (1.5 min)

- Login Rodolfo → fila de aprovações → libera os 2 que acabou de cadastrar + Lucas e Andréia do seed
- "4 aprovações em 30 segundos. Cada uma deixa rastro auditável (aprovadoPor, aprovadoEm). Em produção, há checks anti-fraude e validação de MEI via Receita."

### Bloco 4 · Contratante real abre vaga (3 min)

- Logout. Login como **Roberto · Pizza da Mooca**.
- Crachá da casa: "Início é identidade. A casa que ele é, não operação."
- Vagas → Nova vaga → wizard com sugestão de valor histórico
- "Em 90 segundos, vaga publicada. Sai para o feed de centenas de profissionais habilitados."

### Bloco 5 · Trabalhador pega o turno (4 min)

- Logout. Login como **Carlos · Garçom Elite**.
- Crachá TURNI: "Início é a reputação dele. 127 turnos. Elite. 4.9 estrelas."
- Feed → vaga do Roberto no topo (alto match)
- Clica no match% → modal breakdown → "Transparência do algoritmo. Não é caixa-preta."
- Detalhe da vaga → candidatar
- Match Card overlay com timeline 8 marcos
- Trocar para aba do Roberto → aceitar candidato → Match Card sincroniza

### Bloco 6 · Encerramento (0.5 min)

- "Quando Carlos chegar no local: PIN bilateral (geofencing 100m). Cronômetro. Check-out gera novo PIN. Roberto valida. Pix em 15 min via Asaas. Feedback bilateral obrigatório libera próxima candidatura."
- "É isso. Match IA · PIN Bilateral · Pix em 15min. Stone, Asaas, Grupo Noiz já no ecossistema. Pronto para escalar."

**Tempo total: 15 minutos.** Margem para perguntas: +5 min.

---

## 9. Variações por contexto

### Demo XP (foco financeiro/escala) — 12 min

- Cortar Bloco 2 (pré-cadastros) — pular direto para o admin com filas já cheias
- Estender Bloco 4 + 5 com aba financeiro: insight editorial + export PDF
- Mostrar split Asaas + take rate 15% no extrato

### Demo Romero (foco tech/UX) — 18 min

- Estender Bloco 1 com a calculadora interativa
- Bloco 4 inclui: nova vaga + duplicar vaga + accordion empresa em mobile
- Bloco 5 inclui: zoom no mobile inferior + PWA install banner + slow-conn detection
- Mostrar prefers-reduced-motion + lazy-load dos avatares

### Demo Stone (foco operacional/hospitalidade) — 10 min

- Bloco 1 reduzido (1 min, só hero + parceiros)
- Pular Bloco 2 inteiro
- Bloco 3 → 4 → 5 corridos
- Encerramento detalhado na linha financeira: "split CNPJ↔CNPJ via Asaas, pré-autorização Asaas 25%, NF-e MEI exportável em 1 clique"

### Demo Pizza da Mooca / cliente real — 8 min

- Pular admin (Bloco 3)
- Pular pré-cadastros (Bloco 2)
- Foco total em Bloco 4 + 5 mostrando a operação dele real (Pizza da Mooca já é seed)
- Adicionar bloco final: financeiro → insight do mês com "Você gastou X% a mais" + export PDF para o contador

---

## 10. Troubleshooting durante a demo

| Sintoma | Causa | Resolução em 10s |
|---------|-------|------------------|
| Fotos pravatar não carregam | Sem internet ou pravatar.cc fora | Skeletons aparecem (fix do Sprint B). Continue. Mencione: "Em produção, fotos vêm do nosso bucket S3." |
| Match Card não abre | Browser bloqueou modal | Refresh + retry. Ou troque para aba já logada. |
| Toast "feedback pendente" bloqueia ação | Algum turno do seed está sem avaliação | Acesse a aba Turnos do user logado, dê 5★ no turno mais recente, retome o fluxo. |
| Animação intro da landing trava | 3G slow / device fraco | A `body.slow-conn` deveria pular automaticamente. Se não pulou, refresh com `?lite=1` ou aguarde os 7s. |
| Login não loga | E-mail digitado errado | Use o drawer "Demo · entre como persona" e clique direto na linha. |
| Reset não limpa | localStorage cheio | DevTools → Application → Clear Site Data → recarregar. |
| Layout quebrado ao redimensionar | Resize durante demo | Refresh. Antes da próxima demo, resolução fixa. |
| Contratante não tem feedback gate ativo mas profissional sim | Estado dessincronizado | Reset demo do admin antes de qualquer apresentação. |

---

## 11. Pós-demo

Para cada demo investidor, registrar em retrospectiva:

- Tempo real gasto vs estimado por bloco
- Onde o investidor fez perguntas (sinaliza confusão de UX ou interesse genuíno)
- O que precisou improvisar (sinaliza gap no roteiro)
- Bugs encontrados ao vivo (criar task imediatamente)
- Momentos "uau" e momentos "hm?" (alimenta priorização)

Atualizar este documento conforme aprendizado de cada demo.

---

**TURN<i style="color:#00A868">I</i>**. · Roteiros oficiais de demo · v1.0 · 02 maio 2026
