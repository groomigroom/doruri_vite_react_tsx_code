터미널에 npm init -y

npm install express --save


main.js에는
---------------------
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




function showLogMessage (msg) {
    console.log('------------------');
    console.log(`로그 메시지는 : ${msg}`);
    console.log('------------------');
};

module.exports.showLogMessage = showLogMessage
