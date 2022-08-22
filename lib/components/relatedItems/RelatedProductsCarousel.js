"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ItemCard = _interopRequireDefault(require("./ItemCard.jsx"));

var _config = require("../../../config.js");

var _ProductComparisonModal = _interopRequireDefault(require("./ProductComparisonModal.jsx"));

var _StarRating = _interopRequireDefault(require("../StarRating.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var axios = require('axios');

var RelatedProductsCarousel = /*#__PURE__*/function (_React$Component) {
  _inherits(RelatedProductsCarousel, _React$Component);

  var _super = _createSuper(RelatedProductsCarousel);

  function RelatedProductsCarousel(props) {
    var _this;

    _classCallCheck(this, RelatedProductsCarousel);

    _this = _super.call(this, props);
    _this.state = {
      relatedProductsIndex: 0,
      relatedProductsWithInfo: [],
      modalVisible: false,
      itemCardData: {
        text: 'Hello World!'
      }
    };
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));
    return _this;
  } //componentwillunmount?


  _createClass(RelatedProductsCarousel, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.buildRelatedItemProperties();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.relatedItems !== prevProps.relatedItems) {
        this.buildRelatedItemProperties();
      }
    }
  }, {
    key: "getProductInfo",
    value: function getProductInfo(itemNumber) {
      return axios({
        method: 'get',
        url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(itemNumber),
        headers: {
          'Authorization': _config.API_KEY
        }
      });
    }
  }, {
    key: "getProductStyles",
    value: function getProductStyles(itemNumber) {
      return axios({
        method: 'get',
        url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(itemNumber, "/styles"),
        headers: {
          'Authorization': _config.API_KEY
        }
      });
    }
  }, {
    key: "getProductRatings",
    value: function getProductRatings(itemNumber) {
      return axios({
        method: 'get',
        url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=".concat(itemNumber),
        headers: {
          'Authorization': _config.API_KEY
        }
      });
    }
  }, {
    key: "averageProductRatings",
    value: function averageProductRatings(ratingsObject) {
      var sumOfRatings = 0;
      ratingsObject.data.results.forEach(function (element) {
        sumOfRatings += element.rating;
      });
      return sumOfRatings / ratingsObject.data.results.length;
    }
  }, {
    key: "buildRelatedItemProperties",
    value: function buildRelatedItemProperties() {
      var _this2 = this;

      var accumulatorArray = [];
      this.props.relatedItems.forEach(function (element) {
        //iterate through relatedItems prop
        Promise.all([_this2.getProductInfo(element), //fetch info for this item from the products API
        _this2.getProductStyles(element), //fetch info for this item from the styles API
        _this2.getProductRatings(element) //fetch info for this item from the ratings API
        ]).then(function (responseArray) {
          var tempObject = {
            //create an object with this item's info
            id: element,
            name: responseArray[0].data.name,
            category: responseArray[0].data.category,
            price: responseArray[0].data.default_price,
            rating: _this2.averageProductRatings(responseArray[2]),
            features: responseArray[0].data.features
          }; //use a default placeholder image if none is available from the API

          if (responseArray[1].data.results[0].photos[0].thumbnail_url === null) {
            tempObject.picture = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png";
          } else {
            tempObject.picture = responseArray[1].data.results[0].photos[0].thumbnail_url;
          }

          accumulatorArray.push(tempObject); // push current item's info onto the accumulator
        }).then(function () {
          _this2.setState({
            relatedProductsWithInfo: accumulatorArray
          });
        })["catch"](function (error) {
          error.log(error);
        });
      }); //end of forEach
    } //TODO: Set decrement and increment to gray out the buttons at ends

  }, {
    key: "decrementRelatedProducts",
    value: function decrementRelatedProducts() {
      if (this.state.relatedProductsIndex > 0) {
        var newValue = this.state.relatedProductsIndex - 1;
        this.setState({
          relatedProductsIndex: newValue
        });
      }
    }
  }, {
    key: "incrementRelatedProducts",
    value: function incrementRelatedProducts() {
      if (this.state.relatedProductsIndex < this.props.relatedItems.length - 1) {
        var newValue = this.state.relatedProductsIndex + 1;
        this.setState({
          relatedProductsIndex: newValue
        });
      }
    }
  }, {
    key: "showModal",
    value: function showModal(individualCardData) {
      this.setState({
        modalVisible: !this.state.modalVisible,
        itemCardData: individualCardData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "relatedProductsContainer"
      }, /*#__PURE__*/_react["default"].createElement(_ProductComparisonModal["default"], {
        show: this.state.modalVisible,
        showModal: this.showModal,
        itemCardData: this.state.itemCardData,
        currentProduct: this.props.currentProduct,
        currentProductPrice: this.props.currentProductPrice,
        currentProductImage: this.props.currentProductImage,
        currentProductFeatures: this.props.currentProductFeatures,
        currentItemRating: this.props.currentItemRating
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "buttonLeftRight"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "relatedButton",
        onClick: function onClick() {
          _this3.decrementRelatedProducts();
        }
      }, "\u276E Previous"), /*#__PURE__*/_react["default"].createElement("a", {
        className: "relatedButton",
        onClick: function onClick() {
          _this3.incrementRelatedProducts();
        }
      }, "Next \u276F")), /*#__PURE__*/_react["default"].createElement("div", {
        id: "RelatedProductsCarousel",
        style: {
          transform: "translateX(-".concat(this.state.relatedProductsIndex * 205, "px)")
        }
      }, this.state.relatedProductsWithInfo.map(function (currentProduct) {
        return /*#__PURE__*/_react["default"].createElement(_ItemCard["default"], {
          productInfo: currentProduct,
          key: currentProduct.id,
          showModal: _this3.showModal
        });
      })));
    }
  }]);

  return RelatedProductsCarousel;
}(_react["default"].Component);

var _default = RelatedProductsCarousel;
exports["default"] = _default;