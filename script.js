document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("memeBtn"); //button
    const audio = document.getElementById("funny"); //audio
    const hello = document.getElementById("hello"); //text
    const img = document.getElementById("myPic"); //image

    // listener
    btn.addEventListener("click", function() {

        if(hello.innerHTML === "gurt: yo"){ // makes the code switch between gurt: yo and sigma when the button is clciked
            hello.innerHTML = "sigma";

            img.style.setProperty("display", "none", "important");
        }
        else{
            hello.innerHTML = "gurt: yo";
            
            audio.currentTime = 0; 
            audio.play();

            img.style.setProperty("display", "block", "important");
        }

    });
});