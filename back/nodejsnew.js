터미널에 npm init -y

npm install express --save


main.js에는
---------------------
functiin sayHello(name) {
    console.log('Hello ' + name);
};

sayHello('groomi');
sayHello('kimgroomi');







function showLogMessage (msg) {
    console.log('------------------');
    console.log(`로그 메시지는 : ${msg}`);
    console.log('------------------');
};

module.exports.showLogMessage = showLogMessage
