
// import InputBord from './componnts/inputBord/InputBord'
// import Button from './componnts/Button'
// import Loding from './componnts/Loding/Loding'
import Bord from './componnts/bord/Bord'
// import O from './componnts/O'
// import X from './componnts/X'
// import Back from './componnts/Back'
import User from './componnts/user'
import BordWithPlayer from './pages/BoardWithPlayers'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChoosePlayer from './pages/ChoosePlayer/CoohsePlayer'
import Loding from './componnts/Loding/Loding'
import Welcome from './pages/Welcome'
import Menu from './pages/Menu'
function App() {

  const router = createBrowserRouter([
    { path: '/choosePlayer', element: <ChoosePlayer /> },

    { path: '/bordWithPlayers', element: <BordWithPlayer /> },
    { path: '/user', element: <User /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/menu', element: <Menu /> },
    { path: '/loding', element: <Loding /> }


  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
