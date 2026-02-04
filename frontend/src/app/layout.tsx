import "./globals.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Whatbytes Store",
  description: "Frontend Assignment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
