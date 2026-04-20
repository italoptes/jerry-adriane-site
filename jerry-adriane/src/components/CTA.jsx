import React, { useEffect, useRef } from 'react';
import { WHATSAPP_URL } from '../data/index.js';
import './CTA.css';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="cta-section" ref={sectionRef}>
      {/* Background */}
      <div className="cta-section__bg" aria-hidden="true">
        <div className="cta-section__glow" />
        <div className="cta-section__grid" />
      </div>

      <div className="container">
        <div className="cta-section__inner">
          {/* Decorative top line */}
          <div className="cta-section__ornament reveal">
            <div className="cta-section__ornament-line" />
            <div className="cta-section__ornament-diamond" />
            <div className="cta-section__ornament-line" />
          </div>

          <span className="section-label reveal reveal-delay-1" style={{ textAlign: 'center', display: 'block' }}>
            Fale conosco
          </span>

          <h2 className="cta-section__title reveal reveal-delay-2">
            Solicite seu orçamento
            <br />
            <em>personalizado</em>
          </h2>

          <p className="cta-section__subtitle reveal reveal-delay-3">
            Envie uma mensagem no WhatsApp e nossa equipe
            <br />
            elaborará uma proposta exclusiva para o seu órgão público.
          </p>

          <div className="cta-section__actions reveal reveal-delay-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp cta-section__btn"
            >
              <WhatsappIcon />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Contact info */}
          <div className="cta-section__contacts reveal reveal-delay-5">
            <a href="mailto:reginaldolima102@outlook.com" className="cta-section__email">
              <EmailIcon />
              <span>reginaldolima102@outlook.com</span>
            </a>
            <span className="cta-section__separator">·</span>
            <a href="mailto:jerry-adriano10@oulook.com" className="cta-section__email">
              <EmailIcon />
              <span>jerry-adriano10@oulook.com</span>
            </a>
          </div>

          {/* Bottom ornament */}
          <div className="cta-section__ornament reveal reveal-delay-6">
            <div className="cta-section__ornament-line" />
            <div className="cta-section__ornament-diamond" />
            <div className="cta-section__ornament-line" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsappIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
