function myApp() {

	//take the value that you entered in the input field
	var item = document.getElementById("toDoInput").value;  

	//create the tag to insert the value in here
	var newItem = document.createElement("li");

	//create the node value
	var text = document.createTextNode(item);
	
	//insert the node value in a tag
	newItem.appendChild(text); 

	//add the entire tag
	document.getElementById("toDoList").appendChild(newItem);
}

