import last from 'lodash/last.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('last', function(argument, body) {
    if(body.fn) return body.fn(last(argument));
    console.log(last(argument));
    return last(argument);
  })

}
