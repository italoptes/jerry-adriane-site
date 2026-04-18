# Jerry Adriane – Landing Page Institucional

Landing page institucional para a empresa **Jerry Adriane de Menezes Filho**, especializada em peças institucionais personalizadas para órgãos públicos.

## 🚀 Rodando localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173`

## 📦 Build para produção

```bash
npm run build
```

Os arquivos gerados ficarão na pasta `/dist`.

## ☁️ Deploy na Vercel

### Via CLI

```bash
npm install -g vercel
vercel
```

### Via GitHub

1. Faça push do projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detecta automaticamente que é um projeto Vite
4. Clique em **Deploy**

## 📁 Estrutura do projeto

```
jerry-adriane/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Products.jsx / Products.css
│   │   ├── About.jsx / About.css
│   │   ├── Differentials.jsx / Differentials.css
│   │   ├── Process.jsx / Process.css
│   │   ├── Trust.jsx / Trust.css
│   │   ├── CTA.jsx / CTA.css
│   │   ├── Footer.jsx / Footer.css
│   │   └── WhatsappFloat.jsx / WhatsappFloat.css
│   ├── data/
│   │   └── index.js          ← dados mock (produtos, diferenciais, processo)
│   ├── styles/
│   │   └── global.css        ← tokens de design, reset, utilitários
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## 🎨 Identidade Visual

| Token       | Valor     |
|-------------|-----------|
| Preto       | `#0B0B0B` |
| Dourado     | `#C9A646` |
| Branco      | `#FFFFFF` |
| Cinza       | `#6B6B6B` |
| Display     | Cormorant Garamond |
| Body        | Jost      |

## 🖼️ Adicionando imagens reais

Substitua os placeholders em `src/data/index.js`:

```js
export const products = [
  {
    id: 1,
    name: 'Quadros Legislativos',
    image: '/assets/quadros-legislativos.jpg', // ← adicione aqui
    ...
  },
];
```

E no componente `Products.jsx`, troque o placeholder pela tag `<img>`:

```jsx
<img src={product.image} alt={product.name} className="product-card__img" />
```

## 📞 Link WhatsApp

Configurado em `src/data/index.js`:

```js
export const WHATSAPP_URL = 'https://wa.me/5519982003342?text=...';
```
