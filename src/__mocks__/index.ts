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

export const banners = {
  banners: {
    intro: {
      title: 'Somos a Clinestetic',
      subtitle:
        'Sistema que te proporciona uma ampliação de beleza e bem estar mais perto de você.',
      paragraph:
        'Nosso objetivo de promover a saúde e o bem-estar físico e estético mais!'
    }
  }
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
