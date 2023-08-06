# AllInHerejs
a very simple way to not have to touch index.html and just code in js
## index.html
the index.html sould just be a blank page with nothing in the `<body>` in the `<head>` add this: `<script src="https://raw.githubusercontent.com/home-gihub/AllInHerejs/main/AllInHere.js" type="module">`
(uses github directly)
## App.js
in your website folder make a new file called `App.js` the contents of it should be
```
export function App() {

}

export function Init() {
    let Body = ""
    return Body;
}
```
the `App()` function stores all of your code, the `Init()` function defines a `Body` variable, that will be the content of your website, it will be contained in a `<div>` with an id of `App`
