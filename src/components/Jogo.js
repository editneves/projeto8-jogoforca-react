import { palavras } from "../palavras";

export default function Jogo({ setPalavra, novaPalavra, setImagem, setFimJogo, setCount,
    palavraEscolhida, setStylePalavra, fimJogo, setDisable,
    setStyle, imagem, palpites, setPalpites, stylePalavra, setPalavraEscolhida }) {

    function comparador() {
        return Math.random() - 0.5;
    }

    function novaPalavra() {
        const palavrasSorteadas = [...palavras.sort(comparador)]
        const palavraEscolhida = palavrasSorteadas[1].toUpperCase()
        const palavra2 = palavraEscolhida.split('');
        setPalavra(palavra2)

        return palavra2
    }
    console.log(palavraEscolhida.toString())

    const str = palavraEscolhida.toString()
    const string = str.replace(/,/g, "").replace(/\./g, "")
    

    const espaco = []

    function escolherPalavra() {
        const palavraAtual = novaPalavra()
        setCount(0)
        setFimJogo(false)
        setImagem("assets/forca0.png")
        setStylePalavra("letras-escolhidas")
        setDisable(false)
        setStyle("letras-habilitadas")
        setPalpites(espaco)
        separarLetras(palavraAtual)
    }

    function separarLetras(palavraAtual) {
        for (let i = 0; i < palavraAtual.length; i++) {
            espaco.push(" _ ")
        }
    }

    return (
        <div className="conteudo-sup">
            <img data-test="game-image" src={imagem} alt="forca estado inicial" />

            <div className="caixa-esq">
                <button data-test="choose-word" onClick={() => escolherPalavra()} className="texto escolher-palavra">Escolher Palavra</button>
                <div data-test="word" data-answer={string} id="excluir" className={stylePalavra}>
                    {!fimJogo ? palpites : palavraEscolhida}
                </div>
            </div>
        </div>

    )
}