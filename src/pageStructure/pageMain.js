import DomMaker from "../main/domMaker";
import p_Nav from "./mainStructure/p_nav";// nav title
import listDom from "./mainStructure/lists"; // list of catagories
import addBtn from "./mainStructure/addbutton";
import todoDom from "./mainStructure/todos"; // import the to be displayed elem


function mainDom() {
	// creates the main DOM element
	const mainD = new DomMaker('div', 'main', '', '', '');
	const main = mainD.maker();

	// create and append 
	// the main element
	//		the aside
	// 		the main-section
	const asideD = new DomMaker('div', 'aside', '', `${p_Nav()}`, '');
	const aside = asideD.maker();
	aside.appendChild(p_Nav()); // navigation title
	aside.appendChild(listDom())// list of catagories append
	aside.appendChild(addBtn());// add button append

	main.appendChild(aside)

	// the main-section
	const mainSecD = new DomMaker('div', 'main-section', '', `${todoDom()}`, '');
	const mainSec = mainSecD.maker();

	mainSec.appendChild(todoDom());

	main.appendChild(mainSec);// appending main section
	return main
}


export default mainDom;