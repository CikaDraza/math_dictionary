import LoginLayout from '@/src/layouts/LoginLayout'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Пријавите се | региструј се',
  description: 'Математички речник са енглеског на српски језик. Претражите математичке изразе и појмове'
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ children }) {
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
        <body>
          <LoginLayout>
            {children}
          </LoginLayout>
        </body>
    </html>
  )
}
