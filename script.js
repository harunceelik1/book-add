const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
let button = document.querySelector("#submit");

button.addEventListener("click",()=>{
    uyari();
})

class Ekle{
    btnEkle(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>${book.title.value}</td>
            <td>${book.author.value}</td>
            <td>${book.isbn.value}</td>
            <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row);  
    }
}
let ekle= new Ekle();

class Book{
    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}
const book = new Book(title,author,isbn);


var clearFields =()=>{
    document.getElementById("title").value='';
    document.getElementById("author").value='';
    document.getElementById("isbn").value='';
}
var uyari =()=>{
    if(title.value === "" || author.value ==="" || isbn.value ==="")
    {   
        alert('Lütfen kitap bilgilerini doldurunuz.', 'error');
    }
    else
    {
        ekle.btnEkle(book);
        clearFields();     
    }
}

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
} 
document.querySelector("#book-form").addEventListener("click",btnDel);
function btnDel(e){
    if(e.target.className === 'delete'){

        console.log(e.target);
        target.parentElement.parentElement.remove();
    }
  
    e.preventDefault(); 
}
