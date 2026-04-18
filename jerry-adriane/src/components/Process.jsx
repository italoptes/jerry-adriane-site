import React, { useEffect, useRef } from 'react';
import { process } from '../data/index.js';
import './Process.css';

export default function Process() {
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
    <section className="process" ref={sectionRef}>
      <div className="container">
        <div className="process__header reveal">
          <span className="section-label">Como funciona</span>
          <div className="gold-divider" />
          <h2 className="section-title">Nosso processo</h2>
          <p className="section-subtitle">
            Do contato inicial à entrega, acompanhamos cada etapa com dedicação e transparência.
          </p>
        </div>

        <div className="process__steps">
          {process.map((item, index) => (
            <div
              key={item.step}
              className={`process-step reveal reveal-delay-${index + 1}`}
            >
              {/* Connector line */}
              {index < process.length - 1 && (
                <div className="process-step__connector" aria-hidden="true" />
              )}

              <div className="process-step__number">
                <span>{item.step}</span>
              </div>
              <div className="process-step__content">
                <h3 className="process-step__title">{item.title}</h3>
                <p className="process-step__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
