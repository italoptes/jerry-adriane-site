import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
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
    <section id="sobre" className="about" ref={sectionRef}>
      {/* Background ornament */}
      <div className="about__ornament" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="rgba(201,166,70,0.04)" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="rgba(201,166,70,0.06)" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="rgba(201,166,70,0.08)" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" stroke="rgba(201,166,70,0.1)" strokeWidth="1" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(201,166,70,0.04)" strokeWidth="1" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(201,166,70,0.04)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container">
        <div className="about__layout">
          {/* Left: Number */}
          <div className="about__number reveal">
            <span className="about__year">26</span>
            <span className="about__year-label">anos</span>
            <div className="about__year-line" />
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <div className="reveal reveal-delay-1">
              <span className="section-label">Sobre a empresa</span>
              <div className="gold-divider" />
              <h2 className="section-title">
                Tradição e excelência
                <br />
                <em>em cada peça</em>
              </h2>
            </div>

            <p className="about__text reveal reveal-delay-2">
              A empresa <strong>Jerry Adriane de Menezes Filho</strong> atua há 26 anos na produção de
              peças institucionais sob medida, atendendo prefeituras e câmaras municipais em todo o Brasil.
            </p>

            <p className="about__text reveal reveal-delay-3">
              Cada projeto é desenvolvido de forma personalizada, com foco em qualidade, durabilidade e
              acabamento de alto padrão. Nossa missão é transformar a identidade de órgãos públicos em
              peças físicas de excelência, que transmitam autoridade e credibilidade.
            </p>

            {/* Highlights */}
            <div className="about__highlights reveal reveal-delay-4">
              {[
                { label: 'Prefeituras e câmaras', desc: 'Atendimento exclusivo' },
                { label: 'Todo o Brasil', desc: 'Cobertura nacional' },
                { label: 'Alto padrão', desc: 'Materiais premium' },
              ].map((item) => (
                <div key={item.label} className="about__highlight">
                  <div className="about__highlight-dot" />
                  <div>
                    <span className="about__highlight-label">{item.label}</span>
                    <span className="about__highlight-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
