# Prefix Expressions Calculator

A calculator that will evaluate a prefix expression (Polish Notation) and show the step-by-step process used to arrive at the result using stack.

## Description

A "Prefix Expressions" is a expression in which first operator comes and preceded by strings. Every prefix string longer than a single variable contains first and second operands followed by an operator.

The main advantage of this format is that it does not require parentheses for any ambiguous expression.

| Infix notation    | Prefix notation |
| ----------------- | --------------- |
| 3 + 4             | + 3 4           |
| 3 - (4 \* 5)      | - 3 \* 4 5      |
| (3 + 4) \* 5      | \* + 3 4 5      |
| (3 - 4) / (5 + 2) | / - 3 4 + 5 2   |

In the code provided, the `app/calculator.js` file exports a `calculate` function. This function is expected to take an Prefix expression as a string, and output the numerical solution.

To run the code:

npm install # install dependencies
npm start # use the calculator with an interactive prompt
npm test # run the tests
