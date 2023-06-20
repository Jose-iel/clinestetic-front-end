export const headerMockData = {
  header: [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Tratamentos', path: '/tratamentos' },
    {
      id: 3,
      name: 'Cadastros',
      icon: 3,
      path: '#',
      submenu: [
        { id: 4, name: 'Agenda', icon: 4 },
        { id: 5, name: 'Combo', icon: 5 },
        {
          id: 6,
          name: 'Procedimentos',
          icon: 6
        }
      ]
    }
  ]
};

export const headingsMockData = {
  banners: {
    intro: {
      title: 'Somos a Clinestetic',
      subtitle:
        'Sistema que te proporciona uma ampliação de beleza e bem estar mais perto de você.',
      paragraph:
        'Nosso objetivo de promover a saúde e o bem-estar físico e estético mais!'
    }
  },
  faq: {
    title: 'Dúvidas',
    subtitle: 'Como podemos te ajudar?',
    paragraph: 'Selecione a categoria da sua dúvida ou tente uma palavra-chave.'
  }
};

export const accordionsMockData = {
  accordionHome: [
    {
      id: 1,
      title: 'Como faço para acessar Minhas Compras?',
      description: `
        <p>
          Após a confirmação de pagamento, seu voucher será enviado para o seu
          email e será disponibilizado para visualização e impressão na
          <b>sua conta</b> em nosso site ou aplicativo.
        </p>
        <p>
          Para visualizar, faça o <b>login</b> em nosso site ou aplicativo,
          clique em <b>Minhas Compras</b>. Você visualizará o histórico e o
          status das suas compras.
        </p>
        `
    }
  ]
};

export const productsMockData = {
  topSellingProducts: [
    {
      id: 1,
      location: 'Osasco',
      img: {
        src: 'img/home/bumbum-de-ouro.png',
        alt: ''
      },
      title: 'Bumbum de ouro',
      description: 'Pigmentação de pele Lorem Ipsum',
      price: 1300,
      installments: 10
    },
    {
      id: 2,
      location: 'Tatuapé',
      img: {
        src: 'img/home/peeling.png',
        alt: ''
      },
      title: 'Peeling Químico + Cauterização capilar',
      description: 'Peeling mais Cauterização',
      price: 690,
      installments: 10
    },
    {
      id: 3,
      location: 'Tatuapé',
      img: {
        src: 'img/home/depilacao.png',
        alt: ''
      },
      title: 'Depilação',
      description: 'Depilação corporal',
      price: 890,
      installments: 10
    }
  ],
  treatmentProducts: [
    {
      id: 1,
      location: 'Osasco',
      img: {
        src: 'img/home/bumbum-de-ouro.png',
        alt: ''
      },
      title: 'Bumbum de ouro',
      description: 'Pigmentação de pele Lorem Ipsum',
      price: 1300,
      installments: 10
    },
    {
      id: 2,
      location: 'Tatuapé',
      img: {
        src: 'img/home/peeling.png',
        alt: ''
      },
      title: 'Peeling Químico + Cauterização capilar',
      description: 'Peeling mais Cauterização',
      price: 690,
      installments: 10
    },
    {
      id: 3,
      location: 'Tatuapé',
      img: {
        src: 'img/home/depilacao.png',
        alt: ''
      },
      title: 'Depilação',
      description: 'Depilação corporal',
      price: 890,
      installments: 10
    },
    {
      id: 4,
      location: 'Osasco',
      img: {
        src: 'img/home/bumbum-de-ouro.png',
        alt: ''
      },
      title: 'Bumbum de ouro',
      description: 'Pigmentação de pele Lorem Ipsum',
      price: 1300,
      installments: 10
    },
    {
      id: 5,
      location: 'Tatuapé',
      img: {
        src: 'img/home/peeling.png',
        alt: ''
      },
      title: 'Peeling Químico + Cauterização capilar',
      description: 'Peeling mais Cauterização',
      price: 690,
      installments: 10
    },
    {
      id: 6,
      location: 'Tatuapé',
      img: {
        src: 'img/home/depilacao.png',
        alt: ''
      },
      title: 'Depilação',
      description: 'Depilação corporal',
      price: 890,
      installments: 10
    }
  ]
};

export const footerMockData = {
  footer: {
    info: [
      { name: 'CNPJ', value: '00000000000' },
      { name: 'Endereço', value: 'Rua teste, 230, SP' }
    ],
    social: [
      'img/footer/facebook.svg',
      'img/footer/instagram.svg',
      'img/footer/twitter.svg',
      'img/footer/youtube.svg'
    ],
    links: [
      { name: 'Home', url: '#' },
      { name: 'Tratamentos', url: '#' },
      { name: 'FAQ', url: '#' },
      { name: 'Sobre', url: '#' },
      { name: 'Contato', url: '#' }
    ],
    contact: [
      '19 9932-1234',
      'contato@clinestetic.com',
      'Rua Marte, 100',
      'Terra - Sistema Solar',
      'CEP 120444-224'
    ],
    bottomLinks: [
      { name: 'Home', url: '#' },
      { name: 'Segurança', url: '#' },
      { name: 'Termos', url: '#' }
    ]
  }
};
