exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 9735:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__P90l2",
	"pageLogo": "header_pageLogo__pbJzq",
	"aside": "header_aside__WGTZ2",
	"lang": "header_lang__6a9y9"
};


/***/ }),

/***/ 1820:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__uFstG",
	"header": "Home_header__Olkmk",
	"template__wrapper": "Home_template__wrapper__YTxSc",
	"container": "Home_container__tlJEC",
	"services": "Home_services__pgeD6",
	"template__section": "Home_template__section__LX8TQ",
	"main__section": "Home_main__section__J_9l3",
	"select__input": "Home_select__input__ODttL",
	"option": "Home_option__e7wwf",
	"curr__code": "Home_curr__code__rt_lE",
	"action__section": "Home_action__section___723h",
	"actions": "Home_actions__P_u9w",
	"action__btn": "Home_action__btn__8p_9Y"
};


/***/ }),

/***/ 6949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6734);
// EXTERNAL MODULE: ./src/components/Header/header.module.scss
var header_module = __webpack_require__(9735);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(7832);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(6562);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/assets/icons/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a2a4806f.svg","height":34,"width":34,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/icons/githubIcon.svg
/* harmony default export */ const githubIcon = ({"src":"/_next/static/media/githubIcon.3e32bd2a.svg","height":32,"width":32,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Language/languageChange.jsx




const LanguageChange = ()=>{
    const { lang } = useTranslation_default()("common");
    const router = (0,router_.useRouter)();
    const [selectedLanguage, setSelectedLanguage] = (0,external_react_.useState)(lang);
    const handleChangeLanguage = (e)=>{
        const selectedLanguage = e.target.value;
        setSelectedLanguage(selectedLanguage);
        const { pathname, asPath } = router;
        router.push(pathname, asPath, {
            locale: selectedLanguage
        });
    };
    //local storage gets the selected language
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        lang
    ]);
    //local storage sets the selected language
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, [
        selectedLanguage
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                value: selectedLanguage,
                id: "languageSelect",
                onChange: handleChangeLanguage,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "en",
                        children: "en"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "fr",
                        children: "fr"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "es",
                        children: "es"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "pt",
                        children: "pt"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "de",
                        children: "de"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "nl",
                        children: "du"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const languageChange = (LanguageChange);

;// CONCATENATED MODULE: ./src/components/Header/Header.jsx







const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    className: (header_module_default()).pageLogo,
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: logo,
                        alt: "Page Logo",
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (header_module_default()).aside,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (header_module_default()).lang,
                        children: /*#__PURE__*/ jsx_runtime.jsx(languageChange, {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://senacodes.io/",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: githubIcon,
                                alt: "Github icon",
                                priority: true
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ })

};
;