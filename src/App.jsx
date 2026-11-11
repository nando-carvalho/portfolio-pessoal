import './App.css'

const anoAtual = new Date().getFullYear()

const competencias = [
  'Google Cloud',
  'Apigee',
  'Integração de APIs',
  'JavaScript',
  'Governança de IA',
]

const projetos = [
  {
    titulo: 'Meu portfólio pessoal',
    descricao:
      'Construção de um site com React e JavaScript, com publicação planejada no Firebase Hosting.',
    tecnologias: 'React • Vite • Firebase Hosting',
    status: 'Em desenvolvimento',
  },
]

function App() {
  return (
    <>
      <header className="cabecalho">
        <a className="marca" href="#inicio">
          Fernando Carvalho<span>.</span>
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
            <p className="destaque">OLÁ, EU SOU FERNANDO</p>

            <h1 id="titulo">
              Engenharia de software.
              <span>Cloud & APIs.</span>
            </h1>

            <p className="resumo">
              Sou Luiz Fernando de Carvalho. Trabalho com Google Cloud,
              Apigee e integrações para conectar sistemas e transformar
              necessidades em soluções.
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
              <span>Google Cloud</span>
              <span>Apigee</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div
            className="retrato"
            role="img"
            aria-label="Monograma de Fernando Carvalho"
          >
            <span className="retrato-detalhe" aria-hidden="true">
              &lt;/&gt;
            </span>

            <span className="monograma" aria-hidden="true">
              FC
            </span>

            <div className="retrato-legenda" aria-hidden="true">
              <strong>Fernando Carvalho</strong>
              <span>Software · Cloud · APIs</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao">
          <h2>Sobre mim</h2>
          <p>
            Atuo com desenvolvimento de software e soluções em nuvem,
            com foco em APIs e integrações. Este espaço reúne meus
            projetos, aprendizados e experiências com tecnologia.
          </p>
        </section>

        <section id="competencias" className="secao">
          <h2>Competências</h2>

          <ul className="competencias">
            {competencias.map((competencia) => (
              <li key={competencia}>{competencia}</li>
            ))}
          </ul>
        </section>

        <section id="projetos" className="secao">
          <h2>Projetos</h2>

          <div className="projetos">
            {projetos.map((projeto) => (
              <article className="card" key={projeto.titulo}>
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
          <p>
            Em breve, meus links para LinkedIn, Instagram, YouTube
            e GitHub estarão disponíveis aqui.
          </p>
        </section>
      </main>

      <footer className="rodape">
        <p>
          © {anoAtual} Luiz Fernando de Carvalho
        </p>
        <p>Feito com React e dedicação ao aprendizado.</p>
      </footer>
    </>
  )
}

export default App
