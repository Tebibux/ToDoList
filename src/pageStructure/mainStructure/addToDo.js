import DomMaker from "../../main/domMaker";
// creates a todo dashboard data entry form
function addToDo(){
	const addToDo_toArrayD = new DomMaker('div', 'dashBoard', '', '', '');
	const addToDo_toArray = addToDo_toArrayD.maker();
	
	const formTitleD = new DomMaker('input', 'formTitle', 'formTitle', '', '');
	const formTitle = formTitleD.maker();
	addToDo_toArray.appendChild(formTitle);


	return addToDo_toArray
}

export default addToDo;