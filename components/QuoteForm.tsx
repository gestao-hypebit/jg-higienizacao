"use client";

import { useState } from "react";
import { quoteItems, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function QuoteForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const toggle = (v: string) => {
    setError(false);
    setPicked((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!picked.length) { setError(true); return; }
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const bairro = String(f.get("bairro") || "").trim();
    const det = String(f.get("det") || "").trim();
    const items = picked.map((i) => (i === "Couro" ? "Couro (limpeza e hidratação)" : i));
    let msg = `Olá, J.G! ${nome ? `Aqui é ${nome}. ` : ""}Quero um orçamento de limpeza e higienização.\n\n• Peças: ${items.join(", ")}`;
    if (det) msg += `\n• Detalhes: ${det}`;
    if (bairro) msg += `\n• Local: ${bairro}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <form className="card reveal" onSubmit={submit} noValidate>
      <fieldset>
        <legend>O que vai ser limpo? <small>(pode marcar mais de um)</small></legend>
        <div className="chips">
          {quoteItems.map((item, i) => (
            <span key={item}>
              <input type="checkbox" id={`q${i}`} checked={picked.includes(item)} onChange={() => toggle(item)} />
              <label htmlFor={`q${i}`}>{item}</label>
            </span>
          ))}
        </div>
      </fieldset>
      {error && <p className="err" role="alert">Marque pelo menos uma peça para montar o orçamento.</p>}
      <fieldset>
        <label className="f" htmlFor="det">Detalhes <small>(lugares, quantidade, manchas)</small></label>
        <textarea className="t" id="det" name="det" placeholder="Ex.: sofá retrátil de 3 lugares com mancha de café no assento, e 6 cadeiras de jantar" />
      </fieldset>
      <div className="row2">
        <fieldset>
          <label className="f" htmlFor="nome">Seu nome</label>
          <input className="t" id="nome" name="nome" autoComplete="given-name" placeholder="Como podemos te chamar" />
        </fieldset>
        <fieldset>
          <label className="f" htmlFor="bairro">Bairro e cidade</label>
          <input className="t" id="bairro" name="bairro" placeholder="Ex.: Jardim Paulista, Franca" />
        </fieldset>
      </div>
      <div className="form-foot">
        <small>Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.</small>
        <button className="btn primary big" type="submit">
          <WhatsAppIcon /> Pedir orçamento no WhatsApp
        </button>
      </div>
    </form>
  );
}
