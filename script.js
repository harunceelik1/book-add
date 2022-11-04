import Book from "../book/islem.js";

const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
let button = document.querySelector("#submit");
let button_update = document.querySelector("#update");



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
                <td><i class="fa-solid fa-pen-to-square" id="icon"></i></td> 
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
    console.log(selectedtr)
    title.focus();
    if(a.target.className === "fa-solid fa-pen-to-square")
    {
        button.classList.add("d-none");
        button_update.classList.remove("d-none");
        document.getElementById("title").value = selectedtr.children[0].textContent;
        document.getElementById("author").value = selectedtr.children[1].textContent;
        document.getElementById("isbn").value =  selectedtr.children[2].textContent;    
    }
    const updateBtn =() => {
        button.classList.remove("d-none");
        button_update.classList.add("d-none");

        selectedtr.children[0].textContent = document.getElementById("title").value;
        selectedtr.children[1].textContent = document.getElementById("author").value;
        selectedtr.children[2].textContent = document.getElementById("isbn").value;
    }
    
        button_update.addEventListener("click",(e)=>{
            updateBtn();
      
        })
}


