/*=========================================================
    GALLERY CONTROLLER
    Archivo: js/gallery.js
    Proyecto: Estructura & Movimiento

    Funciones:
    - Animación de entrada GSAP
    - Reveal de galería
    - Hover interactions
    - Lightbox
    - Movimiento constructivista
=========================================================*/


export function initGallery(){



    const section =
        document.getElementById("gallery");



    if(!section) return;




    /*=====================================================
            VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){

        console.warn(
            "GSAP no está cargado para Gallery"
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
            "gallery-header"
        );



    const mainCards =
        section.querySelectorAll(
            ".gallery-card"
        );



    const miniCards =
        section.querySelectorAll(
            ".gallery-mini"
        );



    const cta =
        document.getElementById(
            "gallery-cta"
        );



    const backgroundElements =
        section.querySelectorAll(
            ".absolute"
        );







    /*=====================================================
            ESTADOS INICIALES
    =====================================================*/


    if(header){

        gsap.set(
            header,
            {

                opacity:0,

                y:80

            }
        );

    }



    gsap.set(
        mainCards,
        {

            opacity:0,

            y:100

        }
    );



    gsap.set(
        miniCards,
        {

            opacity:0,

            scale:.85

        }
    );



    if(cta){

        gsap.set(
            cta,
            {

                opacity:0,

                y:100

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


                    trigger:section,


                    start:
                    "top 75%",


                    toggleActions:
                    "play none none reverse"


                },


                opacity:1,


                y:0,


                duration:1,


                ease:
                "power4.out"


            }
        );


    }







    /*=====================================================
            MAIN CARDS REVEAL
    =====================================================*/


    gsap.to(
        mainCards,
        {


            scrollTrigger:{


                trigger:
                "#gallery-grid",


                start:
                "top 80%",


                toggleActions:
                "play none none reverse"


            },



            opacity:1,


            y:0,


            duration:.9,


            stagger:.18,


            ease:
            "back.out(1.5)"



        }
    );







    /*=====================================================
            MINI GALLERY REVEAL
    =====================================================*/


    gsap.to(
        miniCards,
        {


            scrollTrigger:{


                trigger:
                "#gallery-expanded",


                start:
                "top 85%",


                toggleActions:
                "play none none reverse"


            },



            opacity:1,


            scale:1,


            duration:.8,


            stagger:.12,


            ease:
            "power3.out"



        }
    );

    /*=====================================================
            HOVER EFFECTS
    =====================================================*/


    mainCards.forEach(card=>{


        const image =
            card.querySelector("img");



        card.addEventListener(
            "mouseenter",
            ()=>{


                gsap.to(
                    card,
                    {

                        y:-12,

                        duration:.4,

                        ease:
                        "power3.out"

                    }
                );



                if(image){

                    gsap.to(
                        image,
                        {

                            scale:1.08,

                            duration:.8,

                            ease:
                            "power3.out"

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

                        ease:
                        "power3.out"

                    }
                );



                if(image){

                    gsap.to(
                        image,
                        {

                            scale:1,

                            duration:.8,

                            ease:
                            "power3.out"

                        }
                    );

                }



            }
        );



    });








    /*=====================================================
            MINI IMAGE HOVER
    =====================================================*/


    miniCards.forEach(card=>{


        card.addEventListener(
            "mouseenter",
            ()=>{


                gsap.to(
                    card,
                    {


                        y:-8,


                        duration:.35,


                        ease:
                        "power3.out"


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


                        duration:.35,


                        ease:
                        "power3.out"


                    }
                );


            }
        );


    });









    /*=====================================================
            LIGHTBOX
    =====================================================*/


    const modal =
        document.getElementById(
            "gallery-modal"
        );



    const modalImage =
        document.getElementById(
            "gallery-modal-image"
        );



    const closeButton =
        document.getElementById(
            "gallery-close"
        );



    const images =
        section.querySelectorAll(
            ".gallery-card img, .gallery-mini img"
        );







    function openGallery(image){



        if(!modal || !modalImage)
            return;



        modalImage.src =
            image.src;



        modalImage.alt =
            image.alt;



        modal.classList.remove(
            "opacity-0"
        );


        modal.classList.remove(
            "invisible"
        );



        document.body.style.overflow =
            "hidden";



        gsap.fromTo(
            modalImage,
            {


                scale:.7,

                opacity:0


            },
            {


                scale:1,

                opacity:1,

                duration:.5,

                ease:
                "power3.out"


            }
        );



    }







    function closeGallery(){



        if(!modal)
            return;



        gsap.to(
            modalImage,
            {


                scale:.7,

                opacity:0,


                duration:.3,


                ease:
                "power3.in"


            }
        );



        setTimeout(()=>{


            modal.classList.add(
                "opacity-0"
            );


            modal.classList.add(
                "invisible"
            );


            document.body.style.overflow =
                "";



        },300);



    }








    images.forEach(image=>{


        image.style.cursor =
            "pointer";



        image.addEventListener(
            "click",
            ()=>{


                openGallery(
                    image
                );


            }
        );


    });








    if(closeButton){


        closeButton.addEventListener(
            "click",
            closeGallery
        );


    }





    if(modal){


        modal.addEventListener(
            "click",
            (event)=>{


                if(
                    event.target === modal
                ){

                    closeGallery();

                }


            }
        );


    }

        /*=====================================================
            PARALLAX BACKGROUND
    =====================================================*/


    if(backgroundElements.length){


        window.addEventListener(
            "mousemove",
            (event)=>{


                const x =
                event.clientX /
                window.innerWidth - .5;



                const y =
                event.clientY /
                window.innerHeight - .5;



                backgroundElements.forEach(
                    (element,index)=>{


                        gsap.to(
                            element,
                            {

                                x:
                                x *
                                (20 + index * 15),


                                y:
                                y *
                                (20 + index * 15),


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








    /*=====================================================
            CTA REVEAL
    =====================================================*/


    if(cta){


        gsap.to(
            cta,
            {


                scrollTrigger:{


                    trigger:cta,


                    start:
                    "top 80%",


                    toggleActions:
                    "play none none reverse"


                },



                opacity:1,


                y:0,


                duration:1,


                ease:
                "power4.out"



            }
        );


    }









    /*=====================================================
            IMAGE FLOAT EFFECT
    =====================================================*/


    images.forEach(image=>{


        gsap.to(
            image,
            {


                scrollTrigger:{


                    trigger:image,


                    start:
                    "top 90%",


                    end:
                    "bottom 10%",


                    scrub:1


                },


                y:-20,


                ease:
                "none"



            }
        );



    });









    /*=====================================================
            KEYBOARD CONTROLS LIGHTBOX
    =====================================================*/


    document.addEventListener(
        "keydown",
        (event)=>{


            if(event.key === "Escape"){


                closeGallery();


            }


        }
    );









    /*=====================================================
            MOBILE OPTIMIZATION
    =====================================================*/


    function galleryResponsive(){



        if(window.innerWidth < 768){



            gsap.set(
                mainCards,
                {


                    clearProps:
                    "transform"


                }
            );



            gsap.set(
                miniCards,
                {


                    clearProps:
                    "transform"


                }
            );



        }


    }







    galleryResponsive();



    window.addEventListener(
        "resize",
        galleryResponsive
    );









    /*=====================================================
            REFRESH SCROLLTRIGGER
    =====================================================*/


    setTimeout(()=>{


        if(typeof ScrollTrigger !== "undefined"){


            ScrollTrigger.refresh();


        }


    },500);







}

