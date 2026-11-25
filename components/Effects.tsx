"use client";

import { useEffect } from "react";

/** Liga o fade-in suave de .reveal quando o elemento entra na tela. */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
