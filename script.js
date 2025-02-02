let dark_button = document.querySelector(".dark-mode");
let dark_button_image = document.querySelector(".dark-mode-img");

let toggle = "light";

dark_button.addEventListener("click", () => {
    if (toggle == "light") {
        toggle = "dark";

        document.documentElement.style.setProperty('--main', 'black');
        document.documentElement.style.setProperty('--main-transparent', 'rgba(44, 44, 44, 0.85)');
        document.documentElement.style.setProperty('--accent', 'rgb(219, 158, 84)');
        document.documentElement.style.setProperty('--main-text', 'white');

        dark_button_image.src="images/basic-moon-ui-svgrepo-com.svg";
    }
    else {
        toggle = "light";

        document.documentElement.style.setProperty('--main', 'white');
        document.documentElement.style.setProperty('--main-transparent', 'rgba(255, 255, 255, 0.85)');
        document.documentElement.style.setProperty('--accent', 'rgb(216, 149, 67)');
        document.documentElement.style.setProperty('--main-text', 'black');

        dark_button_image.src="images/basic-sun-ui-svgrepo-com.svg";
    }
});

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
    }
})