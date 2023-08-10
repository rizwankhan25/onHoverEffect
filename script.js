var circle = document.querySelector("#circle");
var frams = document.querySelectorAll(".fram");
const lerp = (x, y, a) => x * (1 - a) + y * a;
frams.forEach(fram =>{
    fram.addEventListener("mousemove", function(dets){
        var dims = fram.getBoundingClientRect();
        console.log(dims);
    
        var xstart = dims.x;
        var xend = dims.x + dims.width;
       var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
       
    
        gsap.to(circle,{
            scale:5,
            ease: Expo
        })
        gsap.to(fram.children,{
            color: "#fff",
            duration: .4,
            y: "-3vw",
            ease: Expo
        })
        gsap.to(fram.children,{
            x: lerp(-50, 50, zeroone),
            duration: .3
        })
    })
    fram.addEventListener("mouseleave", function(dets){
        
        gsap.to(circle,{
            ease: Expo,
            scale:1
        })
        gsap.to(fram.children,{
            color: "#000",
            duration: .4,
            y: 0,
            ease: Expo
    
        })
        gsap.to(fram.children,{
            x: 0,
            duration: .3
        })
    })
})
window.addEventListener("mousemove",function(dets){
    // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
})
