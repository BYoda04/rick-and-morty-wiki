import axios from "axios";
import { useEffect, useState } from "react";
import Loader from './Loader';
import Cards from "./modules/Cards";
import Title from "./modules/Title";
import portal from "../img/portal-gun.png";


const Body = () => {

    let random = Math.floor((Math.random()*126)+1)

    const [location,setLocation] = useState(random)
    const [loading,setLoading] = useState(true)
    const [id,setId] = useState("")
    const [dimension,setDimension] = useState([])
    const [residents,setResidents] = useState([])

    const searchDimension = (event)=>{
        event.preventDefault()
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(e=>{
                setResidents(e.data?.residents)
                setDimension(e?.data)
                setLoading(false)
            })
    }

    useEffect(()=>{
        setLocation()
        axios.get(`https://rickandmortyapi.com/api/location/${location}`)
            .then(e=>{
                setResidents(e.data?.residents)
                setDimension(e.data)
                setLoading(false)
            })
    },[location])

    return (
        <div className="aditional">
            {loading? <Loader /> : <>
                <form className="header">
                    <input type="text" onChange={e=>setId(e.target.value)} value={id}/>
                    <button onClick={searchDimension}><img src={portal} alt="portal-pistol" /></button>
                </form>
                <Title dimension={dimension} residents={residents}/>
                <div className="cards-container">
                    {residents?.map(resident=>(<Cards poblation={resident} key={resident}/>))}
                </div>
            </>}
        </div>
    );
};

export default Body;