document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function() {
        console.log('REadyState', xhr.readyState);
    }

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1><a href="">${this.responseText}</a></h1>`
        }
    }

    xhr.send();
}
