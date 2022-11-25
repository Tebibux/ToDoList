class DomMaker{
	constructor(type, className='', Id='', InHTML='', InText=''){
		this.type = type;
		this.className = className;
		this.Id = Id;
		this.InHTML = InHTML;
		this.InText = InText;
	}
	maker(){
		const domElement = document.createElement(`${this.type}`);
		domElement.className = `${this.className}`;
		domElement.id = `${this.Id}`;
		domElement.innerHTML = `${this.InHTML}`;
		domElement.innerText = `${this.InText}`;
		return domElement
	}
}

export default DomMaker;