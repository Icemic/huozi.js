import huozi from '../index';
import { beiying, mixed, lorem } from './text';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

/**
 * Input:
 * {
 *   fontSize: 26,
 *   character: ''
 * }
 */
const textSequence = mixed.trim().replace('\n', '').split('').map(value => {
    return {
      fontSize: 26,
      character: value
    }
  });


const layoutSequence = huozi(textSequence);

console.log(layoutSequence);

context.clearRect(0, 0, 800, 600);
context.strokeStyle = '#999';

for (const char of layoutSequence) {
  context.font = `${char.fontSize}px sans-serif`;
  context.textBaseline = 'hanging';
  context.fillText(char.character, char.x, char.y);

  // context.strokeRect(char.x, char.y, char.width, char.height);
}
