"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StarRating = _interopRequireDefault(require("../StarRating.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductComparisonModal = function ProductComparisonModal(props) {
  if (!props.show) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "comparison-modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Comparing"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick(e) {
      props.showModal();
    }
  }, "Close")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "comparisonProductModalPane"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Comparison Item"), /*#__PURE__*/_react["default"].createElement("img", {
    src: props.itemCardData.picture,
    width: "450",
    height: "450"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StarRating["default"], {
    size: 16,
    rating: props.itemCardData.rating
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard_Name"
  }, "Name: ", props.itemCardData.name), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard_Category"
  }, "Category: ", props.itemCardData.category), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ItemCard_Price"
  }, "Price: $", props.itemCardData.price)), /*#__PURE__*/_react["default"].createElement("div", {
    id: "currentProductModalPane"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Current Item"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.currentProductImage,
    width: "450",
    height: "450"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StarRating["default"], {
    size: 16,
    rating: props.currentItemRating
  })), /*#__PURE__*/_react["default"].createElement("div", null, "Name: ", props.currentProduct.name), /*#__PURE__*/_react["default"].createElement("div", null, "Category: ", props.currentProduct.category), /*#__PURE__*/_react["default"].createElement("div", null, "Price: $", props.currentProductPrice))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal-footer"
  }, "Footer")));
};

var _default = ProductComparisonModal;
exports["default"] = _default;