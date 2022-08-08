const btn = document.getElementById("random")

btn.addEventListener("click", () => {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("cuerpo").style.background=myRandomColor;
    document.getElementById("color").innerHTML=myRandomColor;
});