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