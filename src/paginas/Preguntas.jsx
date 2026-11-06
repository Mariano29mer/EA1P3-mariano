import { useState } from "react";
import Boton from "../componentes/buton"
import Modal from "../componentes/modal"

function Preguntas() {
    const [mostrar, setMostrar] = useState(false);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [comentarios, setComentarios] = useState("");

    const [mensaje, setMensaje] = useState("")


    function cerrarModal() {
        setMostrar(false);
    }

    function enviarFormulario(evento){
        evento.preventDefault();

        if(
            nombre.trim() === "" ||
            correo.trim() === "" ||
            comentarios.trim() === ""
        ){
            setMensaje("Complete los campos")
        } else{
            limpiarFormulario()
            setMensaje("Se envio correctamente")
        }
        setMostrar(true)
    }

    function limpiarFormulario() {
        setNombre("");
        setCorreo("");
        setComentarios("");
    }

    return(
        <main>
            <h1>Preguntas</h1>

            <form onSubmit={enviarFormulario}> 
                <label>Nombre:</label>
                <input 
                    type="text"
                    value={nombre}  
                    onChange={(evento) =>setNombre(evento.target.value)} 
                />
                <label>Correo:</label>
                <input 
                    type="email"
                    value={correo}
                    onChange={(evento) =>setCorreo(evento.target.value)} 
                />
                <label>Comentarios:</label>
                <textarea 
                    type="text"
                    value={comentarios}
                    onChange={(evento) =>setComentarios(evento.target.value)} 
                />
                <button type="submit">Enviar</button>

        
            </form>

            {mostrar && (
                <Modal>
                    <h2>Modal</h2>
                    <p>{mensaje}</p>
                    <Boton onClick={cerrarModal}>Cerrar</Boton>
                </Modal>
            )}
        </main>
    )
    }

    export default Preguntas;