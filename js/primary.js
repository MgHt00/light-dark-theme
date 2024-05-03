var theme_checkbox = document.getElementById("theme-switch-checkbox");
const theme_variables = document.querySelector("#variables");
let theme_status_container = document.getElementById("theme-status");

let user_theme = localStorage.getItem("locally_stored_theme_preference");

// If the locally stored theme preference(user_theme variable) is not set(null, undefined, 0, an empty string (''), and false), set it to 'light' by default
if (!user_theme) {
    //console.log ("we are now in the section (!user_theme):", user_theme);
    user_theme = "light";  // Assign some string into the variable.
    theme_variables.href = "css/variables-light.css";
    localStorage.setItem("locally_stored_theme_preference", "light");
}

if (user_theme === "dark") {
    theme_status_container.textContent = "Dark";
    theme_variables.href = "css/variables-dark.css";
    localStorage.setItem("locally_stored_theme_preference", "dark");
    theme_checkbox.checked = true;
} else {
    // By default, or if the preference is not stored, use the light theme
    //console.log ("We are now in the if-else of user_theme === light");
    theme_variables.href = "css/variables-light.css";
    theme_status_container.textContent = "Light";
}

theme_checkbox.addEventListener("change", toggleTheme);

function toggleTheme () {
    //console.log ("We are in toggleTheme function.");
    if (theme_checkbox.checked) {
        theme_status_container.textContent = "Dark";
        theme_variables.href = "css/variables-dark.css";
        localStorage.setItem("locally_stored_theme_preference", "dark");
    } else {
        theme_status_container.textContent = "Light";
        theme_variables.href = "css/variables-light.css";
        localStorage.setItem("locally_stored_theme_preference", "light");
    }
}