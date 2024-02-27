 //11.q
 function unique(words)
 {
  let unique=[];
  words.forEach(element => {
  if(!unique.includes(element))
    unique.push(element);
  console.log(unique);
  });
  return unique;
}

console.log("Array 1: ", unique(['green','red', 'blue','red']));
console.log("Array 2: ",unique(['red', 'green', 'green', 'red']));