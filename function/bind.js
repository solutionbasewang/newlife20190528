function Fun(){
    this.whoAmI=function(){
        return this;
    }.bind(this)
}

var a = new Fun();
var b = {
    whoAmI:a.whoAmI
}
if(a.whoAmI()===a){
    console.log("a.whoAmI===a");
}
else{
    console.log("a.whoAmI!==a");
}
if(b.whoAmI()===a){
    console.log("b.whoAmI===a");
}
else{
    console.log("b.whoAmI!==b");
}