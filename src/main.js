import './style.css'
document.getElementById("regForm")
.addEventListener("submit", function(event){

    event.preventDefault(); 

    this.reset(); ó

    document.getElementById("message").innerHTML =
        "Sikeres regisztráció!";
});
