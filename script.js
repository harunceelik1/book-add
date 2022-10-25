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
    let b = document.getElementsByClassName("table-list")
    console.log(b)
    let data = [].map.call(b, item => item.textContent);
    console.log(data)

    if(a.target.className === "fa-solid fa-pen-to-square")
    {
        document.getElementById("title").value = data[0];
        document.getElementById("author").value= data[1];
        document.getElementById("isbn").value=   data[2];
    }

}
