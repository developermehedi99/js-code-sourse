function wife(){
    // console.log('love you wife');
    // console.log('love you2 always')
}
wife();


function mountainDew(money){
    // console.log('mountain dew we dam :', money, 'taka')
}
mountainDew(40);


function number (math=77, english=93, bangla=80){
    // console.log(math, english, bangla);
}
number(60, 50, 33);


function mango(price){
    var mangoDam = 50;
    var motMango = mangoDam / price;
    return motMango;
}

var mangos = mango(10);
// console.log(mangos)

function grade(sub1, sub2, sub3){
    var total = sub1 + sub2 + sub3;
    var avarage = total / 3;
    return avarage;
}
var myAvarage = grade(70,80,88);
console.log('amar avarage number :', myAvarage)