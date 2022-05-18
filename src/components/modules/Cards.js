import axios from "axios";
import { useEffect, useState } from "react";


const Cards = ({resident}) => {
    const [citizen,setCitizen] = useState([])

    useEffect(()=>{
        axios.get(resident)
            .then(e=>{
                setCitizen(e?.data)
            })
    },[])
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={citizen?.image} alt={citizen?.url} key={citizen?.url} />
            </div>
            <div className="card-info">
                <h2>{citizen?.name}</h2>
                <p className={citizen?.status}>Status: {citizen?.status}</p>
                <p>Origin: {citizen.origin?.name}</p>
                <p>Episodes: {citizen.episode?.length}</p>
            </div>
        </div>
    );
};

export default Cards;