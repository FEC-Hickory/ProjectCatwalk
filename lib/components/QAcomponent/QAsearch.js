"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var QASearchBar = function QASearchBar(props) {
  return /*#__PURE__*/_react["default"].createElement(SearchForm, null, /*#__PURE__*/_react["default"].createElement(Input, {
    type: "text",
    placeholder: "Have a question? Search for answers...",
    name: "search",
    onChange: function onChange(e) {
      return props.searchOnChange(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, "Search"));
};

var _default = QASearchBar; // STYLED COMPONENTS

exports["default"] = _default;

var Input = _styledComponents["default"].input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 10px;\n  box-sizing: border-box;\n"])));

var SearchForm = _styledComponents["default"].form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: left;\n  flex-direction: row;\n  padding: 20px 20px;\n  box-sizing: border-box;\n  width: 100%;\n"])));

var Button = _styledComponents["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-radius: 3px;\n  cursor: pointer;\n  float: right;\n  text-align: center;\n  padding: 12px 20px;\n  background: black;\n  color: white;\n  border: 2px solid white;\n  &:hover {\n    background-color: lightblue;\n  }\n"])));