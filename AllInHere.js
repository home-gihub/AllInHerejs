console.log('AllInHere.js ----------)
// so you can refresh all of the interactive content
function Refresh() {document.getElementById("App").innerHTML = App().Body}
// Null fix
console.log('fixing null...')
const fix = document.createElement('div');
document.body.appendChild(fix);
console.log('adding app div...')
// Initalize the root div element
document.body.innerHTML = '<div id="App"></div>'
// Add the contents from the Init function
console.log('adding page...')
document.getElementById("App").innerHTML = App().Body
// Run the scripts in the App function
console.log('running scripts...')
App()
// We are all done here
console.log('--------------------')
