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

test("an array ordered in descending order is reversed", () => {
    // ACT
    const result = insertionSort([3, 2, 1]);

    // ASSERT
    assert.isArray(result);
    expect(result).to.eql([1, 2, 3]);
});

test("shuffled array is ordered in ascending order", () => {
    // ACT
    const result = insertionSort([7, 6, 8, 9, 2, 1, 3, 5, 4, 12, 11, 10]);

    // ASSERT
    assert.isArray(result);
    expect(result).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test("if any item in input array is string then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, "foo"]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is boolean then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, true]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is null then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, null]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is undefined then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, undefined]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is object then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, {key: "value"}]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is symbol then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, Symbol()]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is array then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, []]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("if any item in input array is function then throws TypeError", () => {
    try {
        const _ = insertionSort([1, 2, 3, () => 13 ]);
    } catch (error) {
        assert.instanceOf(error, TypeError);
        return;
    }
    
    throw new Error("Should not reaching here");
});

test("an array containing negative integers is ordered as expected", () => {
    // ACT
    const result = insertionSort([2, 3, 1, -5, -6, -2, -4]);

    // ASSERT
    assert.isArray(result);
    expect(result).to.eql([-6, -5, -4, -2, 1, 2, 3]);
});

test("an array containing decimals is ordered as expected", () => {
    // ACT
    const result = insertionSort([2.3, 4.5, 2.999, 1, 6.7, 5, 4]);

    // ASSERT
    assert.isArray(result);
    expect(result).to.eql([1, 2.3, 2.999, 4, 4.5, 5, 6.7]);
});