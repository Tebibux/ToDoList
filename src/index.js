import './styles/style.css';
import headerDom from "./pageStructure/pageHeader";
import footerDom from './pageStructure/pageFooter';

const container = document.querySelector('.container');
// imports the build header from the header.js file
const header = headerDom();
// appends the header to the container
container.appendChild(header)

const main = document.createElement('div');
container.appendChild(main);





// appends the footer to the container
const footer = footerDom();
container.appendChild(footer);