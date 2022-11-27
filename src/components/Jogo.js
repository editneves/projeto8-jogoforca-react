
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)




export default function Jogo({ setDisable, setStyle, imagem, letraPalavraEscolhida, espacos, setEspacos,palavraCor, stylePalavra,setStylePalavra}) {

    function escolherPalavra() {
        setDisable(false)
        setStyle("letras-habilitadas")
        
        for (let i = 0; i < letraPalavraEscolhida.length; i++) {
            espacos.push(" _ ")
            setEspacos(espacos)
        }
    }




    console.log(espacos)
    return (
        <div className="conteudo-sup">
            <img src={imagem} alt="forca estado inicial" />

            <div className="caixa-esq">
                <button onClick={escolherPalavra} className="texto escolher-palavra">Escolher Palavra</button>
                <div className={stylePalavra}>
                    {espacos}
                    {palavraCor}
                </div>
            </div>
        </div>

    )
}