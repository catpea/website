export default main;

async function main({
  Handlebars
}) {

  Handlebars.registerHelper('wut', function(incoming) {
    const overviewObject = {};

    for( let [key, value] of Object.entries(incoming)){
      overviewObject[key] = typeof value;
    }

    return JSON.stringify(overviewObject, null, '  ');
  })

}
