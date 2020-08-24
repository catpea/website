import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import pretty from 'pretty';
export default main;
async function main({plugin, setup, template}){
  // console.log(`Creating poems`);
  const file = path.join(plugin.path, 'template.hbs');
  for (let book of setup.data.books){
    for (let section of book.chapters.data){
      for (let poem of section.data){
        const filename = poem.id + '.html';
        // const data = Object.assign({filename}, setup, {section: Object.assign({},section, {data:undefined})}, {element:poem});
        const data = Object.assign({}, setup, {parent:book, content:poem, section});
        data.page.id = poem.id;
        data.page.file = filename;
        const code = template({ file, data });
        const destination = path.join(setup.locations.destination, filename)
        console.log(destination);
        fs.writeFileSync(destination, code);
      }
    }
  }
}
