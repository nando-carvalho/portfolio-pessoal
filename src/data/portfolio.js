export const portfolio = {
  nome: {
    completo: 'Luiz Fernando de Carvalho',
    exibicao: 'Fernando Carvalho',
    monograma: 'FC',
  },
  apresentacao: {
    destaque: 'OLÁ, EU SOU FERNANDO',
    titulo: 'Engenharia de software.',
    subtitulo: 'Cloud & APIs.',
    resumo:
      'Sou Luiz Fernando de Carvalho. Trabalho com Google Cloud, Apigee e integrações para conectar sistemas e transformar necessidades em soluções.',
    assinaturaTecnica: [
      { id: 'google-cloud', label: 'Google Cloud' },
      { id: 'apigee', label: 'Apigee' },
      { id: 'javascript', label: 'JavaScript' },
    ],
    legenda: 'Software · Cloud · APIs',
  },
  sobre:
    'Atuo com desenvolvimento de software e soluções em nuvem, com foco em APIs e integrações. Este espaço reúne meus projetos, aprendizados e experiências com tecnologia.',
  competencias: [
    { id: 'google-cloud', label: 'Google Cloud' },
    { id: 'apigee', label: 'Apigee' },
    { id: 'integracao-apis', label: 'Integração de APIs' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'governanca-ia', label: 'Governança de IA' },
  ],
  projetos: [
    {
      id: 'portfolio-pessoal',
      titulo: 'Meu portfólio pessoal',
      descricao:
        'Construção de um site com React e JavaScript, com publicação planejada no Firebase Hosting.',
      tecnologias: 'React • Vite • Firebase Hosting',
      status: 'Em desenvolvimento',
    },
  ],
  contato: {
    mensagem:
      'Em breve, meus links para LinkedIn, Instagram, YouTube e GitHub estarão disponíveis aqui.',
  },
}

// Cada item deve ter label e url; use URLs únicas como chaves estáveis.
export const socialLinks = []
