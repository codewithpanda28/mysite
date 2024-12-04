import localFont from "next/font/local";


import "./globals.css";



const openSansBlack = localFont({
  src: "./fonts/OpenSauceSans-Black.ttf",
  variable: "--font-open-sans",
  weight: "900",
});

const openSansBold = localFont({
  src: "./fonts/OpenSauceSans-Bold.ttf",
  variable: "--font-open-sans",
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IIMW",
  description: "IIMW Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital@0;1&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
  
      </head>
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
