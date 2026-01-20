import { useEffect } from "react"
import { Link } from "react-router-dom"
import Krestuk from "./components/Krestuku"
import Noluk from "./components/Noluku"
import RegistrF from "./components/form-registr"
import GamePole from "./components/game_pole"

function Igra({player1, check, player2}) {
    useEffect(() => {
        document.title = "ХрестикиНолики"
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
            <GamePole player1={player1} check={check} player2={player2}/>
    </div>
    )
}

export default Igra