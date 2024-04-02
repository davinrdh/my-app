import React, { useState } from 'react'
import { Card, Carousel, Image } from 'react-bootstrap'
import styled from 'styled-components'
import Header from '../../components/Navigation/Header';
import Footer from '../../components/Navigation/Footer';

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState(false)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {popup === false &&
        <>
          <Header />
          <div style={{ backgroundImage: 'url(/img/motif.png)', backgroundSize: 'cover', height: '12.5rem' }} className='p-4'>
            <Card className='border-0 h-100' style={{ boxShadow: '0 0 7px 2px rgba(0, 0, 0, 0.1)' }}>
              <Card.Body className='py-2 px-4'>
                <p className='m-0'>Good Afternoon,</p>
                <p className='fw-semibold'>Guntur Saputro</p>
                <div className='d-flex w-100'>
                  <BadgeQr className='me-3 cursor-pointer' onClick={() => setPopup(true)}>
                    <Image src='/img/qr.png' width={50} />
                  </BadgeQr>
                  <div className='w-75' style={{ borderLeft: '1px dashed #343a4033' }}>
                    <div className='d-flex justify-content-between ms-3'>
                      <p className='mb-1'>Saldo</p>
                      <p className='mb-1 fw-semibold'>Rp 279.000</p>
                    </div>
                    <div className='d-flex justify-content-between ms-3'>
                      <p className='m-0'>Points</p>
                      <p className='m-0 text-muted fw-semibold'>2500</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image src='/img/bg-carousel.png' width={'100%'} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src='/img/bg-carousel.png' width={'100%'} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src='/img/bg-carousel.png' width={'100%'} />
            </Carousel.Item>
          </Carousel>
          <div className='fixed-bottom'>
            <Footer />
          </div>
        </>
      }
      {popup === true &&
        <div className='w-100 h-100' style={{ backgroundColor: 'white' }}>
          <div className='d-flex justify-content-end'>
            <div className='cursor-pointer me-3 mt-2' onClick={() => setPopup(false)}>
              <Image src='/img/closeIcon.png' width={25} />
            </div>
          </div>
          <div className='d-flex mt-5 justify-content-center'>
            <div className='text-center'>
              <p className='m-0'>Show the QR Code below to the cashier</p>
              <Image src='/img/qr.png' width={250} />
            </div>
          </div>
        </div>
      }
    </>
  )
}

const BadgeQr = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
`
