function mergeSort(array){
  if(array.length === 1){
    return array
  }
  
  const mid = Math.floor(array.length/2)
  const firstHalf = array.slice(0, mid)
  const secondHalf = array.slice(mid)
  return merge(mergeSort(firstHalf), mergeSort(secondHalf)) 
}

function merge(half1, half2){
  let finalArr = []
  
  let length = half1.length+half2.length
  
  for(i=0; i<length;i++){
  
    if(half1[0]<=half2[0]|| half2.length === 0) { 
      finalArr.push(half1[0])
      half1.splice(0, 1)
    }
    else{
      finalArr.push(half2[0])
      half2.splice(0, 1)
    }
  }
  return finalArr
}


console.log(mergeSort([10, 8, 5 ,4, 9, 12, 11]))