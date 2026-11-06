import { useState } from "react";
import Tarjeta from "../componentes/tarjeta"
import Boton from "../componentes/buton"
import Modal from "../componentes/modal"

function Productos() {
    const [mostrar, setMostrar] = useState(false);

    function cerrarModal() {
        setMostrar(false);
    }

    function mostrarModal() {
        setMostrar(true);
    }
    return(
        <>
        <main>
            <h1>Productos</h1>
            <Tarjeta 
                imagen="/img/almendris.jpeg"
                titulo="Almendris"
                descripcion="Un chico muy guapo y migajero, al chile yo si le daba al morro, 17 brunette kawaii"
            >
            <Boton boton2={mostrarModal}>Boton</Boton>
            </Tarjeta>
            {mostrar && (
                <Modal>
                    <h2>Modal</h2>
                    <p>Este es el contenido del modal.</p>
                    <Boton boton2={cerrarModal}>Cerrar</Boton>
                </Modal>)}


        </main>
        </>
        )
        } 
    


    export default Productos