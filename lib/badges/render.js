const xtpl = require('xtpl');

module.exports = function (filePath = '', data = {}) {
  return new Promise((resolve, reject) => {
    xtpl.renderFile(
      filePath,
      data,
      (error, content) => {
        if (error) {
          reject(error);
        } else {
          resolve(content);
        }
      }
    );
  });
};