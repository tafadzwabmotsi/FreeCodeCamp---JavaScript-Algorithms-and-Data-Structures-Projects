function selectionSort(array) {

    //copy array
    const sortedArray = [...array];
  
    //find the least location
    const minLocation = (arr, start, end) => {
      let location = start;
      for (let index = start + 1; index <= end; index++){
        if (arr[location] > arr[index]){
          location = index;
        }
      }
  
      return location;
    }
  
    //swap
    const swap = (arr, first, last) =>{
      [arr[first], arr[last]] = [arr[last], arr[first]];
    }
  
    //sort
    for (let index = 0; index < array.length; index++){
      let minLoc = minLocation(sortedArray, index, array.length - 1)
      swap(sortedArray, index, minLoc)
    }
  
    console.log(sortedArray);
    return sortedArray;
  }
  
  
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  