import Image from 'next/image'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@mui/material';

const ValuableInsight = () => {
    return (
        <div className='valuable-insight-div'>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1 className='valuable-heading' style={{ color: '#a0a0a0' }}>Set Your <span style={{ color: 'black' }}> Business In Motion </span> With Valuable Insights!</h1>
                        <Image className='valuable-img-mobile' width={300} height={300} alt='' src="/valuable.png" />
                        <p className='valuable-para'>Enhance your business intelligence with Market Inside’s supply chain data analytical insights and pave the way for business expansion. Request a demo for our online trade intelligence today!</p>
                        <Button className='valuable-btn' variant="contained" sx={{
                            backgroundColor: '#f8992f',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#f7aa59',
                            },
                        }}>Request A Demo</Button>
                    </Col>
                    <Col md={4}>
                        <Image className='valuable-img' width={300} height={300} alt='' src="/valuable.png" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ValuableInsight