// Event listeneers on load for deleting a dynamically created list
window.addEventListener("load", () => {
  document
    .querySelector(".personal-info")
    .addEventListener("click", deleteInfo);
  document
    .querySelector(".educational-info")
    .addEventListener("click", deleteInfoEducational);
  document
    .querySelector(".professional-info-skills")
    .addEventListener("click", deleteInfoProfessionalSkills);
  document
    .querySelector(".professional-info-experience")
    .addEventListener("click", deleteInfoProfessionalExperience);
  document
    .querySelector(".professional-info-projects")
    .addEventListener("click", deleteInfoProfessionalProjects);
  document
    .querySelector(".personal-biography")
    .addEventListener("click", deleteInfoBio);
});
window.addEventListener("load", () => {
  var a = document.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", initializeInstitutes);
  }
});
window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("#profilePicture");
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        document.getElementById("profilePicture").style.display = "block";
        document.querySelector(".pic-place").style.display = "none";
      }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  closeForm();
});

// functions
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openFormBio() {
  document.getElementById("myFormBio").style.display = "block";
}
function openFormEducational() {
  document.getElementById("myFormEducational").style.display = "block";
}
function openFormProfessionalSkills() {
  document.getElementById("myFormProfessionalSkills").style.display = "block";
}
function openFormProfessionalExperience() {
  document.getElementById("myFormProfessionalExperience").style.display =
    "block";
}
function openFormProfessionalProjects() {
  document.getElementById("myFormProfessionalProjects").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function closeFormBio() {
  document.getElementById("myFormBio").style.display = "none";
}
function closeFormEducational() {
  document.getElementById("myFormEducational").style.display = "none";
}
function closeFormProfessionalSkills() {
  document.getElementById("myFormProfessionalSkills").style.display = "none";
}
function closeFormProfessionalExperience() {
  document.getElementById("myFormProfessionalExperience").style.display =
    "none";
}
function closeFormProfessionalProjects() {
  document.getElementById("myFormProfessionalProjects").style.display = "none";
}
var nameCheck = "",
  emailCheck = "",
  numberCheck = "";
function nameChecked() {
  nameCheck = document.getElementById("name-check");
}
function emailChecked() {
  emailCheck = document.getElementById("email-check");
}
function numberChecked() {
  numberCheck = document.getElementById("number-check");
}

function addedInfo() {
  const name = document.querySelector(".name-input");
  const email = document.querySelector(".email-input");
  const number = document.querySelector(".number-input");
  if (name.value == "" || email.value == "" || number.value == "") {
    alert("Enter all the entries!!");
    return;
  }

  const childName = document.createElement("li");
  childName.innerText = name.value;
  const childEmail = document.createElement("li");
  childEmail.innerText = email.value;
  const childNumber = document.createElement("li");
  childNumber.innerText = number.value;
  const close = document.createElement("button");
  close.innerText = "X";
  close.classList.add("close-personal-info");
  const UL = document.createElement("ul");
  UL.classList.add("personal-info-list");
  if (nameCheck == "") {
    UL.appendChild(childName);
  } else if (nameCheck.checked != true) {
    UL.appendChild(childName);
  } else {
    nameCheck.checked = false;
  }
  if (emailCheck == "") {
    UL.appendChild(childEmail);
  } else if (emailCheck.checked != true) {
    UL.appendChild(childEmail);
  } else {
    emailCheck.checked = false;
  }
  if (numberCheck == "") {
    UL.appendChild(childNumber);
  } else if (numberCheck.checked != true) {
    UL.appendChild(childNumber);
  } else {
    numberCheck.checked = false;
  }

  UL.appendChild(close);
  document.querySelector(".personal-info").appendChild(UL);
  name.value = "";
  email.value = "";
  number.value = "";
  closeForm();
  document.getElementById("open-button").style.display = "none";
  nameCheck = "";
  numberCheck = "";
  emailCheck = "";
}

function addedInfoBio() {
  const name = document.querySelector(".bio-input");
  if (name.value == "") {
    alert("Enter all the entries!!");
    return;
  }
  const childName = document.createElement("li");
  childName.innerText = name.value;

  const close = document.createElement("button");
  close.innerText = "X";
  close.classList.add("close-personal-info-bio");
  const UL = document.createElement("ul");
  UL.classList.add("personal-info-list-bio");
  UL.appendChild(childName);
  UL.appendChild(close);
  document.querySelector(".personal-biography").appendChild(UL);
  name.value = "";
  closeFormBio();
  document.getElementById("bio-open-button").style.display = "none";
}

var skills = 0;
function addedInfoProfessionalSkills() {
  const name = document.querySelector(".skills");
  var ddl = document.getElementById("level");
  var selectedValue = ddl.value;

  if (name.value == "") {
    alert("Enter all the entries!!");
    return;
  }

  const childName = document.createElement("li");
  childName.innerText = name.value;
  const childLevel = document.createElement("li");
  childLevel.innerText = selectedValue;
  const close = document.createElement("button");
  close.innerText = "X";
  close.classList.add("close-professional-info-skills");
  const UL = document.createElement("ul");
  UL.classList.add("professional-info-list-skills");
  UL.appendChild(childName);
  UL.appendChild(childLevel);
  UL.appendChild(close);

  if (skills === 0) {
    const h2 = document.createElement("h2");
    h2.innerText = "Skills";
    h2.classList.add("skills-h2");
    document.querySelector(".professional-info-skills").appendChild(h2);
  }
  skills++;
  document.querySelector(".professional-info-skills").appendChild(UL);
  name.value = "";
  closeFormProfessionalSkills();
}

var experience = 0;
function addedInfoProfessionalExperience() {
  const name = document.querySelector(".company-name");
  const duration = document.querySelector(".duration");
  if (name.value == "" || duration == "") {
    alert("Enter all the entries!!");
    return;
  }
  const childName = document.createElement("li");
  childName.innerText = name.value;
  const childDuration = document.createElement("li");
  childDuration.innerText = duration.value;
  const close = document.createElement("button");
  close.innerText = "X";
  close.classList.add("close-professional-info-experience");
  const UL = document.createElement("ul");
  UL.classList.add("professional-info-list-experience");
  UL.appendChild(childName);
  UL.appendChild(childDuration);
  UL.appendChild(close);
  console.log(name.value);
  if (experience === 0) {
    const h2 = document.createElement("h2");
    h2.innerText = "Experience";
    h2.classList.add("experience-h2");
    document.querySelector(".professional-info-experience").appendChild(h2);
  }
  experience++;
  document.querySelector(".professional-info-experience").appendChild(UL);
  name.value = "";
  duration.value = "";
  closeFormProfessionalExperience();
}

var projects = 0;
function addedInfoProfessionalProjects() {
  const name = document.querySelector(".project-name");
  const duration = document.querySelector(".time-spent");
  if (name.value == "" || duration == "") {
    alert("Enter all the entries!!");
    return;
  }
  const childName = document.createElement("li");
  childName.innerText = name.value;
  const childDuration = document.createElement("li");
  childDuration.innerText = duration.value;
  const close = document.createElement("button");
  close.innerText = "X";
  close.classList.add("close-professional-info-projects");
  const UL = document.createElement("ul");
  UL.classList.add("professional-info-list-projects");
  UL.appendChild(childName);
  UL.appendChild(childDuration);
  UL.appendChild(close);
  console.log(name.value);
  if (projects === 0) {
    const h2 = document.createElement("h2");
    h2.innerText = "Projects";
    h2.classList.add("projects-h2");
    document.querySelector(".professional-info-projects").appendChild(h2);
  }
  projects++;
  document.querySelector(".professional-info-projects").appendChild(UL);
  name.value = "";
  duration.value = "";
  closeFormProfessionalProjects();
}

function deleteInfo(e) {
  var del = e.target;
  if (del.classList[0] === "close-personal-info") {
    e.target.parentElement.remove();
  }
  document.getElementById("open-button").style.display = "block";
}

function deleteInfoBio(e) {
  var del = e.target;
  if (del.classList[0] === "close-personal-info-bio") {
    e.target.parentElement.remove();
  }
  document.getElementById("bio-open-button").style.display = "block";
}

function deleteInfoEducational(e) {
  var del = e.target;
  if (del.classList[0] === "close-educational-info") {
    e.target.parentElement.remove();
  }
  document.getElementById("educational-open-button").style.display = "block";
}
function deleteInfoProfessionalSkills(e) {
  var del = e.target;
  if (del.classList[0] === "close-professional-info-skills") {
    e.target.parentElement.remove();
    skills--;
  }
  if (skills === 0) {
    document.querySelector(".skills-h2").remove();
  }
}
function deleteInfoProfessionalExperience(e) {
  var del = e.target;
  if (del.classList[0] === "close-professional-info-experience") {
    e.target.parentElement.remove();
    experience--;
  }
  if (experience === 0) {
    document.querySelector(".experience-h2").remove();
  }
}
function deleteInfoProfessionalProjects(e) {
  var del = e.target;
  if (del.classList[0] === "close-professional-info-projects") {
    e.target.parentElement.remove();
    projects--;
  }
  if (projects === 0) {
    document.querySelector(".projects-h2").remove();
  }
}

// Educational section
var selectInstitute = "";
function initializeInstitutes(e) {
  selectInstitute = e.target.innerText;
  document.getElementById("myDropdown").style.display = "none";
}
function addedInfoEducational() {
  const name = document.querySelector(".name-input-educational");
  if (name.value == "" || selectInstitute == "") {
    alert("Enter all the entries!!");
    return;
  }
  const childName = document.createElement("li");
  childName.innerText = name.value;
  const childInstitute = document.createElement("li");
  childInstitute.innerText = selectInstitute;
  const close = document.createElement("button");
  close.innerText = "X";
  close.classList.add("close-educational-info");
  const UL = document.createElement("ul");
  UL.classList.add("educational-info-list");
  UL.appendChild(childName);
  UL.appendChild(childInstitute);
  UL.appendChild(close);
  UL.draggable = true;
  document.querySelector(".educational-info").appendChild(UL);
  name.value = "";
  selectInstitute = "";
  closeFormEducational();
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").style.display = "block";
}

function filterFunction() {
  var input, filter, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function displayProfile() {
  document.getElementById("open-button").style.display = "none";
  document.getElementById("bio-open-button").style.display = "none";
  document.getElementById("educational-open-button").style.display = "none";
  document.getElementById("professional-open-button-skills").style.display =
    "none";
  document.getElementById("professional-open-button-experience").style.display =
    "none";
  document.getElementById("professional-open-button-projects").style.display =
    "none";

  var closes = document.querySelectorAll(".close-personal-info");
  closes.forEach((element) => {
    element.style.display = "none";
  });
  closes = document.querySelectorAll(".close-personal-info-bio");
  closes.forEach((element) => {
    element.style.display = "none";
  });
  closes = document.querySelectorAll(".close-educational-info");
  closes.forEach((element) => {
    element.style.display = "none";
  });
  closes = document.querySelectorAll(".close-professional-info-skills");
  closes.forEach((element) => {
    element.style.display = "none";
  });
  closes = document.querySelectorAll(".close-professional-info-experience");
  closes.forEach((element) => {
    element.style.display = "none";
  });
  closes = document.querySelectorAll(".close-professional-info-projects");
  closes.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelector(".btn-act").style.display = "none";
  document.getElementById("actual-btn").style.display = "none";
}
