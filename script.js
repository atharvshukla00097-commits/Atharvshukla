// Smooth reveal animation

const elements = document.querySelectorAll(
    ".about-content, .card, .mindset-box, footer"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

    observer.observe(element);

});


// Mouse glow effect

document.addEventListener("mousemove",(e)=>{

    const glow = document.querySelector(".glow1");

    glow.style.left = e.clientX - 250 + "px";

    glow.style.top = e.clientY - 250 + "px";

});
