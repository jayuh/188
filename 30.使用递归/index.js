// 典型的递归：阶乘
function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
console.log(factorial(5));

// 很多复杂的逻辑，有时用递归会很容易被写出来。但如果写的不好，容易出现死循环，导致浏览器出现假死的现象，直至超出调用栈尺寸限制时，会报错。

// 第一种情况，直接循环调用本身，造成死循环。
var i = 0;
function fn () {
	console.log(i++);
	fn();
}
fn();

// 第二种情况，相互调用，造成死循环。
var i = 0;
function a() {
	console.log(i++);
	b();
}
function b() {
	console.log(i++);
	a();
}
a();