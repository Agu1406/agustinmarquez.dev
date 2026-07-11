"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

/** Fondo: navy → azul Rolex con toque champagne (análogo frío + cálido sutil). */
export function BarberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gradient = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: "#232326", enabled: true },
        { color: "#0b2c75", enabled: true },
        { color: "#05409b", enabled: true },
        { color: "#4476c7", enabled: true },
        { color: "#d6ad53", enabled: true },
      ],
      speed: 0.1,
      horizontalPressure: 3,
      verticalPressure: 2,
      waveFrequencyX: 1.1,
      waveFrequencyY: 1.6,
      waveAmplitude: 4,
      shadows: 16,
      highlights: 6,
      colorBrightness: 0.78,
      colorSaturation: 1.25,
      colorBlending: 3.5,
      backgroundColor: "#232326",
      backgroundAlpha: 1,
      grainIntensity: 0.35,
      grainScale: 2.2,
      grainSparsity: 0,
      grainSpeed: 0,
      resolution: 1,
      yOffset: 0,
      yOffsetWaveMultiplier: 5,
      yOffsetColorMultiplier: 4,
      yOffsetFlowMultiplier: 6,
      flowDistortionA: 0.7,
      flowDistortionB: 1.4,
      flowScale: 1.1,
      flowEase: 0.32,
      flowEnabled: false,
      enableProceduralTexture: false,
      textureVoidLikelihood: 0.03,
      textureVoidWidthMin: 10,
      textureVoidWidthMax: 380,
      textureBandDensity: 0.55,
      textureColorBlending: 0.04,
      textureSeed: 888,
      textureEase: 0.28,
      proceduralBackgroundColor: "#0b2c75",
      textureShapeTriangles: 10,
      textureShapeCircles: 8,
      textureShapeBars: 6,
      textureShapeSquiggles: 5,
      domainWarpEnabled: false,
      domainWarpIntensity: 0,
      domainWarpScale: 3,
      vignetteIntensity: 0.42,
      vignetteRadius: 0.72,
      fresnelEnabled: false,
      fresnelPower: 2,
      fresnelIntensity: 0.35,
      fresnelColor: "#d6ad53",
      iridescenceEnabled: false,
      iridescenceIntensity: 0.25,
      iridescenceSpeed: 0.7,
      bloomIntensity: 0.06,
      bloomThreshold: 0.68,
      chromaticAberration: 0,
      wireframe: false,
    });

    const onScroll = () => {
      gradient.yOffset = window.scrollY * 0.18;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full opacity-[0.88]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#232326]/50 via-transparent to-[#0b2c75]/60" />
    </div>
  );
}
