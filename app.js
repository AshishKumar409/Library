document.addEventListener('DOMContentLoaded',init)
function init(){
  let form = document.querySelector('#libraryForm')
  form.addEventListener('submit',onSubmit)
 

  

 class Book{
   constructor(name,author,type){
     this.name = name
     this.author = author
     this.type = type
   }
 }


 class Display{

  
  add(book){
    let tableBody = document.getElementById('tableBody')
    
  console.log(book);

  let tableRow = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`

   tableBody.innerHTML+=tableRow
  }

  clear(){
    let form = document.querySelector('#libraryForm')
    form.reset()
  }
 }

 function onSubmit(e){
  let bookName = document.getElementById('bookName').value
  let author = document.getElementById('author').value
  let fiction = document.getElementById('fiction')
  let programming = document.getElementById('programming')
  let cooking = document.getElementById('cooking')

  
  
  let type 
  if(fiction.checked){
    type = fiction.value
  }else if(programming.checked){
    type = programming.value
  }else{
    type = cooking.value
  }
 let book = new Book(bookName,author,type)
  let display = new Display();
  display.add(book)
  display.clear()
  
   
   e.preventDefault()
 }





}
