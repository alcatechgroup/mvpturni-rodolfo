# UX Audit · Mobile Experience · Turni MVP

> Auditoria completa da experiência mobile dos 2 apps (Contratante + Trabalhador). Análise por heurísticas de Nielsen, identificação de issues com prioridade e recomendações acionáveis para @dev e @po.

**Auditor:** @ux
**Data:** 2026-05-01
**Versão analisada:** turni-app-v6 (mobile-preview.html · viewport ≤ 768px)
**Escopo:** Telas principais dos 2 apps no light theme, mobile-only

---

## 1. Resumo executivo

Os 2 apps já têm fundação sólida: identidade visual coerente por persona, feed integrado, kanban de turnos, depoimentos e perfil expandido. O principal gap mobile é **layout não otimizado para telas estreitas** (≤ 380px) em componentes herdados do desktop, falta de **bottom navigation** (padrão mobile) e **touch targets pequenos** abaixo do mínimo Apple/Google (44x44px).

**Score geral mobile (0-10):** **6.8**
- Trabalhador: 7.2 · feed funciona bem, perfil precisa polish
- Contratante: 6.4 · vagas em crachá ajudam mas kanban quebra em mobile
- Onboarding: 5.5 · funcional mas longo, cadastros sem progresso visual claro

**Top 3 issues prioritários (P0):**
1. **Sidebar lateral é antipattern em mobile** — convenção iOS/Android é bottom nav
2. **Cards de vaga `.vaga` row** quebram em mobile estreito (grid 4 colunas em 380px)
3. **Modais e formulários** com touch targets abaixo de 44px e inputs causando zoom no iOS (font-size < 16px)

---

## 2. Heurísticas de Nielsen aplicadas

### H1 · Visibilidade do status do sistema · 7/10
✅ Toast feedback após ações  
✅ Saudação dinâmica conforme horário  
⚠️ Falta loading state em ações longas (publicar vaga, fazer match)  
❌ Sem indicador de conexão online/offline  
❌ Sem badge de notificação no item de menu

### H2 · Correspondência com o mundo real · 8/10
✅ Linguagem natural ("vamos buscar reforço?", "Turners", "Turn**i**ficados")  
✅ Ícones Lucide universalmente compreensíveis  
✅ Ordem cronológica natural (turnos próximos primeiro)  
⚠️ "MEI" no perfil pode confundir trabalhador iniciante — precisa de hint/tooltip

### H3 · Controle do usuário · 6/10
✅ Hash routing permite voltar via back button do browser  
⚠️ Sem botão "voltar" explícito em telas-filha (depende do back nativo)  
❌ Modais não fecham com Esc ou click no backdrop em todos os casos  
❌ Sem confirmação antes de ações destrutivas (cancelar vaga, recusar candidato)

### H4 · Consistência e padrões · 8/10
✅ Paleta semântica mantida em toda a UI (vermelho=admin, mostarda=emp, verde=pro)  
✅ Mesmo crachá-style usado em Turners e Vagas (consistente)  
⚠️ "Equipe" → "Turners" no contratante mas mantém "Trabalhador" em outros lugares (inconsistência terminológica)  
⚠️ Botões primários ora retangulares ora pill-shaped (decidir um padrão)

### H5 · Prevenção de erros · 5/10
⚠️ Validação só no submit, não em tempo real (email, telefone, CEP)  
❌ Função extra 1 = primária dispara erro só no save (deveria desabilitar opção)  
❌ Sem máscara automática no input de telefone, CEP  
❌ Permite criar vaga com data no passado sem aviso

### H6 · Reconhecer ao invés de lembrar · 8/10
✅ Filtros visíveis em chips (não escondidos em dropdown)  
✅ Stats sempre visíveis nos crachás  
✅ Score e nível constantemente expostos no header do perfil  
⚠️ Função primária do trabalhador não tem destaque vs as extras (pareceriam iguais ao usuário)

### H7 · Eficiência · 6/10
✅ Saudação contextual + atalho rápido para feed  
⚠️ Para candidatar, preciso clicar 2x (vaga → detalhe → candidatar) · podia ser swipe direto no card  
❌ Sem busca/filtro por valor mínimo, distância, data específica no feed  
❌ Sem "pinar" vagas favoritas para revisar depois

### H8 · Estética e design minimalista · 9/10
✅ Off-white quente cria hierarquia visual elegante  
✅ Tipografia em 3 famílias (display, body, mono) bem balanceada  
✅ Cards escuros sobre fundo claro = contraste sofisticado  
⚠️ Demo bar consome 33px do viewport mobile (já apertado)

### H9 · Recuperar de erros · 4/10
❌ Erros aparecem como toast vermelho mas somem em 3s · sem "tente novamente"  
❌ Sem fallback offline (se a API falhar)  
⚠️ Form de cadastro não preserva valores se erro de rede

### H10 · Ajuda e documentação · 3/10
❌ Sem onboarding guiado na primeira vez  
❌ Sem tooltip explicativo nos campos complexos (raio de atuação, função extra)  
❌ Sem FAQ acessível nem help center  
⚠️ Hints existem mas em fonte pequena fácil de ignorar

---

## 3. App do TRABALHADOR · auditoria mobile

### Pontos fortes
1. **Saudação personalizada** com primeiro nome e CTA contextual
2. **Feed integrado** no dashboard remove fricção de navegação
3. **Score em destaque** + estrelas dourado (#F4C95B) cria gratificação visual
4. **Crachá "Buscando Turn**i**ficados"** torna estado de vaga aberto memorável
5. **Funções extras** ampliam pool de oportunidades sem fragmentar perfil
6. **Aba Feedbacks dedicada** com média + breakdown educa sobre a métrica

### Issues por prioridade

#### P0 · CRÍTICO (bloqueia uso mobile)

**P0.1 · Cards `.vaga` row quebram em mobile estreito**  
Estrutura atual: `grid-template-columns: auto 1fr auto auto` (logo, info, match-pill, status). Em 380px o conteúdo se sobrepõe ou estica horizontalmente.  
**Recomendação:** Reescrever para layout vertical em `@media (max-width:560px)`:  
```
┌─────────────────────────┐
│ [logo]  Garçom · Bar X  │
│         🗓 Sex 18:00    │
│         ⏱ 6h · R$32/h  │
│ ────────────────────────│
│ [85% match]  [Cand. ✓] │
└─────────────────────────┘
```

**P0.2 · Sidebar lateral em mobile não é convenção**  
Hambúrguer + sidebar fixed lateral é padrão desktop. Em mobile, a convenção é **bottom nav** (5 ícones max). A sidebar atual abre por hambúrguer, mas o user tem que clicar no canto, depois clicar de novo no item.  
**Recomendação:** Implementar bottom nav fixa no mobile com 5 ícones:  
- Home / Feed / Turnos / Feedbacks / Perfil  
- Sidebar lateral só aparece em ≥ 769px

**P0.3 · Inputs com font-size < 16px causam zoom no iOS Safari**  
`.field input` está 14px no mobile, iOS automaticamente faz zoom-in ao focar. Quebra a experiência.  
**Recomendação:** `@media (max-width:768px) { .field input,.field select,.field textarea{ font-size:16px !important } }`

#### P1 · ALTO (afeta conversão e satisfação)

**P1.1 · Touch targets abaixo de 44x44px**  
- `.btn-mini` (12px padding) ≈ 32x36px — abaixo do mínimo  
- `.role-tab` filtros do feed: 9px padding ≈ 34px altura  
- Estrelas de avaliação: cada estrela < 24px  
**Recomendação:** Mínimo 44x44px em mobile (pode usar `padding` ou `min-height`).

**P1.2 · 4 KPIs no dashboard ocupam tela inteira em mobile**  
Cada KPI mobile é grande (height > 120px). 4 KPIs viram 480px de scroll antes do feed.  
**Recomendação:**  
- Em mobile, mostrar só 2 KPIs principais (Score, Turnos) e colapsar o resto em "Ver mais"  
- Ou layout horizontal scrollable (cards de 220px, swipe)

**P1.3 · Saudação "Bom dia Carlos, vamos buscar seu turno?" quebra feio**  
34px com 8 palavras pode quebrar em 4 linhas em mobile estreito (320px).  
**Recomendação:**  
- Mobile: reduzir para 24px ou splitar em 2 linhas explícitas com `<br>`  
- Ex: "Bom dia, Carlos" (linha 1) + "Vamos buscar seu turno?" (linha 2 menor)

**P1.4 · "Próximo turno" hero card sem ação clara em mobile**  
O hero `.next-turn` mostra dia/hora/info mas o CTA "FAZER CHECK-IN" pode ficar pequeno demais.  
**Recomendação:** Botão CTA full-width em mobile, mínimo 56px altura, cor primária.

**P1.5 · Filtros do feed (4 chips) quebram para 2 linhas**  
`.role-tab` em wrap. Causa cards "ondulando" abaixo.  
**Recomendação:**  
- Mobile: scroll horizontal sem wrap (`overflow-x:auto; flex-wrap:nowrap`)  
- Ou colapsar em dropdown "Filtros" (1 linha sempre)

#### P2 · POLISH (qualidade percebida)

**P2.1 · Depoimentos 3 cards em grid se tornam scroll vertical no mobile**  
Idealmente em mobile vira carrossel horizontal swipeable (1 card por vez).

**P2.2 · Status bar de Android no preview tem hora estática**  
Funciona mas relógio dinâmico já implementado · OK.

**P2.3 · Sem skeleton loading**  
Cards aparecem instantaneamente. Em produção com API real, faltará skeleton.

**P2.4 · Sem pull-to-refresh**  
Convenção mobile · esperado em listas.

---

## 4. App do CONTRATANTE · auditoria mobile

### Pontos fortes
1. **Saudação "vamos buscar reforço?"** é direta e operacional
2. **Crachás de vaga "Buscando Turn**i**ficados"** comunicam estado claramente
3. **Grid de Turners** com avatar + score + nível é prova social poderosa
4. **Card empresa** (Pizza da Mooca) inspira confiança · mostra cultura  
5. **Kanban vertical** organiza turnos por status

### Issues por prioridade

#### P0 · CRÍTICO

**P0.1 · Kanban de turnos perde a estrutura em mobile**  
3 colunas (Em curso · Confirmados · Finalizados) viram pilha vertical sem distinção visual clara.  
**Recomendação:**  
- Mobile: tabs no topo "Em curso (2) | Confirmados (3) | Finalizados (12)"  
- Apenas 1 lista por vez · swipe entre tabs

**P0.2 · Calendário de escala (`.escala-grid` 7 colunas) impossível em 380px**  
Cada `.escala-day` precisa ter no mínimo 50px de largura → 350px só pra dias.  
**Recomendação:**  
- Mobile: visualização agenda (lista vertical de dias)  
- Cada dia é um card com seus slots dentro  
- Toggle "ver semana" → vai pra desktop view

**P0.3 · Mesmo problema P0.3 do trabalhador (zoom iOS no input)**  
Aplica idêntico aqui.

#### P1 · ALTO

**P1.1 · Crachás de vaga · gap entre eles ocupa espaço demais em mobile**  
`gap:14px` entre crachás de 220px+ em mobile estreito vira ~30% de espaço vazio.  
**Recomendação:** Em mobile, crachás full-width 1 por linha com `gap:10px`.

**P1.2 · Card empresa (`#/contratante/empresa`) muito conteúdo em uma tela**  
CNPJ, endereço, segmento, fundação, funcionários, turnos op., cultura, valores, redes, contatos · 10+ campos.  
**Recomendação:**  
- Mobile: collapse cada seção em accordion  
- Mostrar só "Identidade" e "Resumo" expandidos por padrão

**P1.3 · Form de "Nova vaga" tem 8+ campos visíveis simultaneamente**  
Cognitive load alto · drop-off probabilidade.  
**Recomendação:**  
- Wizard em 3 steps:  
  1. **Função + horário** (essencial)  
  2. **Posições + remuneração**  
  3. **Detalhes opcionais (descrição, requisitos)**  
- Progress bar visual no topo (1/3, 2/3, 3/3)

**P1.4 · "Abrir vaga" como CTA primário no header é o caminho certo, mas em mobile compete com o back/voltar**  
**Recomendação:** Botão flutuante (FAB) circular no canto inferior direito (convenção Android Material) com ícone +.

#### P2 · POLISH

**P2.1 · Status pills das vagas (Aberta/Fechada/Cancelada) em mobile podem precisar legenda**  
O usuário precisa lembrar a cor.

**P2.2 · KPIs admin com vermelho profundo + saturate baixo podem cansar a vista em sessões longas**

---

## 5. Issues TRANSVERSAIS (afetam os 2 apps)

### T1 · Demo-bar consome viewport precioso em mobile
33px em telas de 640px = 5% do espaço útil sumido. Em produção remover; agora considerar dismissível.

### T2 · Toggle de tema (sun/moon) escondido na sidebar
Em mobile com sidebar fechada, user não acha. Mover para o header como ícone.

### T3 · Falta de feedback háptico (vibrate API)
Convenção mobile · ações importantes (candidatar, confirmar) podiam vibrar 5ms.

### T4 · Sem onboarding na primeira sessão
Primeiro acesso cai no dashboard sem contexto. Tour rápido (3 telas) seria valor agregado.

### T5 · Modais ocupam quase tela toda em mobile mas têm padding 32px
Espaço útil reduzido. Recomendação: mobile padding 20px e modal full-screen quando útil.

### T6 · Toast position bottom:32px conflita com bottom nav (quando implementarmos)
Mover para top em mobile ou posicionar acima da bottom nav.

### T7 · Sem dark mode no system preference automático
`prefers-color-scheme` não está implementado. Default é light · ignora preferência de sistema.

### T8 · Acessibilidade: contraste de algumas cores < WCAG AA
- `--t-tertiary` (#6F7C72 sobre off-white) ≈ 3.8:1 (precisa 4.5:1 para texto pequeno)
- Hints em `#8B8870` mais críticos ainda
**Recomendação:** Escurecer t-tertiary para `#5A6862` ou similar para passar AA.

### T9 · Falta atalhos de teclado em formulários
Cmd+S salvar, Esc fechar modal · funciona mas inconsistente.

### T10 · Sem suporte a swipe gestures
Padrão mobile · falta swipe direito → voltar, swipe em card → ações rápidas (candidatar/recusar).

---

## 6. Recomendações priorizadas

### Para @dev (implementação)

#### Sprint 1 · P0 (1 semana)
- [ ] **Bottom navigation mobile** (5 ícones por persona)
- [ ] **Reescrever `.vaga` row** vertical em mobile
- [ ] **Inputs `font-size:16px` em mobile** (resolve zoom iOS)
- [ ] **Kanban → tabs no contratante mobile**
- [ ] **Calendário escala → agenda lista no mobile**
- [ ] **Touch targets 44x44px mínimo** (btn-mini, role-tab, estrelas)

#### Sprint 2 · P1 (1 semana)
- [ ] **Saudação 2 linhas em mobile** (responsive typography)
- [ ] **Filtros como scroll horizontal** ou dropdown
- [ ] **FAB "+ vaga" no contratante**
- [ ] **Wizard 3 steps em "Nova vaga"**
- [ ] **Card empresa em accordion no mobile**
- [ ] **CTA hero card full-width 56px no trabalhador**

#### Backlog · P2 (sprints seguintes)
- [ ] Pull-to-refresh
- [ ] Skeleton loading states
- [ ] Carrossel de depoimentos
- [ ] Vibrate API em ações
- [ ] Swipe em cards (candidatar/recusar)
- [ ] `prefers-color-scheme` automático
- [ ] Toast acima da bottom nav

### Para @po (produto/escopo)

#### Decisões a tomar
1. **Bottom nav: usar?** Sim → cria componente novo. Não → manter sidebar (não recomendado para mobile)
2. **MVP web-only ou PWA?** Se PWA, adicionar manifest + service worker (cacheia offline)
3. **Onboarding obrigatório ou opt-in?** Onboarding 3 telas com skip ou skipável de cara?
4. **Estado offline:** mostrar "sem conexão" ou tentar reconectar silencioso?
5. **Notificações push:** permissão pedida quando? (no cadastro vs após primeiro turno)

#### User stories adicionais sugeridas
- **US-MOB-001:** Como trabalhador, quero candidatar a uma vaga deslizando o card pra direita, sem precisar abrir o detalhe.
- **US-MOB-002:** Como contratante, quero abrir uma nova vaga com 1 toque (FAB) e completar em 3 steps simples.
- **US-MOB-003:** Como qualquer persona, quero ver navegação principal sempre acessível na base da tela.
- **US-MOB-004:** Como trabalhador, quero salvar vagas favoritas pra revisar depois (bookmark).
- **US-MOB-005:** Como contratante, quero ver minha escala da semana em formato lista vertical no celular.

#### Métricas a instrumentar (analytics)
- **Time-to-first-action** · do login ao primeiro clique útil (target: < 5s)
- **Drop-off no funil** · login → cadastro → primeiro turno
- **Taxa de uso de filtros** no feed (quantos % usam? quais filtros mais clicados?)
- **% de candidaturas via swipe vs click no detalhe** (após implementar swipe)
- **Tempo médio em "Nova vaga"** (target: < 2 minutos no wizard)
- **Erros de validação** (qual campo erra mais? = priorizar máscara/hint)
- **% acessos mobile vs desktop** (informa onde investir esforço)
- **Pull-to-refresh frequency** (proxy de "como atualizado o feed parece estar")

---

## 7. Roadmap UX 2 sprints (sugerido)

**Sprint 1 · "Mobile-first foundations"** · Sprint goal: tornar os apps utilizáveis com elegância em telas ≤ 380px

| Item | Owner | Esforço |
|------|-------|---------|
| Bottom nav mobile (5 itens por persona) | @dev | 2d |
| Vagas row → vertical mobile | @dev | 1d |
| Inputs 16px + máscaras (tel, CEP) | @dev | 1d |
| Kanban → tabs mobile | @dev | 1d |
| Escala → agenda lista mobile | @dev | 1d |
| Touch targets 44px audit + fix | @dev | 0.5d |
| QA mobile (3 dispositivos) | @testes | 1d |

**Sprint 2 · "Friction reduction"** · Sprint goal: reduzir cliques e cognitive load nas tasks principais

| Item | Owner | Esforço |
|------|-------|---------|
| FAB "+ vaga" no contratante | @dev | 0.5d |
| Wizard 3-steps "Nova vaga" | @dev + @ux | 2d |
| Saudação responsive (2 linhas mobile) | @dev | 0.5d |
| Filtros scroll horizontal | @dev | 0.5d |
| Card empresa accordion mobile | @dev | 1d |
| Onboarding 3 telas (skipável) | @ux + @dev | 2d |
| Toast acima da bottom nav | @dev | 0.5d |
| QA + métricas instrumentadas | @testes + @dev | 1.5d |

---

## 8. Conclusão

Os 2 apps têm **identidade visual forte e diferencial**, mas o mobile é tratado como adaptação do desktop em vez de mobile-first. A maior oportunidade de ganho está em:

1. **Bottom navigation** (resolve discoverability e ergonomia)
2. **Componentes responsivos verdadeiros** (vagas, kanban, escala)
3. **Reduzir fricção** (wizard, FAB, swipe)

Fazendo Sprint 1 (P0), o app passa de "funciona em mobile" para "feito para mobile". Sprint 2 (P1) eleva a experiência ao nível de apps sérios do segmento (iFood, Uber, Rappi).

**Score projetado pós-Sprint 2:** **8.5/10** · paridade com benchmarks do mercado.

---

**Próximos passos:**
1. @po · priorizar Sprint 1 e validar decisões pendentes
2. @dev · estimar e iniciar P0
3. @ux · prototipar bottom nav + wizard "Nova vaga" no Figma antes do dev começar
4. @testes · preparar matriz de QA mobile (Chrome Android, Safari iOS, Firefox Android)
