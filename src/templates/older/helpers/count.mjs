import head from 'lodash/head.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('count', function(argument) {
    return argument.length;
  })

}
