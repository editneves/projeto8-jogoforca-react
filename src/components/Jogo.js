
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)

export default function Jogo({ setDisable, setStyle, imagem, letraPalavraEscolhida, palpites, setPalpites, palavraCor, stylePalavra }) {

    function escolherPalavra() {
        setDisable(false)
        setStyle("letras-habilitadas")
       const espaco = []
        for (let i = 0; i < letraPalavraEscolhida.length; i++) {
            espaco.push(" _ ")
        }
        setPalpites(espaco)
    }

    return (
        <div className="conteudo-sup">
            <img src={imagem} alt="forca estado inicial" />

            <div className="caixa-esq">
                <button onClick={escolherPalavra} className="texto escolher-palavra">Escolher Palavra</button>
                <div id= "excluir" className={stylePalavra}>
                    {palpites}  
                    {palavraCor}
                </div>
            </div>
        </div>

    )
}