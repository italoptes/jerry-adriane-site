import { useState } from "react";
import "./Products.css"
import {products, WHATSAPP_URL} from "../data/index.js";

export default function Products({ product }) {
    return (
        <section className="products">
            <div className="container">
                <div className="products__grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product }) {
    const images = product.images?.length ? product.images : [];
    const [index, setIndex] = useState(0);
    const [startX, setStartX] = useState(0);

    function next() {
        if (!images.length) return;
        setIndex((prev) => (prev + 1) % images.length);
    }

    function prev() {
        if (!images.length) return;
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    function handleTouchStart(e) {
        setStartX(e.touches[0].clientX);
    }

    function handleTouchMove(e) {
        const diff = startX - e.touches[0].clientX;

        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
        }
    }

    return (
        <div className="product-card">
            <div
                className="product-card__image"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {images.length > 0 && (
                    <>
                        <div
                            className="carousel__track"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {images.map((img, i) => (
                                <img key={i} src={img} className="carousel__img" />
                            ))}
                        </div>

                        {images.length > 1 && (
                            <>
                                <button className="carousel__btn prev" onClick={prev}>
                                    ‹
                                </button>
                                <button className="carousel__btn next" onClick={next}>
                                    ›
                                </button>

                                <div className="carousel__dots">
                                    {images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`carousel__dot ${
                                                i === index ? "active" : ""
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}

                <span className="product-card__corner product-card__corner--tl" />
                <span className="product-card__corner product-card__corner--br" />
            </div>

            <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.description}</p>

                <a
                    href={WHATSAPP_URL|| "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card__cta"
                >
                    Solicitar orçamento →
                </a>
            </div>
        </div>
    );
}