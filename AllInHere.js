// AllInHere.js, a very simple way to not have to touch index.html and just code in js
console.log('AllInHere.js, a very simple way to not have to touch index.html and just code in js')
// so you can refresh all of the interactive content
function Refresh() {
    document.getElementById("App").innerHTML = App().Body
}
// Null fix
const fix = document.createElement('div');
document.body.appendChild(fix);
// Initalize the root div element
document.body.innerHTML = '<div id="App"></div>'
// Add the contents from the Init function
document.getElementById("App").innerHTML = App().Body
// Run the scripts in the App function
App()
// We are all done here
