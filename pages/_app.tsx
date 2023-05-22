import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <MainNavbar />
    <Component {...pageProps} />
    <Footer />
    <Analytics />
    </>
  );
}
