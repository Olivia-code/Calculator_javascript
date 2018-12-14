
(function() {
    const el = function(element) {
      if (element.charAt(0) === "#") { 
        return document.querySelector(element);t
      }
  
      return document.querySelectorAll(element); 
    };
  
    let viewer = el("#viewer"), 
        equals = el("#equals"),
      nums = el(".num"),
      clear = el("#clear"),
      ops = el(".ops"), 
      newNum = "", // Current number
      oldNum = "", // First number
      result, 
      operand;
  
  //Number Click
    const numberClick = function() {
      if (result) { 
        newNum = this.getAttribute("data-num");
        result = "";
      } else { 
        newNum += this.getAttribute("data-num");
      }
  
      viewer.innerHTML = newNum; 
  
    };
  
    // operand Click
    const operandClick = function() {
      oldNum = newNum;
      newNum = "";
      operand = this.getAttribute("data-ops");
  
      equals.setAttribute("data-result", ""); 
    };
  
    // equals Click
    let equalsClick = function() {
  
      // Convert string input to numbers
      oldNum = parseFloat(oldNum);
      newNum = parseFloat(newNum);

      switch (operand) {
        case "plus":
          result = oldNum + newNum;
          break;
        case "minus":
          result = oldNum - newNum;
          break;
        case "times":
          result = oldNum * newNum;
          break;
        case "divided by":
          result = oldNum / newNum;
          break;
        default:
          result = newNum;
      }
      viewer.innerHTML = result;
      equals.setAttribute("data-result", result);
    resetNum()
    };

    // reset old Number
   var resetNum = function() {
    oldNum = "";
    newNum = "";
  }
  
    // clear Button
    let clearClick = function() {
      resetNum();
      viewer.innerHTML = "0";
      equals.setAttribute("data-result", result);
    };
  
    // The click events   
    
    for (var i=0; i < nums.length; i++) {
      nums[i].onclick = numberClick;
  }
  
  for (var i=0; i<ops.length; i++) {
      ops[i].onclick = operandClick;
  }
  equals.onclick = equalsClick;
  clear.onclick = clearClick;
  }());