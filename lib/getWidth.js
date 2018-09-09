
const LRU = require('ylru');
const PDFDocument = require('pdfkit');
const path = require('path');

const doc = new PDFDocument({ size: 'A4', layout: 'landscape' })
doc.font(path.resolve(__dirname, 'Verdana.ttf'));
const cache = new LRU(1024);

function getWidth(str, size) {
  doc.fontSize(size);
  let width = cache.get(str);
  if (width) {
    return width;
  }

  width = doc.widthOfString(str);
  cache.set(str, width);
  return width;
}

module.exports = getWidth;