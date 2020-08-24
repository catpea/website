import first from 'lodash/first.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('first', function(argument, body) {
    return body.fn(first(argument));;
  })

}
