# Verificação da abertura cinematográfica

A abertura usa a mesma fotografia centralizada do Hero (`/manus-storage/hero-rio_4f1073a1.jpg`) e apresenta a logo M Apartments, o texto “M Apartments · Rio de Janeiro”, a legenda “Estadias com personalidade.” e o botão “Entrar agora”.

O browser confirmou a presença da abertura no carregamento inicial, com a fotografia e a logo visíveis antes da transição para o Hero. O desktop foi verificado com imagem em tela cheia e contraste preservado; o mobile foi verificado após a saída da abertura, com o Hero, headline e CTAs sem corte.

`pnpm run check`, `pnpm run build` e `git diff --check` concluíram sem erros. O bundler mantém apenas o aviso não bloqueante sobre chunks superiores a 500 kB. O componente inclui saída automática, botão de entrada imediata e suporte a `prefers-reduced-motion`.
