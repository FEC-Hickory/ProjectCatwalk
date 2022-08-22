"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeFreeSolid = require("@fortawesome/fontawesome-free-solid");

var _fontawesomeFreeBrands = require("@fortawesome/fontawesome-free-brands");

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

var OverviewAllie = /*#__PURE__*/function (_React$Component) {
  _inherits(OverviewAllie, _React$Component);

  var _super = _createSuper(OverviewAllie);

  function OverviewAllie(props) {
    var _this;

    _classCallCheck(this, OverviewAllie);

    _this = _super.call(this, props);
    _this.state = {
      quantity: ['-'],
      slideIndex: 0,
      slides: document.getElementsByClassName('slide'),
      selectedSize: '',
      selectedId: '',
      selectedQuantity: 0,
      expandImage: false
    };
    _this.selectedStyle = _this.selectedStyle.bind(_assertThisInitialized(_this));
    _this.selectedProduct = _this.selectedProduct.bind(_assertThisInitialized(_this));
    _this.setQuantity = _this.setQuantity.bind(_assertThisInitialized(_this));
    _this.expandImage = _this.expandImage.bind(_assertThisInitialized(_this));
    _this.nextSlide = _this.nextSlide.bind(_assertThisInitialized(_this));
    _this.previousSlide = _this.previousSlide.bind(_assertThisInitialized(_this));
    _this.selectStyleThumbnail = _this.selectStyleThumbnail.bind(_assertThisInitialized(_this));
    _this.selectQuantity = _this.selectQuantity.bind(_assertThisInitialized(_this));
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OverviewAllie, [{
    key: "selectedStyle",
    value: function selectedStyle(style) {
      this.state.slides[this.state.slideIndex].style.display = 'none';
      this.props.updateStyle(style);
      this.state.slides[0].style.display = 'block';
      this.setState({
        slideIndex: 0,
        quantity: ['-']
      });
    }
  }, {
    key: "selectedProduct",
    value: function selectedProduct(product) {
      this.state.slides[this.state.slideIndex].style.display = 'none';
      this.props.updateProduct(product);
      this.state.slides[0].style.display = 'block';
      this.setState({
        slideIndex: 0
      });
    }
  }, {
    key: "setQuantity",
    value: function setQuantity(index) {
      var quantityArray = [];
      var i = 1;

      while (i <= this.props.skus[index].quantity) {
        quantityArray.push(i);
        i++;

        if (i >= 16) {
          break;
        }
      }

      this.setState({
        quantity: quantityArray,
        selectedSize: this.props.skus[index].size,
        selectedId: this.props.skus[index].id
      });
    }
  }, {
    key: "expandImage",
    value: function expandImage() {
      this.setState({
        expandImage: !this.state.expandImage
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      if (this.state.slideIndex === this.props.currentStyle.photos.length - 1) {
        this.state.slides[this.props.currentStyle.photos.length - 1].style.display = 'none';
        this.state.slides[0].style.display = 'block';
        this.setState({
          slideIndex: 0
        });
      } else {
        this.state.slides[this.state.slideIndex].style.display = 'none';
        this.state.slides[this.state.slideIndex + 1].style.display = 'block';
        this.setState({
          slideIndex: this.state.slideIndex + 1
        });
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      if (this.state.slideIndex === 0) {
        this.state.slides[0].style.display = 'none';
        this.state.slides[this.props.currentStyle.photos.length - 1].style.display = 'block';
        this.setState({
          slideIndex: this.props.currentStyle.photos.length - 1
        });
      } else {
        this.state.slides[this.state.slideIndex].style.display = 'none';
        this.state.slides[this.state.slideIndex - 1].style.display = 'block';
        this.setState({
          slideIndex: this.state.slideIndex - 1
        });
      }
    }
  }, {
    key: "selectStyleThumbnail",
    value: function selectStyleThumbnail(index) {
      this.state.slides[this.state.slideIndex].style.display = 'none';
      this.state.slides[index].style.display = 'block';
      this.setState({
        slideIndex: index
      });
    }
  }, {
    key: "selectQuantity",
    value: function selectQuantity(quantity) {
      this.setState({
        selectedQuantity: quantity
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart() {
      this.props.submitCart(this.state.selectedId, this.state.selectedSize, this.state.selectedQuantity);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$currentSt,
          _this2 = this,
          _this$props$currentSt2,
          _this$props$features;

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, "Team Hickory Dickory Dock")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "overviewContainer"
      }, this.state.expandImage ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "expandedView"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "expanded-image",
        src: this.props.currentStyle.photos[this.state.slideIndex].url
      }), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "expandedIcon",
        icon: "fa-solid fa-compress",
        onClick: this.expandImage
      })) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "gallery"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "thumbnail-container"
      }, (_this$props$currentSt = this.props.currentStyle.photos) === null || _this$props$currentSt === void 0 ? void 0 : _this$props$currentSt.map(function (photo, i) {
        return _this2.props.currentStyle.photos[_this2.state.slideIndex].thumbnail_url === photo.thumbnail_url ? /*#__PURE__*/_react["default"].createElement("div", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "thumbnail-image-border",
          src: photo.thumbnail_url,
          height: "65",
          width: "60",
          onClick: function onClick() {
            return _this2.selectStyleThumbnail(i);
          }
        })) : /*#__PURE__*/_react["default"].createElement("div", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "thumbnail-image",
          src: photo.thumbnail_url,
          height: "65",
          width: "60",
          onClick: function onClick() {
            return _this2.selectStyleThumbnail(i);
          }
        }));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "slideshow-container"
      }, /*#__PURE__*/_react["default"].createElement("div", null, (_this$props$currentSt2 = this.props.currentStyle.photos) === null || _this$props$currentSt2 === void 0 ? void 0 : _this$props$currentSt2.map(function (photo, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "slide index".concat(i),
          key: i
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "main-image",
          src: photo.url
        }));
      }), /*#__PURE__*/_react["default"].createElement("a", {
        className: "prev",
        onClick: this.previousSlide
      }, "\u276E"), /*#__PURE__*/_react["default"].createElement("a", {
        className: "next",
        onClick: this.nextSlide
      }, "\u276F"), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "expand",
        icon: "fa-solid fa-expand",
        onClick: this.expandImage
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ratings"
      }, this.state.expandImage ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "star-icons"
      }, /*#__PURE__*/_react["default"].createElement(_StarRating["default"], {
        size: 32,
        rating: this.props.currentItemRating
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "category"
      }, this.state.expandImage ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "product-category"
      }, this.props.currentProduct.category), /*#__PURE__*/_react["default"].createElement("div", {
        className: "product-name"
      }, /*#__PURE__*/_react["default"].createElement("b", null, this.props.currentProduct.name)), this.props.currentStyle.sale_price ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "sale-price"
      }, "$", this.props.currentStyle.sale_price, " ", /*#__PURE__*/_react["default"].createElement("s", null, this.props.currentStyle.original_price)) : /*#__PURE__*/_react["default"].createElement("div", null, "$", this.props.currentStyle.original_price), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "styleName"
      }, /*#__PURE__*/_react["default"].createElement("b", null, "Style > "), this.props.currentStyle.name))), this.state.expandImage ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "style"
      }, this.props.styles.map(function (style, i) {
        return _this2.props.currentStyle.style_id === style.style_id ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "style-container",
          key: i
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          className: "checkmark",
          icon: "fa-solid fa-check"
        }), /*#__PURE__*/_react["default"].createElement("img", {
          className: "style-image",
          height: "65",
          width: "60",
          src: style.photos[0].thumbnail_url,
          onClick: function onClick() {
            return _this2.selectedStyle(style);
          },
          key: i
        })) : /*#__PURE__*/_react["default"].createElement("div", {
          className: "style-container",
          key: i
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "style-image",
          height: "65",
          width: "60",
          src: style.photos[0].thumbnail_url,
          onClick: function onClick() {
            return _this2.selectedStyle(style);
          },
          key: i
        }));
      })), this.state.expandImage ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "selection"
      }, /*#__PURE__*/_react["default"].createElement("select", {
        className: "size-dropdown",
        onChange: function onChange() {
          return _this2.setQuantity(event.target.value);
        }
      }, /*#__PURE__*/_react["default"].createElement("option", null, "Select Size"), this.props.skus.map(function (sku, i) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: i,
          value: i
        }, sku.size);
      })), /*#__PURE__*/_react["default"].createElement("select", {
        className: "quantity-dropdown",
        onChange: function onChange() {
          return _this2.selectQuantity(event.target.value);
        }
      }, this.state.quantity.map(function (number, i) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: i,
          value: number
        }, number);
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "addToCart",
        onClick: this.addToCart
      }, "Add to Cart")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "description"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "social-container"
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "fa-brands fa-instagram"
      }), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "fa-brands fa-facebook"
      }), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "fa-brands fa-twitter"
      }), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "fa-brands fa-pinterest"
      })), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "slogan"
      }, /*#__PURE__*/_react["default"].createElement("b", null, this.props.currentProduct.slogan)), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "product-description"
      }, this.props.currentProduct.description)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "otherStuff"
      }, (_this$props$features = this.props.features) === null || _this$props$features === void 0 ? void 0 : _this$props$features.map(function (feature, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "feature"
        }, "\u2714 ", feature.value, " ", feature.feature), /*#__PURE__*/_react["default"].createElement("br", null));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "products"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "each-product"
      }, this.props.products.map(function (product, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "products",
          onClick: function onClick() {
            return _this2.selectedProduct(product);
          },
          key: i
        }, product.name);
      })))));
    }
  }]);

  return OverviewAllie;
}(_react["default"].Component);

var _default = OverviewAllie;
exports["default"] = _default;