import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

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
          <p className="destaque">SOFTWARE · CLOUD · APIs</p>

          <h1 id="titulo">
            Tecnologia para conectar pessoas e soluções.
          </h1>

          <p className="resumo">
            Sou Luiz Fernando de Carvalho, engenheiro de software com
            atuação em Google Cloud, Apigee e integração de APIs.
          </p>

          <a className="botao" href="#projetos">
            Conheça meus projetos
          </a>
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
          © {new Date().getFullYear()} Luiz Fernando de Carvalho
        </p>
        <p>Feito com React e dedicação ao aprendizado.</p>
      </footer>
    </>
  )
}

export default App