import React, { useEffect, useRef } from 'react';
import { products, WHATSAPP_URL } from '../data/index.js';
import './Products.css';

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="produtos" className="products" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="products__header reveal">
          <span className="section-label">Portfólio</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            Nossas categorias
            <br />
            <em>de produtos</em>
          </h2>
          <p className="section-subtitle">
            Cada peça é desenvolvida com rigorosa atenção aos detalhes,
            utilizando materiais nobres selecionados para garantir durabilidade e elegância.
          </p>
        </div>

        {/* Grid */}
        <div className="products__grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card reveal reveal-delay-${(index % 4) + 1}`}
            >
              {/* Image Placeholder */}
              <div
                className="product-card__image"
                style={{ background: `linear-gradient(135deg, ${product.placeholder}, #0B0B0B)` }}
              >
                <img src={product.image} alt={product.name} className="product-card__img" />                <div className="product-card__overlay" />
                <div className="product-card__corner product-card__corner--tl" />
                <div className="product-card__corner product-card__corner--br" />
              </div>

              {/* Body */}
              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>
                <a
                  href={`${WHATSAPP_URL} – ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-card__cta"
                >
                  <span>Solicitar orçamento</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
