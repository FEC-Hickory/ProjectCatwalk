"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dateformat = _interopRequireDefault(require("dateformat"));

var _LoadMore = _interopRequireDefault(require("./LoadMore.jsx"));

var _Modal = _interopRequireDefault(require("./Modal.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpful = _interopRequireDefault(require("./Helpful.jsx"));

var _Photos = _interopRequireDefault(require("./Photos.jsx"));

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

var AnswersList = function AnswersList(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAnswers = _useState2[0],
      setShowAnswers = _useState2[1];

  var answers = props.question.answers;
  var answersArray = [];
  var answerKeys = Object.keys(answers);

  for (var i = 0; i < answerKeys.length; i++) {
    answersArray.push(answers[answerKeys[i]]);
  }

  answersArray.sort(function (a, b) {
    return a.helpfulness < b.helpfulness ? 1 : -1;
  });

  var handleCollapse = function handleCollapse() {
    setShowAnswers(false);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, answersArray.map(function (oneAnswer, i) {
    if (!showAnswers) {
      if (answersArray.length === 2) {
        /*#__PURE__*/
        _react["default"].createElement(EachAnswer, {
          key: oneAnswer.id
        }, /*#__PURE__*/_react["default"].createElement("div", null, "A: ", oneAnswer.body), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Photos["default"], {
          photos: oneAnswer.photos
        })), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(UserInfo, null, "User: ", oneAnswer.answerer_name, " Date Posted: ", (0, _dateformat["default"])(oneAnswer.date, "paddedShortDate", "mm, dd, yyyy")), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
          help: true,
          helpfulness: oneAnswer.helpfulness,
          answer: oneAnswer,
          updateHelpful: props.updateHelpful,
          reported: false,
          questionOrAnswer: 'answer'
        }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
          answer: oneAnswer,
          updateHelpful: props.updateHelpful,
          reported: false,
          type: 'answer'
        })));
      } else if (i < 2) {
        return /*#__PURE__*/_react["default"].createElement(EachAnswer, {
          key: oneAnswer.id
        }, /*#__PURE__*/_react["default"].createElement("div", null, "A: ", oneAnswer.body), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Photos["default"], {
          photos: oneAnswer.photos
        })), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(UserInfo, null, "User: ", oneAnswer.answerer_name, " Date Posted: ", (0, _dateformat["default"])(oneAnswer.date, "paddedShortDate", "mm, dd, yyyy")), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
          help: true,
          helpfulness: oneAnswer.helpfulness,
          answer: oneAnswer,
          updateHelpful: props.updateHelpful,
          reported: false,
          questionOrAnswer: 'answer'
        }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
          answer: oneAnswer,
          updateHelpful: props.updateHelpful,
          reported: false,
          type: 'answer'
        })), /*#__PURE__*/_react["default"].createElement("div", null, i === 1 ? /*#__PURE__*/_react["default"].createElement(_LoadMore["default"], {
          setShowAnswers: setShowAnswers,
          answersComponent: true,
          key: oneAnswer.id
        }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)));
      }
    } else {
      return /*#__PURE__*/_react["default"].createElement(EachAnswer, {
        key: oneAnswer.id
      }, /*#__PURE__*/_react["default"].createElement("div", null, "A: ", oneAnswer.body), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Photos["default"], {
        photos: oneAnswer.photos
      })), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(UserInfo, null, "User: ", oneAnswer.answerer_name, " Date Posted: ", (0, _dateformat["default"])(oneAnswer.date, "paddedShortDate", "mm, dd, yyyy")), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
        help: true,
        helpfulness: oneAnswer.helpfulness,
        answer: oneAnswer,
        updateHelpful: props.updateHelpful,
        reported: false,
        questionOrAnswer: 'answer'
      }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
        answer: oneAnswer,
        updateHelpful: props.updateHelpful,
        reported: false,
        type: 'answer'
      })), /*#__PURE__*/_react["default"].createElement("div", null, i === answersArray.length - 1 ? /*#__PURE__*/_react["default"].createElement(Button, {
        onClick: function onClick() {
          return handleCollapse();
        }
      }, "Collapse Answers") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)));
    }
  }));
};

var _default = AnswersList; // STYLED COMPONENTS

exports["default"] = _default;

var EachAnswer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  padding: 20px;\n\n"])));

var Button = _styledComponents["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: black;\n  color: white;\n  border: 2px solid white;\n  &:hover {\n    background-color: lightblue;\n  }\n"])));

var MoveRight = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n"])));

var Divide = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: right;\n  font-weight: bold;\n"])));

var UserInfo = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0px 8px;\n  padding-left: 12px\n"]))); //comment