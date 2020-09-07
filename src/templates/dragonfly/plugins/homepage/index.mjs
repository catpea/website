import fs from 'fs';
import path from 'path';

export default main;

async function main({setup, plugin}){

  const response = [];

  const directory = 'templates';
  const location = path.join(plugin.dirname, directory);
  const extension = '.html';

  const templates =
  fs.readdirSync(location, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(dirent=>dirent.name)
    .filter(filename=>filename.endsWith(extension))
    .map(i=>path.join(directory, i))

  for( let template of templates){
    response.push({ name: path.basename(template, extension), template, content: {} });
  }

  return response;
}
