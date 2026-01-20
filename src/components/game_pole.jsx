import { useState, useEffect} from "react";
import Nicia from "./nicia";
import Vins from "./Vins";

function GamePole ({player1, check, player2}) {

    const[kubik, setKubik] = useState();
    const[kubik2, setKubik2] = useState();
    const[kubik3, setKubik3] = useState();
    const[kubik4, setKubik4] = useState();
    const[kubik5, setKubik5] = useState();
    const[kubik6, setKubik6] = useState();
    const[kubik7, setKubik7] = useState();
    const[kubik8, setKubik8] = useState();
    const[kubik9, setKubik9] = useState();

    const[vik1, setVik1] = useState([1, 4, 7]);
    const[vik2, setVik2] = useState([2, 5, 8]);
    const[vik3, setVik3] = useState([3, 6, 9]);
    const[vik4, setVik4] = useState([1, 2, 3]);
    const[vik5, setVik5] = useState([4, 5, 6]);
    const[vik6, setVik6] = useState([7, 8, 9]);
    const[vik7, setVik7] = useState([1, 5, 9]);
    const[vik8, setVik8] = useState([3, 5, 7]);

    const[count, setCount] = useState(0);
    const[draw, setDraw] = useState(0);

    const[pl1, setPl1] = useState(0);
    const[pl2, setPl2] = useState(0);

    const[x_x, setX_x] = useState([]);
    const[o_o, setO_o] = useState([]);
    
    // console.log(JSON.stringify(vik4) === JSON.stringify(vik4.filter(x => x_x.includes(x))));
    
    // console.log(x_x);
    // console.log(vik4);
    
    // console.log(o_o);
    // vik1.every(x => newX.includes(x)) || vik2.every(x => newX.includes(x)) || vik3.every(x => newX.includes(x)) || vik4.every(x => newX.includes(x)) || vik5.every(x => newX.includes(x)) || vik6.every(x => newX.includes(x)) || vik7.every(x => newX.includes(x)) || vik8.every(x => newX.includes(x))
    // if(JSON.stringify(vik1) === JSON.stringify(vik1.filter(x => x_x.includes(x))) || JSON.stringify(vik2) === JSON.stringify(vik2.filter(x => x_x.includes(x))) || JSON.stringify(vik3) === JSON.stringify(vik3.filter(x => x_x.includes(x))) || JSON.stringify(vik4) === JSON.stringify(vik4.filter(x => x_x.includes(x))) || JSON.stringify(vik5) === JSON.stringify(vik5.filter(x => x_x.includes(x))) || JSON.stringify(vik6) === JSON.stringify(vik6.filter(x => x_x.includes(x))) || JSON.stringify(vik7) === JSON.stringify(vik7.filter(x => x_x.includes(x))) || JSON.stringify(vik8) === JSON.stringify(vik8.filter(x => x_x.includes(x))))
    const[podia, setPodia] = useState(0)
    const[cll, setCll] = useState([])
    const[kilk, setKilk] = useState([])

    useEffect(() => {
        if(podia === 1) {
            if(pl1 == check) {
                
                setKubik5(<Vins players={player1} />)
                function Natusk (event) {
                    setKilk(prev => [...prev, event.detail])
                    if(kilk.length === 1) {
                        window.location.href = "/"
                    }
                }
                document.addEventListener("click", Natusk);
                return () => {
                document.removeEventListener("click", Natusk);
                };
            }
            else if(pl2 == check) {
                setKubik5(<Vins players={player2} />)
                function Natusk (event) {
                    setKilk(prev => [...prev, event.detail])
                    if(kilk.length === 1) {
                        window.location.href = "/"
                    }
                }
                document.addEventListener("click", Natusk);
                return () => {
                document.removeEventListener("click", Natusk);
                };
            }
            else {
                function handleClick (event) {
                    event.target
                    setCll(prev => [...prev, event.detail])
                    const box = document.querySelectorAll('.container')
                    console.log(box[0].className);
                    console.log(event.detail);
                    console.log(cll);
                    
                    
                    console.log("dsa", typeof(event.target.className));
                    if(cll.length === 1){
                        if(event.target.className === 'container') {
                            setPodia(0)
                            setKubik();
                            setKubik2();
                            setKubik3();
                            setKubik4();
                            setKubik5();
                            setKubik6();
                            setKubik7();
                            setKubik8();
                            setKubik9();
                            setCll([]);
                        }else{
                            setCount(0)
                            setPodia(0)
                            setKubik();
                            setKubik2();
                            setKubik3();
                            setKubik4();
                            setKubik5();
                            setKubik6();
                            setKubik7();
                            setKubik8();
                            setKubik9();
                            setCll([]);
                        }
                    };
                    
                }
                document.addEventListener("click", handleClick);
                return () => {
                document.removeEventListener("click", handleClick);
                };
            }

        }
    })

    // const[kilk, setKilk] = useState(0)

    // useEffect(() => {
    //     if(pl1 == check) {
            // setKubik5(<Vins players={player1} />)
            // function Natusk (event) {
            //     setKilk(prev => [...prev, event.detail])
            //     if(kilk.length === 1) {
            //         window.location.href = "/"
            //     }
            // }
            // document.addEventListener("click", Natusk);
            // return () => {
            // document.removeEventListener("click", Natusk);
            // };
            
    //     }
    //     else if(pl2 == check) {
    //         setKubik5(<Vins players={player2} />)
    //     }
    // })
    // console.log(podia);
    // console.log(count);
    // console.log(check);
    // console.log(pl1);
    
    
    function CClick1() {
        // setCount(count+1)
        if(!kubik) {
            console.log(1);
            setCount(count+1);
            if(count % 2 === 0) {
                setX_x([...x_x, 1])
                const newX = [...x_x, 1];
                setKubik([<div key="kubik"><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                if(vik1.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik([<div key="kubik"><div className="vfx1k1"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX12222");
                }
                else if (vik4.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik([<div key="kubik"><div className="vfx4k1"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if (vik7.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik([<div key="kubik"><div className="vfx7k1"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(count === 8) {
                    setKubik5(Nicia)
                    setPodia(1)
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                }
                // else{
                //     console.log("Нічія");
                //     setPodia(1)
                    
                // };
            }else{
                setO_o([...o_o, 1])
                const newO = [...o_o, 1];
                setKubik(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik1.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik(<div><div className="vfo1k1"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik4.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik(<div><div className="vfo4k1"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik7.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik(<div><div className="vfo7k1"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                // else{
                //     console.log("Нічія");
                //     setPodia(1)
                // };
            }
        }
    }

    function CClick2 () {
        if(!kubik2) {
            console.log(2)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 2])
                const newX = [...x_x, 2];
                setKubik2([<div key="kubik2"><div className="paluchka1"></div><div className="paluchka2"></div></div>]);
                if(vik2.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik2([<div key="kubik2"><div className="vfx2k2"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik4.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik2([<div key="kubik2"><div className="vfx4k2"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
            }else{
                setO_o([...o_o, 2])
                const newO = [...o_o, 2];
                setKubik2(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik2.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik2(<div><div className="vfo2k2"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik4.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik2(<div><div className="vfo4k2"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick3 () {
        if(!kubik3) {
            console.log(3)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 3])
                const newX = [...x_x, 3];
                setKubik3([<div key="kubik3"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik3.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik3([<div key="kubik3"><div className="vfx3k3"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik4.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik3([<div key="kubik3"><div className="vfx4k3"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik8.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik3([<div key="kubik3"><div className="vfx8k3"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
            }else{
                setO_o([...o_o, 3])
                const newO = [...o_o, 3];
                setKubik3(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik3.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik3(<div><div className="vfo3k3"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik4.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik3(<div><div className="vfo4k3"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik8.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik3(<div><div className="vfo8k3"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick4 () {
        if(!kubik4) {
            console.log(4)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 4])
                const newX = [...x_x, 4];
                setKubik4([<div key="kubik4"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik1.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik4([<div key="kubik4"><div className="vfx1k4"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik5.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik4([<div key="kubik4"><div className="vfx5k4"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
            }else{
                setO_o([...o_o, 4])
                const newO = [...o_o, 4];
                setKubik4(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik1.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik4(<div><div className="vfo1k4"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik5.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik4(<div><div className="vfo5k4"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick5 () {
        if(!kubik5) {
            console.log(5)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 5])
                const newX = [...x_x, 5];
                setKubik5([<div key="kubik5"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik2.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5([<div key="kubik5"><div className="vfx2k5"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik5.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5([<div key="kubik5"><div className="vfx5k5"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik7.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5([<div key="kubik5"><div className="vfx7k5"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik8.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5([<div key="kubik5"><div className="vfx8k5"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
            }else{
                setO_o([...o_o, 5])
                const newO = [...o_o, 5];
                setKubik5(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik2.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5(<div><div className="vfo2k5"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik5.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5(<div><div className="vfo5k5"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik7.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5(<div><div className="vfo7k5"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik8.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik5(<div><div className="vfo8k5"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick6 () {
        if(!kubik6) {
            console.log(6)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 6])
                const newX = [...x_x, 6];
                setKubik6([<div key="kubik6"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik3.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik6([<div key="kubik6"><div className="vfx3k6"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
                else if(vik5.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik6([<div key="kubik6"><div className="vfx5k6"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                }
            }else{
                setO_o([...o_o, 6])
                const newO = [...o_o, 6];
                setKubik6(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik3.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik6(<div><div className="vfo3k6"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik5.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik6(<div><div className="vfo5k6"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick7 () {
        if(!kubik7) {
            console.log(7)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 7])
                const newX = [...x_x, 7];
                setKubik7([<div key="kubik7"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik1.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik7([<div key="kubik7"><div className="vfx1k7"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
                else if(vik6.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik7([<div key="kubik7"><div className="vfx6k7"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
                else if(vik8.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik7([<div key="kubik7"><div className="vfx8k7"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
            }else{
                setO_o([...o_o, 7])
                const newO = [...o_o, 7];
                setKubik7(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik1.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik7(<div><div className="vfo1k7"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik6.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik7(<div><div className="vfo6k7"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik8.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik7(<div><div className="vfo8k7"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick8 () {
        if(!kubik8) {
            console.log(8)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 8])
                const newX = [...x_x, 8];
                setKubik8([<div key="kubik8"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik2.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik8([<div key="kubik8"><div className="vfx2k8"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
                else if(vik6.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik8([<div key="kubik8"><div className="vfx6k8"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
            }else{
                setO_o([...o_o, 8])
                const newO = [...o_o, 8];
                setKubik8(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik2.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik8(<div><div className="vfo2k8"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik6.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik8(<div><div className="vfo6k8"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }

    function CClick9 () {
        if(!kubik9) {
            console.log(9)
            setCount(count+1)
            if(count % 2 === 0) {
                setX_x([...x_x, 9])
                const newX = [...x_x, 9];
                setKubik9([<div key="kubik9"><div className="paluchka1"></div>, <div className="paluchka2"></div></div>]);
                if(vik3.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik9([<div key="kubik9"><div className="vfx3k9"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
                else if(vik6.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik9([<div key="kubik9"><div className="vfx6k9"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
                else if(vik7.every(x => newX.includes(x))) {
                    setPl1(pl1+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik9([<div key="kubik9"><div className="vfx7k9"></div><div className="paluchka1"></div> <div className="paluchka2"></div></div>]);
                    setPodia(1)
                    console.log("yraaaaX1");
                }
            }else{
                setO_o([...o_o, 9])
                const newO = [...o_o, 9];
                setKubik9(<svg width="250" height="250" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                        <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                    </circle>
                </svg>)
                if(vik3.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik9(<div><div className="vfo3k9"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik6.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik9(<div><div className="vfo6k9"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
                else if(vik7.every(x => newO.includes(x))) {
                    setPl2(pl2+1);
                    setCount(0);
                    setX_x([]);
                    setO_o([]);
                    setKubik9(<div><div className="vfo7k9"></div><svg width="250" height="250" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="yellow" strokeWidth="5" strokeDasharray="251.327" strokeDashoffset="251.327">
                            <animate attributeName="stroke-dashoffset" from="251.327" to="0" dur="1s" repeatCount="1" fill="freeze"/>
                        </circle>
                    </svg></div>);
                    setPodia(1)
                }
            }
        }
    }
        // }
    return (
        <div className="forma2">
            <div className="pole_head">
                <div className="head1 head_components">
                    <div className="head1_1">
                        <p>{player1}</p>
                        <p>X</p>
                    </div>
                    <p className="head1_2">{pl1}</p>
                </div>
                <div className="head2 head_components">
                    <p>Ціль гри</p>
                    <p>{check}</p>
                </div>
                <div className="head3 head_components">
                    <div className="head3_1">
                        <p>{player2}</p>
                        <p>O</p>
                    </div>
                    <p className="head3_2">{pl2}</p>
                </div>
            </div>
            <div className="pole_main">
                <div className="kybuk1 fon" onClick={CClick1}>
                    {/* {!pokaz && figura}
                    {pokaz && figura2} */}
                    {kubik}
                </div>
                <div className="kybuk2 fon" onClick={CClick2}>
                    {kubik2}
                </div>
                <div className="kybuk3 fon" onClick={CClick3}>
                    {kubik3}
                </div>
                <div className="kybuk4 fon" onClick={CClick4}>
                    {kubik4}
                </div>
                <div className="kybuk5 fon" onClick={CClick5}>
                    {kubik5}
                </div>
                <div className="kybuk6 fon" onClick={CClick6}>
                    {kubik6}
                </div>
                <div className="kybuk7 fon" onClick={CClick7}>
                    {kubik7}
                </div>
                <div className="kybuk8 fon" onClick={CClick8}>
                    {kubik8}
                </div>
                <div className="kybuk9 fon" onClick={CClick9}>
                    {kubik9}
                </div>
            </div>
        </div>
    )
}

export default GamePole