function secondHighest(arr) {
	let max = -Infinity;
	let second = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		arr[i] = Number(arr[i]); // convert string to number

		if (arr[i] > max) {
			second = max;
			max = arr[i];
		} else if (arr[i] > second && arr[i] < max) {
			second = arr[i];
		}
	}

	return second === -Infinity ? -Infinity : second;
}

