var outterValue="outer";
var later;
function outerFunc(){
    var innerValue="inner";
    function innerFunc(){
        if(innerValue==="inner"){
            console.log(innerValue);
        }
        if(outterValue==="outer"){
            console.log(outterValue);
        }
    }
    later=innerFunc;
}
outerFunc();
later();

//闭包，私有变量访问
function Func(){
    var value = 1;
    this.addValue=function(){
        value++;
    }
    this.getValue=function(){
        return value;
    }
}

var f1 = new Func();
f1.addValue();
var f2 = new Func();
f2.addValue();
f2.addValue();
//虽然value已经在作用域内执行完成，但是Func已经实例化了一个对象，所以value这个变量是对一直挂在这个对象变量地址所对应的的堆上，不会被垃圾回收，所以形成了一个闭包（安全气泡）
function bclick(){
    console.log(f1.getValue())
}
function bclick1(){
    console.log(f2.getValue())
}