"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadMore = function LoadMore(props) {
  var type = '';

  if (props.answersComponent) {
    type = 'answers';
  } else {
    type = 'questions';
  }

  var handleClick = function handleClick() {
    if (type === 'answers') {
      props.setShowAnswers(true);
    } else if (type === 'questions') {
      props.setShowQuestions(true);
      props.setCount(props.count + 2);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(ButtonDiv, null, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: function onClick() {
      return handleClick();
    }
  }, "Show more ", type));
};

var _default = LoadMore; // STYLED COMPONENTS

exports["default"] = _default;

var Button = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay: block;\nborder-radius: 3px;\ncursor: pointer;\npadding: 0.5rem 0;\nmargin: 0.5rem 1rem;\nwidth: 11rem;\ncolor: white;\nbackground: black;\nborder: 2px solid black;\n&:hover {\n  background-color: white;\n  color: black;\n}\n"])));

var ButtonDiv = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 50%;\n  padding: 16px 1px;\n"])));