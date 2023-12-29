var crsr = document.querySelector("#crsr");
document.querySelector("#main").addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top = dets.clientY + "px";
    
});

    gsap.from("#navleft",{
        opacity:0,
        y:-300,
        duration:1,
        stagger:0.2
     })

    gsap.from("#navright",{
        y:-300,
       duration:1,
       delay: 1
    })
    gsap.from("#leftcenter h1",{
        opacity:0,
        x:-300,
       duration:1,
       delay: 1.5
    })
   gsap.from("#centertext",{
        opacity:0,
        duration:1,
        delay:2.5,
    })
    gsap.from("#leftcenter p",{
        opacity:0,
        x:-300,
       duration:1,
       delay: 1.5
    })
   gsap.from("#leftbot",{
        y:200,
        opacity:0,
        duration:0.5,
        delay:2
    })
    gsap.from("#rightcenter",{
        x:200,
        opacity:0,
        duration:0.5,
        delay:2
    })
    gsap.from("#rightbot",{
        y:200,
        opacity:0,
        duration:0.5,
        delay:2.5
    })



