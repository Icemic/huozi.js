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
 * - 特别地，当用户将本程序与 pixi-richtext (https://github.com/avgjs/pixi-richtext) 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。
 *
 * English Translation:
 * 
 * This software uses a dual license, you can choose the appropriate license under the following terms:
 * 
 * - GNU Affero General Public License 3.0 is available for all purposes.
 * - Apache License 2.0 is available for non-commercial use. The definition of non-commercial use is consistent with the relevant entries in Creative Commons BY-NC 4.0 International.
 * - In particular, Apache License 2.0 is available for users who use this software with AVG.js, or more specifically, the avg-core library, whether for commercial or non-commercial use. For more details about AVG.js, see: https://github.com/avgjs/avg-core
 * - In particular, Apache License 2.0 is available for users who use the pixi-richtext (https://github.com/avgjs/pixi-richtext) library, whether for commercial or non-commercial use.
 */

import { BIAOHAO, DIANHAO, BIAODIAN, BIAODIANVALIDATEND, BIAODIANVALIDATSTART, INCOMPRESSIBLE, COMPRESSLEFT } from './lib/code';
import { isCJK } from './lib/isCJK';
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

export default function huozi(textSequence, layoutOptions, onSequence) {

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
    if (FLAG_INLINE_COMPRESSION && lastIsPunctuation && !BIAODIAN.includes(character)) {
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

    if (!isCJK(character) && !/[\n “”‘’]/.test(character)) {
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
          return onSequence ? (onSequence(value) || value) : value;
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
      if (!BIAODIANVALIDATEND.includes(character) || BIAODIANVALIDATSTART.includes(character) || needForceWrap) {
        lineWrap();
      }
    }

    // 测量文字宽度
    context.font = `${charFontSize}px ${fontFamily}`;
    const width = context.measureText(character).width;

    // 在前后字号不一致的时候施行强制纵横对齐
    let offsetX = 0
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
      quoteFix += ((!lastIsPunctuation && character === '“') ? charFontSize / 2 : 0);
      // 一些平台上引号量取结果是<0.5em宽，但绘制时却是1em宽，导致错位。下面的代码修正这一问题
      // OS X 无需此修复（FLAG_STDWIDTH === true）
      if (character === '“' && !FLAG_STDWIDTH) {
        quoteFix += -charFontSize / 2;
      } else if (character === '“' && width === charFontSize) {
        quoteFix += -charFontSize / 2;
      }
    }

    const item = {
      ...char,
      x: currentX + quoteFix,
      y: currentY - offsetY,
      width: width,
      height: charFontSize
    };

    // 确定文字位置并添加到返回数组中
    layoutSequence.push(onSequence ? (onSequence(item) || item) : item);

    // 当正好在行首时，因两边空格全部加到一边，可能使得总宽度大于1em，此时应该删去多出的1em宽度
    let offsetX2 = offsetX * (doubleX ? 2 : 1);
    if (offsetX2 > gridSize) {
      offsetX2 -= gridSize;
      currentColumn -= 1;
    }

    currentX += offsetX2;

    // 判断是否进行压缩，并更新位置
    if (isLineEnd && BIAODIANVALIDATEND.includes(character) && !INCOMPRESSIBLE.includes(character)) {
      currentX += charFontSize / 2;
      currentColumn += 0.5;
      if (currentColumn % 1 !== 0.5) {
        needForceWrap = true;
      }
    } else if (FLAG_INLINE_COMPRESSION && BIAODIAN.includes(character) && !INCOMPRESSIBLE.includes(character)) {
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
        layoutSequence.push({
          ...char,
          x: currentX,
          y: currentY - offsetY
        });

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
      wordChar.push({ ...char, width: width, height: charFontSize });
    }

  }

  return [layoutSequence, currentX - 0.35 * gridSize, currentY, currentRow, isMultiLine];
}