import { PieChart, BarChart4, LineChart } from 'lucide-react'; // ícone novo adicionado
import './styles/analiseDeDados.css'; // CSS para estilização do componente

const AnaliseDados = () => {
  return (
    <section className="analise-container">
      <h2 className="analise-titulo">ANÁLISE DE DADOS</h2>
      <p className="analise-descricao">
        Utilizo ferramentas como <strong>Power BI</strong>, <strong>SQL</strong> e <strong>Python</strong> para transformar dados brutos em visualizações interativas e insights que
        auxiliam na tomada de decisão estratégica.
      </p>

      <div className="projetos-wrapper">
        <div className="projeto-card">
          <PieChart className="icon" size={44} />
          <h3>Projeto Sicredi</h3>
          <p className="projeto-sub">Painel interativo de desempenho de vendas</p>
          <a
            href="https://link-projeto1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ver-projeto"
          >
            Ver projeto
          </a>
        </div>

        <div className="projeto-card">
          <BarChart4 className="icon" size={44} />
          <h3>Projeto Sicredi</h3>
          <p className="projeto-sub">Análise comparativa de metas e resultados</p>
          <a
            href="https://link-projeto2.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ver-projeto"
          >
            Ver projeto
          </a>
        </div>

        <div className="projeto-card">
          <LineChart className="icon" size={44} />
          <h3>Projeto Sicredi</h3>
          <p className="projeto-sub">Previsão de receita baseada em tendências históricas</p>
          <a
            href="https://link-projeto3.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ver-projeto"
          >
            Ver projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnaliseDados;
