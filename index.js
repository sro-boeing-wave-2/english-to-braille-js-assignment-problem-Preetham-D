/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const mapping = new Map(englishToBrailleLiteralSet);
function convert() {
  const slang = document.getElementById('sourceLangText').value;
  let out = '';
  out += slang.split('').map(c => mapping.get(c)).join('');
  document.getElementById('targetLangText').innerHTML = out;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
