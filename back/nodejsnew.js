functiin sayHello(name) {
    console.log('Hello ' + name);
};

sayHello('groomi');
sayHello('kimgroomi');

const v = 10;

if (v > 5) {
    console.log('큰 숫자다');
}
else {
    console.log('작은 숫자다');
}

setInterval(() => {
    console.log('인터벌 실험');
}, 3000);

setTimeout(() => {
    console.log('타임 실험');
}, 3000);