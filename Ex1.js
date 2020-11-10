function Stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.theclear = theclear;
  this.takeaway = takeaway;
}

// adding element into stack

function push (element) {
  this.dataStore[this.top++] = element;
}

// removing element from the stack

function pop () {
  return this.dataStore[this.top--];
}

// lets return what's currently at the top of the stack using the peek function

function peek () {
  return this.dataStore[this.top - 1];
}

// removing all elements from stack

function theclear () {
  this.top = 0;
  this.dataStore.length = 0;
}

function takeaway () {
  this.top = 0;
  this.dataStore.length = 0;
}

// finding out how many elements are stored in the stack or the top of the stack

function length () {
  return this.top;
}

//  Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing. An example of an arithmetic expression with unbalanced parentheses is 2.3 + .

var stack = new Stack ();

var expression = '2.4 + 25/50+5.5535*.05)';

missingParenthesis (expression);

function missingParenthesis (expression) {
  var stack = new Stack ();

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      stack.push (i);
    }

    if (expression[i] === ')') {
      if (stack.pop () === undefined) {
        console.log (`Doesn't match at ${i}`);
      }
    }
  }

  if (stack.length () === 0) {
    console.log (`Matching Parenthesis`);
  } else if (stack.length () === 1) {
    console.log (`Mismatching ( at position ${stack.peek ()}`);
  }
}
