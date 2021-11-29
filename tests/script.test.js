import Calculator from '../public/calculator.js'

it('test constructor', () => {
  const calculator = new Calculator(1, 2);
  expect(calculator.previousOperandTextElement).toBe(1);
  expect(calculator.currentOperandTextElement).toBe(2);
});

test('test clear function', () => {
  const calculator = new Calculator(1, 2);
  calculator.clear()
  expect(calculator.currentOperand).toBe('')
  expect(calculator.previousOperand).toBe('')
  expect(calculator.operation).toBe(undefined)

});

test('test delete function', () => {
  const calculator = new Calculator();
  calculator.appendNumber(20)
  calculator.delete()
  expect(calculator.currentOperand).toBe("2")
});

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

test('test the get number from display function', () => {
  var calculator = new Calculator()
  expect(calculator.getDisplayNumber(2)).toBe('2');
});

