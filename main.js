console.log("abhay");
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {

}

Display.prototype.add = function(book) {
    MainWork = document.getElementById('MainWork');
    let Useri = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                 </tr>`;
    MainWork.innerHTML += Useri;

}
Display.prototype.clear = function () {
    let LibraryForm = document.getElementById('LibraryForm');
    LibraryForm.reset();
  
}
Display.prototype.validate = function(book){
    if (book.name.length<2 || book.author.length<2){
        return false

    }
    else{
        return true;
    }
}
Display.prototype.show = function (type,displayinput) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${displayinput}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  setTimeout(function(){
    message.innerHTML = ''
  } , 2000);

}
let LibraryForm = document.getElementById('LibraryForm');
LibraryForm.addEventListener('submit', LibraryFormsubmit);
function LibraryFormsubmit(e) {
   let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let Kama_ra = document.getElementById('Kama');
    let programming = document.getElementById('Programming');
    let cooking = document.getElementById('Cooking');
    
    if (Kama_ra.checked) {
        type = Kama_ra.value;
    }
    else if (programming.checked) {
        type = programming.value;

    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book)
    let display = new Display();
    if (display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your previous time wastage is successfull added')
    }
    else {
        display.show('danger','Sorry you cannot add this shit!');
    }
    e.preventDefault();
    // console.log(book);
}