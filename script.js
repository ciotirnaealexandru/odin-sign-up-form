let darkButton = document.querySelector(".dark-mode");
let darkButtonImage = document.querySelector(".dark-mode-img");

let toggle = localStorage.getItem("theme") || "light";

const applyDarkMode = () => {
    document.documentElement.style.setProperty('--main', 'black');
    document.documentElement.style.setProperty('--main-transparent', 'rgba(44, 44, 44, 0.85)');
    document.documentElement.style.setProperty('--accent', 'rgb(219, 158, 84)');
    document.documentElement.style.setProperty('--main-text', 'white');
    darkButtonImage.src = "images/basic-moon-ui-svgrepo-com.svg";
};

const applyLightMode = () => {
    document.documentElement.style.setProperty('--main', 'white');
    document.documentElement.style.setProperty('--main-transparent', 'rgba(255, 255, 255, 0.8)');
    document.documentElement.style.setProperty('--accent', 'rgb(216, 149, 67)');
    document.documentElement.style.setProperty('--main-text', 'black');
    darkButtonImage.src = "images/basic-sun-ui-svgrepo-com.svg";
};

if (toggle === "dark") {
    applyDarkMode();
}

darkButton.addEventListener("click", () => {
    toggle = toggle === "light" ? "dark" : "light";
    localStorage.setItem("theme", toggle);
    toggle === "dark" ? applyDarkMode() : applyLightMode();
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

    let passwordValid = true, passwordConfirmationValid = true;

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
        passwordValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordValid = false;
        passwordConfirmationValid = false;
    }

    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Please fill out this field.";
        passwordConfirmationValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        passwordValid = false;
        passwordConfirmationValid = false;
    }

    //CHANGE INPUT COLOR
    const root = document.documentElement;

    // First Name
    if (!firstNameValid) {
        firstName.style.borderColor = "rgb(187, 49, 49)";
    } else {
        firstName.style.borderColor = getComputedStyle(root).getPropertyValue('--accent').trim();
    }
    
    // Last Name
    if (!lastNameValid) {
        lastName.style.borderColor = "rgb(187, 49, 49)";
    } else {
        lastName.style.borderColor = getComputedStyle(root).getPropertyValue('--accent').trim();
    }
    
    // Email
    if (!emailValid) {
        email.style.borderColor = "rgb(187, 49, 49)";
    } else {
        email.style.borderColor = getComputedStyle(root).getPropertyValue('--accent').trim();
    }
    
    // Phone
    if (!phoneValid) {
        phone.style.borderColor = "rgb(187, 49, 49)";
    } else {
        phone.style.borderColor = getComputedStyle(root).getPropertyValue('--accent').trim();
    }
    
    // Password
    if (!passwordValid) {
        password.style.borderColor = "rgb(187, 49, 49)";
    } else {
        password.style.borderColor = getComputedStyle(root).getPropertyValue('--accent').trim();
    }
    
    // Confirm Password
    if (!passwordConfirmationValid) {
        confirmPassword.style.borderColor = "rgb(187, 49, 49)";
    } else {
        confirmPassword.style.borderColor = getComputedStyle(root).getPropertyValue('--accent').trim();
    }

    if (!firstNameValid || !lastNameValid || !phoneValid || !emailValid || !passwordValid || !passwordConfirmationValid) {
        event.preventDefault();
    }
})