import React from 'react'
import Container from 'react-bootstrap/Container';
import './Register.css'

function Register() {
  return (
    <Container>
            <div className='container'>
                <div className='main-container'>
                    <div className='image-container'>
                </div>
                    <div className='detail-container'>
                        <h1 style={{ textAlign: 'center' }}>Welcome Back</h1>
                        <p style={{ textAlign: 'center', fontSize:'24px', marginTop:'-16px' }}>Register</p>
                        <form className='form-content' action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Mobile no' />
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder='Password' />
                            <button>Signup</button>
                            <p style={{ marginTop: '-20px'}}>OR</p>
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

export default Register