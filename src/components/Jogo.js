
// Jogo (imagem da forca, botão de iniciar, palavra do jogo)
import { palavras } from "../palavras";
export default function Jogo({ setPalavra, setPalavraEscolhida, novaPalavra, setImagem, setFimJogo, setCount, palavraEscolhida, setPalavraCor, setStylePalavra, fimJogo, setDisable, setStyle, imagem, letraPalavraEscolhida, palpites, setPalpites, palavraCor, stylePalavra }) {

    function comparador() {
        return Math.random() - 0.5;
    }
    function novaPalavra() {
        console.log("entrei")
        const palavrasSorteadas = [...palavras.sort(comparador)]
        const palavraEscolhida = palavrasSorteadas[1].toUpperCase()
        const palavra2 = palavraEscolhida.split('');
        
        setPalavra(palavra2)
        return palavra2
    }
  
    const espaco = []
    function escolherPalavra() {
        const palavraAtual=  novaPalavra() 
        setCount(0)
        setFimJogo(false)
        setImagem("assets/forca0.png")
        setStylePalavra("letras-escolhidas")
        setDisable(false)
        setStyle("letras-habilitadas")
        setPalpites(espaco)
        separarLetras(palavraAtual)
    }
    if (fimJogo) {
        //  palavraCor.push(palavraEscolhida);
        //   setPalavraCor(palavraCor.toString())

    }
    function separarLetras(palavraAtual) {
        for (let i = 0; i < palavraAtual.length; i++) {
            espaco.push(" _ ")
        }
    }

    
    return (
        <div className="conteudo-sup">
            <img src={imagem} alt="forca estado inicial" />

            <div className="caixa-esq">
                <button onClick={() => escolherPalavra()} className="texto escolher-palavra">Escolher Palavra</button>
                <div id="excluir" className={stylePalavra}>
                    {!fimJogo ? palpites : palavraEscolhida}
                </div>
            </div>
        </div>

    )
}