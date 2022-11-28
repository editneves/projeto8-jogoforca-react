
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import React, { useState } from "react";

function App() {
  const [disable, setDisable] = useState(true);
  const [style, setStyle] = useState("letras-desabilitadas");
  const [imagem, setImagem] = useState("assets/forca0.png");
  const [selecionados, setSelecionados] = useState([]);
  const [palpites, setPalpites] = useState([]);
  const [palavraCor, setPalavraCor] = useState([]);
  const [stylePalavra, setStylePalavra] = useState("letras-escolhidas");
  const [letraChute, setLetraChute] = useState("");
  const [count, setCount] = useState(0);
  const [fimJogo, setFimJogo] = useState(false);
  const [palavra, setPalavra] = useState("");
  const [palavraEscolhida, setPalavraEscolhida] = useState("");

  console.log(palavra)

  return (
    <div>
      <Jogo
        setDisable={setDisable}
        setStyle={setStyle}
        imagem={imagem}
        palavraEscolhida={palavra}
        letraPalavraEscolhida={palavra}
        palpites={palpites}
        setPalpites={setPalpites}
        palavraCor={palavraCor}
        setPalavraCor={setPalavraCor}
        stylePalavra={stylePalavra}
        setStylePalavra={setStylePalavra}
        fimJogo={fimJogo}
        setFimJogo={setFimJogo}
        setCount={setCount}
        setImagem={setImagem}
        setPalavra={setPalavra}
        setPalavraEscolhida={setPalavraEscolhida}
      />
      <div className="conteudo-inf">
        <Letras
          disable={disable}
          setDisable={setDisable}
          style={style}
          selecionados={selecionados}
          setSelecionados={setSelecionados}
          letraPalavraEscolhida={palavra}
          palavraEscolhida={palavra}
          letraChute={letraChute}
          setLetraChute={setLetraChute}
          setPalpites={setPalpites}
          palpites={palpites}
          count={count}
          setCount={setCount}
          setImagem={setImagem}
          setStylePalavra={setStylePalavra}
          setPalavraCor={setPalavraCor}
          palavraCor={palavraCor}
          fimJogo={fimJogo}
          setFimJogo={setFimJogo}
          setStyle={setStyle}
        />
        <Chute
          disable={disable}
          setDisable={setDisable}
          setImagem={setImagem}
          palavraEscolhida={palavra}
          letraPalavraEscolhida={palavra}
          palavraCor={palavraCor}
          setPalavraCor={setPalavraCor}
          stylePalavra={stylePalavra}
          setStylePalavra={setStylePalavra}
          setFimJogo={setFimJogo}
          
        />
      </div>
    </div>
  )
}

export default App  