// 无返回值的构造函数,与一般的函数调用的不同是上下文发现了改变，普通函数返回this，是返回的windows对象，new之后就了。
function a(){
    this.a_f=function(){
        return this;
    }
}
var a1 = new a();
var a2 = new a();
if(a1.a_f()===a1){
    console.log("a.a_f === a1");
}
if(a1===a2){
    console.log("a1===a2");
}
else if(a1.a_f()===a2.a_f()){
    console.log("a1.a_f===a2.a_f")
}
else{
    console.log("a1 !== a2");
}
// 构造函数返回值
