var a=0;
  //setInterval(Anim,1000);
var id=setInterval(Anim,10);

function Anim(){
    
    a=a+10;
    //console.log("a");
if(a==200){
  clearInterval(id); 
}else{
    var target=document.getElementById("test");
    target.style.marginLeft=a+"px";
}

}

    // var target=document.getElementById("test");
    // target.style.marginLeft=a+"px";
