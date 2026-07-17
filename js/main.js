import { initHeader } from "./header.js";
import { initHero } from "./hero.js";
import { initAbout } from "./about.js";
import { initTopics } from "./topics.js";
import { initSpeakers } from "./speakers.js";
import { initAgenda } from "./agenda.js";
import { initGallery } from "./gallery.js";
import { initRegister } from "./register.js";
import { initFaq } from "./faq.js";
import { initFooter } from "./footer.js";


/*=========================================================
    COMPONENT LOADER
=========================================================*/


async function loadComponent(id, file) {


    const container =
        document.getElementById(id);



    if (!container)
        return;



    try {


        const response =
            await fetch(file);



        if (!response.ok) {

            console.error(
                "Error cargando componente:",
                file
            );

            return;

        }



        const html =
            await response.text();



        container.innerHTML =
            html;



    } catch (error) {


        console.error(
            "Error:",
            error
        );


    }



}






/*=========================================================
    INITIALIZER
=========================================================*/


async function init() {



    /*
        CARGA DE COMPONENTES
    */



    await loadComponent(
        "header-container",
        "components/header.html"
    );



    await loadComponent(
        "hero-container",
        "components/hero.html"
    );



    await loadComponent(
        "about-container",
        "components/about.html"
    );



    await loadComponent(
        "topics-container",
        "components/topics.html"
    );



    await loadComponent(
        "speakers-container",
        "components/speakers.html"
    );



    await loadComponent(
        "agenda-container",
        "components/agenda.html"
    );

    await loadComponent(
        "gallery-container",
        "components/gallery.html"
    );

    await loadComponent(
        "register-container",
        "components/register.html"
    );
    await loadComponent(
        "faq-container",
        "components/faq.html"
    );
    await loadComponent(
    "footer-container",
    "components/footer.html"
    );





    /*
        ICONOS
    */


    if (window.lucide) {

        lucide.createIcons();

    }






    /*
        INICIALIZAR COMPONENTES
    */


    initHeader();


    initHero();


    initAbout();


    initTopics();


    initSpeakers();


    initAgenda();

    initGallery();
    initRegister();
    initFaq();
    initFooter();





    /*
        ACTUALIZAR GSAP
        DESPUÉS DE CARGAR TODO
    */


    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        ScrollTrigger.refresh();

    }



}






/*=========================================================
    START APPLICATION
=========================================================*/


init();