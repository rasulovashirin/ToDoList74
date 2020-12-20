var toDoList = [];
var ids = [];

var elToDoForm = document.querySelector('.todo__form');
var elToDoList = document.querySelector('.todo__list');
var elToDoAlert = document.querySelector('.todo__alert');

if(elToDoForm){
  var elToDoInput = elToDoForm.querySelector('.todo__input ');
  var elToDoCheckbox = elToDoForm.querySelector('.todo__checkbox');
}

var counter = 0;

elToDoForm.addEventListener('submit', function(evt){
  counter ++
  evt.preventDefault();


  var toDoItem = elToDoInput.value;
  var isImportant = elToDoCheckbox.checked;

  // if(toDoList.includes(toDoItem)) {
  //   elToDoAlert.textContent = 'To do list includes this element!';
  //   elToDoAlert.classList.add('alert');
  //   elToDoAlert.classList.add('alert-warning');
  //   elToDoInput.value = '';
  //   return;
  // }

  if(isImportant){
    toDoList.unshift({
      text: toDoItem,
      id : counter,
      isDone : false
    });
    ids.unshift(counter);
  }else{
    toDoList.push({
      text: toDoItem,
      id : counter,
      isDone : false
    });
    ids.push(counter);
  }
  console.log(toDoList);
  console.log(ids);



  elToDoList.innerHTML = '';
  for(var item of toDoList){

    var newItem = document.createElement('li');
    newItem.classList.add('border-bottom');
    newItem.classList.add('p-3');
    elToDoList.appendChild(newItem);



    var newItemLabel = document.createElement('label');
    newItemLabel.classList.add('d-flex');
    newItemLabel.classList.add('m-0');
    newItemLabel.classList.add('align-items-center');
    newItem.appendChild(newItemLabel);

    var newItemCheckbox = document.createElement('input');
    newItemCheckbox.type = 'checkbox';
    newItemCheckbox.classList.add('sr-only');
    newItemCheckbox.classList.add('chechbox-done');
    newItemLabel.appendChild(newItemCheckbox);

    var newItemSpan = document.createElement('span');
    newItemSpan.classList.add('check-button');
    newItemLabel.appendChild(newItemSpan);

    var newItemTextSpan = document.createElement('span');
    newItemTextSpan.textContent = item;
    newItemTextSpan.classList.add('text-done');
    newItemLabel.appendChild(newItemTextSpan);


    newItemCheckbox.dataset.id = item.id;
    newItemTextSpan.textContent = item.text;
    newItemCheckbox.checked = item.isDone;

    newItemCheckbox.addEventListener('change', function(){
      var done = Number(this.dataset.id);
      var doneIndex = ids.indexOf(done);
      var doneItem = toDoList[doneIndex];

      doneItem.isDone = !doneItem.isDone;
      toDoList.splice(doneIndex, 1, doneItem);
    });
  }



  elToDoInput.value = '';
  elToDoCheckbox.checked = false;
  elToDoInput.focus();
})
