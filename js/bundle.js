(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//= _jquery.js
//= _slick.js
//= _scripts.js
document.addEventListener("DOMContentLoaded", function () {
  var langChosen = document.querySelector("#langChosen");
  var langDropdown = document.querySelector(".controls__dropdown");
  var langItems = document.querySelectorAll("#controlsLang");
  langChosen.addEventListener("click", function (e) {
    e.preventDefault();
    langDropdown.classList.toggle("controls__dropdown_active");
  });
  langDropdown.addEventListener("mouseover", function () {
    langDropdown.classList.add("controls__dropdown_active");
    console.log("asdasd");
  });
  langDropdown.addEventListener("mouseleave", function () {
    langDropdown.classList.remove("controls__dropdown_active");
    console.log("zzzz");
  });

  _toConsumableArray(langItems).forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var oldLang = langChosen.dataset.lang;
      var newLang = el.dataset.lang;
      langChosen.dataset.lang = newLang;
      langChosen.innerHTML = "".concat(newLang.toUpperCase(), "  <svg class=\"controls__lang-icon\">\n                    <use xlink:href=\"#header_arrow\"></use>\n                </svg>");
      el.dataset.lang = oldLang;
      el.innerText = oldLang.toUpperCase();
      langDropdown.classList.remove("controls__dropdown_active");
    });
  }); // NAV


  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav_header");
  burger.addEventListener("click", function () {
    burger.classList.toggle("burger_closed");
    nav.classList.toggle("nav_header_active");
  });

  var anchors = _toConsumableArray(document.querySelectorAll(".nav__link"));

  var arrowDown = document.querySelector(".scrollDown");
  anchors.push(arrowDown);
  console.log(anchors);

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop2 = function _loop2() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        nav.classList.remove("nav_header_active");
        burger.classList.remove("burger_closed");
        var blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop2();
    } /////// SLIDER

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var sliderItems = _toConsumableArray(document.querySelectorAll(".slider__img"));

  var sliderDotsContainer = document.querySelector(".slider__dots");
  var sliderProgress = document.querySelector(".slider__progress"); ////// SLIDES POSITION

  var left = 0;
  var zIndex = 100;
  var scale = 1;
  sliderItems.forEach(function (el) {
    el.style.left = "".concat(left, "%");
    el.style.zIndex = zIndex;
    el.style.transform = "scale(".concat(scale.toFixed(1), ")");
    left += 8;
    zIndex -= 1;
    scale -= 0.1;
  }); ////INSERT DOTS

  for (var i = 0; i < sliderItems.length; i++) {
    var dot = document.createElement("div");
    dot.classList.add("slider__dot");
    dot.dataset.number = i;
    sliderItems[i].dataset.number = i;
    sliderDotsContainer.append(dot);
  }

  var sliderDots = _toConsumableArray(document.querySelectorAll(".slider__dot"));

  sliderDots[0].classList.add("slider__dot_active");

  function setProgressBarWidth() {
    var progressPartWidth = sliderDotsContainer.offsetWidth / (sliderItems.length - 1) / 2;
    sliderProgress.style.width = progressPartWidth + "px";

    for (var _i = 0; _i < sliderDots.length; _i++) {
      sliderDots[_i].addEventListener("click", function (e) {
        var dot = this;

        if (dot.dataset.number < sliderDots.length - 1) {
          sliderProgress.style.width = progressPartWidth * (+dot.dataset.number + +dot.dataset.number + 1) + "px";
        } else {
          sliderProgress.style.width = progressPartWidth * (+dot.dataset.number + +dot.dataset.number + 1) - progressPartWidth + "px";
        }
      });

      if (sliderDots[_i].classList.contains("slider__dot_active")) {
        if (sliderDots[_i].dataset.number < sliderDots.length - 1) {
          sliderProgress.style.width = progressPartWidth * (+sliderDots[_i].dataset.number + +sliderDots[_i].dataset.number + 1) + "px";
        } else {
          sliderProgress.style.width = progressPartWidth * (+sliderDots[_i].dataset.number + +sliderDots[_i].dataset.number + 1) - progressPartWidth + "px";
        }
      }
    }
  }

  function setActiveDots() {
    for (var _i2 = 0; _i2 < sliderDots.length; _i2++) {
      if (sliderDots[_i2].classList.contains("slider__dot_active")) {
        for (var k = 0; k <= +sliderDots[_i2].dataset.number; k++) {
          sliderDots[k].classList.add("slider__dot_active");
        }
      }
    }
  }

  setActiveDots();
  setProgressBarWidth();
  var sliderArrow = document.querySelector(".slider__arrowRight");
  window.addEventListener("resize", function () {
    setProgressBarWidth();
    setActiveDots();
  });

  var _loop = function _loop(_i3) {
    sliderDots[_i3].addEventListener("click", function (e) {
      var dot = this;
      dot.classList.add("slider__dot_active");

      for (var j = 0; j < sliderDots.length; j++) {
        if (sliderDots[j] != dot) {
          sliderDots[j].classList.remove("slider__dot_active");
        }
      }

      setActiveDots(); //const sliderItemsForDots = [...document.querySelectorAll(".slider__img")];

      var _loop3 = function _loop3(_j) {
        if (sliderDots[_i3].dataset.number === sliderItems[_j].dataset.number) {
          var slideIndex = sliderItems.findIndex(function (slide) {
            return slide.dataset.number == sliderItems[_j].dataset.number;
          });
          sliderItems.unshift(sliderItems.splice(slideIndex, 1)[0]);
          var _left = 0;
          var _zIndex = 100;
          var _scale = 1;

          for (var k = 0; k < sliderItems.length; k++) {
            sliderItems[k].style.left = "".concat(_left, "%");
            sliderItems[k].style.zIndex = _zIndex;
            sliderItems[k].style.transform = "scale(".concat(_scale.toFixed(1), ")");
            _left += 8;
            _zIndex -= 1;
            _scale -= 0.1;
          }
        }
      };

      for (var _j = 0; _j < sliderItems.length; _j++) {
        _loop3(_j);
      }
    });
  };

  for (var _i3 = 0; _i3 < sliderDots.length; _i3++) {
    _loop(_i3);
  }

  sliderArrow.addEventListener("click", function () {
    sliderItems.push(sliderItems.shift());
    var left = 0;
    var zIndex = 100;
    var scale = 1;

    for (var _i4 = 0; _i4 < sliderItems.length; _i4++) {
      sliderItems[_i4].style.left = "".concat(left, "%");
      sliderItems[_i4].style.zIndex = zIndex;
      sliderItems[_i4].style.transform = "scale(".concat(scale.toFixed(1), ")");
      left += 8;
      zIndex -= 1;
      scale -= 0.1;

      for (var _i5 = 0; _i5 < sliderDots.length; _i5++) {
        sliderDots[_i5].classList.remove("slider__dot_active");
      }

      sliderDots[+sliderItems[0].dataset.number].classList.add("slider__dot_active");
      setActiveDots();
      setProgressBarWidth();
    }
  }); ///////ACCORDION

  var accordionItems = _toConsumableArray(document.querySelectorAll(".accordion__item"));

  var accordionProgress = document.querySelector(".accordion__progressBar");
  var accordionTitle = document.querySelector(".accordion__title");

  for (var _i6 = 0; _i6 < accordionItems.length; _i6++) {
    accordionItems[_i6].addEventListener("click", function () {
      this.classList.add("accordion__item_active");
      var that = this;
      console.log(accordionTitle);
      console.log(accordionTitle.offsetHeight);
      accordionProgress.style.height = this.offsetHeight + accordionTitle.offsetHeight / 2 + "px";

      for (var j = 0; j < accordionItems.length; j++) {
        if (accordionItems[j] != that) {
          accordionItems[j].classList.remove("accordion__item_active");
        }
      }
    });
  } ///////FORM


  var subscrForm = document.forms.subscr;
  var email = subscrForm.userEmail;
  var placeholder = document.querySelector(".subscribe__placeholder");
  var submit = document.querySelector(".subscribe__btn");
  email.addEventListener("input", function () {
    if (email.value === "") {
      placeholder.classList.remove("subscribe__placeholder_active");
    } else {
      placeholder.classList.add("subscribe__placeholder_active");
    }
  });
  submit.addEventListener("click", function (e) {
    var val = email.value;

    if (val === "" || !val.includes("@") || !val.includes(".")) {
      e.preventDefault();
      placeholder.innerText = "Please enter correct e-mail!";
      placeholder.classList.add("subscribe__placeholder_error");
      subscrForm.classList.add("subscribe__form_error");
      setTimeout(function () {
        placeholder.innerText = "Your email address";
        placeholder.classList.remove("subscribe__placeholder_error");
        subscrForm.classList.remove("subscribe__form_error");
      }, 2000);
    }
  });
});

},{}]},{},[1]);
