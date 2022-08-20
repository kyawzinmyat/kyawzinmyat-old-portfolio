var stack = document.getElementById("nav-stack");
stack.addEventListener("click", function(){
    var current = stack.firstChild;
    current.remove();
    stack.appendChild(current);
})