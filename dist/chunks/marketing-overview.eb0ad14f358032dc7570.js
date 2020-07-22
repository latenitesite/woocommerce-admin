(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([["marketing-overview"],{

/***/ "./client/lib/in-app-purchase.js":
/*!***************************************!*\
  !*** ./client/lib/in-app-purchase.js ***!
  \***************************************/
/*! exports provided: getInAppPurchaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInAppPurchaseUrl", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WooCommerce dependencies
 */


/**
 * Returns an in-app-purchase URL.
 *
 * @param {string} url
 * @param {Object} queryArgs
 * @return {string} url with in-app-purchase query parameters
 */

var getInAppPurchaseUrl = function getInAppPurchaseUrl(url) {
  var queryArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search;
  var connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('connectNonce', '');
  queryArgs = _objectSpread({
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('wcVersion'),
    'wccom-connect-nonce': connectNonce
  }, queryArgs);
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])(url, queryArgs);
};

/***/ }),

/***/ "./client/marketing/components/button/index.js":
/*!*****************************************************!*\
  !*** ./client/marketing/components/button/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/components/button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className, 'woocommerce-admin-marketing-button')
  }));
});

/***/ }),

/***/ "./client/marketing/components/button/style.scss":
/*!*******************************************************!*\
  !*** ./client/marketing/components/button/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/components/button/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/components/index.js":
/*!**********************************************!*\
  !*** ./client/marketing/components/index.js ***!
  \**********************************************/
/*! exports provided: Button, ProductIcon, Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./client/marketing/components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _product_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-icon */ "./client/marketing/components/product-icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductIcon", function() { return _product_icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./client/marketing/components/slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _slider__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./client/marketing/components/knowledge-base/index.js":
/*!*************************************************************!*\
  !*** ./client/marketing/components/knowledge-base/index.js ***!
  \*************************************************************/
/*! exports provided: KnowledgeBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBase", function() { return KnowledgeBase; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/components/knowledge-base/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components */ "./client/marketing/components/index.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/constants */ "./client/marketing/data/constants.js");



/**
 * External dependencies
 */








/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */





var KnowledgeBase = function KnowledgeBase(_ref) {
  var posts = _ref.posts,
      isLoading = _ref.isLoading,
      title = _ref.title,
      description = _ref.description,
      category = _ref.category;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      page = _useState2[0],
      updatePage = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      animate = _useState4[0],
      updateAnimate = _useState4[1];

  var onPaginationPageChange = function onPaginationPageChange(newPage) {
    var newAnimate;

    if (newPage > page) {
      newAnimate = 'left';
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_7__["recordEvent"])('marketing_knowledge_carousel', {
        direction: 'forward',
        page: newPage
      });
    } else {
      newAnimate = 'right';
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_7__["recordEvent"])('marketing_knowledge_carousel', {
        direction: 'back',
        page: newPage
      });
    }

    updatePage(newPage);
    updateAnimate(newAnimate);
  };

  var onPostClick = function onPostClick(post) {
    Object(lib_tracks__WEBPACK_IMPORTED_MODULE_7__["recordEvent"])('marketing_knowledge_article', {
      title: post.title
    });
  };
  /**
   * Get the 2 posts we need for the current page
   */


  var getCurrentSlide = function getCurrentSlide() {
    var currentPosts = posts.slice((page - 1) * 2, (page - 1) * 2 + 2);
    var pageClass = classnames__WEBPACK_IMPORTED_MODULE_5___default()('woocommerce-marketing-knowledgebase-card__page', {
      'page-with-single-post': currentPosts.length === 1
    });
    var displayPosts = currentPosts.map(function (post, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        className: "woocommerce-marketing-knowledgebase-card__post",
        href: post.link,
        key: index,
        onClick: function onClick() {
          onPostClick(post);
        },
        target: "_blank",
        rel: "noopener noreferrer"
      }, post.image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "woocommerce-marketing-knowledgebase-card__post-img"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: post.image,
        alt: ""
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "woocommerce-marketing-knowledgebase-card__post-text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, post.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
        className: "woocommerce-marketing-knowledgebase-card__post-meta"
      }, "By ", post.author_name, post.author_avatar && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: post.author_avatar.replace('s=96', 's=32'),
        className: "woocommerce-gravatar",
        alt: "",
        width: "16",
        height: "16"
      }))));
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: pageClass
    }, displayPosts);
  };

  var renderEmpty = function renderEmpty() {
    var emptyTitle = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('There was an error loading knowledge base posts. Please check again later.', 'woocommerce-admin');

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["EmptyContent"], {
      title: emptyTitle,
      illustrationWidth: 250,
      actionLabel: ""
    });
  };

  var renderPosts = function renderPosts() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "woocommerce-marketing-knowledgebase-card__posts"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_11__["Slider"], {
      animationKey: page,
      animate: animate
    }, getCurrentSlide()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Pagination"], {
      page: page,
      perPage: 2,
      total: posts.length,
      onPageChange: onPaginationPageChange,
      showPagePicker: false,
      showPerPagePicker: false,
      showPageArrowsLabel: false
    }));
  };

  var renderCardBody = function renderCardBody() {
    if (isLoading) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null);
    }

    return posts.length === 0 ? renderEmpty() : renderPosts();
  };

  var categoryClass = category ? "woocommerce-marketing-knowledgebase-card__category-".concat(category) : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Card"], {
    title: title,
    description: description,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('woocommerce-marketing-knowledgebase-card', categoryClass)
  }, renderCardBody());
};

KnowledgeBase.propTypes = {
  /**
   * Array of posts.
   */
  posts: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object).isRequired,

  /**
   * Whether the card is loading.
   */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,

  /**
   * Cart title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /**
   * Card description.
   */
  description: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /**
   * Category of extensions to display.
   */
  category: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
KnowledgeBase.defaultProps = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('WooCommerce knowledge base', 'woocommerce-admin'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin')
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, props) {
  var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_12__["STORE_KEY"]),
      getBlogPosts = _select.getBlogPosts,
      isResolving = _select.isResolving;

  return {
    posts: getBlogPosts(props.category),
    isLoading: isResolving('getBlogPosts', [props.category])
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(KnowledgeBase));

/***/ }),

/***/ "./client/marketing/components/knowledge-base/style.scss":
/*!***************************************************************!*\
  !*** ./client/marketing/components/knowledge-base/style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/components/knowledge-base/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/index.js":
/*!*****************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/index.js ***!
  \*****************************************************************/
/*! exports provided: blank, amazonEbayIntegration, woocommerceAmazonEbayIntegration, automatewoo, automatewooAlt, facebook, facebookForWoocommerce, googleAds, klikenMarketingForGoogle, hubspotForWoocommerce, mailchimpForWoocommerce, woocommerceStoreCredit, woocommerceFreeGiftCoupons, woocommerceUrlCoupons, woocommerceGroupCoupons, woocommerceSmartCoupons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_blank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/blank */ "./client/marketing/components/product-icon/icons/library/blank.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blank", function() { return _library_blank__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _library_amazon_ebay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/amazon-ebay */ "./client/marketing/components/product-icon/icons/library/amazon-ebay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "amazonEbayIntegration", function() { return _library_amazon_ebay__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "woocommerceAmazonEbayIntegration", function() { return _library_amazon_ebay__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _library_automatewoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/automatewoo */ "./client/marketing/components/product-icon/icons/library/automatewoo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automatewoo", function() { return _library_automatewoo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _library_automatewoo_alt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/automatewoo-alt */ "./client/marketing/components/product-icon/icons/library/automatewoo-alt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automatewooAlt", function() { return _library_automatewoo_alt__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _library_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library/facebook */ "./client/marketing/components/product-icon/icons/library/facebook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "facebook", function() { return _library_facebook__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "facebookForWoocommerce", function() { return _library_facebook__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _library_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library/google */ "./client/marketing/components/product-icon/icons/library/google.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "googleAds", function() { return _library_google__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "klikenMarketingForGoogle", function() { return _library_google__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _library_hubspot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library/hubspot */ "./client/marketing/components/product-icon/icons/library/hubspot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hubspotForWoocommerce", function() { return _library_hubspot__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _library_mailchimp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library/mailchimp */ "./client/marketing/components/product-icon/icons/library/mailchimp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mailchimpForWoocommerce", function() { return _library_mailchimp__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _library_currency_dollar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library/currency-dollar */ "./client/marketing/components/product-icon/icons/library/currency-dollar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "woocommerceStoreCredit", function() { return _library_currency_dollar__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _library_gift__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library/gift */ "./client/marketing/components/product-icon/icons/library/gift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "woocommerceFreeGiftCoupons", function() { return _library_gift__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _library_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/link */ "./client/marketing/components/product-icon/icons/library/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "woocommerceUrlCoupons", function() { return _library_link__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _library_people__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/people */ "./client/marketing/components/product-icon/icons/library/people.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "woocommerceGroupCoupons", function() { return _library_people__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _library_tip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./library/tip */ "./client/marketing/components/product-icon/icons/library/tip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "woocommerceSmartCoupons", function() { return _library_tip__WEBPACK_IMPORTED_MODULE_12__["default"]; });

 // Amazon & Ebay Integration


 // AutomateWoo


 // Facebook


 // Google Ads


 // Hubspot

 // Mailchimp

 // Coupons







/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/amazon-ebay.js":
/*!*******************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/amazon-ebay.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var amazonEbay = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
  id: "b"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#eee"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(9 25.655)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M179.753,195.8c-4.732,3.488-11.591,5.349-17.5,5.349a31.66,31.66,0,0,1-21.374-8.156c-.443-.4-.046-.946.486-.634a43.018,43.018,0,0,0,21.384,5.671,42.523,42.523,0,0,0,16.312-3.335c.8-.34,1.471.525.688,1.106",
  transform: "translate(-129.235 -176.611)",
  fill: "#f90",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M577.807,183.949c-.6-.773-4-.365-5.522-.184-.464.057-.535-.347-.117-.638,2.7-1.9,7.142-1.354,7.66-.716s-.135,5.09-2.676,7.213c-.39.326-.762.152-.588-.28.571-1.425,1.85-4.619,1.244-5.395",
  transform: "translate(-525.323 -167.01)",
  fill: "#f90",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M572.708,6.758V4.908a.457.457,0,0,1,.468-.468h8.284a.461.461,0,0,1,.479.468V6.493a2.605,2.605,0,0,1-.624,1.163l-4.292,6.129a9.146,9.146,0,0,1,4.725,1.014.843.843,0,0,1,.44.72v1.974c0,.269-.3.585-.61.422a9.542,9.542,0,0,0-8.752.014c-.287.156-.588-.156-.588-.425V15.627a2.238,2.238,0,0,1,.3-1.272l4.973-7.132h-4.328a.458.458,0,0,1-.479-.464",
  transform: "translate(-525.64 -4.078)",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M173.431,15.624h-2.52a.476.476,0,0,1-.45-.429V2.261a.473.473,0,0,1,.486-.464h2.35a.475.475,0,0,1,.457.432V3.92h.046a3.463,3.463,0,0,1,6.589,0,3.722,3.722,0,0,1,6.4-.982c.8,1.088.634,2.669.634,4.055l0,8.163a.476.476,0,0,1-.486.468h-2.517a.479.479,0,0,1-.454-.468V8.3a16.192,16.192,0,0,0-.071-2.424,1.312,1.312,0,0,0-1.482-1.113,1.674,1.674,0,0,0-1.506,1.06,7.831,7.831,0,0,0-.234,2.478v6.855a.476.476,0,0,1-.486.468h-2.517a.476.476,0,0,1-.454-.468l0-6.855c0-1.443.238-3.566-1.553-3.566-1.811,0-1.74,2.07-1.74,3.566v6.855a.476.476,0,0,1-.486.468",
  transform: "translate(-156.58 -1.399)",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M714.982,1.524c3.739,0,5.763,3.211,5.763,7.295,0,3.945-2.237,7.075-5.763,7.075-3.672,0-5.671-3.211-5.671-7.213,0-4.027,2.024-7.156,5.671-7.156M715,4.164c-1.857,0-1.974,2.531-1.974,4.108s-.025,4.955,1.953,4.955c1.953,0,2.045-2.722,2.045-4.381a11.959,11.959,0,0,0-.376-3.431A1.577,1.577,0,0,0,715,4.164",
  transform: "translate(-651.552 -1.399)",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M875.817,15.624h-2.51a.479.479,0,0,1-.454-.468l0-12.938a.477.477,0,0,1,.486-.422h2.336a.482.482,0,0,1,.45.362V4.136h.046c.705-1.769,1.694-2.612,3.435-2.612a3.307,3.307,0,0,1,2.942,1.524c.659,1.035.659,2.775.659,4.027v8.142a.484.484,0,0,1-.486.408h-2.527a.477.477,0,0,1-.447-.408V8.191c0-1.414.163-3.484-1.577-3.484a1.647,1.647,0,0,0-1.457,1.035,5.724,5.724,0,0,0-.4,2.449v6.965a.485.485,0,0,1-.493.468",
  transform: "translate(-801.775 -1.399)",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M413.163,8.046a4.93,4.93,0,0,1-.471,2.673,2.048,2.048,0,0,1-1.744,1.145c-.968,0-1.535-.737-1.535-1.825,0-2.148,1.925-2.538,3.75-2.538v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.143,6.143,0,0,1-1.446-1.68,4.991,4.991,0,0,1-4.154,1.833,3.575,3.575,0,0,1-3.771-3.927,4.277,4.277,0,0,1,2.687-4.119,17.463,17.463,0,0,1,4.739-.876V5.154a3.214,3.214,0,0,0-.308-1.825,1.677,1.677,0,0,0-1.414-.656,1.917,1.917,0,0,0-2.024,1.514.527.527,0,0,1-.439.461l-2.442-.262a.444.444,0,0,1-.376-.528C406.719.893,409.4,0,411.795,0a5.714,5.714,0,0,1,3.8,1.255C416.818,2.4,416.7,3.928,416.7,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.477.477,0,0,1-.011.67c-.514.429-1.428,1.226-1.932,1.673l0-.007",
  transform: "translate(-372.698 0)",
  "fill-rule": "evenodd"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7.426,8.046a4.93,4.93,0,0,1-.471,2.673,2.043,2.043,0,0,1-1.744,1.145c-.968,0-1.531-.737-1.531-1.825C3.679,7.89,5.6,7.5,7.426,7.5v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.2,6.2,0,0,1-1.446-1.68A4.986,4.986,0,0,1,3.771,14.4,3.576,3.576,0,0,1,0,10.474,4.282,4.282,0,0,1,2.687,6.356,17.462,17.462,0,0,1,7.426,5.48V5.154a3.243,3.243,0,0,0-.3-1.825,1.686,1.686,0,0,0-1.414-.656A1.921,1.921,0,0,0,3.679,4.186a.527.527,0,0,1-.436.461L.8,4.385a.446.446,0,0,1-.376-.528C.985.893,3.662,0,6.058,0a5.714,5.714,0,0,1,3.8,1.255C11.08,2.4,10.963,3.928,10.963,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.473.473,0,0,1-.007.67c-.514.429-1.428,1.226-1.932,1.673l-.007-.007",
  transform: "translate(0 0)",
  "fill-rule": "evenodd"
})), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(18.9 54.637)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M8.055,26.308C3.716,26.308.1,28.149.1,33.7c0,4.4,2.431,7.171,8.067,7.171,6.633,0,7.059-4.37,7.059-4.37H12.011s-.689,2.353-4.04,2.353a4.4,4.4,0,0,1-4.693-4.428H15.562V32.807c0-2.557-1.623-6.5-7.507-6.5Zm-.112,2.073c2.6,0,4.37,1.592,4.37,3.977H3.349C3.349,29.826,5.661,28.381,7.943,28.381Z",
  transform: "translate(0 -20.83)",
  fill: "#e53238"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M75.169.1V17.254c0,.974-.069,2.341-.069,2.341h3.066s.11-.982.11-1.879c0,0,1.515,2.37,5.633,2.37a6.961,6.961,0,0,0,7.283-7.325A6.922,6.922,0,0,0,83.915,5.52c-4.279,0-5.609,2.311-5.609,2.311V.1Zm7.955,7.542c2.945,0,4.818,2.186,4.818,5.119a4.857,4.857,0,0,1-4.8,5.2c-3.143,0-4.839-2.454-4.839-5.175C78.306,10.254,79.827,7.642,83.123,7.642Z",
  transform: "translate(-59.609)",
  fill: "#0064d2"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M159.834,26.308c-6.528,0-6.947,3.574-6.947,4.146h3.249s.17-2.087,3.473-2.087c2.146,0,3.809.982,3.809,2.871v.672h-3.809c-5.057,0-7.731,1.479-7.731,4.482,0,2.955,2.47,4.562,5.809,4.562,4.55,0,6.015-2.514,6.015-2.514,0,1,.077,1.985.077,1.985h2.888s-.112-1.221-.112-2V31.669c0-4.428-3.572-5.36-6.722-5.36Zm3.585,7.619v.9c0,1.169-.721,4.075-4.968,4.075-2.326,0-3.323-1.161-3.323-2.507C155.128,33.943,158.486,33.927,163.419,33.927Z",
  transform: "translate(-120.634 -20.83)",
  fill: "#f5af02"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M214.879,29.041h3.655l5.246,10.51,5.234-10.51h3.311l-9.533,18.711h-3.473l2.751-5.216Z",
  transform: "translate(-170.706 -23.002)",
  fill: "#86b817"
}))));
/* harmony default export */ __webpack_exports__["default"] = (amazonEbay);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/automatewoo-alt.js":
/*!***********************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/automatewoo-alt.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var automatewooAlt = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.67708 14.1615h3.77084l.77604 2.1198h1.96354L7.65625 7H5.5625L2 16.2813h1.90625l.77083-2.1198zm3.17188-1.6511H5.28125l1.28646-3.50519 1.28125 3.50519zM22.9791 7h-1.8437l-1.6719 6.4115L17.3906 7h-1.8698l-2.0573 6.3854L11.7604 7H9.8489l2.5781 9.2813h1.8854l2.1198-6.60942 2.1198 6.60942h1.8594L22.9791 7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (automatewooAlt);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/automatewoo.js":
/*!*******************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/automatewoo.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var automatewoo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
  id: "b"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#7532e4"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(-43.503 -133.512)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M78.217,193.13H64.405l-2.823,7.764H54.6L67.648,166.9h7.669l12.934,33.995H81.059Zm-11.6-6.047h9.4L71.33,174.245Z",
  transform: "translate(0 0)",
  fill: "#1ff2e6"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M246.639,166.9h6.753l-9.4,33.995h-6.81l-7.764-24.208-7.764,24.208h-6.906L205.3,166.9h7l6.238,23.388,7.535-23.388h6.849l7.592,23.483Z",
  transform: "translate(-121.952)",
  fill: "#1ff2e6"
}))));
/* harmony default export */ __webpack_exports__["default"] = (automatewoo);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/blank.js":
/*!*************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/blank.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var blank = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "36",
  height: "36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
});
/* harmony default export */ __webpack_exports__["default"] = (blank);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/currency-dollar.js":
/*!***********************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/currency-dollar.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var currencyDollar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyDollar);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/facebook.js":
/*!****************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/facebook.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var facebook = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M34 0H2C0.8 0 0 0.8 0 2V34C0 35 0.8 36 2 36H19.2V22H14.6V16.6H19.2V12.6C19.2 8 22 5.4 26.2 5.4C28.2 5.4 29.8 5.6 30.4 5.6V10.4H27.6C25.4 10.4 25 11.4 25 13V16.4H30.4L29.6 22H25V36H34C35 36 36 35.2 36 34V2C36 0.8 35.2 0 34 0Z",
  fill: "#3B5997"
}));
/* harmony default export */ __webpack_exports__["default"] = (facebook);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/gift.js":
/*!************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/gift.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var gift = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M14.75 9C16.1307 9 17.25 7.88071 17.25 6.5C17.25 5.11929 16.1307 4 14.75 4C13.3693 4 12.25 5.11929 12.25 6.5C12.25 5.11929 11.1307 4 9.75 4C8.36929 4 7.25 5.11929 7.25 6.5C7.25 7.88071 8.36929 9 9.75 9H4V20L20 20V9L14.75 9ZM14.75 7.5C15.3023 7.5 15.75 7.05228 15.75 6.5C15.75 5.94772 15.3023 5.5 14.75 5.5C14.1977 5.5 13.75 5.94772 13.75 6.5V7.5H14.75ZM18.5 18.5V10.5H13V18.5H18.5ZM11.5 18.5H5.5L5.5 10.5H11.5L11.5 18.5ZM8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5H10.75V6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (gift);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/google.js":
/*!**************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/google.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var google = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
  id: "b"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#eee"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  transform: "translate(17 7.967)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M83.982,7.646a11.959,11.959,0,0,1,2.825-4.477,11.065,11.065,0,0,1,17.4,2.585c2.665,4.851,5.49,9.594,8.235,14.392,4.584,7.969,9.221,15.937,13.752,23.933a11.017,11.017,0,1,1-19.269,10.687q-6.037-10.514-12.1-21a2.415,2.415,0,0,0-.293-.426,4.336,4.336,0,0,1-.88-1.306c-1.786-3.145-3.625-6.263-5.41-9.381C87.1,20.626,85.9,18.627,84.755,16.6a11.036,11.036,0,0,1-1.466-5.863,8.171,8.171,0,0,1,.693-3.092",
  transform: "translate(-61.088 0)",
  fill: "#3c8bd9"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M31.255,28.6a15.329,15.329,0,0,0-.506,2.932,11.513,11.513,0,0,0,1.6,6.263q4.4,7.556,8.768,15.165c.267.453.48.906.746,1.333-1.6,2.772-3.2,5.517-4.824,8.289C34.8,66.445,32.561,70.336,30.3,74.2c-.107,0-.133-.053-.16-.133a1.652,1.652,0,0,1,.107-.613,10.727,10.727,0,0,0-2.559-10.581,10.157,10.157,0,0,0-6.263-3.225,10.816,10.816,0,0,0-8.555,2.372c-.453.346-.746.853-1.279,1.119a.178.178,0,0,1-.187-.133c1.279-2.212,2.532-4.424,3.811-6.636q7.915-13.752,15.858-27.478c.053-.107.133-.187.187-.293",
  transform: "translate(-8.362 -20.954)",
  fill: "#fabc04"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4.173,147.8c.506-.453.986-.933,1.519-1.359a11.016,11.016,0,0,1,17.617,6.689,11.714,11.714,0,0,1-.426,5.677,2.788,2.788,0,0,1-.107.453c-.24.426-.453.88-.72,1.306a10.715,10.715,0,0,1-10.447,5.57,10.94,10.94,0,0,1-10.1-9.541A10.663,10.663,0,0,1,2.974,149.5c.267-.48.586-.906.879-1.386.133-.107.08-.32.32-.32",
  transform: "translate(-1.029 -105.664)",
  fill: "#34a852"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.982,157.707c-.107.107-.107.293-.293.32-.027-.187.08-.293.187-.426l.107.107",
  transform: "translate(-7.837 -115.573)",
  fill: "#fabc04"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M81.478,199.753c-.107-.187,0-.32.107-.453l.107.107-.213.346",
  transform: "translate(-59.731 -146.16)",
  fill: "#e1c025"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5.517,260.4a5.4,5.4,0,1,0,0,10.794A4.974,4.974,0,0,0,9.3,269.675a5.3,5.3,0,0,0,1.2-4.371H5.517v1.466H9.061a3.1,3.1,0,0,1-.8,1.866,3.672,3.672,0,0,1-2.745,1.093,3.918,3.918,0,0,1,0-7.836,3.661,3.661,0,0,1,2.665,1.066l1.039-1.039A5.116,5.116,0,0,0,5.517,260.4Zm9.035,3.864a3.518,3.518,0,1,0,3.465,3.518,3.437,3.437,0,0,0-3.465-3.518m0,5.65a2.141,2.141,0,1,1,1.946-2.132,2.021,2.021,0,0,1-1.946,2.132m7.516-5.65a3.518,3.518,0,1,0,3.465,3.518,3.421,3.421,0,0,0-3.465-3.518m0,5.65a2.141,2.141,0,1,1,1.946-2.132,2.021,2.021,0,0,1-1.946,2.132m7.489-5.65a3.483,3.483,0,0,0,0,6.956,2.329,2.329,0,0,0,1.812-.8h.053v.506c0,1.333-.693,2.052-1.839,2.052a1.9,1.9,0,0,1-1.732-1.226l-1.333.56a3.268,3.268,0,0,0,3.065,2.052c1.786,0,3.278-1.066,3.278-3.625V264.5H31.422v.56h-.053a2.329,2.329,0,0,0-1.812-.8m.133,5.6a1.992,1.992,0,0,1-1.919-2.105,2.017,2.017,0,0,1,1.919-2.132,1.957,1.957,0,0,1,1.839,2.132,1.932,1.932,0,0,1-1.839,2.105m4.291-9.035H35.5v10.287H33.98Zm5.6,3.438a3.346,3.346,0,0,0-3.331,3.518,3.443,3.443,0,0,0,3.491,3.518,3.485,3.485,0,0,0,2.932-1.546l-1.2-.8a2.014,2.014,0,0,1-1.732.959,1.745,1.745,0,0,1-1.706-1.066l4.717-1.946-.16-.4a3.3,3.3,0,0,0-3.012-2.239m-1.812,3.411a1.93,1.93,0,0,1,1.839-2.052,1.329,1.329,0,0,1,1.306.746Z",
  transform: "translate(0 -190.976)",
  fill: "#757575"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M170.4,274.255l3.518-9.355h1.359l3.518,9.355h-1.333l-.906-2.532h-3.918l-.906,2.532Zm2.638-3.651h3.118l-1.519-4.211h-.053Z",
  transform: "translate(-124.986 -194.277)",
  fill: "#757575"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M204.079,273.482a3.528,3.528,0,0,1-.879-2.425,3.623,3.623,0,0,1,.879-2.425,2.792,2.792,0,0,1,2.159-.986,2.827,2.827,0,0,1,1.279.293,2.219,2.219,0,0,1,.906.8h.053l-.053-.879V264.9h1.2v9.355h-1.146v-.879h-.053a2.427,2.427,0,0,1-.906.8,2.654,2.654,0,0,1-1.279.293,2.754,2.754,0,0,1-2.159-.986m3.785-.746a2.659,2.659,0,0,0,0-3.331,1.939,1.939,0,0,0-2.878,0,2.621,2.621,0,0,0,0,3.3,1.9,1.9,0,0,0,1.439.64,1.724,1.724,0,0,0,1.439-.613",
  transform: "translate(-149.044 -194.277)",
  fill: "#757575"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M235.484,281.436a3.152,3.152,0,0,1-3.545.08,2.854,2.854,0,0,1-1.039-1.333l1.066-.453a1.976,1.976,0,0,0,.693.906,1.675,1.675,0,0,0,.986.32,1.831,1.831,0,0,0,.959-.24.677.677,0,0,0,.373-.586c0-.4-.32-.72-.933-.906l-1.093-.267c-1.253-.32-1.866-.906-1.866-1.812a1.7,1.7,0,0,1,.72-1.413,3.041,3.041,0,0,1,1.812-.533,3.108,3.108,0,0,1,1.546.4,2.24,2.24,0,0,1,.959,1.093l-1.066.453a1.506,1.506,0,0,0-.586-.64,1.8,1.8,0,0,0-.933-.24,1.585,1.585,0,0,0-.853.24.7.7,0,0,0-.373.586c0,.373.346.64,1.039.773l.959.24c1.279.32,1.892.959,1.892,1.919a1.662,1.662,0,0,1-.72,1.413",
  transform: "translate(-169.362 -201.831)",
  fill: "#757575"
}))));
/* harmony default export */ __webpack_exports__["default"] = (google);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/hubspot.js":
/*!***************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/hubspot.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var hubspot = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
  id: "b"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M100,100H0V0H100V100ZM40.665,75.539a6.446,6.446,0,1,0,6.447,6.447,6.376,6.376,0,0,0-.3-1.843L54.158,72.8A19.808,19.808,0,1,0,69.206,37.48h.015V28.455a6.959,6.959,0,0,0,4.013-6.273v-.211a6.971,6.971,0,0,0-6.952-6.953H66.07a6.97,6.97,0,0,0-6.952,6.953v.211a6.957,6.957,0,0,0,4.013,6.273V37.5a19.745,19.745,0,0,0-9.376,4.126L28.935,22.295a7.919,7.919,0,0,0-4.148-9.145,7.845,7.845,0,0,0-3.5-.817,7.919,7.919,0,1,0,3.938,14.786l24.4,19a19.775,19.775,0,0,0,.3,22.3l-7.426,7.427A6.362,6.362,0,0,0,40.665,75.539Zm25.522-8.321h0l-.023,0a10.164,10.164,0,0,1,.023-20.328H66.2a10.166,10.166,0,0,1-.012,20.333Z",
  fill: "#ff7a59"
})));
/* harmony default export */ __webpack_exports__["default"] = (hubspot);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/link.js":
/*!************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/link.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/mailchimp.js":
/*!*****************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/mailchimp.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var mailchimp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
  width: "36",
  height: "36",
  rx: "3",
  fill: "#FFE071"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M24.0534 17.2863C24.2392 17.2638 24.4176 17.2625 24.5813 17.2863C24.6764 17.0647 24.6923 16.6823 24.6071 16.2661C24.4808 15.6471 24.3091 15.2728 23.9546 15.331C23.6002 15.3892 23.5873 15.8374 23.7143 16.4564C23.7848 16.8043 23.9117 17.1023 24.0534 17.2863Z",
  fill: "black"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M21.0119 17.7757C21.2652 17.8889 21.4209 17.9647 21.4823 17.899C21.5215 17.8576 21.5099 17.7794 21.4491 17.6786C21.3241 17.4702 21.0665 17.2587 20.7937 17.1404C20.2357 16.895 19.5697 16.9764 19.0559 17.3532C18.886 17.4802 18.7254 17.6555 18.7487 17.7625C18.756 17.7969 18.7812 17.8232 18.8413 17.8314C18.9811 17.8476 19.4698 17.5954 20.0321 17.5603C20.4294 17.5353 20.7587 17.6624 21.0119 17.7757Z",
  fill: "black"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.5024 18.073C20.1725 18.1262 19.9904 18.237 19.8733 18.3409C19.7733 18.4298 19.712 18.5281 19.7126 18.5975C19.7126 18.6307 19.7267 18.6495 19.7378 18.6589C19.7531 18.6726 19.7709 18.6802 19.7923 18.6802C19.8671 18.6802 20.0339 18.6119 20.0339 18.6119C20.4932 18.4442 20.7961 18.4642 21.0966 18.4993C21.2627 18.518 21.3406 18.5287 21.3774 18.4705C21.3884 18.4536 21.4013 18.4179 21.3682 18.3628C21.2903 18.2339 20.9568 18.0179 20.5024 18.073Z",
  fill: "black"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M23.0263 19.1626C23.2501 19.2753 23.4972 19.2309 23.5775 19.0644C23.6578 18.8973 23.5413 18.6713 23.3169 18.5587C23.0925 18.446 22.846 18.4904 22.7657 18.6569C22.6859 18.824 22.8025 19.0506 23.0263 19.1626Z",
  fill: "black"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M24.4673 17.8777C24.2851 17.8746 24.1343 18.0786 24.13 18.3334C24.1257 18.5881 24.2698 18.7971 24.4519 18.8003C24.634 18.8034 24.7849 18.5994 24.7892 18.3446C24.7935 18.0899 24.6494 17.8809 24.4673 17.8777Z",
  fill: "black"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.2373 22.4735C12.1919 22.4153 12.1177 22.4335 12.0454 22.4504C11.9951 22.4623 11.9381 22.476 11.8755 22.4748C11.7419 22.4723 11.6284 22.4134 11.5646 22.3139C11.4819 22.1837 11.4868 21.9903 11.5781 21.7682C11.5904 21.7381 11.6051 21.7049 11.6211 21.6686C11.767 21.3344 12.0117 20.7743 11.7369 20.241C11.5303 19.8398 11.1937 19.5895 10.7884 19.5369C10.3996 19.4868 9.99919 19.6339 9.7441 19.9212C9.34124 20.3749 9.27808 20.9921 9.35595 21.2099C9.38477 21.29 9.42892 21.3119 9.46142 21.3163C9.5301 21.3257 9.63127 21.275 9.69505 21.1003C9.69934 21.0878 9.70547 21.0684 9.71344 21.0434C9.74165 20.9514 9.79438 20.7799 9.88084 20.6422C9.98508 20.4763 10.147 20.3618 10.3371 20.3205C10.5308 20.2779 10.7289 20.3161 10.8944 20.4269C11.1765 20.6153 11.285 20.9683 11.1648 21.305C11.1023 21.479 11.0011 21.812 11.0238 22.0855C11.0692 22.6394 11.4028 22.8616 11.7026 22.8854C11.9939 22.8966 12.1981 22.7295 12.2496 22.6075C12.279 22.5361 12.2539 22.4923 12.2373 22.4735Z",
  fill: "black"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M29.0624 21.4609C29.0513 21.4209 28.979 21.1511 28.8796 20.8263C28.7803 20.5015 28.6773 20.2724 28.6773 20.2724C29.0759 19.6634 29.0826 19.1189 29.0299 18.8109C28.9735 18.4285 28.8177 18.1031 28.5031 17.7663C28.1892 17.4296 27.5466 17.0847 26.6434 16.8262C26.5403 16.7968 26.1994 16.7011 26.1694 16.6917C26.1669 16.6717 26.1442 15.5513 26.124 15.0706C26.1093 14.7233 26.0798 14.18 25.9149 13.6455C25.7181 12.922 25.3759 12.2886 24.9479 11.8836C26.1283 10.635 26.8647 9.25926 26.8629 8.07947C26.8592 5.81 24.1293 5.1234 20.7642 6.54542C20.7605 6.54667 20.0565 6.85147 20.051 6.8546C20.048 6.85147 18.7621 5.56402 18.7431 5.5465C14.907 2.13103 2.91255 15.7391 6.7474 19.0444L7.58562 19.7692C7.36794 20.3437 7.28271 21.0028 7.35261 21.7107C7.44213 22.6201 7.90202 23.4926 8.64704 24.166C9.35404 24.8057 10.2842 25.2106 11.1868 25.21C12.6793 28.72 16.0886 30.8737 20.0872 30.9951C24.3758 31.1253 27.9758 29.0711 29.4842 25.3815C29.583 25.1224 30.0018 23.9557 30.0018 22.9255C30.0005 21.8903 29.4272 21.4609 29.0624 21.4609ZM11.5161 24.2236C11.3861 24.2461 11.2531 24.2555 11.1188 24.2518C9.82374 24.2161 8.42445 23.0263 8.28526 21.6143C8.13135 20.054 8.91255 18.8535 10.2953 18.5687C10.4608 18.5349 10.6601 18.5149 10.876 18.5268C11.651 18.57 12.7928 19.1777 13.0534 20.9002C13.2845 22.4261 12.9172 23.9801 11.5161 24.2236ZM10.0696 17.6361C9.20872 17.807 8.45021 18.3052 7.98603 18.9931C7.70887 18.7571 7.19195 18.3002 7.10059 18.1218C6.35986 16.686 7.90877 13.8946 8.99104 12.318C11.6657 8.42245 15.8544 5.4739 17.7939 6.00903C18.1091 6.10041 19.1533 7.33591 19.1533 7.33591C19.1533 7.33591 17.2151 8.43372 15.4172 9.96402C12.9951 11.8667 11.1654 14.6338 10.0696 17.6361ZM23.6657 23.6403C23.694 23.6284 23.7136 23.5952 23.7099 23.5627C23.7056 23.5226 23.6706 23.4932 23.6314 23.4976C23.6314 23.4976 21.6024 23.8043 19.6856 23.0876C19.8941 22.3948 20.4496 22.6451 21.2884 22.714C22.8012 22.806 24.1563 22.5807 25.1582 22.2871C26.0265 22.033 27.1664 21.5317 28.0525 20.8182C28.3511 21.4879 28.4565 22.2252 28.4565 22.2252C28.4565 22.2252 28.6877 22.1832 28.8809 22.304C29.0636 22.4186 29.1973 22.657 29.1059 23.2735C28.9195 24.4252 28.44 25.3596 27.6343 26.2196C27.1437 26.7585 26.5477 27.2273 25.8665 27.5684C25.5047 27.7624 25.119 27.9301 24.7118 28.0659C21.6735 29.0786 18.5628 27.9652 17.5603 25.5737C17.4799 25.394 17.4125 25.2056 17.3592 25.0091C16.9318 23.4331 17.2948 21.5423 18.4285 20.3525V20.3519C18.4984 20.2761 18.5696 20.1866 18.5696 20.0746C18.5696 19.9807 18.5113 19.8818 18.4604 19.8111C18.0637 19.224 16.6896 18.2232 16.9655 16.2861C17.1635 14.8948 18.3556 13.9146 19.4673 13.9728C19.5611 13.9778 19.6549 13.9835 19.7487 13.9891C20.2307 14.0179 20.6507 14.0811 21.0468 14.098C21.7103 14.1274 22.3069 14.0285 23.0139 13.4277C23.2525 13.2249 23.4438 13.049 23.7669 12.9933C23.8006 12.9877 23.8853 12.9564 24.0545 12.9645C24.2268 12.9739 24.3911 13.0221 24.5389 13.1222C25.1055 13.5072 25.1858 14.4391 25.2153 15.1213C25.2318 15.5106 25.2778 16.4526 25.2937 16.7224C25.3299 17.3407 25.4887 17.4277 25.8113 17.536C25.9922 17.5967 26.1608 17.6424 26.4085 17.7131C27.1584 17.9278 27.603 18.1462 27.8838 18.426C28.0512 18.6013 28.1285 18.7872 28.153 18.9643C28.2413 19.6227 27.6521 20.4364 26.0921 21.1755C24.3868 21.9836 22.3174 22.1882 20.888 22.0255C20.7783 22.013 20.3883 21.9679 20.3871 21.9679C19.2435 21.8108 18.591 23.3192 19.2778 24.3525C19.7199 25.0185 20.9248 25.4522 22.1303 25.4522C24.8939 25.4529 27.0186 24.248 27.8084 23.2078C27.8323 23.1765 27.8342 23.1734 27.8716 23.1158C27.9102 23.0557 27.8783 23.0232 27.8299 23.057C27.1842 23.5076 24.3169 25.2976 21.2492 24.7594C21.2492 24.7594 20.8764 24.6968 20.5361 24.5616C20.2656 24.4546 19.6997 24.1886 19.631 23.5958C22.107 24.3788 23.6657 23.6403 23.6657 23.6403ZM19.7444 23.1677C19.7444 23.1684 19.7444 23.1684 19.7444 23.1677C19.745 23.169 19.745 23.169 19.745 23.1696C19.745 23.169 19.7444 23.1684 19.7444 23.1677ZM15.0088 12.3023C15.9599 11.1807 17.1304 10.2056 18.1784 9.65858C18.2145 9.6398 18.2532 9.67986 18.2336 9.71616C18.1502 9.87013 17.9901 10.1993 17.9392 10.4497C17.9313 10.4885 17.9729 10.5179 18.0048 10.4954C18.6573 10.0416 19.7916 9.55531 20.7875 9.49272C20.8304 9.49022 20.8506 9.54592 20.8169 9.57283C20.6654 9.69113 20.4999 9.85511 20.3791 10.021C20.3582 10.0491 20.3779 10.0898 20.4122 10.0898C21.1112 10.0948 22.0966 10.3446 22.7386 10.712C22.7821 10.737 22.7509 10.8227 22.7024 10.8115C21.7305 10.5843 20.1406 10.4115 18.488 10.8227C17.0133 11.1901 15.8875 11.7572 15.0665 12.3668C15.0254 12.3981 14.9757 12.3418 15.0088 12.3023Z",
  fill: "black"
}));
/* harmony default export */ __webpack_exports__["default"] = (mailchimp);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/people.js":
/*!**************************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/people.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var people = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.5 9a2 2 0 11-4 0 2 2 0 014 0zm-4.25 8v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM8.5 11a2 2 0 100-4 2 2 0 000 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (people);

/***/ }),

/***/ "./client/marketing/components/product-icon/icons/library/tip.js":
/*!***********************************************************************!*\
  !*** ./client/marketing/components/product-icon/icons/library/tip.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "./node_modules/@wordpress/primitives/build-module/index.js");


/**
 * WordPress dependencies
 */

var tip = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 16.5H9V15h6v1.5zM15.0052 5.99481c-1.6597-1.65973-4.3507-1.65973-6.0104 0-1.65973 1.65973-1.65973 4.35069 0 6.01039.29289.2929.29289.7678 0 1.0607-.2929.2929-.76777.2929-1.06066 0-2.24552-2.2455-2.24552-5.88624 0-8.13175 2.24556-2.24551 5.88616-2.24551 8.13176 0 2.2455 2.24551 2.2455 5.88625 0 8.13175-.2929.2929-.7678.2929-1.0607 0-.2929-.2929-.2929-.7678 0-1.0607 1.6597-1.6597 1.6597-4.35066 0-6.01039zM14 19.5h-4V18h4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tip);

/***/ }),

/***/ "./client/marketing/components/product-icon/index.js":
/*!***********************************************************!*\
  !*** ./client/marketing/components/product-icon/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/components/product-icon/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons */ "./client/marketing/components/product-icon/icons/index.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var ProductIcon = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ProductIcon, _Component);

  var _super = _createSuper(ProductIcon);

  function ProductIcon() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProductIcon);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProductIcon, [{
    key: "render",
    value: function render() {
      var product = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"])(this.props.product);
      var iconComponent = _icons__WEBPACK_IMPORTED_MODULE_11__["blank"];

      if (product in _icons__WEBPACK_IMPORTED_MODULE_11__) {
        iconComponent = _icons__WEBPACK_IMPORTED_MODULE_11__[product];
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(this.props.className, 'woocommerce-admin-marketing-product-icon')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        icon: iconComponent
      }));
    }
  }]);

  return ProductIcon;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ProductIcon.propTypes = {
  /**
   * Product to retrieve icon for.
   */
  product: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional classNames.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ProductIcon);

/***/ }),

/***/ "./client/marketing/components/product-icon/style.scss":
/*!*************************************************************!*\
  !*** ./client/marketing/components/product-icon/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/components/product-icon/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/components/recommended-extensions/index.js":
/*!*********************************************************************!*\
  !*** ./client/marketing/components/recommended-extensions/index.js ***!
  \*********************************************************************/
/*! exports provided: RecommendedExtensions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedExtensions", function() { return RecommendedExtensions; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/components/recommended-extensions/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item */ "./client/marketing/components/recommended-extensions/item.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/constants */ "./client/marketing/data/constants.js");



/**
 * External dependencies
 */







/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */





var RecommendedExtensions = function RecommendedExtensions(_ref) {
  var extensions = _ref.extensions,
      isLoading = _ref.isLoading,
      title = _ref.title,
      description = _ref.description,
      category = _ref.category;

  if (extensions.length === 0 && !isLoading) {
    return null;
  }

  var categoryClass = category ? "woocommerce-marketing-recommended-extensions-card__category-".concat(category) : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    title: title,
    description: description,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('woocommerce-marketing-recommended-extensions-card', categoryClass)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isLoading ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('woocommerce-marketing-recommended-extensions-card__items', "woocommerce-marketing-recommended-extensions-card__items--count-".concat(extensions.length))
  }, extensions.map(function (extension) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_item__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: extension.product,
      category: category
    }, extension));
  }))));
};

RecommendedExtensions.propTypes = {
  /**
   * Array of recommended extensions.
   */
  extensions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object).isRequired,

  /**
   * Whether the card is loading.
   */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,

  /**
   * Cart title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Card description.
   */
  description: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Category of extensions to display.
   */
  category: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
RecommendedExtensions.defaultProps = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recommended extensions', 'woocommerce-admin'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin')
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, props) {
  var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_11__["STORE_KEY"]),
      getRecommendedPlugins = _select.getRecommendedPlugins,
      isResolving = _select.isResolving;

  return {
    extensions: getRecommendedPlugins(props.category),
    isLoading: isResolving('getRecommendedPlugins', [props.category])
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(RecommendedExtensions));

/***/ }),

/***/ "./client/marketing/components/recommended-extensions/item.js":
/*!********************************************************************!*\
  !*** ./client/marketing/components/recommended-extensions/item.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/components/recommended-extensions/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ */ "./client/marketing/components/index.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var lib_in_app_purchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/in-app-purchase */ "./client/lib/in-app-purchase.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






var RecommendedExtensionsItem = function RecommendedExtensionsItem(_ref) {
  var title = _ref.title,
      description = _ref.description,
      url = _ref.url,
      product = _ref.product,
      category = _ref.category;

  var onProductClick = function onProductClick() {
    Object(lib_tracks__WEBPACK_IMPORTED_MODULE_4__["recordEvent"])('marketing_recommended_extension', {
      name: title
    });
  };

  var classNameBase = 'woocommerce-marketing-recommended-extensions-item';
  var connectURL = Object(lib_in_app_purchase__WEBPACK_IMPORTED_MODULE_5__["getInAppPurchaseUrl"])(url); // Temporary fix to account for different styles between marketing & coupons

  if (category === 'coupons' && product === 'automatewoo') {
    product = "automatewoo-alt";
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: connectURL,
    className: classNameBase,
    onClick: onProductClick
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components___WEBPACK_IMPORTED_MODULE_3__["ProductIcon"], {
    product: product
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(classNameBase, "__text")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, description)));
};

RecommendedExtensionsItem.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  category: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RecommendedExtensionsItem);

/***/ }),

/***/ "./client/marketing/components/recommended-extensions/style.scss":
/*!***********************************************************************!*\
  !*** ./client/marketing/components/recommended-extensions/style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/components/recommended-extensions/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/components/slider/index.js":
/*!*****************************************************!*\
  !*** ./client/marketing/components/slider/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/components/slider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);



/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var Slider = function Slider(_ref) {
  var children = _ref.children,
      animationKey = _ref.animationKey,
      animate = _ref.animate;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      height = _useState2[0],
      updateHeight = _useState2[1];

  var container = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var containerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('woocommerce-marketing-slider', animate && "animate-".concat(animate));
  var style = {};

  if (height) {
    style.height = height;
  } // timeout should be slightly longer than the CSS animation


  var timeout = 320;

  var updateSliderHeight = function updateSliderHeight() {
    var slide = container.current.querySelector('.woocommerce-marketing-slider__slide');
    updateHeight(slide.clientHeight);
  };

  var debouncedUpdateSliderHeight = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])(updateSliderHeight, 50);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Update the slider height on Resize
    window.addEventListener('resize', debouncedUpdateSliderHeight);
    return function () {
      window.removeEventListener('resize', debouncedUpdateSliderHeight);
    };
  }, []);
  /**
   * Fix slider height before a slide enters because slides are absolutely position
   */

  var onEnter = function onEnter() {
    var newSlide = container.current.querySelector('.slide-enter');
    updateHeight(newSlide.clientHeight);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: containerClasses,
    ref: container,
    style: style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    timeout: timeout,
    classNames: "slide",
    key: animationKey,
    onEnter: onEnter
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "woocommerce-marketing-slider__slide"
  }, children))));
};

Slider.propTypes = {
  /**
   * A unique identifier for each slideable page.
   */
  animationKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,

  /**
   * null, 'left', 'right', to designate which direction to slide on a change.
   */
  animate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([null, 'left', 'right'])
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./client/marketing/components/slider/style.scss":
/*!*******************************************************!*\
  !*** ./client/marketing/components/slider/style.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/components/slider/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/data/actions.js":
/*!******************************************!*\
  !*** ./client/marketing/data/actions.js ***!
  \******************************************/
/*! exports provided: receiveInstalledPlugins, receiveActivatingPlugin, removeActivatingPlugin, receiveRecommendedPlugins, receiveBlogPosts, handleFetchError, activateInstalledPlugin, loadInstalledPluginsAfterActivation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveInstalledPlugins", function() { return receiveInstalledPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveActivatingPlugin", function() { return receiveActivatingPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActivatingPlugin", function() { return removeActivatingPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveRecommendedPlugins", function() { return receiveRecommendedPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveBlogPosts", function() { return receiveBlogPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleFetchError", function() { return handleFetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateInstalledPlugin", function() { return activateInstalledPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInstalledPluginsAfterActivation", function() { return loadInstalledPluginsAfterActivation; });
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./client/marketing/data/constants.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(activateInstalledPlugin),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(loadInstalledPluginsAfterActivation);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function receiveInstalledPlugins(plugins) {
  return {
    type: 'SET_INSTALLED_PLUGINS',
    plugins: plugins
  };
}
function receiveActivatingPlugin(pluginSlug) {
  return {
    type: 'SET_ACTIVATING_PLUGIN',
    pluginSlug: pluginSlug
  };
}
function removeActivatingPlugin(pluginSlug) {
  return {
    type: 'REMOVE_ACTIVATING_PLUGIN',
    pluginSlug: pluginSlug
  };
}
function receiveRecommendedPlugins(plugins, category) {
  return {
    type: 'SET_RECOMMENDED_PLUGINS',
    data: {
      plugins: plugins,
      category: category
    }
  };
}
function receiveBlogPosts(posts, category) {
  return {
    type: 'SET_BLOG_POSTS',
    data: {
      posts: posts,
      category: category
    }
  };
}
function handleFetchError(error, message) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  createNotice('error', message); // eslint-disable-next-line no-console

  console.log(error);
}
function activateInstalledPlugin(pluginSlug) {
  var _dispatch2, createNotice, response;

  return regeneratorRuntime.wrap(function activateInstalledPlugin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _dispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])('core/notices'), createNotice = _dispatch2.createNotice;
          _context.next = 3;
          return receiveActivatingPlugin(pluginSlug);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__["apiFetch"])({
            path: _constants__WEBPACK_IMPORTED_MODULE_2__["API_NAMESPACE"] + '/overview/activate-plugin',
            method: 'POST',
            data: {
              plugin: pluginSlug
            }
          });

        case 6:
          response = _context.sent;

          if (!response) {
            _context.next = 14;
            break;
          }

          _context.next = 10;
          return createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The extension has been successfully activated.', 'woocommerce-admin'));

        case 10:
          _context.next = 12;
          return loadInstalledPluginsAfterActivation(pluginSlug);

        case 12:
          _context.next = 15;
          break;

        case 14:
          throw new Error();

        case 15:
          _context.next = 23;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](3);
          _context.next = 21;
          return handleFetchError(_context.t0, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('There was an error trying to activate the extension.', 'woocommerce-admin'));

        case 21:
          _context.next = 23;
          return removeActivatingPlugin(pluginSlug);

        case 23:
          return _context.abrupt("return", true);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 17]]);
}
function loadInstalledPluginsAfterActivation(activatedPluginSlug) {
  var response;
  return regeneratorRuntime.wrap(function loadInstalledPluginsAfterActivation$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__["apiFetch"])({
            path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["API_NAMESPACE"], "/overview/installed-plugins")
          });

        case 3:
          response = _context2.sent;

          if (!response) {
            _context2.next = 11;
            break;
          }

          _context2.next = 7;
          return receiveInstalledPlugins(response);

        case 7:
          _context2.next = 9;
          return removeActivatingPlugin(activatedPluginSlug);

        case 9:
          _context2.next = 12;
          break;

        case 11:
          throw new Error();

        case 12:
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 18;
          return handleFetchError(_context2.t0, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('There was an error loading installed extensions.', 'woocommerce-admin'));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 14]]);
}

/***/ }),

/***/ "./client/marketing/data/constants.js":
/*!********************************************!*\
  !*** ./client/marketing/data/constants.js ***!
  \********************************************/
/*! exports provided: STORE_KEY, API_NAMESPACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NAMESPACE", function() { return API_NAMESPACE; });
var STORE_KEY = 'wc/marketing';
var API_NAMESPACE = '/wc-admin/marketing';

/***/ }),

/***/ "./client/marketing/data/index.js":
/*!****************************************!*\
  !*** ./client/marketing/data/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./client/marketing/data/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./client/marketing/data/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectors */ "./client/marketing/data/selectors.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers */ "./client/marketing/data/resolvers.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */






var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_4__["getSetting"])('marketing', {}),
    installedExtensions = _getSetting.installedExtensions;

var DEFAULT_STATE = {
  installedPlugins: installedExtensions,
  activatingPlugins: [],
  recommendedPlugins: {},
  blogPosts: {}
};
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_6__["STORE_KEY"], {
  actions: _actions__WEBPACK_IMPORTED_MODULE_7__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_8__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_9__,
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["controls"],
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_INSTALLED_PLUGINS':
        return _objectSpread(_objectSpread({}, state), {}, {
          installedPlugins: action.plugins
        });

      case 'SET_ACTIVATING_PLUGIN':
        return _objectSpread(_objectSpread({}, state), {}, {
          activatingPlugins: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.activatingPlugins), [action.pluginSlug])
        });

      case 'REMOVE_ACTIVATING_PLUGIN':
        return _objectSpread(_objectSpread({}, state), {}, {
          activatingPlugins: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["without"])(state.activatingPlugins, action.pluginSlug)
        });

      case 'SET_RECOMMENDED_PLUGINS':
        return _objectSpread(_objectSpread({}, state), {}, {
          recommendedPlugins: _objectSpread(_objectSpread({}, state.recommendedPlugins), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, action.data.category, action.data.plugins))
        });

      case 'SET_BLOG_POSTS':
        return _objectSpread(_objectSpread({}, state), {}, {
          blogPosts: _objectSpread(_objectSpread({}, state.blogPosts), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, action.data.category, action.data.posts))
        });
    }

    return state;
  }
});

/***/ }),

/***/ "./client/marketing/data/resolvers.js":
/*!********************************************!*\
  !*** ./client/marketing/data/resolvers.js ***!
  \********************************************/
/*! exports provided: getRecommendedPlugins, getBlogPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendedPlugins", function() { return getRecommendedPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogPosts", function() { return getBlogPosts; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./client/marketing/data/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./client/marketing/data/constants.js");
var _marked = /*#__PURE__*/regeneratorRuntime.mark(getRecommendedPlugins),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getBlogPosts);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function getRecommendedPlugins(category) {
  var categoryParam, response;
  return regeneratorRuntime.wrap(function getRecommendedPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return category ? "&category=".concat(category) : '';

        case 3:
          categoryParam = _context.sent;
          _context.next = 6;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/recommended?per_page=6").concat(categoryParam)
          });

        case 6:
          response = _context.sent;

          if (!response) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_2__["receiveRecommendedPlugins"])(response, category);

        case 10:
          _context.next = 13;
          break;

        case 12:
          throw new Error();

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          _context.next = 19;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_2__["handleFetchError"])(_context.t0, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('There was an error loading recommended extensions.', 'woocommerce-admin'));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 15]]);
}
function getBlogPosts(category) {
  var categoryParam, response;
  return regeneratorRuntime.wrap(function getBlogPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return category ? "?category=".concat(category) : '';

        case 3:
          categoryParam = _context2.sent;
          _context2.next = 6;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/knowledge-base").concat(categoryParam),
            method: 'GET'
          });

        case 6:
          response = _context2.sent;

          if (!response) {
            _context2.next = 12;
            break;
          }

          _context2.next = 10;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_2__["receiveBlogPosts"])(response, category);

        case 10:
          _context2.next = 13;
          break;

        case 12:
          throw new Error();

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 19;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_2__["handleFetchError"])(_context2.t0, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('There was an error loading knowledge base posts.', 'woocommerce-admin'));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 15]]);
}

/***/ }),

/***/ "./client/marketing/data/selectors.js":
/*!********************************************!*\
  !*** ./client/marketing/data/selectors.js ***!
  \********************************************/
/*! exports provided: getInstalledPlugins, getActivatingPlugins, getRecommendedPlugins, getBlogPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstalledPlugins", function() { return getInstalledPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivatingPlugins", function() { return getActivatingPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendedPlugins", function() { return getRecommendedPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogPosts", function() { return getBlogPosts; });
function getInstalledPlugins(state) {
  return state.installedPlugins;
}
function getActivatingPlugins(state) {
  return state.activatingPlugins;
}
function getRecommendedPlugins(state, category) {
  return state.recommendedPlugins[category] || [];
}
function getBlogPosts(state, category) {
  return state.blogPosts[category] || [];
}

/***/ }),

/***/ "./client/marketing/overview/index.js":
/*!********************************************!*\
  !*** ./client/marketing/overview/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/overview/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _installed_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installed-extensions */ "./client/marketing/overview/installed-extensions/index.js");
/* harmony import */ var _components_recommended_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/recommended-extensions */ "./client/marketing/components/recommended-extensions/index.js");
/* harmony import */ var _components_knowledge_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/knowledge-base */ "./client/marketing/components/knowledge-base/index.js");
/* harmony import */ var _welcome_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome-card */ "./client/marketing/overview/welcome-card/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data */ "./client/marketing/data/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WooCommerce dependencies
 */

/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */








var MarketingOverview = function MarketingOverview() {
  var allowMarketplaceSuggestions = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["getSetting"])('allowMarketplaceSuggestions', false);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "woocommerce-marketing-overview"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_welcome_card__WEBPACK_IMPORTED_MODULE_8__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_installed_extensions__WEBPACK_IMPORTED_MODULE_5__["default"], null), allowMarketplaceSuggestions && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_recommended_extensions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    category: "marketing"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_knowledge_base__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: "marketing"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["withOptionsHydration"])(_objectSpread({}, window.wcSettings.preloadOptions || {}))(MarketingOverview));

/***/ }),

/***/ "./client/marketing/overview/installed-extensions/index.js":
/*!*****************************************************************!*\
  !*** ./client/marketing/overview/installed-extensions/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/overview/installed-extensions/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./row */ "./client/marketing/overview/installed-extensions/row.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/constants */ "./client/marketing/data/constants.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */





var InstalledExtensions = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InstalledExtensions, _Component);

  var _super = _createSuper(InstalledExtensions);

  function InstalledExtensions() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InstalledExtensions);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InstalledExtensions, [{
    key: "activatePlugin",
    value: function activatePlugin(pluginSlug) {
      var activateInstalledPlugin = this.props.activateInstalledPlugin;
      activateInstalledPlugin(pluginSlug);
    }
  }, {
    key: "isActivatingPlugin",
    value: function isActivatingPlugin(pluginSlug) {
      var activatingPlugins = this.props.activatingPlugins;
      return activatingPlugins.includes(pluginSlug);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var plugins = this.props.plugins;

      if (plugins.length === 0) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Installed marketing extensions', 'woocommerce-admin'),
        className: "woocommerce-marketing-installed-extensions-card"
      }, plugins.map(function (plugin) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_row__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: plugin.slug
        }, plugin, {
          activatePlugin: function activatePlugin() {
            return _this.activatePlugin(plugin.slug);
          },
          isLoading: _this.isActivatingPlugin(plugin.slug)
        }));
      }));
    }
  }]);

  return InstalledExtensions;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

InstalledExtensions.propTypes = {
  /**
   * Array of installed plugin objects.
   */
  plugins: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object).isRequired,

  /**
   * Array of plugins that are currently activating.
   */
  activatingPlugins: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_14__["STORE_KEY"]),
      getInstalledPlugins = _select.getInstalledPlugins,
      getActivatingPlugins = _select.getActivatingPlugins;

  return {
    plugins: getInstalledPlugins(),
    activatingPlugins: getActivatingPlugins()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(_data_constants__WEBPACK_IMPORTED_MODULE_14__["STORE_KEY"]),
      activateInstalledPlugin = _dispatch.activateInstalledPlugin;

  return {
    activateInstalledPlugin: activateInstalledPlugin
  };
}))(InstalledExtensions));

/***/ }),

/***/ "./client/marketing/overview/installed-extensions/row.js":
/*!***************************************************************!*\
  !*** ./client/marketing/overview/installed-extensions/row.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "./client/marketing/components/index.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */




var InstalledExtensionRow = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InstalledExtensionRow, _Component);

  var _super = _createSuper(InstalledExtensionRow);

  function InstalledExtensionRow(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstalledExtensionRow);

    _this = _super.call(this, props);
    _this.onActivateClick = _this.onActivateClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.onFinishSetupClick = _this.onFinishSetupClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstalledExtensionRow, [{
    key: "getLinks",
    value: function getLinks() {
      var _this2 = this;

      var _this$props = this.props,
          docsUrl = _this$props.docsUrl,
          settingsUrl = _this$props.settingsUrl,
          supportUrl = _this$props.supportUrl,
          dashboardUrl = _this$props.dashboardUrl;
      var links = [];

      if (docsUrl) {
        links.push({
          key: 'docs',
          href: docsUrl,
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Docs', 'woocommerce-admin')
        });
      }

      if (supportUrl) {
        links.push({
          key: 'support',
          href: supportUrl,
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Get support', 'woocommerce-admin')
        });
      }

      if (settingsUrl) {
        links.push({
          key: 'settings',
          href: settingsUrl,
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Settings', 'woocommerce-admin')
        });
      }

      if (dashboardUrl) {
        links.push({
          key: 'dashboard',
          href: dashboardUrl,
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Dashboard', 'woocommerce-admin')
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("ul", {
        className: "woocommerce-marketing-installed-extensions-card__item-links"
      }, links.map(function (link) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("li", {
          key: link.key
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          href: link.href,
          type: "external",
          onClick: _this2.onLinkClick.bind(_this2, link)
        }, link.text));
      }));
    }
  }, {
    key: "onLinkClick",
    value: function onLinkClick(link) {
      var name = this.props.name;
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_11__["recordEvent"])('marketing_installed_options', {
        name: name,
        link: link.key
      });
    }
  }, {
    key: "onActivateClick",
    value: function onActivateClick() {
      var _this$props2 = this.props,
          activatePlugin = _this$props2.activatePlugin,
          name = _this$props2.name;
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_11__["recordEvent"])('marketing_installed_activate', {
        name: name
      });
      activatePlugin();
    }
  }, {
    key: "onFinishSetupClick",
    value: function onFinishSetupClick() {
      var name = this.props.name;
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_11__["recordEvent"])('marketing_installed_finish_setup', {
        name: name
      });
    }
  }, {
    key: "getActivateButton",
    value: function getActivateButton() {
      var isLoading = this.props.isLoading;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        isSecondary: true,
        onClick: this.onActivateClick,
        disabled: isLoading
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Activate', 'woocommerce-admin'));
    }
  }, {
    key: "getFinishSetupButton",
    value: function getFinishSetupButton() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        isSecondary: true,
        href: this.props.settingsUrl,
        onClick: this.onFinishSetupClick
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Finish setup', 'woocommerce-admin'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          name = _this$props3.name,
          description = _this$props3.description,
          status = _this$props3.status,
          slug = _this$props3.slug;
      var actions = null;

      switch (status) {
        case 'installed':
          actions = this.getActivateButton();
          break;

        case 'activated':
          actions = this.getFinishSetupButton();
          break;

        case 'configured':
          actions = this.getLinks();
          break;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-marketing-installed-extensions-card__item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_10__["ProductIcon"], {
        product: slug
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-marketing-installed-extensions-card__item-text-and-actions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-marketing-installed-extensions-card__item-text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h4", null, name), status === 'configured' || Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        className: "woocommerce-marketing-installed-extensions-card__item-description"
      }, description)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-marketing-installed-extensions-card__item-actions"
      }, actions)));
    }
  }]);

  return InstalledExtensionRow;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

InstalledExtensionRow.defaultProps = {
  isLoading: false
};
InstalledExtensionRow.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  settingsUrl: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  docsUrl: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  supportUrl: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  dashboardUrl: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  activatePlugin: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InstalledExtensionRow);

/***/ }),

/***/ "./client/marketing/overview/installed-extensions/style.scss":
/*!*******************************************************************!*\
  !*** ./client/marketing/overview/installed-extensions/style.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/overview/installed-extensions/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/overview/style.scss":
/*!**********************************************!*\
  !*** ./client/marketing/overview/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/overview/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/marketing/overview/welcome-card/images/welcome.svg":
/*!*******************************************************************!*\
  !*** ./client/marketing/overview/welcome-card/images/welcome.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzEiIGhlaWdodD0iMTY1IiBmaWxsPSJub25lIj4KICA8ZGVmcy8+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CiAgICA8cGF0aCBmaWxsPSIjRjJGMkYyIiBkPSJNMjMxIDk5LjI2M2MwIDI4LjgyOS0xNy4yMSAzOC44OTUtMzguNDM4IDM4Ljg5NS0yMS4yMjkgMC0zOC40MzktMTAuMDY2LTM4LjQzOS0zOC44OTUgMC0yOC44MyAzOC40MzktNjUuNTA1IDM4LjQzOS02NS41MDVTMjMxIDcwLjQzMyAyMzEgOTkuMjYzeiIvPgogICAgPHBhdGggZmlsbD0iIzNGM0Q1NiIgZD0iTTE5MS4xNjEgMTMzLjc0OGwuMzk0LTI0LjEyNyAxNi4zODMtMjkuODUtMTYuMzIxIDI2LjA2NS4xNzctMTAuODQ5IDExLjI5MS0yMS41OTYtMTEuMjQ1IDE4LjcyNS4zMTktMTkuNTEyIDEyLjA5MS0xNy4xOTMtMTIuMDQxIDE0LjEyNS4xOTgtMzUuNzc4LTEuMjQ5IDQ3LjM2My4xMDItMS45NTMtMTIuMjkzLTE4Ljc0IDEyLjA5NiAyMi40OS0xLjE0NSAyMS43OTItLjAzNC0uNTc4LTE0LjE3Mi0xOS43MiAxNC4xMjkgMjEuNzYzLS4xNDMgMi43MjUtLjAyNi4wNDEuMDEyLjIyNC0yLjkwNiA1NS4yODdoMy44ODJsLjQ2Ni0yOC41NTcgMTQuMDk0LTIxLjcxLTE0LjA1OSAxOS41NjN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRjJGMkYyIiBkPSJNMjAuNzkgMTQ3LjAyNWMwIDcuNzk2LTQuNjU0IDEwLjUxOC0xMC4zOTUgMTAuNTE4UzAgMTU0LjgyMSAwIDE0Ny4wMjVjMC03Ljc5NiAxMC4zOTUtMTcuNzE0IDEwLjM5NS0xNy43MTRzMTAuMzk0IDkuOTE4IDEwLjM5NCAxNy43MTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjM0YzRDU2IiBkPSJNMTAuMDE2IDE1Ni4zNTFsLjEwNi02LjUyNSA0LjQzLTguMDcyLTQuNDEzIDcuMDQ4LjA0OC0yLjkzMyAzLjA1My01Ljg0LTMuMDQgNS4wNjMuMDg1LTUuMjc2IDMuMjctNC42NDktMy4yNTYgMy44MTkuMDU0LTkuNjc1LS4zMzggMTIuODA4LjAyNy0uNTI4LTMuMzI0LTUuMDY4IDMuMjcxIDYuMDgyLS4zMSA1Ljg5My0uMDA5LS4xNTYtMy44MzItNS4zMzMgMy44MiA1Ljg4NS0uMDM4LjczNy0uMDA3LjAxMS4wMDMuMDYxLS43ODYgMTQuOTUxaDEuMDVsLjEyNi03LjcyMyAzLjgxMi01Ljg3MS0zLjgwMiA1LjI5MXoiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzNGM0Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xIDE2NWgyMzAiLz4KICAgIDxwYXRoIGZpbGw9IiMwNzdDQjIiIGQ9Ik0yMTAuODQ1IDE1Ny42NjZjMCA1LjI3My0zLjE0OCA3LjExNS03LjAzMSA3LjExNWExMi4xNTMgMTIuMTUzIDAgMDEtLjgwNC0uMDI4Yy0zLjUwNC0uMjQ3LTYuMjI3LTIuMTgzLTYuMjI3LTcuMDg3IDAtNS4wNzUgNi41MTMtMTEuNDc5IDcuMDAyLTExLjk1M2wuMDAxLS4wMDEuMDI4LS4wMjdzNy4wMzEgNi43MDggNy4wMzEgMTEuOTgxeiIvPgogICAgPHBhdGggZmlsbD0iIzNGM0Q1NiIgZD0iTTIwMy41NTcgMTYzLjk3NGwyLjU3Mi0zLjU3OS0yLjU3OCAzLjk3Mi0uMDA3LjQxYy0uMTgtLjAwMy0uMzU4LS4wMTItLjUzNC0uMDI0bC4yNzctNS4yNzYtLjAwMi0uMDQxLjAwNS0uMDA3LjAyNi0uNDk4LTIuNTg1LTMuOTgyIDIuNTkzIDMuNjA4LjAwNi4xMDYuMjA5LTMuOTg3LTIuMjEyLTQuMTEzIDIuMjM5IDMuNDE0LjIxOC04LjI2NC4wMDEtLjAyOHYuMDI3bC0uMDM2IDYuNTE3IDIuMjAyLTIuNTg0LTIuMjExIDMuMTQ1LS4wNTggMy41NjkgMi4wNTYtMy40MjUtMi4wNjUgMy45NS0uMDMzIDEuOTg0IDIuOTg2LTQuNzY3LTIuOTk3IDUuNDYtLjA3MiA0LjQxM3pNMTM1Ljg4MSAzNy4zNGgtMS4zNWEuNTQuNTQgMCAwMC0uNTQuNTM4djE4Ljg3OGEuNTQuNTQgMCAwMC41NC41MzhoMS4zNWMuMjk5IDAgLjU0LS4yNDEuNTQtLjUzOFYzNy44NzhhLjUzOC41MzggMCAwMC0uNTQtLjUzOHpNNTQuMjEyIDIxLjcwOGgtLjY1NmEuMzU0LjM1NCAwIDAwLS4zNTQuMzUzdjUuODYzYzAgLjE5NS4xNTkuMzUzLjM1NC4zNTNoLjY1NmEuMzU0LjM1NCAwIDAwLjM1NC0uMzUzdi01Ljg2M2EuMzU0LjM1NCAwIDAwLS4zNTQtLjM1M3pNNTQuMjkxIDMzLjczNWgtLjczOGMtLjIyIDAtLjQuMTc4LS40LjM5OFY0NC43N2MwIC4yMi4xOC4zOTguNC4zOThoLjczOGMuMjIgMCAuNC0uMTc4LjQtLjM5OFYzNC4xMzJhLjM5OS4zOTkgMCAwMC0uNC0uMzk3ek01NC4yNiA0OS4xN2gtLjcwMmEuMzguMzggMCAwMC0uMzguMzc4djEwLjc3NWMwIC4yMS4xNy4zNzkuMzguMzc5aC43MDNjLjIxIDAgLjM4LS4xNy4zOC0uMzc5VjQ5LjU0OGEuMzguMzggMCAwMC0uMzgtLjM3OXoiLz4KICAgIDxwYXRoIGZpbGw9IiMzRjNENTYiIGQ9Ik0xMjYuODkyIDBINjIuMzg3Yy00LjY0NSAwLTguNDExIDMuNzUtOC40MTEgOC4zNzdWMTU2LjIzYzAgNC42MjcgMy43NjYgOC4zNzcgOC40MTEgOC4zNzdoNjQuNTA1YzQuNjQ2IDAgOC40MTItMy43NSA4LjQxMi04LjM3N1Y4LjM3N2MwLTQuNjI2LTMuNzY2LTguMzc3LTguNDEyLTguMzc3eiIvPgogICAgPHBhdGggZmlsbD0iI0U2RThFQyIgZD0iTTk3LjU1MiA0LjkxNkg4Ny4zOTNjLS4zMyAwLS42LjI2Ny0uNi41OTZ2MS4xMDRjMCAuMzMuMjcuNTk2LjYuNTk2aDEwLjE1OWMuMzMgMCAuNTk5LS4yNjcuNTk5LS41OTZWNS41MTJhLjU5OC41OTggMCAwMC0uNTk5LS41OTZ6TTEwMS4xNzYgNy4zNjdjLjcyMyAwIDEuMzA4LS41ODQgMS4zMDgtMS4zMDMgMC0uNzItLjU4NS0xLjMwMy0xLjMwOC0xLjMwMy0uNzIyIDAtMS4zMDguNTg0LTEuMzA4IDEuMzAzIDAgLjcyLjU4NiAxLjMwMyAxLjMwOCAxLjMwM3oiLz4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMzAuMjgxIDEwLjcydjE0My4xNjhhNi40MTkgNi40MTkgMCAwMS0xLjg5MiA0LjU0OCA2LjQ4IDYuNDggMCAwMS00LjU2NyAxLjg4M0g2NS40NTdhNi40NzcgNi40NzcgMCAwMS00LjU2Ni0xLjg4MyA2LjQyIDYuNDIgMCAwMS0xLjg5My00LjU0OFYxMC43MjFhNi40MSA2LjQxIDAgMDExLjg5Mi00LjU1IDYuNDYyIDYuNDYyIDAgMDE0LjU2Ny0xLjg4M2g4LjczNHYxLjExN2MwIDEuNDA1LjU2MSAyLjc1MiAxLjU1OCAzLjc0NWE1LjMzMiA1LjMzMiAwIDAwMy43NjEgMS41NTJoMjkuNjgyYzEuNDEgMCAyLjc2My0uNTU4IDMuNzYxLTEuNTUxYTUuMjg4IDUuMjg4IDAgMDAxLjU1OC0zLjc0NlY0LjI4OGg5LjMxMWE2LjQ4NCA2LjQ4NCAwIDAxNC41NjcgMS44ODQgNi40MjEgNi40MjEgMCAwMTEuODkyIDQuNTQ5eiIvPgogICAgPHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTEzMC4zMjEgMzcuNDc3SDU4LjkxNXY4MS42NzNoNzEuNDA2VjM3LjQ3N3oiLz4KICAgIDxwYXRoIGZpbGw9IiNGRjY1ODQiIGQ9Ik02NC4xIDEzMC40NTJsLS4zNzctLjMzOGMtMS4zMzUtMS4yMjEtMi4yMTYtMi4wMTMtMi4yMTYtM2ExLjM5MyAxLjM5MyAwIDAxLjQxLTEuMDE0IDEuNDEzIDEuNDEzIDAgMDExLjAxNi0uNDE0IDEuNTM4IDEuNTM4IDAgMDExLjE2Ni41NDUgMS41NCAxLjU0IDAgMDExLjE2Ny0uNTQ1IDEuNDAxIDEuNDAxIDAgMDExLjAxNi40MTQgMS4zOTQgMS4zOTQgMCAwMS40MSAxLjAxNGMwIC45ODctLjg4MiAxLjc3OS0yLjIxNyAzbC0uMzc2LjMzOHoiLz4KICAgIDxwYXRoIGZpbGw9IiNGMkYyRjIiIGQ9Ik03Ny43MjggMTI5LjIwM2wuNzI3LjIwN2EyLjQzOCAyLjQzOCAwIDAxMS42NjUtMS41NTggMi40NjMgMi40NjMgMCAwMTIuMjMyLjQ4NmwtMS4xMSAxLjA3MmgyLjc3di0yLjY4MmwtMS4xMTYgMS4wNjVhMy4yMjYgMy4yMjYgMCAwMC0yLjk2NC0uNjc5IDMuMjAyIDMuMjAyIDAgMDAtMi4yMDQgMi4wODl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDc3Q0IyIiBkPSJNNjMuNjI4IDMxLjM3NWMxLjgyMyAwIDMuMy0xLjQ3IDMuMy0zLjI4NWEzLjI5MiAzLjI5MiAwIDAwLTMuMy0zLjI4NiAzLjI5MiAzLjI5MiAwIDAwLTMuMjk5IDMuMjg2IDMuMjkyIDMuMjkyIDAgMDAzLjMgMy4yODV6TTEwMC4xNTYgMjYuMjEySDY5LjUxOXYzLjc1NWgzMC42Mzd2LTMuNzU1eiIvPgogICAgPHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTkyLjE0NCAxMzYuMDQ4SDYxLjUwOHYzLjc1NWgzMC42MzZ2LTMuNzU1ek0xMjYuMzE1IDE0NC4yMzRINjEuNTA4djMuNzU1aDY0LjgwN3YtMy43NTV6TTc0LjcwNSAxMzAuMjE0bC0uODEyLTEuNDE1YTIuMDggMi4wOCAwIDAwLS44NjYtMi41OTcgMi4xIDIuMSAwIDAwLTIuNzA0LjQ4OSAyLjA4NSAyLjA4NSAwIDAwMS40MjMgMy4zODIgMi4xIDIuMSAwIDAwMS40Mi0uMzdsMS41MzkuNTExeiIvPgogICAgPHBhdGggZmlsbD0iIzJGMkU0MSIgZD0iTTg4LjU3NiA1Ni42MzJhOS40NDkgOS40NDkgMCAwMC0zLjM5IDEuNDIgOS40MDggOS40MDggMCAwMC0yLjU4NyAyLjYwNSA5LjM2NSA5LjM2NSAwIDAwLTEuMzY4IDcuMDU0bDEuOTQ1IDkuNDY4IDIuMTc4LS40NDQuMTU0LTEuMDAzLjQ1Ni44NzkgMTMuMjQzLTIuNy4xNTQtMS4wMDMuNDU2Ljg4IDEuODI5LS4zNzMtMS45NDUtOS40NjhhOS4zNjYgOS4zNjYgMCAwMC0xLjQyNy0zLjM3NiA5LjQwOCA5LjQwOCAwIDAwLTIuNjE1LTIuNTc2IDkuNDUgOS40NSAwIDAwLTcuMDgzLTEuMzYzeiIvPgogICAgPHBhdGggZmlsbD0iIzlGNjE2QSIgZD0iTTEwNC45ODcgODUuNjc4bDExLjMxMiA2LjgwNi0xLjQxNCAzLjI4Ni0xMC42MDUtNC45MjguNzA3LTUuMTYzeiIvPgogICAgPHBhdGggZmlsbD0iIzA3N0NCMiIgZD0iTTkwLjYxMiA5My40MjNzLTIyLjg2IDAtMjYuNjMgNS44NjhjLTMuNzcgNS44NjctLjcwNyAxNC4wODEgMTEuMDc2IDE1Ljk1OSAxMS43ODMgMS44NzcgNDcuNjA0IDIuODE2IDUwLjQzMi00LjIyNSAyLjgyOC03LjA0LjcwNy0xMS4wMy43MDctMTEuMDNzLTEyLjI1NS04LjQ1LTM1LjU4NS02LjU3MnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwNzdDQjIiIGQ9Ik0xMTAuODc4IDk5LjA1NmwxMi40OTEgNC42OTRzNS4xODQtMy43NTUgMi41OTItNy45OGMtMi41OTItNC4yMjQtMTQuMzc2LTI4LjYzMi0xNC4zNzYtMjguNjMycy0zLjI5OS00LjY5NC45NDMtNy4yNzZjNC4yNDItMi41ODEgNS44OTIgMS42NDMgNS44OTIgMS42NDNzLS4yMzYuOTM5IDEuNDE0LjIzNWMxLjY0OS0uNzA0IDQuNzEzIDEuNjQzIDMuMDYzIDUuMzk4LTEuNjQ5IDMuNzU1LTIuODI4IDQuNjk0LjcwNyA0LjQ1OSAxLjI3Ny0uMDg1IDIuNC0uOTk2IDMuMzEzLTIuMTI1IDEuNzUyLTIuMTY1Ljk3LTMuOTEuODM3LTYuNjg2LS4yMjctNC43NTctLjU5OC03Ljg2LTEuNzkzLTkuNzMtMS42NS0yLjU4MS00LjAwNi00LjY5NC0xMC4xMzQtMy41Mi02LjEyNyAxLjE3My0xNS4wODIgNy4wNC0xMi45NjEgMTUuNDkgMi4xMjEgOC40NDkgNi44MzQgMTcuODM2IDYuODM0IDE3LjgzNnMzLjI5OSAxMy4xNDMgMS4xNzggMTYuMTk0eiIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExMC44NzggOTkuMDU2Yy0yLjAzNi41NTktNC41OTMuODMtNy4zNDUuOTE1LTQuODAzLjE0OC0xMC4yMS0uMjc0LTE0LjUyNi0uNzUzLTQuNjY0LS41MTktOC4wNTgtMS4xLTguMDU4LTEuMSAxLjU3Ny0xLjQ2NSA0LTIuMDQ1IDYuODQ2LTIuMjU2IDMuNTM1LS4yNjMgNy43MjUuMDM3IDExLjc3Mi0uMDkyYTIwLjQxIDIwLjQxIDAgMDE0LjQ1MS4zMzRjNC40NjQuODQ3IDYuODYgMi45NTIgNi44NiAyLjk1MnoiIG9wYWNpdHk9Ii4xIi8+CiAgICA8cGF0aCBmaWxsPSIjOUY2MTZBIiBkPSJNOTAuNDk0IDczLjgyNmMzLjY0NCAwIDYuNTk5LTIuOTQyIDYuNTk5LTYuNTcgMC0zLjYzLTIuOTU1LTYuNTcyLTYuNTk5LTYuNTcycy02LjU5OSAyLjk0Mi02LjU5OSA2LjU3MWMwIDMuNjMgMi45NTUgNi41NzIgNi41OTkgNi41NzJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOUY2MTZBIiBkPSJNODkuNjcgNzIuNTM2czEuMTc4IDQuNDU5IDAgNC42OTRjLTEuMTc5LjIzNC00LjAwNyAxLjQwOC00LjAwNyAxLjQwOGwzLjUzNSAxLjQwOCA2LjU5OSA2LjEwMiA1LjY1NSAyLjgxNiAyLjgyOC0uOTM5di01LjE2M2wtNC4yNDItNi41NzFzLTIuODI4LjkzOS0zLjUzNC0yLjExMmMtLjcwNy0zLjA1MS0yLjEyMS00LjIyNS0yLjEyMS00LjIyNWwtNC43MTQgMi41ODJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjOUY2MTZBIiBkPSJNODguMDIgNzguODcySDg1LjE5cy00Ljk0OSAxLjY0My03Ljc3NyA1LjM5OGMtMi44MjggMy43NTUtNy4zMDUgNy41MS03LjMwNSA3LjUxcy0zLjA2NCA0LjIyNS0xLjQxNCAxMC4wOTJjMS42NSA1Ljg2OCA0LjAwNiAxMC4wOTIgNi4xMjcgOC45MTkgMi4xMjEtMS4xNzQtMy4wNjQtOS42MjMtMy4wNjQtOS42MjNsMS40MTQtNS4xNjNzNy4zMDYtOC40NDkgMTAuMzctOC4yMTRjMy4wNjMuMjM0IDMuMjk5IDIuODE2IDMuMjk5IDIuODE2bDYuNTk4IDEuODc4IDIuMTIxLTQuNDYtMS4xNzgtNC42OTMtNi4zNjMtNC40NnoiLz4KICAgIDxwYXRoIGZpbGw9IiMzRjNENTYiIGQ9Ik0xMDQuOTg3IDkzLjY1OGE4LjY2OCA4LjY2OCAwIDAwLS45NjggMi40NDYgMTkuMDE4IDE5LjAxOCAwIDAwLS40ODYgMy44NjdjLTQuODAyLjE0OC0xMC4yMDktLjI3NC0xNC41MjYtLjc1My0uMzgyLTEuMDE0LS44MDEtMi4xOC0xLjIxMS0zLjM1Ni0xLjEwNi0zLjE3OC0yLjEzMy02LjQyMS0yLjEzMy02Ljg5OCAwLS45MzkgNC45NDkuNzA0IDYuMTI3LjQ3IDEuMTc5LS4yMzUgMS42NS0zLjk5IDAtNS44NjgtMS42NS0xLjg3Ny02LjQ4LTUuMDQ2LTYuNDgtNS4wNDZsMS42NS0uNDY5czMuNjUyIDIuNjk5IDExLjE5MyA3LjE1OGM3LjU0MSA0LjQ2IDQuNDc4LTIuNTgxIDQuNDc4LTIuNTgxbC00LjM2LTYuNjloMS44ODVzMy42NTMgNi4yMiA1LjUzOCA5LjAzN2MxLjg4NiAyLjgxNiAxLjE3OSA1LjYzMi0uNzA3IDguNjgzeiIvPgogICAgPHBhdGggZmlsbD0iIzJGMkU0MSIgZD0iTTk1LjE2MyA1OC4zOWwtMTEuOTUxIDIuNDM1IDEuNSA3LjMwNCAxMS45NTItMi40MzYtMS41LTcuMzAzeiIvPgogICAgPHBhdGggZmlsbD0iIzNGM0Q1NiIgZD0iTTEyMC44OTQgNTkuMjc2YTMuNTI3IDMuNTI3IDAgMDAzLjUzNS0zLjUyIDMuNTI3IDMuNTI3IDAgMDAtMy41MzUtMy41MjEgMy41MjggMy41MjggMCAwMC0zLjUzNSAzLjUyIDMuNTI4IDMuNTI4IDAgMDAzLjUzNSAzLjUyeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyMC44OTQgNTcuNjMzYzEuMDQxIDAgMS44ODUtLjg0IDEuODg1LTEuODc4YTEuODgxIDEuODgxIDAgMDAtMS44ODUtMS44NzdjLTEuMDQxIDAtMS44ODUuODQtMS44ODUgMS44NzdzLjg0NCAxLjg3OCAxLjg4NSAxLjg3OHoiLz4KICAgIDxwYXRoIGZpbGw9IiMwNzdDQjIiIGQ9Ik0xNy4xNDIgOTYuMzkxbC0uMjQxIDEuODUyYy0uMDgyLjYyNy0uMTYzIDEuMjU0LS4yMDcgMS44ODUtLjE0NiAyLjA5OC4xMjYgNC4yMDUuMDU0IDYuMzA3LS4wNTUgMS42MTgtLjMxNCAzLjIzNS0uMTg5IDQuODQ5LjExIDEuNDI4LjUxOSAyLjgxNS45MjUgNC4xODlsLjU4IDEuOTYzYS4zNzcuMzc3IDAgMDAuMTc1LjI5MmMuMDUuMDMyLjEwNi4wNTIuMTY1LjA1OGEuMzguMzggMCAwMC4xNzQtLjAybDIuNTY2LS4yMzJjLS4xNjQtLjc1LS4zNDctMS41MzMtLjQzNS0yLjI5Ni0uMDctLjYwNC0uMTEyLTEuMjEtLjE1Ni0xLjgxNmE1OTMuNzMgNTkzLjczIDAgMDAtLjQ0Ni01LjY2NGwtLjI3MS0zLjMxNmMtLjExOC0xLjQzOC0uMjM3LTIuODg1LS42MDEtNC4yODJhOC41MTggOC41MTggMCAwMC0yLjA5My0zLjc2OXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNy4xNDIgOTYuMzkxbC0uMjQxIDEuODUyYy0uMDgyLjYyNy0uMTYzIDEuMjU0LS4yMDcgMS44ODUtLjE0NiAyLjA5OC4xMjYgNC4yMDUuMDU0IDYuMzA3LS4wNTUgMS42MTgtLjMxNCAzLjIzNS0uMTg5IDQuODQ5LjExIDEuNDI4LjUxOSAyLjgxNS45MjUgNC4xODlsLjU4IDEuOTYzYS4zNzcuMzc3IDAgMDAuMTc1LjI5MmMuMDUuMDMyLjEwNi4wNTIuMTY1LjA1OGEuMzguMzggMCAwMC4xNzQtLjAybDIuNTY2LS4yMzJjLS4xNjQtLjc1LS4zNDctMS41MzMtLjQzNS0yLjI5Ni0uMDctLjYwNC0uMTEyLTEuMjEtLjE1Ni0xLjgxNmE1OTMuNzMgNTkzLjczIDAgMDAtLjQ0Ni01LjY2NGwtLjI3MS0zLjMxNmMtLjExOC0xLjQzOC0uMjM3LTIuODg1LS42MDEtNC4yODJhOC41MTggOC41MTggMCAwMC0yLjA5My0zLjc2OXoiIG9wYWNpdHk9Ii4xIi8+CiAgICA8cGF0aCBmaWxsPSIjM0YzRDU2IiBkPSJNMjEuNzE0IDE1OS44OTZhNy40OTMgNy40OTMgMCAwMC0uMzk0LjkxMmMtLjI5NC44NjEtLjM0IDEuNzg1LS4zODEgMi42OTQtLjAyLjE3NS0uMDA0LjM1My4wNDguNTIyLjEyNi4zMjcuNDkuNDkyLjgyOS41ODMgMS40MjEuMzgxIDIuOTIuMDIzIDQuMzg3LS4xMDggMS40MzktLjEyOCAyLjkwNS0uMDM1IDQuMzE0LS4zNTIuMjA5LS4wMzkuNDEtLjEwOC41OTgtLjIwNi4zNTctLjIzMi42MjQtLjU3OC43NTUtLjk4Mi4wNDMtLjEwNC4wNzItLjIxMi4wODYtLjMyMy4wNDYtLjQ3OC0uMzcyLS44OTQtLjgyOC0xLjA1MS0uNDU3LS4xNTctLjk1Mi0uMTMyLTEuNDMzLS4xODFhNC41MjQgNC41MjQgMCAwMS0yLjYzNi0xLjIwMSA0LjQ5MyA0LjQ5MyAwIDAxLTEuMzU4LTIuNTUxYy0uMDE4LS4xMDUtMi4zNzQtLjA0My0yLjYyMi4wOTItLjI5LjE1OS0uNDY2LjU1NS0uNjMuODIzLS4yNjQuNDMyLS41MS44NzUtLjczNSAxLjMyOXoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yMS43MTQgMTU5Ljg5NmE3LjQ5MyA3LjQ5MyAwIDAwLS4zOTQuOTEyYy0uMjk0Ljg2MS0uMzQgMS43ODUtLjM4MSAyLjY5NC0uMDIuMTc1LS4wMDQuMzUzLjA0OC41MjIuMTI2LjMyNy40OS40OTIuODI5LjU4MyAxLjQyMS4zODEgMi45Mi4wMjMgNC4zODctLjEwOCAxLjQzOS0uMTI4IDIuOTA1LS4wMzUgNC4zMTQtLjM1Mi4yMDktLjAzOS40MS0uMTA4LjU5OC0uMjA2LjM1Ny0uMjMyLjYyNC0uNTc4Ljc1NS0uOTgyLjA0My0uMTA0LjA3Mi0uMjEyLjA4Ni0uMzIzLjA0Ni0uNDc4LS4zNzItLjg5NC0uODI4LTEuMDUxLS40NTctLjE1Ny0uOTUyLS4xMzItMS40MzMtLjE4MWE0LjUyNCA0LjUyNCAwIDAxLTIuNjM2LTEuMjAxIDQuNDkzIDQuNDkzIDAgMDEtMS4zNTgtMi41NTFjLS4wMTgtLjEwNS0yLjM3NC0uMDQzLTIuNjIyLjA5Mi0uMjkuMTU5LS40NjYuNTU1LS42My44MjMtLjI2NC40MzItLjUxLjg3NS0uNzM1IDEuMzI5eiIgb3BhY2l0eT0iLjEiLz4KICAgIDxwYXRoIGZpbGw9IiMzRjNENTYiIGQ9Ik0yNS42MjEgMTYwLjExOWE3LjU0NyA3LjU0NyAwIDAwLS4zOTQuOTExYy0uMjk0Ljg2Mi0uMzM5IDEuNzg1LS4zOCAyLjY5NGExLjI4IDEuMjggMCAwMC4wNDcuNTIyYy4xMjYuMzI3LjQ5LjQ5My44MjkuNTg0IDEuNDIxLjM4MSAyLjkyLjAyMiA0LjM4Ny0uMTA4IDEuNDM5LS4xMjkgMi45MDUtLjAzNiA0LjMxNS0uMzUyLjIwOC0uMDM5LjQxLS4xMDkuNTk3LS4yMDdhMS44NSAxLjg1IDAgMDAuNzU1LS45ODJjLjA0My0uMTAzLjA3Mi0uMjEyLjA4Ni0uMzIyLjA0Ni0uNDc5LS4zNzItLjg5NC0uODI4LTEuMDUyLS40NTYtLjE1Ny0uOTUyLS4xMzEtMS40MzItLjE4YTQuNTI1IDQuNTI1IDAgMDEtMi42MzctMS4yMDIgNC40OSA0LjQ5IDAgMDEtMS4zNTgtMi41NTFjLS4wMTctLjEwNC0yLjM3NC0uMDQzLTIuNjIyLjA5My0uMjkuMTU5LS40NjYuNTU1LS42My44MjItLjI2NC40MzItLjUxLjg3NS0uNzM1IDEuMzN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMkYyRTQxIiBkPSJNMzUuODEzIDEzNi45NTFjLjAzIDQuNzEzLTEuMzQ2IDkuMzItMi45NiAxMy43NWExMjQuOTA2IDEyNC45MDYgMCAwMS0yLjAzNCA1LjIxNmMtLjQyNSAxLjAyMS0uOTAzIDIuMTU0LS40NDggMy4xNjItMS4zMS0uNDk2LTIuNjUtLjc4OS00LjAzMy0uNTYuNTI2LTEuMDY4LjQ3Ni0yLjMxMi41LTMuNTAxYTMwLjM2IDMwLjM2IDAgMDEuNTIyLTQuODEgMjYuNzQgMjYuNzQgMCAwMTIuMzYtNi45NTQgNS4yMyA1LjIzIDAgMDAuNDU5LTEuNDY1IDkuMjg3IDkuMjg3IDAgMDAtLjE5NS0zLjM4NCAyMC4xNDcgMjAuMTQ3IDAgMDAtMi44MjQtNi44OTJsLS4wMTQuMTQxYTIwLjUxNyAyMC41MTcgMCAwMS0uMzU1IDIuMDg2Yy0uMzA5IDEuNDYtLjY3IDIuOTItLjYxNiA0LjM4OGEyMy41MiAyMy41MiAwIDAxLS4yODkgNC42NTMgNy4wMiA3LjAyIDAgMDEtLjQ3IDEuNzU5Yy0uMTUuMzM3LS4zNDguNjU0LS40NjcgMS4wMDRhNC41NiA0LjU2IDAgMDAtLjE4MyAxLjI0MmMtLjE3NiAzLjU0OS0uMDAyIDguMDkxLjcyNiAxMS41N2E2LjgwNiA2LjgwNiAwIDAwLTMuNTMuODAxYy0uODgtMi40NzUtMS40NDEtNS45ODktMS44Ni04LjU5NGEyNS4zMzcgMjUuMzM3IDAgMDEuMjg0LTkuMjZjLjIwNi0xLjAxNi4yODQtMi4wNTMuMjMtMy4wODgtLjA5NC0yLjA2LS42MDItNC4wNzYtMS4xMDgtNi4wNzdhMTM0MDguMzg3IDEzNDA4LjM4NyAwIDAxLTEuODctNy4zODdjLS4yNDMtLjk2My0uNDg4LTEuOTQ2LS40MTItMi45MzZhNy4zMDEgNy4zMDEgMCAwMS4zNDEtMS41OTYgMTcuODE2IDE3LjgxNiAwIDAxMi40MjUtNC45MzljNC4yMi4yMzYgOC40OS0uMTU3IDEyLjcwMy0uNDhhLjg2Ljg2IDAgMDEuNTk3LjEwMS44NC44NCAwIDAxLjI0LjU0MWwxLjU4MyA4LjkzMmMuMjU3IDEuMjQ0LjQwOCAyLjUwNy40NSAzLjc3NS4wMDkgMS4yNjQtLjE5NyAyLjUyNC0uMTUgMy43ODguMDY1IDEuNzAyLjM4OCAzLjMxMS4zOTggNS4wMTR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjcuMTQ2IDEzMS42NTRjLS4wODIuNzAxLS4yIDEuMzk3LS4zNTUgMi4wODYtLjkxOC0xLjU4MS0xLjkwNy0zLjEyMi0yLjc1Mi00Ljc0Mi0uMjE4LS40MTgtLjQyNS0uODQxLS42MzQtMS4yNjNsLS42MjItMS4yNjZjLS4xMTctLjIzNy0uMjM0LS40NzUtLjMzOS0uNzE4YTUuMTk2IDUuMTk2IDAgMDEtLjM5Mi0xLjA5N2MuMzA3LS4wNTYgMS4wNjQuNzY5IDEuMjkyLjk4NC40NjcuNDU4LjkwNy45NDIgMS4zMiAxLjQ0OS40OTkuNTYzLjk1NyAxLjE2IDEuMzcgMS43ODhhOC42OCA4LjY4IDAgMDExLjExMiAyLjc3OXoiIG9wYWNpdHk9Ii4xIi8+CiAgICA8cGF0aCBmaWxsPSIjRUZCN0I5IiBkPSJNMzAuNjYzIDg4LjI3MXMtMi4zNDUgMy43MTktMS45MSA0LjQ5N2MuNDMzLjc3OC03LjM4Mi0uNjkyLTcuMzgyLS42OTJzNC4yNTUtMy43MTggMy44Mi01LjI3NWMtLjQzMy0xLjU1NiA1LjQ3MiAxLjQ3IDUuNDcyIDEuNDd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRUZCN0I5IiBkPSJNMjguNTc4IDg5LjM5NWMyLjkyNiAwIDUuMjk3LTIuMzYxIDUuMjk3LTUuMjc1IDAtMi45MTMtMi4zNzEtNS4yNzUtNS4yOTctNS4yNzUtMi45MjUgMC01LjI5NyAyLjM2Mi01LjI5NyA1LjI3NSAwIDIuOTE0IDIuMzcyIDUuMjc1IDUuMjk3IDUuMjc1eiIvPgogICAgPHBhdGggZmlsbD0iIzA3N0NCMiIgZD0iTTMwLjc0IDkyLjE3YTUuMzg0IDUuMzg0IDAgMDAtMi4yMjctMS43OSA4LjA1IDguMDUgMCAwMC0xLjU4My0uMzg4bC0yLjExMy0uMzdjLS41MTgtLjA5MS0xLjA3Mi0uMTc4LTEuNTUzLjAzNS0uMjQ1LjEyNC0uNDY5LjI4Ni0uNjYyLjQ4Mi0uNzM0LjY3Ny0xLjQ0NiAxLjQyMi0yLjM2NyAxLjgxMy0uMjUyLjEwNy0uNTE2LjE4Ni0uNzY3LjI5NC0xLjAzLjQ0Mi0xLjgwMSAxLjM2NC0yLjIzOSAyLjM5My0uNDU5IDEuMDc5LS40NzIgMi4yNDktLjQzNiAzLjQyYTUuOTggNS45OCAwIDAwLjExOSAxLjIwNGMuMTA3LjM3Ny4yNC43NDYuNCAxLjEwNC4yOTMuNzY0LjUzNyAxLjU0NS43MzMgMi4zNGE3My42OCA3My42OCAwIDAxMS4zNjUgNi4zMjVjLjAzMi4zMDYuMTIyLjYwMy4yNjcuODc1LjIwNC4yNzEuNDUuNTA3LjczLjY5OS4yMjIuMTgzLjQyNy4zODUuNjEyLjYwNC4wOTEuMDk0LjE1Ny4yMDguMTk0LjMzMy4wNjkuMzE0LS4yMS41ODQtLjQzOC44MTRhMy45MjcgMy45MjcgMCAwMC0uOTg5IDEuNzE1LjY4LjY4IDAgMDAtLjE1Ny40NzQuODIuODIgMCAwMS4wNS4zNzQuODcuODcgMCAwMS0uMi4zMDkgMS4xNjEgMS4xNjEgMCAwMC0uMjIuOTMyIDE0LjkyIDE0LjkyIDAgMDA1LjE4NyAxLjIxYy40MzguMDIuODc4LjAyIDEuMzEzLjA3NC4zMS4wMzguNjE2LjEwMy45MjcuMTM5LjQ1Mi4wNDIuOTA2LjA1MyAxLjM1OS4wMzQgMi4zNTgtLjA0NiA0Ljc4NC0uMTA3IDYuOTUtMS4wMzguMjAzLTEuMTA2LS4yMzYtMi4yMzMtLjUxMi0zLjMyMy0uNDM4LTEuNzM0LS41NDgtMy41MzItLjg3NC01LjI5LS4yMjQtMS4yMDQtLjU0OC0yLjM4OC0uNzM0LTMuNTk4LS4xODYtMS4yMS0uMjMtMi40NjQuMTA1LTMuNjQyLjI5Ni0xLjA0NC4zODUtMi4xMDYuNjkyLTMuMTQ3LjMwNi0xLjA0LjUyMS0yLjE2OC4xNzUtMy4xOTctLjQzLTEuMjc0LTEuNzU4LTIuMjgzLTMuMTA2LTIuMjEzeiIvPgogICAgPHBhdGggZmlsbD0iIzJGMkU0MSIgZD0iTTMzLjM0MiA4MS4zMjRjLjI1Ny0uOTM3LS4yNS0xLjkxMi0uODU1LTIuNjczLS42NTEtLjgxOC0xLjQ5My0xLjU1NS0yLjUyLTEuNzYtLjgzNS0uMTY4LTEuNy4wMzQtMi41NDktLjAzMy0uNzUyLS4wNi0xLjQ3My0uMzI4LTIuMjIyLS40MjVhNy4wNjcgNy4wNjcgMCAwMC0yLjAzLjA3NyA3LjU4IDcuNTggMCAwMC0xLjg1Mi41MTVjLTIuMjU1Ljk5NS0zLjU3NiAzLjQ1Mi0zLjg4MyA1Ljg5LS4zMDYgMi40MzcuMjMxIDQuODkyLjc2NiA3LjI5bC40ODMgMi4xNjdjLjUwMiAyLjI1NiAxLjAwNyA0LjUyNCAxLjE0MSA2LjgzLjEzNSAyLjMwOC0uMTE2IDQuNjc2LTEuMDY5IDYuNzgzYTE0LjYwNyAxNC42MDcgMCAwMDYuNzMtNy41ODhjLjM0My0uODkyLjU5Ni0xLjgxOC45NzYtMi42OTUuMzI2LS43NTUuNzQ0LTEuNDcgMS4wMzQtMi4yNC4zMjYtLjg2OS40ODMtMS43OTIuNDYxLTIuNzItLjAxNi0uNjk4LS4xMzMtMS4zOTItLjExMy0yLjA4OS4wMi0uNjk3LjE5OS0xLjQyNS42ODMtMS45My40My0uNDQ3IDEuMDQxLS42NjMgMS41OTYtLjk0NWE2LjYyIDYuNjIgMCAwMDIuMjMtMS44NTNjLjM1LS40NTMuMzY4LS42NDcuNDU3LTEuMTcuMDg2LS41MDcuNC0uOTM4LjUzNi0xLjQzMXoiLz4KICAgIDxwYXRoIGZpbGw9IiNFRkI3QjkiIGQ9Ik0zMy4zNSAxMjAuOTU0Yy4wNTMuNTQyLS4wNDYgMS4wOTguMDczIDEuNjMuMDkuMzk5LjI5OC43NjMuNDIgMS4xNTQuMTIyLjQ1My4xODQuOTIuMTg2IDEuMzg5LjAxOC4zOTMtLjAxMy44NzEtLjM2MiAxLjA1Ni0uMTUzLjA4MS0uMzM3LjA4Mi0uNDk3LjE1LS4xNi4wNjgtLjI5Ny4yNjEtLjIwNS40MDguMDc3LjEyMy4yNTEuMTI1LjM5NC4xNTQuMTQzLjAyOS4zLjE3Ny4yMTguMjk3YS4yNTIuMjUyIDAgMDEtLjEyOC4wOCAxLjQ4NSAxLjQ4NSAwIDAwLS40MS4xOTcuNDEzLjQxMyAwIDAwLS4xNjkuMzk3LjI0My4yNDMgMCAwMC4xMzcuMTY3LjI1My4yNTMgMCAwMC4yMTUtLjAwNWMtLjA2NC4xMzYtLjA5OS4yODQtLjEwMi40MzUuNTU5LjIzOSAxLjE4OC0uMDc0IDEuNzE0LS4zNzhhNi41NiA2LjU2IDAgMDAuNjYtLjQxOCAzLjI2IDMuMjYgMCAwMDEuMjcxLTIuNzg0IDYuMzYzIDYuMzYzIDAgMDAtLjEyNC0uNzk2Yy0uMDgxLS40NTctLjE5LS45MDktLjMyMi0xLjM1My0uMTUtLjQ2OS0uMzU4LS45MTgtLjUzNS0xLjM3Ny0uMzc3LS45NzktLjYyLTIuMDA0LS45Ni0yLjk5N2EuMzQuMzQgMCAwMC0uMTM3LS4yNDEuMzQyLjM0MiAwIDAwLS4yNzEtLjA2NCA0LjAxNSA0LjAxNSAwIDAwLTEuMTQuMTA0Yy0uMjI2LjA2Ni0uNTk2LjIxLS42OTcuNDQ2LS4wOTEuMjEyLjA2MS40MDEuMTU4LjU4M2E0LjgzIDQuODMgMCAwMS42MTMgMS43NjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMzIuOTkgOTQuNDUyYy4xMTQuMTE0LjIwOC4yNDYuMjgxLjM4OS43NTMgMS4zNjIuNzYyIDIuOTkyLjc5OCA0LjU0Ny4wNCAxLjc0OS4xMzYgMy40OTcuMjMyIDUuMjQ1bC4yODcgNS4yMjZjLjAyOC40OTkuMDU1IDEgLjEyNiAxLjQ5NS4zMzguMDg1LjM1Mi41Mi4zMTMuODY1LS4yNDIgMi4xMzMtLjg0NSA0LjMyOC0uMjE0IDYuMzgxYS42NDEuNjQxIDAgMDAuMTQ4LjI4NCAxLjcwOSAxLjcwOSAwIDAwLS45OC0uMDEzYy0uMzE0LjA2Ni0uNjE2LjE4LS45My4yNTItLjM5OS4wOS0uODUuMTI5LTEuMTIzLjQzM2EyMS41NzYgMjEuNTc2IDAgMDEtLjczMy0yLjgxOWMtLjE0OS0uODY4LS4xOS0xLjc3LS41NDUtMi41NzctLjE0My0uMzI1LS4zMzQtLjYyNy0uNTEtLjkzNy0uOTE5LTEuNjMyLTEuMzctMy40NzYtMS44MS01LjI5NWE3LjY5MiA3LjY5MiAwIDAxLS4xNC0yLjYzYy4wNjMtLjQwMS4xLS44MDYuMTEtMS4yMTFhOS42OTQgOS42OTQgMCAwMC0uMTY4LTEuMjczIDguNTI1IDguNTI1IDAgMDEuMjU1LTMuNjg4Yy4zMy0xLjExLjYxOS0yLjI3OSAxLjMwOC0zLjIxMi42ODktLjkzMiAyLjEzMy0xLjQ0NiAzLjI5Ni0xLjQ2MnoiIG9wYWNpdHk9Ii4xIi8+CiAgICA8cGF0aCBmaWxsPSIjMDc3Q0IyIiBkPSJNMzMuMjUxIDk0LjI3OWMuMTEzLjExNC4yMDguMjQ2LjI4LjM4OS43NTQgMS4zNjIuNzYzIDIuOTkyLjc5OSA0LjU0Ny4wNCAxLjc1LjEzNSAzLjQ5Ny4yMzIgNS4yNDVsLjI4NyA1LjIyNmMuMDI4LjUuMDU1IDEgLjEyNiAxLjQ5NS4zMzguMDg1LjM1Mi41Mi4zMTMuODY1LS4yNDMgMi4xMzMtLjg0NSA0LjMyOC0uMjE0IDYuMzgxYS42MzUuNjM1IDAgMDAuMTQ3LjI4NCAxLjcwOSAxLjcwOSAwIDAwLS45NzktLjAxM2MtLjMxNC4wNjYtLjYxNy4xODEtLjkzLjI1Mi0uMzk5LjA5LS44NS4xMjktMS4xMjMuNDMzYTIxLjYwOCAyMS42MDggMCAwMS0uNzMzLTIuODE5Yy0uMTUtLjg2OC0uMTktMS43Ny0uNTQ1LTIuNTc3LS4xNDMtLjMyNS0uMzM1LS42MjctLjUxLS45MzctLjkyLTEuNjMxLTEuMzctMy40NzYtMS44MS01LjI5NWE3LjY5IDcuNjkgMCAwMS0uMTQtMi42M2MuMDYzLS40MDEuMS0uODA1LjExLTEuMjExYTkuNjkzIDkuNjkzIDAgMDAtLjE2OC0xLjI3MyA4LjUyMyA4LjUyMyAwIDAxLjI1NS0zLjY4OGMuMzMtMS4xMS42MTgtMi4yNzkgMS4zMDgtMy4yMTIuNjg5LS45MzIgMi4xMzMtMS40NDYgMy4yOTUtMS40NjJ6Ii8+CiAgICA8ZyBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMSI+CiAgICAgIDxwYXRoIGQ9Ik0zMi40ODcgNzguNjUxYy0uNjUxLS44MTgtMS40OTMtMS41NTUtMi41Mi0xLjc2LS44MzUtLjE2OC0xLjcuMDM0LTIuNTQ5LS4wMzMtLjc1Mi0uMDYtMS40NzMtLjMyOC0yLjIyMi0uNDI1YTcuMDY3IDcuMDY3IDAgMDAtMi4wMy4wNzcgNy41OCA3LjU4IDAgMDAtMS44NTIuNTE1Yy0uMzIuMTQyLS42MjYuMzE1LS45MTMuNTE1YTcuOTgxIDcuOTgxIDAgMDExLjYzNS0uNDI1IDcuMDcgNy4wNyAwIDAxMi4wMzEtLjA3NmMuNzQ5LjA5NiAxLjQ3LjM2NSAyLjIyMi40MjQuODUuMDY3IDEuNzE0LS4xMzQgMi41NS4wMzMgMS4wMjcuMjA1IDEuODY4Ljk0MyAyLjUxOSAxLjc2LjYwNi43NjEgMS4xMTMgMS43MzYuODU1IDIuNjczLS4xMzYuNDkzLS40NS45MjQtLjUzNiAxLjQzMi0uMDkuNTIzLS4xMDguNzE2LS40NTcgMS4xN2E2LjYzOSA2LjYzOSAwIDAxLTEuNjA4IDEuNDljLjE3LS4wOC4zNC0uMTU4LjUwNy0uMjQzYTYuNjIgNi42MiAwIDAwMi4yMy0xLjg1M2MuMzUtLjQ1My4zNjgtLjY0Ny40NTctMS4xNy4wODYtLjUwNy40LS45MzguNTM2LTEuNDMxLjI1OC0uOTM3LS4yNS0xLjkxMi0uODU1LTIuNjczek0yOC41MjMgODYuNzI0Yy4wOS0uMDk0LjE5LS4xOC4yOTYtLjI1Ni0uNTA2LjI0NC0xLjAzOS40NTktMS40MjUuODYxLS40ODQuNTA1LS42NjIgMS4yMzItLjY4MyAxLjkzLS4wMi42OTcuMDk3IDEuMzkuMTE0IDIuMDg4YTcuMjY0IDcuMjY0IDAgMDEtLjQ2MiAyLjcyMWMtLjI5Ljc3LS43MDggMS40ODUtMS4wMzQgMi4yNC0uMzguODc2LS42MzMgMS44MDItLjk3NiAyLjY5NGExNC42MTcgMTQuNjE3IDAgMDEtNS41NjQgNi44OTVsLS4wMzcuMDg4YTE0LjYwNyAxNC42MDcgMCAwMDYuNzMtNy41ODhjLjM0My0uODkyLjU5Ni0xLjgxOC45NzYtMi42OTUuMzI2LS43NTUuNzQ0LTEuNDcgMS4wMzQtMi4yNC4zMjYtLjg2OS40ODMtMS43OTIuNDYxLTIuNzItLjAxNi0uNjk4LS4xMzMtMS4zOTItLjExMy0yLjA4OS4wMi0uNjk3LjE5OS0xLjQyNS42ODMtMS45M3oiIG9wYWNpdHk9Ii4xIi8+CiAgICA8L2c+CiAgICA8cGF0aCBmaWxsPSIjMkYyRTQxIiBkPSJNMTQ0Ljg1MyAxNjQuMjU4Yy0uMjUyLjMwMy0uNjg0LjM2NC0xLjA3NC40MDRhNi4xMjEgNi4xMjEgMCAwMS0xLjUyNC4wMjljLS42MDMtLjA4OS0uOTY0LjI1Mi0xLjUxNC0uMDEtLjMzMy0uMTU5LS44NDUuMTU4LTEuMTc4IDAtLjQ1Ny0uMjE4LTIuMDMzLS4yNjMtMi4zMS0uNjg3LS4yNzgtLjQyNS0uMjUtMS4wOTYuMTg5LTEuMzQ2YTIuOTUgMi45NSAwIDAxLjM4NS0uMTVjLjczNi0uMjkyIDIuMjI2LTIuNDkgMy4wMDgtMi42MDMuMzg4LS4wMTguNzc0LjA3MiAxLjExMy4yNjEuNzcyLjM0MSAyLjEzNC42MTEgMi40NzEgMS40NzYuMjYyLjY3NS45OCAxLjk2Ny40MzQgMi42MjZ6TTE1MC4zOTYgMTY0LjA4NGMuMjUyLjMwMy42ODQuMzY0IDEuMDc0LjQwNGE2LjEyMSA2LjEyMSAwIDAwMS41MjQuMDI5Yy42MDMtLjA4OSAxLjMzNi40MjYgMS44ODcuMTY0LjMzMy0uMTU5Ljg0NS0uMDc2IDEuMTc4LS4yMzUuNDU3LS4yMTggMi42MDIuMjY4IDIuODgtLjE1Ny4yNzgtLjQyNS4yNDktMS4wOTUtLjE5LTEuMzQ2YTIuODk2IDIuODk2IDAgMDAtLjM4NS0uMTVjLS43MzUtLjI5MS0zLjE2OC0yLjk2LTMuOTUtMy4wNzJhMi4wODggMi4wODggMCAwMC0xLjExMy4yNjFjLS43NzIuMzQxLTIuMTM0LjYxMS0yLjQ3MSAxLjQ3Ni0uMjYyLjY3NS0uOTggMS45NjctLjQzNCAyLjYyNnoiLz4KICAgIDxwYXRoIGZpbGw9IiMyRjJFNDEiIGQ9Ik0xNTIuODMyIDExNi4xNjFjLjI0MS40NjEuNDUyLjkzOC42MzEgMS40MjcgMi4xMzkgNS42MzYgMi4zMTggMTEuNzk1IDIuNDA3IDE3LjgyLS4wMDguOTc5LjA0OCAxLjk1OC4xNjggMi45MzEuMDg5LjYxNi4yMzEgMS4yNC4xNCAxLjg1Ni0uMDc5LjUzMy0uMzMxIDEuMDU5LS4yMzEgMS41ODguMDQ1LjIzNy4xNi40NTcuMjA1LjY5NS4wMzQuMjYuMDI3LjUyNC0uMDIyLjc4M2wtLjI4NiAyLjEyNWMtLjE2NCAxLjIxLS41NDEgMi4zNzctLjUyIDMuNTk4LjAxNC44MzMuMDI4IDEuNjY4LjEyMSAyLjQ5Ni4wOTQuODQxLjI3MSAxLjY3NS4yOCAyLjUyMS4wMDYuNjMzLS4wODEgMS4yNjQtLjEzNyAxLjg5NWExOS40OTMgMTkuNDkzIDAgMDAtLjA1NCAyLjY4Yy4wMzQuNjg5LjExMyAxLjQwNC40OCAxLjk4OS0uNDExLjU4Ni0uODE4IDEuMTEyLTEuNDc2IDEuMzk5LTEuMzM2LjU4NC0yLjg3LjM4Ni00LjMxNC4xNzcuMDgtLjI2NS4yMDQtLjU2Ni4wODgtLjgxOGExLjYzIDEuNjMgMCAwMC0uMjQ4LS4zMzYgMy45NTYgMy45NTYgMCAwMS0uNjQzLTEuNDg5Yy0uMTc1LS42MzQtLjM1LTEuMzE3LjAxLTEuOTI2YTEuMjMgMS4yMyAwIDAwLjE1Ni0uNzE1Yy0uMjk5LTMuOTk1LTEuMTkyLTguMTI5LS4zNy0xMi4wNS4wODgtLjQxOS4xOTMtLjgzNS4yNDItMS4yNi4wNDQtLjYxMS4wNTEtMS4yMjQuMDIyLTEuODM2bC0uMDE3LS44NTFjLS4wNDMtLjkwOS0uMDA2LTEuODQxLS4xODktMi43NC0uMTMxLS42NDQtLjM3Ni0xLjI5MS0uMDc0LTEuOTQ3YTEuMDczIDEuMDczIDAgMDAtLjA0NS0uOTQ1IDE3LjMyNCAxNy4zMjQgMCAwMS0xLjUyMi0zLjQ5OCA2LjA4MyA2LjA4MyAwIDAwLS4zMi0uOTk2IDcuMDQzIDcuMDQzIDAgMDAtLjYzMy0uOTY5Yy0uNzE2LTEuMDM0LTEuMTQ0LTIuMjMzLTEuNTY0LTMuNDE3LjA0NS0uMTA5LjAxMS0uMjYtLjEwNi0uMjQ0YS40NDguNDQ4IDAgMDAtLjI3Ni4yMDVjLS41NzYuNzctLjYyNCAxLjc5OC0uNjUgMi43NTgtLjA0My44OTItLjAyOCAxLjc4Ni4wNDYgMi42NzYuMDQ5LjQ2Ny4xMzEuOTI5LjE3MyAxLjM5Ni4wNTUuODcyLjA0MSAxLjc0Ni0uMDQyIDIuNjE1bC0uMjkzIDQuMjc3Yy0uMDQuMzU0LS4wMTkuNzEyLjA2MyAxLjA1OC4xODguNTk5LjI4IDEuMjI1LjI3MiAxLjg1M2EzMy4yNzcgMzMuMjc3IDAgMDAuNjY4IDcuNjk5Yy4xNDQuNjk5LjMxIDEuMzk0LjQzMiAyLjA5Ny4yODcgMS42NTcuMzI2IDMuMzQ2LjM2NSA1LjAyNy4wMjMgMS4wMzQuMDQgMi4xMDQtLjM2OCAzLjA1NS0uMTYuMjkzLS4yNzguNjA3LS4zNDkuOTMyYTEuOTkyIDEuOTkyIDAgMDEtLjA2Ny40OThjLS4xMi4zMDgtLjQ4LjQzOS0uODA0LjUwOWE2LjUxNCA2LjUxNCAwIDAxLTEuODUzLjEzMSAxLjA4IDEuMDggMCAwMS0uNDIzLS4wOTNjLS4yMzEtLjEyLS4zNTQtLjM3My0uNTMtLjU2NS0uMzgtLjQxMy0xLjAxMi0uNTM5LTEuMzU4LS45ODEtLjQzMy0uNTUzLS4yNTEtMS4zNTMuMDA2LTIuMDA1LjI1OC0uNjUyLjU3Ny0xLjM2LjM1NS0yLjAyNS0uMjYxLS43ODQtMS4xODgtMS4yMDYtMS40MzctMS45OTQuNzEtMy4xNzctMS4wMzMtNi40NjMtLjg4NC05LjcxNC4wMzUtLjc1OC4xNjctMS41MDkuMTctMi4yNjguMDA3LTEuOTUzLS44NDMtMy44NTMtLjcwMy01LjgwMS4zNTUtNC45NS0xLjMzOC05Ljg5Mi0yLjA1NS0xNC44MDNhOS42MzkgOS42MzkgMCAwMS0uMTUxLTIuMjI0Yy4xMDYtMS4yMjkuNjc5LTIuMzczIDEuMzY4LTMuMzk5LjQ5NC0uNzM0IDEuMDg4LTEuNDUzIDEuOTA2LTEuNzk3LjY3My0uMjgzIDEuNDI4LS4yODIgMi4xNTktLjI3NiAxLjgyNC4wMTQgMy42NDguMDI4IDUuNDcxLjA2MWExOC4wNjYgMTguMDY2IDAgMDEzLjY5OS4zMjljLjk4Ny4yMjUgMS45MS42ODMgMi45MTEuODI2eiIvPgogICAgPHBhdGggZmlsbD0iI0ExNjE2QSIgZD0iTTEyMy4zNjQgOTMuNTk0Yy0uMTc2LS44NjEuMTU4LTEuNzgyLS4xMDQtMi42MjItLjA5NC0uMzAyLS4zMjUtLjYxNy0uNjQzLS42MDgtLjMwOS4wMDgtLjUxOC4zMS0uNzkyLjQ1Mi0uNDQyLjIzLS45NzkuMDIxLTEuNDItLjIxLS40NDEtLjIzLS45MzMtLjQ5LTEuNDEyLS4zNTItLjA1Ni4yOTguMTQ2LjU4My4zNjYuNzkzLjI0NC4xODQuNDQ2LjQxNy41OTMuNjg0LjA3Mi4yOS4wOTkuNTg3LjA4MS44ODUuMDUuNjgyLjQ4NCAxLjI2OS45MTcgMS44LjY5OC44NTQgMS40NCAxLjY3MyAyLjIyMiAyLjQ1My0uMDAyLS4wMDEgMS4xODYtMS40NjUgMS4xNjMtMS43Mi0uMDIxLS4yNDItLjQyMS0uNDY3LS41NjYtLjY2MmEyLjI2MiAyLjI2MiAwIDAxLS40MDUtLjg5M3pNMTU4LjcyOCAxMTEuNjE4Yy4xMDYuMjc0LjE4NS41NTcuMjM3Ljg0NS4zMDYgMS40NzkuNDk5IDIuOTc4LjY5IDQuNDc2LjA1LjQuMTAxLjgwMS4xMTcgMS4yMDNhNS40OSA1LjQ5IDAgMDEtLjU3MyAyLjc2NyAzLjg4NSAzLjg4NSAwIDAxLTIuMDgyIDEuODY4Yy0uMjc5LjA5OC0uNjY3LjExNi0uNzg5LS4xNTJhLjU3LjU3IDAgMDEuMDAzLS4zODJjLjExLS4zOTkuMzMzLS43NTcuNDc4LTEuMTQ0YTMuMDc4IDMuMDc4IDAgMDAuMTAzLTEuODA5Yy0uMDU3LS4yMjktLjE3Ny0uNDg1LS40MS0uNTMxYTIuMDUyIDIuMDUyIDAgMDEtLjI3MiAxLjUzOS41NDIuNTQyIDAgMDEtLjMxOC4yNjguNDI5LjQyOSAwIDAxLS40NDctLjI4NyAxLjIzNyAxLjIzNyAwIDAxLS4wMzYtLjU3Yy4wNzUtLjk2MS4yMjItMS45MTUuNDQtMi44NTMuMjU5LTEuMDMxLjY3LTIuMDQ4LjY0NC0zLjExLS4wMjQtLjk2My0uNDA5LTEuOTA4LS4zMDEtMi44NjVhLjI4Ni4yODYgMCAwMS4wNTUtLjE2NC4zLjMgMCAwMS4xMi0uMDc0Yy4yNy0uMTExLjU0OC0uMjAzLjgzMS0uMjc0LjE2Ny0uMDQyLjczOC0uMjQuODk5LS4xNTEuMTI5LjA3MS4xNjkuNS4yMzQuNjQ1LjExNS4yNTcuMjY4LjQ5NS4zNzcuNzU1ek0xMzkuNjU1IDgzLjEwM2EzLjkzOSAzLjkzOSAwIDAwMy45NDYtMy45M2MwLTIuMTctMS43NjctMy45My0zLjk0Ni0zLjkzYTMuOTM5IDMuOTM5IDAgMDAtMy45NDcgMy45M2MwIDIuMTcgMS43NjcgMy45MyAzLjk0NyAzLjkzeiIvPgogICAgPHBhdGggZmlsbD0iI0ExNjE2QSIgZD0iTTE0My4xOTEgODIuMDE3YzAgLjI1LjAyLjUwMS4wNi43NDguMDU0LjI1LjEzMS40OTUuMjMuNzMxLjEzMi4zODUuMzE4Ljc0OC41NTMgMS4wOC4yMzguMzM1LjU5NS41NjYuOTk5LjY0OGEyOC41MDcgMjguNTA3IDAgMDEtOC41MzQgMi40NTZjLjQ2Ni0uMzA4Ljg1My0uNzIgMS4xMzItMS4yMDMuMTQ4LS4zMS4yNDktLjY0LjMtLjk4YTguMTkgOC4xOSAwIDAwLS4zNzEtNC4yMzljLS4wNDktLjEzNC0uMDk3LS4yOTgtLjAwNC0uNDA2YS4zOC4zOCAwIDAxLjE0LS4wOSA4LjgzMiA4LjgzMiAwIDAxMy43MS0uNjljLjMyNS4wMDIuNjUuMDE3Ljk3NS4wNC4xNzQuMDEzLjU1OS0uMDI0LjY5OC4xMDMuMTY1LjE1Mi4wODIuNjIzLjA4OC44M2wuMDI0Ljk3MnoiLz4KICAgIDxwYXRoIGZpbGw9IiNEMENERTEiIGQ9Ik0xNDUuMjggODQuODc3YTQuMjQgNC4yNCAwIDAwLTUuMDUyLTEuMjU0Yy0xLjg3OS44OTMtMi44MDQgMy4wMzgtNC40NTYgNC4yOTktLjM3Ni4yOC0uNzc2LjUyNi0xLjE5Ni43MzQtLjI0OC4xMzYtLjUxMy4yNC0uNzg4LjMxLS4zMDguMDY4LS42MzEuMDU5LS45MzguMTMyYTIuNDE2IDIuNDE2IDAgMDAtMS4zOTcgMS4wOCA3LjU1NCA3LjU1NCAwIDAxLS41MTQuNzg5Yy0uMTcyLjIwNC0uMzg3LjM2OS0uNTY5LjU2NC0uNjU3LjcwMy0uODM2IDEuNzEzLS45ODYgMi42NjJhMTIuNjU0IDEyLjY1NCAwIDAxLTEuNjc2IDEuNDcyIDIuMzggMi4zOCAwIDAxLS42MjIuMzQzYy0uNTc4LjE4Ny0xLjIxNi0uMDUtMS43MDgtLjQwNS0uNDkzLS4zNTQtLjg5NC0uODIyLTEuMzgtMS4xODVhNTAuNzQzIDUwLjc0MyAwIDAxLTEuMzg4IDEuODg2LjYxLjYxIDAgMDEtLjMxMS4yNTRjLS4wODkuMjk5LjEyNS42MDkuMjg2Ljg3N2wuODYgMS40NGE3LjIyMSA3LjIyMSAwIDAwMS4wMzkgMS40NWMuNDExLjQ0MS45NzMuNzEzIDEuNTc1Ljc2M2EzLjIgMy4yIDAgMDAxLjExMS0uMjEyYzEuNjM5LS41NDkgMy4xNDUtMS40MjYgNC43MDUtMi4xNzEuMjgzLS4xNjEuNTk5LS4yNTMuOTI0LS4yN2EuNzQ0Ljc0NCAwIDAxLjczMS41MjNjLjE3OS45LjM1NiAxLjc5Ny42MDIgMi42OC4yMzIuODM0LjQ0OCAxLjY3Mi42NDcgMi41MTQuMTMzLjUxNS4yMjggMS4wNC4yODQgMS41NjkuMDI2LjMuMDI4LjYwMi4wMzEuOTA0bC4wMzMgMy42NDNjLjAwNC4zOTMtLjIyMS42MzctLjM5NC45OWEyLjMyNyAyLjMyNyAwIDAwLS4xMTEgMS43NTFjLjA5Ny4yODQuMjQ5LjU0Ny4zNTcuODI3LjI2LjY3OC4yNSAxLjQyNS4yMzYgMi4xNTFsLS4wMzEgMS42NjJhLjM1OC4zNTggMCAwMC4wMzYuMjAxYy4xMDIuMTU4LjM0OC4wNjUuNTAzLS4wNDJsLjc4MS0uNTM5YzEuMDQ0LjE0NCAyLjA5OS4xOTQgMy4xNTMuMTUyIDIuOTk2LS4wNDMgNS45OTMuMDc2IDguOTgyLjI4NC45OTguMDcgMi4wMjkuMTQ1IDIuOTcyLS4xODcuNDc4LS4xNjguOTE5LS40MzYgMS40MDgtLjU3MS4yMDEtLjAzMi4zOTMtLjExLjU1OC0uMjI5LjI3NC0uMjUyLjIwMS0uNjk1LjA5LTEuMDQ5LS4wOTgtLjMxLS4yMDktLjYxNS0uMzMzLS45MTZhNS4zMTcgNS4zMTcgMCAwMS0uMzExLS44NTdjLS4xNS0uNjYzLS4wMDQtMS40My0uNDE5LTEuOTctLjkyOC0xLjIwOS0uMjcxLTMuMDY5LS42Ni00LjU0LS4xMjYtLjQ3Ni0uMzEzLS45MzUtLjQzMS0xLjQxMy0uMDc0LS4zLS4xMjEtLjYwNi0uMTY4LS45MTJhMTAuOTUyIDEwLjk1MiAwIDAxLS4xODEtMi4wMDRjLjAxMi0uMzM2LjA1NC0uNjcuMDk3LTEuMDA0bC4yOTUtMi4zMThjLjM2OC42ODUuNjI0IDEuNDI1Ljc1OCAyLjE5MS4yNjkgMS4xNDQuNTk5IDIuMjczLjk5IDMuMzgxLjIyMi42NjkuNDQ1IDEuMzM4LjY4NSAyIC4xNTIuMzc3LjI2OS43NjcuMzUgMS4xNjUuMDUzLjMyMS4wNTQuNjQ5LjA5Mi45NzJhNC40MiA0LjQyIDAgMDAuNzExIDEuOTQxYy4wNzEuMTM1LjE5LjI0LjMzMy4yOTRhLjY1LjY1IDAgMDAuMjkxLS4wMTIgMTEuNTA5IDExLjUwOSAwIDAwMi45OTYtMS4wMzIgMS4xOSAxLjE5IDAgMDAuNTA2LS4zOTRjLjI1NS0uNDEyLS4wMy0uOTI3LS4xNTQtMS4zOTUtLjEzMi0uNTAyLS4xMDEtMS4xMDYtLjQ5OC0xLjQ0My0xLjM4Mi0xLjE3MS0uNjk2LTMuNTQ5LTEuMzg4LTUuMjItLjEyMS0uMjkzLS4yNjMtLjU3OC0uMzY4LS44NzgtLjA4LS4yMjktLjEzOC0uNDY1LS4xOTYtLjcwMS0uNDgzLTEuOTQ2LTEtMy44ODMtMS41NTEtNS44MTItLjU3MS0yLS41MDktNC4wODItMS4yMjgtNi4wMzRhNi4zNTEgNi4zNTEgMCAwMC0uNTI3LTEuMTc3IDMuMTkgMy4xOSAwIDAwLS45NTMtLjk3OGMtMS4wNDMtLjY4Ny0yLjA5Ny0xLjI3Mi0zLjMyMi0xLjUyMS0xLjIyNi0uMjUtMi41NTItLjIxLTMuODAzLS4yMDV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMkYyRTQxIiBkPSJNMTM2LjA2OCA4MC4xMzVjLS41My0uMjg1LS4zOS0xLjA1Ny0uNDgxLTEuNjUtLjE4NS0xLjIyMi0xLjU3LTEuOTQ2LTEuODk2LTMuMTM3LjM3NC4wNDUuNzUzLS4wMDggMS4wOTktLjE1NWExLjY2NCAxLjY2NCAwIDAwLS4yMjEtMS4xNDVjMS4xMzktLjQ2IDIuMDYxLTEuMzY1IDMuMjE4LTEuNzggMS40NTUtLjUyMyAzLjA3NS0uMjAyIDQuNTQyLjI4My43MzMuMjQzIDEuNDk1LjU1NyAxLjkzNyAxLjE4Ny40ODcuNjkuNDc5IDEuNi40NTMgMi40NDQtLjA0MSAxLjMyMy0uMDkzIDIuNjk0LS42ODUgMy44OC0uNzUzIDEuNTA5LTIuODg1IDIuOTA3LTQuNjQ3IDIuNDk4LS43MzItLjE3LS45NDgtLjYyOC0xLjI1Ny0xLjI2Mi0uMTkyLS4zOTUtLjI2NC0uODUzLS42OTctMS4wNTgtLjQyMy0uMjAxLS45MzUuMTI1LTEuMzY1LS4xMDV6Ii8+CiAgICA8ZyBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMSI+CiAgICAgIDxwYXRoIGQ9Ik0xNTIuMDcyIDEwOC4zMTZjLjAwNS4xMDQuMDA4LjIwOS4wMDkuMzE1YTguMTYzIDguMTYzIDAgMDEtLjAwOS0uMzE1ek0xMzQuOTc4IDExMi4yNjRjLjI2LjY3OC4yNSAxLjQyNS4yMzcgMi4xNWwtLjAxMS41NjlhMy44NzQgMy44NzQgMCAwMC0uMjI2LTEuMTQ3Yy0uMTA3LS4yOC0uMjU5LS41NDMtLjM1Ni0uODI3YTIuMzIgMi4zMiAwIDAxLjAxNy0xLjUyOGMuMDk3LjI2Ny4yMzcuNTE4LjMzOS43ODN6IiBvcGFjaXR5PSIuMSIvPgogICAgPC9nPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzNC43OTEgNzQuNjIxbC0uMDA0LjAwMmExLjY1IDEuNjUgMCAwMC0uMjE4LS41NzUgNS4xMiA1LjEyIDAgMDAuMTk5LS4wODZjLjA1Mi4yMTYuMDU5LjQ0LjAyMy42NTl6IiBvcGFjaXR5PSIuMSIvPgogICAgPHBhdGggZmlsbD0iI0ZGNjU4NCIgZD0iTTEwLjQyIDY2LjYwOWwtLjkzLS44MzZjLTMuMzA0LTMuMDItNS40ODUtNC45ODEtNS40ODUtNy40MjNhMy40NjIgMy40NjIgMCAwMTEuMDE0LTIuNTEgMy40OSAzLjQ5IDAgMDEyLjUxNC0xLjAyNSAzLjgwOCAzLjgwOCAwIDAxMi44ODcgMS4zNSAzLjc5MiAzLjc5MiAwIDAxMi44ODYtMS4zNSAzLjUwMiAzLjUwMiAwIDAxMi41MTQgMS4wMjUgMy40NzUgMy40NzUgMCAwMTEuMDE0IDIuNTFjMCAyLjQ0Mi0yLjE4IDQuNDAyLTUuNDg0IDcuNDIzbC0uOTMuODM2eiIvPgogICAgPHBhdGggc3Ryb2tlPSIjM0YzRDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyLjA3IDY0LjQ5NmwtLjkzLS44MzVjLTMuMzAzLTMuMDItNS40ODQtNC45ODEtNS40ODQtNy40MjNhMy40NjIgMy40NjIgMCAwMTEuMDE0LTIuNTEgMy40OSAzLjQ5IDAgMDEyLjUxNC0xLjAyNSAzLjgwOCAzLjgwOCAwIDAxMi44ODYgMS4zNSAzLjc5MiAzLjc5MiAwIDAxMi44ODctMS4zNSAzLjUwMiAzLjUwMiAwIDAxMi41MTQgMS4wMjUgMy40NzQgMy40NzQgMCAwMTEuMDE0IDIuNTFjMCAyLjQ0Mi0yLjE4MSA0LjQwMi01LjQ4NSA3LjQyM2wtLjkzLjgzNXoiLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyMzF2MTY1SDB6Ii8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./client/marketing/overview/welcome-card/index.js":
/*!*********************************************************!*\
  !*** ./client/marketing/overview/welcome-card/index.js ***!
  \*********************************************************/
/*! exports provided: WelcomeCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeCard", function() { return WelcomeCard; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gridicons */ "./node_modules/gridicons/dist/index.js");
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gridicons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./client/marketing/overview/welcome-card/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var _images_welcome_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/welcome.svg */ "./client/marketing/overview/welcome-card/images/welcome.svg");
/* harmony import */ var _images_welcome_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_welcome_svg__WEBPACK_IMPORTED_MODULE_11__);


/**
 * External dependencies
 */






/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */





var WelcomeCard = function WelcomeCard(_ref) {
  var isHidden = _ref.isHidden,
      updateOptions = _ref.updateOptions;

  var hide = function hide() {
    updateOptions({
      woocommerce_marketing_overview_welcome_hidden: 'yes'
    });
    Object(lib_tracks__WEBPACK_IMPORTED_MODULE_10__["recordEvent"])('marketing_intro_close', {});
  };

  if (isHidden) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "woocommerce-marketing-overview-welcome-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hide', 'woocommerce-admin'),
    onClick: hide,
    className: "woocommerce-marketing-overview-welcome-card__hide-button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(gridicons__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: "cross"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _images_welcome_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: ""
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grow your customer base and increase your sales with marketing tools built for WooCommerce', 'woocommerce-admin')));
};

WelcomeCard.propTypes = {
  /**
   * Whether the card is hidden.
   */
  isHidden: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,

  /**
   * updateOptions function.
   */
  updateOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
}; // named export

 // default export

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      isOptionsUpdating = _select.isOptionsUpdating;

  var isUpdateRequesting = isOptionsUpdating();
  return {
    isHidden: getOption('woocommerce_marketing_overview_welcome_hidden') === 'yes' || isUpdateRequesting
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch.updateOptions;

  return {
    updateOptions: updateOptions
  };
}))(WelcomeCard));

/***/ }),

/***/ "./client/marketing/overview/welcome-card/style.scss":
/*!***********************************************************!*\
  !*** ./client/marketing/overview/welcome-card/style.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/marketing/overview/welcome-card/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/react-transition-group/esm/index.js'");

/***/ })

}]);
//# sourceMappingURL=marketing-overview.eb0ad14f358032dc7570.min.js.map