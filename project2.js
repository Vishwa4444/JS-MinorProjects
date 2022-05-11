function clearStorage(){
    console.log("Clearing the storage")
    localStorage.clear();
    update();
}
function getAndUpdate(){
    console.log("Updating List....")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update() 
}
function update(){
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
       // itemJsonArray.push([tit, desc])..Dont push
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        
    }
    

    //populate the table
    tablebody = document.getElementById('tablebody')
    let str = "";
    itemJsonArray.forEach((element,index) => {
        str += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>
         `

    });
    tablebody.innerHTML = str;
}
add = document.getElementById("add")
add.addEventListener("click", getAndUpdate)
function deleted(itemindex){
    console.log("Delete",itemindex)
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr)
   //Delete itemindex element from the array
    itemJsonArray.splice(itemindex,1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update()
}