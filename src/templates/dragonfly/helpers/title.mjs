import capitalize from 'lodash/capitalize.js';

export default main;

function main(context){
    const {options} = context;
    const {title, subtitle} = options;

    return `${title}: ${subtitle}`;
}
