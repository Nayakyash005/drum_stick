for(var i = 0;i < document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       var button  = this.innerHTML;
       make_sound(button);
    }
    );
   
    for(var i = 0;i < document.querySelectorAll("button").length;i++){
        document.querySelectorAll("button")[i].addEventListener("touchstart",function(){
           var button  = this.innerHTML;
           make_sound(button);
        }
        );
}


document.addEventListener("keypress",function(event){

make_sound(event.key);
});
function make_sound(key){
switch(key){
    case "w": 
    var tone1 = new Audio('sounds/tone1.mp3');
   tone1.play();
   break;
   case "a": 
    var tone2 = new Audio('sounds/tone2.mp3');
   tone2.play();
   break;
   case "s": 
    var tone3 = new Audio('sounds/tone3.mp3');
   tone3.play();
   break;
   case "d": 
    var tone4 = new Audio('sounds/tone4.mp3');
   tone4.play();
   break;
   case "j": 
    var tone5 = new Audio('sounds/tone5.mp3');
   tone5.play();
   break;
   case "k": 
    var tone6 = new Audio('sounds/tone6.mp3');
   tone6.play();
   break;
   case "l": 
    var tone7 = new Audio('sounds/tone7.mp3');
   tone7.play();
   break;
   case "m":
   var tone8 = new Audio('sounds/tone8.mp3');
   tone8.play();
   break;
   }
}
}
