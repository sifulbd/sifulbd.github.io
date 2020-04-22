
// function textCapitalize(s) {
//     return s[0].toUpperCase() + s.slice(1);
// }

let http = new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts) {
//     if(err){
//         console.log(err);
//     }else {
//         // console.log(posts);
//         let output = '';
//         posts.forEach(function(post){
//             const postTitle = textCapitalize(post.title);
//             const postBody = textCapitalize(post.body);
//             output += `<li> <h3>${postTitle}</h3> <p>${postBody} </p></li>`
//         })

//         document.getElementById('output').innerHTML = output;
//     }
// });



//Create Data

const data = {
    title: 'this is title',
    body: 'this is body'
};

//create Post

// http.post('https://jsonplaceholder.typicode.com/posts', data , function(err, post){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

// update post
// http.post('https://jsonplaceholder.typicode.com/posts/1', data , function(err, post){
//     if(err){
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

// delete
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else {
        console.log(response);
    }
});