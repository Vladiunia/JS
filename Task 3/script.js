/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'https://api.github.com/users';

const output = document.querySelector("#output");
const messagePlaceholder = document.querySelector("#message");
const btn = document.querySelector("#btn");

async function getUsers() {
  const response = await fetch("https://api.github.com/users");
  const users = response.json();
  return users;
}

async function showUsers() {
  const users = await getUsers();

  messagePlaceholder.remove();

  users.forEach((user) => {
    const messageHolder = document.createElement("div");
    output.append(messageHolder);
    messageHolder.classList.add("messageHolder");

    const login = document.createElement("p");
    messageHolder.append(login);
    login.classList.add("login");
    login.textContent = `Login: ${user.login}`;

    const avatar_url = document.createElement("p");
    messageHolder.append(avatar_url);
    avatar_url.classList.add("avatar_url");
    avatar_url.textContent = `Avatar URL: ${user.avatar_url}`;
  });
}

btn.addEventListener("click", showUsers);