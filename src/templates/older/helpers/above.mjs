export default main;

async function main({Handlebars}){

  Handlebars.registerHelper("isAbove", function(context, min, options) {
     if(context > min) return options.fn(context);
  });

}
