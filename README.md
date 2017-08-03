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
<a href="#License"><img src="https://img.shields.io/badge/license-AGPL--3.0%20or%20Apache--2.0-blue.svg?style=flat-square" alt="" /></a>
<a href="#License"><img src="https://img.shields.io/badge/demo-online-ff6600.svg?style=flat-square" alt="" /></a>
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
- 遇非方块字（英文字母、数字等），按照西文排版方式进行排版。
- 非方块字两端以补不定长空格的方式凑齐 em 的整数倍宽度，以保证后续内容纵横对齐。

## 演示



## 使用

```shell
npm install huozi
```

```js
import huozi from 'huozi';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const textSequence = '需要排版的文字内容'.split('').map(value => {
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

## 参与项目

欢迎任何 Issue 和 Pull Request！

## 许可

本程序根据使用目的采用双授权的方式，你可以根据如下条款选择适合你的许可协议：

- 对于全部的使用目的，均可选择 GNU Affero General Public License 3.0。
- 对于非商业目的的使用，可选择 Apache License 2.0。此处非商业目的的定义和区分方法与 Creative Commons BY-NC 4.0 International 中的相关条目一致。
- 特别地，当用户将本程序与 AVG.js，或更具体地，avg-core 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。关于 AVG.js 的详情，请访问：https://github.com/avgjs/avg-core
