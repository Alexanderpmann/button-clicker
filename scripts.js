const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText == "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText= "Login";
    }
});

function showAlert() {
    alert("Ninja was liked")
}

function hide(element) {
    element.remove();
}