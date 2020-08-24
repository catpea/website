import head from 'lodash/head.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('head', function(argument, body) {
    return body.fn(head(argument));;
  })

}
