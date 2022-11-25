import DomMaker from "../main/domMaker";

function footerDom(){
	const footerD = new DomMaker('div', 'footer', '', '', 'TOP: Tebibux');
	const footer = footerD.maker();

	return footer;
}


export default footerDom;