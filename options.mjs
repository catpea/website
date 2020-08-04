const options = {

  variables:{

    title: 'Purrniciously Furmidable',
    subtitle: 'Anthology of Inspirational Rhyme',
    author: 'Dr. M, Ph.D.',
    email: 'corporate.miou@gmail.com',
    version: '2.0.1',

    cname: 'catpea.com',  // for use in CNAME file
    website: 'https://catpea.com',  // for use in links
    canonical: 'https://catpea.com/', // for use in html header

    sourcecode: 'https://github.com/catpea/poetry',

  },


  sourceDatabase: {
    audio: './.src/dist/audio',
    image: './.src/dist/image',
  },

  // Root Directory for all the generated code.
  distributionDirectory: {
    path: './dist',
  },

  dataFeed: {
    file: 'feed.json',
    directory: './.src/dist/feed',
  },


  // Configuration for the poetry book generation
  website: {


    directory: 'docs', // directory
    partials: 'partials', // directory

    stylesheet: 'css/stylesheet.css', // filename
    styleguide: 'styleguide.html', // filename

    index: 'index.html', // filename
    news: 'news.html', // filename
    toc: 'toc.html', // filename
    poems: 'poems.html', // filename

    changelog: 'changelog.html', // filename

    cname:'CNAME', // filename

    sectionFileName:'section-{{id}}.html', // hbs template
    sectionName:'section-{{id}}', // hbs template

    template: {
      files: 'template/files', // directory
      path: 'template', // directory

      page: 'page.hbs', // filename
      index: 'index.hbs', // filename
      news: 'news.hbs', // filename
      toc: 'toc.hbs', // filename
      poems: 'poems.hbs', // filename
      poem: 'poem.hbs', // filename
      print: 'print.hbs', // filename

      stylesheet: 'stylesheet.hbs', // filename
      styleguide: 'styleguide.hbs', // filename
      changelog: 'changelog.hbs', // filename
    },

    css: {
      path: 'template', // directory
      main: 'stylesheet.mjs', // filename
    }

  },

}


export default options;
