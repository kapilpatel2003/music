//var a= document.createElement("h2");

//var b= document.createTextNode("This is Just text");

//var c= document.createComment("This is comment");  

 

//console.log(a);
//console.log(b);
//console.log(c);
//apned//
//a.appendChild(b); 
 //document.getElementById("test").appendChild(a);
 //console.log(a);

 //var target=document.getElementById("test");
 //target.insertBefore(a,target.childNodes[0])

var newElement =document.createElement("h2");
var newText=document.createTextNode("This is just text");
newElement.appendChild(newText);
var target =document.getElementById("test");
var newElement="<h2>Hello</h2>";
target.insertAdjacentElement("afterend ,",newElement);