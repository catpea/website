export default main;

async function main({Handlebars}){

  Handlebars.registerHelper("matches", function(a, b, options) {
    return (a == b);
  });

}
