var number = [1,2,3,4,5];


function sum(n) {
	var sum = 0;
	for (var i = 0; i < n.length; i++) {
		sum+=n[i];
	}
	return sum;
}

console.log(sum(number));
