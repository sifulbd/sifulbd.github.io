document.getElementById('btn').addEventListener('click', loadJokes);

function loadJokes() {
    const xhr = new XMLHttpRequest();
    // jokes number
    const number = document.getElementById('number').value;

    // api url
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}?firstName=John&lastName=Doe`, true);

    xhr.onload = function(){
        // jsont o string
        const responseTxt = JSON.parse(this.responseText);
        if(xhr.status === 200) {
            // initailize output
            console.log(responseTxt);
            let output = '';
            if(responseTxt.type === 'success') {
                responseTxt.value.forEach(function(joke){
                    output += `<li> ${joke.joke} </li>`;
                });
            }else {
                output = `Error ${responseTxt}`;
            }
            document.getElementById('output').innerHTML = output;         
        }
    }

    xhr.send();

    document.getElementById('number').value = '';   


}