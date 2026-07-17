/*=========================================================
    HEADER CONTROLLER
    Archivo: js/header.js
    Proyecto: Estructura & Movimiento
=========================================================*/

export function initHeader() {

    /*=====================================================
        ELEMENTOS
    =====================================================*/

    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");
    const progressBar = document.getElementById("progress-bar");

    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");

    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");

    const desktopLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    const allLinks = [...desktopLinks, ...mobileLinks];

    if (!header) return;

    /*=====================================================
        VARIABLES
    =====================================================*/

    let menuOpen = false;

    /*=====================================================
        ABRIR MENÚ
    =====================================================*/

    function openMenu() {

        menuOpen = true;

        menu.classList.remove("translate-x-full");

        overlay.classList.remove("opacity-0");
        overlay.classList.remove("invisible");

        document.body.style.overflow = "hidden";

        menuToggle.querySelectorAll(".menu-line")[0].style.transform = "rotate(45deg) translateY(8px)";
        menuToggle.querySelectorAll(".menu-line")[1].style.opacity = "0";
        menuToggle.querySelectorAll(".menu-line")[2].style.transform = "rotate(-45deg) translateY(-8px)";
    }

    /*=====================================================
        CERRAR MENÚ
    =====================================================*/

    function closeMobileMenu() {

        menuOpen = false;

        menu.classList.add("translate-x-full");

        overlay.classList.add("opacity-0");

        setTimeout(() => {

            overlay.classList.add("invisible");

        }, 300);

        document.body.style.overflow = "";

        menuToggle.querySelectorAll(".menu-line")[0].style.transform = "";
        menuToggle.querySelectorAll(".menu-line")[1].style.opacity = "";
        menuToggle.querySelectorAll(".menu-line")[2].style.transform = "";

    }

    /*=====================================================
        EVENTOS MENÚ
    =====================================================*/

    menuToggle.addEventListener("click", () => {

        if (menuOpen) {

            closeMobileMenu();

        } else {

            openMenu();

        }

    });

    closeMenu.addEventListener("click", closeMobileMenu);

    overlay.addEventListener("click", closeMobileMenu);

    /*=====================================================
        SCROLL SUAVE
    =====================================================*/

    allLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (!href.startsWith("#")) return;

        const section = document.querySelector(href);

        if (!section) return;

        e.preventDefault();

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Espera un poco antes de cerrar
        setTimeout(() => {
            closeMobileMenu();
        }, 300);

    });

});

    /*=====================================================
        HEADER AL HACER SCROLL
    =====================================================*/

    function updateHeader(){

    if(window.scrollY>50){

        navbar.classList.add("shadow-xl");

    }else{

        navbar.classList.remove("shadow-xl");

    }

}

    /*=====================================================
        BARRA DE PROGRESO
    =====================================================*/

    function updateProgress() {

        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    /*=====================================================
        NAVEGACIÓN ACTIVA
    =====================================================*/

   

    function updateActiveNavigation() {


    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    let current="";


    sections.forEach(section=>{


        const top =
            section.offsetTop - 150;


        const height =
            section.offsetHeight;



        if(
            window.scrollY >= top &&
            window.scrollY < top + height
        ){

            current = section.id;

        }


    });



    desktopLinks.forEach(link=>{


        link.classList.remove(
            "text-[#D72638]"
        );


        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add(
                "text-[#D72638]"
            );

        }


    });



    mobileLinks.forEach(link=>{


        link.classList.remove(
            "bg-[#D72638]",
            "text-white"
        );


        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add(
                "bg-[#D72638]",
                "text-white"
            );

        }


    });


}

    /*=====================================================
        REVEAL DEL HEADER
    =====================================================*/

    if (typeof gsap !== "undefined") {

        gsap.set("#navbar", {
        y: -80,
        opacity: 0
    });

    gsap.to("#navbar", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });

    }

    /*=====================================================
        EVENTOS DE SCROLL
    =====================================================*/

    window.addEventListener("scroll", () => {

        updateHeader();

        updateProgress();

        updateActiveNavigation();

    });

    window.addEventListener("resize", updateActiveNavigation);

    updateHeader();

    updateProgress();

    updateActiveNavigation();

}