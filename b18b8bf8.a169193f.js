(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),c=n(6),r=(n(0),n(184)),b={id:"actions",title:"\uc561\uc158",description:"\uae30\ucd08 \uac15\uc88c > \uc561\uc158: Core concept - actions are plain objects that describe events",hide_title:!0},o={id:"basics/actions",title:"\uc561\uc158",description:"\uae30\ucd08 \uac15\uc88c > \uc561\uc158: Core concept - actions are plain objects that describe events",source:"@site/../docs_kr/basics/Actions.md",permalink:"/basics/actions",sidebar:"docs",previous:{title:"\uae30\ucd08 \uac15\uc88c: \uc18c\uac1c",permalink:"/basics/basic-tutorial"},next:{title:"\ub9ac\ub4c0\uc11c",permalink:"/basics/reducers"}},p=[{value:"\uc561\uc158 \uc0dd\uc0b0\uc790",id:"\uc561\uc158-\uc0dd\uc0b0\uc790",children:[]},{value:"\uc18c\uc2a4\ucf54\ub4dc",id:"\uc18c\uc2a4\ucf54\ub4dc",children:[{value:"<code>actions.js</code>",id:"actionsjs",children:[]}]},{value:"\ub2e4\uc74c \ub2e8\uacc4",id:"\ub2e4\uc74c-\ub2e8\uacc4",children:[]}],i={rightToc:p};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\uc561\uc158"},"\uc561\uc158"),Object(r.b)("p",null,"\uba3c\uc800 \uc561\uc158\uc744 \uc815\uc758\ud574\ubd05\uc2dc\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\uc561\uc158"),"\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc2a4\ud1a0\uc5b4\ub85c \ubcf4\ub0b4\ub294 \ub370\uc774\ud130 \ubb36\uc74c\uc785\ub2c8\ub2e4. \uc774\ub4e4\uc774 \uc2a4\ud1a0\uc5b4\uc758 ",Object(r.b)("strong",{parentName:"p"},"\uc720\uc77c\ud55c")," \uc815\ubcf4\uc6d0\uc774 \ub429\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api/store#dispatch"}),Object(r.b)("inlineCode",{parentName:"a"},"store.dispatch()")),"\ub97c \ud1b5\ud574 \uc774\ub4e4\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(r.b)("p",null,"\uc774\uac83\uc774 \uc0c8 \ud560\uc77c\uc758 \ucd94\uac00\ub97c \ub098\ud0c0\ub0b4\ub294 \uc561\uc158\uc758 \uc608\uc81c\uc785\ub2c8\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ADD_TODO = 'ADD_TODO'\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  type: ADD_TODO,\n  text: 'Build my first Redux app'\n}\n")),Object(r.b)("p",null,"\uc561\uc158\uc740 \ud3c9\ubc94\ud55c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\uc785\ub2c8\ub2e4. \uc561\uc158\uc740 \ubc18\ub4dc\uc2dc \uc5b4\ub5a4 \ud615\ud0dc\uc758 \uc561\uc158\uc774 \uc2e4\ud589\ub420\uc9c0 \ub098\ud0c0\ub0b4\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"type")," \uc18d\uc131\uc744 \uac00\uc838\uc57c \ud569\ub2c8\ub2e4. \ud0c0\uc785\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ubb38\uc790\uc5f4 \uc0c1\uc218\ub85c \uc815\uc758\ub429\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uc571\uc774 \ucda9\ubd84\ud788 \ucee4\uc9c0\uba74 \ud0c0\uc785\ub4e4\uc744 \ubcc4\ub3c4\uc758 \ubaa8\ub4c8\ub85c \ubd84\ub9ac\ud560\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ADD_TODO, REMOVE_TODO } from '../actionTypes'\n")),Object(r.b)("blockquote",null,Object(r.b)("h5",Object(a.a)({parentName:"blockquote"},{id:"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\uc5d0-\ub300\ud55c-\uc124\uba85"}),"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8\uc5d0 \ub300\ud55c \uc124\uba85")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\uc561\uc158 \ud0c0\uc785 \uc0c1\uc218\ub97c \ubc18\ub4dc\uc2dc \ubcc4\ub3c4\uc758 \ud30c\uc77c\uc5d0 \uc815\uc758\ud560 \ud544\uc694\ub294 \uc5c6\uc73c\uba70, \uc2ec\uc9c0\uc5b4 \uc815\uc758\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \uc791\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uc561\uc158 \ud0c0\uc785\uc73c\ub85c \uadf8\ub0e5 \ubb38\uc790\uc5f4\uc744 \uc4f0\ub294\uac8c \uc26c\uc6b8\uac81\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ucf54\ub4dc\ubca0\uc774\uc2a4\uac00 \ucee4\uc9c0\uba74 \uc0c1\uc218\ub97c \uc815\uc758\ud574\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ubca0\uc774\uc2a4\ub97c \uae68\ub057\ud558\uac8c \uc720\uc9c0\ud558\uae30 \uc704\ud55c \uc2e4\uc6a9\uc801\uc778 \ud301\ub4e4\uc744 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/recipes/reducing-boilerplate"}),"\ubcf4\uc77c\ub7ec\ud50c\ub808\uc774\ud2b8 \uc904\uc774\uae30"),"\uc5d0\uc11c \ub354 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"type"),"\uc678\uc5d0 \uc561\uc158 \uac1d\uccb4\uc758 \uad6c\uc870\ub294 \uc5ec\ub7ec\ubd84 \ub9c8\uc74c\ub300\ub85c\uc785\ub2c8\ub2e4. \ud639\uc2dc \uad00\uc2ec\uc774 \uc788\ub2e4\uba74 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/acdlite/flux-standard-action"}),"Flux Standard Action"),"\uc5d0\uc11c \uc561\uc158\uc744 \uc5b4\ub5bb\uac8c \uad6c\uc131\ud560\uc9c0\uc5d0 \ub300\ud55c \uad8c\uc7a5\uc0ac\ud56d\uc744 \uc54c\uc544\ubcf4\uc138\uc694."),Object(r.b)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ud560\uc77c\uc744 \uc644\ub8cc\ud588\ub2e4\uace0 \uccb4\ud06c\ud558\ub294 \uc561\uc158 \ud558\ub098\ub97c \ub354 \ucd94\uac00\ud569\uc2dc\ub2e4. \ud560\uc77c\uc740 \ubc30\uc5f4 \uc548\uc5d0 \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc5d0 \uc6b0\ub9ac\ub294 \ud2b9\uc815\ud55c \ud560\uc77c\uc744 ",Object(r.b)("inlineCode",{parentName:"p"},"index"),"\ub97c \ud1b5\ud574 \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c4\uc9dc \uc571\uc5d0\uc11c\ub294 \uc0c8 \ud560\uc77c\uc774 \ub9cc\ub4e4\uc5b4\uc9c8\ub54c\ub9c8\ub2e4 \uc720\uc77c\ud55c ID\ub97c \ubd80\uc5ec\ud558\ub294\uac8c \ub354 \uc88b\uaca0\uc8e0."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  type: COMPLETE_TODO,\n  index: 5\n}\n")),Object(r.b)("p",null,"\uac01 \uc561\uc158\uc5d0\ub294 \uac00\ub2a5\ud55c \uc801\uc740 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud560\uc77c \uac1d\uccb4 \uc804\uccb4\ub97c \uc804\ub2ec\ud558\ub294 \uac83 \ubcf4\ub2e4\ub294 ",Object(r.b)("inlineCode",{parentName:"p"},"index"),"\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc774 \ub0ab\uc2b5\ub2c8\ub2e4."),Object(r.b)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c, \uc9c0\uae08 \ubcf4\uc774\ub294 \ud560\uc77c\ub4e4\uc744 \ubc14\uafb8\ub294 \uc561\uc158\uc744 \ucd94\uac00\ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  type: SET_VISIBILITY_FILTER,\n  filter: SHOW_COMPLETED\n}\n")),Object(r.b)("h2",{id:"\uc561\uc158-\uc0dd\uc0b0\uc790"},"\uc561\uc158 \uc0dd\uc0b0\uc790"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\uc561\uc158 \uc0dd\uc0b0\uc790"),'\ub294 \uc561\uc158\uc744 \ub9cc\ub4dc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. "\uc561\uc158"\uacfc "\uc561\uc158 \uc0dd\uc0b0\uc790"\ub294 \ud63c\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc6a9\uc5b4\uc774\ub2c8 \uc801\uc808\ud558\uac8c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc2e0\uacbd\uc368\uc57c \ud569\ub2c8\ub2e4.'),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/flux"}),"\uc804\ud1b5\uc801\uc778 Flux")," \uad6c\ud604\uc5d0\uc11c \uc561\uc158 \uc0dd\uc0b0\uc790\ub294 \ubcf4\ud1b5 \ubd88\ub7ec\uc640\uc84c\uc744\ub54c \uc561\uc158\uc744 \ubcf4\ub0c5\ub2c8\ub2e4. \uc774\ub807\uac8c\uc694:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function addTodoWithDispatch(text) {\n  const action = {\n    type: ADD_TODO,\n    text\n  }\n  dispatch(action)\n}\n")),Object(r.b)("p",null,"\uc774\uc640\ub294 \ub300\ube44\ub418\uac8c Redux\uc758 \uc561\uc158 \uc0dd\uc0b0\uc790\ub294 \ub2e8\uc9c0 \uc561\uc158\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function addTodo(text) {\n  return {\n    type: ADD_TODO,\n    text\n  }\n}\n")),Object(r.b)("p",null,"\uc774\ub294 \uc561\uc158 \uc0dd\uc0b0\uc790\ub97c \ub354 \uc774\uc2dd\ud558\uae30 \uc88b\uace0 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc27d\uac8c \ud569\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc561\uc158\uc744 \ubcf4\ub0b4\ub824\uba74 \uacb0\uacfc\uac12\uc744 ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch()")," \ud568\uc218\uc5d0 \ub118\uae41\ub2c8\ub2e4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"dispatch(addTodo(text))\ndispatch(completeTodo(index))\n")),Object(r.b)("p",null,"\uc544\ub2c8\uba74 \uc790\ub3d9\uc73c\ub85c \uc561\uc158\uc744 \ubcf4\ub0b4\uc8fc\ub294 ",Object(r.b)("strong",{parentName:"p"},"\ubc14\uc778\ub4dc\ub41c \uc561\uc158 \uc0dd\uc0b0\uc790"),"\ub97c \ub9cc\ub4ed\ub2c8\ub2e4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const boundAddTodo = text => dispatch(addTodo(text))\nconst boundCompleteTodo = index => dispatch(completeTodo(index))\n")),Object(r.b)("p",null,"\uc774\ub4e4\uc740 \ubc14\ub85c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"boundAddTodo(text)\nboundCompleteTodo(index)\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dispatch()")," \ud568\uc218\ub97c \uc2a4\ud1a0\uc5b4\uc5d0\uc11c ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api/store#dispatch"}),Object(r.b)("inlineCode",{parentName:"a"},"store.dispatch()")),"\ub85c \ubc14\ub85c \uc811\uadfc\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc5ec\ub7ec\ubd84\uc740 \ubcf4\ud1b5 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/gaearon/react-redux"}),"react-redux"),"\uc758 ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),"\uc640 \uac19\uc740 \ud5ec\ud37c\ub97c \ud1b5\ud574 \uc811\uadfc\ud560 \uac83\uc785\ub2c8\ub2e4. \uc5ec\ub7ec \uc561\uc158 \uc0dd\uc0b0\uc790\ub97c ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch()"),"\uc5d0 \ubc14\uc778\ub4dc\ud558\uae30 \uc704\ud574 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api/bindactioncreators"}),Object(r.b)("inlineCode",{parentName:"a"},"bindActionCreators()")),"\ub97c \uc0ac\uc6a9\ud560\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),Object(r.b)("h2",{id:"\uc18c\uc2a4\ucf54\ub4dc"},"\uc18c\uc2a4\ucf54\ub4dc"),Object(r.b)("h3",{id:"actionsjs"},Object(r.b)("inlineCode",{parentName:"h3"},"actions.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/*\n * \uc561\uc158 \ud0c0\uc785\n */\n\nexport const ADD_TODO = 'ADD_TODO'\nexport const COMPLETE_TODO = 'COMPLETE_TODO'\nexport const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'\n\n/*\n * \ub2e4\ub978 \uc0c1\uc218\n */\n\nexport const VisibilityFilters = {\n  SHOW_ALL: 'SHOW_ALL',\n  SHOW_COMPLETED: 'SHOW_COMPLETED',\n  SHOW_ACTIVE: 'SHOW_ACTIVE'\n}\n\n/*\n * \uc561\uc158 \uc0dd\uc0b0\uc790\n */\n\nexport function addTodo(text) {\n  return { type: ADD_TODO, text }\n}\n\nexport function completeTodo(index) {\n  return { type: COMPLETE_TODO, index }\n}\n\nexport function setVisibilityFilter(filter) {\n  return { type: SET_VISIBILITY_FILTER, filter }\n}\n")),Object(r.b)("h2",{id:"\ub2e4\uc74c-\ub2e8\uacc4"},"\ub2e4\uc74c \ub2e8\uacc4"),Object(r.b)("p",null,"\uc774\uc81c \uc774 \uc561\uc158\ub4e4\uc744 \ubcf4\ub0c8\uc744 \ub54c \uc0c1\ud0dc\uac00 \uc5b4\ub5bb\uac8c \ubcc0\ud558\ub294\uc9c0 \uba85\uc2dc\ud558\uae30 \uc704\ud574 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/basics/reducers"}),"\ub9ac\ub4c0\uc11c\ub97c \uc815\uc758")," \ud574\ubd05\uc2dc\ub2e4!"),Object(r.b)("blockquote",null,Object(r.b)("h5",Object(a.a)({parentName:"blockquote"},{id:"\uc219\ub828\ub41c-\uc0ac\uc6a9\uc790\ub4e4\uc744-\uc704\ud55c-\ud55c\ub9c8\ub514"}),"\uc219\ub828\ub41c \uc0ac\uc6a9\uc790\ub4e4\uc744 \uc704\ud55c \ud55c\ub9c8\ub514"),Object(r.b)("p",{parentName:"blockquote"},"\uc5ec\ub7ec\ubd84\uc774 \uae30\ubcf8\uc801\uc778 \ucee8\uc149\uc5d0 \uc775\uc219\ud558\uace0 \uc774 \uac15\uc88c\ub97c \uc774\ubbf8 \ub9c8\uce58\uc168\ub2e4\uba74, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/advanced/advanced-tutorial"}),"\uc2ec\ud654 \uac15\uc88c"),"\uc758 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/advanced/async-actions"}),"\ube44\ub3d9\uae30 \uc561\uc158"),"\uc5d0\uc11c \uc5b4\ub5bb\uac8c AJAX \uc751\ub2f5\uc744 \ub2e4\ub8e8\uace0 \ube44\ub3d9\uae30 \ud750\ub984\uc5d0 \uc561\uc158 \uc0dd\uc0b0\uc790\ub97c \uacb0\ud569\ud558\ub294\uc9c0 \uc54c\uc544\ubcf4\uc138\uc694.")))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},O=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),O=l(n),s=a,u=O["".concat(b,".").concat(s)]||O[s]||d[s]||r;return n?c.a.createElement(u,o({ref:t},i,{components:n})):c.a.createElement(u,o({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var i=2;i<r;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);