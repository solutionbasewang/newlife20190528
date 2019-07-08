//变量可变性标识符，分为两类，可变和不可变，可变：var,let,不可变：const
const a="1";
//const变量可以变更对象里面的属性值
const aa={};
var b="2";
let c="3";
try{
    aa.web="web";
    console.log(aa.web);
    }
    catch{
        console.log("aa can not changed");
    }
try{
a="11";
console.log(a);
}
catch{
    console.log("a can not changed");
}
b="22";
console.log(b);
c="33"
console.log(c);
//-------------------------------------------
//变量的关键字的词法环境,var
//变量f是全局，它的环境是全局环境
//变量e是函数环境，它的环境是函数环境，函数内环境
//变量x是块级环境，var忽略块级环境，所以他是属于函数内环境

var f="f";
function func(){
    var e="3";
    for(var i=0;i<3;i++){
        var x = "11";
    }
    console.log("x="+x);
}
func();
//变量的关键字的词法环境,let,const 是具有块级环境的

