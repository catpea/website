export default main;

async function main({setup}){

  const response = [];

  for( let book of setup.data.books.filter(book=>book.format=='page') ){
    for( let poem of book.feed ){
      response.push({ name: poem.id, template: 'templates/index.html', content:poem, parent:book});
    }
  }

  return response;
}
