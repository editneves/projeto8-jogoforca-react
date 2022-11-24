import palavras from './palavras';

function App() {

  function escolherPalavra() {
    console.log("escolher palavra")
  }
  function chutar() {
    console.log("chutei")
  }
  function escolherLetra() {
    console.log("letra escolhida")
  }

  return (
    <div className="na">

      <div className="conteudo-sup">
        <img src="assets/forca0.png" alt="forca estado inicial" />
        <button onClick={escolherPalavra} className="texto escolher-palavra">Escolher Palavra</button>
      </div>

      <div className="conteudo-inf">
        <div className="caixa" >
        <button onClick={escolherLetra} className="letras">A</button>
        <button onClick={escolherLetra} className="letras">B</button>
        <button onClick={escolherLetra} className="letras">C</button>
        <button onClick={escolherLetra} className="letras">D</button>
        <button onClick={escolherLetra} className="letras">E</button>
        <button onClick={escolherLetra} className="letras">F</button>
        <button onClick={escolherLetra} className="letras">G</button>
        <button onClick={escolherLetra} className="letras">H</button>
        <button onClick={escolherLetra} className="letras">I</button>
        <button onClick={escolherLetra} className="letras">J</button>
        <button onClick={escolherLetra} className="letras">K</button>
        <button onClick={escolherLetra} className="letras">L</button>
        <button onClick={escolherLetra} className="letras">M</button>
        <button onClick={escolherLetra} className="letras">N</button>
        <button onClick={escolherLetra} className="letras">O</button>
        <button onClick={escolherLetra} className="letras">P</button>
        <button onClick={escolherLetra} className="letras">Q</button>
        <button onClick={escolherLetra} className="letras">R</button>
        <button onClick={escolherLetra} className="letras">S</button>
        <button onClick={escolherLetra} className="letras">T</button>
        <button onClick={escolherLetra} className="letras">U</button>
        <button onClick={escolherLetra} className="letras">V</button>
        <button onClick={escolherLetra} className="letras">W</button>
        <button onClick={escolherLetra} className="letras">X</button>
        <button onClick={escolherLetra} className="letras">Y</button>
        <button onClick={escolherLetra} className="letras">Z</button>
        
        </div>
        <div className="caixa2">
          <h1> Já sei a Palavra!</h1>
          <input type="text" placeholder="" />
          <button onClick={chutar} className="chutar">Chutar</button>
        </div>

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