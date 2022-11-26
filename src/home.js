import './styles/style.css';
import headerDom from "./pageStructure/pageHeader"; // imports the header DOM
import footerDom from './pageStructure/pageFooter'; // imports the footer DOM
import mainDom from './pageStructure/pageMain'; // imports the main DOM
import addToDo from './pageStructure/mainStructure/addToDo'; // used to display the add todo page

function home() {
	const container = document.querySelector('.container');
	// imports the build header from the header.js file

	// appends the header to the container
	container.appendChild(headerDom());

	// appends the main to the container
	const main = mainDom();
	container.appendChild(main);
	main.addEventListener("click", (e) => {
		console.log(e.target.id)
		if (e.target.id === 'add_todo') {
			main.innerHTML = '';
			main.appendChild(addToDo());
			main.classList.remove('main')
			main.classList.add('main-two');

		}
	})


	// appends the footer to the container	
	container.appendChild(footerDom());
}
export default home;