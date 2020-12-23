var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var temp = Object.assign({}, object);
  temp[key] = value;
  return temp;
}
