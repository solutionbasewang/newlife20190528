function animate() {
    var ele = document.getElementById("box1");
    var tick = 0;
    var timeer = setInterval(function () {
        if (tick < 100) {
            ele.style.left = ele.style.top = tick + "px";
            tick++;
        }
        else {
            clearInterval(timeer);
            if (tick === 100) {
                console.log("tick ===100");
            }
            if (ele) {
                console.log("ele can read");
            }
            if (timeer) {
                console.log("timeer can read");
            }

        }
    }, 10)
}
var a=1;
function add(){
    a++;
    console.log(a);
}