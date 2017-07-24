function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(first, second){
  let sorted = []
  while (first.length !=0 && second.length !=0) {
     first[0] < second[0] ? sorted.push(findMinAndRemoveSorted(first)) : sorted.push(findMinAndRemoveSorted(second))
  }
  return sorted.concat(first).concat(second)
}

function mergeSort(arr){
  let mid = arr.length/2
  let first = arr.slice(0,mid)
  let second = arr.slice(mid,arr.length)
  return arr.length<2 ? arr : merge(mergeSort(first), mergeSort(second))
}
