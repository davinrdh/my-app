import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export default function Footer() {
    const [active, setActive] = useState('home')
    console.log(active)
    return (
        <ContainerStyled mobile={true}>
            <div className='d-flex justify-content-evenly text-center py-3 w-100' style={{ boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
                <NavLinkStyled to={'/'} onClick={() => setActive('home')}>
                    {active === 'home' ? <Image src='/img/home1.png' width={25} /> :
                    <Image src='/img/home2.png' width={25} /> }
                    <p className='m-0' style={{ fontSize: '10px' }}>Home</p>
                </NavLinkStyled>
                <NavLinkStyled to={'/menu'} onClick={() => setActive('menu')}>
                    {active === 'menu' ? <Image src='/img/menu1.png' width={25} /> :
                        <Image src='/img/menu2.png' width={25} />}
                    <p className='m-0' style={{ fontSize: '10px' }}>Menu</p>
                </NavLinkStyled>
            </div>
        </ContainerStyled>
    )
}

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: grey;

    &.active {
        color: black;
    }
`

const ContainerStyled = styled.div`
  width: 25%;
  // display: flex;
  // justify-content: center;
  margin: auto;

  @media (max-width: 768px) {
    ${({ mobile }) =>
      mobile &&
      css`
        width: 100%;
      `}
  }
`
