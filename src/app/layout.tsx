import type { Metadata } from 'next'
import { Inter,Open_Sans,Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import NavbarFB from '@/components/navbar/navbar'
import FooterFB from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['400','700'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})
const openSans = Open_Sans({
  weight: ['400','700'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'swap'
})
const montserrat = Montserrat({
  weight: ['400','700'],
  style: ['italic','normal'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})
export const metadata: Metadata = {
  title: 'EMCO Mineral',
  description: 'Somos una empresa peruana dedicada a brindar servicios integrales para la actividad minera, industrial y construcción.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
{/*  */}
      <body>
        <NavbarFB/>
        {children}
        {/* <FooterFB/> */}
        </body>
    </html>
  )
}
