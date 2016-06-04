function addNewTodo() {
	var todo = document.getElementById("todos").value;
	var newTodo = document.createElement("p");
	var addTodo = document.createTextNode(todo);
	newTodo.appendChild(addTodo);

	var getTodo = document.getElementById("todo");

	document.body.insertBefore(newTodo, getTodo);
	
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Task Done";
	btn.onclick = function() {
		addTodo.parentElement.removeChild(addTodo);
		this.parentElement.removeChild(this);
	}
	document.body.appendChild(btn);
 }




	