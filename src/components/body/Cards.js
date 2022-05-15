import axios from 'axios';
import { useEffect, useState } from 'react';

const Cards = ({number,name}) => {

    const [proob,setProob] = useState([])
    let array = []
    let arrayResidents = []
    let posible = []

    useEffect(()=>{
        console.log(name)
        axios.get(`https://rickandmortyapi.com/api/location/${number}`)
            .then(r=>{
                setProob(r.data.residents)
                proob.map(e=>{
                    console.log(e)
                    array.push(e)
                    console.log(array)
                    console.log(array[0].split('/')[5])
                    for (let i = 0; i < array.length; i++) {
                        if (arrayResidents[i] !== array[i].split('/')[5]) {
                            arrayResidents.push(array[i].split('/')[5])
                        }
                    }
                    console.log(arrayResidents);
                })
                
            })

        axios.get(`https://rickandmortyapi.com/api/character/${arrayResidents[0]},${arrayResidents[4]}`)
            .then(r=>{
                console.log(r.data)
                posible.push(r.data )
                console.log(posible)
                posible.forEach(e=>{
                    console.log(e.name)
                })
            })
       
    },[])

    return (
        <ul>
            {posible.forEach(e=>(
                <li>{e.name}</li>
            ))}
        </ul>
    );
};

export default Cards;