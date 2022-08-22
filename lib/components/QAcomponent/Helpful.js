"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HelpfulAndReport = function HelpfulAndReport(props) {
  var _useState = (0, _react.useState)(props.helpfulness),
      _useState2 = _slicedToArray(_useState, 2),
      helpful = _useState2[0],
      setHelpful = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      reported = _useState4[0],
      setReported = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      clickedHelpful = _useState6[0],
      setClickedHelpful = _useState6[1];

  var type = '';
  (0, _react.useEffect)(function () {
    setHelpful(props.helpfulness);
  }, [props.questions]);
  (0, _react.useEffect)(function () {
    setReported(props.reported);
  }, [props.question]);

  var handleHelpfulAndReportClick = function handleHelpfulAndReportClick() {
    if (props.questionOrAnswer === 'question') {
      if (props.help) {
        props.updateHelpful('questions', props.question.question_id, 'helpful');
      } else {
        props.updateHelpful('questions', props.question.question_id, 'report');
      }
    } else {
      if (props.help) {
        props.updateHelpful('answers', props.answer.id, 'helpful');
      } else {
        props.updateHelpful('answers', props.answer.id, 'report');
      }
    }
  };

  if (props.help === true) {
    type = 'Helpful?';
  } else {
    type = 'Report';
  }

  if (props.questionOrAnswer === 'question') {
    if (type === 'Helpful?' && !clickedHelpful) {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Helpful, null, /*#__PURE__*/_react["default"].createElement("p", null, type), /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          handleHelpfulAndReportClick();
          setClickedHelpful(true);
          setHelpful(helpful + 1);
        }
      }, "Yes"), /*#__PURE__*/_react["default"].createElement("p", null, "(", helpful, ")")));
    } else if (type === 'Helpful?' && clickedHelpful) {
      return /*#__PURE__*/_react["default"].createElement(Helpful, null, /*#__PURE__*/_react["default"].createElement("p", null, "Helpful?"), /*#__PURE__*/_react["default"].createElement(Yes, null, "Yes"), /*#__PURE__*/_react["default"].createElement("p", null, "(", helpful, ")"));
    } else if (type === 'Reported') {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, type));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          handleHelpfulAndReportClick();
          setClickedHelpful(true);
          setReported(true);
        }
      }, !reported ? /*#__PURE__*/_react["default"].createElement("p", null, type) : /*#__PURE__*/_react["default"].createElement("p", null, "Reported")));
    }
  } else {
    if (type === 'Helpful?' && !clickedHelpful) {
      return /*#__PURE__*/_react["default"].createElement(Helpful, null, /*#__PURE__*/_react["default"].createElement("p", null, type), /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          handleHelpfulAndReportClick();
          setClickedHelpful(true);
          setHelpful(helpful + 1);
        }
      }, "Yes"), /*#__PURE__*/_react["default"].createElement("p", null, "(", helpful, ")"));
    } else if (type === 'Helpful?' && clickedHelpful) {
      return /*#__PURE__*/_react["default"].createElement(Helpful, null, /*#__PURE__*/_react["default"].createElement("p", null, "Helpful?"), /*#__PURE__*/_react["default"].createElement(Yes, null, "Yes"), /*#__PURE__*/_react["default"].createElement("p", null, "(", helpful, ")"));
    } else if (type === 'Reported') {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, type));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          handleHelpfulAndReportClick();
          setReported(true);
        }
      }, !reported ? /*#__PURE__*/_react["default"].createElement("p", null, type) : /*#__PURE__*/_react["default"].createElement("p", null, "Reported")));
    }
  }
};

var _default = HelpfulAndReport; // STYLED COMPONENTS

exports["default"] = _default;

var Button = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-decoration: underline;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  &:hover {\n    color: blue;\n  }\n"])));

var HelpfulContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

var Helpful = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0px 6px;\n"])));

var Reported = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: red;\n"])));

var Yes = _styledComponents["default"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\npadding: 0px 4px;\n"])));