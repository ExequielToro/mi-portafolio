module.exports = {
  email: 'pablotoro1988@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ExequielToro?tab=repositories',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/exequieltoro1988/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Pablo_E_T715661',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/pabloexequieltoro',
    },
  ],

  navLinks: [
    {
      name: 'Acerca de',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contactos',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
