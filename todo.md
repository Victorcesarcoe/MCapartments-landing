# Migração Full-Stack e Armazenamento de Ficheiros

## Estado

O projecto está a ser convertido de um template estático para um template full-stack (`web-db-user`) para permitir o alojamento de vídeos e outros media grandes no armazenamento permanente do projecto, resolvendo o bloqueio de publicação do GitHub.

## Checklist

### Fase 1: Migração Full-Stack
- [x] Activar a funcionalidade `web-db-user` no projecto.
- [x] Validar a nova estrutura de pastas (`server/`, `drizzle/`, `storage/`).
- [x] Confirmar a disponibilidade das APIs de armazenamento.

### Fase 2: Gestão de Media
- [x] Identificar todos os ficheiros grandes em `client/public/videos/` e outros directórios.
- [x] Carregar os vídeos `copacabana-tour.mp4` e `verano-stay-tour.mp4` para o armazenamento S3.
- [x] Carregar quaisquer outros media grandes detetados no repositório.
- [x] Remover os ficheiros físicos do repositório local após o carregamento bem-sucedido.

### Fase 3: Integração e Actualização
- [x] Actualizar as referências de vídeo em `client/src/lib/data.ts` para os novos caminhos `/manus-storage/...`.
- [x] Actualizar as referências em `client/src/components/sections/Hero.tsx` e `ApartmentSection.tsx`.
- [x] Verificar se existem outros media (imagens pesadas) que devam ser migrados.

### Fase 4: Validação e Lançamento
- [x] Validar o carregamento dos vídeos no browser.
- [x] Executar `pnpm run check` e `pnpm run build` na nova estrutura.
- [x] Sincronizar com o GitHub (Victorcesarcoe/MCapartments-landing) e criar o checkpoint de publicação.
- [x] Confirmar que o site está online com os vídeos a funcionar.


## Correcção de lazy loading em produção
- [ ] Tornar a activação do `TourVideo` robusta quando a página abre directamente num hash/âncora.
- [ ] Validar novamente os dois vídeos no domínio publicado depois da correcção.
- [ ] Guardar checkpoint final após a validação de produção.
