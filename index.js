const moveItemToTargetPosition = (nums, sourcePosition, targetPosition) => {
    if (!Array.isArray(nums)) {
        throw new TypeError("nums must be an array");
    }

    if (sourcePosition < 0 || sourcePosition >= nums.length) {
        throw new RangeError(`Invalid source position: ${sourcePosition}. Source position must be between 0 and ${nums.length - 1}.`);
    }

    if (targetPosition < 0 || targetPosition > sourcePosition) {
        throw new RangeError(`Invalid target position: ${targetPosition}. Target position must be between 0 and ${sourcePosition}.`);
    }

    if (targetPosition === sourcePosition) {
        return;
    }

    const itemInSourcePosition = nums[sourcePosition];

    for (let index = sourcePosition - 1; index >= targetPosition; index--) {
        nums[index + 1] = nums[index];
    }

    nums[targetPosition] = itemInSourcePosition;
};

const insertionSort = nums => {
    if (!Array.isArray(nums)) {
        throw new TypeError("nums must be an array");
    }

    if (nums.length < 2) {
        return nums;
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                // move item at index i to index j
                moveItemToTargetPosition(nums, i, j);
                break;
            } 
        }
    }

    return nums;
};

module.exports = {
    insertionSort
};