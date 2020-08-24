// configuration https://github.com/catpea/catawampus#readme

import fs from 'fs-extra';
import {inspect} from 'util';

const configuration = {
  destination: 'docs',
  template: 'main',
  style: {
    body: {
    }
  },
  responsive: [
    // {id: ['.example'], paddingTop: [1, 3], marginBottom:[.8, 1]},
  ]
}

const palette = {
  name: 'Old Books',
  author: 'https://catpea.com',
  website: 'https://catpea.com',
  db: fs.readFileSync('colors.txt').toString().split('\n').filter(i=>i)
};

const texture = {
  name: 'Cat Pea Box',
  author: 'https://catpea.com',
  website: 'https://catpea.com',
  db: [
    ['#4c392e','https://transparenttextures.com/patterns/black-felt.png'],
    ['#635440','https://transparenttextures.com/patterns/buried.png'],
    ['#55433a','https://transparenttextures.com/patterns/dark-leather.png'],
    ['#976e48','https://transparenttextures.com/patterns/black-felt.png'],
    ['#b5a992','https://transparenttextures.com/patterns/broken-noise.png'],
    ['#9dccad','https://transparenttextures.com/patterns/broken-noise.png'],
  ]
};

const theme = {

};

export default async function () {
  return configuration;
}
