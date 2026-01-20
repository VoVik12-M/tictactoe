// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // import Igra from './Igra.jsx'

// createRoot(document.getElementById('root')).render(  
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     // <BrowserRouter>
//     //     <Routes>
//     //         <Route path="/" element={<App />} />
//     //         <Route path="/KrestukuNoluku" element={<Igra />} />
//     //     </Routes>
//     // </BrowserRouter>
//     )

import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'   // ← ДОДАЛИ ЦЕ !!!
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>           {/* ← ОБГОРНУЛИ App В HashRouter */}
            <App />
        </HashRouter>
    </React.StrictMode>
)