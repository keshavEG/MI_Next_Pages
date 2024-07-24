import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AllPlans = () => {
    return (
        <div className='allplans-heading-div'>
            <Container>
                <h1 className='allplans-heading'>Additional <span style={{ color: 'grey'}}>Features</span> in All Plans</h1>
                <div className='allplans-features-div'>
                    <Row>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Historical Data Since Jan 2010</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Monthly Data Updates</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Unlimited Search Rights</p></div></Col>
                    </Row>

                    <Row>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Unlimited Viewing Rights</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Unlimited Company Profiles Search</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Unlimited Shipment Records Search</p></div></Col>
                    </Row>

                    <Row>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Unlimited Data Visualization</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Unlimited Add to Favorite Shipments</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Priority 24*7 Customer Support</p></div></Col>
                    </Row>

                    <Row>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>120K Shipment Records Download</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>1000 Credits for Contact Information</p></div></Col>
                        <Col lg md={4} sm={12}><div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}><Image width={20} height={20} alt="" src="/arrow.png" /><p style={{ marginLeft: '10px', marginTop: '10px'}}>Roll over Credits</p></div></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default AllPlans