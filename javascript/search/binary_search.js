function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid, element;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arr[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(ar, 4));
console.log('asdf');
