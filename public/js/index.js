"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/index"],{

/***/ "./resources/js/App.tsx":
/*!******************************!*\
  !*** ./resources/js/App.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

var Navigation_1 = __importDefault(__webpack_require__(/*! ./components/Navigation */ "./resources/js/components/Navigation.tsx"));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ "./resources/js/pages/Home.tsx")); // import Works from "./pages/Works";


var Works = (0, react_1.lazy)(function () {
  return Promise.resolve().then(function () {
    return __importStar(__webpack_require__(
    /* webpackChunkName: "js/chunks/works" */
    /*! ./pages/Works */ "./resources/js/pages/Works.tsx"));
  });
});

var Blog_1 = __importDefault(__webpack_require__(/*! ./pages/Blog */ "./resources/js/pages/Blog.tsx"));

var About_1 = __importDefault(__webpack_require__(/*! ./pages/About */ "./resources/js/pages/About.tsx"));

var Footer_1 = __importDefault(__webpack_require__(/*! ./components/Footer */ "./resources/js/components/Footer.tsx"));

var Editor_1 = __importDefault(__webpack_require__(/*! ./projects/editor/Editor */ "./resources/js/projects/editor/Editor.tsx"));

var table_1 = __importDefault(__webpack_require__(/*! ./projects/react-table/table */ "./resources/js/projects/react-table/table.tsx"));

__webpack_require__(/*! ./style.css */ "./resources/js/style.css");

var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var scrollreveal_1 = __importDefault(__webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js"));

var ScrollToTop_1 = __importDefault(__webpack_require__(/*! ./components/ScrollToTop */ "./resources/js/components/ScrollToTop.tsx"));

var Dashboard_1 = __importDefault(__webpack_require__(/*! ./projects/space/Dashboard */ "./resources/js/projects/space/Dashboard.tsx"));

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

function App() {
  var navSpacerElem = (0, react_1.useRef)(null);
  var location = (0, react_router_dom_1.useLocation)();

  var _a = (0, react_2.useState)('0'),
      navSpacerHeight = _a[0],
      setNavSpacerHeight = _a[1];

  react_1["default"].useEffect(function () {
    if (location.pathname == '/' || location.pathname == '/works/projects/editor') {
      // console.log(navSpacerElem.current);
      setNavSpacerHeight('0');
    } else {
      setNavSpacerHeight('9vh');
    }

    setCount(count + 1);
  }, [location]);
  (0, react_2.useEffect)(function () {
    axios_1["default"].get('/sanctum/csrf-cookie');
  }, []);

  var _b = (0, react_2.useState)(0),
      count = _b[0],
      setCount = _b[1];

  (0, react_2.useEffect)(function () {
    (0, scrollreveal_1["default"])().watch = function (target, onEnter, onExit) {
      onExit = onExit || function () {};

      if (typeof onEnter === "function" && typeof onExit === "function") {
        var noEffect = {
          delay: 0,
          distance: '0',
          duration: 0,
          scale: 1,
          //   opacity: 1,
          rotate: {
            x: 0,
            y: 0,
            z: 0
          },
          reset: true,
          beforeReset: onExit,
          beforeReveal: onEnter
        };
        this.reveal(target, noEffect);
      } else {
        throw new Error("invalid arguments");
      }
    };

    window.sr = (0, scrollreveal_1["default"])({
      reset: false
    });
    window.sr.watch(".reveal", function onEnter(el) {
      if (!el.classList.contains("active")) {
        visible(el);
      }

      el.classList.add("active");
      el.classList.remove("up");
    }, function onExit(el) {
      var a = el.getBoundingClientRect();

      if (a.y / a.height < 0) {
        el.classList.add("up"); // console.log("0% " + el.innerText);
      } else {
        el.classList.remove("active");
        el.style.opacity = "0"; // console.log("100% " + el.innerText);
      }
    });

    function visible(e) {
      var delay = e.dataset.delay ? e.dataset.delay : 0;
      var visible = [// keyframes
      {
        offset: 0,
        transform: "translateY(40px) rotate(4deg)",
        opacity: "0"
      }, {
        offset: 0.5,
        transform: "translateY(40px) rotate(3deg)",
        opacity: "0"
      }, {
        offset: 1,
        transform: "translateY(0px) rotate(0deg)",
        opacity: "1"
      }];
      e.animate(visible, {
        // timing options
        delay: parseInt(delay, 10),
        duration: 500,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
        iterations: 1
      });
      setTimeout(function () {
        e.style.opacity = "1";
      }, 2 * parseInt(delay, 10));
    }

    var backtext = document.querySelectorAll(".backtext");
    backtext.forEach(function (e) {
      var el = e.getBoundingClientRect().top - document.body.getBoundingClientRect().top; // console.log(el);

      window.addEventListener("scroll", function () {
        // console.log(document.documentElement.scrollTop);
        if (el - 300 < document.documentElement.scrollTop && el + 400 > document.documentElement.scrollTop) {
          var speed = e.dataset.speed;
          var top_1 = e.dataset.top; // console.log("reach");

          e.style.opacity = 0.8;
          e.style.position = "relative";
          e.style.top = parseInt(top_1, 10) + (document.documentElement.scrollTop - el) / parseInt(speed, 10) + "px"; // } else if (el + 500 < document.documentElement.scrollTop) {
        } else {
          // console.log("out");
          e.style.opacity = 0;
        }
      });
    });
  }, [count]);
  var theme = {
    mainColor: "red",
    accentColor: "#000",
    tertiaryColor: "#000",
    backgroundColor: "rgba(235, 235, 235, 0.433)",
    textColor: "#000",
    colorOne: "rgb(255, 0, 0)",
    colorOneLight: "rgba(255, 0, 0, 0.205)"
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, react_1["default"].createElement(Navigation_1["default"], {
    theme: theme
  })), react_1["default"].createElement("div", {
    ref: navSpacerElem,
    style: {
      height: navSpacerHeight
    }
  }), react_1["default"].createElement(ScrollToTop_1["default"], null), react_1["default"].createElement(react_router_dom_1.Routes, null, react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/",
    element: react_1["default"].createElement(Home_1["default"], {
      theme: theme
    })
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/about/*",
    element: react_1["default"].createElement(About_1["default"], {
      theme: theme
    })
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/works/*",
    element: react_1["default"].createElement(react_1.Suspense, {
      fallback: react_1["default"].createElement(react_1["default"].Fragment, null, "...")
    }, react_1["default"].createElement(Works, {
      theme: theme
    }))
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/blog/*",
    element: react_1["default"].createElement(Blog_1["default"], {
      theme: theme
    })
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/works/projects/editor",
    element: react_1["default"].createElement(Editor_1["default"], {
      theme: theme
    })
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/works/projects/react-table",
    element: react_1["default"].createElement(table_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/works/projects/space",
    element: react_1["default"].createElement(Dashboard_1["default"], null)
  })), react_1["default"].createElement(Footer_1["default"], null));
}

exports["default"] = App;

/***/ }),

/***/ "./resources/js/Entry.tsx":
/*!********************************!*\
  !*** ./resources/js/Entry.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var App_1 = __importDefault(__webpack_require__(/*! ./App */ "./resources/js/App.tsx"));

var Preloader_1 = __importDefault(__webpack_require__(/*! ./components/Preloader */ "./resources/js/components/Preloader.tsx"));

__webpack_require__(/*! ./style.css */ "./resources/js/style.css");

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Entry() {
  var _a = (0, react_1.useState)(0),
      state = _a[0],
      setState = _a[1];

  (0, react_1.useEffect)(function () {
    setTimeout(function () {
      setState(1);
    }, 100);
  }, [state]);
  return React.createElement("div", null, state === 0 && React.createElement(Preloader_1["default"], null), state === 1 && React.createElement(React.Fragment, null, React.createElement(App_1["default"], null)));
}

exports["default"] = Entry;

/***/ }),

/***/ "./resources/js/components/AboutBlock.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/AboutBlock.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Button_1 = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.tsx");

var react_jss_1 = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var ri_1 = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");

var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

function AboutBlock() {
  var theme = {
    background: "#f7df1e",
    color: "#24292e"
  };
  var useStyles = (0, react_jss_1.createUseStyles)({
    back: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      "@media (max-width:600px)": {
        flexDirection: "column",
        alignItems: "center"
      }
    },
    round: {
      // border: "1px solid #000",
      aspectRatio: "1/1",
      marginTop: "10%",
      height: "220px",
      minWidth: "220px",
      borderRadius: "100%",
      background: "url('/images/akshay.jpg') top left/100% no-repeat",
      boxShadow: "0 0 0 90px rgba(var(--main-color-hex),.05), 0 0 0 250px rgba(var(--main-color-hex),.05)",
      // boxShadow:
      //   "rgb(0 0 0 / 10%) 3px 3px 4px 2px,rgb(255 255 255 / 91%) -3px -3px 4px 2px,inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
      "@media (max-width:600px)": {}
    },
    text: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "65%",
      margin: "0 0 0 5%",
      alignItems: "flex-start",
      "@media (max-width:600px)": {
        maxWidth: "93%"
      }
    },
    head: {
      marginBottom: "2px"
    },
    socials: {
      display: "flex",
      "& a": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "11px",
        margin: "10px 4vw 20px 0",
        borderRadius: "100%",
        height: "28px",
        width: "28px",
        boxSizing: "content-box",
        transition: "all 0.1s",
        backdropFilter: "blur(8px)",
        textAlign: "center",
        boxShadow: "rgb(0 0 0 / 10%) 3px 3px 4px 2px,rgb(255 255 255 / 91%) -3px -3px 4px 2px,inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0"
      },
      "& a:hover": {
        boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0,inset rgb(255 255 255 / 83%) -3px -3px 4px 2px,inset rgb(241 237 237 / 91%) 3px 4px 4px 2px"
      }
    },
    "@media (prefers-color-scheme: dark)": {},
    wrapper: {//   background: ({ theme }) => theme.background
    }
  });
  var classes = useStyles({
    theme: theme
  });
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classes.back
  }, React.createElement("div", {
    className: "reveal " + classes.round
  }), React.createElement("div", {
    className: "reveal " + classes.text
  }, React.createElement("h2", {
    className: "reveal " + classes.head
  }, "Akshay K Nair"), React.createElement("p", null, "Hello there, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Hello there, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), React.createElement("p", null, "Hello there, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), React.createElement("div", {
    className: classes.socials
  }, React.createElement("a", {
    href: "https://www.linkedin.com/in/akshay-k-nair/",
    target: "_blank",
    className: "reveal",
    "data-delay": 0
  }, React.createElement(ai_1.AiOutlineLinkedin, null)), React.createElement("a", {
    href: "https://stackoverflow.com/users/7481663/akshay-k-nair",
    target: "_blank",
    className: "reveal",
    "data-delay": 60
  }, React.createElement(ri_1.RiStackOverflowLine, null)), React.createElement("a", {
    href: "https://github.com/akshayknz",
    target: "_blank",
    className: "reveal",
    "data-delay": 100
  }, React.createElement(ri_1.RiGithubLine, null)), React.createElement("a", {
    href: "https://wa.me/%2B918301044114?text=Hello%20there%2C%20Akshay!",
    target: "_blank",
    className: "reveal",
    "data-delay": 230
  }, React.createElement(ri_1.RiWhatsappLine, null))), React.createElement(Button_1.Navlink, {
    to: "/about",
    text: "about"
  }))));
}

exports["default"] = AboutBlock;

/***/ }),

/***/ "./resources/js/components/Button.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/Button.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Navlink = exports.Button = void 0;

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var vsc_1 = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");

function Button(props) {
  return react_1["default"].createElement("div", {
    className: "button reveal"
  }, props.text, react_1["default"].createElement(vsc_1.VscArrowRight, {
    className: "icon"
  }));
}

exports.Button = Button;

function Navlink(props) {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(react_router_dom_1.NavLink, {
    to: props.to,
    className: function className(_a) {
      var isActive = _a.isActive;
      return "button reveal" + (isActive ? " activated" : "");
    }
  }, props.text, react_1["default"].createElement(vsc_1.VscArrowRight, {
    className: "icon"
  })));
}

exports.Navlink = Navlink;

/***/ }),

/***/ "./resources/js/components/Footer.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Footer() {
  var back = {
    background: "rgba(0,0,0,0.051)"
  };
  var inner = {};
  var backtext = {
    fontSize: "100px",
    WebkitTextStroke: "1px var(--main-color)",
    WebkitTextFillColor: "transparent",
    height: "0",
    position: "relative",
    left: "-5px",
    top: "-20px"
  };
  return React.createElement(React.Fragment, null, React.createElement("div", {
    style: back
  }, React.createElement("div", {
    className: "container",
    style: inner
  }, React.createElement("div", {
    style: backtext
  }, "Footer"), "goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links goto links")));
}

exports["default"] = Footer;

/***/ }),

/***/ "./resources/js/components/ItemBlock.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/ItemBlock.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

__webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");

var react_2 = __webpack_require__(/*! keen-slider/react */ "./node_modules/keen-slider/react.js");

function ItemsBlock() {
  var _a = react_1["default"].useState(0),
      currentSlide = _a[0],
      setCurrentSlide = _a[1];

  var _b = react_1["default"].useState(null),
      currentSlideText = _b[0],
      setCurrentSlideText = _b[1];

  var _c = (0, react_2.useKeenSlider)({
    initial: 0,
    mode: "free-snap",
    spacing: 35,
    loop: true,
    slideChanged: function slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    breakpoints: {
      "(min-width: 368px)": {
        slidesPerView: 1.25,
        mode: "free-snap"
      },
      "(min-width: 768px)": {
        slidesPerView: 1.5,
        mode: "free-snap"
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        mode: "free-snap"
      }
    }
  }),
      sliderRef = _c[0],
      slider = _c[1];

  var slide = {
    width: "100vw",
    height: "300px",
    backdropFilter: "blur(15px)",
    borderRadius: "10px",
    padding: "16px",
    boxSizing: "border-box",
    background: "linear-gradient(45deg, #1e8dff, #77e9fb)",
    // border: "4px solid rgb(244 0 0 / 30%)",
    userSelect: "none"
  };
  var sliderWrap = {
    display: "flex",
    paddingTop: "40px"
  };

  function getClass(params) {
    return "currentSlide";
  }

  (0, react_1.useEffect)(function () {
    var elem = document.querySelector('.currentSlide');
    setCurrentSlideText(elem.dataset.text); // document.querySelector("#progress").style.left = 100 * currentSlide + "px";
  }, [currentSlide]);
  var designerText = {
    fontSize: "60px",
    WebkitTextStroke: "1px var(--main-color)",
    WebkitTextFillColor: "transparent",
    height: "0",
    textAlign: "left",
    position: "relative",
    zIndex: 2,
    opacity: "1",
    paddingLeft: "10vw",
    userSelect: "none"
  };
  var progressWrap = {
    width: "100%",
    margin: "45px 0px 25px 0",
    padding: "0 15px 0 16px",
    background: "rgba(0,0,0,0.071)",
    display: "flex",
    height: "2px",
    justifyContent: "flex-start",
    alignItems: "center"
  };
  var progress = {
    background: "var(--main-color)",
    height: "2px",
    width: "25%",
    opacity: ".6",
    position: "relative",
    left: 25 * currentSlide + "%",
    transition: "all 0.5s cubic-bezier(0.73, 0.39, 0, 0.69) 0s"
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("style", null), react_1["default"].createElement("div", {
    style: designerText,
    "data-speed": "5",
    "data-top": "200",
    className: "backtext"
  }, currentSlide + 1, ". ", currentSlideText), react_1["default"].createElement("div", {
    className: "slider reveal",
    style: sliderWrap,
    ref: sliderRef
  }, react_1["default"].createElement("div", {
    "data-text": "Personals",
    style: slide,
    className: currentSlide === 0 ? getClass(1) + " keen-slider__slide" : "keen-slider__slide"
  }, "1"), react_1["default"].createElement("div", {
    "data-text": "Work projects",
    style: slide,
    className: currentSlide === 1 ? getClass(1) + " keen-slider__slide" : "keen-slider__slide"
  }, "2"), react_1["default"].createElement("div", {
    "data-text": "Others",
    style: slide,
    className: currentSlide === 2 ? getClass(2) + " keen-slider__slide" : "keen-slider__slide"
  }, "3"), react_1["default"].createElement("div", {
    "data-text": "Others",
    style: slide,
    className: currentSlide === 3 ? getClass(3) + " keen-slider__slide" : "keen-slider__slide"
  }, "4")), react_1["default"].createElement("div", {
    style: progressWrap
  }, react_1["default"].createElement("div", {
    id: "progress",
    style: progress
  })));
}

exports["default"] = ItemsBlock;

/***/ }),

/***/ "./resources/js/components/Navigation.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/Navigation.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Navigation = function Navigation(_a) {
  var theme = _a.theme;

  var _b = (0, react_1.useState)(false),
      menu = _b[0],
      setMenu = _b[1];

  var useStyles = (0, react_jss_1.createUseStyles)({
    nav: {
      color: "red",
      background: "rgb(149 149 149 / 8%)",
      width: "100vw",
      height: "10vh",
      display: "flex",
      justifyContent: "space-around",
      position: "fixed",
      alignItems: "center",
      backdropFilter: "blur(8px)",
      zIndex: "100",
      boxShadow: "rgb(179 178 178 / 39%) 1px 1px 0px 0px, rgb(92 92 92 / 17%) 1px 1px 20px 5px",
      animation: "navArrive 1s cubic-bezier(1, 0, 0.35, 1.08) 0s 1 normal"
    },
    logoWrapper: {
      fontWeight: "600",
      width: "50vw"
    },
    navLink: {
      border: "2px solid rgba(0, 0, 0,0)",
      padding: "5px 5px",
      fontWeight: "500",
      transition: "all cubic-bezier(0.19, 0.29, 0.23, 1.32) .3s"
    },
    lineWrap: {
      cursor: "pointer",
      height: "85%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "50px",
      alignItems: "center"
    },
    line: {
      // border: "2px solid " + theme.mainColor,
      height: "4px",
      width: "32px",
      borderRadius: "900px",
      transition: "all ease .3s",
      background: theme.accentColor
    },
    line1: {
      transform: "translatey(-4px)"
    },
    line2: {
      opacity: "1"
    },
    line3: {
      transform: "translatey(4px)"
    },
    opened: {
      "& $line1": {
        transform: "translatey(3px) rotate(45deg)"
      },
      "& $line2": {
        opacity: "0"
      },
      "& $line3": {
        transform: "translatey(-5px) rotate(-45deg)"
      }
    },
    linkWrapper: {
      display: "flex",
      width: "75vw",
      justifyContent: "space-around",
      maxWidth: "500px",
      alignItems: "center",
      flexDirection: "column"
    },
    menuWrapper: {
      position: "fixed",
      backdropFilter: "blur(20px)",
      top: "0",
      left: "0",
      display: "flex",
      zIndex: "-50",
      opacity: "0",
      transition: "all ease .3s",
      height: "100vh",
      width: "100vw",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
      background: "rgba(255,255,255,.4)",
      boxSizing: "border-box",
      padding: "10vh 0 2vh 0"
    },
    open: {
      zIndex: "50",
      opacity: "1",
      padding: "24vh 0 14vh 0"
    },
    active: {
      padding: "5px 15px",
      border: "2px solid rgba(0, 0, 0,1)",
      fontWeight: "600"
    },
    p: {
      padding: "10vw",
      textAlign: "center",
      width: "100vw",
      boxSizing: "border-box"
    }
  });
  var classes = useStyles({
    theme: theme
  });
  return React.createElement(React.Fragment, null, React.createElement("nav", {
    className: classes.nav
  }, React.createElement("div", {
    className: classes.logoWrapper
  }, React.createElement(react_router_dom_1.NavLink, {
    to: "/"
  }, "Akshay K Nair")), React.createElement("div", {
    className: classes.lineWrap + " " + (menu === true ? "" + classes.opened : ""),
    onClick: function onClick() {
      return setMenu(function (prevMenu) {
        return !prevMenu;
      });
    }
  }, React.createElement("div", {
    className: classes.line + " " + classes.line1
  }), React.createElement("div", {
    className: classes.line + " " + classes.line2
  }), React.createElement("div", {
    className: classes.line + " " + classes.line3
  }))), React.createElement("div", {
    className: classes.menuWrapper + " " + (menu === true ? "" + classes.open : "")
  }, React.createElement("div", {
    className: classes.linkWrapper
  }, React.createElement(react_router_dom_1.NavLink, {
    className: function className(isActive) {
      return classes.navLink + (!isActive ? classes.active : "");
    },
    onClick: function onClick() {
      return setMenu(function (prevMenu) {
        return !prevMenu;
      });
    },
    to: "/"
  }, " ", "home"), React.createElement(react_router_dom_1.NavLink, {
    className: function className(isActive) {
      return classes.navLink + (!isActive ? classes.active : "");
    },
    onClick: function onClick() {
      return setMenu(function (prevMenu) {
        return !prevMenu;
      });
    },
    to: "/works"
  }, " ", "work"), React.createElement(react_router_dom_1.NavLink, {
    className: function className(isActive) {
      return classes.navLink + (!isActive ? classes.active : "");
    },
    onClick: function onClick() {
      return setMenu(function (prevMenu) {
        return !prevMenu;
      });
    },
    to: "/blog"
  }, " ", "blog"), React.createElement(react_router_dom_1.NavLink, {
    className: function className(isActive) {
      return classes.navLink + (!isActive ? classes.active : "");
    },
    onClick: function onClick() {
      return setMenu(function (prevMenu) {
        return !prevMenu;
      });
    },
    to: "/about"
  }, " ", "about")), React.createElement("div", {
    className: classes.p
  }, React.createElement("p", null, "Hi there, stranger."))));
};

exports["default"] = Navigation;

/***/ }),

/***/ "./resources/js/components/Preloader.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/Preloader.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Preloader() {
  var pre = {
    height: "100vh",
    width: "100vw"
  };
  var slider = {
    height: "2px",
    width: "100vw",
    background: "var(--main-color)",
    position: "absolute",
    bottom: "23vh",
    animation: "slider 1.6s cubic-bezier(1, 0, 0.35, 1.08) 0s 1 normal"
  };
  var head = {
    fontSize: "40px",
    fontWeight: 100,
    position: "absolute",
    top: "23vh",
    width: "100vw",
    textAlign: "center"
  };
  (0, react_1.useEffect)(function () {});
  return React.createElement("div", null, React.createElement("div", {
    style: pre
  }, React.createElement("div", {
    style: head
  }, "Loading"), React.createElement("div", {
    style: slider
  })));
}

exports["default"] = Preloader;

/***/ }),

/***/ "./resources/js/components/RecentBlock.tsx":
/*!*************************************************!*\
  !*** ./resources/js/components/RecentBlock.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_jss_1 = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

function RecentBlock() {
  var useStyles = (0, react_jss_1.createUseStyles)({
    wrap: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoRows: "auto",
      gridColumnGap: "23px",
      gridRowGap: "26px",
      padding: "31px",
      boxSizing: "border-box",
      maxWidth: "900px"
    },
    box: {
      borderRadius: "10px",
      backdropFilter: "blur(15px)",
      cursor: "pointer",
      transition: "all 0.1s",
      textDecoration: "none !important",
      boxShadow: "rgb(0 0 0 / 10%) 3px 3px 4px 2px,rgb(255 255 255 / 91%) -3px -3px 4px 2px,inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
      "&:hover": {
        boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0,inset rgb(255 255 255 / 83%) -3px -3px 4px 2px,inset rgb(241 237 237 / 91%) 3px 4px 4px 2px"
      }
    },
    box1: {
      gridColumnStart: 1,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 3
    },
    box2: {
      gridArea: "5/1/3/3",
      '@media (max-width: 600px)': {
        gridArea: "5/1/3/4"
      }
    },
    box3: {
      gridArea: "3/3/4/3",
      '@media (max-width: 600px)': {
        gridArea: "5/1/5/3"
      }
    },
    box4: {
      gridArea: "4/3/4/3",
      '@media (max-width: 600px)': {
        gridArea: "5/3/5/4"
      }
    },
    box5: {
      gridArea: "5/2/7/1",
      '@media (max-width: 600px)': {
        gridArea: "6/4/7/1"
      }
    },
    box6: {
      gridArea: "5/2/7/4",
      '@media (max-width: 600px)': {
        gridArea: "7/1/7/4"
      }
    },
    boxInsideWrap: {
      display: "-webkit-box",
      WebkitLineClamp: "6",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "left",
      padding: "0 20px"
    },
    tag: {
      position: "absolute",
      left: "20px",
      bottom: "15px",
      fontSize: "13px",
      fontWeight: "500",
      display: "inline-block",
      background: "#cdcdcd36",
      padding: "3px 10px",
      borderRadius: "100px",
      border: "1px solid #8f8f8f4d",
      cursor: "pointer",
      transition: "all 0.25s",
      "&:hover": {
        background: "#63636336",
        padding: "3px 12px",
        border: "1px solid #0000004d"
      }
    },
    boxWithTag: {
      paddingBottom: "70px"
    },
    center: {
      display: "flex",
      justifyContent: "center"
    }
  });
  var classes = useStyles();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classes.center
  }, React.createElement("div", {
    className: "reveal " + classes.wrap
  }, React.createElement(react_router_dom_1.NavLink, {
    to: "/works",
    "data-delay": "0",
    className: "reveal " + classes.box1 + " " + classes.box + " " + classes.boxWithTag
  }, React.createElement(react_router_dom_1.NavLink, {
    to: "/?tag=work",
    className: classes.tag
  }, "#work"), React.createElement("div", {
    className: classes.boxInsideWrap
  }, React.createElement("h2", null, "Works"), React.createElement("p", null, "The timeline of all the projects I've done and the personal projects I've created"))), React.createElement(react_router_dom_1.NavLink, {
    to: "/blog",
    className: "reveal " + classes.box2 + " " + classes.box + " " + classes.boxWithTag,
    "data-delay": "10"
  }, React.createElement("div", {
    className: classes.tag
  }, "#blog"), React.createElement("div", {
    className: classes.boxInsideWrap
  }, React.createElement("h2", null, "How The Metaverse Could Change The World Forever"), React.createElement("p", null, "How The Metaverse Could Change The World Forever or How It Could Be The Next Technological Flop."))), React.createElement(react_router_dom_1.NavLink, {
    to: "/about",
    "data-delay": "10",
    className: "reveal " + classes.box3 + " " + classes.box
  }, React.createElement("div", {
    className: classes.boxInsideWrap
  }, React.createElement("p", null, "Links to the outside"))), React.createElement(react_router_dom_1.NavLink, {
    to: "/about",
    "data-delay": "10",
    className: "reveal " + classes.box4 + " " + classes.box
  }, React.createElement("div", {
    className: classes.boxInsideWrap
  }, React.createElement("p", null, "About."))), React.createElement(react_router_dom_1.NavLink, {
    to: "/blog",
    "data-delay": "20",
    className: "reveal " + classes.box5 + " " + classes.box + " " + classes.boxWithTag
  }, React.createElement("div", {
    className: classes.tag
  }, "#blog"), React.createElement("div", {
    className: classes.boxInsideWrap
  }, React.createElement("p", null, "The blog has a log of all things I've posted."))), React.createElement(react_router_dom_1.NavLink, {
    to: "/blog",
    "data-delay": "20",
    className: "reveal " + classes.box6 + " " + classes.box + " " + classes.boxWithTag
  }, React.createElement("div", {
    className: classes.tag
  }, "#blog"), React.createElement("div", {
    className: classes.boxInsideWrap
  }, React.createElement("h2", null, "Blog"), React.createElement("p", null, "The blog has a log of all things I've posted."))))));
}

exports["default"] = RecentBlock;

/***/ }),

/***/ "./resources/js/components/ScrollToTop.tsx":
/*!*************************************************!*\
  !*** ./resources/js/components/ScrollToTop.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

function ScrollToTop() {
  var pathname = (0, react_router_dom_1.useLocation)().pathname;
  (0, react_1.useEffect)(function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
}

exports["default"] = ScrollToTop;

/***/ }),

/***/ "./resources/js/components/SkillBlock.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/SkillBlock.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! ../style.css */ "./resources/js/style.css");

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var ri_1 = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");

var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");

var io5_1 = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");

var gr_1 = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");

var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

var vsc_1 = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");

var si_1 = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");

var SkillBlock = function SkillBlock() {
  var useStyles = (0, react_jss_1.createUseStyles)({});
  var classes = useStyles();
  return React.createElement("div", {
    className: "bubbles"
  }, React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle center"
  }, "Things I do")), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 13
  }, React.createElement(fa_1.FaLaravel, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 15
  }, React.createElement(io5_1.IoLogoJavascript, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 17
  }, React.createElement(ri_1.RiReactjsFill, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 18
  }, React.createElement(fa_1.FaWordpressSimple, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 110
  }, React.createElement(fa_1.FaPhp, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 112
  }, React.createElement(gr_1.GrMysql, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 113
  }, React.createElement(ai_1.AiOutlineHtml5, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 116
  }, React.createElement(vsc_1.VscGithubAlt, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 114
  }, React.createElement(io5_1.IoLogoElectron, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 16
  }, React.createElement(io5_1.IoLogoPython, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 13
  }, React.createElement(io5_1.IoLogoFirebase, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 17
  }, React.createElement(gr_1.GrHeroku, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 19
  }, React.createElement(si_1.SiWebpack, null))), React.createElement("div", {
    className: "circle-wrapper"
  }, React.createElement("div", {
    className: "reveal circle",
    "data-delay": 11
  }, React.createElement(si_1.SiLinux, null))));
};

exports["default"] = SkillBlock;

/***/ }),

/***/ "./resources/js/index.tsx":
/*!********************************!*\
  !*** ./resources/js/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var Entry_1 = __importDefault(__webpack_require__(/*! ./Entry */ "./resources/js/Entry.tsx"));

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");

(0, react_dom_1.render)(react_1["default"].createElement(react_1.StrictMode, null, react_1["default"].createElement(react_router_dom_1.BrowserRouter, null, react_1["default"].createElement(Entry_1["default"], null))), document.getElementById("app"));

/***/ }),

/***/ "./resources/js/pages/About.tsx":
/*!**************************************!*\
  !*** ./resources/js/pages/About.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var About = function About(_a) {
  var theme = _a.theme;
  var h = {
    height: "50vh"
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(react_1["default"].Fragment, null, "About"), react_1["default"].createElement("div", {
    style: h,
    className: "container reveal"
  }, "one"), react_1["default"].createElement("div", {
    style: h,
    className: "container reveal"
  }, "two"), react_1["default"].createElement("div", {
    style: h,
    className: "container reveal"
  }, "three"), react_1["default"].createElement("div", {
    style: h,
    className: "container reveal"
  }, "four"), react_1["default"].createElement("div", {
    style: h,
    className: "container reveal"
  }, "five"));
};

exports["default"] = About;

/***/ }),

/***/ "./resources/js/pages/Blog.tsx":
/*!*************************************!*\
  !*** ./resources/js/pages/Blog.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Blog = function Blog(_a) {
  var theme = _a.theme;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(react_1["default"].Fragment, null, "Blog"));
};

exports["default"] = Blog;

/***/ }),

/***/ "./resources/js/pages/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var RecentBlock_1 = __importDefault(__webpack_require__(/*! ../components/RecentBlock */ "./resources/js/components/RecentBlock.tsx"));

var ItemBlock_1 = __importDefault(__webpack_require__(/*! ../components/ItemBlock */ "./resources/js/components/ItemBlock.tsx"));

var AboutBlock_1 = __importDefault(__webpack_require__(/*! ../components/AboutBlock */ "./resources/js/components/AboutBlock.tsx"));

var SkillBlock_1 = __importDefault(__webpack_require__(/*! ../components/SkillBlock */ "./resources/js/components/SkillBlock.tsx"));

var Button_1 = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.tsx");

var Home = function Home() {
  var heading = {
    fontWeight: 700,
    WebkitTextStroke: "1px var(--main-color)",
    WebkitTextFillColor: "transparent"
  };
  var intro = {
    height: "100vh",
    display: "flex",
    alignItems: "flex-end",
    padding: "12vh 8vw",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    marginBottom: "10px"
  };
  var paddingbottom = {
    padding: "0px 0 20px 0"
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    style: intro
  }, react_1["default"].createElement("div", {
    id: "backWrap"
  }, react_1["default"].createElement("div", null), react_1["default"].createElement("div", null), react_1["default"].createElement("div", null), react_1["default"].createElement("div", null), react_1["default"].createElement("div", null), react_1["default"].createElement("div", null), react_1["default"].createElement("div", null)), react_1["default"].createElement("div", null, react_1["default"].createElement("h1", {
    style: heading,
    "data-delay": "0",
    className: "reveal"
  }, "Complexity as Simplicity"), react_1["default"].createElement("p", {
    "data-delay": "20",
    className: "reveal"
  }, "Hello there, I'm Akshay. I focus on making and keeping things simple. As a great man once said, simplicity is the ultimate sophistication."), react_1["default"].createElement(Button_1.Navlink, {
    to: "/works",
    text: "works"
  }))), react_1["default"].createElement("div", {
    className: "container-no-margin"
  }, react_1["default"].createElement(SkillBlock_1["default"], null)), react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("h1", {
    className: "reveal"
  }, "Recents"), react_1["default"].createElement("div", {
    "data-speed": "2",
    "data-top": "300",
    className: "backtext"
  }, "Recents"), react_1["default"].createElement(RecentBlock_1["default"], null)), react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("h1", {
    className: " reveal"
  }, "Quickview"), react_1["default"].createElement(ItemBlock_1["default"], null), react_1["default"].createElement("p", {
    style: paddingbottom
  }, "Hello there, its me here. Hello there, its me here. Hello there, its me here. Hello there, its me here. Hello there, its me here."), react_1["default"].createElement(Button_1.Navlink, {
    to: "/work",
    text: "work"
  })), react_1["default"].createElement("div", {
    className: "container"
  }, react_1["default"].createElement("h1", {
    className: " reveal"
  }, "About"), react_1["default"].createElement("div", {
    "data-speed": "2",
    "data-top": "300",
    className: "backtext"
  }, "About"), react_1["default"].createElement(AboutBlock_1["default"], null)));
};

exports["default"] = Home;

/***/ }),

/***/ "./resources/js/pages/Works.tsx":
/*!**************************************!*\
  !*** ./resources/js/pages/Works.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Button_1 = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.tsx");

var Works = function Works(_a) {
  var theme = _a.theme;
  var h = {
    height: "10vh"
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    style: h,
    className: "container reveal"
  }, "one"), react_1["default"].createElement(react_1["default"].Fragment, null, "Works"), react_1["default"].createElement(Button_1.Navlink, {
    to: "./projects/editor",
    text: "Editor project"
  }), react_1["default"].createElement(Button_1.Navlink, {
    to: "./projects/react-table",
    text: "react-table"
  }), react_1["default"].createElement(Button_1.Navlink, {
    to: "./projects/space",
    text: "Space"
  }));
};

exports["default"] = Works;

/***/ }),

/***/ "./resources/js/projects/editor/Editor.tsx":
/*!*************************************************!*\
  !*** ./resources/js/projects/editor/Editor.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var Button_1 = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.tsx");

var frame_1 = __importDefault(__webpack_require__(/*! ./components/frame */ "./resources/js/projects/editor/components/frame.tsx"));

var Editor = function Editor(_a) {
  var theme = _a.theme;

  var _b = (0, react_1.useState)(0),
      countImage = _b[0],
      setCountImage = _b[1]; // Name it however you wish


  var _c = (0, react_1.useState)(0),
      countText = _c[0],
      setCountText = _c[1]; // Name it however you wish


  var _d = (0, react_1.useState)(0),
      countDownload = _d[0],
      setCountDownload = _d[1]; // Name it however you wish


  var useStyles = (0, react_jss_1.createUseStyles)({
    editor: {
      color: "red",
      display: "flex",
      height: "84vh",
      flexWrap: "wrap",
      border: "2px solid #b5b0b0",
      paddingTop: "9vh"
    },
    buttons: {
      display: "flex",
      justifyContent: "space-around",
      backdropFilter: "blur(10px)",
      padding: "10px 10px 20px 10px"
    },
    editorWrap: {
      overflow: "hidden"
    }
  });
  var classes = useStyles({
    theme: theme
  });
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: classes.editorWrap
  }, react_1["default"].createElement("div", {
    className: classes.editor,
    id: "download"
  }, __spreadArray([], Array(countImage), true).map(function (_, i) {
    return react_1["default"].createElement(frame_1["default"], {
      type: "image",
      key: i
    });
  }), __spreadArray([], Array(countText), true).map(function (_, i) {
    return react_1["default"].createElement(frame_1["default"], {
      type: "text",
      key: i
    });
  }), __spreadArray([], Array(countDownload), true).map(function (_, i) {
    return react_1["default"].createElement(frame_1["default"], {
      type: "downloader",
      key: i
    });
  })), react_1["default"].createElement("div", {
    className: classes.buttons
  }, react_1["default"].createElement("div", {
    onClick: function onClick() {
      return setCountImage(countImage + 1);
    }
  }, react_1["default"].createElement(Button_1.Button, {
    text: "Add image"
  })), react_1["default"].createElement("div", {
    onClick: function onClick() {
      return setCountText(countText + 1);
    }
  }, react_1["default"].createElement(Button_1.Button, {
    text: "Add text"
  })), react_1["default"].createElement("div", {
    onClick: function onClick() {
      return setCountDownload(countDownload + 1);
    }
  }, react_1["default"].createElement(Button_1.Button, {
    text: "Download image"
  })))));
};

exports["default"] = Editor;

/***/ }),

/***/ "./resources/js/projects/editor/components/control.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/projects/editor/components/control.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __importDefault(__webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js"));

var styles = {
  icons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#ff000026",
    borderRadius: "5px",
    transition: "all 0.2s",
    margin: "2px 6px",
    cursor: "pointer",
    alignItems: "center",
    "&:hover": {
      background: "#ff000045",
      transform: "scale(1.05)"
    },
    "&:active": {
      background: "#ff000061",
      transform: "scale(0.95)"
    }
  }
};

var Control =
/** @class */
function (_super) {
  __extends(Control, _super);

  function Control(props) {
    return _super.call(this, props) || this;
  }

  Control.prototype.render = function () {
    var _a = this.props,
        classes = _a.classes,
        children = _a.children;
    return react_1["default"].createElement("div", {
      className: classes.icons,
      onClick: this.props.ev
    }, this.props.children);
  };

  return Control;
}(react_1["default"].Component);

exports["default"] = (0, react_jss_1["default"])(styles)(Control);

/***/ }),

/***/ "./resources/js/projects/editor/components/dropper.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/projects/editor/components/dropper.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __importDefault(__webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js"));

var hammerjs_1 = __importDefault(__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js"));

var ri_1 = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");

var styles = {
  one: {
    height: "100%",
    width: "100%",
    transition: "all 0.2s"
  },
  two: {
    height: "100%",
    width: "100%",
    transition: "all 0.2s",
    backgroundSize: "cover",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    "&:hover $pin": {
      boxShadow: "0 0 0 10px rgb(0 0 0 / 10%)"
    }
  },
  pin: {
    height: "30px",
    width: "30px",
    background: "#ff2424",
    // border: "3px solid #fffc",
    borderRadius: "20px",
    transition: "all 0.3s"
  },
  pinActive: {
    boxShadow: "0 0 0 4px rgb(0 0 0 / 40%), 0 0 0 14px rgb(0 0 0 / 40%) !important"
  },
  noEvents: {
    pointerEvents: "none"
  },
  dropIcon: {
    height: "14%",
    width: "20%",
    opacity: "77%"
  }
};

var Dropper =
/** @class */
function (_super) {
  __extends(Dropper, _super);

  function Dropper(props) {
    var _this = _super.call(this, props) || this;

    _this.masterRef = react_1["default"].createRef();
    _this.imageRef = react_1["default"].createRef();
    _this.pinRef = react_1["default"].createRef();

    _this.readImage = function (file, ref) {
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e.target.result);
        var uploaded_image = e.currentTarget.result;
        ref.style.backgroundImage = "url(" + uploaded_image + ")";
      };

      _this.setState({
        dropped: true
      });

      reader.readAsDataURL(file);
    };

    _this.state = {
      edit: false,
      dropped: false
    };
    return _this;
  }

  Dropper.prototype.dropEffect = function (e) {
    e.preventDefault();
    this.imageRef.current.style.boxShadow = "rgb(0 0 0 / 22%) 0px 0px 32px 0px";
  };

  Dropper.prototype.dropLeaveEffect = function (e) {
    e.preventDefault();
    this.dle();
  };

  Dropper.prototype.dle = function () {
    this.imageRef.current.style.boxShadow = "rgb(0 0 0 / 13%) 0px 0px 0px 0px";
  };

  Dropper.prototype.drop = function (e) {
    e.preventDefault();
    var fileList = e.dataTransfer.files;
    this.readImage(fileList[0], this.imageRef.current);
    this.dle();
  };

  Dropper.prototype.componentDidUpdate = function (prevProps, prevState) {
    if (prevProps.control == true) {}

    var stage = this.imageRef.current;
    var pin = this.pinRef.current;
    var _a = this.props,
        classes = _a.classes,
        children = _a.children;
    var mc = new hammerjs_1["default"].Manager(stage);
    var Pan = new hammerjs_1["default"].Pan({});
    mc.add(Pan);
    var lastPosX = 0;
    var lastPosY = 0;
    var isDragging = false;
    mc.on('pan', function (e) {
      if (stage && pin) {
        if (e.deltaX < 100 && e.deltaX > -100 && e.deltaY < 100 && e.deltaY > -100) {
          stage.style.backgroundPosition = -1 * e.deltaX + "% " + -1 * e.deltaY + "%";
        }

        pin.style.transform = "translate(" + e.deltaX + "px, " + e.deltaY + "px)";
        pin.classList.add(classes.pinActive);

        if (e.isFinal) {
          pin.style.transform = "translate(0, 0)";
          pin.classList.remove(classes.pinActive);
        }
      }

      return false;
    });
  };

  Dropper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        classes = _a.classes,
        children = _a.children;
    return react_1["default"].createElement("div", {
      ref: this.masterRef,
      onDragOver: function onDragOver(e) {
        return _this.dropEffect(e);
      },
      onDragLeave: function onDragLeave(e) {
        return _this.dropLeaveEffect(e);
      },
      onDrop: function onDrop(e) {
        return _this.drop(e);
      },
      className: classes.one
    }, react_1["default"].createElement("div", {
      ref: this.imageRef,
      className: classes.two + ' ' + (this.props.control ? null : classes.noEvents)
    }, this.state.dropped ? null : react_1["default"].createElement(ri_1.RiDragDropFill, {
      className: classes.dropIcon
    }), this.props.control ? react_1["default"].createElement("div", {
      ref: this.pinRef,
      className: classes.pin
    }) : null));
  };

  return Dropper;
}(react_1["default"].Component);

exports["default"] = (0, react_jss_1["default"])(styles)(Dropper);

/***/ }),

/***/ "./resources/js/projects/editor/components/frame.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/projects/editor/components/frame.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __importDefault(__webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js"));

var hammerjs_1 = __importDefault(__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js"));

var dropper_1 = __importDefault(__webpack_require__(/*! ./dropper */ "./resources/js/projects/editor/components/dropper.tsx"));

var texter_1 = __importDefault(__webpack_require__(/*! ./texter */ "./resources/js/projects/editor/components/texter.tsx"));

var control_1 = __importDefault(__webpack_require__(/*! ./control */ "./resources/js/projects/editor/components/control.tsx"));

var Slider_1 = __importDefault(__webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/index.js"));

var vsc_1 = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");

var bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var ri_1 = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");

var html2canvas_1 = __importDefault(__webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js"));

var styles = {
  box: {
    border: "2px solid rgb(122 122 122 / 10%)",
    borderRadius: "5px",
    height: "162px",
    width: "200px",
    backdropFilter: "blur(10px)",
    '&:hover': {
      backgroundColor: 'rgb(122 122 122 / 10%)'
    }
  },
  handle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: '0',
    transition: "opacity 0.1s",
    "&:hover $handleHeight": {
      transform: "scale(1.1)",
      width: "74px"
    },
    "&:hover $handleWidth": {
      transform: "scale(1.1)",
      height: "64px"
    }
  },
  styleFix: {
    overflowY: "clip"
  },
  handleHeight: {
    background: "#040404",
    width: "70px",
    height: "10px",
    position: "relative",
    top: "-6px",
    borderRadius: "10px",
    transition: "all 0.2s",
    cursor: "n-resize"
  },
  handleWidth: {
    background: "#040404",
    width: "10px",
    height: "60px",
    position: "relative",
    transition: "all 0.2s",
    left: "-6px",
    borderRadius: "10px",
    cursor: "e-resize"
  },
  one: {
    display: "flex",
    flexWrap: "nowrap",
    height: "10px",
    width: "10px",
    '&:hover $handle': {
      opacity: '1'
    },
    '&:hover $box': {
      border: "2px solid rgb(122 122 122 / 100%)"
    },
    '&:hover $controls': {
      opacity: "1"
    },
    '&:hover $controlsRight': {
      right: "-55px"
    },
    '&:hover $controlsBottom': {
      bottom: "-48px"
    }
  },
  controls: {
    position: "absolute",
    opacity: "0",
    transition: "opacity 0.2s, bottom 0.2s, right 0.2s",
    display: "flex"
  },
  controlsRight: {
    bottom: "0px",
    right: "-45px",
    width: "50px",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  controlsBottom: {
    justifyContent: "right",
    width: "100%",
    bottom: "-35px",
    height: "41px"
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    background: "#ff000026",
    borderRadius: "5px",
    transition: "all 0.2s",
    margin: "2px 6px",
    cursor: "pointer",
    "&:hover": {
      background: "#ff000045",
      transform: "scale(1.05)"
    },
    "&:active": {
      background: "#ff000061",
      transform: "scale(0.95)"
    }
  },
  hidden: {
    opacity: 0,
    zIndex: -10
  },
  iconsUndo: {
    animation: "disappear 2.5s none 0.1s 1 normal",
    height: "40px",
    opacity: 0,
    position: "absolute",
    left: "10px",
    bottom: "10px",
    width: "90px",
    fontSize: "13px",
    zIndex: -10
  },
  slider: {
    position: "absolute",
    transition: "all 0.3s ease 0s",
    height: "100px",
    width: "200px",
    background: "rgb(246, 246, 246)",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "rgb(145 145 145 / 21%) 0px 0px 0px 1px, rgb(173 163 163 / 13%) -1px 5px 14px 0px"
  },
  noEvents: {
    pointerEvents: "none"
  },
  events: {
    pointerEvents: "all"
  },
  colorInput: {
    opacity: "0",
    width: "0",
    height: "0",
    padding: "0"
  },
  downloader: {
    backdropFilter: 'none',
    minHeight: "262px",
    minWidth: "250px",
    height: "100%",
    width: "100%"
  }
};

function hasParentWithMatchingSelector(target, selector) {
  var allSubMenus = document.querySelectorAll(selector);
  var myArray = Array.from(allSubMenus);
  return __spreadArray([], myArray, true).some(function (el) {
    return el !== target && el.contains(target);
  });
}

var Frame =
/** @class */
function (_super) {
  __extends(Frame, _super);

  function Frame(props) {
    var _this = _super.call(this, props) || this;

    _this.masterRef = react_1["default"].createRef();
    _this.heightRef = react_1["default"].createRef();
    _this.widthRef = react_1["default"].createRef();
    _this.downloaderRef = react_1["default"].createRef();
    _this.sliderRef = react_1["default"].createRef();

    _this.toggleShowComponentState = function () {
      _this.setState({
        showComponent: _this.state.showComponent ? false : true
      });
    };

    _this.toggleTextBoldState = function () {
      _this.setState({
        boldText: _this.state.boldText ? false : true
      });
    };

    _this.handleFontSizeState = function (event) {
      _this.setState({
        fontSizeSlider: _this.state.fontSizeSlider ? false : true
      });
    };

    _this.handleFontSizeChange = function (event) {
      _this.setState({
        fontSize: event.target.value + "px"
      });
    };

    _this.toggleControlToDropper = function () {
      _this.setState({
        controlToDropper: _this.state.controlToDropper ? false : true
      });

      localStorage.setItem('control', _this.state.controlToDropper ? '1' : '0');
    };

    _this.handleFontColorChange = function (event) {
      _this.setState({
        textColor: event.currentTarget.value
      });
    };

    _this.handleBackgroundColorChange = function (event) {
      _this.setState({
        textBackColor: event.currentTarget.value
      });
    };

    _this.handleDownload = function () {
      var downloader = _this.downloaderRef.current;

      if (downloader) {
        (0, html2canvas_1["default"])(document.getElementById('download'), {
          useCORS: true,
          scale: 3,
          x: downloader.getBoundingClientRect().x,
          y: downloader.getBoundingClientRect().top,
          height: downloader.getBoundingClientRect().height,
          width: downloader.getBoundingClientRect().width
        }).then(function (canvas) {
          document.body.appendChild(canvas);
          var myImage = canvas.toDataURL("image/png");
          var link = document.createElement("a");
          document.body.appendChild(link);
          link.setAttribute("href", myImage);
          link.setAttribute("download", 'yoo.png');
          link.click();
          canvas.remove();
        });
      }
    };

    _this.state = {
      height: 0,
      width: 0,
      x: 0,
      y: 0,
      showComponent: true,
      fontSizeSlider: false,
      fontSize: "18px",
      boldText: false,
      controlToDropper: false,
      textColor: 'red',
      textBackColor: 'transparent'
    };
    return _this;
  }

  Frame.prototype.componentDidMount = function () {
    var _this = this;

    var stage = this.masterRef.current;
    var widthstage = this.widthRef.current;
    var heightstage = this.heightRef.current;
    var height = stage.offsetHeight;
    this.setState({
      height: height
    });
    var width = stage.offsetWidth;
    this.setState({
      width: width
    });
    var mc = new hammerjs_1["default"].Manager(stage);
    var Pan = new hammerjs_1["default"].Pan({});
    mc.add(Pan);
    var lastPosX = 0;
    var lastPosY = 0;
    var isDragging = false;

    var XY = function XY(x, y) {
      _this.setState({
        x: x
      });

      _this.setState({
        y: y
      });
    };

    mc.on('pan', function (e) {
      if (e.target.classList.contains('disableHammer')) return false;
      if (hasParentWithMatchingSelector(e.target, '.disableHammer')) return false;
      if (!Boolean(Number(localStorage.getItem('control')))) return false;

      if (!isDragging) {
        isDragging = true;
      }

      var posX = e.deltaX + lastPosX;
      var posY = e.deltaY + lastPosY;

      if (e.isFinal) {
        isDragging = false;
        lastPosX = posX;
        lastPosY = posY;
      } else {
        stage.style.transform = 'translate(' + posX + 'px,' + posY + 'px)';
        widthstage.style.transform = 'translate(' + posX + 'px,' + posY + 'px)';
        heightstage.style.transform = 'translate(' + posX + 'px,' + posY + 'px)';
        XY(posX, posY);
      }
    });
    var heightmc = new hammerjs_1["default"].Manager(heightstage);
    var heightPan = new hammerjs_1["default"].Pan({});
    heightmc.add(heightPan);
    var heightlastPosX = height;
    var heightlastPosY = height;
    var heightisDragging = false;
    heightmc.on('pan', function (e) {
      e.srcEvent.stopPropagation();

      if (!heightisDragging) {
        heightisDragging = true;
      }

      var posX = e.deltaX + heightlastPosX;
      var posY = e.deltaY + heightlastPosY;

      if (e.isFinal) {
        heightisDragging = false;
        heightlastPosX = posX;
        heightlastPosY = posY;
        lastPosX = lastPosX;
        lastPosY = lastPosY;
      }

      var el = _this.masterRef.current;
      el.style.height = posY + "px";

      _this.setState({
        height: posY
      });
    });
    var widthmc = new hammerjs_1["default"].Manager(widthstage);
    var widthPan = new hammerjs_1["default"].Pan({});
    widthmc.add(widthPan);
    var widthlastPosX = width;
    var widthlastPosY = width;
    var widthisDragging = false;
    widthmc.on('pan', function (e) {
      if (!widthisDragging) {
        widthisDragging = true;
      }

      var posX = e.deltaX + widthlastPosX;
      var posY = e.deltaY + widthlastPosY;

      if (e.isFinal) {
        widthisDragging = false;
        widthlastPosX = posX;
        widthlastPosY = posY;
      }

      var el = _this.masterRef.current;
      el.style.width = posX + "px";

      _this.setState({
        width: posX
      });
    });
  };

  Frame.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        classes = _a.classes,
        children = _a.children;
    return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
      className: classes.one + ' ' + (this.state.showComponent ? null : classes.hidden)
    }, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
      ref: this.masterRef,
      className: classes.box + ' ' + (this.props.type == "downloader" && classes.downloader)
    }, this.props.type == "text" && react_1["default"].createElement(texter_1["default"], {
      color: this.state.textColor,
      size: this.state.fontSize,
      bold: this.state.boldText,
      background: this.state.textBackColor
    }), this.props.type == "downloader" && react_1["default"].createElement("div", {
      ref: this.downloaderRef,
      className: classes.downloader
    }), this.props.type == "image" && react_1["default"].createElement(dropper_1["default"], {
      control: this.state.controlToDropper
    }), react_1["default"].createElement("div", {
      className: classes.controls + ' ' + classes.controlsRight
    }, this.props.type == "text" && react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(control_1["default"], {
      ev: this.toggleTextBoldState
    }, react_1["default"].createElement(bi_1.BiBold, null)), react_1["default"].createElement(control_1["default"], {
      ev: this.handleFontSizeState
    }, react_1["default"].createElement(vsc_1.VscTextSize, null)), react_1["default"].createElement("label", {
      className: classes.icons
    }, react_1["default"].createElement(bi_1.BiFontColor, null), react_1["default"].createElement("input", {
      onChange: this.handleFontColorChange,
      type: "color",
      className: classes.colorInput
    })), " ", react_1["default"].createElement("label", {
      className: classes.icons
    }, react_1["default"].createElement(bi_1.BiImage, null), react_1["default"].createElement("input", {
      onChange: this.handleBackgroundColorChange,
      type: "color",
      className: classes.colorInput
    }))), this.props.type == "downloader" && react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
      className: classes.icons,
      onClick: this.handleDownload
    }, react_1["default"].createElement(ri_1.RiDownloadLine, null)), " "), react_1["default"].createElement("div", {
      className: classes.icons
    }, react_1["default"].createElement(bi_1.BiMinusFront, null)), " "), react_1["default"].createElement("div", {
      className: classes.controls + ' ' + classes.controlsBottom
    }, this.props.type == "image" && react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(control_1["default"], {
      ev: this.toggleControlToDropper
    }, react_1["default"].createElement(vsc_1.VscMove, null))), react_1["default"].createElement(control_1["default"], {
      ev: this.toggleShowComponentState
    }, react_1["default"].createElement(vsc_1.VscTrash, null)))), react_1["default"].createElement("div", {
      ref: this.heightRef,
      style: {
        width: this.state.width + "px"
      },
      className: classes.handle + ' controls'
    }, react_1["default"].createElement("div", {
      className: classes.handleHeight
    }))), react_1["default"].createElement("div", {
      ref: this.widthRef,
      style: {
        height: this.state.height + "px"
      },
      className: classes.handle + ' ' + classes.styleFix + ' controls'
    }, react_1["default"].createElement("div", {
      className: classes.handleWidth
    }))), this.state.showComponent ? null : react_1["default"].createElement("div", {
      className: classes.iconsUndo
    }, react_1["default"].createElement(control_1["default"], {
      ev: this.toggleShowComponentState
    }, react_1["default"].createElement(vsc_1.VscDebugStepBack, null), " Undoo")), this.state.fontSizeSlider ? react_1["default"].createElement("div", {
      ref: this.widthRef,
      style: {
        top: this.state.y + 110 + "px",
        left: this.state.x + 220 + "px"
      },
      className: classes.slider
    }, react_1["default"].createElement(Slider_1["default"], {
      onChange: function onChange(e) {
        _this.handleFontSizeChange(e);
      }
    })) : null);
  };

  return Frame;
}(react_1["default"].Component);

exports["default"] = (0, react_jss_1["default"])(styles)(Frame);

/***/ }),

/***/ "./resources/js/projects/editor/components/texter.tsx":
/*!************************************************************!*\
  !*** ./resources/js/projects/editor/components/texter.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __importDefault(__webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js"));

var styles = {
  one: {
    height: "100%",
    width: "100%"
  }
};

var Texter =
/** @class */
function (_super) {
  __extends(Texter, _super);

  function Texter(props) {
    return _super.call(this, props) || this;
  }

  Texter.prototype.render = function () {
    var _a = this.props,
        classes = _a.classes,
        children = _a.children;
    return react_1["default"].createElement("div", {
      contentEditable: true,
      suppressContentEditableWarning: true,
      style: {
        color: "" + this.props.color,
        background: "" + this.props.background,
        fontWeight: "" + (this.props.bold ? 'bold' : 'normal'),
        fontSize: "" + this.props.size
      },
      className: classes.one
    }, "text");
  };

  return Texter;
}(react_1["default"].Component);

exports["default"] = (0, react_jss_1["default"])(styles)(Texter);

/***/ }),

/***/ "./resources/js/projects/react-table/table.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/projects/react-table/table.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var react_table_1 = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var GlobalFilter = function GlobalFilter(_a) {
  var filter = _a.filter,
      setFilter = _a.setFilter;

  var _b = (0, react_1.useState)(filter),
      value = _b[0],
      setValue = _b[1];

  var _onChange = (0, react_table_1.useAsyncDebounce)(function (value) {
    setFilter(value || undefined);
  }, 1);

  return react_1["default"].createElement("span", null, "Search:", react_1["default"].createElement(material_1.TextField, {
    id: "outlined-basic",
    label: "Search",
    variant: "outlined",
    value: value || '',
    onChange: function onChange(e) {
      setValue(e.target.value);

      _onChange(e.target.value);
    }
  }));
};

var ColumnFilter = function ColumnFilter(_a) {
  var column = _a.column;
  var filterValue = column.filterValue,
      setFilter = column.setFilter;
  return react_1["default"].createElement("span", null, react_1["default"].createElement(material_1.TextField, {
    id: "outlined-basic",
    label: "Search",
    variant: "outlined",
    value: filterValue || "",
    onChange: function onChange(e) {
      return setFilter(e.target.value);
    }
  }));
};

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

var EqualFilter = function EqualFilter(_a) {
  var _b = _a.column,
      filterValue = _b.filterValue,
      setFilter = _b.setFilter,
      preFilteredRows = _b.preFilteredRows,
      id = _b.id; // Calculate the min and max using the preFilteredRows
  //filterValue = current value of filter
  //setFilter = An instance-level function used to update the filter value for a specific column.
  //preFilteredRows = Currently available rows
  //id = column identifier 

  var _c = react_1["default"].useMemo(function () {
    var min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    var max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(function (row) {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]),
      min = _c[0],
      max = _c[1];

  return react_1["default"].createElement(material_1.FormControl, {
    fullWidth: true
  }, react_1["default"].createElement(material_1.Slider, {
    "aria-label": "Volume",
    valueLabelDisplay: "auto",
    min: min,
    max: max + 10,
    value: filterValue || min,
    onChange: function onChange(e) {
      var _a;

      return setFilter(parseInt((_a = e.target) === null || _a === void 0 ? void 0 : _a.value, 10));
    }
  }), react_1["default"].createElement(material_1.Button, {
    variant: "contained",
    onClick: function onClick() {
      return setFilter(undefined);
    }
  }, "Off"));
};

var DropdownFilter = function DropdownFilter(_a) {
  var _b = _a.column,
      filterValue = _b.filterValue,
      setFilter = _b.setFilter,
      preFilteredRows = _b.preFilteredRows,
      id = _b.id; // Calculate the options for filtering using the preFilteredRows

  var options = react_1["default"].useMemo(function () {
    var options = new Set();
    preFilteredRows.forEach(function (row) {
      options.add(row.values[id]);
    });
    return __spreadArray([], Array.from(options.values()), true);
  }, [id, preFilteredRows]);
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(material_1.FormControl, {
    fullWidth: true
  }, react_1["default"].createElement(material_1.InputLabel, {
    id: "demo-simple-select-label"
  }, "Status"), react_1["default"].createElement(material_1.Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Status",
    value: filterValue || '',
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined);
    }
  }, react_1["default"].createElement(material_1.MenuItem, {
    value: ""
  }, "All"), options.map(function (option, i) {
    return react_1["default"].createElement(material_1.MenuItem, {
      key: i,
      value: option
    }, option);
  }))));
}; //END DROPDOWN FILTER


function Table() {
  function customFilterFunction(rows, id, filterValue) {
    return rows.filter(function (row) {
      return row.original.col6 >= filterValue;
    });
  }

  var data = react_1["default"].useMemo(function () {
    return [{
      colA: 'Hello',
      col2: 'World',
      col3: 13,
      col4: 'active',
      col5: 'up',
      col6: 3
    }, {
      colA: 'react-table',
      col2: 'rocks',
      col3: 48,
      col4: 'inactive',
      col5: 'up',
      col6: 9
    }, {
      colA: 'whatever',
      col2: 'you want',
      col3: 76,
      col4: 'active',
      col5: 'down',
      col6: 14
    }, {
      colA: 'Ahatever',
      col2: 'you want',
      col3: 24,
      col4: 'inactive',
      col5: 'up',
      col6: 5
    }];
  }, []);
  var options = react_1["default"].useMemo(function () {
    var options = new Set();
    data.forEach(function (row) {
      options.add(row.col4);
    });
    return __spreadArray([], Array.from(options.values()), true);
  }, [data]);
  var columns = react_1["default"].useMemo(function () {
    return [{
      Header: 'Column A',
      accessor: 'colA',
      Footer: 'Name',
      Filter: false
    }, {
      Header: 'Column B',
      accessor: 'col2',
      Footer: function Footer(column) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Total ", column.rows.reduce(function (sum, row) {
          return parseInt(row.id) + sum;
        }, 0));
      },
      Filter: ColumnFilter,
      disableSortBy: true
    }, {
      Header: 'Number',
      accessor: 'col3',
      Footer: function Footer(column) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Total ", column.rows.reduce(function (sum, row) {
          return parseInt(row.id) + sum;
        }, 0));
      },
      Filter: EqualFilter,
      filter: filterGreaterThan,
      disableSortBy: true
    }, {
      Header: 'Status',
      accessor: 'col4',
      Footer: function Footer(column) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Total ", column.rows.reduce(function (sum, row) {
          return parseInt(row.id) + sum;
        }, 0));
      },
      Filter: DropdownFilter,
      filter: 'equals',
      disableSortBy: true
    }, {
      Header: 'Status2',
      accessor: 'col5',
      Footer: function Footer(column) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Total ", column.rows.reduce(function (sum, row) {
          return parseInt(row.id) + sum;
        }, 0));
      },
      Filter: DropdownFilter,
      filter: 'equals',
      disableSortBy: true
    }, {
      Header: 'Outside',
      accessor: 'col6',
      Footer: function Footer(column) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Total ", column.rows.reduce(function (sum, row) {
          return parseInt(row.id) + sum;
        }, 0));
      },
      Filter: true,
      filter: customFilterFunction,
      disableSortBy: true
    }];
  }, []);

  var _a = (0, react_table_1.useTable)({
    columns: columns,
    data: data
  }, react_table_1.useFilters, react_table_1.useGlobalFilter, react_table_1.useSortBy),
      getTableProps = _a.getTableProps,
      getTableBodyProps = _a.getTableBodyProps,
      headerGroups = _a.headerGroups,
      rows = _a.rows,
      footerGroups = _a.footerGroups,
      state = _a.state,
      setGlobalFilter = _a.setGlobalFilter,
      setFilter = _a.setFilter,
      prepareRow = _a.prepareRow;

  var globalFilter = state.globalFilter;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(GlobalFilter, {
    filter: globalFilter,
    setFilter: setGlobalFilter
  }), react_1["default"].createElement(material_1.Slider, {
    style: {
      width: "200px"
    },
    size: "small",
    "aria-label": "Small",
    max: 20,
    onChange: function onChange(e) {
      setFilter("col6", e.target.value);
    }
  }), react_1["default"].createElement(material_1.FormControl, null, react_1["default"].createElement(material_1.InputLabel, {
    id: "demo-simple-select-label"
  }, "Status"), react_1["default"].createElement(material_1.Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Status",
    onChange: function onChange(e) {}
  }, react_1["default"].createElement(material_1.MenuItem, {
    value: ""
  }, "All"), options.map(function (option, i) {
    return react_1["default"].createElement(material_1.MenuItem, {
      key: i,
      value: option
    }, option);
  }))), react_1["default"].createElement("table", __assign({}, getTableProps()), react_1["default"].createElement("thead", null, headerGroups.map(function (headerGroup) {
    return react_1["default"].createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      return react_1["default"].createElement("th", __assign({}, column.getHeaderProps()), column.render('Header'), column.canSort ? react_1["default"].createElement("div", __assign({}, column.getHeaderProps(column.getSortByToggleProps())), column.isSorted ? column.isSortedDesc ? '🔽' : '🔼' : '', "sort") : null, column.canFilter ? column.render('Filter') : null);
    }));
  })), react_1["default"].createElement("tbody", __assign({}, getTableBodyProps()), rows.map(function (row) {
    prepareRow(row);
    return react_1["default"].createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
      return react_1["default"].createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
    }));
  })), react_1["default"].createElement("tfoot", null, footerGroups.map(function (group) {
    return react_1["default"].createElement("tr", __assign({}, group.getFooterGroupProps()), group.headers.map(function (column) {
      return react_1["default"].createElement("td", __assign({}, column.getFooterProps()), column.render('Footer'));
    }));
  }))));
}

exports["default"] = Table;

/***/ }),

/***/ "./resources/js/projects/space/Components.tsx":
/*!****************************************************!*\
  !*** ./resources/js/projects/space/Components.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AddItem = exports.Blank = void 0;

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Blank = function Blank() {
  return react_1["default"].createElement(react_1["default"].Fragment, null);
};

exports.Blank = Blank;

var AddItem = function AddItem(_a) {
  var open = _a.open,
      setOpen = _a.setOpen;

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  var modal = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  var modalContent = {
    background: "#fff",
    padding: "16px",
    maxWidth: "360px",
    minWidth: "210px",
    width: "50%",
    borderRadius: "6px",
    boxShadow: "0px 7px 16px 8px #00000026"
  };
  var input = {
    margin: "0 0 15px 0",
    fontWeight: 600
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(material_1.Modal, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description",
    style: modal
  }, react_1["default"].createElement(material_1.Paper, {
    style: modalContent
  }, react_1["default"].createElement("h2", {
    style: {
      margin: "5px 0 14px 4px"
    }
  }, "Add an item"), react_1["default"].createElement(material_1.TextField, {
    fullWidth: true,
    style: input,
    label: "Name"
  }), react_1["default"].createElement(material_1.TextField, {
    fullWidth: true,
    style: input,
    label: "Link"
  }), react_1["default"].createElement(material_1.Button, {
    style: input,
    variant: "outlined"
  }, "add entry"))));
};

exports.AddItem = AddItem;

/***/ }),

/***/ "./resources/js/projects/space/Dashboard.tsx":
/*!***************************************************!*\
  !*** ./resources/js/projects/space/Dashboard.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Page_1 = __importDefault(__webpack_require__(/*! ./Page */ "./resources/js/projects/space/Page.tsx"));

var Space_1 = __importDefault(__webpack_require__(/*! ./Space */ "./resources/js/projects/space/Space.tsx"));

function App() {
  var _a = (0, react_1.useState)(null),
      token = _a[0],
      setToken = _a[1];

  if (!token && !sessionStorage.getItem('token')) {
    return react_1["default"].createElement(Space_1["default"], {
      setToken: setToken
    });
  } else if (sessionStorage.getItem('token') && !token) {
    setToken(sessionStorage.getItem('token'));
  }

  axios_1["default"].defaults.headers.common["Authorization"] = "Bearer " + token;
  return react_1["default"].createElement("div", {
    className: "wrapper"
  }, react_1["default"].createElement(Page_1["default"], null), token);
}

exports["default"] = App;

/***/ }),

/***/ "./resources/js/projects/space/Page.tsx":
/*!**********************************************!*\
  !*** ./resources/js/projects/space/Page.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Components_1 = __webpack_require__(/*! ./Components */ "./resources/js/projects/space/Components.tsx");

function Page() {
  var _a = (0, react_1.useState)(false),
      addItem = _a[0],
      setAddItem = _a[1];

  (0, react_1.useEffect)(function () {
    var formData = new FormData();
    formData.append('email', 'username');
    axios_1["default"].post('http://127.0.0.1:8000/api/getSpaceItems', formData).then(function (response) {
      console.log(response.data);
    })["catch"](function (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    });
  }, []);

  function handleAddItem() {
    setAddItem(true);
  }

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("h2", null, "Space"), react_1["default"].createElement(material_1.Skeleton, {
    animation: "wave",
    variant: "rectangular",
    width: 210,
    height: 118
  }), react_1["default"].createElement(material_1.Button, {
    onClick: handleAddItem
  }, "Open modal"), react_1["default"].createElement(Components_1.AddItem, {
    open: addItem,
    setOpen: setAddItem
  }));
}

exports["default"] = Page;

/***/ }),

/***/ "./resources/js/projects/space/Space.tsx":
/*!***********************************************!*\
  !*** ./resources/js/projects/space/Space.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_jss_1 = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");

var fi_1 = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var Space = function Space(_a) {
  var setToken = _a.setToken;
  var useStyles = (0, react_jss_1.createUseStyles)({
    form: {
      padding: "9vh 30vw 9vh 3vw",
      display: "block",
      width: "320px",
      overflow: "hidden"
    },
    formWrap: {
      display: "flex",
      justifyContent: "center"
    },
    textInput: {
      fontSize: "20px",
      fontFamily: "inherit",
      fontWeight: "300",
      padding: "13px",
      margin: "10px",
      border: "2px solid transparent",
      borderRadius: "10px",
      transition: "all .1s",
      background: "var(--background-color)",
      boxShadow: "rgb(0 0 0 / 10%) 3px 3px 4px 2px, rgb(255 255 255 / 91%) -3px -3px 4px 2px, inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
      "&:focus": {
        outlineWidth: "0px",
        boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px"
      }
    },
    next: {
      background: "var(--background-color)",
      fontSize: "20px",
      borderRadius: "10px",
      transition: "boxShadow .1s, transform .3s",
      margin: "10px",
      padding: "13px",
      boxShadow: "rgb(0 0 0 / 10%) 3px 3px 4px 2px, rgb(255 255 255 / 91%) -3px -3px 4px 2px, inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0",
      "&:hover": {
        boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px"
      },
      "&:focus": {
        outlineWidth: "0px",
        boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px"
      }
    },
    hovered: {
      boxShadow: "rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0, inset rgb(255 255 255 / 83%) -3px -3px 4px 2px, inset rgb(217 217 217 / 46%) 3px 4px 4px 2px"
    },
    dropIcon: {
      display: "inline",
      stroke: "#000000ed",
      strokeWidth: "1px"
    },
    head: {
      margin: "10px"
    },
    dFlex: {
      display: "flex"
    },
    action: {
      fontFamily: "inherit",
      fontSize: "18px"
    },
    login: {
      transform: "translateX(65px)"
    },
    register: {
      transform: "translateX(-65px)"
    },
    opacityZero: {
      opacity: 0
    },
    error: {
      color: "red",
      border: "2px solid #ff000042",
      "::placeholder": {
        color: "red"
      }
    }
  });
  var classes = useStyles({});
  var button = (0, react_1.useRef)(null);
  var nameInput = (0, react_1.useRef)(null);
  var usernameInput = (0, react_1.useRef)(null);
  var passwordInput = (0, react_1.useRef)(null);
  var confirmPasswordInput = (0, react_1.useRef)(null);
  var heading = (0, react_1.useRef)(null);

  var _b = (0, react_1.useState)('login'),
      action = _b[0],
      setAction = _b[1];

  var _c = (0, react_1.useState)(''),
      username = _c[0],
      setUsername = _c[1];

  var _d = (0, react_1.useState)(''),
      password = _d[0],
      setPassword = _d[1];

  var _e = (0, react_1.useState)(''),
      confirmPassword = _e[0],
      setConfirmPassword = _e[1];

  var _f = (0, react_1.useState)(''),
      name = _f[0],
      setName = _f[1];

  function handleChange(event) {
    event.currentTarget.classList.remove(classes.error);

    if (event.currentTarget.name == 'username') {
      setUsername(event.currentTarget.value);
    } else if (event.currentTarget.name == 'password') {
      setPassword(event.currentTarget.value);
    } else if (event.currentTarget.name == 'name') {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name == 'confirm_password') {
      setConfirmPassword(event.currentTarget.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    button.current.classList.add(classes.hovered);
    setTimeout(function () {
      button.current.classList.remove(classes.hovered);
    }, 100);
    var formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

    if (action == 'login') {
      axios_1["default"].post('http://127.0.0.1:8000/api/login', formData).then(function (response) {
        console.log(response.data.data.token);
        setToken(response.data.data.token);
        sessionStorage.setItem('token', response.data.data.token);
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data);

          for (var property in error.response.data.data) {
            addErrorClass(usernameInput);
            addErrorClass(passwordInput);
          }
        }
      });
    } else if (action == 'register') {
      formData.append('name', name);
      formData.append('password', password);
      formData.append('confirm_password', confirmPassword);
      axios_1["default"].post('http://127.0.0.1:8000/api/register', formData).then(function (response) {
        console.log(response.data);
        button.current.click();
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data);

          for (var property in error.response.data.data) {
            usernameInput.current.focus();
            console.log(property + ": " + error.response.data.data[property]);

            if (property == 'name') {
              addErrorClass(nameInput);
            }

            if (property == 'email') {
              addErrorClass(usernameInput);
            }

            if (property == 'password') {
              addErrorClass(passwordInput);
            }

            if (property == 'confirm_password') {
              addErrorClass(confirmPasswordInput);
            }
          }
        }
      });
    }
  }

  function addErrorClass(ref) {
    ref.current.classList.add(classes.error);
    usernameInput.current.focus();
  }

  function removeErrorClass() {
    if (usernameInput.current) {
      usernameInput.current.classList.remove(classes.error);
    }

    if (passwordInput.current) {
      passwordInput.current.classList.remove(classes.error);
    }

    if (nameInput.current) {
      nameInput.current.classList.remove(classes.error);
    }

    if (confirmPasswordInput.current) {
      confirmPasswordInput.current.classList.remove(classes.error);
    }
  }

  function handleRegister(e) {
    if (action == 'register') return;
    e.preventDefault();
    removeErrorClass();
    usernameInput.current.focus();
    setAction('register');
  }

  function handleLogin(e) {
    if (action == 'login') return;
    e.preventDefault();
    removeErrorClass();
    usernameInput.current.focus();
    setAction('login');
  }

  (0, react_1.useEffect)(function () {
    console.log(action, heading.current);
    var arrive = [{
      transform: 'translatex(-15px)',
      opacity: "0",
      offset: 0
    }, {
      transform: 'translatex(0px)',
      opacity: "1",
      offset: 1
    }];
    heading.current.animate(arrive, {
      duration: 100
    });
    setTimeout(function () {
      heading.current.classList.remove(classes.opacityZero);
    }, 100);
  }, [action]);
  return react_1["default"].createElement("div", null, react_1["default"].createElement("form", {
    onSubmit: function onSubmit(event) {
      return handleSubmit(event);
    },
    className: classes.formWrap
  }, react_1["default"].createElement("div", {
    className: classes.form
  }, react_1["default"].createElement("h2", {
    className: classes.head + ' ' + classes.opacityZero,
    ref: heading
  }, action == 'login' ? react_1["default"].createElement(react_1["default"].Fragment, null, "Login") : action == 'register' ? react_1["default"].createElement(react_1["default"].Fragment, null, "Register") : null), react_1["default"].createElement("input", {
    autoComplete: "off",
    placeholder: "username",
    className: classes.textInput,
    type: "text",
    name: "username",
    onChange: function onChange(event) {
      return handleChange(event);
    },
    ref: usernameInput
  }), action == 'register' ? react_1["default"].createElement("input", {
    autoComplete: "off",
    placeholder: "name",
    className: classes.textInput,
    type: "text",
    name: "name",
    onChange: function onChange(event) {
      return handleChange(event);
    },
    ref: nameInput
  }) : null, react_1["default"].createElement("input", {
    autoComplete: "off",
    placeholder: "password",
    className: classes.textInput,
    type: "password",
    name: "password",
    onChange: function onChange(event) {
      return handleChange(event);
    },
    ref: passwordInput
  }), action == 'register' ? react_1["default"].createElement("input", {
    autoComplete: "off",
    placeholder: "confirm password",
    className: classes.textInput,
    type: "password",
    name: "confirm_password",
    onChange: function onChange(event) {
      return handleChange(event);
    },
    ref: confirmPasswordInput
  }) : null, react_1["default"].createElement("div", {
    className: classes.dFlex
  }, react_1["default"].createElement("button", {
    type: action == 'login' ? "submit" : undefined,
    className: classes.next + ' ' + (action == 'register' ? classes.login : null),
    ref: button,
    onClick: function onClick(event) {
      return handleLogin(event);
    }
  }, action == 'login' ? react_1["default"].createElement(fi_1.FiChevronRight, {
    className: classes.dropIcon
  }) : null, action == 'register' ? react_1["default"].createElement(fi_1.FiLogIn, {
    className: classes.dropIcon
  }) : null), react_1["default"].createElement("button", {
    type: action == 'register' ? "submit" : undefined,
    className: classes.next + ' ' + classes.action + ' ' + (action == 'register' ? classes.register : null),
    onClick: function onClick(event) {
      return handleRegister(event);
    }
  }, action == 'register' ? react_1["default"].createElement(fi_1.FiChevronRight, {
    className: classes.dropIcon
  }) : null, action == 'login' ? react_1["default"].createElement(fi_1.FiUserPlus, {
    className: classes.dropIcon
  }) : null)))));
};

exports["default"] = Space;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./resources/js/style.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./resources/js/style.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color: red;\n  --main-color-hex: 255,0,0;\n  --accent-color: #000;\n  --tertiary-color: #000;\n  --background-color: rgba(235, 235, 235, 0.433);\n  --text-color: #000;\n  --color-one: rgb(255, 0, 0);\n  --color-one-light: rgba(255, 0, 0, 0.205);\n}\n@media (prefers-color-scheme: dark) {\n  \n}\nbody {\n  margin: 0;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  /* font-size: calc(12px + 1vw); */\n  font-size: 17px;\n  overflow-x: hidden;\n  width: 100vw;\n}\n.reveal {\n  opacity: 0;\n}\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n\nh1,\nh2 {\n  font-weight: 600;\n  color: var(--main-color);\n}\nh1 {\n  font-size: 50px;\n}\nh2 {\n  font-size: 30px;\n}\n\n.container {\n  padding: 12vh 10vw;\n}\n.container-no-margin{\n  padding: 2vh 10vw;\n}\n.backtext {\n  /* right: 10vw; */\n  font-size: 100px;\n  -webkit-text-stroke: 1px var(--main-color);\n  -webkit-text-fill-color: transparent;\n  height: 0;\n  opacity: 0;\n  left: -8vw;\n  transition: opacity 0.3s;\n  width: 100vw;\n  text-align: center;\n}\n.button {\n  transition: all 0.15s;\n  box-shadow: rgb(0 0 0 / 10%) 3px 3px 4px 2px,\n    rgb(255 255 255 / 91%) -3px -3px 4px 2px,\n    inset rgb(255 255 255 / 83%) 0 0 0 0, inset rgb(241 237 237 / 91%) 0 0 0 0;\n  /* font-size: 20px; */\n  padding: 10px 38px 10px 15px;\n  border-radius: 5px;\n  margin: 5px 10px 0 0;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  display: inline-block;\n}\n.button:hover {\n  box-shadow: rgb(0 0 0 / 10%) 0 0 0 0, rgb(255 255 255 / 91%) 0 0 0 0,\n    inset rgb(255 255 255 / 83%) -3px -3px 4px 2px,\n    inset rgb(241 237 237 / 91%) 3px 4px 4px 2px;\n  padding: 10px 44px 10px 22px;\n  text-decoration: none;\n}\n.button .icon {\n  height: 29px;\n  width: 29px;\n  position: absolute;\n  top: 5px;\n  right: 7px;\n  opacity: 0.55;\n  fill: #ff00007d;\n  transition: all 0.9s;\n}\n.button:hover .icon {\n  top: 5px;\n  right: 5px;\n  fill: #ff0000c5;\n}\n@media screen and (max-width: 600px) {\n  .backtext {\n    /* right: 1vw; */\n    font-size: 61px;\n  }\n  h1 {\n    font-size: 40px;\n  }\n  h2 {\n    font-size: 25px;\n  }\n  .container {\n    padding: 12vh 5vw;\n  }\n}\n.currentSlide {\n  transform: scale(0.7);\n}\n/* Background begin */\n\n#backWrap {\n  position: absolute;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: space-around;\n  align-items: center;\n  z-index: -1;\n  transform: scale(1);\n}\n#backWrap div {\n  position: absolute;\n  border: 0px solid var(--color-one);\n  border-radius: 0px 0px;\n  opacity: 0;\n  transform: translate(0px, 0px) scale(3);\n}\n#backWrap div:nth-child(1) {\n  background-color: var(--color-one-light);\n  height: 800px;\n  width: 300px;\n  animation: back 6s cubic-bezier(1, 0, 0.35, 1.08) 0.41s infinite\n    alternate-reverse;\n}\n#backWrap div:nth-child(2) {\n  background-color: var(--color-one-light);\n  height: 800px;\n  width: 800px;\n  animation: back 4s cubic-bezier(1, 0, 0.35, 1.08) 0.62s infinite\n    alternate-reverse;\n}\n#backWrap div:nth-child(3) {\n  background-color: var(--color-one-light);\n  height: 150px;\n  width: 350px;\n  animation: back 4s cubic-bezier(1, 0, 0.35, 1.08) 0.83s infinite\n    alternate-reverse;\n}\n#backWrap div:nth-child(4) {\n  background-color: var(--color-one-light);\n  height: 120px;\n  width: 120px;\n  animation: back 5s cubic-bezier(1, 0, 0.35, 1.08) 1.1s infinite\n    alternate-reverse;\n}\n#backWrap div:nth-child(5) {\n  background-color: var(--color-one-light);\n  height: 50px;\n  width: 50px;\n  animation: back 1s cubic-bezier(1, 0, 0.35, 1.08) 1.5s infinite\n    alternate-reverse;\n}\n#backWrap div:nth-child(6) {\n  background-color: var(--color-one-light);\n  height: 50px;\n  width: 140px;\n  animation: back 3s cubic-bezier(1, 0, 0.35, 1.08) 1.6s infinite\n    alternate-reverse;\n}\n#backWrap div:nth-child(7) {\n  background-color: var(--color-one-light);\n  height: 250px;\n  width: 250px;\n  animation: back 3s cubic-bezier(1, 0, 0.35, 1.08) 1.3s infinite\n    alternate-reverse;\n}\n@-webkit-keyframes back {\n  0% {\n    border-radius: 0px 0px;\n    opacity: 0.21;\n    transform: translate(30vw, -20vh) scale(1);\n  }\n  30% {\n    border-radius: 10px 10px;\n    border: 0px solid var(--color-one);\n    background-color: var(--color-one-light);\n    opacity: 0.21;\n    transform: translate(33vw, -22vh) scale(0.92);\n  }\n  40% {\n    border-radius: 10px 200px;\n    opacity: 0.21;\n    filter: hue-rotate(-68deg);\n    border: 1px solid var(--color-one);\n    background: transparent;\n    transform: translate(30vw, -20vh) scale(1);\n  }\n  60% {\n    border-radius: 10px 10px;\n    transform: translate(29vw, -20vh) scale(1);\n    background-color: var(--color-one-light);\n    border: 0px solid var(--color-one);\n    opacity: 0.61;\n  }\n  70% {\n    border-radius: 10px 10px;\n    opacity: 0.21;\n    transform: translate(30vw, -23vh) scale(0.9);\n    filter: hue-rotate(38deg);\n  }\n  80% {\n    border-radius: 200px 100px;\n    opacity: 0.21;\n    transform: translate(33vw, -20vh) scale(1);\n  }\n  100% {\n    border-radius: 0px 0px;\n    opacity: 0;\n    transform: translate(30vw, -21vh) scale(1);\n  }\n}\n@keyframes back {\n  0% {\n    border-radius: 0px 0px;\n    opacity: 0.21;\n    transform: translate(30vw, -20vh) scale(1);\n  }\n  30% {\n    border-radius: 10px 10px;\n    border: 0px solid var(--color-one);\n    background-color: var(--color-one-light);\n    opacity: 0.21;\n    transform: translate(33vw, -22vh) scale(0.92);\n  }\n  40% {\n    border-radius: 10px 200px;\n    opacity: 0.21;\n    filter: hue-rotate(-68deg);\n    border: 1px solid var(--color-one);\n    background: transparent;\n    transform: translate(30vw, -20vh) scale(1);\n  }\n  60% {\n    border-radius: 10px 10px;\n    transform: translate(29vw, -20vh) scale(1);\n    background-color: var(--color-one-light);\n    border: 0px solid var(--color-one);\n    opacity: 0.61;\n  }\n  70% {\n    border-radius: 10px 10px;\n    opacity: 0.21;\n    transform: translate(30vw, -23vh) scale(0.9);\n    filter: hue-rotate(38deg);\n  }\n  80% {\n    border-radius: 200px 100px;\n    opacity: 0.21;\n    transform: translate(33vw, -20vh) scale(1);\n  }\n  100% {\n    border-radius: 0px 0px;\n    opacity: 0;\n    transform: translate(30vw, -21vh) scale(1);\n  }\n}\n\n/* Background end */\n@-webkit-keyframes slider {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 70vw;\n  }\n  70% {\n    width: 80vw;\n  }\n  100% {\n    width: 100vw;\n  }\n}\n@keyframes slider {\n  0% {\n    width: 0;\n  }\n  50% {\n    width: 70vw;\n  }\n  70% {\n    width: 80vw;\n  }\n  100% {\n    width: 100vw;\n  }\n}\n\n@-webkit-keyframes navArrive {\n  0% {\n    transform: translatey(-60px);\n    -webkit-backdrop-filter: blur(0px);\n            backdrop-filter: blur(0px);\n  }\n  100% {\n    transform: translatey(0px);\n  }\n}\n\n@keyframes navArrive {\n  0% {\n    transform: translatey(-60px);\n    -webkit-backdrop-filter: blur(0px);\n            backdrop-filter: blur(0px);\n  }\n  100% {\n    transform: translatey(0px);\n  }\n}\n@-webkit-keyframes arriveFromLeft {\n  0% {\n    transform: translatex(-60px);\n  }\n  100% {\n    transform: translatex(0px);\n  }\n}\n@keyframes arriveFromLeft {\n  0% {\n    transform: translatex(-60px);\n  }\n  100% {\n    transform: translatex(0px);\n  }\n}\n.keen-slider__slide.currentSlide {\n  opacity: 1;\n  box-shadow: 4px 27px 50px 5px rgba(0, 0, 0, 0.31);\n  top: -13px;\n}\n.keen-slider__slide {\n  opacity: 0.61;\n  top: 0;\n  transition: opacity 0.14s, box-shadow 2s, top 1s;\n}\n\n@-webkit-keyframes disappear {\n  0% {transform: translateY(4px);opacity: 0;z-index:4;}\n  10% {transform: translateY(-4px);opacity: 1;z-index:4;}\n  90% {transform: translateY(-4px);opacity: 1;z-index:4;}\n  100% {transform: translateY(4px);opacity: 0;z-index:4;}\n}\n\n@keyframes disappear {\n  0% {transform: translateY(4px);opacity: 0;z-index:4;}\n  10% {transform: translateY(-4px);opacity: 1;z-index:4;}\n  90% {transform: translateY(-4px);opacity: 1;z-index:4;}\n  100% {transform: translateY(4px);opacity: 0;z-index:4;}\n}\ndiv:hover > .controls{\n  opacity: 0;\n}\n/*BUBBLES START*/\n.bubbles {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n.bubbles .circle {\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n  transition: all .2s, border .5s .61s;\n}\n.bubbles .circle-wrapper{\n  position: absolute;\n  height: 0;\n  width: 0;\n}\n.bubbles .circle-wrapper .circle{\n  border: 1px solid transparent;\n  padding:10px;\n}\n.bubbles .circle-wrapper .circle.active{\n  border: 0px solid var(--main-color);\n  padding:0px;\n  color:#fff;\n}\n.bubbles .circle-wrapper .circle.active:hover{\n  transform:scale(1.1);\n}\n.bubbles .circle-wrapper:nth-child(1) .center.active{\n  height: 230px;\n  width: 230px;\n  border: 1px solid var(--main-color);\n  top: -115px;\n  left: -115px;\n  font-weight: 700;\n  -webkit-text-stroke: 1px var(--main-color);\n  -webkit-text-fill-color: transparent;\n  visibility: visible;\n  opacity: 1;\n}\n.bubbles .circle-wrapper:nth-child(2) .circle{\n  height: 200px;\n  width: 200px;\n  inset: -30px 122px;\n  font-size: 50px;\n  background: linear-gradient(45deg, #eb4b4b -20%, #ff2424 120%);\n}\n.bubbles .circle-wrapper:nth-child(3) .circle{\n  height: 200px;\n  width: 200px;\n  inset: -218px -305px;\n  font-size: 50px;\n  background: linear-gradient(45deg, #c0ff23, #ead42d);\n}\n.bubbles .circle-wrapper:nth-child(4) .circle{\n  height: 180px;\n  width: 180px;\n  inset: 132px -106px;\n  font-size: 48px;\n  background: linear-gradient(45deg, #6aeeaa,#6ad0ee);\n}\n.bubbles .circle-wrapper:nth-child(5) .circle{\n  height: 200px;\n  width: 200px;\n  inset: 4px -308px;\n  font-size: 50px;\n  background: linear-gradient(45deg, #5ba5e3, #5ed4ff);\n}\n.bubbles .circle-wrapper:nth-child(6) .circle{\n  height: 170px;\n  width: 170px;\n  inset: -304px -110px;\n  font-size: 45px;\n  background: linear-gradient(45deg, #9967c0, #7189ff);\n}\n.bubbles .circle-wrapper:nth-child(7) .circle{\n  height: 150px;\n  width: 150px;\n  inset: -227px 70px;\n  font-size: 44px;\n  background: linear-gradient(45deg, #9967c0, #7189ff);\n}\n.bubbles .circle-wrapper:nth-child(8) .circle{\n  height: 140px;\n  width: 140px;\n  inset: -169px 231px;\n  font-size: 42px;\n  background: linear-gradient(45deg, #fd623c, #fa8b2f);\n}\n.bubbles .circle-wrapper:nth-child(9) .circle{\n  height: 150px;\n  width: 150px;\n  inset: -74px -445px;\n  font-size: 44px;\n  background: linear-gradient(45deg, #000000d1, black);\n  color: #fff;\n}\n.bubbles .circle-wrapper:nth-child(10) .circle{\n  height: 140px;\n  width: 140px;\n  inset: 180px 95px;\n  font-size: 42px;\n  background: linear-gradient(45deg, #97deec,#bdbaff);\n}\n.bubbles .circle-wrapper:nth-child(11) .circle{\n  height: 130px;\n  width: 130px;\n  inset: 166px 253px;\n  font-size: 39px;\n  background: linear-gradient(45deg, #93ceff,#0075d8);\n}\n.bubbles .circle-wrapper:nth-child(12) .circle{\n  height: 100px;\n  width: 100px;\n  inset: -33px 336px;\n  font-size: 35px;\n  background: linear-gradient(45deg, #fd782e, #feee43);\n}\n.bubbles .circle-wrapper:nth-child(13) .circle{\n  height: 100px;\n  width: 100px;\n  inset: 218px -227px;\n  font-size: 35px;\n  background: linear-gradient(45deg, #957bff,#e978ff);\n}\n.bubbles .circle-wrapper:nth-child(14) .circle{\n  height: 100px;\n  width: 100px;\n  inset: 94px -424px;\n  font-size: 35px;\n  background: linear-gradient(45deg, #87cbee, #2eb8a3);\n}\n.bubbles .circle-wrapper:nth-child(15) .circle{\n  height: 100px;\n  width: 100px;\n  inset: -290px 220px;\n  font-size: 35px;\n  background: linear-gradient(45deg, #ff6e3b, #ff79f2);\n}\n\n@media (max-width:900px) {\n  .bubbles .circle-wrapper:nth-child(1) .center.active{\n    height: 180px;\n    width: 180px;\n    border: 1px solid var(--main-color);\n    top: -90px;\n    left: -90px;\n  }\n  .bubbles .circle-wrapper:nth-child(2) .circle{\n    height: 140px;\n    width: 140px;\n    inset: -23px 99px;\n    font-size: 50px;\n  }\n  .bubbles .circle-wrapper:nth-child(3) .circle{\n    height: 140px;\n    width: 140px;\n    inset: -168px -215px;\n    font-size: 50px;\n  }\n  .bubbles .circle-wrapper:nth-child(4) .circle{\n    height: 120px;\n    width: 120px;\n    inset: 101px -106px;\n    font-size: 48px;\n  }\n  .bubbles .circle-wrapper:nth-child(5) .circle{\n    height: 140px;\n    width: 140px;\n    inset: -1px -228px;\n    font-size: 50px;\n  }\n  .bubbles .circle-wrapper:nth-child(6) .circle{\n    height: 140px;\n    width: 140px;\n    inset: -244px -82px;\n    font-size: 45px;\n  }\n  .bubbles .circle-wrapper:nth-child(7) .circle{\n    height: 100px;\n    width: 100px;\n    inset: -165px 63px;\n    font-size: 44px;\n  }\n  .bubbles .circle-wrapper:nth-child(8) .circle{\n    height: 80px;\n    width: 80px;\n    inset: -113px 171px;\n    font-size: 42px;\n  }\n  .bubbles .circle-wrapper:nth-child(9) .circle{\n    height: 100px;\n    width: 100px;\n    inset: -74px -309px;\n    font-size: 44px;\n  }\n  .bubbles .circle-wrapper:nth-child(10) .circle{\n    height: 80px;\n    width: 80px;\n    inset: 88px 25px;\n    font-size: 42px;\n  }\n  .bubbles .circle-wrapper:nth-child(11) .circle{\n    height: 80px;\n    width: 80px;\n    inset: 129px 111px;\n    font-size: 39px;\n  }\n  .bubbles .circle-wrapper:nth-child(12) .circle{\n    height: 60px;\n    width: 60px;\n    inset: -40px 237px;\n    font-size: 35px;\n  }\n  .bubbles .circle-wrapper:nth-child(13) .circle{\n    height: 60px;\n    width: 60px;\n    inset: 148px -176px;\n    font-size: 35px;\n  }\n  .bubbles .circle-wrapper:nth-child(14) .circle{\n    height: 60px;\n    width: 60px;\n    inset: 34px -296px;\n    font-size: 35px;\n  }\n  .bubbles .circle-wrapper:nth-child(15) .circle{\n    height: 60px;\n    width: 60px;\n    inset: -190px 171px;\n    font-size: 35px;\n  }\n}\n\n@media (max-width:600px) {\n  .bubbles .circle-wrapper:nth-child(1) .center.active{\n    height: 120px;\n    width: 120px;\n    border: 1px solid var(--main-color);\n    top: -60px;\n    left: -60px;\n  }\n  .bubbles .circle-wrapper:nth-child(2) .circle{\n    height: 90px;\n    width: 90px;\n    inset: -23px 68px;\n    font-size: 21px;\n  }\n  .bubbles .circle-wrapper:nth-child(3) .circle{\n    height: 90px;\n    width: 90px;\n    inset: -116px -135px;\n    font-size: 21px;\n  }\n  .bubbles .circle-wrapper:nth-child(4) .circle{\n    height: 80px;\n    width: 80px;\n    inset: 77px -66px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(5) .circle{\n    height: 90px;\n    width: 90px;\n    inset: -9px -158px;\n    font-size: 21px;\n  }\n  .bubbles .circle-wrapper:nth-child(6) .circle{\n    height: 90px;\n    width: 90px;\n    inset: -169px -46px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(7) .circle{\n    height: 70px;\n    width: 70px;\n    inset: -117px 44px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(8) .circle{\n    height: 60px;\n    width: 60px;\n    inset: -233px 1px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(9) .circle{\n    height: 70px;\n    width: 70px;\n    inset: -213px -116px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(10) .circle{\n    height: 60px;\n    width: 60px;\n    inset: 63px 27px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(11) .circle{\n    height: 60px;\n    width: 60px;\n    inset: 141px 11px;\n    font-size: 19px;\n  }\n  .bubbles .circle-wrapper:nth-child(12) .circle{\n    height: 40px;\n    width: 40px;\n    inset: -71px 122px;\n    font-size: 17px;\n  }\n  .bubbles .circle-wrapper:nth-child(13) .circle{\n    height: 40px;\n    width: 40px;\n    inset: 175px -46px;\n    font-size: 17px;\n  }\n  .bubbles .circle-wrapper:nth-child(14) .circle{\n    height: 40px;\n    width: 40px;\n    inset: 104px -121px;\n    font-size: 17px;\n  }\n  .bubbles .circle-wrapper:nth-child(15) .circle{\n    height: 40px;\n    width: 40px;\n    inset: -176px 53px;\n    font-size: 17px;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/style.css":
/*!********************************!*\
  !*** ./resources/js/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./resources/js/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);