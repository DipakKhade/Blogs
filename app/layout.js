import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';
import {NextAuthProvider} from './AuthProvider'
import Header from '@/components/Header';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Dipak Khade | Blog',
  description: 'Blog website about the coding and tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
     

      <Providers>
      <NextAuthProvider>
      <NextTopLoader/>
      <Header/>

   
      {children}
      <Footer/>
      </NextAuthProvider>
    </Providers>
      
      </body>

    </html>
  )
}
