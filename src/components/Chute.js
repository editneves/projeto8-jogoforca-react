// Chute (input e botão de chute)

export default function Chute({ setDisable, setFimJogo,disable, setImagem, palavraEscolhida, letraPalavraEscolhida, palavraCor, setPalavraCor, setStylePalavra }) {
    // quando o usuário ganha, a palavra completa fica em verde e os botões e input voltam a ficar desabilitados
    function chutar() {
        const palavraDig = document.getElementById("palavraDigitada").value.toUpperCase().split('')
        let a = [...letraPalavraEscolhida];
        let b = palavraDig;

        //var elemento = document.getElementById("excluir");
        // while (elemento.firstChild) {
        //     elemento.removeChild(elemento.firstChild);
        // }

        if (JSON.stringify(a) === JSON.stringify(b)) {
            //palavraCor.push(palavraEscolhida);
            //setPalavraCor(palavraCor.toString())
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
            <input disabled={disable} id="palavraDigitada" type="text" placeholder="" />
            <button onClick={chutar} className="chutar">Chutar</button>
        </div>
    )
}