export default main;

async function main({setup}){

  const response = [];

  for( let book of setup.data.books.filter(book=>book.format=='page') ){
    response.push({ name: book.id, template: 'templates/home.html', content: book });
    response.push({ name: book.id + '-toc', template: 'templates/toc.html', content: book });
    response.push({ name: book.id + '-cards', template: 'templates/cards.html', content: book });
  }

  return response;
}
