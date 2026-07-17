 /*=========================================================
    REGISTER CONTROLLER

    Archivo:
    js/register.js

    Proyecto:
    Estructura & Movimiento

    Funciones:
    - Animación de entrada
    - Reveal del formulario
    - Interacciones del registro
    - Validación visual
    - Efectos constructivistas
=========================================================*/


export function initRegister(){



    const section =
        document.getElementById("register");



    if(!section) return;




    /*=====================================================
            VALIDACIÓN GSAP
    =====================================================*/


    if(typeof gsap === "undefined"){

        console.warn(
            "GSAP no está cargado para Register"
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
        section.querySelector(
            "#register-header"
        );


    const info =
        section.querySelector(
            "#register-info"
        );


    const form =
        section.querySelector(
            "#register-form"
        );


    const formElement =
        section.querySelector(
            "#event-form"
        );






    /*=====================================================
            ESTADO INICIAL
    =====================================================*/


    gsap.set(
        header,
        {

            opacity:0,

            y:70

        }
    );



    gsap.set(
        info,
        {

            opacity:0,

            x:-80

        }
    );



    gsap.set(
        form,
        {

            opacity:0,

            x:80

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
            INFO ANIMATION
    =====================================================*/


    gsap.to(
        info,
        {


            scrollTrigger:{


                trigger:"#register-info",

                start:"top 80%",


                toggleActions:
                "play none none reverse"


            },


            opacity:1,

            x:0,


            duration:1,


            ease:"power3.out"


        }
    );





    /*=====================================================
            FORM ANIMATION
    =====================================================*/


    gsap.to(
        form,
        {


            scrollTrigger:{


                trigger:"#register-form",

                start:"top 80%",


                toggleActions:
                "play none none reverse"


            },


            opacity:1,

            x:0,


            duration:1,


            delay:.15,


            ease:"power3.out"


        }
    );

/*=====================================================
        INPUT INTERACTIONS
=====================================================*/


const inputs =
    section.querySelectorAll(
        "input"
    );



inputs.forEach(input=>{


    input.addEventListener(
        "focus",
        ()=>{


            gsap.to(
                input,
                {

                    scaleX:1.02,

                    duration:.3,

                    ease:"power2.out"

                }
            );


        }
    );




    input.addEventListener(
        "blur",
        ()=>{


            gsap.to(
                input,
                {

                    scaleX:1,

                    duration:.3,

                    ease:"power2.out"

                }
            );


        }
    );



});






/*=====================================================
        FORM SUBMIT
=====================================================*/


if(formElement){


    formElement.addEventListener(
        "submit",
        (event)=>{


            event.preventDefault();



            const button =
                formElement.querySelector(
                    "button"
                );



            if(!button) return;




            /*
                Estado enviado
            */


            button.innerHTML =
            `
                Registro enviado
            `;



            button.classList.add(
                "bg-green-600"
            );



            button.classList.remove(
                "bg-[#D72638]"
            );





            gsap.fromTo(
                button,
                {

                    scale:.9

                },
                {

                    scale:1,

                    duration:.5,

                    ease:"back.out(2)"

                }
            );






            /*
                Reset visual después
            */


            setTimeout(()=>{


                button.innerHTML =
                `
                    Confirmar registro
                `;



                button.classList.remove(
                    "bg-green-600"
                );



                button.classList.add(
                    "bg-[#D72638]"
                );



            },4000);



        }
    );


}







/*=====================================================
        BUTTON HOVER EFFECT
=====================================================*/


const registerButton =
    section.querySelector(
        "button[type='submit']"
    );



if(registerButton){


    registerButton.addEventListener(
        "mouseenter",
        ()=>{


            gsap.to(
                registerButton,
                {

                    letterSpacing:
                    "0.35em",

                    duration:.3,

                    ease:"power2.out"

                }
            );


        }
    );





    registerButton.addEventListener(
        "mouseleave",
        ()=>{


            gsap.to(
                registerButton,
                {

                    letterSpacing:
                    "0.25em",

                    duration:.3,

                    ease:"power2.out"

                }
            );


        }
    );


}







/*=====================================================
        BACKGROUND PARALLAX
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
                        (15 + index * 15),



                        y:
                        y *
                        (15 + index * 15),



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


function registerResponsive(){


    if(window.innerWidth < 768){


        gsap.set(
            info,
            {

                clearProps:
                "transform"

            }
        );



        gsap.set(
            form,
            {

                clearProps:
                "transform"

            }
        );



    }


}




registerResponsive();



window.addEventListener(
    "resize",
    registerResponsive
);






/*=====================================================
        SCROLLTRIGGER REFRESH
=====================================================*/


window.addEventListener(
    "load",
    ()=>{


        if(
            typeof ScrollTrigger !== "undefined"
        ){


            ScrollTrigger.refresh();


        }


    }
);






/*=====================================================
        ENTRANCE MICRO ANIMATION
=====================================================*/


const numbers =
    section.querySelectorAll(
        "#register-info .bg-\\[\\#D72638\\]"
    );



numbers.forEach(
    number=>{


        gsap.fromTo(
            number,
            {

                rotate:45,

                scale:.6,

                opacity:0

            },
            {

                rotate:0,

                scale:1,

                opacity:1,

                duration:.8,

                ease:"back.out(1.7)",


                scrollTrigger:{


                    trigger:number,

                    start:"top 85%",


                    toggleActions:
                    "play none none reverse"


                }


            }
        );


    }
);






/*=====================================================
        CLEAN FORM STATE
=====================================================*/


if(formElement){


    formElement.reset();



}






/*=====================================================
        FINAL REGISTER READY
=====================================================*/


console.log(
    "Register section inicializada correctamente"
);



}

