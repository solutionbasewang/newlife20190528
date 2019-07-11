//生成器函数
function* factory() {
    console.log("car-1");
    yield "car";
    console.log("apple-2");
    yield "apple";
}
//生成器嵌套，执行方式是执行-->跳出-->执行完成返回-->执行
function* factoryTotal() {
    yield "house";
    yield* factory();
}
//居然这个函数生成了一个队列，并且return了一个队列
for (let obj of factory()) {
    // console.log(obj);
}
//另一种方式,用迭代器，生成函数会return一个迭代器。
var result = factory();
var r1 = result.next();
console.log(r1.value);
console.log(r1.done);
var r2 = result.next();
console.log(r2.value);
console.log(r2.done);
//利用生成函数生成唯一id
function* factory2() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}
var f2 = factory2();
console.log(f2.next());
console.log(f2.next());
console.log(f2.next());
console.log(f2.next());

// function fund(){
//     fund();
//     console.log("m2");
// }
// fund();
function fund1(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * fund1(n - 1);
    }
}
console.log(fund1(5));
console.log("--------------------");

let json = [
    {
        id: 1,
        name: "l1",
        child: [
            {
                id: 3,
                name: "l1-1",
                child: []
            },
            {
                id: 4,
                name: "l1-2",
                child: []
            }
        ]
    },
    {
        id: 2,
        name: "l2",
        child: [
            {
                id: 5,
                name: "l2-1",
                child: []
            } 
        ]
    }
]
//常规的递归遍历1
function dg(obj,callback){
    if(obj!==undefined){
        callback(obj);
    }
    for(let i=0;i<obj.child.length;i++){
        dg(obj.child[i],callback);
    }
}
for(var i=0;i<json.length;i++){
    dg(json[i],function(obj){
        console.log(obj.name);
    });
}
//常规的递归遍历2
function dg1(obj){
    for(let i=0;i<obj.length;i++){
        console.log(obj[i].name);
        dg1(obj[i].child);
    }
}
dg1(json);
//生成函数递归
function* dg2(obj){
    for(let i=0;i<obj.length;i++){
        yield* dg2(obj[i].child);
    }
}
 var result = dg2(json);
for(let obj of result){
    console.log(obj.value);
}
//生成函数带参数
function* sc(name){
    const ins= yield ("hell"+name);
}
console.log("-------------------");
//生成函数执行顺序
function* test(){
    console.log("1");
    yield "2";
    console.log("2");
    yield "3";
    console.log("3");
    
}
let tt = test();
//当在执行到yield关键字时候，程序挂起，只有next之后才继续执行。
var tt1 = tt.next();
var tt2 = tt.next();
var tt3 = tt.next();
console.log(tt3.done);
console.log("-------------------");
//生成函数传参
function* test(action){
    const imposter= yield ("hattori "+action);//1
    if(imposter === "Hanzo"){//2
        console.log("the generator has been infiltrated");
    }
    yield ("yoshi ("+imposter+") "+action);//3
}
//1
var t2 = test("skult");//第一次传入参数，执行第一行属性，
var r1 = t2.next();//返回第一个yield，挂起
console.log(r1.value);
var r2 = t2.next("hanzo");//回到上一个挂起的点，此时要主要，这时候通过next传入的参数，并将其赋值给imposter,此时便生成了互通，先返回，然后在传入
console.log(r2.value);
console.log("-------------------");
//生成函数传入异常
function* exception(){
    try{
        yield "a";
        console.log("error")//这一句没有生效
    }
    catch(e){
        if(e==="catch exception"){
            console.log("I get it");
        }
    }
}
var e1 = exception();
var er1 = e1.next();
console.log(er1.value);
e1.throw("catch exception");
console.log("-------------------");
//生成器函数带返回值
function* cs(action){
    yield "alex "+action;
    return "return "+action;//return 会自动放在迭代器当中，当做最后一次迭代值。
}
var cs1 = cs("do");
var csr1 = cs1.next();
console.log(csr1.value+"-"+csr1.done);
var csr2 = cs1.next();
console.log(csr2.value+"-"+csr2.done);
