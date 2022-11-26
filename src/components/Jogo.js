
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)

export default function Jogo({ setDisable, setStyle, imagem, palavras }) {

    function escolherPalavra() {
        setDisable(false)
        setStyle("letras-habilitadas")

    }

    const palavrasSorteadas = [...palavras.sort(comparador)]
   
    function comparador() {
        return Math.random() - 0.5;
    }
    const palavrasEscolhida = palavrasSorteadas[1].toUpperCase()
    const espacos = [];
    for (let i = 0; i < palavrasEscolhida.length; i++) {

        espacos.push(" _ ");
        
    }
    
    return (

        <div className="conteudo-sup">
            <img src={imagem} alt="forca estado inicial" />

            <div className="caixa-esq">
                <button onClick={escolherPalavra} className="texto escolher-palavra">Escolher Palavra</button>
                <div className="letras-escolhidas">
                  {espacos}
                </div>
            </div>
        </div>

    )
}