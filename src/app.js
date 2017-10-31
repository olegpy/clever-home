console.log('test');
let [x,y] = [1,2];
console.log(x+y);
let af = () => console.log('arrow func');
let name = 'Tom';
let age = 24;
let res = `Name: ${name}, year ${age}`;
console.log(res);

function sum(x,y,callback){
    let data, error;

    if (typeof x === 'number' && typeof y === 'number'){
        data = x + y;
    } else {
        error = new Error("invalid parameter");
    }

    setTimeout(() => callback(error, data), 4);
}

console.log('app start');

sum(1,2, (error, data) => {
    if (error){
        throw error;
    }
    console.log(data);
});
const http = require("http");


http.createServer((request, response)=>{
    // console.log(`Метод HTTP: ${request.method}`);
    // console.log(`Строк запроса: ${request.url}`);
    // console.log(`Версия HTTP: ${request.httpVersion}`);
    // console.log("Все заголовки:");
    // console.log(request.headers);
    response.end("Hello World!");
}).listen(3000);
console.log("Сервер запущен");

const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('greeting', ()=> console.log('hello vasy'));
myEmitter.on('greet', ()=> console.log('hello petya'));

myEmitter.emit('greet');