const requestURL = 'ex.json';

function sendRequest(method, url, body = null){
    const headers = {
        'Content-Type': 'Application/json'
    };
   return fetch(url, {
       method: method,
       body: JSON.stringify(body),
       headers: headers
   }).then(response => {
    return response.json();
   });
    
   
}const body = {
    name: 'Madi',
    age: 20
};
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// sendRequest('POST', requestURL, body)
// .then(data => console.log(data))
// .catch(err => console.log(err));