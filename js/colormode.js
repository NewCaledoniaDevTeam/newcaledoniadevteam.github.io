// Do this before the body gets parsed
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.documentElement.classList.toggle("dark-mode");
} else if (currentTheme == "light") {
    document.documentElement.classList.toggle("light-mode");
}

function darkBtn() {
    $(`#darkToggle`).on('touchstart click', function(event) {
        if (event.type == "touchstart") {
            $(this).off('click');
            touchDark();
        } else if (event.type == "click") {
            $(this).off('touchstart');
            touchDark();
        }
    });
}

function touchDark() {
    var newtheme;

    if (localStorage.getItem('theme') === "light") {
        document.documentElement.classList.toggle("light-mode");
        newtheme = document.documentElement.classList.contains("light-mode") ? "light" : "dark";
    } else {
        document.documentElement.classList.toggle("dark-mode");
        newtheme = document.documentElement.classList.contains("dark-mode") ? "dark" : "light";
    }
    localStorage.setItem("theme", newtheme);
    location.reload();
}

darkBtn();