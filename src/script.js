const arr = [9, 7, 3, 1, 4, 2, 6, 5, 8, 19];

function quickSort(arr) {
    /* Array has one element, nothing to do here */
    if (arr.length <= 1) {
        return arr;
    }

    /* Define new variables that will serve us as left, right and output arrays */
    var left = [];
    var right = [];
    var outputArray = [];

    /* Let's chose the last element of our array as pivot */
    var pivot = arr.pop();

    /* Iterate through an array to see if elements are lower or higher than a pivot */
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    /* Use recursion to sort left and right arrays - they will become smaller
     * and smaller and finally get contatenated in outputArray */
    return outputArray.concat(quickSort(left), pivot, quickSort(right));
}

console.log('Initial array', arr);
console.log('Sorted array', quickSort(arr));
