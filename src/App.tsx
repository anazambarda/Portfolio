import { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/ThemeToggle.css';
import './styles/HeaderControls.css';

import { Moon, Sun } from 'lucide-react';
import HeaderSecundario from './HeaderSecundario';
import avatar from './assets/ana_avatar_dois.png';
import AnaliseDados from './analise_dados';
import WebDesign from './web_design';
import Programacao from './programacao';
import ContatoDropdown from './ContatoDropdown';

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

      <div className="topControls">
        <div className="themeSwitch" onClick={toggleTheme}>
          <div className={`iconContainer ${theme === 'light' ? 'selected' : ''}`}>
            <Sun size={18} />
          </div>
          <div className={`iconContainer ${theme === 'dark' ? 'selected' : ''}`}>
            <Moon size={18} />
          </div>
        </div>

        <ContatoDropdown />
      </div>

      <div className="container">
        <div className="textContent">
          <h4>OLÁ, PESSOAL <span className="wave">👋</span></h4>
          <h1>Eu sou a <span className="highlight">Ana!</span></h1>
          <p>Analista de dados, Web designer, e Programadora FullStack.</p>

          <div className="buttons">
            <button onClick={() => scrollToSection('analise')}>Anáise de Dados</button>
            <button onClick={() => scrollToSection('webdesign')}>Web Design</button>
            <button onClick={() => scrollToSection('programacao')}>Programação Web</button>
          </div>

          <button className="cta">Meus Projetos</button>
        </div>

        <div className="imageContent">
          <img src={avatar} alt="Avatar" />
        </div>
      </div>

      <div id="analise" className="sectionOffset"><AnaliseDados /></div>
      <div id="webdesign" className="sectionOffset"><WebDesign /></div>
      <div id="programacao" className="sectionOffset"><Programacao /></div>
    </>
  );
}

export default App;
