import first from 'lodash/first.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('slice', function(from, to, list) {
    return list.slice(from, to);
  })

}
