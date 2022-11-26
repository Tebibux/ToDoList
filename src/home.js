import './styles/style.css';
import headerDom from "./pageStructure/pageHeader"; // imports the header DOM
import footerDom from './pageStructure/pageFooter'; // imports the footer DOM
import mainDom from './pageStructure/pageMain'; // imports the main DOM


function home() {
	const container = document.querySelector('.container');
	// imports the build header from the header.js file
	const header = headerDom();
	// appends the header to the container
	container.appendChild(header)

	// appends the main to the container
	const main = mainDom();
	container.appendChild(main);


	// appends the footer to the container
	const footer = footerDom();
	container.appendChild(footer);
}
export default home;