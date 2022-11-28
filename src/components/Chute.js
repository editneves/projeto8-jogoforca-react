export default function Chute({ setDisable, setFimJogo,disable, setImagem, palavraEscolhida,
                                letraPalavraEscolhida, palavraCor, setPalavraCor, setStylePalavra }) {
    
    function chutar() {

        const palavraDig = document.getElementById("palavraDigitada").value.toUpperCase().split('')
        let a = [...letraPalavraEscolhida];
        let b = palavraDig;

        if (JSON.stringify(a) === JSON.stringify(b)) {
            setStylePalavra("palavra-correta")
            setFimJogo(true)
            setDisable(true)
        }
        else {
            setDisable(true)
            setImagem("assets/forca6.png")
            palavraCor.push(palavraEscolhida);
            setPalavraCor(palavraCor.toString())
            setStylePalavra("palavra-incorreta")
            setFimJogo(true)
        }
    }

    return (
        <div className="caixa2">
            <h1> Já sei a Palavra!</h1>
            <input data-test="guess-input" disabled={disable} id="palavraDigitada" type="text" placeholder="" />
            <button data-test="guess-button" onClick={chutar} className="chutar">Chutar</button>
        </div>
    )
}