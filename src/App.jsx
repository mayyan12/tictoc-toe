
import User from './componnts/user'
import BordWithPlayer from './pages/BoardWithPlayers'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChoosePlayer from './pages/ChoosePlayer/CoohsePlayer'
import Welcome from './pages/Welcome'
import { SocketProvider } from './socket'
import JoinGame from './pages/JoinGame'
function App() {

  const router= createBrowserRouter([  
    {path: '/', element: <ChoosePlayer />},
   
      { path: '/bordWithPlayers', element: <BordWithPlayer /> },
      { path: '/user', element: <User /> },
      { path: '/welcome', element: <Welcome /> },
      {path: '/joingame', element: <JoinGame />}
       
  ])

  return (
    <SocketProvider> <RouterProvider router={router} /></SocketProvider>
 
  )
}

export default App
