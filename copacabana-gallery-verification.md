# Verificação da galeria do Apto Reformado

A rota `/#copacabana` mostra a nova galeria com **1 / 18** e a primeira imagem `/manus-storage/01-sala-area1_699025e3.avif`, correspondente ao primeiro ficheiro enviado. O browser confirmou todos os 18 thumbnails na sequência exacta: cinco imagens da sala, cinco da cozinha, três do quarto, quatro do banheiro e uma imagem exterior.

O Flat Verano Stay continua com **1 / 18** e as imagens previamente integradas. A galeria de Copacabana foi verificada em desktop e mobile, com o lightbox, contagem e layout responsivo preservados.

`pnpm run check`, `pnpm run build` e `git diff --check` concluíram sem erros. O bundler mantém apenas o aviso não bloqueante sobre chunks superiores a 500 kB.
