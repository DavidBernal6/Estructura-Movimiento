/*=========================================================
    HERO CONTROLLER
    Archivo: js/hero.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación inicial Hero
    - Entrada de elementos
    - Parallax constructivista
    - Microinteracciones
=========================================================*/
function initHeroAnimation(){

    if(typeof gsap === "undefined")
        return;


    const hero =
        document.getElementById("hero");


    if(!hero)
        return;


    gsap.from("#hero-label",{

        opacity:0,
        y:40,
        duration:.8,
        ease:"power3.out"

    });


    gsap.from("#hero-title",{

        opacity:0,
        y:80,
        duration:1.2,
        delay:.2,
        ease:"power4.out"

    });


    gsap.from("#hero-description",{

        opacity:0,
        y:40,
        duration:.8,
        delay:.5

    });


    gsap.from("#hero-buttons",{

        opacity:0,
        y:30,
        duration:.8,
        delay:.7

    });


    gsap.from("#hero-image-frame",{

        opacity:0,
        scale:.8,
        duration:1.2,
        delay:.4,
        ease:"expo.out"

    });


}



/*=========================================================
    HERO CONTROLLER
    Archivo: js/hero.js

    Continuación:
    - Parallax de elementos
    - Movimiento constructivista
    - Hover interactions
    - Scroll animations
=========================================================*/



/*=========================================================
        PARALLAX CONSTRUCTIVISTA
=========================================================*/


function initHeroParallax(){


    const shape1 = document.getElementById("shape-1");

    const shape2 = document.getElementById("shape-2");

    const shape3 = document.getElementById("shape-3");


    const imageFrame =
        document.getElementById("hero-image-frame");


    const secondaryImage =
        document.getElementById("hero-secondary-image");


    if(!shape1 || !imageFrame) return;



    window.addEventListener(
        "mousemove",
        (event)=>{


            const x =
                (event.clientX / window.innerWidth - .5);


            const y =
                (event.clientY / window.innerHeight - .5);



            gsap.to(
                shape1,
                {

                    x:x * 60,
                    y:y * 60,
                    duration:1,
                    ease:"power3.out"

                }
            );


            gsap.to(
                shape2,
                {

                    x:x * -80,
                    y:y * 40,
                    rotation:20 + x * 20,
                    duration:1,
                    ease:"power3.out"

                }
            );


            gsap.to(
                shape3,
                {

                    x:x * 40,
                    y:y * -60,
                    duration:1,
                    ease:"power3.out"

                }
            );



            gsap.to(
                imageFrame,
                {

                    x:x * -20,
                    y:y * -20,
                    duration:1,
                    ease:"power3.out"

                }
            );



            gsap.to(
                secondaryImage,
                {

                    x:x * 30,
                    y:y * 20,
                    duration:1,
                    ease:"power3.out"

                }
            );


        }
    );


}





/*=========================================================
        IMAGE HOVER EFFECT
=========================================================*/


function initImageHover(){


    const image =
        document.getElementById("hero-main-image");


    const frame =
        document.getElementById("hero-image-frame");



    if(!image || !frame) return;



    frame.addEventListener(
        "mouseenter",
        ()=>{


            gsap.to(
                image,
                {

                    scale:1.18,
                    duration:1.2,
                    ease:"power3.out"

                }
            );


        }
    );



    frame.addEventListener(
        "mouseleave",
        ()=>{


            gsap.to(
                image,
                {

                    scale:1.10,
                    duration:1.2,
                    ease:"power3.out"

                }
            );


        }
    );



}







/*=========================================================
        SCROLL REVEAL
=========================================================*/


function initHeroScroll(){


    if(typeof ScrollTrigger === "undefined")
        return;



    const sections =
        document.querySelectorAll(
            "#hero .hero-scroll"
        );



    sections.forEach(
        element=>{


            gsap.from(
                element,
                {

                    scrollTrigger:{

                        trigger:element,

                        start:"top 85%",

                        toggleActions:
                        "play none none reverse"

                    },


                    opacity:0,

                    y:50,

                    duration:1,

                    ease:"power3.out"


                }
            );


        }
    );


}







/*=========================================================
        NUMBER FLOAT ANIMATION
=========================================================*/


function initFloatingNumber(){


    const number =
        document.getElementById("hero-number");



    if(!number) return;



    gsap.to(
        number,
        {


            y:-15,

            rotation:18,

            duration:3,

            repeat:-1,

            yoyo:true,

            ease:"sine.inOut"


        }
    );


}







/*=========================================================
        SCROLL INDICATOR
=========================================================*/


function initScrollIndicator(){


    const indicator =
        document.getElementById(
            "scroll-indicator"
        );



    if(!indicator) return;



    indicator.addEventListener(
        "mouseenter",
        ()=>{


            gsap.to(
                indicator.querySelector("span"),
                {

                    scale:1.2,

                    duration:.3

                }
            );


        }
    );



    indicator.addEventListener(
        "mouseleave",
        ()=>{


            gsap.to(
                indicator.querySelector("span"),
                {

                    scale:1,

                    duration:.3

                }
            );


        }
    );


}





/*=========================================================
        EXPORTS INTERNOS
=========================================================*/


export function initHeroInteractions(){


    initHeroParallax();


    initImageHover();


    initHeroScroll();


    initFloatingNumber();


    initScrollIndicator();


}

/*=========================================================
    HERO CONTROLLER
    Archivo: js/hero.js

    Final:
    - Inicialización global
    - Responsive handling
    - Resize optimization
    - Integración con main.js
=========================================================*/



/*=========================================================
        RESPONSIVE OPTIMIZATION
=========================================================*/


function initHeroResponsive(){


    const mediaQuery =
        window.matchMedia(
            "(max-width: 768px)"
        );



    function updateHeroMode(event){


        const imageFrame =
            document.getElementById(
                "hero-image-frame"
            );


        const shape2 =
            document.getElementById(
                "shape-2"
            );



        if(!imageFrame) return;



        if(event.matches){


            // MOBILE


            gsap.set(
                imageFrame,
                {

                    x:0,

                    y:0

                }
            );


            if(shape2){

                gsap.set(
                    shape2,
                    {

                        scale:.7

                    }
                );

            }



        }else{


            // DESKTOP


            if(shape2){

                gsap.set(
                    shape2,
                    {

                        scale:1

                    }
                );

            }


        }


    }



    updateHeroMode(mediaQuery);



    mediaQuery.addEventListener(
        "change",
        updateHeroMode
    );


}







/*=========================================================
        CLEAN RESIZE
=========================================================*/


function initHeroResize(){



    let resizeTimer;



    window.addEventListener(
        "resize",
        ()=>{


            clearTimeout(
                resizeTimer
            );



            resizeTimer =
                setTimeout(
                    ()=>{


                        if(
                            typeof ScrollTrigger !== "undefined"
                        ){

                            ScrollTrigger.refresh();

                        }


                    },
                    300
                );


        }
    );


}







/*=========================================================
        PERFORMANCE MODE
=========================================================*/


function initHeroPerformance(){


    const images =
        document.querySelectorAll(
            "#hero img"
        );



    images.forEach(
        img=>{


            img.loading="lazy";


            img.decoding="async";


        }
    );


}







/*=========================================================
        MASTER INITIALIZER

        Este es el método que
        será llamado desde main.js

=========================================================*/


export function initHero(){


    const hero =
        document.getElementById(
            "hero"
        );



    if(!hero)
        return;




    // Evitar doble ejecución

    if(hero.dataset.loaded){

        return;

    }



    hero.dataset.loaded = true;




    initHeroAnimation();


    initHeroInteractions();


    initHeroResponsive();


    initHeroResize();


    initHeroPerformance();



}







/*=========================================================
        AUTO START OPCIONAL

        Si hero.js se carga
        directamente también funciona

=========================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        if(
            document.getElementById("hero")
        ){

            initHero();

        }


    }
);
