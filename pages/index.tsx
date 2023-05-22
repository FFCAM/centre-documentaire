import Head from 'next/head'
import { Inter } from '@next/font/google'
import Searchbox from '../components/Searchbox';
import Results from '../components/Results';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Head>
        <title>Centre National de Documentation de la FFCAM - Centre Lucien Devies</title>
        <meta name="description" content="Catalogue du Centre National de Documentation de la FFCAM - Centre Lucien Devies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className="py-8 px-4 container mx-auto">
          <Searchbox onQuery={setQuery} />
          {/* <Image
            className={styles.logo}
            src="/images/logo.png"
            alt="Centre National de Documentation FFCAM"
            width={1024}
            height={1024}
            priority
          /> */}

          <Results query={query} />
          
      </main>
    </>
  )
}
