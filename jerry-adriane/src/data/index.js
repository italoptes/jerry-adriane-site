// Mock data for products — replace image paths when real assets are available

export const WHATSAPP_URL =
  'https://wa.me/5519982003342?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento';

import carteiraImg from '../assets/carteira.png';
import carteiraImg2 from '../assets/carteira2.png';
import carteiraImg3 from '../assets/carteira3.png';
import quadroVerador from "../assets/quadro_vereador.png"
import quadroVerador2 from "../assets/quadro_vereador2.png"
import quadroVerador3 from "../assets/quadro_vereador3.png"
import quadroPessoa from "../assets/quadro.png"
import quadroPessoa2 from "../assets/quadro2.png"
import trofeu from "../assets/trofeu.png"
import placa from "../assets/plaquinha.png"
import placa2 from "../assets/plaquinha2.png"
import letra1 from "../assets/letra1.jpeg"
import letra2 from "../assets/letra2.jpeg"
import federal from "../assets/federal.jpeg"
import legislativo from "../assets/legislativo.jpeg"
import municipal from "../assets/municipal.jpeg"
import diploma from "../assets/diploma.jpeg"

export const products = [
  {
    id: 1,
    slug: 'quadros-legislativos',
    name: 'Quadros Legislativos',
    description:
      'Quadros personalizados com galeria de vereadores, prefeitos e gestores públicos, produzidos com acabamento premium.',
    placeholder: '#1E1A10',
    images: [quadroPessoa, quadroPessoa2]
  },
  {
    id: 2,
    slug: 'credenciais-oficiais',
    name: 'Credenciais Oficiais',
    description:
      'Carteiras e credenciais funcionais com identidade visual institucional, em couro e materiais nobres.',
    placeholder: '#101A1E',
    images: [carteiraImg, carteiraImg2, carteiraImg3]
  },
  {
    id: 3,
    slug: 'placas-institucionais',
    name: 'Placas Institucionais',
    description:
      'Placas de inauguração, homenagem e identificação em inox escovado, vidro ou acrílico de alta resistência.',
    placeholder: '#1A1010',
    images: [quadroVerador, quadroVerador2, quadroVerador3]
  },
  {
    id: 4,
    slug: 'projetos-personalizados',
    name: 'Projetos Personalizados',
    description:
        'Desenvolvimento sob medida para demandas específicas de órgãos públicos, com consultoria e acompanhamento completo.',
    placeholder: '#1A101E',
    images: [trofeu, diploma, placa, placa2]
  },
  {
    id: 5,
    slug: 'letras-inox',
    name: 'Letras em Inox',
    description:
      'Letras caixa e logotipos tridimensionais em inox polido ou escovado para fachadas e ambientes internos.',
    placeholder: '#101E10',
    images: [letra1, letra2]
  },
  {
    id:6,
    slug: 'brasoes',
    name: "Brasões Recortados",
    description:
      'Brasões institucionais recortados em chapa de inox escovado ou polido. Podem ser produzidos adesivados ou em alto relevo, com acabamento premium.',
    placeholder: '#101E10',
    images: [federal, legislativo, municipal]
  }
];

export const differentials = [
  {
    id: 1,
    title: 'Produção 100% sob encomenda',
    description: 'Cada peça é criada exclusivamente para o seu projeto, sem produtos de prateleira.',
  },
  {
    id: 2,
    title: 'Personalização completa',
    description: 'Layout, brasão, cores, fontes e materiais escolhidos conforme a identidade do órgão.',
  },
  {
    id: 3,
    title: 'Materiais premium',
    description: 'Inox, couro legítimo, vidro e moldura de alta qualidade garantem durabilidade e beleza.',
  },
  {
    id: 4,
    title: 'Acabamento de alto padrão',
    description: 'Processo rigoroso de qualidade que reflete seriedade e profissionalismo.',
  },
  {
    id: 5,
    title: 'Experiência com órgãos públicos',
    description: '26 anos atendendo exclusivamente prefeituras e câmaras em todo o Brasil.',
  },
  {
    id: 6,
    title: 'Envio para todo o Brasil',
    description: 'Logística eficiente via Correios, com rastreamento e embalagem segura.',
  },
];

export const process = [
  {
    step: '01',
    title: 'Solicitação de Orçamento',
    description: 'Entre em contato via WhatsApp e descreva o projeto — tamanho, material e quantidade.',
  },
  {
    step: '02',
    title: 'Modelo Personalizado',
    description: 'Nossa equipe desenvolve o layout exclusivo conforme a identidade do seu órgão público.',
  },
  {
    step: '03',
    title: 'Produção',
    description: 'Produção artesanal e rigorosa em até 30 dias, com acompanhamento de cada etapa.',
  },
  {
    step: '04',
    title: 'Envio pelos Correios',
    description: 'Embalagem especial e envio rastreado para qualquer município do Brasil.',
  },
];
