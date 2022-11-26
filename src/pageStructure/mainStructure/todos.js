// this module creates and export a DOM that display element
// data
import DomMaker from "../../main/domMaker";
function todoDom(arrayObj) {
	const todoContainerD = new DomMaker('div', 'todos', '', '', '');
	const todoContainer = todoContainerD.maker(); // build the main element

	const todoOneD = new DomMaker('div', 'todo_1', '', '', '');
	const todo_1 = todoOneD.maker();
	const titleD = new DomMaker('div', 'title', '', '', `Title: ${arrayObj.title}`);
	const title = titleD.maker();
	todo_1.appendChild(title); // appending the title


	const priorityD = new DomMaker('div', 'priority', '', '', `Priority: ${arrayObj.priority}`);
	const priority = priorityD.maker();
	todo_1.appendChild(priority); // appending the priority
	todoContainer.appendChild(todo_1);// appending the todo_1 which include title and
	//  priority of the to do element.

	const todoTowD = new DomMaker('div', 'todo_2', '', '', '');
	const todo_2 = todoTowD.maker();
	const detailD = new DomMaker('button', 'detail', '', '', 'Detail');
	const detail = detailD.maker();
	todo_2.appendChild(detail); // appending the detail


	const time_countD = new DomMaker('div', 'time_count', '', '', `Remain: to calculated`);
	const time_count = time_countD.maker();
	todo_2.appendChild(time_count); // appending the priority
	todoContainer.appendChild(todo_2);// appending the todo_2 which include detail and
	//  Remaining date of the to do element.


	const todoThreeD = new DomMaker('div', 'todo_3', '', '', '');
	const todo_3 = todoThreeD.maker();
	const start_dateD = new DomMaker('div', 'start_date', '', '', `Start-at: ${arrayObj.dueDate}`);
	const start_date = start_dateD.maker();
	todo_3.appendChild(start_date); // appending the detail


	const due_dateD = new DomMaker('div', 'due_date', '', '', 'Due-at: 19-12-2022');
	const due_date = due_dateD.maker();
	todo_3.appendChild(due_date); // appending the priority
	todoContainer.appendChild(todo_3);// appending the todo_1 which include title and
	//  priority of the to do element.


	const deleteItD = new DomMaker('div', 'deleteIt', '', '', ``);
	const deleteIt = deleteItD.maker();
	const deleteD = new DomMaker('div', '', '', '', 'Delete')
	deleteIt.appendChild(deleteD.maker())

	todoContainer.appendChild(deleteIt)
	return todoContainer;
}

export default todoDom;