import DomMaker from "../main/domMaker";

function footerDom(){
	const footerD = new DomMaker('div', 'footer', '', '', '');
	const footer = footerD.maker();
	const titleD = new DomMaker('h2','', '', '','TOP: Tebibux');
	const title = titleD.maker();
	footer.appendChild(title);

	return footer;
}


export default footerDom;