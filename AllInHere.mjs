// AllInHere.js, a very simple way to not have to touch index.html and just code in js
console.log('AllInHere.js, a very simple way to not have to touch index.html and just code in js')

// Get the functions we need from App.js
import * as app from "./App.js"
// Initalize the root div element
AIHRootElement = document.createElement('div')
AIHRootElement.id = "App"
document.body.appendChild(AIHRootElement)
// Add the contents from the Init function in App.js
document.getElementById("App").innerHTML = app.Init()
// Run the scripts in the App function in App.js
app.App()
// We are all done here
