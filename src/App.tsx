import { useEffect, useState } from 'react';
import './styles/App.css';
import { Moon, Sun } from 'lucide-react';
import HeaderSecundario from './HeaderSecundario';
import AnaliseDados from './analise_dados';
import Programacao from './programacao';

// ✅ Avatar sem a mão e imagem da mão
import avatar from './assets/eueu.png';
import mao from './assets/mao.png';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    document.body.classList.add(initialTheme);
    return initialTheme;
  });

  const [mostrarHeader, setMostrarHeader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {mostrarHeader && <HeaderSecundario />}

      {/* Botões fixos no topo direito */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          justifyContent: 'flex-end',
          marginTop: '1rem',
          marginRight: '1rem',
        }}
      >
        <div className="theme-switch" onClick={toggleTheme}>
          <div className={`icon-container ${theme === 'light' ? 'selected' : ''}`}>
            <Sun size={18} />
          </div>
          <div className={`icon-container ${theme === 'dark' ? 'selected' : ''}`}>
            <Moon size={18} />
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container">
        <div className="text-content">
          <h4>
            OLÁ, PESSOAL <span className="wave">👋</span>
          </h4>
          <h1>
            Eu sou a <span className="highlight">Ana!</span>
          </h1>
          <p>Analista de dados e Desenvolvedora Web.</p>

          <div className="buttons">
            <button onClick={() => scrollToSection('analise')}>Análise de Dados</button>
            <button onClick={() => scrollToSection('programacao')}>Programação Web</button>
          </div>

          <button className="cta" onClick={openModal}>
            Entre em contato
          </button>
        </div>

        {/* 🔥 Avatar + Mão */}
        <div className="avatar-wrapper">
          <div className="avatar-container">
            <img src={avatar} alt="Avatar" className="personagem" />
            <img src={mao} alt="Mão acenando" className="mao" />
          </div>
        </div>
      </div>

      {/* Seções */}
      <div id="analise" className="section-offset">
        <AnaliseDados />
      </div>
      <div id="programacao" className="section-offset">
        <Programacao />
      </div>

      {/* Modal de Contato */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Meus Contatos</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:anacarolinazambarda@gmail.com">
                anacarolinazambarda@gmail.com
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/5551995719800"
                target="_blank"
                rel="noreferrer"
              >
                +55 51 99571-9800
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/ana-carolina-zambarda-380740262/"
                target="_blank"
                rel="noreferrer"
              >
                Meu perfil
              </a>
            </p>

            <a href="/public/Ana_Carolina_Zambarda_CV.pdf" download className="download-button">
              Baixar Currículo
            </a>

            <button className="close-button" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
