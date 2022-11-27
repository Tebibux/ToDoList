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
		if (e.target.id === 'add_todo') {
			main.innerHTML = '';
			main.appendChild(addToDo());
			main.classList.remove('main')
			main.classList.add('main-two');
			const formSubBtn = document.querySelector('.formSubBtn');
			formSubBtn.addEventListener('click', () => {
				console.log('hi mom - home.js')
				// retrieve all value of the input data and assign to the variable 
				var title = document.querySelector('#formTitle').value;
				var description = document.querySelector('#formDesc').value;
				var date = document.querySelector('#formDate').value;
				var priority = document.querySelector('#formPriority').value;
				console.log(title + ' ' + description + ' ' + date + ' ' + priority)
				// pass to the arrayData holder
				// and make the form invisible
				// call the main again
			})

		}
	})


	// appends the footer to the container	
	container.appendChild(footerDom());
}
export default home;