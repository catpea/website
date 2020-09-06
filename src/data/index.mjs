import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import take from 'lodash/take.js';
import reverse from 'lodash/reverse.js';
import last from 'lodash/last.js';
import cloneDeep from 'lodash/cloneDeep.js';

import paginate from './paginate.mjs';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const poetryFeed = fs.readJsonSync('.sources/poetry/dist/feed/feed.json')
 // TODO: fix these ""poems""
.reverse();

const data = {

  social:[
      { title:'GitHub',  url:'https://github.com/catpea' },
      { title:'YouTube', url:'https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW' },
      // { title:'CatPea',  url:'https://catpea.com/' },
  ],

  books:[

    // {
    //   id:'furkies-purrkies',
    //   title: 'Furkies Purrkies',
    //   subtitle: 'Anthology of Inspirational Rhyme',
    //   category: "Poetry",
    //   author: 'Dr. Meow, Ph.D.',
    //   cover: 'image/cover-3.jpg',
    //
    //   url: 'https://catpea.com/furkies-purrkies.html',
    //   audio: 'https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW',
    //
    //   //
    //   // last: poetryFeed.slice(0,1),
    //   // home: poetryFeed.slice(1,14),
    //   //
    //   // latest: poetryFeed.splice(0,1),
    //   // recent: poetryFeed.splice(0,14),
    //   // more: poetryFeed.splice(0,14),
    //   // rest: poetryFeed,
    //
    //
    //
    // },
    // {
    //   id:'tractatus',
    //   title: 'Tractatus',
    //   subtitle: 'Dreams of The Future',
    //   category: "Philosophy",
    //   author: 'Dr. Meow, Ph.D.',
    //   cover: 'image/tractatus.jpg',
    //
    //   url: 'https://catpea.com/furkies-purrkies.html',
    //   audio: 'https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW',
    //
    //   //
    //   // last: poetryFeed.slice(0,1),
    //   // home: poetryFeed.slice(1,14),
    //   //
    //   // latest: poetryFeed.splice(0,1),
    //   // recent: poetryFeed.splice(0,14),
    //   // more: poetryFeed.splice(0,14),
    //   // rest: poetryFeed,
    //
    //   chronological: fs.readJsonSync('.sources/poetry/dist/feed/feed.json'),
    //   latest: fs.readJsonSync('.sources/poetry/dist/feed/feed.json').reverse(),
    //   chapters: paginate(fs.readJsonSync('.sources/poetry/dist/feed/feed.json')),
    //
    // },

    // {
    //   title: 'Book Of The Warrior',
    //   category: "Philosophy",
    //   author: 'Dr. Meow, Ph.D.',
    //   cover: 'img/cover-2.png',
    //   url: 'https://catpea.com/furkies-purrkies',
    //   data:[],
    // },

    // {
    //
    //   title: 'Westland Warrior',
    //   subtitle: 'Rising By Subtle Analogy',
    //   category: "Philosophy",
    //   author: 'Dr. Meow, Ph.D.',
    //   cover: 'img/cover-1.png',
    //   url: 'https://catpea.com/furkies-purrkies',
    //
    //   recent: take(reverse(fs.readJsonSync('.sources/poetry/dist/feed/feed.json')), 14),
    //   elements: fs.readJsonSync('.sources/poetry/dist/feed/feed.json'),
    //   chapters: paginate(fs.readJsonSync('.sources/poetry/dist/feed/feed.json')),
    //
    // },

  ],


  // for stylesheet
  color:{

    name:[
      {name:'blue'},
      {name:'indigo'},
      {name:'purple'},
      {name:'pink'},
      {name:'red'},
      {name:'orange'},
      {name:'yellow'},
      {name:'green'},
      {name:'teal'},
      {name:'cyan'},
    ],

    gray:[
      {name:'white'},
      {name:'gray-100'},
      {name:'gray-200'},
      {name:'gray-300'},
      {name:'gray-400'},
      {name:'gray-500'},
      {name:'gray-600'},
      {name:'gray-700'},
      {name:'gray-800'},
      {name:'gray-900'},
      {name:'black', classes: "text-white"},
    ],

    context:[
      {name:'primary'},
      {name:'secondary'},
      {name:'success'},
      {name:'info'},
      {name:'warning'},
      {name:'danger'},
      {name:'light'},
      {name:'dark', classes: "text-white"},
    ],

  }

}

function book(data, book, feed){
  feed = feed.map(o=>({...o, book: book.title}));
  const chapters = paginate(cloneDeep(feed));
  data.books.push(Object.assign({updated:last(feed).timestamp}, book, {feed}, {chapters}));
}

function news(data){
  const newsLocation = path.resolve();
  const news = fs.readFileSync(path.join(__dirname,'news.txt')).toString().split(/\n/).filter(i=>i).filter(i=>!i.match(/^\s*#/)).map(line=>{
    let [date, title, text] = line.split('|').map(i=>i.trim());
    return { date:(new Date(date)).toString(), title, text};
  })
  data.news = news;
}

export default async function () {

  news(data);

  book(data, {
    id:'furkies-purrkies',
    title: 'Furkies Purrkies',
    subtitle: 'Anthology of Inspirational Rhyme',
    category: "Poetry",
    author: 'Dr. Meow, Ph.D.',
    cover: 'image/cover-2.jpg',
    url: 'https://catpea.com/furkies-purrkies.html',
    audio: 'https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW',
    description: 'Just another dang old Audio Book about wisdom and growing up. It is not recommended that you read it, or listen to it. But you are challenged to make your own, one that is much better, and much wiser.',
    more: 'Each day, I receive hundreds of emails asking what a Furkey is. Furkey is defined as a fluffy thought on the subject of a cute creature, often preceding the petting of one. For completion sake, a Purrkey in context of Animal Medicine has to deal with explosive animal flatulence, that requently results in rousing the animal to a higher state of consiousness. In the context that is used here, however; it means the percolation of wise thoughts on a myriad of subjects.',

  }, fs.readJsonSync('.sources/poetry/dist/feed/feed.json'));

  return data;
}
