let signupBtn = document.getElementById("signupBtn");
let signinBtin = document.getElementById("signinBtin");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
        signinBtin.onclick = function(){
            nameField.style.maxHeight ="0";
            title.innerHTML="Sign In"
            signupBtn.classList.add("disable")
            signinBtin.classList.remove("disable")
        }
        signupBtn.onclick = function(){
            nameField.style.maxHeight ="60px";
            title.innerHTML="Sign Up"
            signupBtn.classList.remove("disable")
            signinBtin.classList.add("disable")
        }