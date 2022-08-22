"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DisplayPhotos = function DisplayPhotos(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, props.photos.map(function (onePhoto, i) {
    return /*#__PURE__*/_react["default"].createElement(Photo, {
      key: i,
      src: onePhoto,
      width: "100",
      height: "100"
    });
  }));
};

var _default = DisplayPhotos;
exports["default"] = _default;

var Photo = _styledComponents["default"].img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 5px;\n  padding-top: 10px;\n"])));