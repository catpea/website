import capitalize from 'lodash/capitalize.js';

export default main;

function main(context){
    return Object.keys(context).join(", ");
}
