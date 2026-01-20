import { Link } from "react-router-dom"

function RegistrF({player1, setPlayer1, player2, setPlayer2, check, setCheck}) {


    return (
        <div className="forma">
            <div className="Pole_1">
                <p>Гравець 1</p>
                <input type="text" value={player1} onChange={(e) => {
                    const values = e.target.value
                    if(values.length <= 10) {
                        setPlayer1(e.target.value)
                    }
                }}/>
                <p>X</p>
            </div>
            <div className="Pole_2">
                <p>Гравець 2</p>
                <input type="text" value={player2} onChange={(e) => {
                    const values = e.target.value
                    if(values.length <= 10) {
                        setPlayer2(e.target.value)
                    }
                }}/>
                <p>O</p>
            </div>
            <div className="Pole_3">
                <p>Рахунок до</p>
                <input type="text" maxLength={2} value={check} onChange={(e) => setCheck(e.target.value)}/>
            </div>
            <Link to="/KrestukuNoluku" >
                <button>Старт</button>
            </Link>
        </div>
    )
}

export default RegistrF