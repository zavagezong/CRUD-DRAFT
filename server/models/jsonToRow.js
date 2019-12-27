const jsStringEscape = require("js-string-escape");
function jsonToRow(json) {
  return json
    .map(function(el) {
      const joinedStr = Object.values(el)
        .map(str => {
          if (typeof str === "string") {
            return `'${jsStringEscape(str)}'`;
          }
          return `${str}`;
        })
        .join();
      return `(${joinedStr})`;
    })
    .join(`,\n`);
}

module.exports = jsonToRow;
