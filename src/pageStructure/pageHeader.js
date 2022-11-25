import DomMaker from "../main/domMaker";

function headerDom(){
	const headerD = new DomMaker('div', 'header', '', '', '');
	const header = headerD.maker();
	const titleD = new DomMaker('h2','', '', '','ToDo\'s');
	const title = titleD.maker();
	header.appendChild(title);

	return header;
}


export default headerDom;