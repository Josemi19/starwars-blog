import React, { useState } from "react";

const Random = () => {
    const [nombres, setNombres] = useState(["Jose", "Pedro", "Valeria", "Samuel"])
    let randomNombre = () => {
        let index = Math.floor(Math.random() * nombres.length)
        let newnombres = nombres.filter(nombre => nombre != nombres[index])
        // setNombres(newnombres)
        return console.log(nombres[index])
    }
    return(
        <>
            <h1>{Hola}</h1>
        </>
    )
}
export default Random;