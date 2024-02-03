"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { text } from "stream/consumers";

const NavbarCustomTheme = {
  root: {
    base: "fixed top-0 z-50 w-full px-5 py-2.5 sm:px-4 ",
  },
  link: {
    base: "block py-8 md:py-2 pr-4 pl-3 text-3xl md:p-0 md:text-base",

    active: {
      on: "text-white md:bg-transparent md:hover:underline underline",
      off: "text-white md:border-0  hover:underline",
    },
    disabled: {
      on: "text-white hover:cursor-not-allowed",
      off: "",
    },
  },
  collapse: {
    base: "w-full md:block md:w-auto h-screen md:h-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium text-center",
    hidden: {
      on: "",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden",
    icon: "h-8 w-8 shrink-0",
  },
};
export default function NavbarFB() {
  const [navColor, setnavColor] = useState("bg-transparent");
  const [navColorText, setnavColorText] = useState("text-white");
  const [logoURL, setLogoURL] = useState("/images/logoEmco.png");
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const esPaginaContacto =
    pathname === "/contactanos" || pathname === "/servicios";

  const listenScrollEvent = () => {
    const scrolled = typeof window !== "undefined" && window.scrollY > 200;

    // console.log(window.scrollY, "/", scrolled, '/',esPaginaContacto);

    setnavColor(scrolled ? "bg-white" : "bg-transparent");
    setnavColorText(scrolled ? "text-black" : "text-white");
    setLogoURL(scrolled ? "/images/logoEmcoNegro.png" : "/images/logoEmco.png");
  };

  useEffect(() => {
    // console.log(!esPaginaContacto, "/", pathname);

    if (typeof window !== "undefined" && !esPaginaContacto) {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, [esPaginaContacto, pathname]);

  useEffect(() => {
    if (esPaginaContacto) {
      setLogoURL("/images/logoEmcoNegro.png");
      setnavColor("bg-white");
      setnavColorText("text-black");
    } else {
      setnavColorText("text-white");
      setnavColor("bg-transparent");
      setLogoURL("/images/logoEmco.png");
    }
  }, [pathname, esPaginaContacto]);

  const handleClic = () => {
    const windowWidth = window.innerWidth;
    const isMobileScreen = windowWidth <= 767; 
    if (!isMobileScreen) {
      return
    }
    setMenuOpen(!menuOpen);
    
    if(!menuOpen) {
      setnavColor('bg-black')
      setnavColorText('text-white')
      setLogoURL("/images/logoEmco.png");
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
      if (esPaginaContacto) {
        setLogoURL("/images/logoEmcoNegro.png");
        setnavColor("bg-white");
        setnavColorText("text-black");
      } else {
        setnavColorText("text-white");
        setnavColor("bg-transparent");
        setLogoURL("/images/logoEmco.png");
      }
    }
  };

  return (
    <Navbar theme={NavbarCustomTheme} className={`bg-black ${navColor} `}>
      <Navbar.Brand as={Link} href="/">
        <img
          src={logoURL}
          className="mr-3 h-14 sm:h-16 lg:h-20"
          alt="EMCO mineral Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className={`${navColorText}`} onClick={handleClic} />
      <Navbar.Collapse className={`${menuOpen ? "" : "hidden"}`}>
        <Navbar.Link
          as={Link}
          href="/"
          active={pathname === "/"}
          className={`${navColorText}`}
          onClick={handleClic}
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/nosotros"
          active={pathname === "/nosotros"}
          className={`${navColorText}`}
          onClick={handleClic}
        >
          Nosotros
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/servicios"
          active={pathname === "/servicios"}
          className={`${navColorText}`}
          onClick={handleClic}
        >
          Servicios
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/contactanos"
          active={pathname === "/contactanos"}
          className={`${navColorText}`}
          onClick={handleClic}
        >
          Contáctenos
        </Navbar.Link>
        <Navbar.Link
          href="/trabaja-con-nosotros"
          active={pathname === "/trabaja-con-nosotros"}
          className={`${navColorText}`}
          onClick={handleClic}
        >
          Trabaja con Nosotros
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
