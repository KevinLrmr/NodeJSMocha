var MyClass = require("../src/myClass");
var myObj = new MyClass();
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
const { stub } = require("sinon");
var mock = sinon.mock(myObj);

//test case
describe("tests suit", function() {
    it("test the add method", function() {
        expect(myObj.add(1,2)).to.be.equal(3);
    });

    it("mock the sayHello method", function() {
        //quelle méthode on va aller mocker ?
        let expectation = mock.expects("sayHello");
        expectation.exactly(1);
        expectation.withArgs('hello');
        myObj.callAnotherFc(1,3);
        mock.verify();
    });
    
    /*
    it("spy the add method", function() {
        let spy = sinon.spy(myObj, 'add')
        myObj.callAnotherFc(10,20);
        myObj.callAnotherFc(10,20);

        sinon.assert.calledTwice(spy);
        expect(spy.calledTwice).to.be.true;

        expect(spy.calledWith(10,20)).to.be.true;
    });*/

    it("stub the add method", function() {
        let stub = sinon.stub(myObj, 'add')
        stub
        .withArgs(10,20)
        .onFirstCall().returns(100)
        .onSecondCall().returns(200);

        expect(myObj.add(10,20)).to.be.equal(100);
        expect(myObj.add(10,20)).to.be.equal(200);

        stub.resetBehavior();
        expect(myObj.add(10,20)).to.be.equal(30);
    });

});