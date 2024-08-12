let addButton = document.getElementById('button');
let inputBox = document.getElementById('input-box');
let todoList = document.getElementById('list-container');

inputBox.addEventListener('keyup',function(e){
  if(e.key=='Enter'){
    addTodo(this.value);
    this.value='';
  }
})
function addTodo(val){
  let list = document.createElement('li');
  list.innerHTML=`${val}`;
  todoList.appendChild(list);
  console.log(val);

  list.addEventListener('click',function(){
    this.classList.toggle('done')
  })
}
function addTodo(val) {
  let list = document.createElement('li');
  
  // Create a checkbox element
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Append checkbox and text to the list item
  list.appendChild(checkbox);
  list.appendChild(document.createTextNode(val));
  todoList.appendChild(list);
  
  // Add event listener for the checkbox
  checkbox.addEventListener('change', function() {
      if (this.checked) {
          list.classList.add('done');
      } else {
          list.classList.remove('done');
      }
  });

  console.log(val);
}
