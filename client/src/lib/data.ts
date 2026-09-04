/**
 * Dados centrais da landing page — M Apartments no Rio.
 * DESIGN "Aquarela Carioca": acento dourado-oliva para a Barra, azul suave para Copacabana.
 *
 * PLACEHOLDERS marcados com TODO: substituir por links reais do Airbnb, número de WhatsApp
 * e URLs de vídeos/fotos reais quando disponíveis.
 */

export const WHATSAPP_NUMBER = "5521998502505";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const APT1 = {
  id: "verano-stay",
  slug: "verano-stay",
  name: "Flat Verano Stay",
  neighborhood: "Barra Olímpica",
  shortName: "Flat Verano Stay (Barra)",
  tagline: "Vista para a Pedra da Gávea, dentro de um condomínio-resort",
  rating: 4.97,
  reviewsCount: 58,
  badge: "Top 5% das acomodações",
  capacity: 4,
  bedrooms: 1,
  beds: "Cama queen + sofá-cama de casal",
  bathrooms: 1,
  accent: "olive" as const,
  videoUrl: "", // TODO: URL do vídeo-tour real (mp4/webm)
  posterUrl: "/manus-storage/01-sala-de-estar2_599ddeaf.avif",
  gallery: [
    { src: "/manus-storage/01-sala-de-estar2_599ddeaf.avif", alt: "Sala de estar do Flat Verano Stay" },
    { src: "/manus-storage/02-sala-de-estar_70ac058d.avif", alt: "Sala de estar do Flat Verano Stay" },
    { src: "/manus-storage/03-sala-de-estar4_9140d45f.avif", alt: "Detalhe da sala de estar do Flat Verano Stay" },
    { src: "/manus-storage/04-sala-de-estar3_fe30cf1c.avif", alt: "Outro ângulo da sala de estar do Flat Verano Stay" },
    { src: "/manus-storage/05-quarto_0f840b73.avif", alt: "Quarto do Flat Verano Stay" },
    { src: "/manus-storage/06-quarto2_1ae664b3.avif", alt: "Quarto do Flat Verano Stay" },
    { src: "/manus-storage/07-quarto3_edf46b07.avif", alt: "Detalhe do quarto do Flat Verano Stay" },
    { src: "/manus-storage/08-quarto4_2d8da21d.avif", alt: "Outro ângulo do quarto do Flat Verano Stay" },
    { src: "/manus-storage/09-quarto5_af3f1b30.avif", alt: "Detalhe da acomodação do Flat Verano Stay" },
    { src: "/manus-storage/10-quarto6_5b6e2df6.avif", alt: "Detalhe do quarto do Flat Verano Stay" },
    { src: "/manus-storage/11-quarto7_07af0f2a.avif", alt: "Vista adicional do quarto do Flat Verano Stay" },
    { src: "/manus-storage/12-cozinha-completa_f8a8d030.avif", alt: "Cozinha completa do Flat Verano Stay" },
    { src: "/manus-storage/13-area-de-jantar3_90b19b85.avif", alt: "Área de jantar do Flat Verano Stay" },
    { src: "/manus-storage/14-area-de-jantar_03a64f61.avif", alt: "Área de jantar do Flat Verano Stay" },
    { src: "/manus-storage/15-area-e-jantar2_5ccccb8e.avif", alt: "Sala e área de jantar do Flat Verano Stay" },
    { src: "/manus-storage/16-banheiro_bd774cc3.avif", alt: "Banheiro do Flat Verano Stay" },
    { src: "/manus-storage/17-academia_d8c7d7cb.avif", alt: "Academia do condomínio Verano Stay" },
    { src: "/manus-storage/18-exterior_a1e4391d.webp", alt: "Área externa do condomínio Verano Stay" },
  ],
  amenities: [
    { icon: "car", label: "Vaga de garagem incluída", detail: "Estacionamento gratuito", featured: true },
    { icon: "eye", label: "Vista livre", detail: "Pedra da Gávea e Lagoa, sol da manhã" },
    { icon: "waves", label: "Piscina", detail: "Condomínio com infraestrutura completa", featured: true },
    { icon: "dumbbell", label: "Academia", detail: "No condomínio" },
    { icon: "flame", label: "Sauna", detail: "No condomínio" },
    { icon: "utensils", label: "Restaurante", detail: "Dentro do condomínio" },
    { icon: "snowflake", label: "Ar-condicionado split", detail: "Conforto o ano inteiro" },
    { icon: "chef", label: "Cozinha completa", detail: "Equipada para cozinhar" },
    { icon: "wifi", label: "Wi-fi", detail: "Banda larga" },
    { icon: "tv", label: "TV a cabo", detail: "Na sala" },
    { icon: "washing", label: "Máquina de lavar", detail: "No apartamento" },
    { icon: "bed", label: "Roupa de cama 100% algodão", detail: "Conforto de hotel" },
  ],
  /** Comodidades principais que aparecem em destaque antes do tour em vídeo */
  highlights: ["Vista para a Pedra da Gávea", "Piscina, sauna e academia no condomínio", "Vaga de garagem gratuita", "Recepção 24h com check-in na portaria"],
  locationTitle: "Localização e vista",
  locationText:
    "No Condomínio Verano Stay, a poucos minutos do Parque Olímpico e da estação do BRT. Amanhecer com sol da manhã e vista livre para a Pedra da Gávea e a Lagoa de Jacarepaguá. Recepção 24h do condomínio: o check-in é feito na portaria, com total segurança.",
  locationPoints: ["Próximo ao Parque Olímpico", "Estação do BRT a pé", "Recepção 24h (check-in na portaria)"],
  review: {
    name: "Hiago",
    text: "O Flat é perfeito pra quem busca um lugar tranquilo e aconchegante no Rio... prédio muito bem localizado.",
    rating: 5,
  },
  whatsappMessage: "Olá! Tenho interesse no Flat Verano Stay, Barra Olímpica",
  airbnbUrl:
    "https://www.airbnb.com.br/rooms/1400085363404009600?viralityEntryPoint=1&s=76&slug=nhlWjM2y",
  /** URL com o calendário do Airbnb já aberto na página do anúncio */
  calendarUrl:
    "https://www.airbnb.com.br/rooms/1400085363404009600?calendar=1",
};

export const APT2 = {
  id: "copacabana",
  slug: "copacabana",
  name: "Apto Reformado",
  neighborhood: "Copacabana",
  shortName: "Apto Copacabana (Praia)",
  tagline: "Na esquina da praia, recém-reformado e de acesso fácil",
  rating: 4.86,
  reviewsCount: 129,
  badge: "Top 10% das acomodações",
  capacity: 4,
  bedrooms: 1,
  beds: "Cama king size + sofá-cama",
  bathrooms: 1,
  accent: "seablue" as const,
  videoUrl: "", // TODO: URL do vídeo-tour real (mp4/webm)
  posterUrl: "/manus-storage/apt2-living.jpg",
  gallery: [
    { src: "/manus-storage/apt2-living.jpg", alt: "Sala reformada do apartamento em Copacabana" },
    { src: "/manus-storage/apt2-bedroom_95f57120.jpg", alt: "Quarto com cama king size" },
    { src: "/manus-storage/copacabana-beach_83f6ed90.jpg", alt: "Praia de Copacabana" },
    { src: "/manus-storage/copacabana-aerial_7020a0bc.jpg", alt: "Vista aérea de Copacabana" },
  ],
  amenities: [
    { icon: "umbrella", label: "Acesso à praia", detail: "Prédio na esquina da praia", featured: true },
    { icon: "key", label: "Self check-in", detail: "Fechadura eletrônica, a qualquer hora", featured: true },
    { icon: "shield", label: "Portaria 24h", detail: "Segurança o tempo todo" },
    { icon: "tv", label: "TV Smart", detail: "No quarto e na sala" },
    { icon: "wind", label: "Ventiladores de teto", detail: "Brisa do mar no quarto e na sala" },
    { icon: "suitcase", label: "Espaço para bagagem", detail: "Pode deixar as malas antes/depois do horário" },
    { icon: "elevator", label: "Elevador", detail: "Prédio com elevador" },
    { icon: "snowflake", label: "Ar-condicionado", detail: "No quarto" },
    { icon: "bed", label: "Roupas de cama e banho 100% algodão", detail: "Conforto de hotel" },
  ],
  locationTitle: "Esquina da praia",
  locationText:
    "Copacabana, num prédio de esquina com acesso direto à praia. Apartado recém-reformado, clean e prático: você chega a qualquer hora com a fechadura eletrônica e sai para a areia em menos de um minuto.",
  locationPoints: ["Esquina da praia de Copacabana", "Acesso fácil ao calçadão", "Self check-in com fechadura eletrônica"],
  review: {
    name: "José",
    text: "Foi uma excelente estadia em Copacabana. O espaço é bem amplo, muito bem localizado, acesso fácil, instruções claras.",
    rating: 5,
  },
  whatsappMessage: "Olá! Tenho interesse no Apto Copacabana, esquina da praia",
  airbnbUrl: "https://www.airbnb.com.br/rooms/969086169262685020",
  /** URL com o calendário do Airbnb já aberto na página do anúncio */
  calendarUrl: "https://www.airbnb.com.br/rooms/969086169262685020?calendar=1",
  /** Comodidades principais que aparecem em destaque antes do tour em vídeo */
  highlights: ["Prédio na esquina da praia de Copacabana", "Self check-in com fechadura eletrônica", "Cama king size + sofá-cama", "Portaria 24h com espaço para bagagem"],
};

export const HOST = {
  name: "M Apartments",
  years: 7,
  reviewsCount: 408,
  rating: 4.94,
};

export const ALL_REVIEWS = [
  // Flat Verano Stay (Barra)
  { apt: "verano", name: "Hiago", text: "O Flat é perfeito pra quem busca um lugar tranquilo e aconchegante no Rio... prédio muito bem localizado.", rating: 5, date: "2026-06" },
  { apt: "verano", name: "Evelyn", text: "Apartamento impecável, roupa de cama de hotel e vista linda. O condomínio tem tudo: piscina, sauna e restaurante.", rating: 5, date: "2026-05" },
  { apt: "verano", name: "Davi", text: "A vaga de garagem foi um diferencial enorme pra nós. Check-in na portaria foi simples e rápido.", rating: 5, date: "2026-04" },
  { apt: "verano", name: "Lucas", text: "Vista para a Pedra da Gávea no café da manhã não tem preço. Localização ótima, perto do BRT.", rating: 5, date: "2026-03" },
  { apt: "verano", name: "Jerusa", text: "Tudo muito limpo e organizado. A equipa responde rapidinho e dá ótimas dicas da região.", rating: 5, date: "2026-02" },
  { apt: "verano", name: "Bruna", text: "Voltaria com certeza. Apartamento aconchegante e condomínio super completo, perfeito pra descansar.", rating: 5, date: "2026-01" },
  // Apto Copacabana
  { apt: "copacabana", name: "José", text: "Foi uma excelente estadia em Copacabana. O espaço é bem amplo, muito bem localizado, acesso fácil, instruções claras.", rating: 5, date: "2026-07" },
  { apt: "copacabana", name: "Erica", text: "Apartamento reformado, tudo novo e clean. A esquina da praia facilitou tudo: acordávamos e já estávamos na areia.", rating: 5, date: "2026-06" },
  { apt: "copacabana", name: "Alessandro", text: "Self check-in perfeito pra quem chega tarde. Fechadura eletrônica sem complicação, portaria atenciosa.", rating: 5, date: "2026-05" },
  { apt: "copacabana", name: "Leticia", text: "TV Smart no quarto, cama king confortável, tudo funcionando. Voltaria sem pensar duas vezes.", rating: 5, date: "2026-04" },
  { apt: "copacabana", name: "Gabryela", text: "Pudemos deixar as malas depois do checkout e aproveitar o dia inteiro na praia. Anfitrião muito atencioso.", rating: 5, date: "2026-03" },
  { apt: "copacabana", name: "Debora", text: "Localização privilegiada, apartamento cheiroso e roupas de cama de algodão de verdade. Nota 10.", rating: 5, date: "2026-02" },
];

export type ReviewSort = "recent" | "rating";

export type FaqCategory = "checkin" | "regras" | "regiao";

export const FAQ_GROUPS: { category: FaqCategory; label: string }[] = [
  { category: "checkin", label: "Check-in e horários" },
  { category: "regras", label: "Regras da casa" },
  { category: "regiao", label: "Dicas sobre a região" },
];

export const FAQ = [
  // Check-in e horários
  {
    category: "checkin",
    q: "Qual o horário de check-in e checkout?",
    a: "Check-in a partir das 14h e checkout até às 11h. No Apto de Copacabana o self check-in com fechadura eletrônica permite entrar a qualquer hora após o horário liberado, sem depender de agenda.",
  },
  {
    category: "checkin",
    q: "Como faço o check-in em cada apartamento?",
    a: "No Flat Verano Stay (Barra), o check-in é feito na portaria do condomínio, que tem recepção 24h. Em Copacabana, o self check-in é feito com fechadura eletrônica — você recebe o código antes da chegada e entra com total liberdade.",
  },
  {
    category: "checkin",
    q: "Posso deixar bagagem fora do horário?",
    a: "Sim, no Apto de Copacabana é permitido deixar as malas antes do check-in ou depois do checkout (conforme disponibilidade). Na Barra, a portaria 24h ajuda na logística da sua chegada e partida.",
  },
  // Regras da casa
  {
    category: "regras",
    q: "Quais são as regras da casa?",
    a: "Ambos os apartamentos são para não fumantes. Festas e eventos não são permitidos. No condomínio da Barra, os hóspedes seguem as normas internas (horários da piscina e áreas comuns, silêncio a partir das 22h). Animais de estimação e visitas devem ser combinados antes da reserva.",
  },
  {
    category: "regras",
    q: "Existe taxa de limpeza ou depósito de segurança?",
    a: "A taxa de limpeza já está incluída no valor do anúncio no Airbnb. Não há depósito de segurança para estadias curtas — tudo fica transparente no momento da reserva, sem surpresas.",
  },
  {
    category: "regras",
    q: "É permitido fumar ou fazer festas?",
    a: "Não. Os dois apartamentos são 100% não fumantes e festas não são permitidas. O condomínio da Barra tem regras de silêncio e uso das áreas comuns que valem para todos os hóspedes.",
  },
  // Capacidade e logística
  {
    category: "checkin",
    q: "Quantos hóspedes cada apartamento acomoda?",
    a: "Ambos acomodam até 4 hóspedes. O Flat da Barra tem cama queen e sofá-cama que vira cama de casal; o de Copacabana tem cama king size e sofá-cama.",
  },
  {
    category: "checkin",
    q: "Preciso de carro na Barra?",
    a: "Não necessariamente: o condomínio fica próximo à estação do BRT e o Flat inclui vaga de garagem gratuita para quem preferir dirigir.",
  },
  {
    category: "checkin",
    q: "Como reservo diretamente, sem passar pelo site?",
    a: "Você pode reservar pelos anúncios no Airbnb ou falar diretamente pelo WhatsApp — a equipa ajuda com datas, valores e qualquer dúvida antes de você reservar.",
  },
  // Dicas da região
  {
    category: "regiao",
    q: "O que há para fazer perto do Flat na Barra?",
    a: "A região da Barra Olímpica tem o Parque Olímpico para caminhadas, a Praia da Reserva e a Praia de Grumari a poucos minutos de carro, além do VillageMall e do Parque das Dunas. O condomínio também tem piscina, sauna, academia e restaurante internos.",
  },
  {
    category: "regiao",
    q: "O que fazer perto do apartamento em Copacabana?",
    a: "Estando na esquina da praia, você está a minutos do Posto 5, do Forte de Copacabana e do calçadão de mosaico. Há farmácias, padarias, restaurantes e supermercados ao redor, e o metrô de Siqueira Campos fica a poucos quarteirões.",
  },
  {
    category: "regiao",
    q: "Como chegar de cada apartamento ao Pão de Açúcar ou à Lagoa?",
    a: "De Copacabana, o acesso é rápido pela Avenida Atlântica de carro ou ônibus. Da Barra, dá para ir pelo Túnel da Joatinga em cerca de 30–40 minutos de carro, ou de BRT + metrô. Você pode receber o melhor caminho pelo WhatsApp antes da sua chegada.",
  },
  {
    category: "regiao",
    q: "Vale a pena ir ao Rio no Ano Novo ou no Carnaval?",
    a: "Sim — mas as datas altas esgotam rápido. Para o Réveillon, o apartamento de Copacabana fica a passos da festa na praia; para o Carnaval, ambos são base prática para os blocos. Reserve com antecedência e fale pelo WhatsApp sobre valores de alta temporada.",
  },
];

export const ASSETS = {
  logo: "/manus-storage/logo2_01397879.png",
  hero: "/manus-storage/hero-rio_4f1073a1.jpg",
};
