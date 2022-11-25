
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)

export default function escolherPalavra() {
    console.log("escolher palavra")


    return (

        <div className="conteudo-sup">
            <img src="assets/forca0.png" alt="forca estado inicial" />
            <button onClick={escolherPalavra} className="texto escolher-palavra">Escolher Palavra</button>
        </div>

    )
}