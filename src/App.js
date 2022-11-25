import palavras from './palavras';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';

function App() {

  return (
    <div>
      <Jogo/>
      <div className="conteudo-inf">
        <Letras />
        <Chute />
      </div>

      <img src="assets/forca1.png" />
      <img src="assets/forca2.png" />
      <img src="assets/forca3.png" />
      <img src="assets/forca4.png" />
      <img src="assets/forca5.png" />
      <img src="assets/forca6.png" />

      {palavras}

    </div>

  )
}

export default App  