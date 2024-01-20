"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

const NavbarCustomTheme = {
  root: {
    base: "fixed top-0 z-50 w-full px-5 py-2.5 sm:px-4 ",
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0 sm:text-md",

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
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};
export default function NavbarFB() {
  const [navColor, setnavColor] = useState("bg-transparent");
  const [navColorText, setnavColorText] = useState("text-white");
  const [logoURL, setLogoURL] = useState('/images/logoEmco.png')

  const pathname = usePathname();
  const esPaginaContacto = (pathname === '/contactanos');

  const listenScrollEvent = () => {    
    if ( typeof window !== 'undefined' && window.scrollY > 200 ) {
      setLogoURL('/images/logoEmcoNegro.png');
      setnavColor("bg-white");
      setnavColorText("text-black");

    } else {
      setnavColorText("text-white");
      setnavColor("bg-transparent");    
      setLogoURL('/images/logoEmco.png');  
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined'){

      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, [pathname]);

  useEffect(()=>{
    
    if (esPaginaContacto) {
      setLogoURL('/images/logoEmcoNegro.png');
      setnavColor("bg-white");
      setnavColorText("text-black");

    } else {
      setnavColorText("text-white");
      setnavColor("bg-transparent");  
      setLogoURL('/images/logoEmco.png');    
    }
  },[pathname])


  return (
    <Navbar theme={NavbarCustomTheme} className={`${navColor} `}>
      <Navbar.Brand as={Link} href="/">
        <img
          src={logoURL}
          className="mr-3 h-6 sm:h-16 lg:h-20"
          alt="EMCO mineral Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className={`${navColorText}`}/>
      <Navbar.Collapse className="">
        <Navbar.Link as={Link} href="/" active={pathname === '/'} className={`${navColorText}`}>
          Inicio
        </Navbar.Link>
        <Navbar.Link as={Link} href="/nosotros" active={pathname === '/nosotros'} className={`${navColorText}`}>
          Nosotros
        </Navbar.Link>
        <Navbar.Link as={Link} href="/servicios" active={pathname === '/servicios'} className={`${navColorText}`}>
          Servicios
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contactanos" active={pathname === '/contactanos'} className={`${navColorText}`}>Contáctenos</Navbar.Link>
        <Navbar.Link href="#" className={`${navColorText}`}>Trabaja con Nosotros</Navbar.Link>
        <Navbar.Link href="#" className={`${navColorText}`}>Intranet</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
