/*=========================================================
    FOOTER CONTROLLER
    Archivo: js/footer.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada
    - Reveal de columnas
    - Hover interactions
    - Movimiento constructivista
    - Preparación GSAP ScrollTrigger
=========================================================*/


export function initFooter(){



    /*=====================================================
            VALIDACIÓN DE SECCIÓN
    =====================================================*/


    const footer =
        document.getElementById(
            "footer"
        );



    if(!footer) return;







    /*=====================================================
            VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){


        console.warn(
            "GSAP no está cargado para Footer"
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
            "footer-header"
        );



    const columns =
        footer.querySelectorAll(
            ".footer-column"
        );



    const bottom =
        document.getElementById(
            "footer-bottom"
        );



    const links =
        footer.querySelectorAll(
            ".footer-link"
        );



    const socials =
        footer.querySelectorAll(
            ".footer-social"
        );



    const shapes =
        footer.querySelectorAll(
            ".absolute"
        );









    /*=====================================================
            ESTADO INICIAL
    =====================================================*/


    if(header){


        gsap.set(
            header,
            {

                opacity:0,

                y:70

            }
        );


    }






    gsap.set(
        columns,
        {


            opacity:0,

            y:60


        }
    );





    if(bottom){


        gsap.set(
            bottom,
            {


                opacity:0,

                y:40


            }
        );


    }
        /*=====================================================
            HEADER REVEAL
    =====================================================*/


    if(header){


        gsap.to(
            header,
            {


                scrollTrigger:{


                    trigger:footer,

                    start:"top 80%",


                    toggleActions:
                    "play none none reverse"


                },


                opacity:1,

                y:0,

                duration:1,

                ease:"power4.out"



            }
        );


    }









    /*=====================================================
            COLUMNS REVEAL
    =====================================================*/


    gsap.to(
        columns,
        {


            scrollTrigger:{


                trigger:"#footer-grid",

                start:"top 85%",


                toggleActions:
                "play none none reverse"


            },


            opacity:1,

            y:0,

            duration:.9,

            stagger:.15,

            ease:"power3.out"



        }
    );









    /*=====================================================
            FOOTER BOTTOM REVEAL
    =====================================================*/


    if(bottom){



        gsap.to(
            bottom,
            {


                scrollTrigger:{


                    trigger:bottom,

                    start:"top 95%",


                    toggleActions:
                    "play none none reverse"



                },


                opacity:1,

                y:0,

                duration:.8,

                ease:"power3.out"



            }
        );



    }









    /*=====================================================
            LINK HOVER EFFECTS
    =====================================================*/


    links.forEach(
        link=>{


            link.addEventListener(
                "mouseenter",
                ()=>{


                    gsap.to(
                        link,
                        {


                            x:8,


                            duration:.3,


                            ease:"power3.out"



                        }
                    );


                }
            );





            link.addEventListener(
                "mouseleave",
                ()=>{


                    gsap.to(
                        link,
                        {


                            x:0,


                            duration:.3,


                            ease:"power3.out"



                        }
                    );


                }
            );



        }
    );









    /*=====================================================
            SOCIAL BUTTON ANIMATION
    =====================================================*/


    socials.forEach(
        social=>{


            social.addEventListener(
                "mouseenter",
                ()=>{


                    gsap.to(
                        social,
                        {


                            rotation:8,

                            scale:1.1,


                            duration:.3,


                            ease:"back.out(2)"



                        }
                    );


                }
            );






            social.addEventListener(
                "mouseleave",
                ()=>{


                    gsap.to(
                        social,
                        {


                            rotation:0,

                            scale:1,


                            duration:.3,


                            ease:"power3.out"



                        }
                    );


                }
            );



        }
    );
        /*=====================================================
            BACKGROUND PARALLAX
    =====================================================*/


    window.addEventListener(
        "mousemove",
        (event)=>{


            const x =
                event.clientX /
                window.innerWidth -
                .5;



            const y =
                event.clientY /
                window.innerHeight -
                .5;






            shapes.forEach(
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



                            duration:1.4,



                            ease:"power3.out"



                        }
                    );



                }
            );



        }
    );










    /*=====================================================
            FOOTER LINKS SMOOTH SCROLL
    =====================================================*/


    links.forEach(
        link=>{


            link.addEventListener(
                "click",
                function(e){



                    const href =
                        this.getAttribute(
                            "href"
                        );



                    if(
                        !href ||
                        !href.startsWith("#")
                    )
                    return;





                    const target =
                        document.querySelector(
                            href
                        );



                    if(!target)
                    return;





                    e.preventDefault();




                    target.scrollIntoView(
                        {


                            behavior:"smooth",


                            block:"start"



                        }
                    );



                }
            );



        }
    );









    /*=====================================================
            MOBILE OPTIMIZATION
    =====================================================*/


    function footerResponsive(){



        if(window.innerWidth < 768){



            gsap.set(
                columns,
                {


                    clearProps:
                    "transform"



                }
            );



            gsap.set(
                shapes,
                {


                    clearProps:
                    "transform"



                }
            );



        }



    }






    footerResponsive();




    window.addEventListener(
        "resize",
        footerResponsive
    );









    /*=====================================================
            REFRESH SCROLLTRIGGER
    =====================================================*/


    if(typeof ScrollTrigger !== "undefined"){


        ScrollTrigger.refresh();


    }





}