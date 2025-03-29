import "./globals.css"
import { Suspense } from "react"
import InfinityLoader from "@/components/InfinityLoader"
import GoogleAnalytics from "@/lib/GoogleAnalytics"

export const metadata = {
  title: "Hackloop - Infinite Possibilities. Infinite Innovation.",
  description:
    "Join us for 36 hours of coding, creativity, and collaboration. Push the boundaries of what's possible and build the future.",
    generator: 'v0.dev',
    metadataBase: new URL('https://hackathon.poornima.org'),
    keywords: ['hackathon', 'coding', 'technology', 'innovation', 'programming', 'hack infinity', 'poornima', 'poornima institute of engineering and technology', 'poornima hackathon', 'poornima hackathon 2025'],
    authors: [{ name: 'Hack Infinity Team' }],
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      title: 'Hack Infinity - Infinite Possibilities. Infinite Innovation.',
      description: 'Join us for 36 hours of coding, creativity, and collaboration. Push the boundaries of what\'s possible and build the future.',
      url: 'https://hackathon.poornima.org',
      siteName: 'Hack Infinity',
      images: [
        {
          url: '/INFI.png',
          width: 1200,
          height: 630,
          alt: 'Hack Infinity - 36 Hour Hackathon'
        }
      ],
      locale: 'en_IN',
      type: 'website',
    }
    
  }


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <GoogleAnalytics />
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center bg-black">
              <InfinityLoader />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  )
}



import './globals.css'