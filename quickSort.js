/*

The quick sort algorithm : 
the pivot , the pointer index for greater than and less the pivot, the split/partition function that contains the comparisons needed to find the new position of the pivot and return that position,  and recursion which takes in array elementson the left and right side of the  pivot split. 
nb- in this case of recursive function, thhe function waits for the return of A to pop from the stack. A is a recurringly sorted list until the final A is fully sorted. 

*/
const { log } = console;

const quickSort = (A, l, h) => {
    if (l < h) {
        j = partition(A, l, h);
        quickSort(A, l, j);
        quickSort(A, j + 1, h);
    }

    return A;
};

const partition = (A, l, h) => {
    let pivot = A[l];
    let i = l;
    let j = h;

    while (i < j) {
        while (A[i] <= pivot) {
            i++;
        }
        while (A[j] > pivot) {
            j--;
        }
        if (i < j) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }

    A[l] = A[j];
    A[j] = pivot;

    return j;
};

let Array = [10, 16, 8, 12, 15, 6, 3, 9, 5, 10000];

quickSort(Array, 0, 9);