"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _axios = _interopRequireDefault(require("axios"));

var _config = require("../config.js");

var _overviewAllie = _interopRequireDefault(require("./components/productDetailsAllie/overviewAllie.jsx"));

var _QandA = _interopRequireDefault(require("./components/QAcomponent/QandA.jsx"));

var _ratingsAndReviews = _interopRequireDefault(require("./components/ratingsAndReviews/ratingsAndReviews.jsx"));

var _Questionslist = _interopRequireDefault(require("./components/QAcomponent/Questionslist.jsx"));

var _QAsearch = _interopRequireDefault(require("./components/QAcomponent//QAsearch.jsx"));

var _RelatedItems = _interopRequireDefault(require("./components/relatedItems/RelatedItems.jsx"));

var _StarRating = _interopRequireDefault(require("./components/StarRating.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = _defineProperty({
      products: [],
      styles: [],
      currentProduct: [],
      currentProductID: '',
      currentQuestions: [],
      currentStyle: [],
      image: '',
      price: '',
      orginalPrice: '',
      skus: [],
      features: [],
      relatedItems: [],
      relatedItemsData: [],
      currentItemRating: 0
    }, "currentItemRating", 0);
    _this.getProducts = _this.getProducts.bind(_assertThisInitialized(_this));
    _this.updateStyle = _this.updateStyle.bind(_assertThisInitialized(_this));
    _this.updateProduct = _this.updateProduct.bind(_assertThisInitialized(_this));
    _this.submitCart = _this.submitCart.bind(_assertThisInitialized(_this));
    _this.getCurrentProductQuestionsAndAnswers = _this.getCurrentProductQuestionsAndAnswers.bind(_assertThisInitialized(_this));
    _this.updateHelpfulAndReport = _this.updateHelpfulAndReport.bind(_assertThisInitialized(_this));
    _this.addQuestionOrAnswer = _this.addQuestionOrAnswer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProducts();
    } //input: array of item numbers related to the current item
    //create array relatedItemsData
    //for each of those items
    //make a new object inside the results array
    //make request to Products API
    //take name, category, and price from this request and add key/value pairs to the current object
    //make request to reviews API for star rating
    //calculate the average rating
    //add rating key/value pair to the object
    //push the object onto relatedItemsData

  }, {
    key: "getProducts",
    value: function getProducts() {
      var _this2 = this;

      _axios["default"].get("".concat(_config.BACKEND_URL, ":").concat(_config.BACKEND_PORT, "/products"), {
        headers: {
          Authorization: "".concat(_config.API_KEY)
        }
      }).then(function (productRes) {
        _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(productRes.data[0].id, "/styles"), {
          headers: {
            Authorization: "".concat(_config.API_KEY)
          }
        }).then(function (styleRes) {
          // start
          _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(productRes.data[0].id), {
            headers: {
              Authorization: "".concat(_config.API_KEY)
            }
          }).then(function (productFeatures) {
            _this2.setState({
              features: productFeatures.data.features
            });
          }); // end
          // create sku array of objects so easier to map through in component


          var skuArray = [];
          var allSkus = styleRes.data.results[0].skus;

          for (var key in allSkus) {
            var skuObj = {};
            skuObj.id = key;
            skuObj.quantity = allSkus[key].quantity;
            skuObj.size = allSkus[key].size;
            skuArray.push(skuObj);
          } // check for sale price otherwise default price


          var stylePrice;

          if (styleRes.data.results[0].sale_price !== null) {
            stylePrice = styleRes.data.results[0].sale_price;
          } else {
            stylePrice = styleRes.data.results[0].original_price;
          }

          _this2.setAverageRatingOfCurrentProduct(productRes.data[0].id);

          _this2.setState({
            products: productRes.data,
            currentProduct: productRes.data[0],
            currentProductID: productRes.data[0].id,
            styles: styleRes.data.results,
            currentStyle: styleRes.data.results[0],
            image: styleRes.data.results[0].photos[0].url,
            price: stylePrice,
            originalPrice: styleRes.data.results[0].original_price,
            skus: skuArray
          });

          (0, _axios["default"])({
            //making another request to get the related items array
            method: 'get',
            url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(productRes.data[0].id, "/related/"),
            headers: {
              'Authorization': "".concat(_config.API_KEY)
            }
          }).then(function (relatedItemsResponse) {
            _this2.setState({
              products: productRes.data,
              currentProduct: productRes.data[0],
              styles: styleRes.data.results,
              currentStyle: styleRes.data.results[0],
              image: styleRes.data.results[0].photos[0].thumbnail_url,
              price: stylePrice,
              skus: skuArray,
              relatedItems: relatedItemsResponse.data
            });
          });
        }).then(function () {
          _this2.getCurrentProductQuestionsAndAnswers(_this2.state.currentProductID);
        }).then(function () {
          _this2.getProductRatings(_this2.state.currentProductID).then(function (productRatingsResult) {
            _this2.setState({
              currentItemRating: _this2.averageProductRatings(productRatingsResult)
            });
          });
        })["catch"](function (err) {
          console.log(err);
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "getCurrentProductQuestionsAndAnswers",
    value: function getCurrentProductQuestionsAndAnswers(currentProductID) {
      var _this3 = this;

      _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=".concat(currentProductID, "&page=1&count=50"), {
        headers: {
          Authorization: _config.API_KEY
        }
      }).then(function (questions) {
        _this3.setState({
          currentQuestions: questions.data.results
        });
      });
    }
  }, {
    key: "updateHelpfulAndReport",
    value: function updateHelpfulAndReport(QorA, currentQuestion_id, endpoint) {
      _axios["default"].put("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/".concat(QorA, "/").concat(currentQuestion_id, "/").concat(endpoint), undefined, {
        headers: {
          Authorization: _config.API_KEY
        }
      });
    }
  }, {
    key: "addQuestionOrAnswer",
    value: function addQuestionOrAnswer(QorA_id, endpoint, body) {
      if (endpoint !== 'answers') {
        (0, _axios["default"])({
          method: 'post',
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
          headers: {
            Authorization: _config.API_KEY
          },
          'content-type': 'application/json',
          data: body
        }).then(function () {
          console.log('success');
        });
      } else {
        (0, _axios["default"])({
          method: 'post',
          url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/".concat(QorA_id, "/").concat(endpoint),
          headers: {
            Authorization: _config.API_KEY
          },
          'content-type': 'application/json',
          data: body
        }).then(function () {
          console.log('success');
        });
      }
    } //axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${QorA_id}/${endpoint}`

  }, {
    key: "updateStyle",
    value: function updateStyle(style) {
      var stylePrice;

      if (style.sale_price !== null) {
        stylePrice = style.sale_price;
      } else {
        stylePrice = style.original_price;
      }

      var skuArray = [];

      for (var key in style.skus) {
        var skuObj = {};
        skuObj.id = key;
        skuObj.quantity = style.skus[key].quantity;
        skuObj.size = style.skus[key].size;
        skuArray.push(skuObj);
      }

      this.setState({
        currentStyle: style,
        image: style.photos[0].url,
        price: stylePrice,
        orginalPrice: style.original_price,
        skus: skuArray
      });
    }
  }, {
    key: "updateProduct",
    value: function updateProduct(product) {
      var _this4 = this;

      _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(product.id, "/styles"), {
        headers: {
          Authorization: "".concat(_config.API_KEY)
        }
      }).then(function (styleRes) {
        //start
        _axios["default"].get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(product.id), {
          headers: {
            Authorization: "".concat(_config.API_KEY)
          }
        }).then(function (productFeatures) {
          _this4.setState({
            features: productFeatures.data.features
          });
        }); // end
        // create sku array of objects so easier to map through in component


        var skuArray = [];
        var allSkus = styleRes.data.results[0].skus;

        for (var key in allSkus) {
          var skuObj = {};
          skuObj.id = key;
          skuObj.quantity = allSkus[key].quantity;
          skuObj.size = allSkus[key].size;
          skuArray.push(skuObj);
        } // check for sale price otherwise default price


        var stylePrice;

        if (styleRes.data.results[0].sale_price !== null) {
          stylePrice = styleRes.data.results[0].sale_price;
        } else {
          stylePrice = styleRes.data.results[0].original_price;
        }

        _this4.setState({
          //TODO - update relatedItems for Related Items component
          currentProduct: product,
          currentProductID: styleRes.data.product_id,
          styles: styleRes.data.results,
          currentStyle: styleRes.data.results[0],
          image: styleRes.data.results[0].photos[0].url,
          price: stylePrice,
          originalPrice: styleRes.data.results[0].original_price,
          skus: skuArray
        });

        (0, _axios["default"])({
          //making another request to get the related items array
          method: 'get',
          url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/".concat(product.id, "/related/"),
          headers: {
            'Authorization': _config.API_KEY
          }
        }).then(function (relatedItemsResponse) {
          _this4.setState({
            relatedItems: relatedItemsResponse.data
          });
        });
      }).then(function () {
        _this4.getCurrentProductQuestionsAndAnswers(_this4.state.currentProductID);
      }).then(function () {
        _this4.getProductRatings(_this4.state.currentProductID).then(function (productRatingsResult) {
          console.log('setting average rating for the current product', productRatingsResult);

          _this4.setState({
            currentItemRating: _this4.averageProductRatings(productRatingsResult)
          });
        });
      })["catch"](function (err) {
        console.log(err);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "submitCart",
    value: function submitCart(id, size, quantity) {
      console.log(id, size, quantity); // send a post request to cart
    }
  }, {
    key: "getProductRatings",
    value: function getProductRatings(itemNumber) {
      return (0, _axios["default"])({
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
    key: "setAverageRatingOfCurrentProduct",
    value: function setAverageRatingOfCurrentProduct(itemNumber) {
      var _this5 = this;

      this.getProductRatings(itemNumber).then(function (response) {
        _this5.setState({
          currentItemRating: _this5.averageProductRatings(response)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Overview"), /*#__PURE__*/_react["default"].createElement(_overviewAllie["default"], {
        products: this.state.products,
        currentProduct: this.state.currentProduct,
        styles: this.state.styles,
        price: this.state.price,
        originalPrice: this.state.originalPrice,
        currentStyle: this.state.currentStyle,
        image: this.state.image,
        skus: this.state.skus,
        updateStyle: this.updateStyle,
        updateProduct: this.updateProduct,
        submitCart: this.submitCart,
        features: this.state.features,
        currentItemRating: this.state.currentItemRating
      }), /*#__PURE__*/_react["default"].createElement("p", null, "Related Items"), /*#__PURE__*/_react["default"].createElement(_RelatedItems["default"], {
        currentProduct: this.state.currentProduct,
        relatedItems: this.state.relatedItems,
        currentProductPrice: this.state.price,
        currentProductImage: this.state.image,
        currentProductFeatures: this.state.features,
        currentItemRating: this.state.currentItemRating
      }), /*#__PURE__*/_react["default"].createElement("p", null, "Questions and Answers"), /*#__PURE__*/_react["default"].createElement(_QandA["default"], {
        currentQuestions: this.state.currentQuestions,
        currentProduct: this.state.currentProduct,
        updateHelpful: this.updateHelpfulAndReport,
        addQorA: this.addQuestionOrAnswer
      }), /*#__PURE__*/_react["default"].createElement("p", null, "Ratings and Reviews"), /*#__PURE__*/_react["default"].createElement(_ratingsAndReviews["default"], null));
    }
  }]);

  return App;
}(_react["default"].Component);

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('app'));