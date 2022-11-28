import './styles/style.css';
import headerDom from "./pageStructure/pageHeader"; // imports the header DOM
import footerDom from './pageStructure/pageFooter'; // imports the footer DOM
import mainDom from './pageStructure/pageMain'; // imports the main DOM
import addToDo from './pageStructure/mainStructure/addToDo'; // used to display the add todo page
import ToDoData from './data/arrayObject';
import arrayData from './data/arrayData';
// import todoDom from './pageStructure/mainStructure/todos';

function home() {
	const container = document.querySelector('.container');
	// imports the build header from the header.js file

	// appends the header to the container
	container.appendChild(headerDom());

	// appends the main to the container
	let main = mainDom();
	container.appendChild(main);
	main.addEventListener("click", (e) => {
		if (e.target.id === 'add_todo') {
			main.innerHTML = '';
			console.log(arrayData)
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
				if (((title === ''))) return;
				else {
					// pass to the arrayData holder
					// assign the data to the object first
					const inputDataObject = new ToDoData(title, description, date, priority);
					// push the object to the array the data to the object first
					arrayData.push(inputDataObject);
					container.innerHTML = ''; // wash's all the element of the container
					home();// recursively call home function
				}

			})
		}
		if(e.target.id === 'detail'){
			console.log(e.target.parentElement.parentElement.innerText)
			// filter all the data and show in the display in the detail page.
		}
	})


	// appends the footer to the container	
	container.appendChild(footerDom());
}
export default home;