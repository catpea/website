import take from 'lodash/take.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('take', function(count, argument) {
    return take(argument, count);
  })

}
