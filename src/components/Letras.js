// Letras (conjunto de botões com as letras)
//Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados

export default function Letras({ disable,palpites, style, palavraEscolhida, setPalpites, letraPalavraEscolhida, letraChute, setLetraChute }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    const handleClick = (letra) => {
        //setLetraChute(letra);
        letra = letra.toUpperCase()
        //console.log("letra:",palavraEscolhida,letra)
        if (palavraEscolhida.includes(letra)) {
            const chute = []
            for (let i = 0; i < letraPalavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    chute.push(letra)
                }
                else {
                    chute.push(palpites[i]) 
                }
                console.log("oioioi", chute)
            }
    
            setPalpites(chute)
        }





    };

    return (
        <div className="caixa" >
            {alfabeto.map((a) =>
                <button
                    onClick={() => handleClick(a)}
                    key={a}
                    disabled={disable}
                    className={style}>
                    {a.toUpperCase()}
                </button>)}
        </div>
    )
}
