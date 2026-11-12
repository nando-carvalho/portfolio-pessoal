import { portfolio, socialLinks } from './data/portfolio'
import './App.css'

const anoAtual = new Date().getFullYear()

const { nome, apresentacao, sobre, competencias, projetos } = portfolio

function App() {
  return (
    <>
      <header className="cabecalho">
        <a className="marca" href="#inicio">
          {nome.exibicao}<span>.</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#competencias">Competências</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="apresentacao" aria-labelledby="titulo">
          <div className="apresentacao-texto">
            <p className="destaque">{apresentacao.destaque}</p>

            <h1 id="titulo">
              {apresentacao.titulo}
              <span>{apresentacao.subtitulo}</span>
            </h1>

            <p className="resumo">
              {apresentacao.resumo}
            </p>

            <div className="acoes">
              <a className="botao" href="#projetos">
                Explorar projetos <span aria-hidden="true">↗</span>
              </a>

              <a className="botao-secundario" href="#sobre">
                Sobre mim
              </a>
            </div>

            <div className="assinatura-tecnica">
              {apresentacao.assinaturaTecnica.map((item) => (
                <span key={item.id}>{item.label}</span>
              ))}
            </div>
          </div>

          <div
            className="retrato"
            role="img"
            aria-label={`Monograma de ${nome.exibicao}`}
          >
            <span className="retrato-detalhe" aria-hidden="true">
              &lt;/&gt;
            </span>

            <span className="monograma" aria-hidden="true">
              {nome.monograma}
            </span>

            <div className="retrato-legenda" aria-hidden="true">
              <strong>{nome.exibicao}</strong>
              <span>{apresentacao.legenda}</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao">
          <h2>Sobre mim</h2>
          <p>
            {sobre}
          </p>
        </section>

        <section id="competencias" className="secao">
          <h2>Competências</h2>

          <ul className="competencias">
            {competencias.map((competencia) => (
              <li key={competencia.id}>{competencia.label}</li>
            ))}
          </ul>
        </section>

        <section id="projetos" className="secao">
          <h2>Projetos</h2>

          <div className="projetos">
            {projetos.map((projeto) => (
              <article className="card" key={projeto.id}>
                <span className="status">{projeto.status}</span>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <p className="tecnologias">{projeto.tecnologias}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="secao">
          <h2>Vamos conversar?</h2>
          {socialLinks.length > 0 ? (
            <ul>
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>{portfolio.contato.mensagem}</p>
          )}
        </section>
      </main>

      <footer className="rodape">
        <p>
          © {anoAtual} {nome.completo}
        </p>
        <p>Feito com React e dedicação ao aprendizado.</p>
      </footer>
    </>
  )
}

export default App
