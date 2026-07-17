/*=========================================================
    AGENDA CONTROLLER
    Archivo: js/agenda.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada
    - Timeline reveal
    - Selector de días
    - Hover interactions
    - Movimiento constructivista
=========================================================*/



export function initAgenda(){


    const section =
        document.getElementById("agenda");



    if(!section)
        return;




    /*=====================================================
        VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){


        console.warn(
            "GSAP no está cargado para Agenda"
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
            "agenda-header"
        );


    const days =
        document.getElementById(
            "agenda-days"
        );


    const dayButtons =
        document.querySelectorAll(
            ".agenda-day"
        );



    const items =
        document.querySelectorAll(
            ".agenda-item"
        );



    const cards =
        document.querySelectorAll(
            ".agenda-card"
        );



    const cta =
        document.getElementById(
            "agenda-cta"
        );




    /*=====================================================
            ESTADOS INICIALES
    =====================================================*/


    gsap.set(
        [
            header,
            days,
            cta
        ],
        {

            opacity:0,

            y:60

        }
    );



    gsap.set(
        items,
        {

            opacity:0,

            x:-80

        }
    );



    gsap.set(
        cards,
        {

            scale:.95

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
            DAYS SELECTOR ANIMATION
    =====================================================*/


    gsap.to(
        days,
        {


            scrollTrigger:{


                trigger:"#agenda-days",

                start:"top 85%",


                toggleActions:
                "play none none reverse"


            },


            opacity:1,

            y:0,

            duration:.8,

            ease:"power3.out"


        }
    );





    /*=====================================================
            TIMELINE REVEAL
    =====================================================*/


    items.forEach(
        (item,index)=>{


            gsap.to(
                item,
                {


                    scrollTrigger:{


                        trigger:item,


                        start:"top 80%",


                        toggleActions:
                        "play none none reverse"


                    },


                    opacity:1,


                    x:0,


                    duration:1,


                    delay:index*.1,


                    ease:"power4.out"



                }
            );



        }
    );





    /*=====================================================
            CARDS SCALE EFFECT
    =====================================================*/


    cards.forEach(
        card=>{


            gsap.to(
                card,
                {


                    scrollTrigger:{


                        trigger:card,


                        start:"top 85%",


                        toggleActions:
                        "play none none reverse"


                    },


                    scale:1,


                    duration:.8,


                    ease:"back.out(1.5)"



                }
            );


        }
    );





    /*=====================================================
            CTA FINAL REVEAL
    =====================================================*/


    gsap.to(
        cta,
        {


            scrollTrigger:{


                trigger:cta,


                start:"top 85%",


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
            DAY BUTTON INTERACTION
    =====================================================*/


    dayButtons.forEach(
        button=>{


            button.addEventListener(
                "click",
                ()=>{


                    dayButtons.forEach(
                        btn=>{


                            btn.classList.remove(
                                "active"
                            );


                            btn.classList.remove(
                                "bg-[#D72638]"
                            );


                            btn.classList.remove(
                                "text-white"
                            );


                        }
                    );



                    button.classList.add(
                        "active"
                    );


                    button.classList.add(
                        "bg-[#D72638]"
                    );


                    button.classList.add(
                        "text-white"
                    );



                    gsap.fromTo(
                        items,
                        {


                            opacity:.5,

                            y:20


                        },
                        {


                            opacity:1,

                            y:0,

                            duration:.5,

                            stagger:.1


                        }
                    );



                }
            );


        }
    );


}
/*=========================================================
        AGENDA CARD HOVER EFFECTS
=========================================================*/


function initAgendaHover(){


    const cards =
        document.querySelectorAll(
            ".agenda-card"
        );



    if(!cards.length)
        return;




    cards.forEach(
        card=>{


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



                    const title =
                        card.querySelector(
                            "h3"
                        );



                    if(title){


                        gsap.to(
                            title,
                            {


                                x:8,


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



                    const title =
                        card.querySelector(
                            "h3"
                        );



                    if(title){


                        gsap.to(
                            title,
                            {


                                x:0,


                                duration:.3,


                                ease:"power2.out"


                            }
                        );


                    }



                }
            );



        }
    );


}







/*=========================================================
        TIMELINE LINE ANIMATION
=========================================================*/


function initAgendaTimeline(){


    const timeline =
        document.querySelector(
            "#agenda-timeline"
        );



    if(!timeline)
        return;



    const line =
        timeline.querySelector(
            "div.absolute"
        );



    if(!line)
        return;




    gsap.fromTo(
        line,
        {


            scaleY:0,

            transformOrigin:
            "top"


        },
        {


            scrollTrigger:{


                trigger:timeline,


                start:"top 70%",


                end:"bottom 80%",


                scrub:true


            },


            scaleY:1


        }
    );


}








/*=========================================================
        AGENDA BACKGROUND PARALLAX
=========================================================*/


function initAgendaParallax(){



    const shapes =
        document.querySelectorAll(
            "#agenda .absolute"
        );



    if(!shapes.length)
        return;



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
                            (15 + index * 8),



                            y:
                            y *
                            (15 + index * 8),



                            duration:1.2,


                            ease:
                            "power3.out"



                        }
                    );



                }
            );



        }
    );


}








/*=========================================================
        SCROLL COUNTER EFFECT
=========================================================*/


function initAgendaNumbers(){


    const times =
        document.querySelectorAll(
            "#agenda .font-\\['Bebas_Neue'\\]"
        );



    times.forEach(
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


                    scale:.7,


                    duration:.8,


                    ease:
                    "back.out(2)"



                }
            );



        }
    );



}







/*=========================================================
        MOBILE OPTIMIZATION
=========================================================*/


function initAgendaResponsive(){



    const media =
        window.matchMedia(
            "(max-width:768px)"
        );



    function updateMode(event){



        const cards =
            document.querySelectorAll(
                ".agenda-card"
            );



        if(event.matches){



            gsap.set(
                cards,
                {


                    clearProps:
                    "scale"


                }
            );



        }



    }




    updateMode(media);



    media.addEventListener(
        "change",
        updateMode
    );



}








/*=========================================================
        RESIZE HANDLER
=========================================================*/


function initAgendaResize(){



    let timer;



    window.addEventListener(
        "resize",
        ()=>{



            clearTimeout(
                timer
            );



            timer =
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
        AGENDA PERFORMANCE MODE
=========================================================*/


function initAgendaPerformance(){



    const images =
        document.querySelectorAll(
            "#agenda img"
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
        ACTIVE DAY INDICATOR
=========================================================*/


function initAgendaDayIndicator(){



    const buttons =
        document.querySelectorAll(
            ".agenda-day"
        );



    if(!buttons.length)
        return;



    buttons.forEach(
        (button,index)=>{



            button.dataset.day =
            index + 1;



        }
    );



}








/*=========================================================
        SMOOTH REVEAL WHEN ENTERING SECTION
=========================================================*/


function initAgendaSectionReveal(){



    const section =
        document.getElementById(
            "agenda"
        );



    if(!section)
        return;



    gsap.from(
        section,
        {


            scrollTrigger:{


                trigger:section,


                start:"top 90%",


                toggleActions:
                "play none none reverse"


            },


            opacity:0.7,


            duration:1,


            ease:
            "power2.out"



        }
    );



}








/*=========================================================
        CLEANUP SCROLL TRIGGER
=========================================================*/


function refreshAgendaScroll(){



    if(
        typeof ScrollTrigger !== "undefined"
    ){


        ScrollTrigger.refresh();


    }


}








/*=========================================================
        MASTER INITIALIZER
=========================================================*/


export function initAgendaInteractions(){



    initAgendaHover();


    initAgendaTimeline();


    initAgendaParallax();


    initAgendaNumbers();


    initAgendaResponsive();


    initAgendaResize();


    initAgendaPerformance();


    initAgendaDayIndicator();


    initAgendaSectionReveal();



}








/*=========================================================
        MAIN INIT CONTROLLER

        Método llamado desde main.js

=========================================================*/


export function startAgenda(){



    const agenda =
        document.getElementById(
            "agenda"
        );



    if(!agenda)
        return;




    // Evitar doble ejecución

    if(
        agenda.dataset.loaded
    ){

        return;

    }



    agenda.dataset.loaded =
    true;





    initAgenda();


    initAgendaInteractions();



    setTimeout(
        ()=>{


            refreshAgendaScroll();



        },
        500
    );



}








/*=========================================================
        AUTO START

        Permite ejecutar agenda.js
        directamente si se carga solo

=========================================================*/


document.addEventListener(
    "DOMContentLoaded",
    ()=>{



        if(
            document.getElementById(
                "agenda"
            )
        ){


            startAgenda();



        }



    }
);