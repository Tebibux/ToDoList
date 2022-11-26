import ToDoData from "./arrayObject";

let date = new Date().toLocaleDateString();

let todo1 = new ToDoData('To-high', 'Man you have to finish it sunday morning', date, 'High');
let todo2 = new ToDoData('To-mid', 'Man you have to finish', date, 'Mid');
let todo3 = new ToDoData('To-low', 'Man you have to', date, 'Low');

const arrayData = [
	todo1,
	todo2,
	todo3
]

export default arrayData
// console.log(date)