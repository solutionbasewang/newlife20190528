let at1 = false;
var p1 = {
    value: "ninja1",
    time: 0
}
const ninjiaPromise = new Promise((resolve, reject) => {
    console.log("init");
    if (at1) {
        setTimeout(() => {
            resolve(p1);
        }, p1.time * 1000)

    } else {
        reject("err");

    }
})
//主程序不会停顿3秒，会继续往下执行，在“go on”之后会出输出“ninja1”
ninjiaPromise.then((p) => {
    //console.log(p.value);//临时注释
}, err1 => {
    //console.log(err1);//临时注释
})
console.log("go on");
console.log("-------------------------")
//promise函数的执行顺序
let flag = 0;
console.log("code start");
var promise1 = new Promise((resolve, reject) => {
    console.log("promise excute 1");
    setTimeout(() => {
        console.log("resolve do 2");

        resolve("hattori 4");
        console.log("resolve end 3");



    }, 500)
})
// if(promise1!==null){
//     console.log("after creating promise1");
// }
promise1.then((p => {
    console.log(p);
    console.log("resolve 5")
}), err => {
    console.log("err");
})
promise1.then((p => {
    console.log(p);
    console.log("resolve 6")
}), err => {
    console.log("err");
})
console.log("-------------------------")
//promise调用链
var promise2 = new Promise((resolve, reject) => {
    resolve("a");
})
promise2.then(p => {

    console.log(p);
    p = p + "1";
    return p;
}).then(p => {
    throw "error";
    console.log(p);

    // return p
}).catch(e => {
    console.log(e);
})
//promise.all 同时执行多个promise
function promise_all(p) {
    return new Promise((resole, reject) => {
        setTimeout(resole, 5000, p);
    })
}
Promise.all([promise_all("p1"), promise_all("p2"), promise_all("p3")]).then(resu => {
    const r1 = resu[0], r2 = resu[1], r3 = resu[2];
    console.log(r1);
    console.log(r2);
    console.log(r3);
})
//promise 竞赛
Promise.race([promise_all("p1"), promise_all("p2"), promise_all("p3")]).then(resu => {
    console.log(resu);
})
//promise 和 生成函数一起用
function* gets() {
    var flag=0;
    const a = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, flag);
    })
    const b = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, a);
    })
    const c = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, b);
    })
}
function doit(){
    var items = gets();
    function inner(t){
        if(t.done){
            return;
        }
        var v = t.value;
        if(v instanceof Promise){
            v.then(r=>{
                r = r+1;
                console.log(r);
                inner(items.next(r))
            })
        }
    }
    inner(items.next())
}
doit();