"use client"
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Row, Container, Col } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useData } from '@/context/store';

const PlansHeader = () => {

    const { country } = useData()

    return (
        <div className='plans-header-div'>
            <Container>
                <Row>
                    <Col style={{ marginTop: '50px', marginLeft: '50px'}} className='first-img'>
                        <Image
                            // src="/globe.png"
                            src={country === "asia" ? "/continental-map/asia.png" : country === "africa" ? "/continental-map/africa.png" : country === "america" ? "/continental-map/south-america.png" : country === "europe" ? "/continental-map/europe.png" : "/globe.png"}
                            width={400}
                            height={400}
                            alt="globe-image"
                        />
                    </Col>
                    <Col>
                        <div className="plan-heading flex flex-col flex-wrap content-end max-w-[534px]">
                            <div className='heading-text-div'>
                                <div className="get-access self-start text-3xl font-bold text-black uppercase leading-[36px]">
                                    choose
                                </div>
                                <div className="market-intelligence self-start text-5xl font-bold text-orange-400 uppercase leading-[46px]">
                                    the Right Plan  <br />
                                    <span style={{ color: 'black' }}>for Your Business</span>
                                </div>
                            </div>

                            <div className='second-img'>
                                <Image
                                    src={country === "asia" ? "/continental-map/asia.png" : country === "africa" ? "/continental-map/africa.png" : country === "america" ? "/continental-map/south-america.png" : country === "europe" ? "/continental-map/europe.png" : "/globe.png"}
                                    width={300}
                                    height={300}
                                    alt="globe-image"
                                />
                            </div>
                            <div className='header-icon-div'>
                                <Row>
                                    <Col><Image width={200} height={200} alt='' src="/uncheckplan.png" /></Col>
                                    <Col><Image width={200} height={200} alt='' src="/checkplan.png" /></Col>
                                    <Col><Image width={200} height={200} alt='' src="/uncheckplan.png" /></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default PlansHeader