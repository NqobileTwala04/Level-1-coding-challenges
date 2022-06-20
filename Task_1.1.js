const multiples0f3and5 = (number) => {
  const sum = 0;
  var i;
  for (i = 1; i < number; i++) {
       if (i % 3 === 0 || 1 % 5 === 0 ) {
           sum = sum + i 
      }
 }
  return sum;
}
console.log(multiples0f3and5(1000));