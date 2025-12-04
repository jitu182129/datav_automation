const fs = require('fs');
const path = require('path');

/**
 * Reads JSON file and returns JS object/array
 * @param {string} filename - Relative path to JSON file
 * @returns {Object|Array}
 */

function readJSON(filename) {
  const filePath = path.resolve(__dirname, '..', filename); //path.resolve ensures we get the absolute path.
  const rawData = fs.readFileSync(filePath); //reads the file content.
  return JSON.parse(rawData);//converts JSON string into a JavaScript object or array.
}

module.exports = { readJSON };
