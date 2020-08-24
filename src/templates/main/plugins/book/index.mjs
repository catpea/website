import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import pretty from 'pretty';
export default main;
async function main({id, plugin, setup, template}){


  for (let book of setup.data.books){
    const data = Object.assign({}, setup, {content:book});
    data.page.id = book.id;

    for(let name of ['cards', 'toc', 'latest']){

      const filename = book.id + (name=='latest'?'':'-'+name) + '.html';
      const file = path.join(plugin.path, name + '.hbs');
      data.page.file = filename ;
      data.page.type = name ;
      const code = template({ file, data });
      const destination = path.join(setup.locations.destination, filename);
      fs.writeFileSync(destination, code);
    }


  }

}
