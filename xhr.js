const requestURL = 'ex.json';

function sendRequest(method, url, body = null){
    return new Promise((resolve, reject)=>{
 const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () =>{
        const datan = JSON.parse(xhr.response);
        if(xhr.status >= 400){
            reject(datan);
        }else{
            resolve(datan.name); 
            
        }
        
    
    };
    xhr.onerror = ()=>{
        reject(datan);  
    };
    });

   
}
// const body = {
//     name: 'Madi',
//     age: 20
// };
sendRequest('GET', requestURL)
.then(data => console.log(data.name))
.catch(err => console.log(err));