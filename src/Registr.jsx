import { useEffect } from "react"
import { Link } from "react-router-dom"
import Krestuk from "./components/Krestuku"
import Noluk from "./components/Noluku"
import RegistrF from "./components/form-registr"

function Registr ({player1, setPlayer1, player2, setPlayer2, check, setCheck}) {
    useEffect(() => {
        document.title = "Реєстрація"
    }, []);

    return (
    <div className="container">
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <Krestuk />
        <Noluk />
        <RegistrF player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} check={check} setCheck={setCheck}/>
    </div>
)
}

export default Registr