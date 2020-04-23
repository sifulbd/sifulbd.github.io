document.getElementById('btn1').addEventListener('click', loadData);
document.getElementById('btn2').addEventListener('click', loadJsonData);
document.getElementById('btn3').addEventListener('click', loadApiData);

function loadData(e) {

    fetch('data.txt')
        .then(function(res) {
           return res.text();
        })
        .then(function(data) {
            document.querySelector('#output').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        })


    e.preventDefault();
}


function loadJsonData(e) {
    fetch('data.json')
        .then(function(res) {
           return res.json();
        })
        .then(function(data) {
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title} , ${post.body}</li> `
            })
            document.querySelector('#output').innerHTML = output;
        })        
        .catch(function(err) {
            console.log(err);
        })



    e.preventDefault();
}


//GET from api
function loadApiData(e) {
    fetch('https://api.github.com/users')
        .then(function(res) {
           return res.json();
        })
        .then(function(data) {
            let output = '';
            console.log(data);
            data.forEach(function(post) {
                output += `<li>Username: ${post.login} , GitHub URL: <a href="${post.html_url}">${post.id}</a></li> `
            })
            document.querySelector('#output').innerHTML = output;
        })        
        .catch(function(err) {
            console.log(err);
        })



    e.preventDefault();
}