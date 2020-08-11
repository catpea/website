const options = {
  fibonacci:   [   5,   8,  13,   21,   34,   55],
  designations:['sm','md','lg', 'xl','xxl','xxxl'],
  breakpoints: [576,  768, 992, 1200, 1400, 1600],
  //container:   [540,  720, 960, 1140, 1320, 1400, 'px'],
  container:   [540,  720, 960, 960, 960, 1400, 'px'],

  styles:{
    ':root': {
      '--primary':`#1095c1`,
      '--secondary':`#033744`,
      '--background':`#002b36`,
      '--headings':`#f74562`,
      '--button':`#f74562`,
      '--button-text':`#000000`,
      '--text':`#a2afb9`,
      '--primary-inverse':`#92ecb9`,
      '--card-shadow':`0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 8px 8px rgba(0,0,0,0.11),0 16px 16px rgba(0,0,0,0.11),0 32px 32px rgba(0,0,0,0.11);`,
   },

   '*, ::after, ::before': {
     boxSizing: 'border-box',
   },

   'body > *':{
     width: '95%',
     paddingRight: '15px',
     paddingLeft: '15px',
     marginRight: 'auto',
     marginLeft: 'auto',
     boxSizing: 'border-box',
   },

   // NOTE: The seconday font is applied in the html declaration
    html: {
      color: 'var(--text)',
      backgroundColor: 'var(--background)',
      fontFamily: "'Lato', sans-serif",


    },

  // NOTE:  The primary font is applied in the headings declaration
   'h1, h2, h3, h4, h5': {
     fontFamily: "'Staatliches', sans-serif;",

     fontWeight: '700',
     letterSpacing: '0.035em',
     textShadow: '0.035em 0.035em 0.065em black',
     color: 'var(--headings)',
   },

   menu: { paddingLeft: 0},

   small:{
     color: 'var(--primary)'
   },

   ol: { paddingLeft: 'none',},
   ul: { paddingLeft: 0, listStyle: 'none'},
   'ul li': {
     paddingLeft: '1rem',
   },
   // 'ul ul': {
   //   paddingLeft: '1rem',
   // },
   li: { listStyle: 'none',},


   img: {
     marginBottom: '2rem',

     width: '100%',
     maxWidth: '100%',
     height: 'auto',
     borderRadius: '.5rem',
     boxShadow: 'var(--card-shadow)',

     // filter: 'grayscale(80%)',
     // transition: 'filter 1s ease-in-out'

   },
   //'img:hover': { filter: 'grayscale(0)' },

   // LINKS
   a: {
     textDecoration: 'none',
     color: 'var(--primary-inverse)',
   },

    'a[role=button],\n  button,\n  input[type=submit]': {
      border: '1px solid transparent',
      padding: '0.75rem 1rem',
      borderRadius: '0.25rem',
      outline: 'none',
      backgroundColor: 'var(--button)',
      color: 'var(--button-text)',
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      textDecoration: 'none',
      display: 'inline-block',
      boxShadow: 'var(--card-shadow)',
    },

    h1:{
      color: '#f74562',
    },
    h2:{
      color: '#df566c', //#2da495',
    },
    h3:{
      color: '#e9c46a',
    },
    h4:{
      color: '#e76f51',
    },
    h5:{
      color: '#d09261',
    },
    h6:{
      color: '#5280a1',
    },

    hgroup:{
      marginBottom: '2rem',
      h1:{
        marginTop: '0.2rem', // in an h roup margins are seset
        marginBottom: '0.2rem', // in an h roup margins are seset
      },
      h2:{
        marginTop: '0.2rem', // in an h roup margins are seset
        marginBottom: '0.2rem', // in an h roup margins are seset
      },
      h3:{
        marginTop: '0.2rem', // in an h roup margins are seset
        marginBottom: '0.2rem', // in an h roup margins are seset
      },
      h4:{
        marginTop: '0.2rem', // in an h roup margins are seset
        marginBottom: '0.2rem', // in an h roup margins are seset
      },
      h5:{
        marginTop: '0.2rem', // in an h roup margins are seset
        marginBottom: '0.2rem', // in an h roup margins are seset
      },
      h6:{
        marginTop: '0.2rem', // in an h roup margins are seset
        marginBottom: '0.2rem', // in an h roup margins are seset
      },
    },


    'body > main > article > header, body > main > article > section':{
        backgroundColor: 'var(--secondary)',
        borderRadius: '1rem',
        boxShadow: 'var(--card-shadow)',
    },

    'body > header, body > nav, body > footer': {
        backgroundColor: 'var(--secondary)',
        borderRadius: '1rem',
        boxShadow: 'var(--card-shadow)',
    }



  },

  responsive:[


    {path: ['li > h2'], property:[{name:'paddingTop', from:2.5, to:4.5, unit:'rem'}] }, // top padding for h2 tags within a list

    {path: ['img'], property:[{name:'width', from:100, to:75, unit:'%'}] },

    {path: ['h1'], property:[{name:'fontSize', from:4.0, to:5.0, unit:'rem'}, {name:'marginBottom', from:1.5, to:2.5, unit:'rem'}] },
    {path: ['h2'], property:[{name:'fontSize', from:2.5, to:2.8, unit:'rem'}, {name:'marginBottom', from:1.4, to:2.4, unit:'rem'}] },
    {path: ['h3'], property:[{name:'fontSize', from:1.3, to:2.5, unit:'rem'}, {name:'marginBottom', from:1.3, to:2.3, unit:'rem'}] },
    {path: ['h4'], property:[{name:'fontSize', from:1.25, to:2.3, unit:'rem'}, {name:'marginBottom', from:1.2, to:2.2, unit:'rem'}] },
    {path: ['h5'], property:[{name:'fontSize', from:1.2, to:2.2, unit:'rem'}, {name:'marginBottom', from:1.1, to:2.1, unit:'rem'}] },
    {path: ['h6'], property:[{name:'fontSize', from:0.9, to:1.1, unit:'rem'}, {name:'marginBottom', from:1.0, to:2.0, unit:'rem'}] },

    {path: ['hgroup'], property:[{name:'marginBottom', from:2.5, to:3.5, unit:'rem'}] },
    {path: ['hgroup'], property:[{name:'marginBottom', from:2.4, to:3.4, unit:'rem'}] },
    {path: ['hgroup'], property:[{name:'marginBottom', from:2.3, to:3.3, unit:'rem'}] },
    {path: ['hgroup'], property:[{name:'marginBottom', from:2.2, to:3.2, unit:'rem'}] },
    {path: ['hgroup'], property:[{name:'marginBottom', from:2.1, to:3.1, unit:'rem'}] },
    {path: ['hgroup'], property:[{name:'marginBottom', from:2.0, to:3.0, unit:'rem'}] },

    {path: ['menu > li'], property:[
      {name:'fontSize', from:1.0, to:1.7, unit:'rem'},
      {name:'marginBottom', from:1.3, to:2.0, unit:'rem'}
    ] },

    {path: ['p'], property:[
      {name:'marginBottom', from:2, to:5, unit:'rem'},
      {name:'fontSize', from:1.0, to:1.4, unit:'rem'},
    ]},


    {path: ['body > *'], property:[
      {name:'marginTop',    from:1.0, to:1.5, unit:'rem'},
      {name:'marginBottom', from:5, to:10, unit:'rem'}
    ]},

    {path: ['body > *', 'article'], property:[
      {name:'marginBottom', from:5, to:10, unit:'rem'}
    ]},
    {path: ['body > *', 'article header'], property:[
      {name:'marginBottom', from:5, to:8, unit:'rem'}
    ]},


    // Deals with primary subsections, top and bottom of the page.
    {path: ['body > header, body > nav, body > footer'], property:[
      {name:'marginBottom', from:2, to:4, unit:'rem'},
      {name:'padding', from:1, to:2, unit:'rem'},
    ]},

    // Deals with primary subsections, top and bottom of the page.
    {path: ['body > main > article > header, body > main > article > section'], property:[
      {name:'marginBottom', from:2, to:4, unit:'rem'},
      {name:'padding', from:1, to:2, unit:'rem'},
    ]},


  ]

}





export default options;
