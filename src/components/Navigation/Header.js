import React from 'react'
import { Image, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar expand="lg" className="ms-1 py-0">
        <Navbar.Brand>
            <Image src='/img/logo.png' width={120} />
        </Navbar.Brand>
    </Navbar>
  )
}
