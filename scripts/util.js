function $id(id) { return document.getElementById(id) }
function rand0(a) { return a * (Math.random() - 0.5) }

var L1 = $id('L1'), L2 = $id('L2')
var R1 = L1.getContext('2d'), R2 = L2.getContext('2d')

R1.translate(0.5 * 900 + 0.5, 0.5 * 600 + 0.5)
R2.translate(0.5 * 900 + 0.5, 0.5 * 600 + 0.5)
