const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".regester-link");
const loginLink = document.querySelector(".login-link");

registerLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

//function login

const listAccount = [{ username: "admin", password: "123" }];
let isLogin = !!localStorage.getItem("token");

function CheckLogin() {
  if (isLogin) {
    window.location.href = "profile.html";
  }
}

function Login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let checkLogin = listAccount.some(
    (value) => value.username === username && value.password === password
  );
  console.log(checkLogin);
  if (checkLogin) {
    localStorage.setItem("token", username);
    isLogin = true;
    CheckLogin();
  } else {
    alert("wrong username or password !");
  }
}
