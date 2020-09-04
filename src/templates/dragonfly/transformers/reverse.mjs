import reverse from 'lodash/reverse.js';
import clone from 'lodash/clone.js';

export default main;

function main(list) {
  let response = reverse(clone(list));

  return response;
}
