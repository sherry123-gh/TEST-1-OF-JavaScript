function fizzBuzz(param1, param2) {
  const combinedLength = param1.length + param2.length;

  if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
      return "FizzBuzz";
  } else if (combinedLength % 3 === 0) {
      return "Fizz";
  } else if (combinedLength % 5 === 0) {
      return "Buzz";
  } else {
      return "";
  }
}

// Output will depend on the combined length of "hello" and "world"
const give = fizzBuzz("param1", "param2");
console.log(give);  



