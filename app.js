var arr = [100, 200, 1, 20, 50];
const svg = document.getElementById("svg");
const svgCont = document.getElementById("svgCont");
const rc = rough.svg(svg);
const heightConst = svgCont.offsetHeight;
const widthConst = svgCont.offsetWidth;
console.log(heightConst);
var config = {
  gap: 10,
  currentWidth: 10,
  startHeight: 10,
  blockWidth: 200,
};
let border = rc.rectangle(
  config.gap,
  config.gap,
  widthConst - 2 * config.gap,
  heightConst - 2 * config.gap,
  { roughness: 0, fill: "transparent" }
); // x, y, width, height
svg.appendChild(border);
var filteredArr = arr.filter((data) => data > 0 && data <= 100);
arr.forEach((num) => {
  if (num <= 100 && num > 0) {
    var tempheight = heightConst - 2 * config.gap;
    var blockHeight = tempheight - (num * tempheight) / 100 + config.gap;
    var calcHeight = heightConst - blockHeight - config.gap;
    var style = { roughness: 0 };
    if (Math.max(...filteredArr) === num) {
      style = { roughness: 0, fill: "red" };
    } else if (Math.min(...filteredArr) === num) {
      style = { roughness: 0, fill: "green" };
    }
    let block = rc.rectangle(
      config.currentWidth,
      blockHeight,
      config.blockWidth,
      calcHeight,
      style
    );
    svg.appendChild(block);
  }
  config.currentWidth += config.blockWidth + config.gap;
});
