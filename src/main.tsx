import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Home } from './routes/Home.tsx'
import { Contact } from './routes/Contact.tsx'
import { ErrorPage } from './routes/ErrorPage.tsx'
import { ContactDetails } from './routes/ContactDetails.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      // nested routes - identificador único - dynamic route
      // /contact/1
      {
        path: '/contact/:id',
        element: <ContactDetails />,
      },
      // redirect usado a partir de uma rota que não existe mais
      {
        /**
         * poderia usar o nome de uma rota inexistente, porém assim é mais genérico e
         * sempre vai redirecionar para a home se eu não colocar uma rota válida
         * nesse caso está substituindo o 404: Page Not Found
         */
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
