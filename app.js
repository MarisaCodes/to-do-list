// li tag to be appended

let userLiInnerHtml = `
<div>
  <input type="checkbox" class="check-box" />
  <span class="todo"></span>
</div>
<div>
  <i class="fa-solid fa-trash-can"></i>
  <i class="fa-solid fa-pen-to-square"></i>
</div>`;
const test = document.querySelector("input");
console.log(test.getAttribute("type"));
let editFormInnerHtml = `
        
            <input type="text">
            <button type="submit">Edit</button>
        `;

const form = document.getElementById("add-todo");
const ul = document.getElementById("todo-ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let input = form.firstElementChild.value;
  if (input != "") {
    let userLi = document.createElement("li");
    userLi.innerHTML = userLiInnerHtml;
    userLi.querySelector(".todo").innerText = input;
    ul.appendChild(userLi);
    form.firstElementChild.value = null;
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("fa-pen-to-square")) {
    let editText =
      e.target.parentElement.parentElement.querySelector("span").innerText;
    e.target.parentElement.parentElement.querySelector("span").remove();
    let editForm = document.createElement("form");
    editForm.className = "edit-form";
    editForm.innerHTML = editFormInnerHtml;
    editForm.querySelector("input").value = editText;
    e.target.parentElement.parentElement.firstElementChild.appendChild(
      editForm
    );
  }
  if (e.target.getAttribute("type") == "checkbox") {
    if (e.target.nextElementSibling.tagName == "SPAN") {
      if (e.target.checked) {
        e.target.nextElementSibling.classList.add("completed");
      } else {
        e.target.nextElementSibling.classList.remove("completed");
      }
    }
  }
});

ul.addEventListener("submit", (e) => {
  if (e.target.classList.contains("edit-form")) {
    e.preventDefault();
    let newText = e.target.firstElementChild.value;
    let newSpan = document.createElement("span");
    newSpan.innerText = newText;
    e.target.parentElement.appendChild(newSpan);
    e.target.remove();
  }
});
