

let data=[5,3,8];
let rounds=0;


//swaping two elements
function swap(data, i, j) {
    console.log(`swapping ${data[i]} with ${data[j]}`);
    rounds++;
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

//partitioning the array
function partition(data, left, right) {
    //as left

    let pivot = data[right];
    //pivot is [5,3,8] [2]
    
    let i = left;
    //i is 0

    for (let j = left; j < right; j++) {
        //j is 0 and j is less than right = 2
        if (data[j] < pivot) {
            //if data[j] or [5,3,8] [0]  is less than pivot
            if(i!==j){
            swap(data, i, j);
            }
            //swap data[i] or [5,3,8] [0] with data[j] or [5,3,8] [1]
            i++;
        }
    }
    if(i!==right){
    swap(data, i, right);
    }
    //swap data[i] or [5,3,8] [0] with data[right] or [5,3,8] [2]
    return i;
}

//quick sort algorithm
function quickSort(data, left, right) {
    //args 5 3 8
    if (left < right) {
        //if left is less than right

        let pivot = partition(data, left, right);
        //making pivot from the partition from [5,3,8] | 0 | 2

        quickSort(data, left, pivot - 1);
        //calling quick sort from [5,3,8] | 0 | pivot - 1
        
        quickSort(data, pivot + 1, right);
        //calling quick sort from [5,3,8] | pivot + 1 | 2
    }
}

//calling the quick sort algorithm
function sorter(data) {
    quickSort(data, 0, data.length - 1);
}

//result
sorter(data);
console.log(data, rounds);
