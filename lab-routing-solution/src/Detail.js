import React from "react";
import { useParams } from "react-router-dom"

export default function Detail() {

    let { id } = useParams();
    
    return (
        <div>
            <h1>Soy el componente Detail</h1>
            <section>Detalle número {id} </section>
        </div>

    )

}