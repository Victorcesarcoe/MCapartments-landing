# Verificação do pulso do WhatsApp

O botão flutuante mantém a posição, escala e contraste correctos em desktop e mobile. O pulso é iniciado apenas após 5 segundos de permanência na página, executa uma vez com duração curta e combina uma ligeira escala do botão com um anel de expansão.

A implementação mantém o botão interactivo durante e depois da animação, e a regra `prefers-reduced-motion: reduce` desactiva a animação não essencial. `pnpm run check`, `pnpm run build` e `git diff --check` concluíram sem erros. O bundler mantém apenas o aviso não bloqueante sobre chunks superiores a 500 kB.
