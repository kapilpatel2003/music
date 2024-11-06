 //var a= document.getElementById("outer").parentElement;
 //var a= document.body.parentElement;
  //document.getElementById("inner").parentElement.style.background="green";

  //var a= document.getElementById("inner").parentElement;

  //document.getElementById("inner").parentNode.style.background="red";

  //var a= document.getElementById("inner").parentNode;
  var a= document.getElementById("outer").children;
  var a= document.getElementById("inner").children;
 document.getElementById("inner").children[1].style.background="red";
   
 var a=document.getElementById("inner").children[1];
 
 var a=document.getElementById("inner").childNodes;
 var a=document.getElementById("inner").childNodes[2].innerHTML;

 document.getElementById("inner").firstElementChild.style.background="orange";

 var a=document.getElementById("inner").firstElementChild.innerHTML;
 var a=document.getElementById("inner").firstChild;

///next sbiling//
  var a =document.getElementById("child").nextElementSibling;
  var a =document.getElementById("child").previousElementSibling;
  var a =document.getElementById("child").nextElementSibling.innerHTML;

  document.getElementById("child").previousElementSibling.style.background="pink"; 
  var a =document.getElementById("child").previousElementSibling.innerHTML;


  




 console.log(a);