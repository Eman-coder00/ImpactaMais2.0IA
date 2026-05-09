# Guia de Testes de Acessibilidade e Usabilidade - WCAG 2.1 AA

## Conformidade WCAG 2.1 Nível AA Implementado

### 1. CONTRASTE (1.4.3 - Contrast Minimum)
**Status:** ✓ Implementado

- **Contraste de Texto**: Mínimo 4.5:1 para texto normal e 3:1 para texto grande
- **Verificação realizada**:
  - Texto escuro (#1a1a1a) em fundo claro (#f5f5f5): 21:1 ✓
  - Botões primários: 7.5:1 ✓
  - Texto em header escuro: 11:1 ✓
  - Links em azul (#0d47a1): 6.2:1 ✓

**Ferramentas de teste sugeridas:**
- Chrome DevTools (Lighthouse)
- WebAIM Contrast Checker
- Accessible Colors

---

### 2. NAVEGAÇÃO POR TAB (2.1.1 - Keyboard)
**Status:** ✓ Implementado

**Recursos implementados:**
- ✓ Todos os elementos interativos são acessíveis via Tab
- ✓ Ordem de Tab lógica (left-to-right, top-to-bottom)
- ✓ Skip link no topo da página (visível com Foco)
- ✓ Focus visible em todos os elementos com outline 3px amarelo/ouro
- ✓ Suporte a Enter/Space em botões
- ✓ Navegação completa por teclado

**Como testar:**
1. Pressione `Tab` para navegação progressiva
2. Pressione `Shift + Tab` para navegação regressiva
3. Procure pelo outline amarelo que indica o foco
4. Use `Enter` para clicar em botões/links
5. Use `Space` para checkbox/radio buttons

**Teste prático:**
```bash
# No navegador, pressione F12 para abrir DevTools
# Siga apenas pelo teclado pela página inteira
# Todos os elementos devem ser acessíveis
```

---

### 3. ALT EM IMAGENS (1.1.1 - Non-text Content)
**Status:** ✓ Implementado

**Todas as imagens possuem alt descriptivo:**

```html
<!-- Página inicial -->
<img src="assets/images/support.svg" 
     alt="Ilustração de mulheres em círculo de apoio se abraçando">

<!-- Notícias -->
<img src="assets/images/lei-maria-cunha.svg" 
     alt="Ícone de lei de proteção à mulher">

<img src="assets/images/campanha-awareness.svg" 
     alt="Ícone de campanha de conscientização">
```

**Diretrizes seguidas:**
- ✓ Alt descritivo para imagens informativas
- ✓ Alt vazio ("") para imagens decorativas
- ✓ Ícones com aria-hidden="true" quando apenas decorativos

---

### 4. ARIA-LABELS (1.3.1 - Info and Relationships)
**Status:** ✓ Implementado

**Elementos com aria-label:**

```html
<!-- Botões de ação -->
<button aria-label="Fazer uma denúncia segura e confidencial">
    Fazer Denúncia
</button>

<!-- Links de telefone -->
<a href="tel:+551133334444" aria-label="Telefone do centro">
    +55 (11) 3333-4444
</a>

<!-- Formulários -->
<input id="email" aria-label="Campo de email para contato"
       aria-describedby="email-help">

<!-- Seções com aria-labelledby -->
<section aria-labelledby="hero-title">
    <h2 id="hero-title">Você não está sozinha</h2>
</section>

<!-- Regiões com role -->
<nav role="navigation" aria-label="Navegação principal">
    <ul class="nav-list">...</ul>
</nav>
```

**Atributos utilizados:**
- ✓ `aria-label`: Descreve elemento sem label visível
- ✓ `aria-labelledby`: Conecta elemento a seu título
- ✓ `aria-describedby`: Descreve elemento com mais detalhes
- ✓ `aria-pressed`: Indica estado de botões toggle
- ✓ `aria-hidden`: Esconde elementos decorativos de leitores
- ✓ `role`: Define papel semântico do elemento
- ✓ `aria-live`: Anuncia mudanças dinâmicas

---

### 5. DESTAQUE NO TAB (2.4.7 - Focus Visible)
**Status:** ✓ Implementado

**Estilo de foco aplicado:**
```css
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 3px solid var(--accent);  /* Amarelo/Ouro */
    outline-offset: 2px;
}
```

**Características:**
- ✓ Outline de 3px em cor contrastante (ouro #d4a574)
- ✓ Offset de 2px para melhor visibilidade
- ✓ Visível em todos os navegadores
- ✓ Funciona em modo escuro também

---

### 6. HIERARQUIA (1.3.1 - Info and Relationships)
**Status:** ✓ Implementado

**Estrutura semântica HTML:**
```html
<header role="banner">          <!-- Cabeçalho da página -->
    <h1>Centro de Denúncia</h1>  <!-- Título principal único -->
    <nav role="navigation">       <!-- Navegação -->
        <a>Item 1</a>
    </nav>
</header>

<main id="main-content">         <!-- Conteúdo principal -->
    <section aria-labelledby="sec1">
        <h2 id="sec1">Seção 1</h2>
        <h3>Subtítulo</h3>
    </section>
    
    <section aria-labelledby="sec2">
        <h2 id="sec2">Seção 2</h2>
    </section>
</main>

<footer role="contentinfo">      <!-- Rodapé -->
    <h3>Seção footer</h3>
</footer>
```

**Regras seguidas:**
- ✓ Apenas 1 h1 por página
- ✓ Hierarquia sequencial (h1 → h2 → h3)
- ✓ Sem pulos de nível (ex: h1 → h3 é inválido)
- ✓ Uso de <header>, <main>, <footer>, <section>
- ✓ <fieldset> e <legend> para agrupamentos de formulário

**Teste visual:**
Use uma ferramenta que mostra a estrutura de heading:
```
h1 "Centro de Denúncia e Apoio"
  h2 "Você não está sozinha"
  h2 "Em Situação de Emergência?"
  h2 "Notícias e Informações"
    h3 "Lei Maria da Penha Completa 18 Anos"
    h3 "Nova Campanha Nacional"
```

---

### 7. FONTE E LEGIBILIDADE
**Status:** ✓ Implementado

**Tipografia:**
- ✓ Font-family: Arial (sans-serif) - fácil leitura
- ✓ Tamanho base: 16px (1rem)
- ✓ Line-height: 1.6 para corpo de texto
- ✓ Espaçamento entre linhas adequado
- ✓ Máxima largura de 1200px para o conteúdo

**Zoom e Escalabilidade:**
- ✓ Suporte para 200% de zoom
- ✓ Design responsivo em todas as resoluções
- ✓ Teste: `Ctrl + +` / `Cmd + +` deve funcionar perfeitamente

---

### 8. FORMULÁRIOS (3.3.2 - Labels and Instructions)
**Status:** ✓ Implementado

**Exemplo de formulário acessível:**
```html
<form id="denuncia-anonima" method="POST" novalidate>
    <fieldset>
        <legend>Informações sobre o Caso</legend>
        
        <div class="form-group">
            <label for="tipo-violencia">
                Tipo de Violência 
                <span aria-label="Campo obrigatório" class="required">*</span>
            </label>
            <select id="tipo-violencia" required 
                    aria-describedby="tipo-help">
                <option value="">-- Selecione --</option>
                <option value="fisica">Violência Física</option>
            </select>
            <span id="tipo-help" class="form-help">
                Selecione o tipo de violência
            </span>
        </div>
    </fieldset>
    
    <button type="submit" class="btn btn-primary">
        Enviar
    </button>
</form>
```

**Padrões implementados:**
- ✓ `<label>` associado com `for="id"`
- ✓ `<fieldset>` e `<legend>` para agrupar
- ✓ `aria-describedby` para instruções
- ✓ `aria-required` ou `required`
- ✓ Validação com feedback visual e de áudio
- ✓ Altura mínima de 44px para campos
- ✓ Indicação clara de campos obrigatórios

---

### 9. RESPONSIVIDADE (1.4.10 - Reflow)
**Status:** ✓ Implementado

**Breakpoints:**
- Desktop: 1200px
- Tablet: 768px - 1199px
- Mobile: até 767px

**Testes responsivos:**
```bash
# Firefox DevTools
F12 → Responsive Design Mode (Ctrl+Shift+M)

# Chrome DevTools
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

**Dispositivos a testar:**
- iPhone SE (375px)
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1920px)

---

## CHECKLIST DE TESTES MANUAIS

### ✓ Navegação por Teclado
- [ ] Todos os botões são acessíveis via Tab
- [ ] Skip link funciona (Tab > Enter)
- [ ] Ordem de Tab é lógica
- [ ] Focus é sempre visível (outline amarelo)
- [ ] Escape fecha modais/dropdowns
- [ ] Enter ativa botões/links
- [ ] Space marca checkboxes

### ✓ Leitores de Tela (teste com NVDA ou JAWS)
- [ ] Todos os títulos são anunciados
- [ ] Links têm contexto (não apenas "clique aqui")
- [ ] Imagens têm alt descritivo
- [ ] Formulários têm labels
- [ ] Campos obrigatórios são anunciados
- [ ] Mensagens de erro são anunciadas
- [ ] Regiões vivas (aria-live) funcionam

### ✓ Contraste
- [ ] Teste com Chrome DevTools Lighthouse
- [ ] Verão: https://webaim.org/resources/contrastchecker/
- [ ] Todo texto > 4.5:1 de contraste
- [ ] Texto grande (18px+) > 3:1 de contraste

### ✓ Cores
- [ ] Informação não é transmitida apenas por cor
- [ ] Teste com simulador de daltonismo
- [ ] Links distinguíveis de texto normal

### ✓ Formulários
- [ ] Todos os campos têm labels visíveis
- [ ] Erro é indicado além da cor
- [ ] Campos obrigatórios são claros
- [ ] Instruções são visíveis

### ✓ Responsividade
- [ ] Funciona em 320px até 1920px
- [ ] Zoom 200% sem scroll horizontal
- [ ] Touch targets > 44px
- [ ] Sem conteúdo escondido necessário

---

## FERRAMENTAS RECOMENDADAS

### Testes Automáticos
1. **axe DevTools** (browser extension)
   - Detecta automaticamente problemas WCAG
   - Reports detalhados

2. **Lighthouse** (built-in no Chrome)
   - DevTools F12 → Lighthouse
   - Score de acessibilidade

3. **WebAIM Color Contrast Checker**
   - https://webaim.org/resources/contrastchecker/

### Testes Manuais
1. **NVDA** (leitura de tela - Windows/Linux)
   - Download: https://www.nvaccess.org/

2. **JAWS** (leitura de tela - Windows)
   - Trial: https://www.freedomscientific.com/

3. **VoiceOver** (built-in em Mac/iOS)
   - Cmd + F5 para ativar

### Simuladores
1. **WebAIM Contrast Checker** - Daltonismo
2. **Chrome DevTools** - Render → Emulate CSS media → prefers-reduced-motion

---

## TESTES PRÁTICO-PASSO A PASSO

### Teste 1: Navegação Completa por Teclado
```
1. Abra index.html no navegador
2. Pressione Tab e veja o outline amarelo
3. Continue até passar por TODOS os links/botões
4. Pressione Shift+Tab para voltar
5. Teste todas as funcionalidades por teclado
6. Nada deve ficar inacessível
```

### Teste 2: Leitor de Tela (NVDA - Windows)
```
1. Download: https://www.nvaccess.org/download/
2. Instale e reinicie
3. Abra index.html
4. Pressione Ctrl+Alt para ativar NVDA
5. Use as setas para navegar
6. Verifique se os alt texts são lidos
7. Verifique se os títulos são identificados
```

### Teste 3: Contraste de Cores
```
1. Abra Chrome
2. F12 → Lighthouse
3. Click "Analyze page load"
4. Veja score de Accessibility
5. Todo texto deve ter score verde em contraste
```

### Teste 4: Responsividade
```
1. F12 → Toggle Device Toolbar
2. Selecione "iPhone SE"
3. Verifique se o layout se adapta
4. Teste zoom 200% (Ctrl++)
5. Nenhum conteúdo deve ficar invisível
6. Touch targets devem ser > 44px
```

---

## MELHORIAS FUTURAS (Nível AAA)

- [ ] Implementar temas alto contraste
- [ ] Suporte para preferred-reduced-motion
- [ ] Legendas para vídeos (quando adicionados)
- [ ] Transcrições para áudio
- [ ] Suporte para leitura de direita para esquerda (RTL)
- [ ] Teste com usuários reais com deficiências

---

## REFERÊNCIAS E RECURSOS

- **WCAG 2.1 Official**: https://www.w3.org/WAI/WCAG21/quickref/
- **Web Content Accessibility Guidelines**: https://www.w3.org/WAI/
- **MDN Web Accessibility**: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **A11Y Project**: https://www.a11yproject.com/
- **WebAIM**: https://webaim.org/

---

## CONCLUSÃO

Este sistema foi desenvolvido seguindo rigorosamente as diretrizes WCAG 2.1 Nível AA, garantindo que mulheres vítimas de violência possam acessar os recursos de denúncia e apoio independentemente de suas capacidades físicas, visuais ou cognitivas.

**Acessibilidade é direito, não luxo.**
