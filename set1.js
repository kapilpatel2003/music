  var id=setTimeout(Anim,5000);

  function Anim(){
    //console.log("Hello Kapil");

    var target=document.getElementById("test");
    target.style.width="500px";
  }
  function stopAnimation(){
    clearTimeout(id);
  } 