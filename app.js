function Book(title,author,snbs) {
    this.title = title;
    this.author = author;
    this.snbs = snbs;
}

function UI() {};

UI.prototype.addbooktoui = function(book) {
    const bookList = document.getElementById('book-list');
    const trow = document.createElement('tr');
    trow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.snbs}</td>
        <td><a href="#">x</a></td>
    `;
    trow.className = "trow";
    bookList.appendChild(trow);    
}

UI.prototype.clearfiled = function() {
    document.getElementById('book-name').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-snbs').value = '';
}

UI.prototype.deleteBook = function() {

}

document.getElementById('book-form').addEventListener('submit', function (e){
    const bookName = document.getElementById('book-name').value,
        bookAuthor = document.getElementById('book-author').value,
        booksnbs = document.getElementById('book-snbs').value

    const book = new Book(bookName, bookAuthor, booksnbs);    
    const ui = new UI();
    if(bookName === '' || bookAuthor === '' || booksnbs === '') {
        alert('check');
    }else {
        ui.addbooktoui(book);
        ui.clearfiled(book);
    }

    ui.deleteBook(book);

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
    if(e.target.parentElement.parentElement.className === 'trow') {
        e.target.parentElement.parentElement.remove();
        // console.log(e.target.parentElement.parentElement.className);
    }
})