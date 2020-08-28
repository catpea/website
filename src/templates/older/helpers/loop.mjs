export default main;

async function main({Handlebars}){

  Handlebars.registerHelper("loop", function(context, options) {
    var ret = "";

    for (var i = 0, j = context.length; i < j; i++) {
      ret = ret + options.fn(Object.assign(context,context[i]));
    }

    return ret;
  });

}
