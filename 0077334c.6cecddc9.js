(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(6),c=(r(0),r(184)),p={id:"createstore",title:"createStore",hide_title:!0},b={id:"api/createstore",title:"createStore",description:"# `createStore(reducer, [preloadedState], [enhancer])`",source:"@site/../docs_kr/api/createStore.md",permalink:"/api/createstore",sidebar:"docs",previous:{title:"API \ub808\ud37c\ub7f0\uc2a4",permalink:"/api/api-reference"},next:{title:"Store",permalink:"/api/store"}},o=[],i={rightToc:o};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"createstorereducer-preloadedstate-enhancer"},Object(c.b)("inlineCode",{parentName:"h1"},"createStore(reducer, [preloadedState], [enhancer])")),Object(c.b)("p",null,"\uc571\uc758 \uc0c1\ud0dc \ud2b8\ub9ac \uc804\uccb4\ub97c \ubcf4\uad00\ud558\ub294 Redux ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/store"}),"\uc2a4\ud1a0\uc5b4"),"\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.\n\uc571 \ub0b4\uc5d0\ub294 \ub2e8 \ud558\ub098\uc758 \uc2a4\ud1a0\uc5b4\ub9cc \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(c.b)("h4",{id:"\uc778\uc218"},"\uc778\uc218"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"reducer")," ",Object(c.b)("em",{parentName:"p"},"(Function)"),": \uc8fc\uc5b4\uc9c4 \ud604\uc7ac \uc0c1\ud0dc \ud2b8\ub9ac\uc640 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/glossary#%EC%95%A1%EC%85%98"}),"\uc561\uc158"),"\uc5d0\uc11c \ub2e4\uc74c ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/glossary#%EC%83%81%ED%83%9C"}),"\uc0c1\ud0dc \ud2b8\ub9ac"),"\ub97c \ubc18\ud658\ud558\ub294 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/glossary#%EB%A6%AC%EB%93%80%EC%84%9C"}),"\ub9ac\ub4c0\uc2f1 \ud568\uc218"),"\uc785\ub2c8\ub2e4.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"[",Object(c.b)("inlineCode",{parentName:"p"},"preloadedState"),"]"," ",Object(c.b)("em",{parentName:"p"},"(any)"),": \ucd08\uae30 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \uc720\ub2c8\ubc84\uc124 \uc571\uc758 \uc11c\ubc84\ub098 \uc774\uc804\uc758 \uc9c1\ub82c\ud654\ub41c \uc0ac\uc6a9\uc790 \uc138\uc158\uc5d0\uc11c \uc0c1\ud0dc\ub97c \ucc44\uc6b0\uae30 \uc704\ud574 \uc120\ud0dd\uc801\uc73c\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/combinereducers"}),Object(c.b)("inlineCode",{parentName:"a"},"combineReducers")),"\ub85c \ub9ac\ub4c0\uc11c\ub97c \ub9cc\ub4e4\uc5c8\ub2e4\uba74, \uc774 \uc778\uc218\ub294 \uc804\ub2ec\ud588\ub358 \uac83\uacfc \uac19\uc740 \ud0a4 \uad6c\uc870\ub97c \uac00\uc9c0\ub294 \ud3c9\ubc94\ud55c \uac1d\uccb4\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 \ub9ac\ub4c0\uc11c\uac00 \uc774\ud574\ud560 \uc218 \uc788\ub294 \uc5b4\ub5a4 \uac83\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"[",Object(c.b)("inlineCode",{parentName:"p"},"enhancer"),"]"," ",Object(c.b)("em",{parentName:"p"},"(Function)"),": \uc2a4\ud1a0\uc5b4 \uc778\ud578\uc11c\uc785\ub2c8\ub2e4. \ubbf8\ub4e4\uc6e8\uc5b4\ub098 \uc2dc\uac04\uc5ec\ud589, \uc601\uc18d\uc131 \ub4f1\uc758 \uc11c\ub4dc\ud30c\ud2f0 \uae30\ub2a5\uc744 \uc2a4\ud1a0\uc5b4\uc5d0 \ucd94\uac00\ud558\uae30 \uc704\ud574 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Redux\uc640 \ud568\uaed8 \uc81c\uacf5\ub418\ub294 \uc778\ud578\uc11c\ub294 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/applymiddleware"}),Object(c.b)("inlineCode",{parentName:"a"},"applyMiddleware()"))," \ubfd0\uc785\ub2c8\ub2e4."))),Object(c.b)("h4",{id:"\ubc18\ud658"},"\ubc18\ud658"),Object(c.b)("p",null,"(",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/store"}),Object(c.b)("em",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"em"},"Store"))),"): \uc571\uc758 \uc804\uccb4 \uc0c1\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4. \uc774 \uac1d\uccb4\uc758 \uc0c1\ud0dc\ub97c \ubc14\uafb8\ub294 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/store#dispatch"}),"\uc561\uc158\uc744 \ubcf4\ub0b4\ub294"),"\uac83 \ubfd0\uc785\ub2c8\ub2e4. UI\ub97c \uc5c5\ub370\uc774\ud2b8 \ud558\uae30 \uc704\ud574 \uc0c1\ud0dc\ub97c ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/store#subscribe"}),"\uad6c\ub3c5")," \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h4",{id:"\uc608\uc81c"},"\uc608\uc81c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\n\nfunction todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return state.concat([action.text])\n    default:\n      return state\n  }\n}\n\nlet store = createStore(todos, ['Use Redux'])\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Read the docs'\n})\n\nconsole.log(store.getState())\n// [ 'Use Redux', 'Read the docs' ]\n")),Object(c.b)("h4",{id:"\ud301"},"\ud301"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc571\uc5d0 \ud558\ub098 \uc774\uc678\uc758 \uc2a4\ud1a0\uc5b4\ub97c \ub9cc\ub4e4\uc9c0 \ub9c8\uc138\uc694! \ub300\uc2e0 \uc5ec\ub7ec\uac1c\uc758 \ub9ac\ub4c0\uc11c\ub97c \ud558\ub098\uc758 \ub8e8\ud2b8 \ub9ac\ub4c0\uc11c\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/combinereducers"}),Object(c.b)("inlineCode",{parentName:"a"},"combineReducers")),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc0c1\ud0dc\uc758 \ud615\uc2dd\uc740 \ub2f9\uc2e0\uc774 \uacb0\uc815\ud558\uae30 \ub098\ub984\uc785\ub2c8\ub2e4. \ud3c9\ubc94\ud55c \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/immutable-js/"}),"Immutable")," \uac19\uc740 \uac83\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc798 \ubaa8\ub974\uaca0\ub2e4\uba74, \ud3c9\ubc94\ud55c \uac1d\uccb4\ub85c \uc2dc\uc791\ud558\uc138\uc694.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc0c1\ud0dc\uac00 \ud3c9\ubc94\ud55c \uac1d\uccb4\ub77c\uba74, \uc808\ub300 \ubcc0\uacbd\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\uc138\uc694! \uc608\ub97c \ub4e4\uc5b4 \ub9ac\ub4c0\uc11c\uc5d0\uc11c ",Object(c.b)("inlineCode",{parentName:"p"},"Object.assign(state, newData)")," \uac19\uc740 \uac83\uc744 \ubc18\ud658\ud558\ub294 \ub300\uc2e0 ",Object(c.b)("inlineCode",{parentName:"p"},"Object.assign({}, state, newData)"),"\ub97c \ubc18\ud658\ud558\uc138\uc694. \uc774\ub97c \ud1b5\ud574 \uc774\uc804 \uc0c1\ud0dc\ub97c \ub36e\uc5b4\uc4f0\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/recipes/using-object-spread-operator"}),"\uac1d\uccb4 \ud655\uc0b0 \uc5f0\uc0b0\uc790 \uc81c\uc548"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",Object(c.b)("inlineCode",{parentName:"p"},"return { ...state, ...newData }"),"\ucc98\ub7fc \uc4f8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc720\ub2c8\ubc84\uc15c \uc571\uc744 \uc704\ud574\uc11c\ub294 \ub9e4 \uc694\uccad\ub9c8\ub2e4 \ubcc4\uac1c\uc758 \uc2a4\ud1a0\uc5b4 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4dc\uc138\uc694. \uc2a4\ud1a0\uc5b4 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uc561\uc158\uc744 \ubcf4\ub0b8 \ub2e4\uc74c \uc644\ub8cc\ub418\uba74 \uc11c\ubc84\uc5d0\uc11c \uc571\uc744 \ub79c\ub354\ub9c1\ud558\uba74 \ub429\ub2c8\ub2e4.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc2a4\ud1a0\uc5b4\uac00 \uc0dd\uc131\ub418\uba74, Redux\ub294 \ucd5c\ucd08\uc758 \uc0c1\ud0dc\ub97c \uac00\uc9c0\ub294 \uc2a4\ud1a0\uc5b4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \ub354\ubbf8 \uc561\uc158\uc744 \ubcf4\ub0c5\ub2c8\ub2e4. \uc774 \uc561\uc158\uc744 \uc9c1\uc811 \ub2e4\ub904\uc57c \ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4. \ub2e8\uc9c0 \uc5ec\ub7ec\ubd84\uc758 \ub9ac\ub4c0\uc11c\uac00 ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),"\ub97c \uc778\uc218\ub85c \ubc1b\uc558\uc744 \ub54c \ucd5c\ucd08 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud574\uc57c \ud55c\ub2e4\ub294 \uc810\ub9cc \uae30\uc5b5\ud574\ub450\uba74 \ub429\ub2c8\ub2e4.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\uc5ec\ub7ec\uac1c\uc758 \uc2a4\ud1a0\uc5b4 \uc778\ud578\uc11c\ub97c \uc801\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/compose"}),Object(c.b)("inlineCode",{parentName:"a"},"compose()")),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."))))}l.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b({},t,{},e)),r},O=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=l(r),u=a,j=O["".concat(p,".").concat(u)]||O[u]||m[u]||c;return r?n.a.createElement(j,b({ref:t},i,{components:r})):n.a.createElement(j,b({ref:t},i))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,p=new Array(c);p[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var i=2;i<c;i++)p[i]=r[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);