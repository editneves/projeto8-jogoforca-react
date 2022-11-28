// Letras (conjunto de botões com as letras)
//Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados

export default function Letras({ setFimJogo, count, setImagem, setDisable, setCount, 
                                disable, palpites, style, palavraEscolhida, setPalpites,
                                letraPalavraEscolhida, setStylePalavra }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    const chute = []

    const handleClick = (letra) => {

        document.getElementById(`letter-${letra}`).disabled = true
        letra = letra.toUpperCase()

        if (palavraEscolhida.includes(letra)) {

            for (let i = 0; i < letraPalavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    chute.push(letra)
                }
                else {
                    chute.push(palpites[i])
                }
               
                if (palavraEscolhida.join() === chute.join()) {
                    setStylePalavra("palavra-correta")
                    setFimJogo(true)
                    setDisable(true)
                }
            }
            setPalpites(chute)

        } else if (!palavraEscolhida.includes(letra)) {

            for (let i = 0; i < letraPalavraEscolhida.length; i++) {
                setCount(count + 1)
                switch (count) {
                    case 0:
                        setImagem("assets/forca1.png")
                        break;
                    case 1:
                        setImagem("assets/forca2.png")
                        break;
                    case 2:
                        setImagem("assets/forca3.png")
                        break;
                    case 3:
                        setImagem("assets/forca4.png")
                        break;
                    case 4:
                        setImagem("assets/forca5.png")
                        break;
                    case 5:
                        setDisable(true)
                        setImagem("assets/forca6.png")
                        setStylePalavra("palavra-incorreta")
                        setFimJogo(true)
                        break;
                    default:
                }
            }
        }
    }

    if (palavraEscolhida === chute) {
       
        setStylePalavra("palavra-correta")
        setFimJogo(true)
        setDisable(true)
    }

    return (
        <div className="caixa" >
            {alfabeto.map((a) =>
                <button data-test="letter"
                    onClick={() => handleClick(a)}
                    key={a}
                    disabled={disable}
                    className={style}
                    id={`letter-${a}`}>
                    {a.toUpperCase()}

                </button>)}
        </div>
    )
}
