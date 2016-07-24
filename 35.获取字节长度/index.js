String.prototype.lengthB = function() {
	var b = 0, l = this.length;
	if (l) {
		for (var i = 0; i < l; i++) {
			if (this.charCodeAt(i) > 255) {
				b += 2;
			} else {
				b += 1;
			}
		}
		return b;
	} else {
		return 0;
	}
};

// 调用案例
var str = 'Jayuh去买肉夹馍了'
console.log(str.lengthB());