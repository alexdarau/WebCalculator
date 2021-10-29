const compute = require('./script');
const html = require('.') 

test('adds 1 + 2 to equal 3', () => {
  expect(new Calculator(1, 2).compute().toBe(3));
});