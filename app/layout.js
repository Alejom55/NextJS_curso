import Navbar from '../components/navbar'
import { Roboto } from 'next/font/google'
export const metadata = {
  title: 'Mi tienda con Nexjs',
  description: 'Pagina principal de mi tienda',
  keywords: 'tienda, online, ecommerce'
}
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin']
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
};
