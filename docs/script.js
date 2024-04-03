/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/About.js":
/*!*************************!*\
  !*** ./src/js/About.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   About: () => (/* binding */ About)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var About = /*#__PURE__*/function () {
  function About() {
    _classCallCheck(this, About);
    this.title = 'About Us';
    this.text = 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase)';
    this.employee = [{
      name: 'Kathy Rosenberg',
      position: 'Product Manager',
      mail: 'kathyr@gmail.com',
      avatar: 'https://i.ibb.co/zNTRJcG/avatar1.png'
    }, {
      name: 'Alexandra Boyarskaya',
      position: 'Support Marketing Specialist',
      mail: 'alexandrab@gmail.com',
      avatar: 'https://i.ibb.co/3mW9BKs/avatar2.png'
    }, {
      name: 'Melani Amini',
      position: 'Photographer',
      mail: 'melania@gmail.com',
      avatar: 'https://i.ibb.co/P974L6T/avatar3.png'
    }];
  }
  return _createClass(About, [{
    key: "generateAbout",
    value: function generateAbout() {
      var template = '';
      var about = document.createElement('section');
      about.className = 'about';
      about.id = 'about';
      var employeeContainer = '';
      this.employee.forEach(function (item) {
        employeeContainer += "\n        <div class=\"employee block-shadowed\">\n            <div class=\"employee__content\">\n                <h5>".concat(item.name, "</h5>\n                <p class=\"employee__title\">").concat(item.position, "</p>\n                <a class=\"employee__contact\" href=\"").concat(item.mail, "\">").concat(item.mail, "</a>\n            </div>\n            <img\n            class=\"employee__photo\"\n            src=\"").concat(item.avatar, "\"\n            alt=\"employee\"\n            />\n        </div>");
      });
      template += "\n    <section class=\"about\" id=\"about\">\n        <div class=\"container\">\n            <h2>".concat(this.title, "</h2>\n            <p class=\"about__text\">\n                ").concat(this.text, "\n            </p>\n            <div class=\"layout-3-column employee-container\">\n                ").concat(employeeContainer, "\n            </div>\n        </div>\n    </section>\n  ");
      about.innerHTML = template;
      return about;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Contact.js":
/*!***************************!*\
  !*** ./src/js/Contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contact: () => (/* binding */ Contact)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Contact = /*#__PURE__*/function () {
  function Contact() {
    _classCallCheck(this, Contact);
    this.title = 'Contact Us';
    this.text = 'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase)';
    this.phone = '+375 (22) 345-00-99';
    this.mail = 'emailname@gmail.com';
  }
  return _createClass(Contact, [{
    key: "generateContact",
    value: function generateContact() {
      var template = '';
      var contact = document.createElement('section');
      contact.className = 'contact';
      contact.id = 'contact';
      template += "\n    <div class=\"container\">\n          <h2>".concat(this.title, "</h2>\n          <div class=\"layout-2-column contact-container\">\n            <div class=\"contact__content\">\n              <p>\n                ").concat(this.text, "\n              </p>\n              <div class=\"contact__link\">\n                <div class=\"icon-circle icon-circle__white\">\n                  <span class=\"ico icon_pnohe\"></span>\n                </div>\n                <a href=\"tel:+375 (22) 345-00-99\">+375 (22) 345-00-99</a>\n              </div>\n              <div class=\"contact__link\">\n                <div class=\"icon-circle icon-circle__white\">\n                  <span class=\"ico icon_email\"></span>\n                </div>\n                <a href=\"mailto:emailname@gmail.com\">emailname@gmail.com</a>\n              </div>\n            </div>\n            <div class=\"contact__form\">\n              <form action=\"\" method=\"post\">\n                <div class=\"layout-2-column contact__line\">\n                  <input type=\"text\" placeholder=\"Your name\" name=\"name\" />\n                  <input type=\"text\" placeholder=\"Your email\" name=\"email\" />\n                </div>\n                <textarea\n                  class=\"contact__line\"\n                  name=\"question\"\n                  placeholder=\"What do you want to ask?\"\n                  id=\"\"\n                  cols=\"30\"\n                  rows=\"10\"\n                ></textarea>\n                <div class=\"contact__button\">\n                  <button type=\"submit\" class=\"button button_colored\">\n                    Send\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n    ");
      contact.innerHTML = template;
      return contact;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Footer.js":
/*!**************************!*\
  !*** ./src/js/Footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
    this.logo = 'https://svgshare.com/i/14qW.svg';
    this.navigation = [{
      title: 'Quick Links',
      links: [{
        name: 'About Us',
        href: ''
      }, {
        name: 'Blog',
        href: ''
      }, {
        name: 'Contact',
        href: ''
      }, {
        name: 'FAQ',
        href: ''
      }]
    }, {
      title: 'Legal Stuff',
      links: [{
        name: 'Disclaimer',
        href: ''
      }, {
        name: 'Financing',
        href: ''
      }, {
        name: 'Privacy Policy',
        href: ''
      }, {
        name: 'Terms of Service',
        href: ''
      }]
    }, {
      title: 'Quick Links',
      links: [{
        name: 'About Us',
        href: ''
      }, {
        name: 'Blog',
        href: ''
      }, {
        name: 'Contact',
        href: ''
      }, {
        name: 'FAQ',
        href: ''
      }]
    }];
  }
  return _createClass(Footer, [{
    key: "generateFooter",
    value: function generateFooter() {
      var template = '';
      var footer = document.createElement('footer');
      footer.className = 'footer';
      var navigationContent = '';
      this.navigation.forEach(function (item) {
        var linksContent = '';
        item.links.forEach(function (link) {
          linksContent += "<li><a href=\"".concat(link.href, "\">").concat(link.name, "</a></li>");
        });
        navigationContent += "\n        <div class=\"footer-navigation__column\">\n            <h4 class=\"footer-navigation__title\">".concat(item.title, "</h4>\n                <ul class=\"footer-navigation__links\">\n                    ").concat(linksContent, "\n                </ul>\n        </div>");
      });
      template += "\n    <div class=\"container\">\n        <a href=\"#\" class=\"logo\">\n            <img src=\"".concat(this.logo, "\" alt=\"Logo\" />\n        </a>\n        <div class=\"footer-navigation layout-3-column\">\n            ").concat(navigationContent, "\n        </div>\n    </div>");
      footer.innerHTML = template;
      return footer;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Header.js":
/*!**************************!*\
  !*** ./src/js/Header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
    this.logo = 'https://svgshare.com/i/14qW.svg';
    this.menuItem = [{
      name: 'Home',
      link: 'index.html'
    }, {
      name: 'Strategies',
      link: '#strategies'
    }, {
      name: 'About',
      link: '#about'
    }, {
      name: 'Contacts',
      link: '#contact'
    }];
  }
  return _createClass(Header, [{
    key: "generateHeader",
    value: function generateHeader() {
      var template = '';
      var header = document.createElement('header');
      header.className = 'header';
      var navigation = '';
      this.menuItem.forEach(function (item) {
        navigation += " <li class=\"navigation__link\"><a class=\"link\" href=\"".concat(item.link, "\">").concat(item.name, "</a></li>");
      });
      template += "\n    <div class=\"container\">\n        <div class=\"header__logo-line\">\n            <div class=\"hamburger\">\n                <span class=\"hamburger__line\"></span>\n            </div>\n            <a href=\"#\" class=\"logo\">\n                <img class=\"logo-img\" alt=\"Logo company\" src=\"".concat(this.logo, "\">\n            </a>\n        </div>\n        <nav class=\"header__navigation header__navigation_hidden\">\n            <ul class=\"navigation\">\n                ").concat(navigation, "\n            </ul>\n        </nav>\n        <div class=\"header__buttons\">\n            <button class=\"button button_bordered\">Sign In</button>\n            <button class=\"button button_colored\">Sign Up</button>\n        </div>\n    </div>");
      header.innerHTML = template;
      return header;
    }
  }, {
    key: "queryMenu",
    value: function queryMenu() {
      var hamburgerMenu = document.querySelector('.hamburger');
      var headerNav = document.querySelector('.header__navigation');
      var headerLink = document.querySelectorAll('.link');
      this.navigationLink(headerLink, headerNav, hamburgerMenu);
      this.toggleMenu(hamburgerMenu, headerNav, hamburgerMenu);
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu(clickItem, toggleItem, hamburgerIcon) {
      clickItem.addEventListener('click', function () {
        toggleItem.classList.toggle('header__navigation_hidden');
        hamburgerIcon.classList.toggle('hamburger_open');
      });
    }
  }, {
    key: "navigationLink",
    value: function navigationLink(headerLink, headerNav, hamburgerMenu) {
      var _this = this;
      headerLink.forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var scrollItemId = link.getAttribute('href');
          if (scrollItemId[0] === '#') {
            document.querySelector(scrollItemId).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
        _this.toggleMenu(link, headerNav, hamburgerMenu);
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Modal = /*#__PURE__*/function () {
  function Modal(classes) {
    _classCallCheck(this, Modal);
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }
  return _createClass(Modal, [{
    key: "buildModal",
    value: function buildModal(content) {
      //Overlay
      this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');

      //Modal
      this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

      //Modal content
      this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

      //Close Button
      this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
      this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>';
      this.setContent(content);
      this.appendModalElements();

      //Bind events
      this.bindEvents();

      //Open Modal
      this.openModal();
    }
  }, {
    key: "createDomNode",
    value: function createDomNode(node, element) {
      var _node$classList;
      node = document.createElement(element);
      for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        classes[_key - 2] = arguments[_key];
      }
      (_node$classList = node.classList).add.apply(_node$classList, classes);
      return node;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      if (typeof content === 'string') {
        this.modalContent.innerHTML = content;
      } else {
        this.modalContent.innerHTML = '';
        this.modalContent.appendChild(content);
      }
    }
  }, {
    key: "appendModalElements",
    value: function appendModalElements() {
      this.modal.append(this.modalCloseBtn);
      this.modal.append(this.modalContent);
      this.overlay.append(this.modal);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.overlay.addEventListener('click', this.closeModal);
    }
  }, {
    key: "openModal",
    value: function openModal() {
      document.body.append(this.overlay);
    }
  }, {
    key: "closeModal",
    value: function closeModal(event) {
      var classes = event.target.classList;
      if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
        document.querySelector('.overlay').remove();
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Promo.js":
/*!*************************!*\
  !*** ./src/js/Promo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Promo: () => (/* binding */ Promo)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Promo = /*#__PURE__*/function () {
  function Promo() {
    _classCallCheck(this, Promo);
    this.title = 'The Design Thinking superpowers';
    this.text = 'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.';
    this.img = 'https://svgshare.com/i/14w4.svg';
  }
  return _createClass(Promo, [{
    key: "generatePromo",
    value: function generatePromo() {
      var template = '';
      var promo = document.createElement('section');
      promo.className = 'promo';
      template += "\n    <div class=\"container\">\n        <div class=\"promo__content\">\n        <h1 class=\"promo__title\">".concat(this.title, "</h1>\n        <p class=\"promo__text\">\n            ").concat(this.text, "\n        </p>\n        <div class=\"promo__buttons\">\n            <button class=\"button button_colored\">Get started</button>\n            <a href=\"#\" class=\"link-button\">\n            <span class=\"ico ico_play\"></span>\n            <span class=\"link-button__text\">Watch the Video</span>\n            </a>\n        </div>\n        </div>\n        <img\n        class=\"promo__images\"\n        src=\"").concat(this.img, "\"\n        alt=\"The Design Thinking superpowers\"\n        />\n    </div>\n    ");
      promo.innerHTML = template;
      return promo;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Strategies.js":
/*!******************************!*\
  !*** ./src/js/Strategies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategies: () => (/* binding */ Strategies)
/* harmony export */ });
/* harmony import */ var _Strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Strategy */ "./src/js/Strategy.js");
/* harmony import */ var _StrategyModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrategyModal */ "./src/js/StrategyModal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Strategies = /*#__PURE__*/function () {
  function Strategies(_strategies) {
    var _this = this;
    _classCallCheck(this, Strategies);
    _defineProperty(this, "addTagsClickHandler", function () {
      document.querySelector('.strategies__tags').addEventListener('click', function (event) {
        if (event.target.classList.contains('tag')) {
          var clickedTag = event.target;
          _this.removeSelectedTags();
          _this.selectClickedTag(clickedTag);
          if (clickedTag.innerText === 'All') {
            _this.showAllStrategies();
          } else {
            _this.filterStrategyBySelectedTag(clickedTag.innerText);
          }
        }
      });
    });
    _defineProperty(this, "removeSelectedTags", function () {
      var tags = document.querySelectorAll('.strategies__tags .tag');
      tags.forEach(function (tag) {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
      });
    });
    _defineProperty(this, "selectClickedTag", function (clickedTag) {
      clickedTag.classList.add('tag_selected');
      clickedTag.classList.remove('tag_bordered');
    });
    _defineProperty(this, "showAllStrategies", function () {
      var strategies = document.querySelectorAll('.strategy-container .strategy');
      strategies.forEach(function (strategy) {
        strategy.classList.remove('strategy_hidden');
      });
    });
    _defineProperty(this, "filterStrategyBySelectedTag", function (selectedTag) {
      var strategies = document.querySelectorAll('.strategy-container .strategy');
      strategies.forEach(function (strategy) {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(function (tag) {
          if (tag.innerText === selectedTag) {
            strategy.classList.remove('strategy_hidden');
          }
        });
      });
    });
    this.title = 'Marketing Strategies';
    this.text = 'Join 40,000+ other marketers and get proven strategies on email marketing';
    this.strategies = _strategies;
  }
  return _createClass(Strategies, [{
    key: "generateStrategiesComponent",
    value: function generateStrategiesComponent() {
      var template = '';
      var strategies = document.createElement('section');
      strategies.className = 'strategies';
      strategies.id = 'strategies';
      template += "\n        <div class=\"container\">\n          <h2>Marketing Strategies</h2>\n          <p class=\"strategies__description\">\n            Join 40,000+ other marketers and get proven strategies on email\n            marketing\n          </p>\n          <div class=\"strategies__tags tags\">\n            <div class=\"tag tag_selected\">All</div>\n            <div class=\"tag tag_bordered\">Art</div>\n            <div class=\"tag tag_bordered\">Culture</div>\n            <div class=\"tag tag_bordered\">Design</div>\n          </div>\n          <div class=\"layout-3-column strategy-container\">".concat(this.generateStrategiesTemplate(), "</div>\n        </div>");
      strategies.innerHTML = template;
      return strategies;
    }
  }, {
    key: "generateStrategiesTemplate",
    value: function generateStrategiesTemplate() {
      var strategiesHTML = '';
      this.generateStrategies().forEach(function (strategy) {
        strategiesHTML += strategy.generateStrategy();
      });
      return strategiesHTML;
    }
  }, {
    key: "generateStrategies",
    value: function generateStrategies() {
      var strategyItems = [];
      this.strategies.forEach(function (strategy) {
        strategyItems.push(new _Strategy__WEBPACK_IMPORTED_MODULE_0__.Strategy(strategy));
      });
      return strategyItems;
    }
  }, {
    key: "addStrategyClickHandler",
    value: function addStrategyClickHandler() {
      var _this2 = this;
      document.querySelector('.strategy-container').addEventListener('click', function (event) {
        if (event.target.closest('.strategy')) {
          var clickedStrategyId = event.target.closest('.strategy').getAttribute('data-id');
          var clickedStrategyDate = _this2.getClickDate(clickedStrategyId);
          _this2.renderStrategyModalWindow(clickedStrategyDate);
        }
      });
    }
  }, {
    key: "getClickDate",
    value: function getClickDate(id) {
      return this.strategies.find(function (strategy) {
        return strategy.id == id;
      });
    }
  }, {
    key: "renderStrategyModalWindow",
    value: function renderStrategyModalWindow(strategy) {
      var modal = new _StrategyModal__WEBPACK_IMPORTED_MODULE_1__.StrategyModal('strategy-modal', strategy);
      modal.renderModal();
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Strategy.js":
/*!****************************!*\
  !*** ./src/js/Strategy.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
var _excluded = ["id", "title", "urlToImage", "tags"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Strategy = /*#__PURE__*/function () {
  function Strategy(_ref) {
    var id = _ref.id,
      title = _ref.title,
      urlToImage = _ref.urlToImage,
      tags = _ref.tags,
      rest = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, Strategy);
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
  }

  //strategy generator
  return _createClass(Strategy, [{
    key: "generateStrategy",
    value: function generateStrategy() {
      var template = '';
      template += "<div class=\"strategy block-shadowed\" data-id=\"".concat(this.id, "\">");
      this.urlToImage && (template += " <img class=\"strategy__img\" src=\"".concat(this.urlToImage, "\" alt=\"strategy\" />"));
      if (this.title || this.tags) {
        template += "<div class=\"strategy__content\">";
        this.title && (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
        if (this.tags) {
          template += "<div class=\"strategy__tags tags\">";
          this.tags.map(function (tag) {
            template += "<div class=\"tag tag_colored\">".concat(tag, "</div>");
          });
          template += "</div>";
        }
        template += "</div>";
      }
      template += "</div>";
      return template;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/StrategyModal.js":
/*!*********************************!*\
  !*** ./src/js/StrategyModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyModal: () => (/* binding */ StrategyModal)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/js/Modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StrategyModal = /*#__PURE__*/function (_Modal) {
  function StrategyModal(classes, _ref) {
    var _this;
    var id = _ref.id,
      title = _ref.title,
      urlToImage = _ref.urlToImage,
      tags = _ref.tags,
      content = _ref.content,
      date = _ref.date;
    _classCallCheck(this, StrategyModal);
    _this = _callSuper(this, StrategyModal, [classes]);
    _this.id = id;
    _this.title = title;
    _this.urlToImage = urlToImage;
    _this.content = content;
    _this.date = date;
    return _this;
  }
  _inherits(StrategyModal, _Modal);
  return _createClass(StrategyModal, [{
    key: "generateContent",
    value: function generateContent() {
      var template = '';
      var strategy = document.createElement('div');
      strategy.className = 'strategy-modal__content';
      this.urlToImage && (template += " <img src=\"".concat(this.urlToImage, "\" alt=\"strategy\" />"));
      if (this.title || this.tags || this.content || this.date) {
        template += "<div class=\"strategy__content\">";
        this.date && (template += "<p class=\"strategy__date\">".concat(this.date, "</p>"));
        this.title && (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
        this.content && (template += "<p class=\"strategy__text\">".concat(this.content, "</p>"));
        if (this.tags) {
          template += "<div class=\"strategy__tags tags\">";
          this.tags.map(function (tag) {
            template += "<div class=\"tag tag_colored\">".concat(tag, "</div>");
          });
          template += "</div>";
        }
        template += "</div>";
      }
      strategy.innerHTML = template;
      return strategy;
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      var content = this.generateContent();
      _get(_getPrototypeOf(StrategyModal.prototype), "buildModal", this).call(this, content);
    }
  }]);
}(_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal);

/***/ }),

/***/ "./src/js/Tool.js":
/*!************************!*\
  !*** ./src/js/Tool.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tool: () => (/* binding */ Tool)
/* harmony export */ });
var _excluded = ["iconClass", "iconColor", "title", "text"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tool = /*#__PURE__*/function () {
  function Tool(_ref) {
    var iconClass = _ref.iconClass,
      iconColor = _ref.iconColor,
      title = _ref.title,
      text = _ref.text,
      rest = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, Tool);
    this.iconClass = iconClass;
    this.iconColor = iconColor;
    this.title = title;
    this.text = text;
  }
  return _createClass(Tool, [{
    key: "generateTool",
    value: function generateTool() {
      var template = '';
      if (this.iconClass || this.iconColor) {
        template += "<div class=\"tool\">";
        template += "<div class=\"tool__icon\">";
        template += "<div class=\"icon-square ".concat(this.iconColor, "\">");
        template += "<span class=\"ico ".concat(this.iconClass, "\"></span>");
        template += "</div>";
        template += "</div>";
      }
      this.title && (template += "<h4 class=\"tool__title\">".concat(this.title, "</h4>"));
      this.text && (template += "<p class=\"tool__text\">".concat(this.text, "</p>"));
      template += "</div>";
      return template;
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Tools.js":
/*!*************************!*\
  !*** ./src/js/Tools.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tools: () => (/* binding */ Tools)
/* harmony export */ });
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool */ "./src/js/Tool.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Tools = /*#__PURE__*/function () {
  function Tools(tools) {
    _classCallCheck(this, Tools);
    this.title = 'We design tools to unveil your superpowers';
    this.tools = tools;
  }
  return _createClass(Tools, [{
    key: "generateToolsComponent",
    value: function generateToolsComponent() {
      var template = '';
      var tools = document.createElement('section');
      tools.className = 'tools';
      template += "\n    <div class=\"container\">\n        <h2 class=\"tools__title\">\n            ".concat(this.title, "\n        </h2>\n        <div class=\"layout-4-column tool-container\">").concat(this.generateToolsTemplate(), "</div>\n        <div class=\"tools__button\">\n            <button class=\"button button_colored\">Sign Up now</button>\n        </div>\n    </div>\n    ");
      tools.innerHTML = template;
      return tools;
    }
  }, {
    key: "generateToolsTemplate",
    value: function generateToolsTemplate() {
      var toolsHTML = '';
      this.generateTools().forEach(function (tool) {
        toolsHTML += tool.generateTool();
      });
      return toolsHTML;
    }
  }, {
    key: "generateTools",
    value: function generateTools() {
      var toolsItems = [];
      this.tools.forEach(function (tool) {
        toolsItems.push(new _Tool__WEBPACK_IMPORTED_MODULE_0__.Tool(tool));
      });
      return toolsItems;
    }
  }]);
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Header */ "./src/js/Header.js");
/* harmony import */ var _js_Promo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Promo */ "./src/js/Promo.js");
/* harmony import */ var _js_Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Tools */ "./src/js/Tools.js");
/* harmony import */ var _js_Strategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Strategies */ "./src/js/Strategies.js");
/* harmony import */ var _js_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/About */ "./src/js/About.js");
/* harmony import */ var _js_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Contact */ "./src/js/Contact.js");
/* harmony import */ var _js_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Footer */ "./src/js/Footer.js");
/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/Modal */ "./src/js/Modal.js");








var STRATEGY = [];
var TOOLS = [];
var MAIN = document.querySelector('main');

// Получение data
fetch('data.json').then(function (res) {
  return res.json();
}).then(function (body) {
  body.forEach(function (data) {
    data.name === 'Strategy' ? STRATEGY = data.value : '';
    data.name === 'Tools' ? TOOLS = data.value : '';
  });
})["catch"](function (err) {
  return console.error('Ошибка:', err);
});
window.onload = function () {
  renderHeaderToDom();
  renderPromoToDom();
  if (TOOLS) {
    renderToolsToDom();
  }
  if (STRATEGY) {
    renderStrategiesToDom();
  }
  renderAboutToDom();
  renderContactToDom();
  renderFooterToDom();
};

/* Header */
var renderHeaderToDom = function renderHeaderToDom() {
  var header = new _js_Header__WEBPACK_IMPORTED_MODULE_0__.Header();
  document.body.prepend(header.generateHeader());
  header.queryMenu();
};

/* Promo */
var renderPromoToDom = function renderPromoToDom() {
  var promo = new _js_Promo__WEBPACK_IMPORTED_MODULE_1__.Promo();
  MAIN.append(promo.generatePromo());
};

/* Tools */

var renderToolsToDom = function renderToolsToDom() {
  var tools = new _js_Tools__WEBPACK_IMPORTED_MODULE_2__.Tools(TOOLS);
  MAIN.append(tools.generateToolsComponent());
};

/* Strategy */

var renderStrategiesToDom = function renderStrategiesToDom() {
  var strategies = new _js_Strategies__WEBPACK_IMPORTED_MODULE_3__.Strategies(STRATEGY);
  MAIN.append(strategies.generateStrategiesComponent());
  strategies.addStrategyClickHandler();
  strategies.addTagsClickHandler();
};

/* About */

var renderAboutToDom = function renderAboutToDom() {
  var about = new _js_About__WEBPACK_IMPORTED_MODULE_4__.About();
  MAIN.append(about.generateAbout());
};

/* About */

var renderContactToDom = function renderContactToDom() {
  var contact = new _js_Contact__WEBPACK_IMPORTED_MODULE_5__.Contact();
  MAIN.append(contact.generateContact());
};

/* Footer */

var renderFooterToDom = function renderFooterToDom() {
  var footer = new _js_Footer__WEBPACK_IMPORTED_MODULE_6__.Footer();
  MAIN.append(footer.generateFooter());
};

/* Modal from Tools 

const addToolsClickHandler = () => {
  document
    .querySelector('.tools__button .button')
    .addEventListener('click', () => {
      generateToolsModal();
    });
};

const generateToolsModal = () => {
  renderModalWindow('test');
};

const renderModalWindow = content => {
  let modal = new Modal('tools-modal');
  modal.buildModal(content);
};*/
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map