터미널에 npm init -y

npm install express --save








function showLogMessage (msg) {
    console.log('------------------');
    console.log(`로그 메시지는 : ${msg}`);
    console.log('------------------');
};

module.exports.showLogMessage = showLogMessage
