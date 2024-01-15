import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeButton from '@/components/ThemeButton'
import DropDownButton from '@/components/DropDownButton'
import SearchButton from '@/components/SearchButton'
import NextTopLoader from 'nextjs-toploader';
import {NextAuthProvider} from './AuthProvider'
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
      <NextTopLoader />
      <Header/>
      <SearchButton/>
    <ThemeButton/>
    <DropDownButton/>
      {children}
      <Footer/>
      </NextAuthProvider>
    </Providers>
      </body>

    </html>
  )
}
