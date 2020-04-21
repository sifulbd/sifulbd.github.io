class Book {
    constructor(title, author, isbn) {
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}

class UI {
    addbooktoui(book) {
        const bookList = document.getElementById('book-list');
        const trow = document.createElement('tr');
        trow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#">x</a></td>
        `;
        trow.className = "trow";
        bookList.appendChild(trow);   
    }

    clearfiled() {
        document.getElementById('book-name').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('book-snbs').value = '';
    }
    deleteBook(target) {
        if(target.parentElement.parentElement.className === 'trow') {
            target.parentElement.parentElement.remove();
        }
    }
    showAlert(message, classN) {
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
}

class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI();
            ui.addbooktoui(book);            
        });
    }

    static addBooks(book) {
        const books = Store.getBooks();

        books.push(book);
         
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBooks(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index , 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// 
document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.getElementById('book-form').addEventListener('submit', function (e){
    const bookName = document.getElementById('book-name').value,
        bookAuthor = document.getElementById('book-author').value,
        booksnbs = document.getElementById('book-snbs').value

    const book = new Book(bookName, bookAuthor, booksnbs);    
    const ui = new UI();
    if(bookName === '' || bookAuthor === '' || booksnbs === '') {
        ui.showAlert('Check all form fields', 'alert-danger');
    } else {
        ui.addbooktoui(book);

        Store.addBooks(book);

        ui.showAlert('Book added', 'alert-success');
        ui.clearfiled(book);
    }    

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Deleted', 'alert-success');
    Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
})