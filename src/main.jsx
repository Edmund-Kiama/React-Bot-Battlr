import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BotCollection from './pages/BotCollection.jsx'
import YourBotArmy from './pages/YourBotArmy.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <BotCollection/>,
        errorElement: <ErrorPage />
      },
      {
        path:"/your-army",
        element: <YourBotArmy />,
        errorElement: <ErrorPage />
      }
    ],
    errorElement: <ErrorPage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
