function fibs(n){
  console.log("This was printed recursively");
  let array= []
  for(let i = 0; i<=n; i++){
    if(i<=1){
      array.push(i)
    }
    else{
      sum = Number(array.slice(-1)) + Number(array.slice(-2, -1))
      array.push(sum)
    }
    
  }
  return array
}

console.log(fibs(0))

function fibsRec(n) {
  console.log("This was printed recursively");
  if (n === 0) return [0]
  if (n === 1) return [0, 1]

  let seq = fibsRec(n - 1)
  seq.push(seq[seq.length - 1] + seq[seq.length - 2])
  return seq
}

console.log(fibsRec(5)) 
  

