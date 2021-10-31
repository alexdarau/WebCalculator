import Calculator from './calculator.js'

test('test the addition of two numbers', () => {
  var calculator = new Calculator()
  expect(calculator.computeOperation('+', 1, 2)).toBe(3);
});

test('test the subtract of two numbers', () => {
  var calculator = new Calculator()
  expect(calculator.computeOperation('-', 3, 2)).toBe(1);
});

test('test the multiplication of two numbers', () => {
  var calculator = new Calculator()
  expect(calculator.computeOperation('*', 10, 2)).toBe(20);
});

test('test the division of two numbers', () => {
  var calculator = new Calculator()
  expect(calculator.computeOperation('÷', 10, 2)).toBe(5);
});

it('test constructor', () => {
  const obj = new Calculator(1, 2);
  expect(obj.previousOperandTextElement).toBe(1);
  expect(obj.currentOperandTextElement).toBe(2);
});