import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['400', '600', '800', '300', '900']
})
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin'],
  weight: ['400', '600', '800', '300', '900']
})

export const metadata = {
  title: "Latest News Today | Breaking News Bangladesh & World",
  description:
    "Read the latest breaking news from Bangladesh and around the world. technology, sports and more updated news in one place.",
  keywords: [
    "Breaking News",
    "Bangladesh News",
    "World News",
    "Latest News",
    "Technology News",
    "Sports News",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>
        {children}



      </body>
    </html>
  );
}
