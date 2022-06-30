// const deleteBtn = document.querySelectorAll('.fa-trash-can');

// deleteBtn.forEach(element => {
//     element.addEventListener('click',function(event){
//         event.target.parentElement.remove();
//     })
// });

//above code did not work so I fixed it below


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const btn = document.querySelector('button');

ul.addEventListener('click',function(event){
    if(event.target.classList.contains('fa-trash-can')){
        event.target.parentElement.remove();
    }
})



ul.addEventListener('click',function(event){
    if(event.target.classList.contains('fa-pen-to-square')){
        let editForm = document.createElement('form');
        editForm.className = 'edit';
        let editTodo = document.createElement('input');
        let addEdit = document.createElement('button');
        editTodo.className = 'edit-input';
        editTodo.setAttribute('style','padding:6px;margin:5px;');
        addEdit.setAttribute('style','padding:5px;color:blue;cursor:pointer;');
        addEdit.innerText = 'Edit';
        addEdit.className = 'edit';
        editTodo.setAttribute('type','text');
        addEdit.setAttribute('type','submit');
        editForm.appendChild(editTodo);
        editForm.appendChild(addEdit);
        let span = event.target.parentElement.querySelector('.todo');
        editTodo.value = span.innerText;
        event.target.parentElement.querySelector('.todo').innerText = '';
        let li = event.target.parentElement;
        li.appendChild(editForm);
    }
})




ul.addEventListener('submit',function(event){
    if(event.target.classList.contains('edit'))
    event.preventDefault();
    let li = event.target.parentElement;
    let span = event.target.parentElement.querySelector('.todo');
    if(event.target.parentElement.querySelector('.edit-input').value == '') {
        event.target.parentElement.remove();
    }
    let editText = event.target.parentElement.querySelector('.edit-input').value;
    span.innerText = editText;
    event.target.remove();
})



form.addEventListener('submit', function(event){
    event.preventDefault();
    let li = document.createElement('li');
    let span = document.createElement('span');
    let checkBox = document.createElement('input');
    checkBox.className = 'check-box';
    checkBox.setAttribute('type', 'checkbox');
    li.appendChild(checkBox);
    span.className = 'todo';
    let todoText = document.querySelector('#todo-text').value;
    span.innerText = todoText;
    li.appendChild(span);
    let trashCan = document.createElement('i')
    trashCan.classList = 'fa-solid fa-trash-can';
    li.appendChild(trashCan);
    let edit = document.createElement('i');
    edit.classList = "fa-solid fa-pen-to-square";
    li.appendChild(edit);
    ul.appendChild(li);
    if(document.querySelector('#todo-text').value == '') {
        li.remove();
    }
    document.querySelector('#todo-text').value ='';
});

ul.addEventListener('click',function(event){
    
    if(event.target.nextElementSibling.classList.contains('completed')) {
        event.target.nextElementSibling.classList.remove('completed');
        }

    else if(event.target.classList.contains('check-box')){
        if(!event.target.nextElementSibling.classList.contains('completed')) {
        event.target.nextElementSibling.classList.add('completed');
        }
    }
})