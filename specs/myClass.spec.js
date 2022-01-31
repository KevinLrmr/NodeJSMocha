var MyClass = require("../src/myClass");
var myObj = new MyClass();
var chai = require('chai');
var expect = chai.expect;

//test case
describe("tests suit", function() {
    it("test the add method", function() {
        expect(myObj.add(1,2)).to.be.equal(3);
    });

    


});