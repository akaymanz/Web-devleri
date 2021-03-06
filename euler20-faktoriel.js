var digitArrayMultiply = function(digits1, digits2) {
    var productDigits = [];
    for (var i = 0; i < digits1.length; i++) {
        digit1 = digits1[i];
        for (var j = 0; j < digits2.length; j++) {
            digit2 = digits2[j];
            var product = digit1 * digit2;
            var productIndex = i + j;
            
            productDigits[productIndex] = (productDigits[productIndex] || 0) + product;
            rebalanceDigitArray(productDigits, productIndex);
        }
    }
    
    return productDigits;
};
    
var digitArrayAdd = function(digits1, digits2) {
    var sumDigits = [];

    var i = 0;
    var digit1 = digits1[i];
    var digit2 = digits2[i];
    while(digit1 || digit2){
        sumDigits[i] = sumDigits[i] || 0;
        if(digit1){
            sumDigits[i] += digit1;
        }
        if(digit2){
            sumDigits[i] += digit2;
        }
        
        rebalanceDigitArray(sumDigits, i);
        
        i++;
        digit1 = digits1[i];
        digit2 = digits2[i];
    }

    return sumDigits;
};


var rebalanceDigitArray = function(digits, index){
    var digit = digits[index];
    while(digit > 9){
        
        digits[index] = digit % 10;
        
      
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
};

var testArray = [2,8,4];
var testArray2 = [1,9,3];

console.log(digitArrayMultiply(testArray, testArray2));



var getSumOfFactorialDigits = function(num){
    
    var multiplier = 2;
    var factorial = [1];
    while(num >= multiplier){
        factorial = digitArrayMultiply(factorial, [multiplier]);
        multiplier++;
    }
    
   
    var sum = 0;
    for(var i = 0; i < factorial.length; i++){
        sum += factorial[i];
    }
    
    return sum;
};

console.log(getSumOfFactorialDigits(10));
console.log(getSumOfFactorialDigits(100));