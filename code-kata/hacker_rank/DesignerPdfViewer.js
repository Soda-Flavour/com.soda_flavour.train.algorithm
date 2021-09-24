function designerPdfViewer(h, word) {
  let letter = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let wordArr = word.split('');
  let max = 0;
  wordArr.forEach((v) => {
    let idx = letter.indexOf(v);
    if (h[idx] > max) max = h[idx];
  });

  return max * wordArr.length;
}
