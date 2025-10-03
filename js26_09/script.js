const exit = document.getElementById("exit");

let a,b,c,d;

a=10;
b=2;
a+=b;
b-=5;

exit.innerHTML = `a=${a}`;
exit.innerHTML += `<br>b=${b}`;

c=11;
d=6;
c%=d;
d+=a;

exit.innerHTML += `<br>c=${c}`;
exit.innerHTML += `<br>d=${d}`;

let i = 10;

i++;
i++;
++i;
++i;
exit.innerHTML+=`<br>i=${i}`;
i--;
i--;
--i;
exit.innerHTML+=`<br>i=${i}`


a=10;
b="10";

exit.innerHTML += `<br>a==b ${a==b}`;
exit.innerHTML += `<br>a===b ${a===b}`;
exit.innerHTML += `<br>a!=b ${a!=b}`;
exit.innerHTML += `<br>a!==b ${a!==b}`;

const countdown = document.getElementById("countdown");

let count = 0;

countdown.innerHTML = 0;

function increaseCount(){
    count++;
    countdown.innerHTML = count;
}

function decreaseCount(){
    count--;
    countdown.innerHTML = count;
}