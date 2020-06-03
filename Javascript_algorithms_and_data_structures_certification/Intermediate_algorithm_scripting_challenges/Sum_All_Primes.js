/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

*/

function test_prime(n) {
  if (n === 1 || n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function sumPrimes(num) {
  let primesLessThanNum = [...Array(num + 1).keys()].filter(test_prime);
  return primesLessThanNum.reduce((item, sum) => sum + item);
}

console.log(sumPrimes(10));
