/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 8000,
  mapBrightness: 2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [],
};

export function GlobeLight({
  className,
  config = DEFAULT_CONFIG,
  isDark = false,
}: {
  className?: string;
  config?: COBEOptions;
  isDark?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const movementDelta = useRef(0);
  const [rotationOffset, setRotationOffset] = useState(0);
  const widthRef = useRef(0);
  const phiRef = useRef(0);

  const handlePointerStart = (clientX: number) => {
    pointerStartX.current = clientX - movementDelta.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  };

  const handlePointerEnd = () => {
    pointerStartX.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };

  const handlePointerMove = (clientX: number) => {
    if (pointerStartX.current !== null) {
      const delta = clientX - pointerStartX.current;
      movementDelta.current = delta;
      setRotationOffset(delta / 200);
    }
  };

  const handleResize = () => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (pointerStartX.current === null) phiRef.current += 0.005;
      state.phi = phiRef.current + rotationOffset;
      state.width = widthRef.current * 2;
      state.height = widthRef.current * 2;
    },
    [rotationOffset]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      dark: isDark ? 1 : 0,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    const canvas = canvasRef.current!;
    canvas.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [config, isDark, onRender]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => handlePointerStart(e.clientX)}
        onPointerUp={handlePointerEnd}
        onPointerOut={handlePointerEnd}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onTouchMove={(e) =>
          e.touches.length > 0 && handlePointerMove(e.touches[0].clientX)
        }
      />
    </div>
  );
}