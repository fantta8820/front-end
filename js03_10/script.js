let a, b, res, isTernary;
let exit = document.getElementById("exit");
a = 9;
b = 10;
res = a < b;
isTernary = true;

exit.innerHTML = `a = ${a}, b = ${b} <br>`;
exit.innerHTML += `a < b = ${a < b} <br>`;
exit.innerHTML += `!(a < b) = ${!(a < b)} <br>`;
exit.innerHTML += `res = ${typeof res} <br>`;

exit.innerHTML += isTernary ? "It's ternary" : "It isn't ternary";