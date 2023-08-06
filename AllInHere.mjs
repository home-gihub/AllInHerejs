// AllInHere.js, a very simple way to not have to touch index.html and just code in js
console.log('AllInHere.js, a very simple way to not have to touch index.html and just code in js')

// Get the functions we need from App.js
import * as app from "./App.js"
// Initalize the root div element
document.body.innerHTML = '<div id="App"></div>'
// Add the contents from the Init function in App.js
document.getElementById("App").innerHTML = app.Init()
// Run the scripts in the App function in App.js
app.App()
// We are all done here
