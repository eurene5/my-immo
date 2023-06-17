export const metadata = {
  title: 'My Immo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{background: 'grey'}}>{children}</body>
    </html>
  )
}
