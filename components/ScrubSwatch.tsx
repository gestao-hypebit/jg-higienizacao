"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { paintFabric } from "@/lib/fabric";

const COLS = 36;
const ROWS = 30;
const NEED = 0.58; // fração (com 2 passadas por célula) para considerar limpo
const BASE = [200, 205, 211] as const;

export default function ScrubSwatch() {
  const boxRef = useRef<HTMLDivElement>(null);
  const cleanRef = useRef<HTMLCanvasElement>(null);
  const dirtRef = useRef<HTMLCanvasElement>(null);
  const nozzleRef = useRef<HTMLDivElement>(null);
  const st = useRef({ W: 0, H: 0, dpr: 1, grid: new Uint8Array(COLS * ROWS), last: null as null | [number, number], down: false, done: false });

  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [touched, setTouched] = useState(false);
  const [hover, setHover] = useState(false);
  const [noAnim, setNoAnim] = useState(false);
  const [touchHint, setTouchHint] = useState(false);

  const setup = useCallback(() => {
    const box = boxRef.current, cc = cleanRef.current, cd = dirtRef.current;
    if (!box || !cc || !cd) return;
    const s = st.current;
    s.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = box.getBoundingClientRect();
    s.W = Math.round(r.width * s.dpr);
    s.H = Math.round(r.height * s.dpr);
    for (const c of [cc, cd]) { c.width = s.W; c.height = s.H; }
    paintFabric(cc.getContext("2d")!, s.W, s.H, BASE, false, s.dpr);
    paintFabric(cd.getContext("2d")!, s.W, s.H, BASE, true, s.dpr);
    s.grid = new Uint8Array(COLS * ROWS);
    s.done = false;
    s.last = null;
    setDone(false);
    setTouched(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    setTouchHint(window.matchMedia("(hover: none)").matches);
    setup();
    let t: ReturnType<typeof setTimeout>;
    let lastW = boxRef.current?.offsetWidth ?? 0;
    const ro = new ResizeObserver(() => {
      const w = boxRef.current?.offsetWidth ?? 0;
      if (w === lastW) return; // só redesenha se a largura mudou (evita resetar no scroll do mobile)
      lastW = w;
      clearTimeout(t);
      t = setTimeout(setup, 120);
    });
    if (boxRef.current) ro.observe(boxRef.current);
    const up = () => { st.current.down = false; st.current.last = null; };
    window.addEventListener("pointerup", up);
    return () => { ro.disconnect(); clearTimeout(t); window.removeEventListener("pointerup", up); };
  }, [setup]);

  const scrub = (x: number, y: number) => {
    const s = st.current;
    const ctx = dirtRef.current?.getContext("2d");
    if (s.done || !ctx) return;
    setTouched(true);
    const px = x * s.dpr, py = y * s.dpr;
    const br = Math.max(30, Math.min(s.W, s.H) * 0.075);
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(0,0,0,.5)"; // meia força: precisa de duas passadas, como esfregar de verdade
    ctx.lineWidth = br * 2;
    ctx.beginPath();
    if (s.last) ctx.moveTo(s.last[0], s.last[1]); else ctx.moveTo(px - 0.1, py);
    ctx.lineTo(px, py);
    ctx.stroke();

    const from = s.last ?? [px, py];
    const n = Math.max(1, Math.ceil(Math.hypot(px - from[0], py - from[1]) / (br * 0.6)));
    for (let k = 1; k <= n; k++) {
      const cx = from[0] + ((px - from[0]) * k) / n, cy = from[1] + ((py - from[1]) * k) / n;
      const gx0 = Math.max(0, Math.floor(((cx - br) / s.W) * COLS)), gx1 = Math.min(COLS - 1, Math.floor(((cx + br) / s.W) * COLS));
      const gy0 = Math.max(0, Math.floor(((cy - br) / s.H) * ROWS)), gy1 = Math.min(ROWS - 1, Math.floor(((cy + br) / s.H) * ROWS));
      for (let gy = gy0; gy <= gy1; gy++)
        for (let gx = gx0; gx <= gx1; gx++)
          if (s.grid[gy * COLS + gx] < 2) s.grid[gy * COLS + gx]++;
    }
    s.last = [px, py];
    let sum = 0;
    for (const g of s.grid) sum += g;
    const v = Math.min(1, sum / (s.grid.length * 2) / NEED);
    setProgress(v);
    if (v >= 1) { s.done = true; setDone(true); }
  };

  const pos = (e: React.PointerEvent): [number, number] => {
    const r = boxRef.current!.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };
  const onFinish = (e: React.PointerEvent) => !!(e.target as HTMLElement).closest(".finish");

  const reset = () => {
    setNoAnim(true);
    setup();
    requestAnimationFrame(() => requestAnimationFrame(() => setNoAnim(false)));
  };

  const pct = Math.round(progress * 100);
  const cls = ["swatch", done && "done", touched && "touched", hover && "hover"].filter(Boolean).join(" ");

  return (
    <div
      ref={boxRef}
      className={cls}
      aria-label="Demonstração interativa: passe o cursor ou o dedo sobre o tecido sujo para limpá-lo"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => { setHover(false); st.current.last = null; st.current.down = false; }}
      onPointerDown={(e) => {
        if (onFinish(e)) return;
        st.current.down = true;
        st.current.last = null;
        scrub(...pos(e));
      }}
      onPointerMove={(e) => {
        const [x, y] = pos(e);
        if (nozzleRef.current) nozzleRef.current.style.transform = `translate(${x}px,${y}px) rotate(-8deg)`;
        if (onFinish(e)) { st.current.last = null; return; }
        if (e.pointerType === "mouse" || st.current.down) scrub(x, y);
      }}
    >
      <canvas ref={cleanRef} aria-hidden="true" />
      <canvas ref={dirtRef} className="dirt" aria-hidden="true" style={noAnim ? { transition: "none" } : undefined} />
      <div className="tag">
        <span className="tag-k">Demonstração</span>
        <strong>Tecido com sujeira de uso</strong>
        <div className="meter">
          <div className="bar"><i style={{ width: `${done ? 100 : pct}%` }} /></div>
          <span className="pct">{done ? 100 : pct}%</span>
        </div>
      </div>
      <div className="hint">{touchHint ? "Arraste o dedo no tecido para limpar" : "Passe o mouse no tecido para limpar"}</div>
      <div className="nozzle" ref={nozzleRef} aria-hidden="true"><span /></div>
      <div className="finish" role="status" aria-live="polite">
        <p>Pronto, limpo. <span>Agora imagine isso no seu sofá.</span></p>
        <div className="row">
          <button className="btn line" type="button" onClick={reset}>Sujar de novo</button>
          <a className="btn ink" href="#orcamento">Quero orçamento</a>
        </div>
      </div>
    </div>
  );
}
