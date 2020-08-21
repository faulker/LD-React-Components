(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1292);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(143);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(506);
/* harmony import */ var _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(123);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__);
// automatically import all files ending in *.stories.js
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["configure"])(__webpack_require__(1448),module);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__["withA11y"]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__["withKnobs"]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addParameters"])({options:{panelPosition:"bottom",name:"Launch Darkly React Components"},backgrounds:[{name:"white",value:"#fff",default:!0},{name:"grey",value:"#f4f5f8"}],a11y:{// ... axe options
element:"#root",// optional selector which element to inspect
config:{},// axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
options:{}// axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1271)(module)))

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(0));
/**
 * FeatureFlag renders your child components based on LD flags
 */
function FeatureFlag(_a) {
    var children = _a.children, flagKey = _a.flagKey, appFlags = _a.appFlags;
    function elementMatchPluginName(element, name) {
        return (element.type.displayName === name || element.type.name === name);
    }
    // isChildPluginComponent is true if the child is one of
    // [ FeatureFlag, FeatureTrue, FeatureSwitch, FeatureFalse, FeatureDefault]
    var isChildPluginComponent = false;
    // isNonPluginComponent is true if the child is not a component from this plugin.
    var isNonPluginComponent = false;
    // childArray to render
    var childArray = [];
    React.Children.forEach(children, function (element) {
        if (React.isValidElement(element) && elementMatchPluginName(element, 'FeatureTrue')) {
            if (isNonPluginComponent) {
                // telling the developer to not use NonPlugin components under FeatureFlag.
                // eslint-disable-next-line no-console
                console.warn('Dont Use <FeatureTrue /> among other elements/components under <FeatureFlag /> only use it with <FeatureFalse />, No mix allowed');
                return;
            }
            // if the appFlags has the flagKey, render the child
            if (appFlags[flagKey]) {
                childArray.push(element);
            }
            isChildPluginComponent = true;
        }
        if (React.isValidElement(element) && elementMatchPluginName(element, 'FeatureFalse')) {
            if (isNonPluginComponent) {
                // eslint-disable-next-line no-console
                console.warn('Dont Use <FeatureFalse /> among other elements/components under <FeatureFlag /> only use it with <FeatureTrue />, No mix allowed');
                return;
            }
            if (!appFlags[flagKey]) {
                childArray.push(element);
            }
            isChildPluginComponent = true;
        }
        // }
        if (React.isValidElement(element) && elementMatchPluginName(element, 'FeatureSwitch')) {
            if (isNonPluginComponent) {
                // eslint-disable-next-line no-console
                console.warn('Dont Use <FeatureSwitch /> unless its the immediate children of <FeatureFlag />, No mix allowed');
                return;
            }
            var partial = {};
            partial['flagKey'] = flagKey;
            partial['appFlags'] = appFlags;
            childArray.push(React.cloneElement(element, partial));
            isChildPluginComponent = true;
        }
        // if the component is neither of the above components it must be NonPlugin Component,
        // therefore, we simply render it as its under FeatureTrue
        if (!isChildPluginComponent) {
            isNonPluginComponent = true;
            if (appFlags[flagKey]) {
                childArray.push(element);
            }
        }
    });
    return React.Children.map(childArray, function (child) { return child; });
}
exports.default = FeatureFlag;
try {
    // @ts-ignore
    FeatureFlag.displayName = "FeatureFlag";
    // @ts-ignore
    FeatureFlag.__docgenInfo = { "description": "FeatureFlag renders your child components based on LD flags", "displayName": "FeatureFlag", "props": { "flagKey": { "defaultValue": null, "description": "", "name": "flagKey", "required": true, "type": { "name": "string" } }, "appFlags": { "defaultValue": null, "description": "", "name": "appFlags", "required": true, "type": { "name": "object" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureFlag/index.tsx#FeatureFlag"] = { docgenInfo: FeatureFlag.__docgenInfo, name: "FeatureFlag", path: "src/lib/FeatureFlag/index.tsx#FeatureFlag" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lib/FeatureFlag/FeatureFlag.stories.jsx": 1454
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1448;

/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "standardUsage", function() { return /* binding */ standardUsage; });
__webpack_require__.d(__webpack_exports__, "withFeatureTrueAndFeatureFalse", function() { return /* binding */ withFeatureTrueAndFeatureFalse; });
__webpack_require__.d(__webpack_exports__, "withNesting", function() { return /* binding */ withNesting; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@storybook/addon-knobs/dist/index.js
var dist = __webpack_require__(123);

// EXTERNAL MODULE: ./src/lib/FeatureFlag/index.tsx
var FeatureFlag = __webpack_require__(142);
var FeatureFlag_default = /*#__PURE__*/__webpack_require__.n(FeatureFlag);

// EXTERNAL MODULE: ./src/lib/FeatureSwitch/index.tsx
var FeatureSwitch = __webpack_require__(317);
var FeatureSwitch_default = /*#__PURE__*/__webpack_require__.n(FeatureSwitch);

// EXTERNAL MODULE: ./src/lib/FeatureCase/index.ts
var FeatureCase = __webpack_require__(93);
var FeatureCase_default = /*#__PURE__*/__webpack_require__.n(FeatureCase);

// EXTERNAL MODULE: ./src/lib/FeatureDefault/index.ts
var FeatureDefault = __webpack_require__(228);
var FeatureDefault_default = /*#__PURE__*/__webpack_require__.n(FeatureDefault);

// EXTERNAL MODULE: ./src/lib/FeatureTrue/index.ts
var FeatureTrue = __webpack_require__(507);
var FeatureTrue_default = /*#__PURE__*/__webpack_require__.n(FeatureTrue);

// EXTERNAL MODULE: ./src/lib/FeatureFalse/index.ts
var FeatureFalse = __webpack_require__(508);
var FeatureFalse_default = /*#__PURE__*/__webpack_require__.n(FeatureFalse);

// CONCATENATED MODULE: ./src/lib/FeatureFlag/README.md
/* harmony default export */ var README = ("### FeatureFlag\n\nTakes `flagKey` and `appFlags` as `props`, which is an object containing list of features.\n\n### FeatureSwitch, FeatureCase and FeatureDefault\n\n`FeatureSwitch` should be a child of `FeatureFlag` and can take `FeatureCase` and `FeatureDefault` as children.\n\n`FeatureCase` component takes `condition` and `allowBreak`(a boolean) as props,\n`condition` is the `case` feature, while `allowBreak` used as a `break`. The reason for name change is `case` and `break` are reserved words on JS.");
// CONCATENATED MODULE: ./src/lib/FeatureFlag/FeatureFlag.stories.jsx
var _parameters;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* eslint-disable */ // @ts-nocheck
// @ts-ignore
var withSourceLoader=__webpack_require__(220).withSource,addSourceDecorator=__webpack_require__(220).addSource,__SOURCE_PREFIX__="/home/circleci/ld-react-components/src/lib/FeatureFlag",__STORY__="\n\n// @ts-nocheck\n// @ts-ignore\nvar withSourceLoader = require('@storybook/source-loader/preview').withSource;\n// @ts-ignore\nvar addSourceDecorator = require(\"@storybook/source-loader/preview\").addSource;\n// @ts-ignore\nvar __SOURCE_PREFIX__ = \"/home/circleci/ld-react-components/src/lib/FeatureFlag\";\n// @ts-ignore\nvar __STORY__ = \"import React from 'react';\\nimport { text, object } from '@storybook/addon-knobs';\\n\\nimport FeatureFlag from './index.tsx';\\nimport FeatureSwitch from '../FeatureSwitch';\\nimport FeatureCase from '../FeatureCase';\\nimport FeatureDefault from '../FeatureDefault';\\nimport FeatureTrue from '../FeatureTrue';\\nimport FeatureFalse from '../FeatureFalse';\\n\\nimport notes from './README.md';\\n\\nexport default {\\n  title: 'Component|Feature Flag',\\n  component: FeatureFlag,\\n  parameters: { notes }\\n};\\n\\nconst applicationKeys = {\\n  'integration-test': true,\\n  'multivariate-test': 'multivariate-test-1'\\n};\\n\\nexport const standardUsage = () => (\\n  <FeatureFlag\\n    flagKey={text('flagKey', 'multivariate-test')}\\n    appFlags={object('appFlags', applicationKeys)}\\n  >\\n    <FeatureSwitch>\\n      <FeatureCase condition=\\\"multivariate-test-1\\\" allowBreak>\\n        <p>Multivariate Test 1 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-2\\\" allowBreak>\\n        <p>Multivariate Test 2 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-3\\\" allowBreak>\\n        <p>Multivariate Test 3 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-4\\\" allowBreak>\\n        <p>Multivariate Test 4 Rendered</p>\\n      </FeatureCase>\\n      <FeatureDefault>\\n        <p>If no conditions are met then render the default</p>\\n      </FeatureDefault>\\n    </FeatureSwitch>\\n  </FeatureFlag>\\n);\\n\\nexport const withFeatureTrueAndFeatureFalse = () => (\\n  <FeatureFlag flagKey=\\\"integration-test\\\" appFlags={object('appFlags', applicationKeys)}>\\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\\n  </FeatureFlag>\\n);\\n\\nexport const withNesting = () => {\\n  const flags = {\\n    'nested-flag-key': 'nested-flag-key-1'\\n  };\\n  return (\\n    <FeatureFlag flagKey=\\\"multivariate-test\\\" appFlags={applicationKeys}>\\n      <p>\\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\\n        component. Check out the story below to see the code.\\n      </p>\\n      <FeatureFlag flagKey=\\\"nested-flag-key\\\" appFlags={object('appFlags', flags)}>\\n        <FeatureSwitch>\\n          <FeatureCase condition=\\\"nested-flag-key-1\\\" allowBreak>\\n            <p>Nested feature 1 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-2\\\" allowBreak>\\n            <p>Nested feature 2 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-3\\\" allowBreak>\\n            <p>Nested feature 3 Rendered</p>\\n          </FeatureCase>\\n          <FeatureDefault allowBreak>\\n            <p>This is the default content if no other cases are matched.</p>\\n          </FeatureDefault>\\n        </FeatureSwitch>\\n      </FeatureFlag>\\n    </FeatureFlag>\\n  );\\n};\\n\";\n// @ts-ignore\nvar __ADDS_MAP__ = {\"component-feature-flag--standard-usage\":{\"startLoc\":{\"col\":29,\"line\":24},\"endLoc\":{\"col\":1,\"line\":47},\"startBody\":{\"col\":29,\"line\":24},\"endBody\":{\"col\":1,\"line\":47}},\"component-feature-flag--with-feature-true-and-feature-false\":{\"startLoc\":{\"col\":46,\"line\":49},\"endLoc\":{\"col\":1,\"line\":54},\"startBody\":{\"col\":46,\"line\":49},\"endBody\":{\"col\":1,\"line\":54}},\"component-feature-flag--with-nesting\":{\"startLoc\":{\"col\":27,\"line\":56},\"endLoc\":{\"col\":1,\"line\":84},\"startBody\":{\"col\":27,\"line\":56},\"endBody\":{\"col\":1,\"line\":84}}};\n// @ts-ignore\nvar __MAIN_FILE_LOCATION__ = \"/FeatureFlag.stories.jsx\";\n// @ts-ignore\nvar __MODULE_DEPENDENCIES__ = [];\n// @ts-ignore\nvar __LOCAL_DEPENDENCIES__ = {};\n// @ts-ignore\nvar __IDS_TO_FRAMEWORKS__ = {};\n        \nimport React from 'react';\nimport { text, object } from '@storybook/addon-knobs';\n\nimport FeatureFlag from './index.tsx';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport FeatureTrue from '../FeatureTrue';\nimport FeatureFalse from '../FeatureFalse';\n\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: {\"storySource\":{\"source\":\"import React from 'react';\\nimport { text, object } from '@storybook/addon-knobs';\\n\\nimport FeatureFlag from './index.tsx';\\nimport FeatureSwitch from '../FeatureSwitch';\\nimport FeatureCase from '../FeatureCase';\\nimport FeatureDefault from '../FeatureDefault';\\nimport FeatureTrue from '../FeatureTrue';\\nimport FeatureFalse from '../FeatureFalse';\\n\\nimport notes from './README.md';\\n\\nexport default {\\n  title: 'Component|Feature Flag',\\n  component: FeatureFlag,\\n  parameters: { notes }\\n};\\n\\nconst applicationKeys = {\\n  'integration-test': true,\\n  'multivariate-test': 'multivariate-test-1'\\n};\\n\\nexport const standardUsage = () => (\\n  <FeatureFlag\\n    flagKey={text('flagKey', 'multivariate-test')}\\n    appFlags={object('appFlags', applicationKeys)}\\n  >\\n    <FeatureSwitch>\\n      <FeatureCase condition=\\\"multivariate-test-1\\\" allowBreak>\\n        <p>Multivariate Test 1 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-2\\\" allowBreak>\\n        <p>Multivariate Test 2 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-3\\\" allowBreak>\\n        <p>Multivariate Test 3 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-4\\\" allowBreak>\\n        <p>Multivariate Test 4 Rendered</p>\\n      </FeatureCase>\\n      <FeatureDefault>\\n        <p>If no conditions are met then render the default</p>\\n      </FeatureDefault>\\n    </FeatureSwitch>\\n  </FeatureFlag>\\n);\\n\\nexport const withFeatureTrueAndFeatureFalse = () => (\\n  <FeatureFlag flagKey=\\\"integration-test\\\" appFlags={object('appFlags', applicationKeys)}>\\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\\n  </FeatureFlag>\\n);\\n\\nexport const withNesting = () => {\\n  const flags = {\\n    'nested-flag-key': 'nested-flag-key-1'\\n  };\\n  return (\\n    <FeatureFlag flagKey=\\\"multivariate-test\\\" appFlags={applicationKeys}>\\n      <p>\\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\\n        component. Check out the story below to see the code.\\n      </p>\\n      <FeatureFlag flagKey=\\\"nested-flag-key\\\" appFlags={object('appFlags', flags)}>\\n        <FeatureSwitch>\\n          <FeatureCase condition=\\\"nested-flag-key-1\\\" allowBreak>\\n            <p>Nested feature 1 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-2\\\" allowBreak>\\n            <p>Nested feature 2 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-3\\\" allowBreak>\\n            <p>Nested feature 3 Rendered</p>\\n          </FeatureCase>\\n          <FeatureDefault allowBreak>\\n            <p>This is the default content if no other cases are matched.</p>\\n          </FeatureDefault>\\n        </FeatureSwitch>\\n      </FeatureFlag>\\n    </FeatureFlag>\\n  );\\n};\\n\",\"locationsMap\":{\"component-feature-flag--standard-usage\":{\"startLoc\":{\"col\":29,\"line\":24},\"endLoc\":{\"col\":1,\"line\":47},\"startBody\":{\"col\":29,\"line\":24},\"endBody\":{\"col\":1,\"line\":47}},\"component-feature-flag--with-feature-true-and-feature-false\":{\"startLoc\":{\"col\":46,\"line\":49},\"endLoc\":{\"col\":1,\"line\":54},\"startBody\":{\"col\":46,\"line\":49},\"endBody\":{\"col\":1,\"line\":54}},\"component-feature-flag--with-nesting\":{\"startLoc\":{\"col\":27,\"line\":56},\"endLoc\":{\"col\":1,\"line\":84},\"startBody\":{\"col\":27,\"line\":56},\"endBody\":{\"col\":1,\"line\":84}}}}, notes },};\n\nconst applicationKeys = {\n  'integration-test': true,\n  'multivariate-test': 'multivariate-test-1'\n};\n\nexport const standardUsage = addSourceDecorator(() => (\n  <FeatureFlag\n    flagKey={text('flagKey', 'multivariate-test')}\n    appFlags={object('appFlags', applicationKeys)}\n  >\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n), {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});;\n\nexport const withFeatureTrueAndFeatureFalse = addSourceDecorator(() => (\n  <FeatureFlag flagKey=\"integration-test\" appFlags={object('appFlags', applicationKeys)}>\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\n  </FeatureFlag>\n), {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});;\n\nexport const withNesting = addSourceDecorator(() => {\n  const flags = {\n    'nested-flag-key': 'nested-flag-key-1'\n  };\n  return (\n    <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n      <p>\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\n        component. Check out the story below to see the code.\n      </p>\n      <FeatureFlag flagKey=\"nested-flag-key\" appFlags={object('appFlags', flags)}>\n        <FeatureSwitch>\n          <FeatureCase condition=\"nested-flag-key-1\" allowBreak>\n            <p>Nested feature 1 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-2\" allowBreak>\n            <p>Nested feature 2 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-3\" allowBreak>\n            <p>Nested feature 3 Rendered</p>\n          </FeatureCase>\n          <FeatureDefault allowBreak>\n            <p>This is the default content if no other cases are matched.</p>\n          </FeatureDefault>\n        </FeatureSwitch>\n      </FeatureFlag>\n    </FeatureFlag>\n  );\n}, {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});\n",__ADDS_MAP__={"component-feature-flag--standard-usage":{startLoc:{col:29,line:45},endLoc:{col:139,line:68},startBody:{col:29,line:45},endBody:{col:139,line:68}},"component-feature-flag--with-feature-true-and-feature-false":{startLoc:{col:46,line:70},endLoc:{col:139,line:75},startBody:{col:46,line:70},endBody:{col:139,line:75}},"component-feature-flag--with-nesting":{startLoc:{col:27,line:77},endLoc:{col:139,line:105},startBody:{col:27,line:77},endBody:{col:139,line:105}}},__MAIN_FILE_LOCATION__="/FeatureFlag.stories.jsx",__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},withSourceLoader=__webpack_require__(220).withSource,addSourceDecorator=__webpack_require__(220).addSource,__SOURCE_PREFIX__="/home/circleci/ld-react-components/src/lib/FeatureFlag",__STORY__="import React from 'react';\nimport { text, object } from '@storybook/addon-knobs';\n\nimport FeatureFlag from './index.tsx';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport FeatureTrue from '../FeatureTrue';\nimport FeatureFalse from '../FeatureFalse';\n\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: { notes }\n};\n\nconst applicationKeys = {\n  'integration-test': true,\n  'multivariate-test': 'multivariate-test-1'\n};\n\nexport const standardUsage = () => (\n  <FeatureFlag\n    flagKey={text('flagKey', 'multivariate-test')}\n    appFlags={object('appFlags', applicationKeys)}\n  >\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n);\n\nexport const withFeatureTrueAndFeatureFalse = () => (\n  <FeatureFlag flagKey=\"integration-test\" appFlags={object('appFlags', applicationKeys)}>\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\n  </FeatureFlag>\n);\n\nexport const withNesting = () => {\n  const flags = {\n    'nested-flag-key': 'nested-flag-key-1'\n  };\n  return (\n    <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n      <p>\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\n        component. Check out the story below to see the code.\n      </p>\n      <FeatureFlag flagKey=\"nested-flag-key\" appFlags={object('appFlags', flags)}>\n        <FeatureSwitch>\n          <FeatureCase condition=\"nested-flag-key-1\" allowBreak>\n            <p>Nested feature 1 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-2\" allowBreak>\n            <p>Nested feature 2 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-3\" allowBreak>\n            <p>Nested feature 3 Rendered</p>\n          </FeatureCase>\n          <FeatureDefault allowBreak>\n            <p>This is the default content if no other cases are matched.</p>\n          </FeatureDefault>\n        </FeatureSwitch>\n      </FeatureFlag>\n    </FeatureFlag>\n  );\n};\n",__ADDS_MAP__={"component-feature-flag--standard-usage":{startLoc:{col:29,line:24},endLoc:{col:1,line:47},startBody:{col:29,line:24},endBody:{col:1,line:47}},"component-feature-flag--with-feature-true-and-feature-false":{startLoc:{col:46,line:49},endLoc:{col:1,line:54},startBody:{col:46,line:49},endBody:{col:1,line:54}},"component-feature-flag--with-nesting":{startLoc:{col:27,line:56},endLoc:{col:1,line:84},startBody:{col:27,line:56},endBody:{col:1,line:84}}},__MAIN_FILE_LOCATION__="/FeatureFlag.stories.jsx",__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};// @ts-ignore
/* harmony default export */ var FeatureFlag_stories = __webpack_exports__["default"] = ({title:"Component|Feature Flag",component:FeatureFlag_default.a,parameters:(_parameters={storySource:{source:"\n\n// @ts-nocheck\n// @ts-ignore\nvar withSourceLoader = require('@storybook/source-loader/preview').withSource;\n// @ts-ignore\nvar addSourceDecorator = require(\"@storybook/source-loader/preview\").addSource;\n// @ts-ignore\nvar __SOURCE_PREFIX__ = \"/home/circleci/ld-react-components/src/lib/FeatureFlag\";\n// @ts-ignore\nvar __STORY__ = \"import React from 'react';\\nimport { text, object } from '@storybook/addon-knobs';\\n\\nimport FeatureFlag from './index.tsx';\\nimport FeatureSwitch from '../FeatureSwitch';\\nimport FeatureCase from '../FeatureCase';\\nimport FeatureDefault from '../FeatureDefault';\\nimport FeatureTrue from '../FeatureTrue';\\nimport FeatureFalse from '../FeatureFalse';\\n\\nimport notes from './README.md';\\n\\nexport default {\\n  title: 'Component|Feature Flag',\\n  component: FeatureFlag,\\n  parameters: { notes }\\n};\\n\\nconst applicationKeys = {\\n  'integration-test': true,\\n  'multivariate-test': 'multivariate-test-1'\\n};\\n\\nexport const standardUsage = () => (\\n  <FeatureFlag\\n    flagKey={text('flagKey', 'multivariate-test')}\\n    appFlags={object('appFlags', applicationKeys)}\\n  >\\n    <FeatureSwitch>\\n      <FeatureCase condition=\\\"multivariate-test-1\\\" allowBreak>\\n        <p>Multivariate Test 1 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-2\\\" allowBreak>\\n        <p>Multivariate Test 2 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-3\\\" allowBreak>\\n        <p>Multivariate Test 3 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-4\\\" allowBreak>\\n        <p>Multivariate Test 4 Rendered</p>\\n      </FeatureCase>\\n      <FeatureDefault>\\n        <p>If no conditions are met then render the default</p>\\n      </FeatureDefault>\\n    </FeatureSwitch>\\n  </FeatureFlag>\\n);\\n\\nexport const withFeatureTrueAndFeatureFalse = () => (\\n  <FeatureFlag flagKey=\\\"integration-test\\\" appFlags={object('appFlags', applicationKeys)}>\\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\\n  </FeatureFlag>\\n);\\n\\nexport const withNesting = () => {\\n  const flags = {\\n    'nested-flag-key': 'nested-flag-key-1'\\n  };\\n  return (\\n    <FeatureFlag flagKey=\\\"multivariate-test\\\" appFlags={applicationKeys}>\\n      <p>\\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\\n        component. Check out the story below to see the code.\\n      </p>\\n      <FeatureFlag flagKey=\\\"nested-flag-key\\\" appFlags={object('appFlags', flags)}>\\n        <FeatureSwitch>\\n          <FeatureCase condition=\\\"nested-flag-key-1\\\" allowBreak>\\n            <p>Nested feature 1 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-2\\\" allowBreak>\\n            <p>Nested feature 2 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-3\\\" allowBreak>\\n            <p>Nested feature 3 Rendered</p>\\n          </FeatureCase>\\n          <FeatureDefault allowBreak>\\n            <p>This is the default content if no other cases are matched.</p>\\n          </FeatureDefault>\\n        </FeatureSwitch>\\n      </FeatureFlag>\\n    </FeatureFlag>\\n  );\\n};\\n\";\n// @ts-ignore\nvar __ADDS_MAP__ = {\"component-feature-flag--standard-usage\":{\"startLoc\":{\"col\":29,\"line\":24},\"endLoc\":{\"col\":1,\"line\":47},\"startBody\":{\"col\":29,\"line\":24},\"endBody\":{\"col\":1,\"line\":47}},\"component-feature-flag--with-feature-true-and-feature-false\":{\"startLoc\":{\"col\":46,\"line\":49},\"endLoc\":{\"col\":1,\"line\":54},\"startBody\":{\"col\":46,\"line\":49},\"endBody\":{\"col\":1,\"line\":54}},\"component-feature-flag--with-nesting\":{\"startLoc\":{\"col\":27,\"line\":56},\"endLoc\":{\"col\":1,\"line\":84},\"startBody\":{\"col\":27,\"line\":56},\"endBody\":{\"col\":1,\"line\":84}}};\n// @ts-ignore\nvar __MAIN_FILE_LOCATION__ = \"/FeatureFlag.stories.jsx\";\n// @ts-ignore\nvar __MODULE_DEPENDENCIES__ = [];\n// @ts-ignore\nvar __LOCAL_DEPENDENCIES__ = {};\n// @ts-ignore\nvar __IDS_TO_FRAMEWORKS__ = {};\n        \nimport React from 'react';\nimport { text, object } from '@storybook/addon-knobs';\n\nimport FeatureFlag from './index.tsx';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport FeatureTrue from '../FeatureTrue';\nimport FeatureFalse from '../FeatureFalse';\n\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: {\"storySource\":{\"source\":\"import React from 'react';\\nimport { text, object } from '@storybook/addon-knobs';\\n\\nimport FeatureFlag from './index.tsx';\\nimport FeatureSwitch from '../FeatureSwitch';\\nimport FeatureCase from '../FeatureCase';\\nimport FeatureDefault from '../FeatureDefault';\\nimport FeatureTrue from '../FeatureTrue';\\nimport FeatureFalse from '../FeatureFalse';\\n\\nimport notes from './README.md';\\n\\nexport default {\\n  title: 'Component|Feature Flag',\\n  component: FeatureFlag,\\n  parameters: { notes }\\n};\\n\\nconst applicationKeys = {\\n  'integration-test': true,\\n  'multivariate-test': 'multivariate-test-1'\\n};\\n\\nexport const standardUsage = () => (\\n  <FeatureFlag\\n    flagKey={text('flagKey', 'multivariate-test')}\\n    appFlags={object('appFlags', applicationKeys)}\\n  >\\n    <FeatureSwitch>\\n      <FeatureCase condition=\\\"multivariate-test-1\\\" allowBreak>\\n        <p>Multivariate Test 1 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-2\\\" allowBreak>\\n        <p>Multivariate Test 2 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-3\\\" allowBreak>\\n        <p>Multivariate Test 3 Rendered</p>\\n      </FeatureCase>\\n      <FeatureCase condition=\\\"multivariate-test-4\\\" allowBreak>\\n        <p>Multivariate Test 4 Rendered</p>\\n      </FeatureCase>\\n      <FeatureDefault>\\n        <p>If no conditions are met then render the default</p>\\n      </FeatureDefault>\\n    </FeatureSwitch>\\n  </FeatureFlag>\\n);\\n\\nexport const withFeatureTrueAndFeatureFalse = () => (\\n  <FeatureFlag flagKey=\\\"integration-test\\\" appFlags={object('appFlags', applicationKeys)}>\\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\\n  </FeatureFlag>\\n);\\n\\nexport const withNesting = () => {\\n  const flags = {\\n    'nested-flag-key': 'nested-flag-key-1'\\n  };\\n  return (\\n    <FeatureFlag flagKey=\\\"multivariate-test\\\" appFlags={applicationKeys}>\\n      <p>\\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\\n        component. Check out the story below to see the code.\\n      </p>\\n      <FeatureFlag flagKey=\\\"nested-flag-key\\\" appFlags={object('appFlags', flags)}>\\n        <FeatureSwitch>\\n          <FeatureCase condition=\\\"nested-flag-key-1\\\" allowBreak>\\n            <p>Nested feature 1 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-2\\\" allowBreak>\\n            <p>Nested feature 2 Rendered</p>\\n          </FeatureCase>\\n          <FeatureCase condition=\\\"nested-flag-key-3\\\" allowBreak>\\n            <p>Nested feature 3 Rendered</p>\\n          </FeatureCase>\\n          <FeatureDefault allowBreak>\\n            <p>This is the default content if no other cases are matched.</p>\\n          </FeatureDefault>\\n        </FeatureSwitch>\\n      </FeatureFlag>\\n    </FeatureFlag>\\n  );\\n};\\n\",\"locationsMap\":{\"component-feature-flag--standard-usage\":{\"startLoc\":{\"col\":29,\"line\":24},\"endLoc\":{\"col\":1,\"line\":47},\"startBody\":{\"col\":29,\"line\":24},\"endBody\":{\"col\":1,\"line\":47}},\"component-feature-flag--with-feature-true-and-feature-false\":{\"startLoc\":{\"col\":46,\"line\":49},\"endLoc\":{\"col\":1,\"line\":54},\"startBody\":{\"col\":46,\"line\":49},\"endBody\":{\"col\":1,\"line\":54}},\"component-feature-flag--with-nesting\":{\"startLoc\":{\"col\":27,\"line\":56},\"endLoc\":{\"col\":1,\"line\":84},\"startBody\":{\"col\":27,\"line\":56},\"endBody\":{\"col\":1,\"line\":84}}}}, notes },};\n\nconst applicationKeys = {\n  'integration-test': true,\n  'multivariate-test': 'multivariate-test-1'\n};\n\nexport const standardUsage = addSourceDecorator(() => (\n  <FeatureFlag\n    flagKey={text('flagKey', 'multivariate-test')}\n    appFlags={object('appFlags', applicationKeys)}\n  >\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n), {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});;\n\nexport const withFeatureTrueAndFeatureFalse = addSourceDecorator(() => (\n  <FeatureFlag flagKey=\"integration-test\" appFlags={object('appFlags', applicationKeys)}>\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\n  </FeatureFlag>\n), {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});;\n\nexport const withNesting = addSourceDecorator(() => {\n  const flags = {\n    'nested-flag-key': 'nested-flag-key-1'\n  };\n  return (\n    <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n      <p>\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\n        component. Check out the story below to see the code.\n      </p>\n      <FeatureFlag flagKey=\"nested-flag-key\" appFlags={object('appFlags', flags)}>\n        <FeatureSwitch>\n          <FeatureCase condition=\"nested-flag-key-1\" allowBreak>\n            <p>Nested feature 1 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-2\" allowBreak>\n            <p>Nested feature 2 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-3\" allowBreak>\n            <p>Nested feature 3 Rendered</p>\n          </FeatureCase>\n          <FeatureDefault allowBreak>\n            <p>This is the default content if no other cases are matched.</p>\n          </FeatureDefault>\n        </FeatureSwitch>\n      </FeatureFlag>\n    </FeatureFlag>\n  );\n}, {__STORY__, __ADDS_MAP__,__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__});\n",locationsMap:{"component-feature-flag--standard-usage":{startLoc:{col:29,line:45},endLoc:{col:139,line:68},startBody:{col:29,line:45},endBody:{col:139,line:68}},"component-feature-flag--with-feature-true-and-feature-false":{startLoc:{col:46,line:70},endLoc:{col:139,line:75},startBody:{col:46,line:70},endBody:{col:139,line:75}},"component-feature-flag--with-nesting":{startLoc:{col:27,line:77},endLoc:{col:139,line:105},startBody:{col:27,line:77},endBody:{col:139,line:105}}}}},_defineProperty(_parameters,"storySource",{source:"import React from 'react';\nimport { text, object } from '@storybook/addon-knobs';\n\nimport FeatureFlag from './index.tsx';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport FeatureTrue from '../FeatureTrue';\nimport FeatureFalse from '../FeatureFalse';\n\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: { notes }\n};\n\nconst applicationKeys = {\n  'integration-test': true,\n  'multivariate-test': 'multivariate-test-1'\n};\n\nexport const standardUsage = () => (\n  <FeatureFlag\n    flagKey={text('flagKey', 'multivariate-test')}\n    appFlags={object('appFlags', applicationKeys)}\n  >\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n);\n\nexport const withFeatureTrueAndFeatureFalse = () => (\n  <FeatureFlag flagKey=\"integration-test\" appFlags={object('appFlags', applicationKeys)}>\n    <FeatureTrue>Output: FeatureTrue being rendered</FeatureTrue>\n    <FeatureFalse>Output: FeatureFalse being rendered</FeatureFalse>\n  </FeatureFlag>\n);\n\nexport const withNesting = () => {\n  const flags = {\n    'nested-flag-key': 'nested-flag-key-1'\n  };\n  return (\n    <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n      <p>\n        A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag\n        component. Check out the story below to see the code.\n      </p>\n      <FeatureFlag flagKey=\"nested-flag-key\" appFlags={object('appFlags', flags)}>\n        <FeatureSwitch>\n          <FeatureCase condition=\"nested-flag-key-1\" allowBreak>\n            <p>Nested feature 1 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-2\" allowBreak>\n            <p>Nested feature 2 Rendered</p>\n          </FeatureCase>\n          <FeatureCase condition=\"nested-flag-key-3\" allowBreak>\n            <p>Nested feature 3 Rendered</p>\n          </FeatureCase>\n          <FeatureDefault allowBreak>\n            <p>This is the default content if no other cases are matched.</p>\n          </FeatureDefault>\n        </FeatureSwitch>\n      </FeatureFlag>\n    </FeatureFlag>\n  );\n};\n",locationsMap:{"component-feature-flag--standard-usage":{startLoc:{col:29,line:24},endLoc:{col:1,line:47},startBody:{col:29,line:24},endBody:{col:1,line:47}},"component-feature-flag--with-feature-true-and-feature-false":{startLoc:{col:46,line:49},endLoc:{col:1,line:54},startBody:{col:46,line:49},endBody:{col:1,line:54}},"component-feature-flag--with-nesting":{startLoc:{col:27,line:56},endLoc:{col:1,line:84},startBody:{col:27,line:56},endBody:{col:1,line:84}}}}),_defineProperty(_parameters,"notes",README),_parameters)});var applicationKeys={"integration-test":!0,"multivariate-test":"multivariate-test-1"},_ref=/*#__PURE__*/react_default.a.createElement(FeatureSwitch_default.a,null,/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-1",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Multivariate Test 1 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-2",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Multivariate Test 2 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-3",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Multivariate Test 3 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"multivariate-test-4",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Multivariate Test 4 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureDefault_default.a,null,/*#__PURE__*/react_default.a.createElement("p",null,"If no conditions are met then render the default")));var standardUsage=addSourceDecorator(addSourceDecorator(function(){return/*#__PURE__*/react_default.a.createElement(FeatureFlag_default.a,{flagKey:Object(dist["text"])("flagKey","multivariate-test"),appFlags:Object(dist["object"])("appFlags",applicationKeys)},_ref)},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});var _ref2=/*#__PURE__*/react_default.a.createElement(FeatureTrue_default.a,null,"Output: FeatureTrue being rendered"),_ref3=/*#__PURE__*/react_default.a.createElement(FeatureFalse_default.a,null,"Output: FeatureFalse being rendered");var withFeatureTrueAndFeatureFalse=addSourceDecorator(addSourceDecorator(function(){return/*#__PURE__*/react_default.a.createElement(FeatureFlag_default.a,{flagKey:"integration-test",appFlags:Object(dist["object"])("appFlags",applicationKeys)},_ref2,_ref3)},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});var _ref4=/*#__PURE__*/react_default.a.createElement("p",null,"A non-component (in this case, a p tag) is being rendered, under the parent FeatureFlag component. Check out the story below to see the code."),_ref5=/*#__PURE__*/react_default.a.createElement(FeatureSwitch_default.a,null,/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"nested-flag-key-1",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Nested feature 1 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"nested-flag-key-2",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Nested feature 2 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureCase_default.a,{condition:"nested-flag-key-3",allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"Nested feature 3 Rendered")),/*#__PURE__*/react_default.a.createElement(FeatureDefault_default.a,{allowBreak:!0},/*#__PURE__*/react_default.a.createElement("p",null,"This is the default content if no other cases are matched.")));var withNesting=addSourceDecorator(addSourceDecorator(function(){return/*#__PURE__*/react_default.a.createElement(FeatureFlag_default.a,{flagKey:"multivariate-test",appFlags:applicationKeys},_ref4,/*#__PURE__*/react_default.a.createElement(FeatureFlag_default.a,{flagKey:"nested-flag-key",appFlags:Object(dist["object"])("appFlags",{"nested-flag-key":"nested-flag-key-1"})},_ref5))},{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:__MAIN_FILE_LOCATION__,__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
/**
 * FeatureDefault
 */
function FeatureDefault(props) {
    var children = props.children;
    return react_1.default.Children.map(children, function (child) { return child; });
}
exports.default = FeatureDefault;
try {
    // @ts-ignore
    FeatureDefault.displayName = "FeatureDefault";
    // @ts-ignore
    FeatureDefault.__docgenInfo = { "description": "FeatureDefault", "displayName": "FeatureDefault", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureDefault/index.ts#FeatureDefault"] = { docgenInfo: FeatureDefault.__docgenInfo, name: "FeatureDefault", path: "src/lib/FeatureDefault/index.ts#FeatureDefault" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var FeatureCase_1 = __importDefault(__webpack_require__(93));
var FeatureDefault_1 = __importDefault(__webpack_require__(228));
/**
 * FeatureSwitch
 */
var FeatureSwitch = function (props) {
    var children = props.children, flagKey = props.flagKey, appFlags = props.appFlags;
    var childArray = [];
    var breakIt = false;
    react_1.default.Children.forEach(children, function (element) {
        // if the Component is FeatureCase and break is false, compare the feature flag and render the element if its true
        if (react_1.default.isValidElement(element) && element.type === FeatureCase_1.default && !breakIt) {
            // TODO use proper type cast here once they are defined
            var _a = element.props, condition = _a.condition, allowBreak = _a.allowBreak;
            if (appFlags[flagKey] === condition) {
                childArray.push(element);
                breakIt = allowBreak;
            }
        }
        // if its Default and it is not breaked yet, render the element.
        if (react_1.default.isValidElement(element) && element.type === FeatureDefault_1.default && !breakIt) {
            childArray.push(element);
        }
    });
    return react_1.default.createElement(react_1.default.Fragment, null, childArray);
};
exports.default = FeatureSwitch;
try {
    // @ts-ignore
    FeatureSwitch.displayName = "FeatureSwitch";
    // @ts-ignore
    FeatureSwitch.__docgenInfo = { "description": "FeatureSwitch", "displayName": "FeatureSwitch", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureSwitch/index.tsx#FeatureSwitch"] = { docgenInfo: FeatureSwitch.__docgenInfo, name: "FeatureSwitch", path: "src/lib/FeatureSwitch/index.tsx#FeatureSwitch" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var FeatureTrue = function (_a) {
    var children = _a.children;
    return react_1.default.Children.map(children, function (child) { return child; });
};
exports.default = FeatureTrue;
try {
    // @ts-ignore
    FeatureTrue.displayName = "FeatureTrue";
    // @ts-ignore
    FeatureTrue.__docgenInfo = { "description": "", "displayName": "FeatureTrue", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureTrue/index.ts#FeatureTrue"] = { docgenInfo: FeatureTrue.__docgenInfo, name: "FeatureTrue", path: "src/lib/FeatureTrue/index.ts#FeatureTrue" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
/**
 * FeatureFalse
 */
function FeatureFalse(props) {
    var children = props.children;
    return react_1.default.Children.map(children, function (child) { return child; });
}
exports.default = FeatureFalse;
try {
    // @ts-ignore
    FeatureFalse.displayName = "FeatureFalse";
    // @ts-ignore
    FeatureFalse.__docgenInfo = { "description": "FeatureFalse", "displayName": "FeatureFalse", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureFalse/index.ts#FeatureFalse"] = { docgenInfo: FeatureFalse.__docgenInfo, name: "FeatureFalse", path: "src/lib/FeatureFalse/index.ts#FeatureFalse" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(510);
__webpack_require__(637);
__webpack_require__(638);
__webpack_require__(1269);
module.exports = __webpack_require__(1270);


/***/ }),

/***/ 572:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
/**
 * FeatureCase
 */
function FeatureCase(props) {
    var children = props.children;
    return react_1.default.Children.map(children, function (child) { return child; });
}
exports.default = FeatureCase;
try {
    // @ts-ignore
    FeatureCase.displayName = "FeatureCase";
    // @ts-ignore
    FeatureCase.__docgenInfo = { "description": "FeatureCase", "displayName": "FeatureCase", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/lib/FeatureCase/index.ts#FeatureCase"] = { docgenInfo: FeatureCase.__docgenInfo, name: "FeatureCase", path: "src/lib/FeatureCase/index.ts#FeatureCase" };
}
catch (__react_docgen_typescript_loader_error) { }


/***/ })

},[[509,1,2]]]);
//# sourceMappingURL=main.4cbe3d9c497594d35ae0.bundle.js.map