"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";

const NavbarCustomTheme = {
  root: {
    base: "fixed top-0 z-50 w-full px-5 py-2.5 sm:px-4 ",
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0 text-md",

    active: {
      on: "text-white md:bg-transparent md:text-white md:hover:underline underline",
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
  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setnavColor("bg-white");
      setnavColorText("md:text-black");
    } else {
      setnavColorText("text-white");
      setnavColor("bg-transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Navbar theme={NavbarCustomTheme} className={`${navColor} `}>
      <Navbar.Brand as={Link} href="/">
        <img
          src="/images/logoEmco.png"
          className="mr-3 h-6 sm:h-16 lg:h-24"
          alt="EMCO mineral Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/" active className={`${navColorText}`}>
          Inicio
        </Navbar.Link>
        <Navbar.Link as={Link} href="/nosotros" className={`${navColorText}`}>
          Nosotros
        </Navbar.Link>
        <Navbar.Link as={Link} href="/servicios" className={`${navColorText}`}>
          Servicios
        </Navbar.Link>
        <Navbar.Link href="#" className={`${navColorText}`}>Contáctenos</Navbar.Link>
        <Navbar.Link href="#" className={`${navColorText}`}>Trabaja con Nosotros</Navbar.Link>
        <Navbar.Link href="#" className={`${navColorText}`}>Intranet</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
