function Ninja(){
    this.whoAmI=()=> this;
}
var n1= new Ninja();
console.log(n1.whoAmI());