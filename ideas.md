# Brainstorm de Design — Landing Page "Rio Stays by Mauricio"

## Três abordagens estilísticas

### 1. "Aquarela Carioca" — Editorial acolhedor e artesanal
Estética inspirada em revistas de viagem boutique: tons terrosos quentes (terracota, areia, off-white), tipografia serifada grande e expressiva, composição assimétrica com cartões sobrepostos. Sensação de convide pessoal, calor humano, confiança artesanal.
Probabilidade: 0.07

### 2. "Azul Atlântico" — Minimalismo costeiro premium
Paleta dominada por azul suave do mar sobre branco gelado, linhas finas, muito respiro, sensação de hotel boutique de luxo. Frio e elegante.
Probabilidade: 0.03

### 3. "Tropical Modernista" — Contraste ousado tipo Niemeyer
Referências ao modernismo brasileiro: arcos, curvas orgânicas, verde-palma e cor mostarda sobre fundo creme, energia solar.
Probabilidade: 0.05

---

## ABORDAGEM ESCOLHIDA: "Aquarela Carioca" — Editorial acolhedor e artesanal

### Design Movement
Editorial de revista de viagem boutique (estilo Kinfolk / Condé Nast Traveller) combinado com calor vernacular carioca. A página deve parecer um convite pessoal e cuidadosamente desenhado pelo anfitrião, não um template de booking.

### Core Principles
1. **Calor humano acima de tudo** — tons terrosos, luz de sol da manhã, texturas de papel/palha.
2. **Editorial assimétrico** — layouts deslocados, cartões com sobreposição parcial, colunas de larguras desiguais; evitar tudo centrado.
3. **Prova social como elemento gráfico** — selos "Preferido dos hóspedes", notas 4,9x e estrelas tratados como carimbos/dísticos de prestígio, nunca como chips genéricos.
4. **Vídeo como protagonista** — cada apartamento é apresentado primeiro pelo vídeo em tour; a interface enquadra o vídeo, não o substitui.

### Color Philosophy
Base quente e neutra que evoca madeira, areia e luz de manhã:
- Off-white quente `#FAF6F0` (fundo principal) — papel de convite
- Terracota `#B4562F` — cor primária de ação e assinatura (CTAs, acentos)
- Verde-palma escuro `#2E4A3B` — contraste sóbrio para texto e blocos de fundo
- Areia `#E8DFD0` — superfícies secundárias
- **Assinatura por apartamento**: Verano Stay (Barra) usa um toque de dourado-oliva `#A08233` (sunset/lagoa); Copacabana usa um azul suave `#7BA7BC` (mar), ambos como acentos secundários que harmonizam com o terracota.
Emoção: confiança + acolhimento + sofisticação discreta.

### Layout Paradigm
- Hero em tela cheia com vídeo de fundo e tipografia serifada gigante alinhada à esquerda, CTAs em bloco.
- Secções alternam fundos (off-white / areia / verde-palma profundo) para separar visualmente os dois apartamentos enquanto mantêm identidade unificada (mesmo header/footer).
- Blocos de apartamento em grid assimétrico 7/5: vídeo grande à esquerda, coluna de informação deslocada à direita com selo em posição de destaque; no Copacabana a ordem inverte.
- Comparativo em tabela editorial com coluna de cabeçalho serifada.
- Rodapé em verde-palma profundo com CTA final.

### Signature Elements
1. **Selo "Preferido dos hóspedes"** desenhado como dístico oval/carimbo com estrela, aplicado em ambos os blocos.
2. **Arco de porta carioca** (referência às fachadas de Copacabana) como moldura/motivo recorrente — usado na moldura do vídeo e nas imagens.
3. **Linha de cota/topografia** — fina linha ondulada de litoral usada como divisor de secções.

### Interaction Philosophy
Interações suaves e quentes: hover eleva cartões com sombra difusa terracota suave; CTAs têm micro-salto (scale 0.97 no active); âncoras com scroll suave; botões WhatsApp com o verde oficial mas tratados com o mesmo "peso" visual dos CTAs principais.

### Animation
- Entradas com fade + translateY(16px), stagger 60ms, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, <300ms.
- Vídeos: poster estático antes do play (autoplay loop muted quando visível, lazy-load via IntersectionObserver).
- Respeitar prefers-reduced-motion.
- Números de nota "4,97" com leve emphasis no scroll (count-up sutil uma vez).

### Typography System
- **Títulos**: "Fraunces" (serif display, quente, personalidade editorial) — pesos 500–700, tamanhos grandes.
- **Corpo/UI**: "Public Sans" (sans neutra, excelente legibilidade).
- Hierarquia: H1 clamp(2.5rem→4.5rem); H2 clamp(2rem→3rem); labels em Public Sans uppercase tracking-wide terracota.

### Brand Essence
"Estadias cuidadas no Rio por um anfitrião que já hospedou 400+ pessoas com nota 4,94" — para viajantes que querem confiança sem burocracia. Adjetivos: acolhedor, confiável, cuidadoso.

### Brand Voice
Direta, calorosa, sem clichés de agência. Exemplos:
- Headline hero: "Duas estadias. Um só anfitrião de confiança no Rio."
- CTA: "Falar com o Mauricio no WhatsApp"

### Wordmark & Logo
Logótipo: monograma "M" dentro de um arco de porta carioca (meia-estrela/sol nascente acima do arco), em terracota sobre fundo transparente. Wordmark "Mauricio · Rio" em Fraunces itálico ao lado.

### Signature Brand Color
Terracota `#B4562F` — inconfundível, quente, remete ao pôr do sol carioca e ao tijolo das fachadas históricas.
