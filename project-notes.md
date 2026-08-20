# Notas do projeto — Rio Stays by Mauricio

## Assets (usar URLs exatamente como estão)
- Logo: /manus-storage/logo-mauricio-rio_d1fce60e.png
- Hero: /manus-storage/hero-rio_4f1073a1.jpg
- Anfitrião: /manus-storage/mauricio-host_b5e6d5bf.jpg
- Apt1 sala: /manus-storage/apt1-living_ddca93c9.jpg
- Apt1 vista: /manus-storage/apt1-view_6f839540.jpg
- Apt1 condomínio/piscina: /manus-storage/apt1-condo.jpg
- Apt2 sala: /manus-storage/apt2-living.jpg
- Apt2 quarto: /manus-storage/apt2-bedroom_95f57120.jpg
- Copacabana praia: /manus-storage/copacabana-beach_83f6ed90.jpg
- Copacabana aérea: /manus-storage/copacabana-aerial_7020a0bc.jpg
- Pedra da Gávea: /manus-storage/pedra-gavea_c8ef1fec.jpg

## Placeholders TODO (em client/src/lib/data.ts e client/src/components/sections/Hero.tsx)
- WHATSAPP_NUMBER = "5521900000000" (linha ~12 de data.ts)
- APT1.videoUrl, APT2.videoUrl, APT1.airbnbUrl, APT2.airbnbUrl = ""
- HERO_VIDEO = "" em Hero.tsx
- Coordenadas mapas aproximadas: Barra -22.9745,-43.3916; Copacabana -22.9638,-43.1798

## Correção do erro Google Maps (resolvido)
- client/src/components/Map.tsx: loadMapScript com promise partilhada window.__gmapsLoadPromise,
  script com id "gmaps-js", sem remoção do elemento, loading=async, reject em onerror,
  init() com try/catch e guard de mapa já criado.
- client/src/components/ApartmentMap.tsx: sem mapId/styles; AdvancedMarkerElement com div custom.

## Checkpoints
- d8c68457: inicial
- af0ca493: landing completa + correção maps (não guardado ainda após correção maps — guarda checkpoint)

## Diagnóstico do erro dos mapas (20/08 19:46)
O erro original "API loaded multiple times" foi resolvido. Restou o diálogo do Google
"This page can't load Google Maps correctly. Do you own this website?" sobre os mapas.
Evidências no browser real: window.google existe, script gmaps-js carrega do proxy
forge.manus.ai/v1/maps/proxy, manual new google.maps.Map() funciona no console, mas os
mapas do DOM mostram o alertdialog de erro. Suspeita do agente debug: problema de
autenticação/autorização do key passado ao proxy (RefererNotAllowed/InvalidKey).
A solução robusta: remover dependência do proxy MapView com autenticação e usar mapa
estático/iframe embed do Google Maps (não requer key do utilizador) em ApartmentMap.

## Dados reais fornecidos pelo utilizador (20/08)
- WhatsApp: 5521998502505
- Apt1 (Barra): https://www.airbnb.com.br/rooms/1400085363404009600 — "Flat verano stay barra olímpica! Novo! Clean."
- Apt2 (Copa): https://www.airbnb.com.br/rooms/969086169262685020 — "Apt reformado! Clean! Cama king! Esquina praia!"
- Apt1 confirmado: no Condomínio Verano Stay, Barra Olímpica. Apt2 confirmado: esquina da praia de Copacabana (bairro "Praia de Copacabana").
- Coordenadas: procurar local exato do Condomínio Verano Stay (Barra) e esquina de praia (Copa).

## Coordenadas geocodificadas (Nominatim, 20/08)
- Verano Stay (Rua Escultor Sergio Camargo, 50, Rio 2, Barra Olímpica): -22.9689832, -43.3877902
- Copacabana (Av. Atlântica, Copacabana): -22.9792834, -43.1893708 (trecho norte da praia)

## Verificação final (20/08 19:58)
Todos os links confirmados no browser real: header WhatsApp e CTAs apontam para
wa.me/5521998502505 com mensagens pré-preenchidas; CTA Airbnb do Flat Verano Stay aponta
para rooms/1400085363404009600; CTA do Apto Copacabana para rooms/969086169262685020.
Mapas: pin do Verano Stay agora cai em cima do Condomínio Rio2/Verano Stay (mapa esquerdo)
e o de Copacabana fica na Av. Atlântica junto ao Posto 5 (mapa direito) — coordenadas exatas.
Resta: guardar checkpoint e entregar.
