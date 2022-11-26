import palavras from './palavras';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import React, { useState } from "react";

function App() {
  const [disable, setDisable] = useState(true);
  const [style, setStyle] = useState("letras-desabilitadas");
  const [imagem, setImagem] = useState("assets/forca0.png");
  const [selecionados, setSelecionados] = useState([]);
  return (
    <div>
      <Jogo
        setDisable={setDisable} 
        setStyle= {setStyle}
        imagem = {imagem} 
        palavras= {palavras}
      />
      <div className="conteudo-inf">
        <Letras
          disable={disable}
          setDisable={setDisable}
          style= {style}
          selecionados={selecionados}
          setSelecionados={setSelecionados}
        />
        <Chute
          disable={disable}
          setDisable={setDisable} 
          setImagem= {setImagem}
        />
      </div>

      <img src="assets/forca1.png" />
      <img src="assets/forca2.png" />
      <img src="assets/forca3.png" />
      <img src="assets/forca4.png" />
      <img src="assets/forca5.png" />
      <img src="assets/forca6.png" />

      

    </div>







  )
}

export default App  