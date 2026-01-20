// import { useState } from "react";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import { useEffect } from "react"
// import { Link } from "react-router-dom"
// import Registr from "./Registr";
// import Igra from "./Igra";

// import Krestuk from "./components/Krestuku"
// import Noluk from "./components/Noluku"
// import RegistrF from "./components/form-registr"

// function App() {
//     const[player1, setPlayer1] = useState("Гравець 1");
//     const[player2, setPlayer2] = useState("Гравець 2");
//     const[check, setCheck] = useState(2);
//     const[showIgra, setShowigra] = useState(false);
    

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Registr player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} check={check} setCheck={setCheck}/>} />
//                 <Route path="/KrestukuNoluku" element={<Igra player1={player1} check={check} player2={player2}/>} />
//             </Routes>
//         </BrowserRouter>
//     );

// }

// export default App


import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Registr from "./Registr";
import Igra from "./Igra";

function App() {
    const[player1, setPlayer1] = useState("Гравець 1");
    const[player2, setPlayer2] = useState("Гравець 2");
    const[check, setCheck] = useState(2);

    return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <Registr
                            player1={player1}
                            setPlayer1={setPlayer1}
                            player2={player2}
                            setPlayer2={setPlayer2}
                            check={check}
                            setCheck={setCheck}
                        />
                    }
                />
                <Route
                    path="/KrestukuNoluku"
                    element={
                        <Igra
                            player1={player1}
                            check={check}
                            player2={player2}
                        />
                    }
                />
            </Routes>
    );
}

export default App;
