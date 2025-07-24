function secondHighest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }

  if (second === -Infinity) return -Infinity;
  return second;
}
