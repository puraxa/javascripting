const evenNumbers = (n) => {
  if(n%2==0){
    return n;
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = numbers.filter(evenNumbers);

console.log(filtered);