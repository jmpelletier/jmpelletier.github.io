window.addEventListener("load", function() {
    const time_p  = document.getElementById("time");

    const timer = setInterval(function(){
        const d = new Date();
        const s = d.toTimeString();
        time_p.innerHTML = s;
        console.log("Allo")
    }, 1000);
    
});