// Letras (conjunto de botões com as letras)
//Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados

export default function Letras({ disable, style, message, setMessage }) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    const handleClick = (letra) => {
        console.log("valor de letra: ", letra);
        setMessage(letra);
    };
    
    return (
        <div className="caixa" >
            {alfabeto.map((a) => 
            <button 
                onClick={() => handleClick(a)} 
                key={a} 
                disabled={disable} 
                className={style}
                type="text"
                id="message"
                name="message"
                value={message}
                messsage={message}>
                {a}  
            </button>)}
        </div>
    )
}
