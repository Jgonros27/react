import { Link } from "../Link.jsx"

export default function HomePage() {
    return(
      <>
        <h1>Home</h1>
        <p>Esta es una página de ejemplo para crear React Ruter desde cero</p>
        <Link to={'/about'}>Ir a Sobre Nosotros</Link>
      </>
    )
  }