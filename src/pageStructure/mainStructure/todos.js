import DomMaker from "../../main/domMaker";

function todoDom(){
	const todoContainerD = new DomMaker('div', 'todos', '', '', '');
	const todoContainer = todoContainerD.maker(); // build the main element

	const todoOneD = new DomMaker('div', 'todo_1', '', '', '');
	const todo_1 = todoOneD.maker();
	const titleD = new DomMaker('div', 'title', '', '' , '');
	const title = titleD.maker();
	todo_1.appendChild(title); // appending the title
	const priorityD = new DomMaker('div', 'priority', '', '' , '');
	const priority = priorityD.maker();
	todo_1.appendChild(priority); // appending the priority
	todoContainer.appendChild(todo_1);// appending the todo_1 which include title and
									  //  priority of the to do element.




	return todoContainer;
}

export default todoDom;