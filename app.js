
var listo=document.getElementById("list")


function todo(){
    var todo_items=document.getElementById("inputkar");
    var libana=document.createElement("li");
    var text=document.createTextNode(todo_items.value)


    var delbtn=document.createElement("button")
    var deltxt=document.createTextNode("delete")
    delbtn.appendChild(deltxt)
    delbtn.setAttribute("class","btnstyle")
    delbtn.setAttribute("onclick","del(this)")



var editbtn=document.createElement("button")
    var edittxt=document.createTextNode("EDIT")
    editbtn.appendChild(edittxt)
    editbtn.setAttribute("class","btnstyle")
    editbtn.setAttribute("onclick","edit(this)")


    console.log(delbtn)
    libana.appendChild(text)
    libana.appendChild(delbtn)
    libana.appendChild(editbtn)

    listo.appendChild(libana)
   
    todo_items.value=""
    console.log(listo)



}

function del(e){
   e.parentNode.remove()
}

function deleteall(){
    listo.innerHTML=""
}


function edit(e){
   var m=e.parentNode.firstChild.nodeValue;
   var editvalue=prompt("enter your edit value" , m)
   
   e.parentNode.firstChild.nodeValue=editvalue



}
