"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import logoMark from "@/public/logo-jg-mark.png";
import { waLink } from "@/lib/site";

/** Cabeçalho claro; ganha sombra discreta depois que a página rola. */
export default function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`top${solid ? " solid" : ""}`}>
      <div className="wrap">
        <a className="logo" href="#topo" aria-label="JG Limpeza e Higienização, início">
          <Image src={logoMark} alt="" height={46} priority />
          <small>Limpeza e<br />higienização</small>
        </a>
        <nav aria-label="Seções">
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#resultados">Resultados</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="btn primary" href={waLink()} target="_blank" rel="noopener">
          <WhatsAppIcon />
          <span>Pedir orçamento</span>
        </a>
      </div>
    </header>
  );
}
