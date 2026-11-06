import "./Tarjeta.css"

function Tarjeta({imagen, titulo, descripcion}){
    return(
        <div className="tarjeta">
            <img   
                className="imagenTarjeta"
                src={imagen}
                alt={titulo}
            />

            <h2>{titulo}</h2>
            <p>{descripcion}</p>

        </div>
    )
}

export default Tarjeta