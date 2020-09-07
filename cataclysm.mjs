// configuration https://github.com/catpea/cataclysm#readme

import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import take from 'lodash/take.js';
import reverse from 'lodash/reverse.js';






const options = {
  debug: false,

  author: 'Dr. Meow',
  logo: 'image/logo.jpg',

  title: 'Cat Pea Industries',
  subtitle: 'Home of Furkies Purrkies',
  description: 'Various Peas of Fanciful Plumage',

  domain: 'catpea.com',
  url: 'https://catpea.com',
  canonical: 'https://catpea.com/', // trailing slash required!

  // REMOVE THIS IN PRODUCTION
  // REMOVE THIS IN PRODUCTION
  // REMOVE THIS IN PRODUCTION
  mode: 'html',
  template: 'dragonfly',
  // REMOVE THIS IN PRODUCTION
  // REMOVE THIS IN PRODUCTION
  // REMOVE THIS IN PRODUCTION

}

export default async function () {


  return options;
}
