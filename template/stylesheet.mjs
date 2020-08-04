const options = {
  fibonacci:   [   5,   8,  13,   21,   34,   55],
  designations:['sm','md','lg', 'xl','xxl','xxxl'],
  breakpoints: [576,  768, 992, 1200, 1400, 1600],
  container:   [540,  720, 960, 1140, 1320, 1400, 'px'],

  styles:{
    ':root': {
     '--background':`#10181e`,
     '--text':`#a2afb9`,
     '--primary':`#1095c1`,
     '--primary-inverse':`#FFF`,
     '--card-shadow':` 0.5rem 0.5rem 2rem .2rem rgba(0, 0, 0, 1)`,
   },


   '*, ::after, ::before': {
     boxSizing: 'border-box',
   },
   'body > *':{
     width: '100%',
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
   },

   menu: { paddingLeft: 0},

   ol: { paddingLeft: 'none',},
   ul: { paddingLeft: 0, listStyle: 'none'},
   'ul ul': {
     paddingLeft: '1rem',
   },
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
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-inverse)',
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      textDecoration: 'none',
      display: 'inline-block',
    },

    hgroup:{
      marginBottom: '2rem',
      h1:{
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
      },
      h2:{
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
      },
      h3:{
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
      },
      h4:{
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
      },
      h5:{
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
      },
      h6:{
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
      },
    },

    'header > hgroup': {paddingBottom: '3rem'},
    'header > nav > menu > li': { fontSize: '1.1rem', marginBottom: '1.2rem' },
    'footer > nav > menu > li': { fontSize: '1.1rem', marginBottom: '1.2rem' },

  },

  responsive:[


    {path: ['li > h2'], property:[{name:'paddingTop', from:2.5, to:4.5, unit:'rem'}] }, // top padding for h2 tags within a list

    {path: ['h1'], property:[{name:'fontSize', from:2.5, to:4.5, unit:'rem'}] },
    {path: ['h2'], property:[{name:'fontSize', from:1.9, to:3.4, unit:'rem'}] },
    {path: ['h3'], property:[{name:'fontSize', from:1.5, to:3.2, unit:'rem'}] },
    {path: ['h4'], property:[{name:'fontSize', from:1.3, to:2.3, unit:'rem'}] },
    {path: ['h5'], property:[{name:'fontSize', from:1.2, to:2.0, unit:'rem'}] },
    {path: ['h6'], property:[{name:'fontSize', from:1.0, to:0.9, unit:'rem'}] },

    {path: ['p'], property:[
      {name:'marginBottom', from:2, to:5, unit:'rem'},
      {name:'fontSize', from:1.1, to:1.7, unit:'rem'},
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

  ]

}





export default options;
