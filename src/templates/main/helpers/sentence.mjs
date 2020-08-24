import sentenceExtractor from 'sentence-extractor';
const extract = sentenceExtractor.extract;

export default main;

async function main({Handlebars}){
  Handlebars.registerHelper('sentence', function(count, str) {
    const matches = extract(str.replace(/\n/g, ' ')).map(i=>i.trim())
    return matches.slice(0, count).join(" ");
  })

}
