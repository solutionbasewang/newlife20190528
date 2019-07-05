// this 最终解析
function test(){
    this.a=function(){
        console.log("a");
        return this;
    }
}
// this 在严格模式下和非严格模式下的区别,严格模式下，return undefined,非严格模式下，返回的是window对象
function this_no_strict(){
    "use strict";
    return this;
}
function this_strict(){
    return this;
}

// 从函数转换成对象
function getThis(){
    return this;
}
var getThisObj = getThis();
var obj1={
    getMyThis:getThisObj
}

function getComm(){
    // 代码说明了上下文的转换，由windows转换obj的上下文，这就是面向对象编程
    if(getThis()===window){
        console.log("getThis return windows");
    }
    if(obj1.getMyThis===window){
        console.log("obj1.getMyThis always windows");
    }
    if(obj1.getMyThis!==obj1){
        console.log("obj1 no windows ");
    }
};

// 通过以上的描述我们可以确定当我们通过new 去构造一个对象的时候，他是把我们构造的这个对象传递给了构造函数里，覆盖了this对象。
(function(){
    var t = new test();
    var target = t.a();
    if(t===target){
        console.log("t===target")
    }
    target.a();
    var a =  this_no_strict();
    var b =  this_strict();
    console.log(a===undefined);
    console.log(b===window);
    // -------------
    getComm();
})()


