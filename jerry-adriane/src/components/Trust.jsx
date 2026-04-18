import React, { useEffect, useRef } from 'react';
import './Trust.css';

export default function Trust() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust" ref={sectionRef}>
      <div className="trust__bg-pattern" aria-hidden="true" />

      <div className="container">
        <div className="trust__inner">
          {/* Left: Headline */}
          <div className="trust__left reveal">
            <span className="section-label">Credibilidade</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Confiança comprovada
              <br />
              <em>em todo o Brasil</em>
            </h2>
            <p className="section-subtitle">
              Atendimento exclusivo para órgãos públicos — prefeituras e câmaras
              municipais — com experiência comprovada no segmento institucional.
            </p>
          </div>

          {/* Right: Badges */}
          <div className="trust__right">
            <div className="trust__badge reveal reveal-delay-1">
              <ShieldIcon />
              <div>
                <span className="trust__badge-title">Empresa registrada</span>
                <span className="trust__badge-info">CNPJ: 64.664.919/0001-62</span>
              </div>
            </div>

            <div className="trust__badge reveal reveal-delay-2">
              <CalendarIcon />
              <div>
                <span className="trust__badge-title">26 anos de mercado</span>
                <span className="trust__badge-info">Experiência consolidada</span>
              </div>
            </div>

            <div className="trust__badge reveal reveal-delay-3">
              <MapIcon />
              <div>
                <span className="trust__badge-title">Cobertura nacional</span>
                <span className="trust__badge-info">Envio para todo o Brasil</span>
              </div>
            </div>

            <div className="trust__badge reveal reveal-delay-4">
              <BuildingIcon />
              <div>
                <span className="trust__badge-title">Foco no setor público</span>
                <span className="trust__badge-info">Prefeituras e câmaras municipais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: CNPJ highlight */}
        <div className="trust__cnpj reveal">
          <div className="trust__cnpj-line" />
          <span className="trust__cnpj-text">
            <strong>CNPJ:</strong> 64.664.919/0001-62 — Guarabira, PB
          </span>
          <div className="trust__cnpj-line" />
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="9" width="18" height="13" />
      <path d="M5 22V7l7-5 7 5v15" />
      <line x1="9" y1="22" x2="9" y2="13" />
      <line x1="15" y1="22" x2="15" y2="13" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  );
}
