import { useEffect, useState } from 'react';
import { BarChart3, Code, ArrowUp } from 'lucide-react';
import './styles/HeaderSecundario.css';

const HeaderSecundario = () => {
  const [secaoAtual, setSecaoAtual] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const secoes = [
        { id: 'analise', offset: 0 },
        { id: 'programacao', offset: 0 },
      ];

      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const secao of secoes) {
        const el = document.getElementById(secao.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setSecaoAtual(secao.id);
            return;
          }
        }
      }

      setSecaoAtual('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-secundario">
      <nav className="nav-secundaria">
        <button
          onClick={() => scrollToSection('analise')}
          className={secaoAtual === 'analise' ? 'ativo' : ''}
          title="Análise de Dados"
        >
          <BarChart3 size={24} />
        </button>
        <button
          onClick={() => scrollToSection('programacao')}
          className={secaoAtual === 'programacao' ? 'ativo' : ''}
          title="Programação"
        >
          <Code size={24} />
        </button>
        <button
          onClick={() => scrollToSection('')}
          className=""
          title="Voltar ao Início"
        >
          <ArrowUp size={24} />
        </button>
      </nav>
    </header>
  );
};

export default HeaderSecundario;
