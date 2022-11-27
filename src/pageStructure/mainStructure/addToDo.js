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
	const formDeskD = new DomMaker('textarea', '', 'formDesc', '', '');
	const formDesk = formDeskD.maker();
	formDesk.setAttribute('placeholder', 'Input Description of to do list')
	formDesk.setAttribute("required", "");
	addToDo_toArray.appendChild(formDesk);

	// adding date input to the addtodo page form
	const formDateD = new DomMaker('input', '', 'formDate', '', '');
	const formDate = formDateD.maker();
	formDate.setAttribute('type', 'date')
	formDate.setAttribute("required", "");
	addToDo_toArray.appendChild(formDate);

	// adding date input to the addtodo page form
	const formPriorityD = new DomMaker('select', '', 'formPriority', '', '');
	const formPriority = formPriorityD.maker();
	const option1 = new DomMaker('option', 'option', 'medium', '', 'Medium').maker();// medium
	formPriority.appendChild(option1);
	const option2 = new DomMaker('option', 'option', 'high', '', 'High').maker(); // High
	formPriority.appendChild(option2);
	const option3 = new DomMaker('option', 'option', 'low', '', 'Low').maker(); // Low
	formPriority.appendChild(option3);
	formPriority.setAttribute("required", "");
	addToDo_toArray.appendChild(formPriority);


	// adding submit button input to the addtodo page form
	const formSubBtnD = new DomMaker('button', 'formSubBtn', 'formSubBtn', '', 'Submit');
	const formSubBtn = formSubBtnD.maker();
	formSubBtn.classList.add('hightMaker');
	addToDo_toArray.appendChild(formSubBtn);


	return addToDo_toArray
}

export default addToDo;