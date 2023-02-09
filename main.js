function addNewTask(){
    var list = document.getElementById("list");
    var text = document.getElementById("taskname").value;

    if(text.length === 0){
        alert("Tarefa inválida");
        return;
    }
    var listItem = document.createElement("li");
    
    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}