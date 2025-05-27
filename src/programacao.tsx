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
            href="https://seu-link-deploy-1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>

        <div className="projeto-card">
          <Server className="icon" size={44} />
          <h3>API com Node.js</h3>
          <p className="projeto-sub">Backend RESTful com autenticação e banco de dados</p>
          <a
            className="btn-ver-projeto"
            href="https://seu-link-deploy-2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>

        <div className="projeto-card">
          <Database className="icon" size={44} />
          <h3>Sistema de Gestão</h3>
          <p className="projeto-sub">Aplicação Full Stack para controle de clientes e vendas</p>
          <a
            className="btn-ver-projeto"
            href="https://seu-link-deploy-3.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programacao;
