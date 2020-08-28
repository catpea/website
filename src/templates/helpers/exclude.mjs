import first from 'lodash/first.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('exclude', function(id, list, body) {
    return  list.filter(o=> o.id != id);
  })

}
