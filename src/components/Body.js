import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './body/Header';
import Loader from './Loader';

const Body = () => {

    const randomNumber = parseInt(Math.floor(Math.random() * 126))
    const [state,setState] = useState(true)
    const [location,setLocation] = useState(randomNumber)
    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [dimension,setDimension] = useState("")
    const [residents,setResidents] = useState([])
    const [text,setText] = useState("")
    const changeDimension = () => {
        setLocation(parseInt(text))
        setText("")
    }

    
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${location}`)
        .then(r=>{
            console.log(r.data)
            setName(r.data.name)
            setType(r.data.type)
            setDimension(r.data.dimension)
            setResidents(r.data.residents)
            setTimeout(() => {
                setState(false)
            }, 1000);
        })
    },[location])

    return (
        <>
            {state? <Loader /> : <>
                <div className="header">
                    <div className="header-container">
                        <div>
                            <input type="number" value={text} onChange={e=> setText(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={changeDimension}>teleport</button>
                        </div>
                    </div>
                </div>
                <Header dimension={dimension} name={name} residents={residents.length} type={type}/>
            </>}
        </>
    );
};

export default Body;