class MyClass {

    constructor() {
        console.log('initiate');
    }

    sayHello(str) {
        console.log(str);
    }

    add(arg1, arg2) {
        return arg1 + arg2;
    }

    callAnotherFc(arg1, arg2) {
        this.sayHello("hello");
        return this.add(arg1, arg2);
    }
}

module.exports = MyClass;