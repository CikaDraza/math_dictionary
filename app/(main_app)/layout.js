import { Roboto } from 'next/font/google'
import '../globals.css'
import { SwitchProvider } from '@/src/components/useSwitcher'
import Header from '@/src/layouts/Header'
import Footer from '@/src/layouts/Footer'

export const metadata = {
  title: 'Математички речник',
  description: 'Математички речник са енглеског на српски језик. Претражите математичке изразе и појмове'
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta name="language" content="Serbian, Srpski" />
        <meta name="author" content="DMDevelo" />
        <link rel="alternate" href="https://matematickirecnik.rs/" hreflang="sr-Cyrl-rs"/>
        <link rel="alternate" href="https://matematickirecnik.rs/" hreflang="sr-Latin-rs"/>
        <link rel="canonical" href="https://matematickirecnik.rs//ћирилица" />
        <link rel="canonical" href="https://matematickirecnik.rs//latinica" />
      </head>
        <body className="dictionary">
          <SwitchProvider>
            <Header />
              {children}
            <Footer />
          </SwitchProvider>
        </body>
    </html>
  )
}
