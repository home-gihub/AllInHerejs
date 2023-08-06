export function App() {
    counter = 0
    function count() {
        counter++
        document.getElementById('counter').innerHTML = `count is ${counter}`
    }
    document.getElementById('App').append('<button id="counter" onclick="count()">Count is 0</button>')
}

export function Init() {
    let Body = "<h1>it is just all in here</h1>"
    return Body;
}
