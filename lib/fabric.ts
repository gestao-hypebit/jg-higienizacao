// Tecido procedural desenhado em canvas: trama + luz de almofada (+ sujeira, manchas e encardido).
type RGB = readonly [number, number, number];
const rand = (a: number, b: number) => a + Math.random() * (b - a);

function weaveTile([r, g, b]: RGB) {
  const s = 48;
  const t = document.createElement("canvas");
  t.width = t.height = s;
  const c = t.getContext("2d")!;
  const d = c.createImageData(s, s);
  for (let y = 0; y < s; y++)
    for (let x = 0; x < s; x++) {
      const blk = ((x >> 2) + (y >> 2)) & 1;
      const sh = blk
        ? Math.sin((((y & 3) + 0.5) / 4) * Math.PI)
        : Math.sin((((x & 3) + 0.5) / 4) * Math.PI);
      const k = 0.8 + 0.2 * sh;
      const n = (Math.random() - 0.5) * 12;
      const i = (y * s + x) * 4;
      d.data[i] = r * k + n;
      d.data[i + 1] = g * k + n;
      d.data[i + 2] = b * k + n;
      d.data[i + 3] = 255;
    }
  c.putImageData(d, 0, 0);
  return t;
}

function noiseLayer(w: number, h: number, cols: number, lo: number, hi: number) {
  const rows = Math.max(2, Math.round((cols * h) / w));
  const n = document.createElement("canvas");
  n.width = cols;
  n.height = rows;
  const c = n.getContext("2d")!;
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < cols; x++) {
      const v = rand(lo, hi) | 0;
      c.fillStyle = `rgb(${v},${v - 4},${v - 12})`;
      c.fillRect(x, y, 1, 1);
    }
  return n;
}

export function paintFabric(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  rgb: RGB,
  dirty: boolean,
  scale = 1,
) {
  ctx.save();
  ctx.globalCompositeOperation = "source-over";
  const pat = ctx.createPattern(weaveTile(rgb), "repeat")!;
  if (scale !== 1) pat.setTransform(new DOMMatrix().scale(scale));
  ctx.fillStyle = pat;
  ctx.fillRect(0, 0, w, h);

  const lg = ctx.createRadialGradient(w * 0.45, h * 0.35, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.75);
  lg.addColorStop(0, "rgba(255,255,255,.16)");
  lg.addColorStop(1, "rgba(0,0,0,.18)");
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, w, h);

  if (dirty) {
    const u = Math.min(w, h);
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(218,210,192)";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(noiseLayer(w, h, 9, 178, 255), 0, 0, w, h);
    ctx.globalAlpha = 0.55;
    ctx.drawImage(noiseLayer(w, h, 26, 190, 255), 0, 0, w, h);
    ctx.globalAlpha = 1;

    // encardido de uso: encosto (topo) e beirada do assento (base)
    const gr = ctx.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, "rgba(120,104,80,.45)");
    gr.addColorStop(0.22, "rgba(255,255,255,0)");
    gr.addColorStop(0.8, "rgba(255,255,255,0)");
    gr.addColorStop(1, "rgba(120,104,80,.4)");
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, w, h);

    // manchas com borda (café, refrigerante)
    for (let i = 0; i < 5; i++) {
      const x = rand(0.15, 0.88) * w, y = rand(0.3, 0.85) * h, rad = rand(0.035, 0.09) * u;
      const sg = ctx.createRadialGradient(x, y, rad * 0.2, x, y, rad);
      sg.addColorStop(0, "rgba(170,140,100,.25)");
      sg.addColorStop(0.82, "rgba(140,110,70,.42)");
      sg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = sg;
      ctx.beginPath();
      ctx.ellipse(x, y, rad, rad * rand(0.7, 1), rand(0, 3), 0, Math.PI * 2);
      ctx.fill();
    }
    // sombras de gordura/uso
    for (let i = 0; i < 4; i++) {
      const x = rand(0.1, 0.9) * w, y = rand(0.2, 0.9) * h, rad = rand(0.08, 0.18) * u;
      const sg = ctx.createRadialGradient(x, y, 0, x, y, rad);
      sg.addColorStop(0, "rgba(90,86,80,.3)");
      sg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = sg;
      ctx.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
  }
  ctx.restore();
}
