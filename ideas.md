# Brainstorm de Design — Rio Stays by Mauricio

## Três abordagens estilísticas

### 1. Aquarela Carioca — Editorial acolhedor e artesanal
Uma direcção inspirada em revistas de viagem boutique: tons de terracota, areia e papel quente, serifas expressivas, composição assimétrica e gestos de hospitalidade pessoal.

**Probabilidade:** 0.07

### 2. Azul Atlântico — Minimalismo costeiro premium
Uma linguagem dominada por azul-mar suave, branco frio, linhas finas e muito respiro, com a sensação de um hotel boutique costeiro.

**Probabilidade:** 0.03

### 3. Tropical Modernista — Contraste solar brasileiro
Uma interpretação modernista com arcos, verde-palma, mostarda e superfícies creme, evocando a energia arquitectónica do Rio.

**Probabilidade:** 0.05

---

## Abordagem escolhida: Aquarela Carioca

### Design Movement
Editorial de revista de viagem boutique, próximo de Kinfolk e Condé Nast Traveller, combinado com o calor vernacular carioca. A página deve parecer um convite pessoal desenhado pelo próprio anfitrião, não um template de reservas.

### Core Principles
O projecto privilegia **calor humano**, **composição editorial assimétrica**, **prova social tratada como elemento gráfico** e **vídeo como protagonista** de cada apartamento. A informação funcional permanece clara, mas nunca deve dominar a narrativa da estadia.

### Color Philosophy
O off-white quente funciona como papel de convite; a areia cria superfícies de apoio; a terracota `#B4562F` é a assinatura e a cor primária de acção; o verde-palma `#2E4A3B` dá contraste e confiança. O dourado-oliva da Barra e o azul suave de Copacabana são acentos contextuais, não cores concorrentes com o CTA principal.

### Layout Paradigm
O Hero ocupa a largura da página e alinha a narrativa à esquerda. Cada apartamento segue uma relação assimétrica 7/5, com o tour em vídeo como âncora e a galeria como apoio. Os blocos seguintes alternam ritmo, folhas de papel, citações, selos e linhas costeiras em vez de repetir grelhas centradas de cartões.

### Signature Elements
A linguagem visual usa o monograma M em arco, o selo oval “Preferido dos hóspedes” e uma linha costeira desenhada como divisor. As novas superfícies de papel acrescentam textura subtil, cantos assimétricos e a sensação de uma página impressa.

### Interaction Philosophy
As interações devem ser suaves, quentes e úteis. Hovers elevam ligeiramente os elementos com sombras difusas; CTAs respondem com micro-salto e pressão; âncoras usam scroll suave; o WhatsApp mantém a sua cor oficial, mas a hierarquia de acções continua a ser conduzida pela terracota.

### Animation
Entradas usam fade com translateY de 16px, stagger discreto e a curva `cubic-bezier(0.23, 1, 0.32, 1)`. Vídeos activam apenas quando se aproximam do viewport. Todas as animações não essenciais respeitam `prefers-reduced-motion`.

### Typography System
Títulos usam Fraunces, com pesos 500–700 e escala editorial generosa. Corpo, labels e UI usam Public Sans. Eyebrows são maiúsculos, compactos e espaçados; citações e notas de hospitalidade usam a serif para recuperar a voz humana.

### Brand Essence
**Estadias cuidadas no Rio por um anfitrião que já recebeu centenas de hóspedes com nota 4,94.** Para viajantes que procuram confiança, conforto e contacto directo. A marca é acolhedora, confiável e cuidadosa.

### Brand Voice
A voz é directa, calorosa e específica, sem clichés de agência. Exemplos: “Viva o Rio. Hospede-se com confiança.” e “Falar com o Mauricio no WhatsApp”.

### Wordmark & Logo
O símbolo é um monograma M dentro de um arco de porta carioca, com um gesto de sol nascente. O wordmark “Mauricio · Rio stays” usa Fraunces em itálico e Public Sans para a linha de apoio.

### Signature Brand Color
Terracota `#B4562F`, uma cor que remete ao pôr do sol carioca e ao tijolo das fachadas históricas.

## Style Decisions

A habilidade com o nome exacto `design-taste-frontend` não está instalada neste ambiente. A revisão foi aplicada com base na auditoria visual disponível, preservando e aprofundando a direcção Aquarela Carioca.

As secções inferiores agora usam superfícies de papel com textura subtil, cantos assimétricos, folhas de avaliação e agrupamentos editoriais. O tour em vídeo foi reforçado como o objecto principal de cada apartamento, enquanto a galeria permanece interactiva, mas visualmente secundária.

A assinatura “Mauricio · Rio stays” foi reforçada no header, no anfitrião e no footer. A terracota passou a concentrar as acções principais; o verde do WhatsApp e os acentos dos apartamentos continuam contextuais. As duas secções de apartamentos e o divisor entre elas partilham a mesma base quente, sem a transição azul que quebrava o fluxo.

## Relevante para manutenção

O projecto foi validado com `pnpm run check` e `pnpm run build`. O build conclui sem erros; permanece apenas o aviso do bundler relativo a chunks superiores a 500 kB. Nenhuma avaliação, classificação ou testemunho novo foi fabricado.

A revisão abrange `Home.tsx`, `Layout.tsx`, `ApartmentSection.tsx`, `TourVideo.tsx`, `PhotoGallery.tsx`, `Host.tsx`, `Reviews.tsx`, `Faq.tsx` e `index.css`.

## Checklist

- [x] Verificar a disponibilidade da habilidade e registar a alternativa aplicada.
- [x] Auditar o preview em desktop e mobile.
- [x] Aplicar a revisão de composição, tipografia, contraste, superfícies e microinterações.
- [x] Rever responsividade, acessibilidade e estados de hover/focus/touch.
- [x] Validar TypeScript e build de produção.
- [x] Capturar screenshots representativos.
- [ ] Guardar o checkpoint final e entregar o resultado.

## Estado

A revisão visual está implementada, documentada e validada tecnicamente. Falta guardar o checkpoint final antes da entrega.
