# Verificação do Hero

O parágrafo secundário foi removido manualmente de `Hero.tsx` porque a edição visual não encontrou o selector actualizado. O Hero agora apresenta o eyebrow, o headline “Conforto, segurança e uma estadia inesquecível”, os dois CTAs e o resumo de avaliações.

A composição foi verificada em desktop e mobile. O headline mantém legibilidade, os botões continuam acessíveis e não há corte de texto. `pnpm run check`, `pnpm run build` e `git diff --check` concluíram sem erros; permanece apenas o aviso não bloqueante sobre chunks superiores a 500 kB.
