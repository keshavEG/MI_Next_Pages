"use client"
import { useData } from '@/context/store'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const PlanCards = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const { country, setCountry } = useData();

    const handleButtonClick = (buttonId: string) => {
        setActiveButton(buttonId);
        setCountry(buttonId)
    };  

    console.log("CHeck this output ------> ", country)

    return (
        <div className='planCard-div'>
            <Container>
                <Row>
                    <Col style={{ marginBottom: '20px'}} lg md={6} sm={12}>
                        <div className={`${activeButton === "asia" ? "border-div" : ""}`}>
                            <div className='single-plancard'>
                                <h2 className='country-name'>Asia</h2>
                                <h4 className='country-heading'>14 Asian Countries Detailed Data Covered</h4>
                                <p className='country-para'>Thailand, Indonesia, Turkey, Singapore, Bangladesh, India, Russia, Pakistan, Philippines, Sri Lanka, Vietnam, Kazakhstan, Ukraine, Uzbekistan</p>
                            </div>
                            <div className='sub-headings'>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>05</span> Exclusive Countries Covered</h4>
                                <h4 className='sub-heading-para'>Additional Data Types Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>45</span> Countries Mirror Customs Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>36</span> Countries Suez Canal Bill of Lading Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>48</span> Countries Transit Data Covered</h4>
                                <div className='plancard-btn plancard-btn-first'>
                                    <Button size='small' className='valuable-btn' variant="contained" sx={{
                                        backgroundColor: `${activeButton === "asia" ? "#f8992f" : "grey"}`,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#f8992f',
                                        },
                                    }} onClick={() => handleButtonClick("asia")}>Request A Demo</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginBottom: '20px'}} lg md={6} sm={12}>
                        <div className={`${activeButton === "africa" ? "border-div" : ""}`}>
                            <div className='single-plancard'>
                                <h2 className='country-name'>Africa</h2>
                                <h4 className='country-heading'>22 African Countries Detailed Data Covered</h4>
                                <p className='country-para'>Angola, Burundi, Chad, Ghana, Lesotho, Liberia, Malawi, Namibia, Nigeria, Tanzania, Zambia, Zimbabwe, DR Congo, Senegal, Sao Tome and Principe, Sierra Leone, Cameroon, Niger, Botswana, Ethiopia, Ivory Coast, Kenya, Uganda</p>
                            </div>
                            <div className='sub-headings'>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>17</span> Exclusive Countries Covered</h4>
                                <h4 className='sub-heading-para'>Additional Data Types Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>39</span> Countries Mirror Customs Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>21</span> Countries Suez Canal Bill of Lading Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>53</span> Countries Transit Data Covered</h4>
                                <div className='plancard-btn plancard-btn-second'>
                                    <Button size='small' className='valuable-btn' variant="contained" sx={{
                                        backgroundColor: `${activeButton === "africa" ? "#f8992f" : "grey"}`,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#f8992f',
                                        },
                                    }} onClick={() => handleButtonClick("africa")}>Request A Demo</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col style={{ marginBottom: '20px'}} lg md={6} sm={12}>
                        <div className={`${activeButton === "america" ? "border-div" : ""}`}>
                            <div className='single-plancard'>
                                <h2 className='country-name'>America</h2>
                                <h4 className='country-heading'>17 American Countries Detailed Data Covered</h4>
                                <p className='country-para'>USA, Brazil, Mexico, Bolivia, Guyana, Costa Rica, Guatemala, Nicaragua, Argentina, Chile, Colombia, Ecuador, Paraguay, Panama, Peru, Uruguay, Venezuela</p>
                            </div>
                            <div className='sub-headings'>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>06</span> Exclusive Countries Covered</h4>
                                <h4 className='sub-heading-para'>Additional Data Types Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>36</span> Countries Mirror Customs Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>16</span> Countries Suez Canal Bill of Lading Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>31</span> Countries Transit Data Covered</h4>
                                <div className='plancard-btn plancard-btn-third'>
                                    <Button size='small' className='valuable-btn' variant="contained" sx={{
                                        backgroundColor: `${activeButton === "america" ? "#f8992f" : "grey"}`,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#f8992f',
                                        },
                                    }} onClick={() => handleButtonClick("america")}>Request A Demo</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col style={{ marginBottom: '20px'}} lg md={6} sm={12}>
                        <div className={`${activeButton === "europe" ? "border-div" : ""}`}>
                            <div className='single-plancard'>
                                <h2 className='country-name'>Europe</h2>
                                <h4 className='country-heading'>06 European Countries Detailed Data Covered</h4>
                                <p className='country-para'>Turkey, Kosovo, Moldova, Russia, Ukraine, Kazakhstan</p>
                            </div>
                            <div className='sub-headings'>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>03</span> Exclusive Countries Covered</h4>
                                <h4 className='sub-heading-para'>Additional Data Types Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>45</span> Countries Mirror Customs Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>32</span> Countries Suez Canal Bill of Lading Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>50</span> Countries Transit Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>28</span> Countries Statistical Data Covered</h4>
                                <div className='plancard-btn plancard-btn-forth'>
                                    <Button size='small' className='valuable-btn' variant="contained" sx={{
                                        backgroundColor: `${activeButton === "europe" ? "#f8992f" : "grey"}`,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#f8992f',
                                        },
                                    }} onClick={() => handleButtonClick("europe")}>Request A Demo</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col style={{ marginBottom: '20px'}} lg md={6} sm={12}>
                        <div className={`${activeButton === "global" ? "border-div" : ""}`}>
                            <div className='single-plancard'>
                                <h2 className='country-name'>Global</h2>
                                <h4 className='country-heading'>53 Global Countries Detailed Data Covered</h4>
                                <p className='country-para'>Thailand, Indonesia, Turkey, Singapore, Bangladesh, India, Russia, Pakistan, Philippines, Sri Lanka, Vietnam, Kazakhstan, Ukraine, Uzbekistan, Burundi, Chad, Ghana, Lesotho, Liberia, Malawi, Namibia, Nigeria,</p>
                            </div>
                            <div className='sub-headings'>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>31</span> Exclusive Countries Covered</h4>
                                <h4 className='sub-heading-para'>Additional Data Types Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>184</span> Countries Mirror Customs Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>109</span> Countries Suez Canal Bill of Lading Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>193</span> Countries Transit Data Covered</h4>
                                <h4 className='sub-heading-para'><span style={{ color: '#fb923c', fontWeight: '700' }}>33</span> Countries Statistical Data Covered</h4>
                                <div className='plancard-btn plancard-btn-fifth'>
                                    <Button size='small' className='valuable-btn' variant="contained" sx={{
                                        backgroundColor: `${activeButton === "global" ? "#f8992f" : "grey"}`,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#f8992f',
                                        },
                                    }} onClick={() => handleButtonClick("global")}>Request A Demo</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PlanCards