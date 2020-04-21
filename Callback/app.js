const posts = [
    {
        title: 'This is a title one',
        body: 'This is a body one'
    },
    {
        title: 'This is a title two',
        body: 'This is a body two'
    },
    {
        title: 'This is a title Three',
        body: 'This is a body Three'
    },
];

function createpost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 1000);
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>Title: ${post.title}</li>`;         
        });
        document.querySelector('#output').innerHTML = output;
    }, 2000)

}
createpost({title: 'this is title four', body: 'this is body four'}, getPost);
