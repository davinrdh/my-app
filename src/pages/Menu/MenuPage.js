import React, { useRef, useState } from 'react'
import { Image, Nav, Tab } from 'react-bootstrap'
import styled from 'styled-components';
import Footer from '../../components/Navigation/Footer';

export default function MenuPage() {
    const [tabs, setTabs] = useState("seasonal");

    const seasonalReff = useRef(null);
    const bestSellerReff = useRef(null);
    const coffeeReff = useRef(null);

    // Fungsi untuk menangani klik navlink dan melakukan scroll ke tab pane yang sesuai
    const scrollToTab = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className='text-center py-3'>
                <h3 className='m-0'>MENU</h3>
            </div>
            <Tab.Container defaultActiveKey={tabs}>
                <Nav
                    className="d-flex p-0 overflow-auto"
                    activeKey={tabs}
                    onSelect={(selectedKey) => setTabs(selectedKey)}
                >
                    <Nav.Item>
                        <TabLink eventKey="seasonal" onClick={() => scrollToTab(seasonalReff)}>Seasonal Product</TabLink>
                    </Nav.Item>
                    <Nav.Item>
                        <TabLink eventKey="best" onClick={() => scrollToTab(bestSellerReff)}>Best Seller</TabLink>
                    </Nav.Item>
                    <Nav.Item>
                        <TabLink eventKey="coffee" onClick={() => scrollToTab(coffeeReff)}>Coffee</TabLink>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="seasonal" ref={seasonalReff}>
                        <div style={{ backgroundColor: '#FFF7FC' }}>
                            <h6 className='m-0 ms-3' style={{ fontSize: '14px', padding: '0.9rem 0' }}>Seasonal Product</h6>
                        </div>
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div className='d-flex justify-content-between m-3 mb-0 pb-3' style={{ borderBottom: '1px dashed #343a4033' }}>
                                    <Image src='/img/coffe.png' height={80} />
                                    <div>
                                        <p className='m-0 fw-semibold'>Raisin Delight Frappe</p>
                                        <p className='m-0 text-muted' style={{ fontSize: '9px' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur commodi officiis ut qui fugit quos aperiam quia quaerat perferendis.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='fw-bold me-3'>39.000</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div style={{ backgroundColor: '#FFF7FC' }}>
                            <h6 className='m-0 ms-3' style={{ fontSize: '14px', padding: '0.9rem 0' }}>Best Seller</h6>
                        </div>
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div className='d-flex justify-content-between m-3 mb-0 pb-3' style={{ borderBottom: '1px dashed #343a4033' }}>
                                    <Image src='/img/coffe.png' height={80} />
                                    <div>
                                        <p className='m-0 fw-semibold'>Raisin Delight Frappe</p>
                                        <p className='m-0 text-muted' style={{ fontSize: '9px' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur commodi officiis ut qui fugit quos aperiam quia quaerat perferendis.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='fw-bold me-3'>39.000</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div style={{ backgroundColor: '#FFF7FC' }}>
                            <h6 className='m-0 ms-3' style={{ fontSize: '14px', padding: '0.9rem 0' }}>Coffee</h6>
                        </div>
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div className='d-flex justify-content-between m-3 pb-3' style={{ borderBottom: '1px dashed #343a4033' }}>
                                    <Image src='/img/coffe.png' height={80} />
                                    <div>
                                        <p className='m-0 fw-semibold'>Raisin Delight Frappe</p>
                                        <p className='m-0 text-muted' style={{ fontSize: '9px' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur commodi officiis ut qui fugit quos aperiam quia quaerat perferendis.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='fw-bold me-3'>39.000</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="best" ref={bestSellerReff}>
                        <div style={{ backgroundColor: '#FFF7FC' }}>
                            <h6 className='m-0 ms-3' style={{ fontSize: '14px', padding: '0.9rem 0' }}>Best Seller</h6>
                        </div>
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div className='d-flex justify-content-between m-3 mb-0 pb-3' style={{ borderBottom: '1px dashed #343a4033' }}>
                                    <Image src='/img/coffe.png' height={80} />
                                    <div>
                                        <p className='m-0 fw-semibold'>Raisin Delight Frappe</p>
                                        <p className='m-0 text-muted' style={{ fontSize: '9px' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur commodi officiis ut qui fugit quos aperiam quia quaerat perferendis.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='fw-bold me-3'>39.000</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="coffee" ref={coffeeReff}>
                        <div style={{ backgroundColor: '#FFF7FC' }}>
                            <h6 className='m-0 ms-3' style={{ fontSize: '14px', padding: '0.9rem 0' }}>Coffee</h6>
                        </div>
                        {
                            Array(3).fill(0).map((_, i) => (
                                <div className='d-flex justify-content-between m-3 pb-3' style={{ borderBottom: '1px dashed #343a4033' }}>
                                    <Image src='/img/coffe.png' height={80} />
                                    <div>
                                        <p className='m-0 fw-semibold'>Raisin Delight Frappe</p>
                                        <p className='m-0 text-muted' style={{ fontSize: '9px' }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur commodi officiis ut qui fugit quos aperiam quia quaerat perferendis.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='fw-bold me-3'>39.000</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </>
    )
}

const TabLink = styled(Nav.Link)`
  color: grey;
  background: var(--white);
  padding: 0.667rem 1.067rem;
  gap: 0.533rem;
  font-weight: 500;
  font-size: 0.867rem;
  line-height: 150%;

  &.active {
    font-weight: 600;
    color: var(--primary);
    box-shadow: inset 0px -2px 0px 0px;
  }
  &:hover {
    cursor: pointer;
  }
`
