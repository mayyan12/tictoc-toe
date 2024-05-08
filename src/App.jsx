
import User from './componnts/user'
import BordWithPlayer from './pages/BoardWithPlayers'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChoosePlayer from './pages/ChoosePlayer/CoohsePlayer'
import Loding from './componnts/Loding/Loding'
import Welcome from './pages/Welcome'
import Menu from './pages/Menu'
import JoinGame from './pages/JoinGame'
function App() {

  const router = createBrowserRouter([
    { path: '/choosePlayer', element: <ChoosePlayer /> },

    { path: '/bordWithPlayers', element: <BordWithPlayer /> },
    { path: '/user', element: <User /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/menu', element: <Menu /> },
    { path: '/loding', element: <Loding /> },

    {path: '/joingame', element: <JoinGame />}

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
