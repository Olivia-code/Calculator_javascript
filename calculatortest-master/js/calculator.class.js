////// the goal of this is to be able to use this as a calculator
/*
It should be able to add, subtract, multiply, and divide. The clear button should work as well. You do not need to touch the css or the html, this should be a JS solution!!!
*/
(function(window) {
	window.Calculator = {
		oldNum: 0,
		newNum: 0,
		operand: null,
		setOldNum: function (num) {
			this.oldNum = num;
		},
		setNewNum: function (num) {
			this.setOldNum(this.newNum);
			this.newNum = num;
		},
		setOperand: function (operand) {
			this.operand = operand;
		}
	}
})(window);
