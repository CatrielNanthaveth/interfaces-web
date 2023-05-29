document.body.onload = add;

function add() {
    const h1 = document.querySelector("h1");
    const p = document.createElement("p");
    p.innerText = '¿Cómo estás?'
    h1.after(p)
    document.getElementById('welcome-header').classList.add('bg-beige');
}
