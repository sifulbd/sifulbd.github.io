const data = [
    {
        title: 'This is title One',
        body: 'This is body One'
    }, 
    {
        title: 'This is title Two',
        body: 'This is body Two'
    }, 
    {
        title: 'This is title Three',
        body: 'This is body Three'
    }
];

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            data.push(post);
            const error = false;
            if(!error) {
                resolve();
            }else {
                reject("Somthing went wrong!!");
            }
        }, 3000);
    })
};

function getData(){
    setTimeout(function() {
        let output = '';
        data.forEach(function(post) {
           output = output + `<li>${post.title} </li>`;
        });
        document.querySelector('#output').innerHTML = output;
    }, 2000)
}

createPost({
    title: 'This is title Four',
    body: 'This is body Four'
}).then(getData)
.catch(function(err){
    document.querySelector('#output').innerHTML = err;
})
