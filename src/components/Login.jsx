import React from 'react'
import './Login.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container>
            <div className='container'>
                <div className='course-container'>
                    <div className='image1-container'></div>
                    <div className='detail-container'>
                        <h1 style={{ textAlign: 'center' }}>Welcome Back</h1>
                        <p style={{ textAlign: 'center', fontSize:'24px', marginTop:'-16px' }}>Login</p>
                        <form className='form-content' action="">
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder='Password' />
                            <div>
                                <p style={{ marginTop: '-20px', marginInline:'-170px' }}>forgot password?</p>
                            </div>
                            <button>Login</button>
                            <p style={{ marginTop: '-20px' }}>OR</p>
                            <Link to={'/register'}><button>Signup</button></Link>
                            <div>
                                <button className='google_button'><i class="fa-brands fa-google"></i></button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login