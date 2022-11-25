import DomMaker from "../../main/domMaker";

function addBtn(){
	const addBtnD = new DomMaker('div', 'add_btn', 'add_todo', '', 'Add ToDo');
	const add_btn = addBtnD.maker();

	return add_btn;
}


export default addBtn;