exports.calculate = function (expression) {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const isOps = (val) => val in ops;
  const isNum = (val) => !isNaN(val) || typeof val == "number";
  const stack = expression.replace(/ /g, "").split("");

  console.log(stack);
  for (let i = 0; i < stack.length; i++) {
    if (isOps(stack[i]) && isNum(stack[i + 1]) && isNum(stack[i + 2])) {
      stack.splice(
        i,
        3,
        ops[stack[i]](Number(stack[i + 1]), Number(stack[i + 2]))
      );
      i = -1;
      console.log(stack);
    }
  }

  return stack[0];
};
