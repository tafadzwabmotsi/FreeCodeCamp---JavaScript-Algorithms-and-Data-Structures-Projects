function insertionSort(array) {

    const arr = [...array]; // copy array
    let index; // index variable for shifting elements
    let temporaryElement; // temporary variable to element out of order

    for (let outOfOrderIndex = 1; outOfOrderIndex < arr.length; outOfOrderIndex++) {
        if (arr[outOfOrderIndex] < arr[outOfOrderIndex - 1]) {

            temporaryElement = arr[outOfOrderIndex];
            index = outOfOrderIndex;

            //perform swapping until temporaryElement gets right position
            do {
                arr[index] = arr[index - 1];
                index--;
            } while (index > 0 && temporaryElement < arr[index - 1]);
        }

        if (temporaryElement !== undefined) {
            arr[index] = temporaryElement; // copy temporaryElement into its rigthful position
        }

    }

    return arr;
}


insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
