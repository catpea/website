// configuration https://github.com/catpea/cataclysm#readme

import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import take from 'lodash/take.js';
import reverse from 'lodash/reverse.js';

const options = {
  debug: false,

  title: 'Cat Pea',
  subtitle: 'Home of Furkies Purrkies',
  description: 'Advanced Peas of Various Plumage',

  domain: 'catpea.com',
  url: 'https://catpea.com',
  canonical: 'https://catpea.com/', // trailing slash required!

}

export default async function () {
  return options;
}
