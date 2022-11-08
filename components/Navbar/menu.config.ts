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
        link: '/data-page/events'
      },
      {
        name: 'Static paths',
        link: '/data-page/static-path'
      },
    ]
  },
  {
    name: 'Backend',
    subMenu: [
      {
        name: 'CMS setup',
        link: '/backend-page/cms-setup'
      },
      {
        name: 'Event content type',
        link: '/backend-page/event-content-type'
      },
    ]
  },
  {
    name: 'Events',
    subMenu: [
      {
        name: 'Search page',
        link: '/events-page/search-page'
      },
    ]
  },
  {
    name: 'Authentication',
    link: '/authentication-page/jwt'
  },
  {
    name: 'Authorization',
    link: '/authorization-page'
  },
  {
    name: 'Troubleshooting',
    link: '/troubleshooting'    
  },
];
