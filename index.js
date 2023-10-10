const form = document.getElementById("form");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#form .error")?.remove();
  const emailInput = document.querySelector("#form input");
  if (!emailInput.value) {
    emailInput.insertAdjacentHTML(
      "afterend",
      `<p class="error">Please enter your email address</p>`
    );
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.insertAdjacentHTML(
      "afterend",
      `<p class="error">Please enter a valid email address</p>`
    );
  }
});
