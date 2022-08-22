"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactHookForm = require("react-hook-form");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = function Modal(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    var body = {};

    if (!props.answers) {
      body = {
        body: data.question,
        name: data.username,
        email: data.email,
        product_id: props.currentProduct_id
      };
      props.addQorA(props.currentProduct_id, null, body);
    } else {
      body = {
        body: data.answer,
        name: data.username,
        email: data.email
      };
      props.addQorA(props.currentQuestion_id, 'answers', body);
    }

    closeModal();
  };

  var openModal = function openModal() {
    setIsOpen(true);
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  if (props.questions) {
    return /*#__PURE__*/_react["default"].createElement(ModalApp, null, isOpen && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Overlay, null), /*#__PURE__*/_react["default"].createElement(StyledModal, null, /*#__PURE__*/_react["default"].createElement(ModalHeader, null, /*#__PURE__*/_react["default"].createElement(CloseButton, {
      onClick: closeModal
    }, "Close"), /*#__PURE__*/_react["default"].createElement("h2", null, "Ask Your Question"), /*#__PURE__*/_react["default"].createElement("h3", null, "About the ", props.currentProduct)), /*#__PURE__*/_react["default"].createElement(ModalMain, null, /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/_react["default"].createElement(Label, null, "Your Question:", /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "text",
      name: "question"
    }, register('question', {
      required: true,
      maxLength: 1000
    }))), errors.question && errors.question.type === "required" && /*#__PURE__*/_react["default"].createElement(Error, null, "This field is required."), errors.question && errors.question.type === "maxLength" && /*#__PURE__*/_react["default"].createElement(Error, null, "Length exceeded. Must be less than 1000 characters."), /*#__PURE__*/_react["default"].createElement("br", null), "Your Nickname:", /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "text",
      name: "username"
    }, register('username', {
      required: true,
      maxLength: 60
    }))), errors.username && errors.username.type === "required" && /*#__PURE__*/_react["default"].createElement(Error, null, "This field is required."), errors.username && errors.username.type === "maxLength" && /*#__PURE__*/_react["default"].createElement(Error, null, "Length exceeded. Must be less than 60 characters."), /*#__PURE__*/_react["default"].createElement("br", null), "Your E-mail:", /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "text",
      name: "email"
    }, register('email', {
      required: true,
      maxLength: 60,
      pattern: {
        value: /\S+@\S+\.\S+/
      }
    }))), errors.email && errors.email.type === "required" && /*#__PURE__*/_react["default"].createElement(Error, null, "This field is required."), errors.email && errors.email.type === "maxLength" && /*#__PURE__*/_react["default"].createElement(Error, null, "Length exceeded. Must be less than 60 characters."), errors.email && errors.email.type === "pattern" && /*#__PURE__*/_react["default"].createElement(Error, null, "Please enter email with correct format.")), /*#__PURE__*/_react["default"].createElement(CloseButton, {
      type: "submit"
    }, "Submit"))), /*#__PURE__*/_react["default"].createElement("br", null))), /*#__PURE__*/_react["default"].createElement(ButtonDiv, null, /*#__PURE__*/_react["default"].createElement(Button, {
      type: "button",
      onClick: openModal
    }, "Add Question")));
  } else {
    return /*#__PURE__*/_react["default"].createElement(ModalApp, null, isOpen && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Overlay, null), /*#__PURE__*/_react["default"].createElement(StyledModal, null, /*#__PURE__*/_react["default"].createElement(ModalHeader, null, /*#__PURE__*/_react["default"].createElement(CloseButton, {
      onClick: closeModal
    }, "Close"), /*#__PURE__*/_react["default"].createElement("h2", null, "Submit an Answer"), /*#__PURE__*/_react["default"].createElement("h3", null, props.currentProduct, ": ", props.currentQuestion)), /*#__PURE__*/_react["default"].createElement(ModalMain, null, /*#__PURE__*/_react["default"].createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/_react["default"].createElement(Label, null, "Your Answer:", /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "text",
      name: "answer"
    }, register('answer', {
      required: true,
      maxLength: 1000
    }))), errors.answer && errors.answer.type === "required" && /*#__PURE__*/_react["default"].createElement(Error, null, "This field is required."), errors.answer && errors.answer.type === "maxLength" && /*#__PURE__*/_react["default"].createElement(Error, null, "Length exceeded. Must be less than 1000 characters."), /*#__PURE__*/_react["default"].createElement("br", null), "Your Nickname:", /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "text",
      name: "username"
    }, register('username', {
      required: true,
      maxLength: 60
    }))), errors.username && errors.username.type === "required" && /*#__PURE__*/_react["default"].createElement(Error, null, "This field is required."), errors.username && errors.username.type === "maxLength" && /*#__PURE__*/_react["default"].createElement(Error, null, "Length exceeded. Must be less than 60 characters."), /*#__PURE__*/_react["default"].createElement("br", null), "Your E-mail:", /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "text",
      name: "email"
    }, register('email', {
      required: true,
      maxLength: 60,
      pattern: {
        value: /\S+@\S+\.\S+/
      }
    }))), errors.email && errors.email.type === "required" && /*#__PURE__*/_react["default"].createElement(Error, null, "This field is required."), errors.email && errors.email.type === "maxLength" && /*#__PURE__*/_react["default"].createElement(Error, null, "Length exceeded. Must be less than 60 characters."), errors.email && errors.email.type === "pattern" && /*#__PURE__*/_react["default"].createElement(Error, null, "Please enter email with correct format.")), /*#__PURE__*/_react["default"].createElement(CloseButton, {
      type: "submit"
    }, "Submit"))), /*#__PURE__*/_react["default"].createElement("br", null))), /*#__PURE__*/_react["default"].createElement(AddAnswerButton, {
      onClick: openModal
    }, "Add Answer"));
  }
};

var _default = Modal; // STYLE COMPONENTS

exports["default"] = _default;

var ModalApp = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 50%;\n  padding: 16px 1px;\n"])));

var Overlay = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, .7);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n"])));

var StyledModal = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 20;\n  background: #fff;\n  width: 500px;\n\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"])));

var ModalHeader = _styledComponents["default"].header(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: black;\n  color:white;\n  padding: 10px 20px;\n  display: block;\n  justify-content: space-between;\n"])));

var ModalMain = _styledComponents["default"].main(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 20px;\n"])));

var Label = _styledComponents["default"].label(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: block;\n  flex-direction: column;\n  white-space: pre-wrap;\n  float: left;\n  margin-bottom: 15px;\n"])));

var CloseButton = _styledComponents["default"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: block;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0.5rem 0;\n  margin: 1rem 1rem;\n  width: 11rem;\n  background: black;\n  color: white;\n  border: 2px solid white;\n  float: right;\n  &:hover {\n    background-color: lightblue;\n  }\n"])));

var Button = _styledComponents["default"].button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: block;\n  border-radius: 3px;\n  cursor: pointer;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  color: white;\n  background: black;\n  border: 2px solid black;\n  &:hover {\n    background-color: white;\n    color: black;\n  }\n"])));

var AddAnswerButton = _styledComponents["default"].button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  text-decoration: underline;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  &:hover {\n    color: blue;\n  }\n"])));

var Error = _styledComponents["default"].span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: red;\n"])));

var ButtonDiv = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 50%;\n  padding: 16px 1px;\n"])));