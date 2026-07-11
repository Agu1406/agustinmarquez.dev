"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export function BarberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gradient = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: "#1a1410", enabled: true },
        { color: "#2c2218", enabled: true },
        { color: "#4a3a28", enabled: true },
        { color: "#8b6914", enabled: true },
        { color: "#c9a227", enabled: true },
      ],
      speed: 0.12,
      horizontalPressure: 3,
      verticalPressure: 2,
      waveFrequencyX: 1.2,
      waveFrequencyY: 1.8,
      waveAmplitude: 5,
      shadows: 14,
      highlights: 8,
      colorBrightness: 0.85,
      colorSaturation: 1.4,
      colorBlending: 4,
      backgroundColor: "#0f0d0b",
      backgroundAlpha: 1,
      grainIntensity: 0.45,
      grainScale: 2.5,
      grainSparsity: 0,
      grainSpeed: 0,
      resolution: 1,
      yOffset: 0,
      yOffsetWaveMultiplier: 6,
      yOffsetColorMultiplier: 5,
      yOffsetFlowMultiplier: 7,
      flowDistortionA: 0.8,
      flowDistortionB: 1.6,
      flowScale: 1.2,
      flowEase: 0.35,
      flowEnabled: false,
      enableProceduralTexture: false,
      textureVoidLikelihood: 0.04,
      textureVoidWidthMin: 10,
      textureVoidWidthMax: 400,
      textureBandDensity: 0.6,
      textureColorBlending: 0.05,
      textureSeed: 777,
      textureEase: 0.3,
      proceduralBackgroundColor: "#1a1410",
      textureShapeTriangles: 12,
      textureShapeCircles: 10,
      textureShapeBars: 8,
      textureShapeSquiggles: 6,
      domainWarpEnabled: false,
      domainWarpIntensity: 0,
      domainWarpScale: 3,
      vignetteIntensity: 0.35,
      vignetteRadius: 0.75,
      fresnelEnabled: false,
      fresnelPower: 2,
      fresnelIntensity: 0.4,
      fresnelColor: "#c9a227",
      iridescenceEnabled: false,
      iridescenceIntensity: 0.3,
      iridescenceSpeed: 0.8,
      bloomIntensity: 0.08,
      bloomThreshold: 0.65,
      chromaticAberration: 0,
      wireframe: false,
    });

    const onScroll = () => {
      gradient.yOffset = window.scrollY * 0.2;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
  );
}
