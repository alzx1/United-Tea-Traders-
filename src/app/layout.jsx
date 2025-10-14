import './globals.css'

export const metadata = {
  title: 'United Tea Traders',
  description: 'Wholesale & Retail Tea blends — United Tea Traders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1f7a1f" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

