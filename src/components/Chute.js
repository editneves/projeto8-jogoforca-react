// Chute (input e botão de chute)
import { useState } from "react";

export default function Chute({ disable,setImagem }) {

    const [chute, setChutar] = useState("");
    function chutar() {
        const palavraEscolhida = "eu"

        console.log(chute)
        if (chute === palavraEscolhida) {
            console.log("vc ganhou")

            // mostrar na tela 
        }
        else {
            setImagem("assets/forca6.png")
            console.log("vc perdeu")
        }

        // mostrar na tela bonequinho enforcado (forca6)
        
    }

    return (
        <div className="caixa2">
            <h1> Já sei a Palavra!</h1>
            <input disabled={disable} onChange={event => setChutar(event.target.value)} type="text" placeholder="" />
            <button onClick={chutar} className="chutar">Chutar</button>
        </div>
    )
}