// Taking Rreference

let add_entry_qualification = document.getElementById(
  "add_entry_qualification"
);
let add_entry_projects = document.getElementById("add_entry_projects");
let Qualification_div = document.getElementById("Qualification_div");
let projects_div = document.getElementById("projects_div");
let qualification = document.getElementById("qualification");
let stream = document.getElementById("stream");
let admission = document.getElementById("admission");
let passout = document.getElementById("passout");
let title = document.getElementById("title");
let discription = document.getElementById("discription");
let skills = document.getElementById("skills");
let submit = document.getElementById("submit");
let name = document.getElementById("name");
let fill_name = document.getElementById("fill_name");
let email = document.getElementById("email");
let mail = document.getElementById("mail");
let phone = document.getElementById("phone");
let telephone = document.getElementById("telephone");
let qualification_list = document.getElementById("qualification_list");
let projects_list = document.getElementById("projects_list");
let dynamic = document.getElementById("dynamic");

// global variables

let quealification_arr = [];
let project_arr = [];

// event listeners

add_entry_qualification.addEventListener("click", addQualification);

add_entry_projects.addEventListener("click", addProjects);

submit.addEventListener("click", function () {
  dynamic.style.display = "block";

  fill_name.innerText = name.value;
  mail.innerText = email.value;
  telephone.innerText = phone.value;

  project_arr.forEach((data) => {
    let list_item = document.createElement("li");
    list_item.innerText = data;
    list_item.innerText += "❌";

    projects_list.appendChild(list_item);
  });

  quealification_arr.forEach((data) => {
    let list_item = document.createElement("li");
    list_item.innerText = data;
    list_item.innerText += "❌";

    qualification_list.appendChild(list_item);
  });
});

// functions

function addQualification() {
  let div = document.createElement("div");

  let h3 = document.createElement("h3");
  h3.innerText = `${qualification.value} in ${stream.value} from ${admission.value}-${passout.value}`;

  quealification_arr.push(h3.innerText);

  let edit = document.createElement("button");
  edit.innerText = "Edit";

  let delete_button = document.createElement("button");
  delete_button.innerText = "Delete";

  div.appendChild(h3);
  div.appendChild(edit);
  div.appendChild(delete_button);

  Qualification_div.appendChild(div);

  div.setAttribute("class", "appenddiv");

  edit.addEventListener("click", function () {
    h3.contentEditable = true;
    let result = quealification_arr.find((data) => {
      if (data === h3.innerText) return true;
    });
    let index = quealification_arr.indexOf(result);
    console.log(index);
    h3.addEventListener("input", function () {
      quealification_arr[index] = h3.innerText;
    });
  });

  delete_button.addEventListener("click", function () {
    let result = quealification_arr.find((data) => {
      if (data === h3.innerText) return true;
    });
    let index = quealification_arr.indexOf(result);
    console.log(index);

    quealification_arr.splice(index, 1);
  });

  delete_button.addEventListener("click", function () {
    div.style.display = "none";
  });
}

function addProjects() {
  let div = document.createElement("div");

  let h3 = document.createElement("h3");
  h3.innerText = `${title.value}: ${discription.value} ${skills.value}.`;

  project_arr.push(h3.innerText);

  let edit = document.createElement("button");
  edit.innerText = "Edit";

  let delete_button = document.createElement("button");
  delete_button.innerText = "Delete";

  div.appendChild(h3);
  div.appendChild(edit);
  div.appendChild(delete_button);

  projects_div.appendChild(div);

  div.setAttribute("class", "appenddiv");

  edit.addEventListener("click", function () {
    h3.contentEditable = true;
    let result = project_arr.find((data) => {
      if (data === h3.innerText) return true;
    });
    let index = project_arr.indexOf(result);
    console.log(index);
    h3.addEventListener("input", function () {
      project_arr[index] = h3.innerText;
    });
  });

  delete_button.addEventListener("click", function () {
    let result = project_arr.find((data) => {
      if (data === h3.innerText) return true;
    });
    let index = project_arr.indexOf(result);
    console.log(index);

    project_arr.splice(index, 1);
  });

  delete_button.addEventListener("click", function () {
    div.style.display = "none";
  });
}
