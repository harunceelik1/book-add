const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
let button = document.querySelector("#submit");


button.addEventListener("click",(e)=>{
    uyari();
    e.preventDefault();
    
})

class Book{
    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}
const book = new Book(title,author,isbn);


var btnEkle= (book)=> {
            const list = document.getElementById('book-list');
            const row = document.createElement('tr');
            row.innerHTML=`
                <td>${book.title.value}</td>
                <td>${book.author.value}</td>
                <td>${book.isbn.value}</td>
                <td><i class="fa-solid fa-trash deneme"></i></td>
            `;
            list.appendChild(row);
        }


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
        btnEkle(book);
        clearFields();     
    }
}

document.getElementById("bookList").addEventListener("click",function(e){
    console.log(e.target.parentElement.parentElement)
    if(e.target.className ==="fa-solid fa-trash deneme"){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault(); 
});

