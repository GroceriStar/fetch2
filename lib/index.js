"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var _groceristarFetch = require("@groceristar/groceristar-fetch");

// import TodaysDate     from '~/TodaysDate'
// import List           from '~/List/List'
var getData = function getData(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'attribute';
  var result;

  if (type == 'attribute') {
    result = _groceristarFetch.search.getAttribute(value);
  }

  if (type == 'ingredient') {
    result = _groceristarFetch.search.getIngredients();
  }

  return result;
};

exports.getData = getData;