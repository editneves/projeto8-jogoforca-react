// Letras (conjunto de botões com as letras)
//Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras() {

    function escolherLetra() {
        console.log("letra escolhida")
    }

    return (
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
    )
}