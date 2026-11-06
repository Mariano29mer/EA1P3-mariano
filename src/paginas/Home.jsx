import { useState } from "react";
import Boton from "../componentes/buton";
import Modal from "../componentes/modal";

function Home() {
    const [mostrar, setMostrar] = useState(false);

    function cerrarModal() {
        setMostrar(false);
    }

    function mostrarModal() {
        setMostrar(true);
    }

    return(
        <main>
            <h1>Home</h1>
            <Boton onClick={mostrarModal}>Boton</Boton>

            {mostrar && (
                <Modal>
                    <h2>Modal</h2>
                    <p>Este es el contenido del modal.</p>
                    <Boton onClick={cerrarModal}>Cerrar</Boton>
                </Modal>
            )}
        </main>
    )
}

export default Home;