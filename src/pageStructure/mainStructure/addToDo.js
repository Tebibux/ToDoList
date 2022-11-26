import DomMaker from "../../main/domMaker";
// creates a todo dashboard data entry form
function addToDo() {
	const addToDo_toArrayD = new DomMaker('div', 'dashBoard', '', '', '');
	const addToDo_toArray = addToDo_toArrayD.maker();
	// adding title to the addtodo page form
	const formTitleD = new DomMaker('input', 'formTitle', 'formTitle', '', '');
	const formTitle = formTitleD.maker();
	formTitle.classList.add('hightMaker');
	formTitle.setAttribute('placeholder', 'Input Title')
	formTitle.setAttribute("required", "");
	addToDo_toArray.appendChild(formTitle);

	// adding description to the addtodo page form
	const fromDescD = new DomMaker('input', 'formTitle', 'formDesc', '', '');
	const fromDesc = fromDescD.maker();
	fromDesc.classList.add('hightMaker');
	fromDesc.setAttribute("required", "");
	addToDo_toArray.appendChild(fromDesc);

	// adding description to the addtodo page form
	const formDateD = new DomMaker('input', 'formTitle', 'formDate', '', '');
	const formDate = formDateD.maker();
	formDate.classList.add('hightMaker');
	formDate.setAttribute('type', 'date')
	formDate.setAttribute("required", "");
	addToDo_toArray.appendChild(formDate);




	return addToDo_toArray
}

export default addToDo;