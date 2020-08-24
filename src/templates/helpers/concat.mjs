import last from 'lodash/last.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('concat', function(...all) {
    all.pop()
    return all.join("");
  })

}
