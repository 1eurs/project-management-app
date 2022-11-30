// elements
const firstSection = document.querySelector("#firstSection");
const secSection = document.querySelector("#secSection");
const thirdSection = document.querySelector("#thirdSection");
const signupfrom = document.querySelector("#signupfrom");
const addTaskButton = document.querySelector("#add-task");
const newTaskContainer = document.querySelector(".container0");
const newTaskForm = document.querySelector("#newTaskForm");
var taskesRef = db.collection("tasks");
// sign up
// signupfrom.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = signupfrom["username"].value;
//   const password = signupfrom["password"].value;
//   const email = signupfrom["email"].value;

//   console.log(name, password, email);
//   signupfrom.reset();
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((cred) => {
//       return db
//         .collection("users")
//         .doc(cred.user.uid)
//         .set({
//           Name: name,
//           Email: email,
//           Password: password,
//         })
//         .then(() => {
//           console.log("success");
//           signupfrom.replaceChildren();
//         })
//         .catch((err) => {
//           const error = document.querySelector("#err");
//           error.innerText = err.message;
//         });
//     })
//     .catch((err) => {
//       const error = document.querySelector("#err");
//       error.innerText = err.message;
//     });
// });

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();

  newTaskContainer.classList.remove("hidden");
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = newTaskForm["task"].value;
  const assign = newTaskForm["assign"].value;
  const priority = newTaskForm["priority"].value;
  const date = newTaskForm["due-date"].value;
  //   console.log(task, assign, priority, date);
  taskesRef
    .add({
      task: task,
      assign: assign,
      priority: priority,
      date: date,
    })
    .then((docRef) => {
      newTaskContainer.classList.add("hidden");
      var newTaskRef = taskesRef.doc(docRef.id);
      newTaskRef.get().then((doc) => {
        creteTaskElm(doc.data().task, doc.data().assign, doc.data().date);
      });
    });
});

function creteTaskElm(task, assign, date) {
  const taskElm = document.createElement("div");
  const taskTitle = document.createElement("h3");
  const taskAssign = document.createElement("p");
  const taskDate = document.createElement("p");
  taskElm.append(taskTitle, taskAssign, taskDate);
  taskElm.classList.add("task");
  taskElm.setAttribute("id", task);
  // drag and drom
  taskElm.addEventListener("dragstart", dragStart);
  taskElm.setAttribute("draggable", "true");
  // add task
  taskTitle.classList.add("task-title");
  taskAssign.classList.add("task-assign");
  taskDate.classList.add("task-date");
  taskTitle.innerText = task;
  taskAssign.innerText = assign;
  taskDate.innerText = date;
  firstSection.appendChild(taskElm);
}

function fetchDate() {
  taskesRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      creteTaskElm(doc.data().task, doc.data().assign, doc.data().date);
    });
  });
}

fetchDate();

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

firstSection.addEventListener("dragover", dragOver1);
firstSection.addEventListener("drop", drop1);
function dragOver1(e) {
  e.preventDefault();
}
function drop1(e) {
  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  const dropzone = e.target;
  // add it to the drop target
  dropzone.appendChild(draggable);
  console.log(draggable);
  e.dataTransfer.clearData();
}

secSection.addEventListener("dragover", dragOver2);
secSection.addEventListener("drop", drop2);
function dragOver2(e) {
  e.preventDefault();
}
function drop2(e) {
  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  const dropzone = e.target;
  // add it to the drop target
  dropzone.appendChild(draggable);
  console.log(draggable);
  e.dataTransfer.clearData();
}

thirdSection.addEventListener("dragover", dragOver3);
thirdSection.addEventListener("drop", drop3);
function dragOver3(e) {
  e.preventDefault();
}
function drop3(e) {
  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  const dropzone = e.target;
  // add it to the drop target
  dropzone.appendChild(draggable);
  console.log(draggable);
  e.dataTransfer.clearData();
}
