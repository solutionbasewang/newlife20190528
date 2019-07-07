function Button(){
    this.clicked=false;
    this.click=function(){
        this.clicked=true;
        if(button.clicked){
            console.log("the button has been click");
        }
    }
}
function Button1(){
    this.clicked=false;
    this.click=()=>{
        this.clicked=true;
        if(button1.clicked){
            console.log("the button has been click");
        }
    }
}
function juggle(){
    var result = 0;
    for(var i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    this.result = result;
}
var a={};
var b={};
juggle.call(a,4,5,6,7);
juggle.apply(b,[4,5,6,7]);
console.log(a.result);
console.log(b.result);