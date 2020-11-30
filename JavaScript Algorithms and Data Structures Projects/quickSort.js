function quickSort(array) {

    const copyArr = [...array];

    //swap function
    const swap = (arr, firstIndex, lastIndex) => { [arr[firstIndex], arr[lastIndex]] = [arr[lastIndex], arr[firstIndex]] }

    //partion the array
    const partition = (arr, firstIndex, lastIndex) => {
        swap(arr, firstIndex, Math.floor((firstIndex + lastIndex) / 2));

        let pivot = arr[firstIndex]; // get the pivot to the beggining of the array
        let smallIndex = firstIndex;

        //begin partitioning
        for (let index = firstIndex + 1; index <= lastIndex; index++) {
            if (arr[index] < pivot) {
                smallIndex++;
                swap(arr, index, smallIndex);
            }
        }

        swap(arr, firstIndex, smallIndex);

        return smallIndex;
    }

    //recursive quick sort
    const recursiveQuickSort = (arr, firstIndex, lastIndex) => {
        if (firstIndex < lastIndex) {

            let partitionIndex = partition(arr, firstIndex, lastIndex);
            recursiveQuickSort(arr, firstIndex, partitionIndex - 1);
            recursiveQuickSort(arr, partitionIndex + 1, lastIndex);

        }
    }

    //quick sort
    recursiveQuickSort(copyArr, 0, copyArr.length - 1);

    return copyArr;
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
