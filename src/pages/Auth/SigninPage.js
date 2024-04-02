import React, { useEffect, useState } from 'react'
import { Button, Form, Image, InputGroup } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

export default function SigninPage() {
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        client_id: 'e78869f77986684a',
        client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
        grant_type: 'password'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://soal.staging.id/oauth/token', formData);
            console.log(response)

            if (response.status === 200) {
                localStorage.setItem('accessToken', response.data.access_token)
                localStorage.setItem('tokenType', response.data.token_type)
                window.location.href = '/home'
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };


    return (
        <div className='d-flex align-items-center p-4' style={{ height: '100vh' }}>
            <div className='text-center w-100 mb-5'>
                <Image src='/img/logo.png' className='mb-5' width={300} />
                <Form className="w-100 mt-2" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className='mb-2'
                            type='email'
                            value={formData.username}
                            onChange={(e) => handleChange(e)}
                            placeholder='Masukkan Email'
                            name='username'
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup className="mt-2">
                            <Form.Control
                                onChange={handleChange}
                                type='password'
                                value={formData.password}
                                placeholder='Masukkan Password'
                                name='password'
                            />
                            <EyeIcon style={{ right: '0', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: `<i class='fal fa-eye${!showPassword ? '-slash' : ''}'></i>`,
                                    }}
                                ></span>
                            </EyeIcon>
                        </InputGroup>
                    </Form.Group>
                    <Button
                        className='px-5 py-2 mt-3'
                        style={{ backgroundColor: 'white', border: '0', boxShadow: '0 0 7px 2px rgba(0, 0, 0, 0.1)', color: 'black' }}
                        type='submit'
                    >Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

const EyeIcon = styled.span`
  padding-top: 0.5rem;
  position: absolute;
  padding: 8px 10px;
  font-size: 16px;
  z-index: 6;
  color: var(--black-500);
  cursor: pointer;
`
