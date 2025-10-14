import './globals.css'

export const metadata = {
  title: 'United Tea Traders',
  description: 'Wholesale & Retail Tea blends — United Tea Traders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
