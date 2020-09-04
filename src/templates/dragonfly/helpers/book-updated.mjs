import first from 'lodash/first.js';

export default main;

function main(context) {
  let response = "";


  if (context.latest||context.data) {
    const mostRecent = first(context.latest||context.data);
    if (mostRecent.timestamp) {
      response = mostRecent.timestamp;
    }
  }
  return response;
}
