"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export function AnimatedNeatBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gradient = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: "#ffbe0b", enabled: true },
        { color: "#fb5607", enabled: true },
        { color: "#ff006e", enabled: true },
        { color: "#8338ec", enabled: true },
        { color: "#3a86ff", enabled: true },
      ],
      speed: 0.25,
      horizontalPressure: 2,
      verticalPressure: 2,
      waveFrequencyX: 1,
      waveFrequencyY: 2,
      waveAmplitude: 7,
      shadows: 10,
      highlights: 10,
      colorBrightness: 1,
      colorSaturation: 2,
      colorBlending: 5,
      backgroundColor: "#FFBE0B",
      backgroundAlpha: 1,
      grainIntensity: 0.3,
      grainScale: 2,
      grainSparsity: 0,
      grainSpeed: 0,
      resolution: 1,
      yOffset: 1594,
      yOffsetWaveMultiplier: 9,
      yOffsetColorMultiplier: 8.5,
      yOffsetFlowMultiplier: 9.5,
      flowDistortionA: 1.2,
      flowDistortionB: 2.4,
      flowScale: 1.5,
      flowEase: 0.41,
      flowEnabled: false,
      enableProceduralTexture: false,
      textureVoidLikelihood: 0.06,
      textureVoidWidthMin: 10,
      textureVoidWidthMax: 500,
      textureBandDensity: 0.8,
      textureColorBlending: 0.06,
      textureSeed: 333,
      textureEase: 0.32,
      proceduralBackgroundColor: "#FFED00",
      textureShapeTriangles: 20,
      textureShapeCircles: 15,
      textureShapeBars: 15,
      textureShapeSquiggles: 10,
      domainWarpEnabled: false,
      domainWarpIntensity: 0,
      domainWarpScale: 3,
      vignetteIntensity: 0,
      vignetteRadius: 0.8,
      fresnelEnabled: false,
      fresnelPower: 2,
      fresnelIntensity: 0.5,
      fresnelColor: "#FFFFFF",
      iridescenceEnabled: false,
      iridescenceIntensity: 0.5,
      iridescenceSpeed: 1,
      bloomIntensity: 0,
      bloomThreshold: 0.7,
      chromaticAberration: 0,
      wireframe: false,
    });

    const onScroll = () => {
      gradient.yOffset = window.scrollY * 0.35;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full opacity-100" />
    </div>
  );
}
