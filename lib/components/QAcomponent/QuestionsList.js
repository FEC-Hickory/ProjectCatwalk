"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AnswersList = _interopRequireDefault(require("./AnswersList.jsx"));

var _LoadMore = _interopRequireDefault(require("./LoadMore.jsx"));

var _Modal = _interopRequireDefault(require("./Modal.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpful = _interopRequireDefault(require("./Helpful.jsx"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var QuestionsList = function QuestionsList(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showQuestions = _useState2[0],
      setShowQuestions = _useState2[1];

  var _useState3 = (0, _react.useState)(2),
      _useState4 = _slicedToArray(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  (0, _react.useEffect)(function () {
    setShowQuestions(false);
    setCount(2);
  }, [props.questions]);

  var handleCollapse = function handleCollapse() {
    setShowQuestions(false);
    setCount(count - 2);
  };

  if (props.searchTerm === '') {
    return /*#__PURE__*/_react["default"].createElement(QAcontainer, null, props.questions.map(function (oneQuestion, i) {
      if (!showQuestions) {
        if (i < count) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: oneQuestion.question_id
          }, /*#__PURE__*/_react["default"].createElement(QuestionLineContainer, null, /*#__PURE__*/_react["default"].createElement(Question, null, "Q: ", oneQuestion.question_body), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
            help: true,
            helpfulness: oneQuestion.question_helpfulness,
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            reported: oneQuestion.reported,
            questionOrAnswer: 'question'
          }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            currentQuestion: oneQuestion.question_body,
            currentQuestion_id: oneQuestion.question_id,
            currentProduct: props.currentProduct,
            addQorA: props.addQorA,
            answers: true,
            key: i
          }))), /*#__PURE__*/_react["default"].createElement(AnswerLineContainer, null, /*#__PURE__*/_react["default"].createElement(_AnswersList["default"], {
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            searchedTerm: props.searchTerm,
            key: oneQuestion.question_id
          })), /*#__PURE__*/_react["default"].createElement(BottomButtons, null, /*#__PURE__*/_react["default"].createElement("div", null, props.questions.length > 2 && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_LoadMore["default"], {
            setShowQuestions: setShowQuestions,
            count: count,
            setCount: setCount,
            key: i
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))), /*#__PURE__*/_react["default"].createElement("div", null, props.questions.length > 2 && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            questions: true,
            currentProduct: props.currentProduct,
            currentProduct_id: props.currentProduct_id,
            addQorA: props.addQorA
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)))));
        }
      } else {
        if (i < count) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: oneQuestion.question_id
          }, /*#__PURE__*/_react["default"].createElement(QuestionLineContainer, null, /*#__PURE__*/_react["default"].createElement(Question, null, "Q: ", oneQuestion.question_body), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
            help: true,
            helpfulness: oneQuestion.question_helpfulness,
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            reported: oneQuestion.reported,
            questionOrAnswer: 'question'
          }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            currentQuestion: oneQuestion.question_body,
            currentQuestion_id: oneQuestion.question_id,
            currentProduct: props.currentProduct,
            addQorA: props.addQorA,
            answers: true,
            key: i
          }))), /*#__PURE__*/_react["default"].createElement(AnswerLineContainer, null, /*#__PURE__*/_react["default"].createElement(_AnswersList["default"], {
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            searchedTerm: props.searchTerm,
            key: oneQuestion.question_id
          })), /*#__PURE__*/_react["default"].createElement(BottomButtons, null, /*#__PURE__*/_react["default"].createElement("div", null, i < props.questions.length && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_LoadMore["default"], {
            setShowQuestions: setShowQuestions,
            count: count,
            setCount: setCount,
            key: i
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))), /*#__PURE__*/_react["default"].createElement("div", null, i < props.questions.length && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            questions: true,
            currentProduct: props.currentProduct,
            currentProduct_id: props.currentProduct_id,
            addQorA: props.addQorA
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)))));
        }
      }
    }));
  } else {
    return /*#__PURE__*/_react["default"].createElement(QAcontainer, null, props.questions.filter(function (oneQuestion) {
      if (oneQuestion.question_body.toLowerCase().includes(props.searchTerm.toLowerCase())) {
        return oneQuestion;
      }
    }).map(function (oneQuestion, i) {
      if (!showQuestions) {
        if (i < count) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: oneQuestion.question_id
          }, /*#__PURE__*/_react["default"].createElement(QuestionLineContainer, null, /*#__PURE__*/_react["default"].createElement(Question, null, "Q: ", oneQuestion.question_body), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
            help: true,
            helpfulness: oneQuestion.question_helpfulness,
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            reported: oneQuestion.reported,
            questionOrAnswer: 'question'
          }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            currentQuestion: oneQuestion.question_body,
            currentProduct: props.currentProduct,
            currentQuestion_id: oneQuestion.question_id,
            answers: true,
            addQorA: props.addQorA,
            key: i
          }))), /*#__PURE__*/_react["default"].createElement(AnswerLineContainer, null, /*#__PURE__*/_react["default"].createElement(_AnswersList["default"], {
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            addQorA: props.addQorA,
            searchedTerm: props.searchTerm,
            key: oneQuestion.question_id
          })), /*#__PURE__*/_react["default"].createElement(BottomButtons, null, /*#__PURE__*/_react["default"].createElement("div", null, props.questions.length > 2 && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_LoadMore["default"], {
            setShowQuestions: setShowQuestions,
            count: count,
            setCount: setCount,
            key: i
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))), /*#__PURE__*/_react["default"].createElement("div", null, props.questions.length > 2 && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            questions: true,
            currentProduct: props.currentProduct,
            currentProduct_id: props.currentProduct_id,
            addQorA: props.addQorA
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)))));
        }
      } else {
        if (i < count) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: oneQuestion.question_id
          }, /*#__PURE__*/_react["default"].createElement(QuestionLineContainer, null, /*#__PURE__*/_react["default"].createElement(Question, null, "Q: ", oneQuestion.question_body), /*#__PURE__*/_react["default"].createElement(MoveRight, null, /*#__PURE__*/_react["default"].createElement(_Helpful["default"], {
            help: true,
            helpfulness: oneQuestion.question_helpfulness,
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            reported: oneQuestion.reported,
            questionOrAnswer: 'question'
          }), /*#__PURE__*/_react["default"].createElement(Divide, null, "|"), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            currentQuestion: oneQuestion.question_body,
            currentProduct: props.currentProduct,
            currentQuestion_id: oneQuestion.question_id,
            addQorA: props.addQorA,
            answers: true,
            key: i
          }))), /*#__PURE__*/_react["default"].createElement(AnswerLineContainer, null, /*#__PURE__*/_react["default"].createElement(_AnswersList["default"], _defineProperty({
            question: oneQuestion,
            updateHelpful: props.updateHelpful,
            searchedTerm: props.searchTerm,
            key: oneQuestion.question_id
          }, "key", i))), /*#__PURE__*/_react["default"].createElement(BottomButtons, null, /*#__PURE__*/_react["default"].createElement("div", null, i < props.questions.length && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_LoadMore["default"], {
            setShowQuestions: setShowQuestions,
            count: count,
            setCount: setCount,
            key: i
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null))), /*#__PURE__*/_react["default"].createElement("div", null, i < props.questions.length && /*#__PURE__*/_react["default"].createElement("div", null, i === count - 1 ? /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
            questions: true,
            currentProduct: props.currentProduct,
            currentProduct_id: props.currentProduct_id,
            addQorA: props.addQorA
          }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)))));
        }
      }
    }));
  }
};

var _default = QuestionsList;
exports["default"] = _default;

var MoveRight = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-left: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n"])));

var QAcontainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: relative;\n  max-height:100vh;\n  overflow-y:scroll;\n  &::webkit-scrollbar {\n    width: 20;\n  };\n  &::webkit-scrollbar {\n    background-color: transparent;\n  };\n  &::webkit-scrollbar {\n    border-radius: 10px;\n    border: 6px solid transparent;\n    background-clip: content-box;\n  };\n  &::webkit-scrollbar {\n    background-color: transparent;\n  };\n"])));

var QuestionLineContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding: 0px 20px;\n"])));

var AnswerLineContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  border-top: 1px grey solid;\n  padding: 10px 0px;\n  max-height:50vh;\n  overflow-y:scroll;\n  &::webkit-scrollbar {\n    width: 20;\n  };\n  &::webkit-scrollbar {\n    background-color: transparent;\n  };\n  &::webkit-scrollbar {\n    border-radius: 10px;\n    border: 6px solid transparent;\n    background-clip: content-box;\n  };\n  &::webkit-scrollbar {\n    background-color: transparent;\n  };\n"])));

var Divide = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: right;\n  margin-left: 5px;\n  margin-right: 5px;\n  padding-top: 0px;\n  font-weight: bold;\n"])));

var BottomButtons = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));

var Question = _styledComponents["default"].p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: black;\n  font-weight: 700;\n  font-size: 20px;\n"])));