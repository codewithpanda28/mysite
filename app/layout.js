import localFont from "next/font/local";
import FontSpring from "next/font/local";

import "./globals.css";





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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Bowlby+One&family=Modak&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Notable&family=Nova+Script&family=Seymour+One&display=swap"
          rel="stylesheet"
        />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
{/* 
        <link
          href="https://db.onlinewebfonts.com/c/8d07476eb4c99c30e857758062f352ab?family=FSP+DEMO+-+ntgrl+CF+xtr+Bld"
          rel="stylesheet"
          type="text/css"
        /> */}

        {/* <link
          href="https://db.onlinewebfonts.com/c/1e400e1a7a0ff1e8abbdddf2e42beff1?family=FSP+DEMO+-+Integral+CF+Heavy"
          rel="stylesheet"
        /> */}
{/* 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
