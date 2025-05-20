import { useEffect, useState } from 'react';
import './styles/App.css';
import { Moon, Sun } from 'lucide-react';
import HeaderSecundario from './HeaderSecundario';
import avatar from './assets/ana_ana.png';
import AnaliseDados from './analise_dados';
import WebDesign from './web_design';
import Programacao from './programacao';
// import ContatoDropdown from './ContatoDropdown'; // Comentado pois não está mais em uso

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    document.body.classList.add(initialTheme);
    return initialTheme;
  });

  const [mostrarHeader, setMostrarHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const alturaDaTela = window.innerHeight;
      setMostrarHeader(scrollY > alturaDaTela * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {mostrarHeader && <HeaderSecundario />}

      {/* Botões fixos no topo direito */}
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 1000,
        }}
      >
        {/* Botão de tema */}
        <div className="theme-switch" onClick={toggleTheme}>
          <div className={`icon-container ${theme === 'light' ? 'selected' : ''}`}>
            <Sun size={18} />
          </div>
          <div className={`icon-container ${theme === 'dark' ? 'selected' : ''}`}>
            <Moon size={18} />
          </div>
        </div>

        {/* Botão "Contate-me" removido daqui */}
      </div>

      {/* Conteúdo principal */}
      <div className="container">
        <div className="text-content">
          <h4>OLÁ, PESSOAL <span className="wave">👋</span></h4>
          <h1>Eu sou a <span className="highlight">Ana!</span></h1>
          <p>Analista de dados, Web designer, e Programadora FullStack.</p>

          <div className="buttons">
            <button onClick={() => scrollToSection('analise')}>Análise de Dados</button>
            <button onClick={() => scrollToSection('webdesign')}>Web Design</button>
            <button onClick={() => scrollToSection('programacao')}>Programação Web</button>
          </div>

          {/* Botão Meus Projetos (sem ação) */}
          <button className="cta">Entre em contato</button>
        </div>

        <div className="image-content">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>

      {/* Seções */}
      <div id="analise" className="section-offset"><AnaliseDados /></div>
      <div id="webdesign" className="section-offset"><WebDesign /></div>
      <div id="programacao" className="section-offset"><Programacao /></div>
    </>
  );
}

export default App;
