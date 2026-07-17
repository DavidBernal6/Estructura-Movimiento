/*=========================================================
    ABOUT CONTROLLER
    Archivo: js/about.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada
    - Reveal de contenido
    - Aparición de tarjetas
    - Preparación GSAP
=========================================================*/


function initAboutAnimation(){


    const about =
        document.getElementById("about");


    if(!about)
        return;



    // Evitar doble inicialización

    if(about.dataset.loaded){

        return;

    }


    about.dataset.loaded = true;




    /*=====================================================
        ELEMENTOS
    =====================================================*/


    const label =
        document.getElementById(
            "about-label"
        );


    const title =
        document.getElementById(
            "about-title"
        );


    const description =
        document.getElementById(
            "about-description"
        );


    const image =
        document.getElementById(
            "about-image"
        );


    const card =
        document.getElementById(
            "about-card"
        );


    const features =
        document.querySelectorAll(
            "#about-card .flex.items-start"
        );



    const stats =
        document.querySelectorAll(
            "#about .group"
        );





    /*=====================================================
        VALIDAR GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){

        console.warn(
            "GSAP no está cargado para About"
        );

        return;

    }






    /*=====================================================
        ESTADOS INICIALES
    =====================================================*/


    gsap.set(
        [
            label,
            title,
            description
        ],
        {

            opacity:0,
            y:60

        }
    );



    gsap.set(
        image,
        {

            opacity:0,
            x:-80,
            scale:.9

        }
    );



    gsap.set(
        card,
        {

            opacity:0,
            x:80,
            scale:.95

        }
    );



    gsap.set(
        features,
        {

            opacity:0,
            y:30

        }
    );



    gsap.set(
        stats,
        {

            opacity:0,
            y:40

        }
    );






    /*=====================================================
        INTRO TIMELINE
    =====================================================*/


    const timeline =
        gsap.timeline({

            defaults:{

                ease:"power4.out"

            }

        });





    timeline


    .to(
        label,
        {

            opacity:1,
            y:0,
            duration:.8

        }
    )


    .to(
        title,
        {

            opacity:1,
            y:0,
            duration:1

        },
        "-=.5"

    )


    .to(
        description,
        {

            opacity:1,
            y:0,
            duration:.8

        },
        "-=.6"

    )



    .to(
        image,
        {

            opacity:1,
            x:0,
            scale:1,
            duration:1.2,
            ease:"expo.out"

        },
        "-=.5"

    )



    .to(
        card,
        {

            opacity:1,
            x:0,
            scale:1,
            duration:1.1,
            ease:"expo.out"

        },
        "-=.8"

    )



    .to(
        features,
        {

            opacity:1,
            y:0,
            stagger:.15,
            duration:.6

        },
        "-=.5"

    );




    /*=====================================================
        STATS ENTRANCE
    =====================================================*/


    gsap.to(
        stats,
        {

            opacity:1,
            y:0,
            stagger:.2,
            duration:.8,
            delay:1.2,
            ease:"power3.out"

        }
    );



}
/*=========================================================
    ABOUT CONTROLLER
    Archivo: js/about.js
    Entrega: 2/3

    Funciones:
    - Scroll animations
    - Parallax visual
    - Hover interactions
    - Microinteracciones UI
=========================================================*/



/*=========================================================
        SCROLL REVEAL
=========================================================*/


function initAboutScroll(){


    if(typeof ScrollTrigger === "undefined")
        return;



    const elements =
        document.querySelectorAll(
            "#about .about-scroll"
        );



    elements.forEach(
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

                    y:60,

                    duration:1,

                    ease:"power3.out"


                }
            );


        }
    );


}





/*=========================================================
        CARD HOVER EFFECT
=========================================================*/


function initAboutCardHover(){



    const card =
        document.getElementById(
            "about-card"
        );



    if(!card)
        return;




    card.addEventListener(
        "mouseenter",
        ()=>{


            gsap.to(
                card,
                {

                    y:-10,

                    duration:.4,

                    ease:"power3.out"

                }
            );


        }
    );





    card.addEventListener(
        "mouseleave",
        ()=>{


            gsap.to(
                card,
                {

                    y:0,

                    duration:.4,

                    ease:"power3.out"

                }
            );


        }
    );



}





/*=========================================================
        FEATURE ITEMS INTERACTION
=========================================================*/


function initAboutFeatures(){



    const features =
        document.querySelectorAll(
            "#about-card .flex.items-start"
        );



    features.forEach(
        feature=>{


            feature.addEventListener(
                "mouseenter",
                ()=>{


                    gsap.to(
                        feature.querySelector("div:first-child"),
                        {

                            rotation:45,

                            scale:1.1,

                            duration:.3,

                            ease:"power2.out"

                        }
                    );


                }
            );



            feature.addEventListener(
                "mouseleave",
                ()=>{


                    gsap.to(
                        feature.querySelector("div:first-child"),
                        {

                            rotation:0,

                            scale:1,

                            duration:.3,

                            ease:"power2.out"

                        }
                    );


                }
            );



        }
    );


}





/*=========================================================
        IMAGE PARALLAX
=========================================================*/


function initAboutParallax(){



    const image =
        document.getElementById(
            "about-image"
        );



    if(!image)
        return;




    window.addEventListener(
        "mousemove",
        (event)=>{


            const x =
                (
                    event.clientX /
                    window.innerWidth
                ) - .5;



            const y =
                (
                    event.clientY /
                    window.innerHeight
                ) - .5;




            gsap.to(
                image,
                {

                    x:x * 20,

                    y:y * 20,

                    duration:1,

                    ease:"power3.out"

                }
            );



        }
    );


}






/*=========================================================
        FLOATING DECORATIONS
=========================================================*/


function initAboutDecorations(){



    const decorations =
        document.querySelectorAll(
            "#about .rotate-45"
        );



    if(!decorations.length)
        return;




    decorations.forEach(
        item=>{


            gsap.to(
                item,
                {


                    y:-15,

                    rotation:"+=15",

                    duration:4,

                    repeat:-1,

                    yoyo:true,

                    ease:"sine.inOut"


                }
            );



        }
    );


}






/*=========================================================
        NUMBER COUNTER EFFECT
=========================================================*/


function initAboutCounters(){



    const counters =
        document.querySelectorAll(
            "#about h4"
        );



    counters.forEach(
        counter=>{


            const value =
                counter.innerText;



            counter.dataset.value =
                value;



            counter.addEventListener(
                "mouseenter",
                ()=>{


                    gsap.to(
                        counter,
                        {

                            scale:1.08,

                            duration:.3,

                            ease:"back.out"

                        }
                    );


                }
            );



            counter.addEventListener(
                "mouseleave",
                ()=>{


                    gsap.to(
                        counter,
                        {

                            scale:1,

                            duration:.3

                        }
                    );


                }
            );


        }
    );


}
/*=========================================================
    ABOUT CONTROLLER
    Archivo: js/about.js
    Entrega: 3/3

    Funciones:
    - Responsive handling
    - Performance
    - Resize optimization
    - Inicializador final
=========================================================*/





/*=========================================================
        RESPONSIVE OPTIMIZATION
=========================================================*/


function initAboutResponsive(){



    const mediaQuery =
        window.matchMedia(
            "(max-width:768px)"
        );



    function updateAboutMode(event){



        const image =
            document.getElementById(
                "about-image"
            );



        const card =
            document.getElementById(
                "about-card"
            );



        if(!image || !card)
            return;




        if(event.matches){



            // MOBILE MODE


            gsap.set(
                image,
                {

                    x:0,

                    y:0,

                    scale:1

                }
            );



            gsap.set(
                card,
                {

                    x:0,

                    y:0

                }
            );



        }else{



            // DESKTOP MODE


            gsap.set(
                image,
                {

                    x:0,

                    y:0

                }
            );



        }



    }





    updateAboutMode(
        mediaQuery
    );




    mediaQuery.addEventListener(
        "change",
        updateAboutMode
    );



}







/*=========================================================
        RESIZE OPTIMIZATION
=========================================================*/


function initAboutResize(){



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
        PERFORMANCE
=========================================================*/


function initAboutPerformance(){



    const images =
        document.querySelectorAll(
            "#about img"
        );



    images.forEach(
        img=>{


            img.loading =
                "lazy";


            img.decoding =
                "async";


        }
    );



}








/*=========================================================
        MASTER INITIALIZER

        Ejecutado desde main.js

=========================================================*/


export function initAbout(){



    const about =
        document.getElementById(
            "about"
        );



    if(!about)
        return;




    // Evita doble ejecución

    if(
        about.dataset.loaded
    ){

        return;

    }



    about.dataset.loaded =
        true;





    /*

        Animación principal

        Archivo 1/3

    */


    initAboutAnimation();





    /*

        Interacciones

        Archivo 2/3

    */


    initAboutScroll();


    initAboutCardHover();


    initAboutFeatures();


    initAboutParallax();


    initAboutDecorations();


    initAboutCounters();





    /*

        Optimización

        Archivo 3/3

    */


    initAboutResponsive();


    initAboutResize();


    initAboutPerformance();



}








/*=========================================================
        AUTO START

        Permite ejecutar el archivo
        directamente si es necesario

=========================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        if(
            document.getElementById(
                "about"
            )
        ){

            initAbout();

        }


    }
);