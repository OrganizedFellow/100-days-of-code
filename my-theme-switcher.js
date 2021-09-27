
// function setTheme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.documentElement.className = themeName;
// }
// function toggleTheme() {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-light');
//         console.log('light-theme loaded')
//     } else {
//         setTheme('theme-dark');
//         console.log('dark-theme loaded')
//     }
// }
// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//     } else {
//         setTheme('theme-light');
//     }
// })();


// Define which theme should load next
const themeList = {
    dark: 'light',
    light: 'blues',
    blues: 'dark'
};

// Load the existing theme in local storage
const theme = localStorage.getItem('theme');
const bodyClass = document.body.classList;
theme && bodyClass.add(theme);

// Change the theme on a button click
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeList[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    console.log('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

function clearStorage() {
    localStorage.clear();
    console.log('Local Storage Cleared!')
}

const themeCheck = localStorage.getItem('theme');
if (typeof themeCheck !== 'undefined' || themeCheck !== null) {
    console.log(`${theme} theme displayed`);
    localStorage.setItem('theme', 'blues');
} else {
    console.log('theme is not found');
    localStorage.setItem('theme', 'blues');
}
