var bigNumber = {};

bigNumber.createFromNumber = function(number){
    var bigNum = [number];
    bigNumber.rebalanceDigitArray(bigNum);
    return bigNum;
};

bigNumber.rebalanceDigitArray = function(digits, index){
    index = index || 0;
    var digit = digits[index];
    while(digit > 9){
       
        digits[index] = digit % 10;
        
        
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
};

var getPowerNums = function(power){
    var powerNums = [];
    
    var minNum = Math.pow(2, power);
    var maxNum = Math.pow(9, power) * (power+1);
    
    for(var i = minNum; i < maxNum; i++){
        var num = bigNumber.createFromNumber(i);
        var sum = 0;
        
        for(var j = 0; j < num.length; j++){
            sum += Math.pow(num[j], power);
        }
        
        if(sum == i){
            powerNums.push(i);
        }
    }
    
    return powerNums;
};

console.log(getPowerNums(4));
var powerFiveNums = getPowerNums(5);
var powerFiveSum = 0;
for(var i = 0, powerFiveNum; powerFiveNum = powerFiveNums[i]; i++){
    powerFiveSum += powerFiveNum;
}
console.log(powerFiveNums);
console.log(powerFiveSum);

