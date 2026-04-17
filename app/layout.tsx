export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        {children}
      </body>
    </html>
  )
}
