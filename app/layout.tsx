import { Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"]
})

const RootLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title='Hello World' />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
