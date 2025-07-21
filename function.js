var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// Header Name

function randomName() {
  const names = ["SP King", "Full Stack Web Developer", "Raja Sri Veelan"];
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  document.getElementById("random-name").textContent = randomName;
}

setInterval(randomName, 1000);

console.log(document.getElementById("name").value);

// Email js
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_5fafwys";
  const templateID = "template_hdj8vxf";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = "");
      console.log(res);
      alert("Your Message sent Successfully");
    })
    .catch((err) => console.log(err));
}
