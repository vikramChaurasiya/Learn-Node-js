console.log("sum module Executed");
var x = "Hello world";
function calculateSum(a,b){
    const sum = a + b;
    console.log(sum);
}
module.exports = {
    x,
    calculateSum,
}