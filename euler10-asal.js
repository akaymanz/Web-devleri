(function euler010() {
  var maxPrimeValue = 2e+6;
  var i = maxPrimeValue;
  var sum = 0;

 
  while (i >= 2) {
    if (isPrime(i) === true) {
      sum += i;
    }

    i--;
  }

  function isPrime(n) {
    var x = Math.floor(Math.sqrt(n));
    var j = x;

    while (j >= 2) {
      if (n % j === 0) {
        return false;
      }
      j--;
    }

    return true;
  }

  console.log(sum);
  return sum;
}());