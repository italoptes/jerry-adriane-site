import React from 'react';
import { WHATSAPP_URL } from '../data/index.js';
import './Hero.css';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero">
      {/* Background Pattern */}
      <div className="hero__bg">
        <div className="hero__bg-grid" />
        <div className="hero__bg-radial" />
        <div className="hero__bg-lines">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="hero__line" style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
      </div>

      {/* Badge */}
      <div className="hero__content container">
        <div className="hero__badge animate-fade-up delay-1">
          <span className="hero__badge-dot" />
          <span>Há 26 anos servindo órgãos públicos em todo o Brasil</span>
        </div>

        {/* Title */}
        <h1 className="hero__title animate-fade-up delay-2">
          Soluções institucionais
          <br />
          <em>personalizadas</em> para
          <br />
          órgãos públicos
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle animate-fade-up delay-3">
          Produção sob medida de peças institucionais para prefeituras e câmaras
          municipais, com qualidade premium e acabamento de alto padrão.
        </p>

        {/* CTAs */}
        <div className="hero__ctas animate-fade-up delay-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsappIcon />
            <span>Solicitar orçamento</span>
          </a>
          <button className="btn-secondary" onClick={scrollToProducts}>
            <span>Ver produtos</span>
            <ArrowDown />
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats animate-fade-up delay-5">
          {[
            { value: '26', label: 'Anos de experiência' },
            { value: '100%', label: 'Personalizado' },
            { value: 'Brasil', label: 'Envio nacional' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span>role para explorar</span>
      </div>

      {/* Decorative seal */}
      <div className="hero__seal">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="55" stroke="rgba(201,166,70,0.15)" strokeWidth="1" />
          <circle cx="60" cy="60" r="44" stroke="rgba(201,166,70,0.1)" strokeWidth="1" />
          <text x="60" y="55" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fill="rgba(201,166,70,0.3)" letterSpacing="2">QUALIDADE</text>
          <text x="60" y="70" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fill="rgba(201,166,70,0.3)" letterSpacing="2">PREMIUM</text>
          {[...Array(24)].map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x1 = 60 + 50 * Math.cos(rad);
            const y1 = 60 + 50 * Math.sin(rad);
            const x2 = 60 + 54 * Math.cos(rad);
            const y2 = 60 + 54 * Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,166,70,0.2)" strokeWidth="1" />;
          })}
        </svg>
      </div>
    </section>
  );
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
