"use client"
import { useData } from '@/context/store'
import { Button } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { capitalizeFirstLetter } from '@/lib/utils'

const CountryCard = () => {
    const { country } = useData();

    return (
        <div className='countrycard-div'>
            <div className='countrycard-inner-div'>
                <div>
                    <h1>{capitalizeFirstLetter(country)}</h1>
                    <h4><span style={{ color: '#FB923C', fontWeight: '600' }}>14</span> Asian Countries Detailed Data Covered</h4>
                    <p style={{ color: 'grey' }}>Thailand, Indonesia, Turkey, Singapore, Bangladesh, India, Russia, Pakistan, Philippines, Sri Lanka, Vietnam, Kazakhstan, Ukraine, Uzbekistan</p>
                </div>
                <div className='countrycard-content-div'>
                    <Row>
                        <Col><div className='earch-card-content'><span style={{ color: '#FB923C', fontWeight: '600' }}>05</span> Exclusive Countries Covered</div></Col>
                        <Col><div className='earch-card-content'>Additional Data Types Covered</div></Col>
                        <Col><div className='earch-card-content'><span style={{ color: '#FB923C', fontWeight: '600' }}>45</span> Countries Mirror Customs Data Covered</div></Col>
                        <Col><div className='earch-card-content'><span style={{ color: '#FB923C', fontWeight: '600' }}>36</span> Countries Suez Canal Bill of Lading Data Covered</div></Col>
                        <Col><div className='earch-card-content'><span style={{ color: '#FB923C', fontWeight: '600' }}>48</span> Countries Transit Data Covered</div></Col>
                    </Row>
                    <Button className='countrycard-content-btn' variant="contained" sx={{
                        backgroundColor: '#f8992f',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#f7aa59',
                        },
                    }}>Schedule A Demo</Button>
                </div>
            </div>
        </div>
    )
}

export default CountryCard