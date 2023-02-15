import React from "react";
import {Link} from "react-router-dom"

export default function About() {

    let id = 600;

    return (
        <>
            <h1>Soy el componente about</h1>
            <button>
                <Link to={`/details/${id}`}>Ir al detalle</Link>
            </button>
        </>
    )

}