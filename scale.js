const $canvas = $("canvas");
const ctx = $canvas.get(0).getContext("2d");

const scal = ($(window).width() - 200) /  $canvas.outerWidth();

ctx.scale(scal, scal);
