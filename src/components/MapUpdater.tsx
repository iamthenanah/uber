"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapUpdaterProps {
  center: LatLngExpression;
}

const MapUpdater = ({ center }: MapUpdaterProps) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });
  }, [center, map]);

  return null;
};

export default MapUpdater;
