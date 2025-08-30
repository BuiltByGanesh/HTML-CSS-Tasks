let count = 4;

document.getElementById("addBtn").addEventListener("click", () =>{
    let newItem = document.createElement("li");
    newItem.innerText = "Item " + count++;
    newItem.className = "list-item";
    document.getElementById("list").appendChild(newItem);
});


