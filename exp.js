let kzt = document.getElementById("kzt"),
    usd = document.getElementById("usd");
   kzt.addEventListener('input', ()=>{
    let request = new XMLHttpRequest();
    request.open('GET', '/ex.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            usd.value = kzt.value/data.usd;
            console.log(data.usd);
        }else{
            usd.value = "errore";
        }
    });
   });
       
