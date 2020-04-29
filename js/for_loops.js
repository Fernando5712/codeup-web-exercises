// function showMultiplicationTable() {
//     var base = prompt("choose a number", "");
//     var num = 1;
//     for (num; num <= 10; ++num)
//         console.log(base  + " * " + num + " = " + base * num);
// }
// console.log(showMultiplicationTable());


// for (var num = 1; num <= 10; num++) {
//     var x = Math.floor(Math.random() * 180) + 20;
//     if (x % 2 ===0){
//     console.log(x + " is even")}
//     else console.log(x + " is odd")
//
// }


// for( i = 1; i <= 9; i++ ) {
//     var x = "".repeat(9 - i) + (i + "").repeat(i);
//     console.log(x)
// }

// for (var i = 100; i >= 5; i -= 5){
//     console.log(i)
// }

var conesForSell = Math.floor(Math.random() * 50) + 50;
do {
    console.log(" Cones for sale " + conesForSell);
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought <= conesForSell){
        console.log(conesForSell + " cones sold ");
        conesForSell -= conesBought;
        console.log(" My number of cones left is " + conesForSell);
        if (conesForSell === 0){
            console.log("i sold all my cones ");
        }
    } else {
        console.log("cant sell you " + conesBought + " i only have " + conesForSell + " left ")
    }
}while (conesForSell >= 1);
