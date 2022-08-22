"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StarRating = function StarRating(props) {
  var starArray = [];
  var base = Math.floor(props.rating); //number of whole stars

  var decimal = props.rating - base; //value of fractional star

  if (decimal > 0 && decimal < 0.32) {
    var fractionalString = "url('#1quarter')";
  } else if (decimal > 0.33 && decimal < 0.65) {
    var fractionalString = "url('#half')";
  } else if (decimal > 0.66 && decimal < 0.99) {
    var fractionalString = "url('#3quarter')";
  }

  for (var i = 0; i < 5; i++) {
    if (i < base) {
      starArray.push("url('#full')");
    } else if (i === base && decimal !== 0) {
      starArray.push(fractionalString);
    } else {
      starArray.push("url('#empty')");
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "StarRatingContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 0,
      height: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("mask", {
    id: "empty"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    fill: "black"
  })), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "1quarter"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "32",
    height: "32",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "40%",
    y: "0",
    width: "32",
    height: "32",
    fill: "black"
  })), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "half"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "32",
    height: "32",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "50%",
    y: "0",
    width: "32",
    height: "32",
    fill: "black"
  })), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "3quarter"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "32",
    height: "32",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "60%",
    y: "0",
    width: "32",
    height: "32",
    fill: "black"
  })), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "full"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "32",
    height: "32",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "100%",
    y: "100%",
    width: "32",
    height: "32",
    fill: "black"
  })), /*#__PURE__*/_react["default"].createElement("symbol", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    id: "star"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "star-rating",
    "aria-label": "4.5 stars out of 5"
  }, starArray.map(function (currentStar, index) {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      className: "c-star",
      width: props.size,
      height: props.size,
      viewBox: "0 0 32 32",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("use", {
      xlinkHref: "#star",
      mask: currentStar
    }), /*#__PURE__*/_react["default"].createElement("use", {
      xlinkHref: "#star",
      fill: "none",
      stroke: "black",
      strokeWidth: "2"
    }));
  })));
};

var _default = StarRating;
exports["default"] = _default;