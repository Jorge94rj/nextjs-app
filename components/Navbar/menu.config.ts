interface IMenuItem {
  name: string;
  link?: string;
  subMenu?: IMenuItem[];
}

export const menu: IMenuItem[] = [
  {
    name: 'Home',
    link: '/'
  },
  { 
    name: "Fundamentals",
    subMenu: [
      {
        name: 'Pages & Routing',
        link: '/fundamentals'
      },
      {
        name: 'Next link & router',
        link: '/fundamentals/next-link'
      },
      {
        name: 'Head tags & layout',
        link: '/fundamentals/head'
      },
      {
        name: 'Header tags & footer',
        link: '/fundamentals/footer'
      },
      {
        name: 'Module aliases',
        link: '/fundamentals/aliases'
      },
    ]
  },
  {
    name: 'Data',
    subMenu: [
      {
        name: 'API routes',
        link: '/data-page/api-routes'
      },
      {
        name: 'Get props from side and static',
        link: '/data-page/side-props'
      },
      {
        name: 'Display events',
        link: '/data-page'
      },
      {
        name: 'Static paths',
        link: '/data-page'
      },
    ]
  },
  {
    name: 'Backend'
  },
  {
    name: 'Events'
  },
  {
    name: 'Authentication'
  },
  {
    name: 'Authorization'
  },
  {
    name: 'Troubleshooting',
    link: '/troubleshooting'    
  },
];
