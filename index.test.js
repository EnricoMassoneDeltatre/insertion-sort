const { insertionSort } = require("./index");
const { assert } = require("chai");

test("passing argument of type number throws a TypeError", () => {
    try {
        const _ = insertionSort(12);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});