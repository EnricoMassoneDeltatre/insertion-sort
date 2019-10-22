const { insertionSort } = require("./index");
const { assert, expect } = require("chai");

test("passing argument of type number throws a TypeError", () => {
    try {
        const _ = insertionSort(12);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type string throws a TypeError", () => {
    try {
        const _ = insertionSort("test");
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type boolean throws a TypeError", () => {
    try {
        const _ = insertionSort(true);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type null throws a TypeError", () => {
    try {
        const _ = insertionSort(null);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type undefined throws a TypeError", () => {
    try {
        const _ = insertionSort(undefined);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type object throws a TypeError", () => {
    try {
        const _ = insertionSort({key: "value"});
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type symbol throws a TypeError", () => {
    try {
        const _ = insertionSort(Symbol());
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("passing argument of type function throws a TypeError", () => {
    try {
        const _ = insertionSort(() => [1, 2, 3]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("an empty array is returned unchanged", () => {
    // ACT
    const result = insertionSort([]);

    // ASSERT
    assert.isArray(result);
    assert.isEmpty(result);
});

test("a single item array is returned unchanged", () => {
    // ACT
    const result = insertionSort([23]);

    // ASSERT
    assert.isArray(result);
    expect(result).to.eql([23]);
});

test("an ordered array is returned unchanged", () => {
    // ACT
    const result = insertionSort([1, 2, 3]);

    // ASSERT
    assert.isArray(result);
    expect(result).to.eql([1, 2, 3]);
});