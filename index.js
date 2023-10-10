const form = document.getElementById("form");
const mainElem = document.querySelector("main");
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
    return;
  }
  if (!emailRegex.test(emailInput.value)) {
    emailInput.insertAdjacentHTML(
      "afterend",
      `<p class="error">Please enter a valid email address</p>`
    );
    return;
  }
  mainElem.style.maxWidth = "500px";
  mainElem.innerHTML = /*html*/ `
    <content class="success--container">
      <div class="content__success">
        <div class="success__image--container"><img src="./assets/images/icon-success.svg" alt="success icon"
            class="img__success"></div>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>ash@loremcompany.com</strong>.
          Please open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <form action="/"><button>Dismiss message</button></form>
    </content>
  `;
});
