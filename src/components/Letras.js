// Letras (conjunto de botões com as letras)
//Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados



export default function Letras({ disable, style, selecionados, setSelecionados }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"]

    function escolherLetra(letraEscolhida) {

        const estaNaLista = selecionados.push(letraEscolhida.toUpperCase())
        console.log(selecionados)

        // comparar letras no array selecionado com as letras da palavra escolhida 
    }

    return (
        <div className="caixa" >
            {alfabeto.map((a) => <button onClick={() => escolherLetra(a)} disabled={disable} className={style}>{a}</button>)}
        </div>
    )
}
