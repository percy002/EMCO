
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const NavbarCustomTheme =  {  
  "root": {
    "base": "bg-transparent fixed top-0 z-50 w-full px-5 py-2.5 sm:px-4 ",
  },
  "link":{
    "base": "block py-2 pr-4 pl-3 md:p-0 text-md",  // Ajusta el tamaño del texto aquí

    "active": {
      "on": "text-white md:bg-transparent md:text-white md:hover:underline underline",
      "off": "text-white md:border-0  hover:underline"
    },
    "disabled": {
      "on": "text-white hover:cursor-not-allowed",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden",
    "icon": "h-6 w-6 shrink-0"
  }
}
export default function NavbarFB() {
  return (
    <Navbar theme={NavbarCustomTheme}>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/images/logoEmco.png" className="mr-3 h-6 sm:h-16" alt="EMCO mineral Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Nosotros
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Servicios
        </Navbar.Link>
        <Navbar.Link href="#">Contactanos</Navbar.Link>
        <Navbar.Link href="#">Trabaja con Nosotros</Navbar.Link>
        <Navbar.Link href="#">Intranet</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
