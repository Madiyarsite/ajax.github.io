let request = new XMLHttpRequest();
request.open('GET', './ex.json');

request.responseType = 'json';
request.setRequestHeader('Content-Type', 'application/json, charset=utf-8');

let data = JSON.parse(request.response);
request.send();

console.log(data.name);
