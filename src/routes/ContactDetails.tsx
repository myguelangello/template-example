import { useParams, useNavigate } from 'react-router-dom'

export function ContactDetails() {
  const { id } = useParams()

  const navigate = useNavigate()

  const handleContact = () => {
    console.log('Enviando mensagem...')

    // colocar um delay para simular envio de mensagem
    setTimeout(() => {
      console.log('Mensagem enviada!')
      navigate('/')
    }, 250)
  }

  return (
    <>
      <h1>Contact Details</h1>
      <p>Mais informações de contato do id: {id}</p>

      <button onClick={handleContact}>Enviar mensagem</button>
    </>
  )
}
