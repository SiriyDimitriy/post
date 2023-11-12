/**
 * Groups array of objects by object's property value
 * @param array - given array of objects
 * @param prop - property of object for grouping
 *
 *
 * For example, given array = [{a:1, b:12}, {a:1, b:13}, {a: 2, b:11}], given prop "a",
 * result will be an object {1:[{a:1, b:12}, {a:1, b:13}],  2:[{a: 2, b:11}]}
 *
 */
export const groupObjectsArrayByProperty = (array, prop) => {
    let result = {};
    array.forEach(item => {
        if(result[item[prop]]) {
            result[item[prop]].push(item);
        } else {
            result[item[prop]] = [item];
        }
    });
    return result;
}

/**
 * Get properties of objects in array with the same value across whole array
 * @param array - given array of objects
 *
 * For example, given array = [{a:1, b:12}, {a:1, b:13}, {a: 1, b:11}],
 * result will be an array ["a"]
 *
 */
export const getPropertiesWithSameValues = (array) => {
    if (!array || !array.length) return [];
    const reducer = (accumulator, currentValue) => {
        let newAccumulator = {}
        Object.keys(accumulator).forEach(k => {
            if (accumulator[k] === currentValue[k]) {
                newAccumulator[k] = accumulator[k];
            }
        });
        return newAccumulator;
    };
    return array.reduce(reducer, array[0]);
}