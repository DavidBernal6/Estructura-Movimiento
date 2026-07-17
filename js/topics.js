/*=========================================================
    TOPICS CONTROLLER
    Archivo: js/topics.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada
    - Hover interactions
    - Cards reveal
    - Movimiento constructivista
=========================================================*/


export function initTopics(){


    const section =
        document.getElementById("topics");


    if(!section) return;



    /*=====================================================
        VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){

        console.warn(
            "GSAP no está cargado para Topics"
        );

        return;

    }



    if(typeof ScrollTrigger !== "undefined"){

        gsap.registerPlugin(ScrollTrigger);

    }




    /*=====================================================
            ELEMENTOS
    =====================================================*/


    const header =
        document.getElementById(
            "topics-header"
        );


    const cards =
        document.querySelectorAll(
            ".topic-card"
        );



    const backgroundShapes =
        section.querySelectorAll(
            ".absolute"
        );





    /*=====================================================
            ESTADO INICIAL
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
            CARDS ANIMATION
    =====================================================*/


    gsap.to(
        cards,
        {


            scrollTrigger:{

                trigger:"#topics-grid",

                start:"top 80%",

                toggleActions:
                "play none none reverse"

            },


            opacity:1,

            y:0,

            duration:.9,

            stagger:.15,

            ease:"back.out(1.4)"


        }
    );







    /*=====================================================
            CARD HOVER EFFECT
    =====================================================*/


    cards.forEach(card=>{


        const number =
            card.querySelector("span");



        card.addEventListener(
            "mouseenter",
            ()=>{


                gsap.to(
                    card,
                    {

                        y:-12,

                        duration:.4,

                        ease:"power3.out"

                    }
                );



                if(number){

                    gsap.to(
                        number,
                        {

                            scale:1.15,

                            duration:.3

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



                if(number){

                    gsap.to(
                        number,
                        {

                            scale:1,

                            duration:.3

                        }
                    );

                }



            }
        );



    });







    /*=====================================================
            BACKGROUND PARALLAX
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





            backgroundShapes.forEach(
                (shape,index)=>{


                    gsap.to(
                        shape,
                        {

                            x:
                            x *
                            (20 + index * 10),


                            y:
                            y *
                            (20 + index * 10),


                            duration:1.2,

                            ease:"power3.out"


                        }
                    );


                }
            );



        }
    );






    /*=====================================================
            MOBILE OPTIMIZATION
    =====================================================*/


    function topicsResponsive(){


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



    topicsResponsive();



    window.addEventListener(
        "resize",
        topicsResponsive
    );



}