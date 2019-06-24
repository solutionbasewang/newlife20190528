var a = {
    f1:function(){
        var sum=0;
        var a=[1,2,3,4];
        return a.reduce(function(c,d){
            return c*d;
        })
    },
    percent_conversion_size:function(font_size,...p){
        var width=100;
        var nums=p;
        var size = nums.reduce(function(a,b){
            return a*b;
        })*width;
        return Math.ceil(size/font_size)
    }
}
console.log(a.f1());
console.log(a.percent_conversion_size(14,0.8,0.6));