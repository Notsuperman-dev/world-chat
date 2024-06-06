document.getElementById('random-button').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('hello-world').style.color = randomColor;
});
