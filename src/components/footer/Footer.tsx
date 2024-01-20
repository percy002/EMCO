
'use client';

import { Footer } from 'flowbite-react';

const FooterCustomTheme = {
    root: {
      base: "w-screen rounded-lg bg-transparent flex items-center justify-end fixed bottom-0 z-50 text-black",
    },
    groupLink: {
        "base": "flex flex-wrap text-black",
        "link": {
          "base": "last:mr-0 md:mr-6 me-4 text-black",
          "href": "hover:underline hover:text-black"
        },
        "col": "flex-col space-y-4"
      },
  };

export default function FooterFB() {
  return (
    <Footer container theme={FooterCustomTheme}>
      
      <Footer.LinkGroup>
        <Footer.Link href="#">Noticias</Footer.Link>
        <Footer.Link href="#">Publicaciones</Footer.Link>
        <Footer.Link href="#">Inversionistas</Footer.Link>
        <Footer.Link href="#">Trabaja con Nosotros</Footer.Link>
        <Footer.Link href="#">Privacidad</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
