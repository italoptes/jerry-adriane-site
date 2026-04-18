import React, { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../data/index.js';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">

          {/* Logo */}
          <div className="header__logo" onClick={() => scrollTo('inicio')}>
            <span className="header__logo-mark">JA</span>
            <div className="header__logo-text">
              <span className="header__logo-name">Jerry Adriane</span>
              <span className="header__logo-sub">Peças Institucionais</span>
            </div>
          </div>

          {/* Nav Desktop */}
          <nav className="header__nav">
            <ul>
              {navItems.map((item) => (
                  <li key={item.id}>
                    <button className="header__nav-link" onClick={() => scrollTo(item.id)}>
                      {item.label}
                    </button>
                  </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger — sempre renderizado, CSS controla display */}
          <button
              className="header__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}>
          <nav>
            <ul>
              {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)}>{item.label}</button>
                  </li>
              ))}
            </ul>
          </nav>
          <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
          >
            <span>Solicitar orçamento</span>
          </a>
        </div>
      </header>
  );
}