/* This function will accept two arguments, an array of keys, and
an array of values. The function will return an object with each key from keys given a value at the corresponding
index in values. If there are not enough corresponding elements in values, set any additional
 keys to have a value of null.
*/

function twoArrayObject(keys, values) {
  const keysAndValues = {};

  for (let i = 0; i < keys.length; i++) {
    if (values[i] !== undefined) {
      keysAndValues[keys[i]] = values[i];
    } else {
      keysAndValues[keys[i]] = null;
    }
  }
  return keysAndValues;
}
