// elements
const firstSection = document.querySelector("#firstSection");
const secSection = document.querySelector("#secSection");
const thirdSection = document.querySelector("#thirdSection");

// sign up
const signupfrom = document.querySelector("#signupfrom");
signupfrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = signupfrom["username"].value;
  const password = signupfrom["password"].value;
  const email = signupfrom["email"].value;
  //   console.log(name, password, email);
  signupfrom.reset();
});
