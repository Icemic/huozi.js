import huozi from '../index';
import { beiying, mixed, lorem, emoji } from './text';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const devicePixelRatio = window.devicePixelRatio;

canvas.width = canvas.width * devicePixelRatio;
canvas.height = canvas.height * devicePixelRatio;

const regexAstralSymbols = /([\uD800-\uDBFF][\uDC00-\uDFFF])/;
const specialForEmoji = ['\uFE0E', '\uFE0F', '\u200D', '\u{1F3FB}', '\u{1F3FC}', '\u{1F3FD}', '\u{1F3FE}', '\u{1F3FF}'];

function processEmoji(arr) {
  const retArr = [];
  let pendingChar = '';
  let lastIsSpecialForEmoji = false;
  for (const char of arr) {
    if (pendingChar && specialForEmoji.includes(char)) {
      lastIsSpecialForEmoji = '\u200D' === char;
      pendingChar += char;
    } else if (pendingChar && lastIsSpecialForEmoji) {
      lastIsSpecialForEmoji = false;
      pendingChar += char;
    } else if (pendingChar) {
      retArr.push(pendingChar);
      retArr.push(char);
      pendingChar = '';
    } else if (specialForEmoji.includes(char)) {
      pendingChar = retArr.pop() + char;
    } else if (regexAstralSymbols.test(char)) {
      pendingChar = char;
    } else {
      retArr.push(char);
    }
  }

  return retArr;
}

function drawText(text, options) {
  const textSequence = processEmoji(text.replace(/\r\n/g, '\n').trim()).map(value => {
    return {
      fontSize: +options.charFontSize || 18,
      character: value
    }
  });

  const layoutSequence = huozi(textSequence, {
    gridSize: +options.fontSize || 18,
    column: +options.column || 35,
    inlineCompression: options.compress === undefined ? options.compress : true,
    fixLeftQuote: (navigator.language === 'zh-TW') ? false : undefined
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
    textBox.textContent = beiying;
  } else if (num === 2) {
    textBox.textContent = lorem;
  } else if (num === 3) {
    textBox.textContent = mixed;
  } else {
    textBox.textContent = emoji;
  }
  handler();
}

window.fillTextArea = fillTextArea;

fillTextArea(1);