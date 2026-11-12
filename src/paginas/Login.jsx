import { useState } from "react";
import {useNavigate} from "react-router-dom";
import './login.css'

function Login(){

    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const Navigate = useNavigate();


    function iniciarsesion(evento){
            evento.preventDefault();

            setCorreo("");
            setPass("");

            Navigate("/");
        }

    return(
        <main className='login'>
                    <div className='login-contenedor'>
                        <div className='login-pestana'>
                        <button className='activo' onClick={() => Navigate('/')}>Iniciar sesion</button>
                        <button onClick={() => Navigate('/registro')}>Registrarse</button>
                    </div>

                <div>
                    <h2>Bienvenido</h2>
                    <p>Inicia sesión con tu cuenta</p>

                    <form onSubmit={iniciarsesion}>
                        <input
                            type='email'
                            placeholder='Correo electrónico'
                            value={correo}
                            onChange={(evento) => setCorreo(evento.target.value)}
                            required
                        />
                        <input
                            type='password'
                            placeholder='Contraseña'
                            value={pass}
                            onChange={(evento) => setPass(evento.target.value)}
                            required
                        />

                        <button type='submit'>Iniciar sesion</button>
                    </form>
                    </div>
                </div>
        </main>
    )
}

export default Login;