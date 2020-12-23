var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let oldValue = object[key];
  object[key] = value;
  return {
    original: oldValue,
    new: value
  }
}
