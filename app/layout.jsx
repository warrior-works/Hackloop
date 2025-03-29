import "./globals.css"
import { Suspense } from "react"
import InfinityLoader from "@/components/InfinityLoader"
import GoogleAnalytics from "@/lib/GoogleAnalytics"

export const metadata = {
  title: "Hackloop",
  description:
    "HackLoop is a global hackathon where innovation never stops—just like an infinite loop!",
    generator: 'Hackloop',
    metadataBase: new URL('https://hackloop.vercel.app/'),
    keywords: ['hackathon', 'coding', 'technology', 'innovation', 'programming', 'hackloop', 'DevDisplay', 'devdisplay', 'DevDisplay hackathon', 'Global hackathon 2025'],
    authors: [{ name: 'aashuu' }],
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      title: 'Hackloop - Infinite Possibilities. Infinite Innovation.',
      description: 'Join us for 36 hours of coding, creativity, and collaboration. Push the boundaries of what\'s possible and build the future.',
      url: 'https://hackloop.vercel.app/',
      siteName: 'Hackloop',
      images: [
        {
          url: '/LOGO.png',
          width: 1200,
          height: 630,
          alt: 'Hackloop - 36 Hour Hackathon'
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