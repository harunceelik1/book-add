import Book from "../book/islem.js";

const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
let button = document.querySelector("#submit");


button.addEventListener("click",(e)=>{
    uyari();
    e.preventDefault();
    
})

const book = new Book(title,author,isbn);
const btnEkle= (book)=> {
            const list = document.getElementById('book-list');
            const row = document.createElement('tr');
            row.innerHTML=`
                
                <td class="table-list">${book.title.value}</td>
                <td class="table-list">${book.author.value}</td>
                <td class="table-list">${book.isbn.value}</td>
                <td><i class="fa-solid fa-trash deneme"></i></td>
                <td><i class="fa-solid fa-pen-to-square"></i></td> 
            `;
            list.appendChild(row);
        }
const clearFields =()=>{
    document.getElementById("title").value='';
    document.getElementById("author").value='';
    document.getElementById("isbn").value='';
}
const uyari =()=>{
    if(title.value === "" || author.value ==="" || isbn.value ==="")
    {   
        alert('Lütfen kitap bilgilerini doldurunuz.');
    }
    else
    {
        
        btnEkle(book);
        clearFields();     

    }
}
document.getElementById("bookList").addEventListener("click",function(e){
    // console.log(e.target.parentElement.parentElement)        
    if(e.target.className ==="fa-solid fa-trash deneme"){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault(); 
});



document.getElementById("book-list").addEventListener("click",update);


function update(a){
    let selectedtr = a.target.parentElement.parentElement

    if(a.target.className === "fa-solid fa-pen-to-square")
    {
      
        document.getElementById("title").value = selectedtr.cells[0].innerHTML;
        document.getElementById("author").value = selectedtr.cells[1].innerHTML;
        document.getElementById("isbn").value =  selectedtr.cells[2].innerHTML;
        
    }

}
