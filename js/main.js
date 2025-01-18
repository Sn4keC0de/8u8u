const code = document.getElementById('code');

code.onclick = function () {
    document.execCommand(copy);
}

code.addEventListener('copy', function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", code.textContent);
        console.log(event.clipboardData.getData("text"));
    }    
});