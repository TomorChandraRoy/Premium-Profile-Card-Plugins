/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Common/ProfileCard.js":
/*!**********************************************!*\
  !*** ./src/Components/Common/ProfileCard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const ProfileCard = ({
  isSelected,
  attributes,
  setAttributes
}) => {
  const {
    nameStyle,
    profiles
  } = attributes;
  const TagName = nameStyle.NameTag || "span";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, profiles.map((profile, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("body", {
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "profile-card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "avatar-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "avatar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "avatarImg",
    src: profile.img,
    alt: profile.name
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "profile-info"
  }, isSelected ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "name",
    tagName: nameStyle.NameTag,
    value: profile?.name,
    onChange: NewName => {
      setAttributes({
        name: NewName
      });
    }
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
    className: "name"
  }, profile?.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "title"
  }, profile.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "stats"
  }, profile.stats.map((stat, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "stat",
    key: i
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "stat-value"
  }, stat.value), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "stat-label"
  }, stat.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bio"
  }, profile.bio), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "skills"
  }, profile.skills.map((skill, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "skill",
    key: i
  }, skill))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "actions"
  }, profile.buttons.map((button, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: i,
    className: `action-btn ${button.type}`
  }, button.label, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-effect"
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-shine"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-border"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-glow"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCard);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  id
}) => {
  const {
    nameStyle,
    titleStyle,
    statsStyle,
    width,
    height,
    profileRadius,
    gradientBackground,
    bioStyle,
    skillsStyle
  } = attributes;
  const {
    NameColor
  } = nameStyle;
  const {
    titleColor,
    titleSize
  } = titleStyle;
  const {
    bioSize,
    bioColor
  } = bioStyle;
  const {
    skillsBg,
    skillsColor
  } = skillsStyle;
  const {
    labelColor,
    labelSize,
    valueColor,
    valueSize
  } = statsStyle;
  const {
    top,
    right,
    bottom,
    left
  } = profileRadius;
  const mainSl = `#${id}`;
  const profileInfo = `${mainSl} .profile-info`;
  const name = `${profileInfo} .name`;
  const title = `${profileInfo} .title`;
  const bio = `${profileInfo} .bio`;
  const skills = `${profileInfo} .skills`;
  const skill = `${skills} .skill`;
  const Stats = `${mainSl} .stats`;
  const stat = `${Stats} .stat`;
  const statValue = `${stat} .stat-value`;
  const statlabel = `${Stats} .stat-label`;
  const container = `${mainSl} .container`;
  const profileCard = `${container} .profile-card`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
	${name}{
  background:${NameColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

	}
	${title}{
	color:${titleColor};
	font-size:${titleSize};
	}
	${bio}{
	color:${bioColor};
	font-size:${bioSize};
	}
	${statlabel}{
	color:${labelColor};
	font-size:${labelSize};
	}
	${skill}{
   background:${skillsBg};
   color:${skillsColor};
	}
	${skill}:hover{
        background: rgba(255, 255, 255, 0.1);
        color: white;
        transform: translateY(-2px);
	}
	${statValue}{
	color:${valueColor};
	font-size:${valueSize};
	}
  ${profileCard}{
   max-width:${width};
   height:${height};
   border-radius:${top} ${right} ${bottom} ${left};
   background:${gradientBackground}
  }
    `
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Common_ProfileCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/ProfileCard */ "./src/Components/Common/ProfileCard.js");





document.addEventListener('DOMContentLoaded', () => {
  const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-profile-card');
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_ProfileCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes
    })));
    blockNameEl?.removeAttribute('data-attributes');
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map