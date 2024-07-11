import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Row, Container, Col } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FirstComponent() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='first-img'>
                        <Image
                            src="/globe.png"
                            width={500}
                            height={500}
                            alt="globe-image"
                        />
                    </Col>
                    <Col>
                        <div className="flex flex-col flex-wrap content-end max-w-[434px]">
                            <div className='heading-text-div'>
                                <div className="get-access self-start text-6xl font-bold text-black uppercase leading-[66px]">
                                    get access of
                                </div>
                                <div className="market-intelligence self-start text-6xl font-bold text-orange-400 uppercase leading-[66px]">
                                    market <br />
                                    intelligence
                                    <br />
                                    platform
                                </div>
                            </div>

                            <div className='second-img'>
                                <Image
                                    src="/globe.png"
                                    width={500}
                                    height={500}
                                    alt="globe-image"
                                />
                            </div>
                            <div className="mt-8 w-full bg-black border border-black border-dashed min-h-[1px]" />
                            <div className="mt-8 w-full text-xl font-semibold leading-5 text-black uppercase">
                                <span className="text-2xl font-bold">Grow Your Business</span>{" "}
                            </div>
                            <div className="flex gap-5 justify-among mt-5 w-full text-sm font-bold leading-4 uppercase">


                                <div>

                                    <TextField label="Enter your email" />
                                </div>



                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}
                                >
                                    Contained
                                </Button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default FirstComponent