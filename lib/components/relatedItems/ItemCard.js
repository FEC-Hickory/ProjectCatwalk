"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StarRating = _interopRequireDefault(require("../StarRating.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ItemCard = function ItemCard(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "actionButton",
    onClick: function onClick(e) {
      props.showModal(props.productInfo);
    }
  }, "\u2B50\uFE0F"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.productInfo.picture,
    width: "200",
    height: "200"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard_Name"
  }, props.productInfo.name), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard_Category"
  }, props.productInfo.category), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard_Price"
  }, "$", props.productInfo.price), /*#__PURE__*/_react["default"].createElement(_StarRating["default"], {
    size: 16,
    rating: props.productInfo.rating
  }));
};

var _default = ItemCard;
exports["default"] = _default;