import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <>
      <h1>Contact</h1>
      {/* Nested routes */}
      <p>
        <Link to="/contact/1">Contato 1</Link>
      </p>

      <p>
        <Link to="/contact/2">Contato 2</Link>
      </p>

      <p>
        <Link to="/contact/3">Contato 3</Link>
      </p>
    </>
  )
}
