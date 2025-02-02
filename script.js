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
        document.documentElement.style.setProperty('--main-transparent', 'rgba(255, 255, 255, 0.8)');
        document.documentElement.style.setProperty('--accent', 'rgb(216, 149, 67)');
        document.documentElement.style.setProperty('--main-text', 'black');

        dark_button_image.src="images/basic-sun-ui-svgrepo-com.svg";
    }
});

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    let firstNameValid = true, lastNameValid = true;

    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const firstNameError = document.getElementById("first_name_error");
    const lastNameError = document.getElementById("last_name_error");
    firstNameError.textContent = "";
    lastNameError.textContent = "";

    let emailValid = true, phoneValid = true;
    const email = document.getElementById("email");
    const phone = document.getElementById("phone_number");
    const emailError = document.getElementById("email_error");
    const phoneError = document.getElementById("phone_number_error");
    emailError.textContent = "";
    phoneError.textContent = "";

    let passValid = true;

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    const passwordError = document.getElementById("password_error");
    const confirmPasswordError = document.getElementById("confirm_password_error");
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    //FIRST AND LAST NAME
    if (firstName.value.trim() === "") {
        firstNameError.textContent = "Please fill out this field.";
        firstNameValid = false;
    }

    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Please fill out this field.";
        lastNameValid = false;
    }

    //EMAIL AND PHONE NUMBER
    if (email.value.trim() === "") {
        emailError.textContent = "Please fill out this field.";
        emailValid = false;
    } else if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = "Invalid email format.";
        emailValid = false;
    }

    if (phone.value.trim() === "") {
        phoneError.textContent = "Please fill out this field.";
        phoneValid = false;
    } else if (!phone.value.match(/^\d{4} \d{3} \d{3}$/)) {
        phoneError.textContent = "Invalid phone number format.";
        phoneValid = false;
    }

    //PASSWORD
    if (password.value.trim() === "") {
        passwordError.textContent = "Please fill out this field.";
        passValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passValid = false;
    }

    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Please fill out this field.";
        passValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        passValid = false;
    }

    if (!passValid || !firstNameValid || !lastNameValid || !phoneValid || !emailValid) {
        event.preventDefault();
    }
})