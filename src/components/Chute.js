// Chute (input e botão de chute)

export default function Chute() {

    function chutar() {
        console.log("chutei")
    }

    return (
        <div className="caixa2">
            <h1> Já sei a Palavra!</h1>
            <input type="text" placeholder="" />
            <button onClick={chutar} className="chutar">Chutar</button>
        </div>
    )
}