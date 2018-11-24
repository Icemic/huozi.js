<h1 align="center" style="    font-family: STSong, SimSun, serif; border: none; font-size: 48px; margin-bottom: 0;">
  <ruby>活<rt>huó</rt>字<rt>zì</rt></ruby>
</h1>
<h3 align="center" style="font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif; font-style: normal; margin-top: 0; font-weight: 400;">
  <ruby>一个简单的中日韩文字排印引擎，为游戏富文本特别设计。<rt>A simple typography engine for CJK languages, especially designed for game rich-text.</rt></ruby>
</h3>

<hr>

<p align="center">
<img src="https://img.shields.io/npm/v/huozi.svg?style=flat-square" alt="" />
<img src="https://img.shields.io/badge/ES-2015%2B-yellow.svg?style=flat-square" alt="" />
<img src="https://img.shields.io/github/issues/icemic/huozi.js.svg?style=flat-square" alt="" />
<a href="#许可"><img src="https://img.shields.io/badge/license-AGPL--3.0%20or%20Apache--2.0-blue.svg?style=flat-square" alt="" /></a>
<a href="https://icemic.github.io/huozi.js/"><img src="https://img.shields.io/badge/demo-online-ff6600.svg?style=flat-square" alt="" /></a>
</p> 

## 总览

活字是 AVG.js 的模块之一，为剧情游戏文字排版设计，兼顾中西混排和纯西文排版。

**排版规则**

- 方块字优先
- 横排且纵横对齐
- 避首尾
  - 行末最多悬挂两个标点（共占 1em 宽）
  - 行末标点超过两个的，避行首规则失效
  - 在前两条规则的基础上，行末标点自第一个需避行尾的标点前断开，进入下一行
- 行内标点挤压：除破折号等不可挤压的标点外，所有标点均会两两合并为一个em宽度
- 遇非方块字（英文字母、数字等），按照西文排版方式进行排版。
- 非方块字两端以补不定长空格的方式凑齐 em 的整数倍宽度，以保证后续内容纵横对齐。

## 演示

https://icemic.github.io/huozi.js/

## 使用

```shell
npm install huozi
```

```js
import huozi from 'huozi';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const textSequence = '需要排版的文字内容'.replace(/\r\n/g, '\n').split('').map(value => {
    return {
      fontSize: 26,
      character: value
    }
  });

const layoutSequence = huozi(textSequence);

context.clearRect(0, 0, 800, 600);
context.strokeStyle = '#999';

for (const char of layoutSequence) {
  context.font = `${char.fontSize}px sans-serif`;
  context.textBaseline = 'hanging';
  context.fillText(char.character, char.x, char.y);
  context.strokeRect(char.x, char.y, char.width, char.height);
}
```

输入格式：

```js
[{
  character: String,  // 单个字符
  fontSize: Number    // 该字符的字号
}]
```

输出格式：

```js
[{
  character: String,
  fontSize: Number,
  x: Number,          // 绝对坐标
  y: Number,          // 绝对坐标
  width: Number,      // 字符宽度
  height: Number      // 字符高度
}]
```

参数详解：

```js
function huozi(textSequence, layoutOptions = {
  // 指定字体，支持任何合法的 CSS font-family 值（包括使用 @font-face 导入的），默认为黑体/无衬线字体
  fontFamily: 'sans-serif',
  // 排版网格宽度（即一个em多宽，与 textSequence 中的 fontSize 不同）
  gridSize: 26,
  // 每行字数
  column: 25,
  // 行数
  row: Infinity,
  // 字距（仅 CJK 文字）
  xInterval: 0,
  // 行距
  yInterval: 12,
  // 字符间距（仅西文文字）
  letterSpacing: 0,
  // 开启行内标点压缩
  inlineCompression: true,
  // 强制纵横对齐
  forceGridAlignment: true,
  // 西文优先
  westernCharacterFirst: false,
  // 若纵横对齐导致无空格间隔，则强制在两边加入至少 1/4em 宽空格
  forceSpaceBetweenCJKAndWestern: false,
  // 是否进行左全角引号的位置修正
  fixLeftQuote: true
})
```

## 参与项目

欢迎任何 Issue 和 Pull Request！

## 许可

Copyright 2017-present Icemic Jia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
