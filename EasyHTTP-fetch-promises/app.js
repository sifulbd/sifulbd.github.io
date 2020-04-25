const http = new EasyHttp;

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then( data => console.log(data))
//     .catch( err => console.log(err));

const data = [
    {
        name: 'John Doe 1',
        username: 'jdone',
        email: 'email@gmail.com'
    },
    {
        name: 'John Doe 2',
        username: 'jdone2',
        email: 'email@g2mail.com' 
    },
    {
        name: 'John Doe 2',
        username: 'jdone2',
        email: 'email@g2mail.com' 
    }
]

// Create post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then( data => console.log(data))
//     .catch( err => console.log(err));

//update data
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then( data => console.log(data))
//     .catch( err => console.log(err));

//delete data
 http.delete('https://jsonplaceholder.typicode.com/users/1')
     .then( data => console.log("post deleted"))
     .catch( err => console.log(err));


