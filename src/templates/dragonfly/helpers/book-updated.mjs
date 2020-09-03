import first from 'lodash/first.js';

export default main;

function main(context) {
  let response = "";
  if (context.latest) {
    const mostRecent = first(context.latest);
    if (mostRecent.timestamp) {
      response = mostRecent.timestamp;
    }
  }
  return response;
}
