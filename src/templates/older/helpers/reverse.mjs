import clone from 'lodash/cloneDeep.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('reverse', function(input) {
    let val = clone(input);

     if (Array.isArray(val)) {
       val.reverse();
       return val;
     }
     if (val && typeof val === 'string') {
       return val.split('').reverse().join('');
     }
   })

}
