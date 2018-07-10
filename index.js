/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

function convert() {
  const slang = document.getElementById('sourceLangText').value;
  const mapping = new Map(englishToBrailleLiteralSet);
  // console.log(mapping);
  let out = '';
  let i;
  for (i = 0; i < slang.length; i += 1) {
    out += mapping.get(slang[i]);
  }
  // console.log(out);
  document.getElementById('targetLangText').innerHTML = out;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convert);
