let viewer = el("#viewer"), 
equals = el("#equals"),
nums = el(".num"),
clear = el("#clear"),
ops = el(".ops"), 
newNum = "", // Current number
oldNum = "", // First number
result, 
operand;


(function(window) {
	window.CalculatorMouseEvents = {
		registerEvents: function (argument) {
			$('.num').on("click", function () {
				if (result) { 
					newNum = this.getAttribute("data-num");
					result = "";
				  } else { 
					newNum += this.getAttribute("data-num");
				  }
			  
				  viewer.innerHTML = newNum; 
			});
			///// other click events go here

			// operand
			$('.ops').on("click", function(){
				oldNum = newNum;
				newNum = "";
				operand = this.getAttribute("data-ops");
				equals.setAttribute("data-result", ""); 
			});
			// Equals is clicked
			$('#equals').on("click", function(){
				CalculatorComputations()
			// 	oldNum = parseFloat(oldNum);
			// 	newNum = parseFloat(newNum);
		  
			// 	switch (operand) {
			// 	  case "plus":
			// 		result = oldNum + newNum;
			// 		break;
			
			// 	  case "minus":
			// 		result = oldNum - newNum;
			// 		break;
			
			// 	  case "times":
			// 		result = oldNum * newNum;
			// 		break;
			
			// 	  case "divided by":
			// 		result = oldNum / newNum;
			// 		break;
			// 	  default:
			// 		result = newNum;
			// 	}
			// 	viewer.innerHTML = result;
			// 	equals.setAttribute("data-result", result);
			//   resetNum()	
			});
			
			$("#clear").on("click",function(){
				oldNum = "";
				theNum = "";
				  viewer.innerHTML = "0";
			equals.setAttribute("data-result", resultNum);	
			})
		
		},
		
	}
})(window);