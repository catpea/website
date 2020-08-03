const options = {
  version: '2.0',

  title: 'Poetry',
  author: 'Dr. Meow',

  source: 'https://github.com/catpea/poetry',
  website: 'http://catpea.com',

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

    canonical: 'https://catpea.com/',
    directory: 'docs',
    partials: 'partials',

    stylesheet: 'css/stylesheet.css',
    styleguide: 'styleguide.html',

    index: 'index.html',
    news: 'news.html',
    toc: 'toc.html',
    poems: 'poems.html',

    changelog: 'changelog.html',

    sectionFileName:'section-{{id}}.html',
    sectionName:'section-{{id}}',

    template: {
      files: 'template/main/files',
      path: 'template/main',

      page: 'page.hbs',
      index: 'index.hbs',
      news: 'news.hbs',
      toc: 'toc.hbs',
      poems: 'poems.hbs',
      poem: 'poem.hbs',
      print: 'print.hbs',

      stylesheet: 'stylesheet.hbs',
      styleguide: 'styleguide.hbs',
      changelog: 'changelog.hbs',
    },

    css: {
      path: 'template/main',
      main: 'stylesheet.mjs',
    }

  },

}


export default options;
