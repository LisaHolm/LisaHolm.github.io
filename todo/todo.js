const shoppingInput = document.querySelector('#inputBox > input');

let fruits = [];

function myFunction() {
  fruits.push(shoppingInput.value);
  printList();
}

function deleteFunction(id){
  fruits.splice(id, 1);
  printList();
}


function printList(){
  var str = '<ul>'




for (let i = 0; i < fruits.length; i++) {
    str += '<li>'+ fruits[i] +
    '<button id='+i+' class="delete button" onclick="deleteFunction(this.id)"> <i class="fas fa-times"></i> </button>'
    '</li> ';
    console.log(i);
  }






  // var count = 0;
  // fruits.forEach(function(fruit) {
  //   str += '<li>'+ fruit +
  //   '<button id='+count+' class="btn" onclick="deleteFunction(this.id)">Delete</button>'
  //   '</li>';
  //   count++;
  // });
  //
  // count = 0;

  str += '</ul>';
  document.getElementById("fruitListContainer").innerHTML = str;

}


printList();
