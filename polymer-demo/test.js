var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
chai.should();

function
isEven(num) {
   return (num % 2 == 0);
}
describe('Testing Simple Java Script', function() {
   it('should return true if the number is even', function() {
      //use a should style assertion
      isEven(4).should.to.be.true;
   });
   it('should return false if the number is odd', function() {
      //use an expect style assertion
      expect(isEven(5)).to.be.false;
   });
});