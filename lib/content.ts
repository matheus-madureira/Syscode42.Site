export const services = [
  {
    id: "produtos",
    name: "Produtos digitais",
    summary:
      "Do protótipo validado ao produto em produção. Desenhamos a experiência e construímos aplicações web e mobile que aguentam crescer.",
    deliverables: [
      "Aplicações web",
      "Apps mobile",
      "MVPs",
      "Design de interface",
    ],
    icon: "discovery",
    description:
      "Para quem tem uma ideia validada, ou quase, e precisa transformá-la em produto. Começamos pelo menor recorte que prova valor, desenhamos a interface com o seu usuário em mente e entregamos uma base de código pronta para crescer.",
    fitFor: [
      "Lançar um MVP para testar o mercado",
      "Tirar um processo de planilhas e e-mails",
      "Reconstruir um app que ficou lento ou difícil de mudar",
    ],
    stack: ["Next.js", "React", "React Native", "TypeScript", "Figma"],
  },
  {
    id: "sistemas",
    name: "Sistemas e APIs sob medida",
    summary:
      "Back-ends, integrações e plataformas internas que automatizam a operação da sua empresa, com arquitetura pensada para durar.",
    deliverables: [
      "APIs REST e gRPC",
      "Integrações",
      "Painéis internos",
      "Cloud",
    ],
    icon: "swap",
    description:
      "O que acontece por trás da tela: regras de negócio, integrações com ERPs, gateways de pagamento e parceiros, e painéis para o seu time operar. Arquitetura simples de manter, testes automatizados e observabilidade desde o início.",
    fitFor: [
      "Integrar sistemas que hoje não conversam",
      "Criar uma API para parceiros ou para o seu app",
      "Automatizar rotinas manuais da operação",
    ],
    stack: [".NET", "Node.js", "PostgreSQL", "Docker", "AWS e Azure"],
  },
  {
    id: "modernizacao",
    name: "Modernização de legado",
    summary:
      "Migramos sistemas antigos aos poucos, sem parar o negócio: testes primeiro, arquitetura nova por trás, troca módulo a módulo.",
    deliverables: [
      "Migração gradual",
      "Refatoração",
      "Performance",
      "Observabilidade",
    ],
    icon: "setting",
    description:
      "Sistemas antigos costumam ser críticos demais para parar e caros demais para manter. Mapeamos o que existe, cobrimos o comportamento atual com testes e substituímos as partes aos poucos, com o sistema no ar o tempo todo.",
    fitFor: [
      "Sistema que ninguém mais quer mexer",
      "Tecnologia sem suporte ou sem gente no mercado",
      "Custos de infraestrutura que só crescem",
    ],
    stack: [
      "Testes automatizados",
      ".NET",
      "Containers",
      "OpenTelemetry",
      "CI/CD",
    ],
  },
  {
    id: "ia",
    name: "IA aplicada",
    summary:
      "Colocamos modelos de linguagem para trabalhar dentro dos seus processos: busca em documentos, atendimento e automação de tarefas repetitivas.",
    deliverables: [
      "Assistentes",
      "Busca semântica (RAG)",
      "Automação",
      "Agentes",
    ],
    icon: "chat",
    description:
      "IA útil é a que resolve uma tarefa concreta com dados da sua empresa. Construímos assistentes e automações com modelos de linguagem, sempre com medição de qualidade e com uma pessoa no circuito onde o erro custa caro.",
    fitFor: [
      "Responder perguntas a partir de documentos internos",
      "Triar e classificar atendimentos e chamados",
      "Extrair dados de PDFs, contratos e notas",
    ],
    stack: ["Claude e GPT", "RAG", "pgvector", "Python", ".NET"],
  },
] as const

export const principles = [
  {
    title: "Você fala com quem escreve o código",
    icon: "2-user",
    body: "Sem camadas de gerência entre você e o time. A pessoa que entende o seu problema é a mesma que constrói a solução.",
  },
  {
    title: "Time sênior, sempre",
    icon: "work",
    body: "Trabalhamos com poucos projetos por vez e com gente experiente em cada um. Ninguém aprende às custas do seu prazo.",
  },
  {
    title: "Escopo honesto",
    icon: "document",
    body: "Dizemos o que dá para fazer com o seu orçamento e o que não vale a pena construir. Menos funcionalidades, mais resultado.",
  },
  {
    title: "O código é seu",
    icon: "shield-done",
    body: "Repositório, infraestrutura e documentação ficam no nome da sua empresa desde o primeiro dia. Nada de dependência de fornecedor.",
  },
] as const

export const steps = [
  {
    title: "Diagnóstico",
    body: "Uma conversa para entender o problema, o contexto do negócio e o que já existe. Sem custo.",
  },
  {
    title: "Proposta",
    body: "Escopo, arquitetura, prazo e investimento por escrito, com as decisões técnicas explicadas.",
  },
  {
    title: "Construção em ciclos",
    body: "Entregas a cada uma ou duas semanas, em um ambiente que você acessa e testa desde o início.",
  },
  {
    title: "Entrega e evolução",
    body: "Publicação em produção, documentação e passagem de conhecimento. Se fizer sentido, seguimos juntos na evolução.",
  },
] as const

export const faq = [
  {
    question: "Quanto custa desenvolver um software sob medida?",
    answer:
      "Depende do escopo. Depois do diagnóstico, enviamos uma proposta com valor fechado por etapa ou por ciclo de desenvolvimento, para você saber exatamente o que está contratando.",
  },
  {
    question: "Qual o tamanho do time que vai trabalhar no meu projeto?",
    answer:
      "Normalmente de duas a quatro pessoas seniores, cobrindo produto, design e engenharia. O time é dimensionado para o projeto, não para a nossa folha.",
  },
  {
    question: "Quanto tempo leva para ter a primeira versão no ar?",
    answer:
      "Um MVP bem recortado costuma ficar pronto entre 6 e 12 semanas. Você acompanha versões funcionando desde as primeiras semanas.",
  },
  {
    question: "Quem fica com o código e a infraestrutura?",
    answer:
      "Você. Tudo é criado em contas da sua empresa: repositório, nuvem e domínios. Se um dia quiser seguir com outro time, a transição é simples.",
  },
  {
    question: "Vocês assumem sistemas que já existem?",
    answer:
      "Sim. Começamos com uma auditoria técnica do código e da infraestrutura e propomos um plano de modernização em etapas, sem interromper a operação.",
  },
] as const

export const about = {
  mission:
    "Construir software que resolve problemas reais de negócio, com a proximidade de um time pequeno e o rigor de engenheiros experientes.",
  storyTitle: "Por que uma boutique",
  story: [
    "A Syscode42 nasceu em novembro de 2024 de uma constatação simples: muita empresa contrata desenvolvimento de software e recebe, em troca, reuniões com intermediários, times que mudam a cada mês e um código que ninguém consegue manter depois.",
    "Escolhemos o caminho oposto. Atendemos poucos clientes por vez, com gente sênior do diagnóstico à entrega, e deixamos tudo no nome de quem paga pelo projeto. O nome vem do mundo de quem programa: sys de sistema, code de código e 42, a resposta para a pergunta fundamental sobre a vida, o universo e tudo mais.",
  ],
  facts: [
    { value: "2024", label: "Ano de fundação" },
    { value: "4", label: "Frentes de atuação com o mesmo time" },
    {
      value: "100%",
      label: "Do código e da infraestrutura no nome do cliente",
    },
    { value: "Zero", label: "Intermediários entre você e quem programa" },
  ],
} as const
