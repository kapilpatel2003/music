    
// b=document.createTextNode("Wow new Text");
//a.appendChild(b);
//var target=document.getElementById("list");
//var d=target.children[0];
 //console.log(d);
 //target.replaceChild(a,d);
 //target.removeChild(d);
 var target=document.getElementById("list").children[1 ];
 var copyElement=target.cloneNode(true);
 console.log(copyElement);
 document.getElementById("list1").appendChild(copyElement);
