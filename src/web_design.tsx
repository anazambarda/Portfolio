import { useState } from 'react';
import './styles/WebDesign.css';
import LogoLobo from './assets/Captura de tela 2025-05-13 212432.png';
import LogoTubarao from './assets/Captura de tela 2025-05-13 212432.png';
import LogoPinterest from './assets/Captura de tela 2025-05-13 212432.png';

const logos = [
  { src: LogoLobo, alt: 'Logo Lobo' },
  { src: LogoTubarao, alt: 'Logo Tubarão' },
  { src: LogoPinterest, alt: 'Logo Pinterest' },
];

const WebDesign = () => {
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <section id="webdesign" className="section-webdesign-offset webdesign-container">
      <h2 className="webdesign-title">WEB DESIGN</h2>
      <p className="webdesign-desc">
        Aqui estão alguns logos e artes que desenvolvi com foco em identidade visual e usabilidade.
        <br />
        Clique em qualquer imagem para ampliar.
      </p>

      <div className="logo-grid">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo-img"
            onClick={() => setZoomed(logo.src)}
          />
        ))}
      </div>

      {zoomed && (
        <div className="zoom-overlay" onClick={() => setZoomed(null)}>
          <button
            className="close-button"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(null);
            }}
          >
            ✖
          </button>
          <img src={zoomed} alt="Logo ampliado" className="zoomed-img" />
        </div>
      )}
    </section>
  );
};

export default WebDesign;
