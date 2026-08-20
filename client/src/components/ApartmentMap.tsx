/*
 * DESIGN "Aquarela Carioca": mapa do apartamento com pin personalizado em terracota,
 * estilo limpo, emoldurado com arco carioca sutil.
 */
import { useEffect, useRef } from "react";
import { MapView } from "@/components/Map";

interface ApartmentMapProps {
  lat: number;
  lng: number;
  label: string;
  accent: "olive" | "seablue";
}

export default function ApartmentMap({ lat, lng, label, accent }: ApartmentMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const pinColor = accent === "olive" ? "#A08233" : "#7BA7BC";

  const onMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    map.setOptions({
      center: { lat, lng },
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "geometry.fill", stylers: [{ color: "#faf6ef" }] },
        { elementType: "geometry.stroke", stylers: [{ color: "#e8dfd0" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#cde0e8" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#d8e4d0" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#efe9dd" }] },
      ],
    });
    new google.maps.Marker({
      position: { lat, lng },
      map,
      title: label,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#B4562F",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 3,
      },
    });
  };

  useEffect(() => {
    if (mapRef.current) mapRef.current.setCenter({ lat, lng });
  }, [lat, lng]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm" style={{ height: 380 }}>
      <MapView className="h-full w-full" onMapReady={onMapReady} />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-card/95 px-4 py-2 shadow-sm backdrop-blur-sm">
        <span className="label-eyebrow flex items-center gap-2 text-terracotta">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: pinColor }} />
          {label}
        </span>
      </div>
    </div>
  );
}
