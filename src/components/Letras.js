// Letras (conjunto de botões com as letras)
//Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados


export default function Letras({ disable, style, selecionados, setSelecionados,setImagem,palavraEscolhida, letraPalavraEscolhida }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"]

    function escolherLetra(letraEscolhida) {
       selecionados.push(letraEscolhida.toUpperCase())
        return selecionados

    }
    // function comparaArrays() {
    //     if (palavraEscolhida.length != selecionados.length) {
            
          
    //         // letrasPalavrasEscolhida palvra escolhida no array
    //         //letrasChute  escrita
    //         //selecionados letras selecionadas clicando 
    //     }
    //     for (let i = 0; i < palavraEscolhida.length; i++) {
    //         if (letraPalavraEscolhida[i] !== selecionados[i]) {
    //             return console.log("letra errada");
    //         }
    //     }
      
    //}
    return (
        <div className="caixa" >
            {alfabeto.map((a) => <button onClick={() => escolherLetra(a)} key={a} disabled={disable} className={style}>{a}</button>)}
        </div>
    )
}
