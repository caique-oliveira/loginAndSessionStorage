import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo1 from '../../assets/logo/Logo1.png';
import './styles.css';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  /*  useEffect(() => {
     console.log("useEffect, change:", {
        email, password
     })
    }, [email, password]) */
    

    const handleLogin = (e) => {
        e.preventDefault();

        const isValidEmail = "teste@fpf.com";
        const isValidPassword = "100200"

        if(email === isValidEmail && password === isValidPassword) {
            navigate("/")
            localStorage.setItem("auth", "isLogged");
            
            window.location.reload();
        } else {
            alert("Email ou Senha inválido")
        }

    };

    return (
        <section id="Login">
            <div className='container'>
                <div className='container-login'>
                    <div className='wrap-login'>
                        <form className='login-form'>
                            <spa className='login-form-title'>
                                Bem vindo
                            </spa>
                            <spa className='login-form-title'>
                                <img src={Logo1} alt='logo login' />
                            </spa>

                            <div className='wrap-input'>
                                <input
                                    className={email !== '' ? 'has-val input' : 'input'}
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <span className='focus-input' data-placeholder='Email'></span>
                            </div>

                            <div className='wrap-input'>
                                <input
                                    className={password !== '' ? 'has-val input' : 'input'}
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span className='focus-input' data-placeholder='Password'></span>
                            </div>

                            <div className='container-login-form-btn'>
                                <button className='login-form-btn' onClick={handleLogin}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;