var stack = document.getElementById("nav-stack");
stack.addEventListener("click", function(event){
    var current = event.srcElement;
    current.remove();
    stack.appendChild(current);
})


stack.classList.add("start");
