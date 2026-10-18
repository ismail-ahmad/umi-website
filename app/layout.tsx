import '@/app/globals.css';
import { Metadata } from "next";
import Header from '@/components/header';
import Footer from '@/components/footer';
import {Space_Grotesk, Inter, Space_Mono} from 'next/font/google';

const spacegrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--spacegrotesk'
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500','600','700', '800', '900'],
  variable: '--inter'
});
const spacemono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--spacemono'
});

//Following will need work
export const metadata: Metadata = {
  title: 'UMI Consultants',
  description: 'Right Desicion, Your Right!'
}

export default function RootLayout({children}: {children: React.ReactNode}){
return(
  <html lang="en" className={`${spacegrotesk.variable} ${inter.variable} ${spacemono.variable}`}>
  <body>
    <Header />
    <main className='main'>
      {children}
    </main>
    <Footer />
  </body>
  </html>
);
}