import DomMaker from "../../main/domMaker";
// creates a list of catagories and return it to the dom
function listDom(){
	const listsD = new DomMaker('div', 'lists', '', '', '');
	const lists = listsD.maker();
	const dayD = new DomMaker('div', 'list', '', '', 'Day');
	const day = dayD.maker();
	lists.appendChild(day);
	const weekD = new DomMaker('div', 'list', '', '', 'Week');
	const week = weekD.maker();
	lists.appendChild(week);
	const monthD = new DomMaker('div', 'list', '', '', 'Month');
	const month = monthD.maker();
	lists.appendChild(month);
	
	return lists
}

export default listDom;