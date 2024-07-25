var fruit = 0;
while(fruit < 9){
    // console.log('eating fruits')
    // console.log(fruit);
    fruit++;
}

var num = 1;
while(num <=10){
    // console.log(num);
    num++;
}

var price = 10;
while(price >= 0){
    // console.log(price);
    price--;
}

for(var taka =10; taka <= 20; taka+=2){
    // console.log(taka)
    // console.log('ami nurmoni')
}

var flowers = ['rose','waterlili','hasnahena','rogonigonda','sondamuki'];
for(var i =0; i < flowers.length; i++){
    var flowerNumber = flowers[i]
    // console.log(flowerNumber)
}

for(var m = 1; m <= 15; m++){
    // console.log(m);
    if(m >= 9){
        break;
    }
}

var priceCost = [23, 54, 12, 75, 86, 97, 43,17, 37, 64, 53, 46];
for(i = 4; i < priceCost.length; i++){
    var num = priceCost[i];
    if(num < 60){
        continue;
    }
    // console.log(num)
}