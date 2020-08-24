import util from 'util';
export default main;

import hljs from 'highlight.js';

async function main({ Handlebars }) {

  Handlebars.registerHelper('json', function(object) {

    const options = {}
    const code = util.inspect(object, options);

    const highlighted = hljs.highlight('javascript', code).value;
    return `<pre class="hljs m-0">${highlighted}</pre>`;

  })

}
