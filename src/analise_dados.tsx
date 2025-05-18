import { useState, useEffect } from 'react';
import { PieChart, BarChart4, LineChart, ArrowLeftCircle } from 'lucide-react';
import './styles/analiseDeDados.css';

const AnaliseDados = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  const abrirModal = (url: string) => {
    setIframeUrl(url);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setIframeUrl(null);
  };

  useEffect(() => {
    if (modalAberto) {
      document.body.classList.add('modal-aberto');
    } else {
      document.body.classList.remove('modal-aberto');
    }
    return () => document.body.classList.remove('modal-aberto');
  }, [modalAberto]);

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
          <span
            className="btn-ver-projeto"
            onClick={() =>
              abrirModal(
                'https://app.powerbi.com/view?r=eyJrIjoiNDFhYjA4OWUtMzJjMC00ZTc3LWExNWYtZjUwMjk3M2M0ZjQ1IiwidCI6IjFiZGQzYWUxLTRiYjgtNDRjYS04MmIzLTgzMzlmYWVjODFlZSJ9'
              )
            }
          >
            Ver projeto
          </span>
        </div>

        <div className="projeto-card">
          <BarChart4 className="icon" size={44} />
          <h3>Projeto Sicredi</h3>
          <p className="projeto-sub">Análise comparativa de metas e resultados</p>
          <span
            className="btn-ver-projeto"
            onClick={() => abrirModal('https://link-projeto2.com')}
          >
            Ver projeto
          </span>
        </div>

        <div className="projeto-card">
          <LineChart className="icon" size={44} />
          <h3>Projeto Sicredi</h3>
          <p className="projeto-sub">Previsão de receita baseada em tendências históricas</p>
          <span
            className="btn-ver-projeto"
            onClick={() => abrirModal('https://link-projeto3.com')}
          >
            Ver projeto
          </span>
        </div>
      </div>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal-voltar" onClick={fecharModal}>
            <ArrowLeftCircle className="icone-voltar" size={28} />
          </div>
          <div className="modal-frame-wrapper">
            <iframe
              src={iframeUrl || ''}
              title="Dashboard Power BI"
              className="iframe-centralizado"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnaliseDados;
