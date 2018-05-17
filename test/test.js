const assert = require('assert');
const quipu = require('../dist/quipu.min');

function fetchData(callbackFunction){
    let foo = "peanut butter";
    callbackFunction(foo);
}



describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

describe('isSame', function() {
    it('should return true when isSame, typeless', function() {
        assert.equal(quipu.isSame(1, "1"), true);
    });
});

describe('mapArrow', function() {
    it('should return 5 equal 5 when map array', function() {
        assert.equal(5, 5);
    });
});

// Jest
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});

// test finish.