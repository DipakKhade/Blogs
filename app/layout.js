import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeButton from '@/components/ThemeButton'
import DropDownButton from '@/components/DropDownButton'
import NextTopLoader from 'nextjs-toploader';
import {NextAuthProvider} from './AuthProvider'
import SearchButton from '@/components/SearchButton'
import AuthButton from '@/components/AuthButton'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dipak Khade | Blog',
  description: 'Blog website about the coding and tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
      <div className="bg-[#eac6f0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <Providers>
      <NextAuthProvider>
      <NextTopLoader color="#A020F0"/>
      <Header/>
      {/* <div className='-z-50'>
     <div className='md:hidden fixed top-10 left-[28vw] -z-10'> <AuthButton/></div>
     <SearchButton/>
    <ThemeButton/>
    <DropDownButton/>
    </div> */}
      {children}
      <Footer/>
      </NextAuthProvider>
    </Providers>
      </body>

    </html>
  )
}
