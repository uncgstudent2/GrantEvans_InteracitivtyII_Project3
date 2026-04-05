const button = document.getElementById('thisButton');

button.addEventListener('click', clickThisButton(){
    document.getElementById('message').innerText = "button was clicked!";
})

function clickThisButton(){
    alert("hello guys!")
}