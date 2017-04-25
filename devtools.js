console.log("Hello from DevTools");

window.movilidad = {};

chrome.devtools.panels.create("Dripper", "chrome.png", "panel.html", function (panel) {
    console.log("Hello from callback");
});
