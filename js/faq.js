/*=========================================================
    FAQ CONTROLLER
    Archivo: js/faq.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada
    - Acordeón interactivo
    - Rotación de iconos
    - Movimiento constructivista
    - Preparación GSAP ScrollTrigger
=========================================================*/


export function initFaq(){



    /*=====================================================
            VALIDACIÓN DE SECCIÓN
    =====================================================*/


    const section =
        document.getElementById("faq");


    if(!section) return;





    /*=====================================================
            VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){

        console.warn(
            "GSAP no está cargado para FAQ"
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
            "faq-header"
        );



    const items =
        section.querySelectorAll(
            ".faq-item"
        );



    const questions =
        section.querySelectorAll(
            ".faq-question"
        );



    const answers =
        section.querySelectorAll(
            ".faq-answer"
        );



    const icons =
        section.querySelectorAll(
            ".faq-icon"
        );






    /*=====================================================
            ESTADO INICIAL
    =====================================================*/


    if(header){

        gsap.set(
            header,
            {

                opacity:0,

                y:60

            }
        );

    }




    gsap.set(
        items,
        {

            opacity:0,

            y:50

        }
    );

        /*=====================================================
            HEADER REVEAL
    =====================================================*/


    if(header){


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


    }







    /*=====================================================
            FAQ ITEMS REVEAL
    =====================================================*/


    gsap.to(
        items,
        {


            scrollTrigger:{


                trigger:"#faq-container",


                start:"top 80%",


                toggleActions:
                "play none none reverse"



            },


            opacity:1,


            y:0,


            duration:.8,


            stagger:.12,


            ease:"power3.out"



        }
    );









    /*=====================================================
            ACCORDION SYSTEM
    =====================================================*/


    questions.forEach(
        (question,index)=>{


            question.addEventListener(
                "click",
                ()=>{



                    const answer =
                        answers[index];



                    const icon =
                        icons[index];



                    const isOpen =
                        answer.style.maxHeight;





                    // Cerrar todos los demás


                    answers.forEach(
                        (item)=>{


                            item.style.maxHeight =
                                null;


                        }
                    );



                    icons.forEach(
                        (item)=>{


                            item.style.transform =
                                "rotate(0deg)";


                        }
                    );






                    // Abrir seleccionado


                    if(!isOpen){


                        answer.style.maxHeight =
                            answer.scrollHeight +
                            "px";



                        if(icon){


                            icon.style.transform =
                                "rotate(45deg)";


                        }



                    }



                }
            );



        }
    );








    /*=====================================================
            HOVER EFFECTS
    =====================================================*/


    items.forEach(
        item=>{


            item.addEventListener(
                "mouseenter",
                ()=>{


                    gsap.to(
                        item,
                        {


                            x:8,


                            duration:.3,


                            ease:"power3.out"



                        }
                    );


                }
            );





            item.addEventListener(
                "mouseleave",
                ()=>{


                    gsap.to(
                        item,
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
            BACKGROUND MOVEMENT
    =====================================================*/


    const shapes =
        section.querySelectorAll(
            ".absolute"
        );



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
                            (15 + index * 10),



                            y:
                            y *
                            (15 + index * 10),



                            duration:1.2,


                            ease:"power3.out"



                        }
                    );



                }
            );



        }
    );









    /*=====================================================
            FAQ OPEN DEFAULT
            Primer elemento destacado
    =====================================================*/


    if(answers.length > 0){


        setTimeout(()=>{


            answers[0].style.maxHeight =
                answers[0].scrollHeight +
                "px";



            if(icons[0]){


                icons[0].style.transform =
                    "rotate(45deg)";


            }



        },800);


    }









    /*=====================================================
            MOBILE OPTIMIZATION
    =====================================================*/


    function faqResponsive(){



        if(window.innerWidth < 768){



            items.forEach(
                item=>{


                    gsap.set(
                        item,
                        {

                            clearProps:
                            "x"

                        }
                    );


                }
            );



        }



    }






    faqResponsive();




    window.addEventListener(
        "resize",
        faqResponsive
    );






    /*=====================================================
            REFRESH SCROLLTRIGGER
    =====================================================*/


    if(typeof ScrollTrigger !== "undefined"){


        ScrollTrigger.refresh();


    }





}