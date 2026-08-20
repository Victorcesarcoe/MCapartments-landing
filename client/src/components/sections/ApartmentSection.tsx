/*
 * DESIGN "Aquarela Carioca": bloco de apartamento em grid assimétrico 7/5 —
 * vídeo-tour em destaque (moldura de arco), selo "Preferido dos hóspedes" como carimbo,
 * grid de comodidades, bloco de localização, depoimento e CTA duplo (Airbnb + WhatsApp).
 * Verano Stay: fundo off-white; Copacabana: fundo azul-suíço muito suave.
 */
import { APT1, APT2, WHATSAPP_BASE } from "@/lib/data";
import TourVideo from "@/components/TourVideo";
import PhotoGallery from "@/components/PhotoGallery";
import GuestFavoriteBadge from "@/components/GuestFavoriteBadge";
import AmenityIcon from "@/components/AmenityIcon";
import { Star, MapPin, Users, BedDouble, Bath, MessageCircle, ExternalLink, Quote, Sparkles, Award, ShieldCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Apt = {
  id: string;
  slug: string;
  name: string;
  neighborhood: string;
  shortName: string;
  tagline: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  capacity: number;
  bedrooms: number;
  beds: string;
  bathrooms: number;
  accent: "olive" | "seablue";
  videoUrl: string;
  posterUrl: string;
  gallery: { src: string; alt: string }[];
  highlights?: string[];
  amenities: { icon: string; label: string; detail: string; featured?: boolean }[];
  locationTitle: string;
  locationText: string;
  locationPoints: string[];
  review: { name: string; text: string; rating: number };
  whatsappMessage: string;
  airbnbUrl: string;
  calendarUrl?: string;
};

interface Props {
  apt: Apt;
  reversed?: boolean;
  theme: "barra" | "copa";
}

export default function ApartmentSection({ apt, reversed, theme }: Props) {
  const bg = theme === "barra" ? "bg-background" : "bg-[#eef5f7]";
  const accentText = apt.accent === "olive" ? "text-olive" : "text-seablue";

  return (
    <section id={apt.id} className={`${bg} py-20 lg:py-28`}>
      <div className="container">
        {/* Cabeçalho do apartamento */}
        <div className="reveal mb-12 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div className={reversed ? "lg:order-2 lg:pl-10" : "lg:pr-10"}>
            <p className="label-eyebrow mb-3 flex items-center gap-2 text-terracotta">
              <MapPin className="h-4 w-4" />
              {apt.neighborhood} · Rio de Janeiro
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              {apt.name}{" "}
              <em className={`font-serif ${accentText}`}>· {apt.neighborhood}</em>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{apt.tagline}</p>
          </div>
          <div className={`flex lg:justify-end ${reversed ? "lg:order-1" : ""}`}>
            <GuestFavoriteBadge
              rating={apt.rating}
              reviewsCount={apt.reviewsCount}
              badge={apt.badge}
              variant={apt.accent}
            />
          </div>
        </div>

        {/* Vídeo + galeria (assimetria 7/5) */}
        <div className={`grid gap-8 lg:grid-cols-[7fr_5fr] ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="reveal order-1">
            <p className="label-eyebrow mb-4 text-terracotta">Tour em vídeo</p>
            <TourVideo
              videoUrl={apt.videoUrl}
              posterUrl={apt.posterUrl}
              alt={`Tour em vídeo pelo ${apt.name} em ${apt.neighborhood}`}
              accent={apt.accent}
            />
          </div>
          <div className="reveal order-2">
            <p className="label-eyebrow mb-4 text-terracotta">Fotos</p>
            <PhotoGallery photos={apt.gallery} accent={apt.accent} shareTitle={apt.name} shareUrl={apt.airbnbUrl} />
            {/* Ficha rápida */}
            <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-4">
              <div className="flex items-center gap-2.5">
                <Users className="h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-semibold">{apt.capacity}</p>
                  <p className="text-xs text-muted-foreground">hóspedes</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <BedDouble className="h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-semibold">{apt.bedrooms} quarto</p>
                  <p className="text-xs text-muted-foreground">{apt.beds}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Bath className="h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-semibold">{apt.bathrooms} banheiro</p>
                  <p className="text-xs text-muted-foreground">privativo</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="h-5 w-5 shrink-0 fill-[#E5B94B] text-[#E5B94B]" />
                <div>
                  <p className="text-sm font-semibold">{apt.rating.toFixed(2).replace(".", ",")}</p>
                  <p className="text-xs text-muted-foreground">{apt.reviewsCount} avaliações</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comodidades em destaque */}
        {apt.highlights && apt.highlights.length > 0 && (
          <div className="reveal mt-14">
            <p className="label-eyebrow mb-6 flex items-center gap-2 text-terracotta">
              <Sparkles className="h-4 w-4" />
              Os destaques do {apt.name}
            </p>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {apt.highlights.map((h) => (
                <div
                  key={h}
                  className="card-lift rounded-2xl border border-terracotta/30 bg-card p-5 shadow-[0_14px_32px_-16px_rgba(180,86,47,0.35)]"
                >
                  <Sparkles className={`mb-3 h-5 w-5 ${accentText}`} />
                  <p className="text-sm font-semibold leading-snug text-foreground">{h}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comodidades completas */}
        <div className="reveal mt-14">
          <p className="label-eyebrow mb-6 text-terracotta">O que você encontra aqui</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {apt.amenities.map((a) => (
              <div
                key={a.label}
                className={`card-lift flex items-start gap-3.5 rounded-xl border bg-card p-4 shadow-sm ${
                  a.featured ? "border-terracotta/40 ring-1 ring-terracotta/15" : "border-border"
                }`}
              >
                <AmenityIcon name={a.icon} className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="flex items-start gap-1.5 text-sm font-semibold leading-snug">
                    {a.label}
                    {a.featured && (
                      <span className="label-eyebrow mt-0.5 rounded-full bg-terracotta/10 px-1.5 py-0.5 text-[9px] text-terracotta">
                        destaque
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Localização */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[5fr_7fr]">
          <div className={`reveal ${reversed ? "lg:order-2 lg:pl-10" : "lg:pr-10"}`}>
            <p className="label-eyebrow mb-4 text-terracotta">Localização</p>
            <h3 className="font-serif text-2xl font-semibold sm:text-3xl">{apt.locationTitle}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{apt.locationText}</p>
            <ul className="mt-5 space-y-2.5">
              {apt.locationPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-terracotta" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className={`reveal ${reversed ? "lg:order-1" : ""}`}>
            <blockquote className="card-lift relative rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Quote className={`absolute right-6 top-6 h-10 w-10 ${accentText} opacity-30`} />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: apt.review.rating }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-[#E5B94B] text-[#E5B94B]" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed italic">“{apt.review.text}”</p>
              <p className="mt-4 label-eyebrow text-sm text-terracotta">— {apt.review.name}</p>
            </blockquote>
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal mt-14 rounded-3xl border border-border bg-card p-8 shadow-[0_20px_50px_-24px_rgba(46,74,59,0.35)] lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Reserve o {apt.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Direto pelo Airbnb ou fale com o Mauricio no WhatsApp para combinar datas e valores.
              </p>
              {/* Selo Superhost com tooltip explicativo */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="mt-4 inline-flex cursor-help items-center gap-2.5 rounded-lg border border-[#1f3328]/15 bg-[#1f3328]/5 px-4 py-2.5 transition-colors duration-200 hover:bg-[#1f3328]/10">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f3328] shadow-[0_2px_8px_-2px_rgba(31,51,40,0.4)]">
                        <Award className="h-5 w-5 text-[#d4a853]" />
                      </span>
                      <div className="leading-tight">
                        <span className="block text-sm font-bold text-[#1f3328]">Airbnb Superhost</span>
                        <span className="block text-xs text-muted-foreground">Reconhecimento oficial de excelência</span>
                      </div>
                      <ShieldCheck className="ml-1 h-5 w-5 text-[#1f3328]/40" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="start"
                    className="max-w-[320px] bg-[#1f3328] p-4 text-paper shadow-xl"
                    sideOffset={8}
                  >
                    <p className="mb-2 text-sm font-bold text-[#d4a853]">Critérios do programa Superhost</p>
                    <ul className="space-y-1.5 text-xs leading-relaxed text-paper/90">
                      <li className="flex items-start gap-2">
                        <Star className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#d4a853]" />
                        <span>Nota média de <strong>4,8+ em 5</strong> nas avaliações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#d4a853]" />
                        <span><strong>90% ou mais</strong> de taxa de resposta</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#d4a853]" />
                        <span><strong>Menos de 1%</strong> de cancelamentos pelo anfitrião</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#d4a853]" />
                        <span><strong>10+ hospedagens</strong> concluídas por ano</span>
                      </li>
                    </ul>
                    <p className="mt-2 border-t border-paper/20 pt-2 text-[10px] text-paper/60">
                      Avaliado trimestralmente pela Airbnb com base no desempenho real.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={apt.calendarUrl || apt.airbnbUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1f3328] bg-transparent px-7 py-4 font-semibold text-[#1f3328] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1f3328] hover:text-paper hover:shadow-[0_10px_28px_-8px_rgba(31,51,40,0.55)]"
              >
                <ExternalLink className="h-4.5 w-4.5" />
                Ver Disponibilidade
              </a>
              <a
                href={apt.airbnbUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 font-semibold text-primary-foreground shadow-[0_10px_28px_-8px_rgba(180,86,47,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-6px_rgba(180,86,47,0.65)] hover:brightness-110"
              >
                <ExternalLink className="h-4.5 w-4.5" />
                Reservar no Airbnb
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(apt.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-full bg-[#128C4A] px-7 py-4 font-semibold text-white shadow-[0_10px_28px_-8px_rgba(18,140,74,0.55)]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Reservar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
