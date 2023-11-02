import Link  from "next/link"
export default function TiendaLayout({ children }) {
    return  <>
            <nav>
                <h3>categorias</h3>
                <ul>
                    <li><Link href='/tienda/categorias'>Categorias</Link></li>
                    <li>prductos</li>
                </ul>
            </nav>
            {children}
        </>
    
}