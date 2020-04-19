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

UI.prototype.deleteBook = function(target) {
    if(target.parentElement.parentElement.className === 'trow') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(message, classN) {
    const alertDiv = document.createElement('div');
    const parentDiv = document.querySelector('.all-book-list');
    const form = document.querySelector('.book-list-form');
    
    alertDiv.className = `alert ${classN}`;

    alertDiv.appendChild(document.createTextNode(message));
    parentDiv.insertBefore(alertDiv, form);
    setTimeout(
        function hideAlert() {           
            document.querySelector('.alert').remove();
        }, 3000
    )
}


document.getElementById('book-form').addEventListener('submit', function (e){
    const bookName = document.getElementById('book-name').value,
        bookAuthor = document.getElementById('book-author').value,
        booksnbs = document.getElementById('book-snbs').value

    const book = new Book(bookName, bookAuthor, booksnbs);    
    const ui = new UI();
    if(bookName === '' || bookAuthor === '' || booksnbs === '') {
        ui.showAlert('Check all form fields', 'alert-danger');
    }else {
        ui.addbooktoui(book);
        ui.showAlert('Book added', 'alert-success');
        ui.clearfiled(book);
    }    

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
})