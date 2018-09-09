const path = require('path');
const render = require('../render');
const getWidth = require('../../getWidth');

module.exports = function (config) {
  const {
    key = 'key',
    value = 'value',
    keyBgColor = '01D48F',
    valueBgColor = '555',
    keyColor = 'FFF',
    valueColor = 'FFF',
  } = config;

  let size = config.size || 11;

  size = parseInt(size, 10);

  const keyWidth = getWidth(key, size);
  const valueWidth = getWidth(value, size);

  return render(
    path.resolve(__dirname, './tpl.xtpl'),
    {
      size,
      keyWidth,
      valueWidth,
      keyBgColor,
      valueBgColor,
      key,
      value,
      keyColor,
      valueColor,
    },
  );
}