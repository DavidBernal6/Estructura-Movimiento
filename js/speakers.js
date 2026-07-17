/*=========================================================
    SPEAKERS CONTROLLER
    Archivo: js/speakers.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada de ponentes
    - Reveal mediante ScrollTrigger
    - Hover interactivo en tarjetas
    - Movimiento constructivista
=========================================================*/


export function initSpeakers(){


    const section =
        document.getElementById("speakers");


    if(!section)
        return;



    /*=====================================================
        VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){

        console.warn(
            "GSAP no está cargado para Speakers"
        );

        return;

    }



    if(typeof ScrollTrigger !== "undefined"){

        gsap.registerPlugin(
            ScrollTrigger
        );

    }




    /*=====================================================
        ELEMENTOS
    =====================================================*/


    const header =
        document.getElementById(
            "speakers-header"
        );


    const cards =
        section.querySelectorAll(
            ".speaker-card"
        );


    const images =
        section.querySelectorAll(
            ".speaker-image"
        );


    const shapes =
        section.querySelectorAll(
            ".speaker-shape"
        );





    /*=====================================================
        ESTADOS INICIALES
    =====================================================*/


    gsap.set(
        header,
        {

            opacity:0,

            y:60

        }
    );



    gsap.set(
        cards,
        {

            opacity:0,

            y:80

        }
    );



    gsap.set(
        shapes,
        {

            opacity:0,

            scale:.8

        }
    );





    /*=====================================================
        HEADER REVEAL
    =====================================================*/


    gsap.to(
        header,
        {


            scrollTrigger:{


                trigger:section,

                start:"top 75%",

                toggleActions:
                "play none none reverse"


            },


            opacity:1,

            y:0,

            duration:1,

            ease:"power4.out"


        }
    );





    /*=====================================================
        CARDS REVEAL
    =====================================================*/


    gsap.to(
        cards,
        {


            scrollTrigger:{


                trigger:section,

                start:"top 70%",


                toggleActions:
                "play none none reverse"


            },


            opacity:1,

            y:0,

            duration:1,


            stagger:.18,


            ease:"back.out(1.5)"


        }
    );





    /*=====================================================
        IMAGES ENTRANCE
    =====================================================*/


    gsap.from(
        images,
        {


            scrollTrigger:{


                trigger:section,


                start:"top 70%",


                toggleActions:
                "play none none reverse"


            },


            scale:1.15,


            duration:1.2,


            stagger:.15,


            ease:"power3.out"


        }
    );


/*=========================================================
        CONTINUACIÓN SPEAKERS CONTROLLER

        - Hover interactions
        - Card effects
        - Image movement
        - Social links animation
=========================================================*/





    /*=====================================================
            CARD HOVER EFFECT
    =====================================================*/


    cards.forEach(card=>{


        const image =
            card.querySelector(
                ".speaker-image"
            );


        const info =
            card.querySelector(
                ".speaker-info"
            );


        const number =
            card.querySelector(
                ".speaker-number"
            );



        card.addEventListener(
            "mouseenter",
            ()=>{


                gsap.to(
                    card,
                    {

                        y:-15,

                        duration:.4,

                        ease:"power3.out"

                    }
                );



                if(image){

                    gsap.to(
                        image,
                        {

                            scale:1.08,

                            duration:.8,

                            ease:"power3.out"

                        }
                    );

                }



                if(number){

                    gsap.to(
                        number,
                        {

                            rotation:10,

                            scale:1.1,

                            duration:.4,

                            ease:"back.out"

                        }
                    );

                }



                if(info){

                    gsap.to(
                        info,
                        {

                            y:-5,

                            duration:.3,

                            ease:"power2.out"

                        }
                    );

                }


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



                if(image){

                    gsap.to(
                        image,
                        {

                            scale:1,

                            duration:.8,

                            ease:"power3.out"

                        }
                    );

                }



                if(number){

                    gsap.to(
                        number,
                        {

                            rotation:0,

                            scale:1,

                            duration:.4,

                            ease:"power2.out"

                        }
                    );

                }



                if(info){

                    gsap.to(
                        info,
                        {

                            y:0,

                            duration:.3,

                            ease:"power2.out"

                        }
                    );

                }



            }
        );



    });







    /*=====================================================
            IMAGE PARALLAX
    =====================================================*/


    cards.forEach(card=>{


        const image =
            card.querySelector(
                ".speaker-image"
            );


        if(!image)
            return;




        card.addEventListener(
            "mousemove",
            (event)=>{


                const rect =
                    card.getBoundingClientRect();



                const x =
                    event.clientX - rect.left;



                const y =
                    event.clientY - rect.top;




                const moveX =
                    (x / rect.width - .5) * 20;



                const moveY =
                    (y / rect.height - .5) * 20;




                gsap.to(
                    image,
                    {

                        x:moveX,

                        y:moveY,

                        duration:.5,

                        ease:"power2.out"


                    }
                );


            }
        );




        card.addEventListener(
            "mouseleave",
            ()=>{


                gsap.to(
                    image,
                    {

                        x:0,

                        y:0,

                        duration:.6,

                        ease:"power3.out"


                    }
                );


            }
        );


    });








    /*=====================================================
            BACKGROUND SHAPES PARALLAX
    =====================================================*/


    window.addEventListener(
        "mousemove",
        (event)=>{


            const x =
            event.clientX /
            window.innerWidth - .5;



            const y =
            event.clientY /
            window.innerHeight - .5;





            shapes.forEach(
                (shape,index)=>{


                    gsap.to(
                        shape,
                        {


                            x:
                            x *
                            (30 + index * 15),



                            y:
                            y *
                            (30 + index * 15),



                            duration:1.2,

                            ease:"power3.out"


                        }
                    );


                }
            );



        }
    );



/*=========================================================
        FINAL SPEAKERS CONTROLLER

        - Responsive optimization
        - Refresh ScrollTrigger
        - Performance
        - Inicialización global
=========================================================*/





    /*=====================================================
            RESPONSIVE OPTIMIZATION
    =====================================================*/


    function speakersResponsive(){


        const cards =
            section.querySelectorAll(
                ".speaker-card"
            );



        if(window.innerWidth < 768){


            gsap.set(
                cards,
                {

                    clearProps:
                    "transform"

                }
            );


        }


    }



    speakersResponsive();



    window.addEventListener(
        "resize",
        ()=>{


            speakersResponsive();



            if(
                typeof ScrollTrigger !== "undefined"
            ){

                ScrollTrigger.refresh();

            }


        }
    );








    /*=====================================================
            LAZY IMAGE OPTIMIZATION
    =====================================================*/


    const speakerImages =
        section.querySelectorAll(
            "img"
        );



    speakerImages.forEach(
        img=>{


            img.loading =
            "lazy";


            img.decoding =
            "async";


        }
    );








    /*=====================================================
            FLOATING DECORATIONS
    =====================================================*/


    shapes.forEach(
        (shape,index)=>{


            gsap.to(
                shape,
                {

                    y:
                    index % 2 === 0
                    ? -20
                    : 20,


                    rotation:
                    index % 2 === 0
                    ? 15
                    : -15,


                    duration:
                    3 + index,


                    repeat:-1,


                    yoyo:true,


                    ease:
                    "sine.inOut"


                }
            );


        }
    );








    /*=====================================================
            CLEANUP PREVENT DOUBLE INIT
    =====================================================*/


    section.dataset.loaded =
    "true";



}








/*=========================================================
    AUTO START OPCIONAL

    Permite cargar speakers.js
    directamente si existe la sección
=========================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        if(
            document.getElementById(
                "speakers"
            )
        ){


            initSpeakers();


        }


    }
);





/*=========================================================
    SPEAKERS CONTROLLER END

    Archivo:
    js/speakers.js

    Incluye:

    ✔ Scroll animations
    ✔ GSAP Reveal
    ✔ Hover premium
    ✔ Image parallax
    ✔ Background motion
    ✔ Responsive
    ✔ Performance
=========================================================*/