console.log('%cAllInHere.js ----------', 'color: green; background: black;')
// so you can refresh all of the interactive content
function Refresh() {document.getElementById("App").innerHTML = App().Body}
// Null fix
console.log('fixing null...', 'color: green; background: black;')
const fix = document.createElement('div');
document.body.appendChild(fix);
console.log('adding app div...', 'color: green; background: black;')
// Initalize the root div element
document.body.innerHTML = '<div id="App"></div>'
// Add the contents from the Init function
console.log('adding page...', 'color: green; background: black;')
document.getElementById("App").innerHTML = App().Body
// Run the scripts in the App function
console.log('running scripts...', 'color: green; background: black;')
App()
// We are all done here
console.log('--------------------', 'color: green; background: black;')
