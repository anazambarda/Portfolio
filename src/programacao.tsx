import { Code, Server, Database } from 'lucide-react';
import './styles/analiseDeDados.css'; // usa o mesmo css do analise de dados

const Programacao = () => {
  return (
    <section className="analise-container">
      <h2 className="analise-titulo">PROGRAMAÇÃO WEB</h2>
      <p className="analise-descricao">
        Desenvolvo aplicações <strong>Full Stack</strong> utilizando tecnologias como <strong>React</strong>, <strong>Node.js</strong>, <strong>Python</strong> e <strong>SQL</strong>,
        entregando soluções robustas, performáticas e escaláveis.
      </p>

      <div className="projetos-wrapper">
        <div className="projeto-card">
          <Code className="icon" size={44} />
          <h3>Portfólio em React</h3>
          <p className="projeto-sub">Site pessoal desenvolvido em React com TypeScript</p>
          <a
            className="btn-ver-projeto"
            href="https://github.com/anazambarda/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código no GitHub
          </a>
        </div>

        <div className="projeto-card">
          <Server className="icon" size={44} />
          <h3>MindTrack - Python/Django</h3>
          <p className="projeto-sub">Projeto acadêmico para saúde mental desenvolvido em Django</p>
          <a
            className="btn-ver-projeto"
            href="https://github.com/anazambarda/mindtrack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código no GitHub
          </a>
        </div>

        <div className="projeto-card">
          <Database className="icon" size={44} />
          <h3>ERP para Provedores</h3>
          <p className="projeto-sub">Sistema em desenvolvimento com foco em gestão de provedores</p>
          <a
            className="btn-ver-projeto"
            href="https://github.com/anazambarda/erp_provedor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programacao;
