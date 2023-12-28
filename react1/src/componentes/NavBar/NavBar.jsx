import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1> DeepWeb 3.0 </h1>
        <nav>
            <ul>
                <li>BEBES</li>
                <li>ABUELAS</li>
                <li>GATOS</li>
            </ul>
        </nav>
<CartWidget/>
    </header>
  )
}

export default NavBar