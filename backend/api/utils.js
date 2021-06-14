module.exports.isJSON = function (str) {
  try {
    let json = JSON.parse(str);
    // Check if it is a valid JSON
    if (json && !!str) {
      // Check if one of the elements is empty
      for (e in json) {
        if (e == undefined || e == "") {
          console.log("Found an empty String in an Element, returning a 422");
          return false;
        }
      }
      return true;
    }
  } catch (e) {
    console.log("cuz idk");
    return false;
  }
};
