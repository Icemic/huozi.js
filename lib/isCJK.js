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

const list = [
  '\\u1100-\\u11FF',  // Hangul Jamo
  '\\u2E80-\\u2EFF',  // CJK Radicals Supplement
  '\\u2F00-\\u2FDF',  // Kangxi Radicals
  '\\u2FF0-\\u2FFF',  // Ideographic Description Characters
  '\\u3000-\\u303F',  // CJK Symbols and Punctuation
  '\\u3040-\\u309F',  // Hiragana
  '\\u30A0-\\u30FF',  // Katakana
  '\\u3100-\\u312F',  // Bopomofo
  '\\u3130-\\u318F',  // Hangul Compatibility Jamo
  '\\u3190-\\u319F',  // Kanbun 不是很懂你们日本人的“汉”文……
  '\\u31A0-\\u31BF',  // Bopomofo Extended
  '\\u31F0-\\u31FF',  // Katakana Phonetic Extensions
  '\\u3200-\\u32FF',  // Enclosed CJK Letters and Months
  '\\u3300-\\u33FF',  // CJK Compatibility
  //  '\\u3300-\\u33FF\\uFE30-\\uFE4F\\uF900-\\uFAFF\\u{2F800}-\\u{2FA1F}', // Other CJK Ideographs in Unicode, not Unified
  '\\u3400-\\u4DBF',  // Ext-A
  '\\u4DC0-\\u4DFF',  // Yijing Hexagram Symbols, 为了收集这些字符我已经累到怀疑人生了，谁来给我算一卦……
  '\\u4E00-\\u9FFF',  // CJK
  '\\uAC00-\\uD7AF',  // Hangul Syllables
  '\\uF900-\\uFAFF',  // CJK Compatibility Ideograph
  '\\uFE30-\\uFE4F',  // CJK Compatibility Forms, 竖排样式的横排字符……
  '\\uFF00-\\uFFEF',  // Halfwidth and Fullwidth Forms
  '\\u{1D300}-\\u{1D35F}',  // Tai Xuan Jing Symbols,
  '\\u{20000}-\\u{2A6DF}',  // Ext-B
  '\\u{2A700}-\\u{2B73F}',  // Ext-C
  '\\u{2B740}-\\u{2B81F}',  // Ext-D
  '\\u{2B820}-\\u{2CEAF}',  // Ext-E
  '\\u{2CEB0}-\\u{2EBEF}',  // Ext-F
  '\\u{2F800}-\\u{2FA1F}',  // CJK Compatibility Ideographs Supplement, 补充包你好，补充包再见
];

let regex;

try {
  regex = new RegExp(`[${list.join('')}]`, 'u');
} catch (e) {
  regex = new RegExp(`[${list.slice(0, 21).join('')}]`);
}

export function isCJK(text) {
  return regex.test(text);
}

// old version:
// /[\u3000-\u3003\u3005-\u303F；？，．：！]|[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/.test(text)