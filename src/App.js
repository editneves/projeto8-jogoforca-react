import { palavraEscolhida, letraPalavraEscolhida } from './palavras';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import React, { useState } from "react";

function App() {
  const [disable, setDisable] = useState(true);
  const [style, setStyle] = useState("letras-desabilitadas");
  const [imagem, setImagem] = useState("assets/forca0.png");
  const [selecionados, setSelecionados] = useState([]);
  const [chute, setChute] = useState("");
  const [espacos, setEspacos] = useState([]);
  const [palavraCor, setPalavraCor] = useState([]);
  const [stylePalavra, setStylePalavra] = useState("letras-escolhidas");
  const [message, setMessage] = useState("");

  console.log(palavraEscolhida)
  console.log('inicia jogo')
  return (
    <div>
      <Jogo
        setDisable={setDisable}
        setStyle={setStyle}
        imagem={imagem}
        palavraEscolhida={palavraEscolhida}
        letraPalavraEscolhida={letraPalavraEscolhida}
        espacos={espacos}
        setEspacos={setEspacos}
        palavraCor={palavraCor}
        setPalavraCor={setPalavraCor}
        stylePalavra={stylePalavra}
        setStylePalavra={setStylePalavra}
      />
      <div className="conteudo-inf">
        <Letras
          disable={disable}
          setDisable={setDisable}
          style={style}
          selecionados={selecionados}
          setSelecionados={setSelecionados}
          message={message}
          setMessage= {setMessage}
        />
        <Chute
          disable={disable}
          setDisable={setDisable}
          setImagem={setImagem}
          chute={chute}
          setChute={setChute}
          palavraEscolhida={palavraEscolhida}
          letraPalavraEscolhida={letraPalavraEscolhida}
          palavraCor={palavraCor}
          setPalavraCor={setPalavraCor}
          stylePalavra={stylePalavra}
          setStylePalavra={setStylePalavra}
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