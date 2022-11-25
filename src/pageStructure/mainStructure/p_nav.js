import DomMaker from "../../main/domMaker";

function p_Nav(){
	const p_navD = new DomMaker('div', 'header', '', '', '');
	const p_nav = p_navD.maker();
	const titleD = new DomMaker('h3','', '', '','Catagories');
	const title = titleD.maker();
	p_nav.appendChild(title);

	return p_nav;
}


export default p_Nav;