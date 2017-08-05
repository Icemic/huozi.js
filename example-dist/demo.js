(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/example-dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const beiying = exports.beiying = `我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”
　　回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。
　　到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”
　　`;

const mixed = exports.mixed = `
如同大部分北海道地区的地名由来，“札幌”这一地名也是起源于北海道当地的原住民阿伊努族的语言阿伊努语。关于札幌的名称起源有二种说法，一说认为札幌（さっぽろ）起源于阿伊努语中的“sat-poro-pet/サッ・ポロ・ペッ”，意指“干渴的大河”；另一说则认为起源于阿伊努语中的“sar-poro-pet/サリ・ポロ・ペッ”，意思是完全与前者颠倒的“有大片湿地的河流”。`;

const lorem = exports.lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = huozi;

var _code = __webpack_require__(3);

var _isCJK = __webpack_require__(4);

/*!
 * @author      Icemic Jia <bingfeng.web@gmail.com>
 * @copyright   2017 Icemic Jia
 * @link        https://github.com/Icemic/huozi.js
 * @license     https://github.com/Icemic/huozi.js/blob/master/LICENSE
 *
 * 本程序根据使用目的采用双授权的方式，你可以根据如下条款选择适合你的许可协议：
 * 
 * - 对于全部的使用目的，均可选择 GNU Affero General Public License 3.0。
 * - 对于非商业目的的使用，可选择 Apache License 2.0。此处非商业目的的定义和区分方法与 Creative Commons BY-NC 4.0 International 中的相关条目一致。
 * - 特别地，当用户将本程序与 AVG.js，或更具体的，avg-core 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。关于 AVG.js 的详情，请访问：https://github.com/avgjs/avg-core
 * 
 * English Translation:
 * 
 * This software uses a dual license, you can choose the appropriate license under the following terms:
 * 
 * - GNU Affero General Public License 3.0 is available for all purposes.
 * - Apache License 2.0 is available for non-commercial use. The definition of non-commercial use is consistent with the relevant entries in Creative Commons BY-NC 4.0 International.
 * - In particular, Apache License 2.0 is available for users who use this software with AVG.js, or more specifically, the avg-core library, whether for commercial or non-commercial use. For more details about AVG.js, see: https://github.com/avgjs/avg-core
 */

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// 检测中文字符宽度是否等于字号
context.font = '18px sans-serif';
const FLAG_STDWIDTH = context.measureText('中').width === 18;

const defaultOptions = {
  fontFamily: 'sans-serif',
  gridSize: 26,
  column: 25,
  row: Infinity,
  xInterval: 0,
  yInterval: 12,
  letterSpacing: 0,
  inlineCompression: true,
  forceGridAlignment: true,
  westernCharacterFirst: false,
  forceSpaceBetweenCJKAndWestern: false,
  fixLeftQuote: true
};

function huozi(textSequence, layoutOptions, onSequence) {

  layoutOptions = Object.assign({}, defaultOptions, layoutOptions);

  const {
    fontFamily,
    gridSize,
    column,
    row,
    xInterval,
    yInterval,
    inlineCompression: FLAG_INLINE_COMPRESSION,
    forceGridAlignment,
    westernCharacterFirst,
    forceSpaceBetweenCJKAndWestern,
    fixLeftQuote } = layoutOptions;

  let currentX = 0;
  let currentY = 0;

  let currentColumn = 0;
  let currentRow = 0;

  // 判断上一个是否为标点，以此判断标点挤压
  let lastIsPunctuation = false;
  let lastCharFontSize = 0;
  let needForceWrap = false;

  // 存储一行字中的最大字号，用以确定真实行高
  let maxFontSize = gridSize;

  // 缓存英文字符直到遇到下一个中文字符为止
  let westernTextCache = [];
  let lastIsWesternChar = westernCharacterFirst;

  const layoutSequence = [];

  const lineWrap = () => {
    currentX = 0;
    currentColumn = 0;
    currentRow += 1;
    currentY += maxFontSize + yInterval;
    maxFontSize = gridSize;
    lastIsPunctuation = false;
    lastCharFontSize = 0;
    needForceWrap = false;
  };

  // 在末尾插入一个表意文字（CJK）空格，hack在文本以西文字符结尾时结尾的西文不会显示的问题。
  for (const char of [...textSequence, { fontSize: 12, character: '　' }]) {

    // 读取字符数据
    const { fontSize: charFontSize, character } = char;

    // 处理行内上一个字符是标点（已预先压缩），但本字符是非标点（因而需要取消之前的压缩）的情况
    if (FLAG_INLINE_COMPRESSION && lastIsPunctuation && !_code.BIAODIAN.includes(character)) {
      currentX += lastCharFontSize / 2 + xInterval;
      currentColumn += 0.5;
      lastIsPunctuation = false;
    }

    if (/[\n “”‘’]/.test(character)) {
      if (lastIsWesternChar) {
        westernTextCache.push(char);
        continue;
      }
    }

    if (!(0, _isCJK.isCJK)(character) && !/[\n “”‘’]/.test(character)) {
      lastIsWesternChar = true;
      westernTextCache.push(char);
      continue;
    } else if (westernTextCache.length) {
      const forceSpace = forceSpaceBetweenCJKAndWestern ? 0.25 * gridSize : 0;

      if (currentX) {
        currentX += forceSpace;
      }

      let westernLayoutSequence, isMultiLine, currentX_tmp;
      [westernLayoutSequence, currentX_tmp, currentY, currentRow, isMultiLine] = processWesternText(westernTextCache, layoutOptions, currentX, currentY, currentRow, column * gridSize, row);

      currentColumn = Math.ceil(currentX_tmp / (gridSize + xInterval));
      currentX = currentColumn * (gridSize + xInterval);

      // 单行的情况下自动对齐两端空格
      if (!isMultiLine) {
        // 两端总余量不足 0.5em 时，增加 1em 宽度
        if (currentX - currentX_tmp < forceSpace) {
          currentColumn += 1;
          currentX = currentColumn * gridSize;
        }

        const offsetX = (forceSpace + currentX - currentX_tmp) / 2 - forceSpace;

        westernLayoutSequence = westernLayoutSequence.map(value => {
          value.x += offsetX;
          return onSequence ? onSequence(value) || value : value;
        });
      }

      layoutSequence.push(...westernLayoutSequence);
      lastIsWesternChar = false;
      westernTextCache = [];
    }

    // NOTE: 必须在循环开头折行，因需要考虑下一个字符是否需要标点挤压
    // 折行
    let isLineEnd = false;
    if (currentColumn >= column) {
      isLineEnd = true;

      // 正常折行
      if (!_code.BIAODIANVALIDATEND.includes(character) || _code.BIAODIANVALIDATSTART.includes(character) || needForceWrap) {
        lineWrap();
      }
    }

    // 测量文字宽度
    context.font = `${charFontSize}px ${fontFamily}`;
    const width = context.measureText(character).width;

    // 在前后字号不一致的时候施行强制纵横对齐
    let offsetX = 0;
    let offsetY = (charFontSize - gridSize) / 2;
    let doubleX = false;

    if (forceGridAlignment && charFontSize !== gridSize) {
      offsetX = +forceGridAlignment * (charFontSize - gridSize) / 2;
      currentColumn += offsetX > 0 ? Math.ceil(offsetX * 2 / (gridSize + xInterval)) : 0;

      offsetX = ((1 + Math.ceil(offsetX * 2 / (gridSize + xInterval))) * (gridSize + xInterval) - charFontSize) / 2;
      currentX += offsetX;

      if (currentColumn >= column) {
        lineWrap();
        doubleX = true;
      }
    }

    let quoteFix = 0;
    if (fixLeftQuote) {
      quoteFix += !lastIsPunctuation && character === '“' ? charFontSize / 2 : 0;
      // 一些平台上引号量取结果是<0.5em宽，但绘制时却是1em宽，导致错位。下面的代码修正这一问题
      // OS X 无需此修复（FLAG_STDWIDTH === true）
      if (character === '“' && !FLAG_STDWIDTH) {
        quoteFix += -charFontSize / 2;
      } else if (character === '“' && width === charFontSize) {
        quoteFix += -charFontSize / 2;
      }
    }

    const item = Object.assign({}, char, {
      x: currentX + quoteFix,
      y: currentY - offsetY,
      width: width,
      height: charFontSize
    });

    // 确定文字位置并添加到返回数组中
    layoutSequence.push(onSequence ? onSequence(item) || item : item);

    // 当正好在行首时，因两边空格全部加到一边，可能使得总宽度大于1em，此时应该删去多出的1em宽度
    let offsetX2 = offsetX * (doubleX ? 2 : 1);
    if (offsetX2 > gridSize) {
      offsetX2 -= gridSize;
      currentColumn -= 1;
    }

    currentX += offsetX2;

    // 判断是否进行压缩，并更新位置
    if (isLineEnd && _code.BIAODIANVALIDATEND.includes(character) && !_code.INCOMPRESSIBLE.includes(character)) {
      currentX += charFontSize / 2;
      currentColumn += 0.5;
      if (currentColumn % 1 !== 0.5) {
        needForceWrap = true;
      }
    } else if (FLAG_INLINE_COMPRESSION && _code.BIAODIAN.includes(character) && !_code.INCOMPRESSIBLE.includes(character)) {
      currentX += charFontSize / 2 + xInterval * +lastIsPunctuation;
      currentColumn += 0.5;
      lastIsPunctuation = !lastIsPunctuation;
    } else {
      currentX += charFontSize + xInterval;
      currentColumn += 1;
    }

    // 更新行高
    maxFontSize = Math.max(maxFontSize, charFontSize);

    // 杂七杂八的状态更新
    lastCharFontSize = charFontSize;

    // 超出高度，直接略去后面的字符，返回的数据中也不包含后面的字符。
    if (currentRow >= row) {
      break;
    }
  }

  // 移除表意文字空格
  layoutSequence.pop();

  return layoutSequence;
}

// 独立处理西文文本的排版，返回的数据中文本两侧无空格
function processWesternText(textSequence, { fontFamily, gridSize, yInterval, letterSpacing }, currentX, currentY, currentRow, maxWidth, row) {
  const layoutSequence = [];
  let maxFontSize = gridSize;
  let word = '';
  let wordChar = [];
  let isMultiLine = false;

  // 若末尾不是空格，则为末尾添加一个空格
  if (textSequence[textSequence.length - 1].character !== ' ') {
    textSequence.push({
      fontSize: 0,
      character: ' '
    });
  }

  for (const char of textSequence) {
    const { fontSize: charFontSize, character } = char;

    // 更新行高
    maxFontSize = Math.max(maxFontSize, charFontSize);

    if (character === ' ') {
      const restSpace = maxWidth - currentX;
      const totalWidth = context.measureText(word).width;

      if (restSpace < totalWidth) {
        currentX = 0;
        currentY += maxFontSize + yInterval;
        currentRow += 1;
        isMultiLine = true;

        // 超出高度，直接略去后面的字符，返回的数据中也不包含后面的字符。
        if (currentRow >= row) {
          break;
        }
      }

      for (const char of wordChar) {
        const { fontSize: charFontSize, character } = char;

        // 确定文字位置并添加到返回数组中
        const offsetY = (charFontSize - gridSize) / 2;
        layoutSequence.push(Object.assign({}, char, {
          x: currentX,
          y: currentY - offsetY
        }));

        currentX += char.width + letterSpacing;
      }

      currentX += 0.35 * gridSize;

      word = '';
      wordChar = [];
    } else {
      context.font = `${charFontSize}px ${fontFamily}`;
      const width = context.measureText(character).width;

      word += character;

      // 在这里先装入 width 和 height 信息
      wordChar.push(Object.assign({}, char, { width: width, height: charFontSize }));
    }
  }

  return [layoutSequence, currentX - 0.35 * gridSize, currentY, currentRow, isMultiLine];
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _text = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const devicePixelRatio = window.devicePixelRatio;

canvas.width = canvas.width * devicePixelRatio;
canvas.height = canvas.height * devicePixelRatio;

function drawText(text, options) {
  const textSequence = text.trim().replace('\n', '').split('').map(value => {
    return {
      fontSize: +options.charFontSize || 18,
      character: value
    };
  });

  const layoutSequence = (0, _index2.default)(textSequence, {
    gridSize: +options.fontSize || 18,
    column: +options.column || 35,
    inlineCompression: options.compress === undefined ? options.compress : true,
    fixLeftQuote: navigator.language === 'zh-TW' ? false : undefined
  });

  console.log(layoutSequence);

  context.clearRect(0, 0, 800 * devicePixelRatio, 600 * devicePixelRatio);
  context.strokeStyle = '#999';

  for (const char of layoutSequence) {
    context.font = `${char.fontSize * devicePixelRatio}px sans-serif`;
    context.textBaseline = 'hanging';
    context.fillText(char.character, char.x * devicePixelRatio, char.y * devicePixelRatio);

    options.stroke && context.strokeRect(char.x * devicePixelRatio, char.y * devicePixelRatio, char.width * devicePixelRatio, char.height * devicePixelRatio);
  }
}

/* for demo */

const handler = function (e) {
  const obj = {};
  $('#form').serializeArray().map(value => {
    obj[value.name] = value.value;
  });
  drawText(obj['text'], obj);
};

let id = 0;
$('#form').on('change input', function (e) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(handler, 300, e);
});

function fillTextArea(num) {
  if (num === 1) {
    textBox.textContent = _text.beiying;
  } else if (num === 2) {
    textBox.textContent = _text.lorem;
  } else {
    textBox.textContent = _text.mixed;
  }
  handler();
}

window.fillTextArea = fillTextArea;

fillTextArea(1);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author      Icemic Jia <bingfeng.web@gmail.com>
 * @copyright   2017 Icemic Jia
 * @link        https://github.com/Icemic/huozi.js
 * @license     https://github.com/Icemic/huozi.js/blob/master/LICENSE
 *
 * 本程序根据使用目的采用双授权的方式，你可以根据如下条款选择适合你的许可协议：
 * 
 * - 对于全部的使用目的，均可选择 GNU Affero General Public License 3.0。
 * - 对于非商业目的的使用，可选择 Apache License 2.0。此处非商业目的的定义和区分方法与 Creative Commons BY-NC 4.0 International 中的相关条目一致。
 * - 特别地，当用户将本程序与 AVG.js，或更具体的，avg-core 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。关于 AVG.js 的详情，请访问：https://github.com/avgjs/avg-core
 * 
 * English Translation:
 * 
 * This software uses a dual license, you can choose the appropriate license under the following terms:
 * 
 * - GNU Affero General Public License 3.0 is available for all purposes.
 * - Apache License 2.0 is available for non-commercial use. The definition of non-commercial use is consistent with the relevant entries in Creative Commons BY-NC 4.0 International.
 * - In particular, Apache License 2.0 is available for users who use this software with AVG.js, or more specifically, the avg-core library, whether for commercial or non-commercial use. For more details about AVG.js, see: https://github.com/avgjs/avg-core
 */

const DIANHAO = exports.DIANHAO = `。，、．：；！‼？⁇`;
const BIAOHAO = exports.BIAOHAO = `「」『』“”‘’（）【】〖〗〔〕［］｛｝⸺—…●•–～~～～·﹏《》〈〉＿/／`;
const BIAODIAN = exports.BIAODIAN = `${BIAOHAO}${DIANHAO} `;
const BIAODIANVALIDATEND = exports.BIAODIANVALIDATEND = `。，、．：；！‼？⁇」』”’）】〗〕］｝》〉 `;
const BIAODIANVALIDATSTART = exports.BIAODIANVALIDATSTART = `「『“‘（【〖〔［｛《〈 `;
const INCOMPRESSIBLE = exports.INCOMPRESSIBLE = '‼⁇⸺—';
const COMPRESSLEFT = exports.COMPRESSLEFT = '「『“‘（【〖〔［｛《〈';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCJK = isCJK;
/**
 * @author      Icemic Jia <bingfeng.web@gmail.com>
 * @copyright   2017 Icemic Jia
 * @link        https://github.com/Icemic/huozi.js
 * @license     https://github.com/Icemic/huozi.js/blob/master/LICENSE
 *
 * 本程序根据使用目的采用双授权的方式，你可以根据如下条款选择适合你的许可协议：
 * 
 * - 对于全部的使用目的，均可选择 GNU Affero General Public License 3.0。
 * - 对于非商业目的的使用，可选择 Apache License 2.0。此处非商业目的的定义和区分方法与 Creative Commons BY-NC 4.0 International 中的相关条目一致。
 * - 特别地，当用户将本程序与 AVG.js，或更具体的，avg-core 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。关于 AVG.js 的详情，请访问：https://github.com/avgjs/avg-core
 * 
 * English Translation:
 * 
 * This software uses a dual license, you can choose the appropriate license under the following terms:
 * 
 * - GNU Affero General Public License 3.0 is available for all purposes.
 * - Apache License 2.0 is available for non-commercial use. The definition of non-commercial use is consistent with the relevant entries in Creative Commons BY-NC 4.0 International.
 * - In particular, Apache License 2.0 is available for users who use this software with AVG.js, or more specifically, the avg-core library, whether for commercial or non-commercial use. For more details about AVG.js, see: https://github.com/avgjs/avg-core
 */

/**
 * reference:
 *  https://en.wikipedia.org/wiki/CJK_Unified_Ideographs
 *  https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation
 *  http://jrgraphix.net/r/Unicode/
 */

const list = ['\\u1100-\\u11FF', // Hangul Jamo
'\\u2E80-\\u2EFF', // CJK Radicals Supplement
'\\u2F00-\\u2FDF', // Kangxi Radicals
'\\u2FF0-\\u2FFF', // Ideographic Description Characters
'\\u3000-\\u303F', // CJK Symbols and Punctuation
'\\u3040-\\u309F', // Hiragana
'\\u30A0-\\u30FF', // Katakana
'\\u3100-\\u312F', // Bopomofo
'\\u3130-\\u318F', // Hangul Compatibility Jamo
'\\u3190-\\u319F', // Kanbun 不是很懂你们日本人的“汉”文……
'\\u31A0-\\u31BF', // Bopomofo Extended
'\\u31F0-\\u31FF', // Katakana Phonetic Extensions
'\\u3200-\\u32FF', // Enclosed CJK Letters and Months
'\\u3300-\\u33FF', // CJK Compatibility
//  '\\u3300-\\u33FF\\uFE30-\\uFE4F\\uF900-\\uFAFF\\u{2F800}-\\u{2FA1F}', // Other CJK Ideographs in Unicode, not Unified
'\\u3400-\\u4DBF', // Ext-A
'\\u4DC0-\\u4DFF', // Yijing Hexagram Symbols, 为了收集这些字符我已经累到怀疑人生了，谁来给我算一卦……
'\\u4E00-\\u9FFF', // CJK
'\\uAC00-\\uD7AF', // Hangul Syllables
'\\uF900-\\uFAFF', // CJK Compatibility Ideograph
'\\uFE30-\\uFE4F', // CJK Compatibility Forms, 竖排样式的横排字符……
'\\uFF00-\\uFFEF', // Halfwidth and Fullwidth Forms
'\\u{1D300}-\\u{1D35F}', // Tai Xuan Jing Symbols,
'\\u{20000}-\\u{2A6DF}', // Ext-B
'\\u{2A700}-\\u{2B73F}', // Ext-C
'\\u{2B740}-\\u{2B81F}', // Ext-D
'\\u{2B820}-\\u{2CEAF}', // Ext-E
'\\u{2CEB0}-\\u{2EBEF}', // Ext-F
'\\u{2F800}-\\u{2FA1F}'];

let regex;

try {
  regex = new RegExp(`[${list.join('')}]`, 'u');
} catch (e) {
  regex = new RegExp(`[${list.slice(0, 21).join('')}]`);
}

function isCJK(text) {
  return regex.test(text);
}

// old version:
// /[\u3000-\u3003\u3005-\u303F；？，．：！]|[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/.test(text)

/***/ })
/******/ ]);
});