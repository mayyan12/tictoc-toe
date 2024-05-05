
import InputBord from './componnts/inputBord/InputBord'
import Button from './componnts/Button'
import Loding from './componnts/Loding/Loding'
import Bord from './componnts/bord/Bord'
import O from './componnts/O'
import X from './componnts/X'
import Back from './componnts/Back'
import User from './componnts/user'

function App() {


  return (
    <>
      <InputBord>
        <Bord />

    </InputBord>
    <O/>
    <X/>
    <Back/>
    <User/>
      {/* 
      <Button />
      <Loding
        size="64px"
        dotSize="8px"
        dotCount={4}
        color="#fcd015"
        speed="1.1s"
        spread="50deg"
      /> */}
    </>
  )
}

export default App
