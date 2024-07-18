"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function Products() {
    const [activeLink, setActiveLink] = useState('platform');
    const [activeLinkChild, setActiveLinkChild] = useState('visualise view')

    const handleClick = (link: React.SetStateAction<string>) => {
        setActiveLink(link);
    };

    const handleClickChild = (link: React.SetStateAction<string>) => {
        setActiveLinkChild(link);
    };

    return (
        <div className='services-div'>
            <h1 className='services-heading'>Our Products</h1>
            <p className='services-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Row className='product-row'>
                <Col className='product-first-col' md={2}>
                    <div className='service-nav'>
                        <a
                            className={activeLink === 'platform' ? 'active' : ''}
                            onClick={() => handleClick('platform')}
                        >
                            Platform
                        </a>
                        <a
                            className={activeLink === 'api' ? 'active' : ''}
                            onClick={() => handleClick('api')}
                        >
                            API
                        </a>
                        <a
                            className={activeLink === 'data' ? 'active' : ''}
                            onClick={() => handleClick('data')}
                        >
                            Data
                        </a>
                    </div>
                </Col>
                <Col className='product-second-col' md={9}>
                    <div className='product-second-heading'>
                        <h3>{activeLink === "platform" ? "Technological advancements provide a competitive edge" : activeLink === "api" ? "Unleash Global Market Insights with APIs" : "Latest Trade Datasets on Global Supply Chain"}</h3>
                        {/* <h3>Technological advancements provide a competitive edge</h3> */}
                    </div>
                    <Row>
                        <Col className='product-inner-div' md={7}>
                            <div className={activeLink != 'platform' ? 'product-child-inner-div' : ''}>


                                <div className='product-inner-nav'>
                                    <a
                                        className={activeLinkChild === 'visualise view' ? 'active' : ''}
                                        onClick={() => handleClickChild('visualise view')}
                                    >
                                        Visualise View
                                    </a>
                                    <a
                                        className={activeLinkChild === 'view profile' ? 'active' : ''}
                                        onClick={() => handleClickChild('view profile')}
                                    >
                                        View Profile
                                    </a>
                                    <a
                                        className={activeLinkChild === 'quick view' ? 'active' : ''}
                                        onClick={() => handleClickChild('quick view')}
                                    >
                                        Quick View
                                    </a>
                                </div>
                            </div>
                            <div className='product-inner-para-div'>
                                <p>
                                    {(activeLinkChild === 'visualise view' && activeLink === 'platform') ? `Gain access to extensive import-export data of 195+ countries. Access information about volume, value, and types of traded goods between nations.` : (activeLinkChild === 'view profile' && activeLink === 'platform') ?
                                        ` Get the flexibility to tailor the dashboard per your requirement and drive maximum value from the information. `
                                        : (activeLinkChild === 'quick view' && activeLink === 'platform') ? `Get detailed competitor analysis to obtain insights into competitor's complete information. Analyze competitor's data, monitor their activities and formulate strategies.` : (activeLink === 'api') ? 'Discover trade developments in the global market and access in-depth trade analysis, import/export turnover, commodities, and trade partners. Access details about shipment statuses, tracking information, routes, and delivery times to streamline logistics and enhance supply chain visibility. ' : (activeLink === 'data' ? 'Market Inside exclusive Data License offers import-export raw data including offline records for inbound and outbound shipments, and offers trade information on global supply chains. Retrieve trade records, assorting, filtration, final delivery to users, and records of 195+ countries. ' : '')}

                                </p>
                            </div>
                        </Col>
                        <Col md={5}>
                            <Image
                                src={
                                    activeLink === 'platform' ?
                                        (activeLinkChild === 'visualise view' ? '/visualiseview.png' :
                                            activeLinkChild === 'view profile' ? '/viewprofile.png' :
                                                activeLinkChild === 'quick view' ? '/quickview.png' : '/data.png') :
                                        activeLink === 'api' ? '/api.png' : '/data.png'
                                }
                                width={300}
                                height={300}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Products