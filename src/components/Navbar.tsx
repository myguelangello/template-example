import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contacts</Link>
    </nav>
  )
}
