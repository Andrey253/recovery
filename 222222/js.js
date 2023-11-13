console.log('log from js');

function e(){
    var r=document.getElementById('123')
    console.log(r.innerHTML)
    r.innerHTML=r.innerHTML+r.innerHTML+'<h1 id="h12">Привет<h1 id="h12">Привет</h1</h1>'
    console.log(r.innerHTML)
}