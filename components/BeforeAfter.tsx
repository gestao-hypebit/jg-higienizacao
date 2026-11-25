"use client";

import { useEffect, useRef, useState } from "react";
import { paintFabric } from "@/lib/fabric";

type Props = {
  title: string;
  sub: string;
  before: string;
  after: string;
  fabric: readonly [number, number, number];
  big?: boolean;
};

const exists = (src: string) =>
  new Promise<boolean>((ok) => {
    const i = new Image();
    i.onload = () => ok(true);
    i.onerror = () => ok(false);
    i.src = src;
  });

export default function BeforeAfter({ title, sub, before, after, fabric, big }: Props) {
  const [p, setP] = useState(50);
  const [photos, setPhotos] = useState<boolean | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLCanvasElement>(null);
  const aRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    Promise.all([exists(before), exists(after)]).then(([b, a]) => setPhotos(a && b));
  }, [before, after]);

  useEffect(() => {
    if (photos !== false) return;
    const draw = () => {
      const f = frameRef.current;
      if (!f) return;
      const r = f.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      ([[bRef.current, true], [aRef.current, false]] as const).forEach(([c, dirty]) => {
        if (!c) return;
        c.width = Math.round(r.width * d);
        c.height = Math.round(r.height * d);
        paintFabric(c.getContext("2d")!, c.width, c.height, fabric, dirty, d);
      });
    };
    draw();
    let t: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => { clearTimeout(t); t = setTimeout(draw, 150); });
    if (frameRef.current) ro.observe(frameRef.current);
    return () => { ro.disconnect(); clearTimeout(t); };
  }, [photos, fabric]);

  return (
    <figure className={`ba reveal${big ? " big" : ""}`}>
      <div className="frame" ref={frameRef} style={{ "--p": `${p}%` } as React.CSSProperties}>
        <div className="layer before" style={photos ? { backgroundImage: `url("${before}")` } : undefined}>
          {photos === false && <canvas ref={bRef} />}
        </div>
        <div className="layer after" style={photos ? { backgroundImage: `url("${after}")` } : undefined}>
          {photos === false && <canvas ref={aRef} />}
        </div>
        <span className="lbl l mono">Antes</span>
        <span className="lbl r mono">Depois</span>
        <input
          type="range"
          min={0}
          max={100}
          value={p}
          onChange={(e) => setP(Number(e.target.value))}
          aria-label={`Comparar antes e depois: ${title}`}
        />
        <span className="handle" />
      </div>
      <figcaption><b>{title}</b><span>{sub}</span></figcaption>
    </figure>
  );
}
