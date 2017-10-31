'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('test');
var x = 1,
    y = 2;

console.log(x + y);
var af = function af() {
    return console.log('arrow func');
};
var name = 'Tom';
var age = 24;
var res = 'Name: ' + name + ', year ' + age;
console.log(res);

function sum(x, y, callback) {
    var data = void 0,
        error = void 0;

    if (typeof x === 'number' && typeof y === 'number') {
        data = x + y;
    } else {
        error = new Error("invalid parameter");
    }

    setTimeout(function () {
        return callback(error, data);
    }, 4);
}

console.log('app start');

sum(1, 2, function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
});
var http = require("http");

http.createServer(function (request, response) {
    // console.log(`Метод HTTP: ${request.method}`);
    // console.log(`Строк запроса: ${request.url}`);
    // console.log(`Версия HTTP: ${request.httpVersion}`);
    // console.log("Все заголовки:");
    // console.log(request.headers);
    response.end("Hello World!");
}).listen(3000);
console.log("Сервер запущен");

var EventEmitter = require('events');

var MyEmitter = function (_EventEmitter) {
    _inherits(MyEmitter, _EventEmitter);

    function MyEmitter() {
        _classCallCheck(this, MyEmitter);

        return _possibleConstructorReturn(this, (MyEmitter.__proto__ || Object.getPrototypeOf(MyEmitter)).apply(this, arguments));
    }

    return MyEmitter;
}(EventEmitter);

var myEmitter = new MyEmitter();

myEmitter.on('greeting', function () {
    return console.log('hello vasy');
});
myEmitter.on('greet', function () {
    return console.log('hello petya');
});

myEmitter.emit('greet');