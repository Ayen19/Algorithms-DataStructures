const { log } = console;

const selectionSort2 = (array) => {
    //
};

const selectionSort = (array) => {
    let min;
    let i;
    let j;
    // let currentIndex;
    // let minIndex;
    const length = array.length;

    for (j = 0; j < length; j++) {
        min = j;
        temp = array[j];
        for (i = j + 1; i < length; i++) {
            // currentIndex = array[i];

            if (array[i] < array[min]) {
                min = j;
                // min = currentIndex;
                // minIndex = i;
            }
        }
        array[i] = array[min];
        array[min] = temp;

        // array[j] = min;
        // array[minIndex] = temp;
        // log(array);
    }

    return array, log(array);
};

array = [2, 5, 9, 7];
selectionSort(array);
//behaving unpredictably.