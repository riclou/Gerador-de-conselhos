const span = document.getElementById('advice')

async function advice(){
    const url = await fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    span.innerText = url.slip.advice
}