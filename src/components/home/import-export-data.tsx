'use client'
import Image from "next/image";
import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";

function ImportExportData() {
    const [activeButton, setActiveButton] = useState('ALL DATA');

    const handleClick = (classcss) => {
        setActiveButton(classcss);
    };

    const renderContent = () => {
        switch (activeButton) {
            case 'ALL DATA':
                return (
                    <>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                                </div>
                                <p>195+ Countries Trade Data</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image loading="lazy" width={24} height={24} alt="" src="/arrow.png" />
                                </div>
                                <p>33 Statistical Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                                </div>
                                <p>109 Suez Canal BL Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                                </div>
                                <p>29 Exclusive Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image loading="lazy" width={24} height={24} alt="" src="/arrow.png" />
                                </div>
                                <p>184 Mirror Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                                </div>
                                <p>190 Transit Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                                </div>
                                <p>54 Detailed Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image loading="lazy" width={24} height={24} alt="" src="/arrow.png" />
                                </div>
                                <p>2 Bill of Lading Countries</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="importExportDataDiv">
                                <div>
                                    <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                                </div>
                                <p>190+ Cargo BL Countries</p>
                            </div>
                        </Col>
                    </>
                );
            case 'DETAILED DATA':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>54 Detailed Countries</p>
                    </div>
                );
            case 'STATISTICAL DATA':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>33 Statistical Countries</p>
                    </div>
                );
            case 'MIRROR DATA':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>184 Mirror Countries</p>
                    </div>
                );
            case 'BILL OF LADING':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>2 Bill of Lading Countries</p>
                    </div>
                );
            case 'SC BILL OF LADING':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>109 Suez Canal BL Countries</p>
                    </div>
                );
            case 'TRANSIT DATA':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>190 Transit Countries</p>
                    </div>
                );
            case 'CARGO BL DATA':
                return (
                    <div className="importExportDataDiv">
                        <div>
                            <Image width={24} height={24} alt="" loading="lazy" src="/arrow.png" />
                        </div>
                        <p>190+ Cargo BL Countries</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="importexport-div">
            <Container>
                <Row>
                    <Col>
                        <div className="text-3xl font-bold leading-10 uppercase text-neutral-400 max-md:max-w-full">
                            195+ <br /> Countries
                        </div>
                        <div className="mt-1.5 text-4xl font-bold leading-10 text-black uppercase max-md:max-w-full">
                            Import Export Data Online
                        </div>
                        <div className="mt-1.5 text-base leading-7 lowercase text-neutral-500 max-md:max-w-full mb-6">
                            <span className="uppercase">M</span>arket Inside Limited has one of the
                            largest online searchable databases of importing and exporting
                            countries, covering over 195 Countries which consist of 54 Detailed
                            Countries, 29 Exclusive Countries, 33 Statistical, 184 Mirror Data, 109
                            Suez Canal Bill Of Lading Data, 02 Bill Of Lading Data, 190+ Transit
                            Data and 190+ Cargo BL Data countries.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ borderRight: '1px solid black' }} md={3}>
                        <div className="importexportbuttons">
                            <button
                                className={activeButton === 'ALL DATA' ? 'active' : ''}
                                onClick={() => handleClick('ALL DATA')}
                            >
                                ALL DATA
                            </button>
                            <button
                                className={activeButton === 'DETAILED DATA' ? 'active' : ''}
                                onClick={() => handleClick('DETAILED DATA')}
                            >
                                DETAILED DATA
                            </button>
                            <button
                                className={activeButton === 'STATISTICAL DATA' ? 'active' : ''}
                                onClick={() => handleClick('STATISTICAL DATA')}
                            >
                                STATISTICAL DATA
                            </button>
                            <button
                                className={activeButton === 'MIRROR DATA' ? 'active' : ''}
                                onClick={() => handleClick('MIRROR DATA')}
                            >
                                MIRROR DATA
                            </button>
                            <button
                                className={activeButton === 'BILL OF LADING' ? 'active' : ''}
                                onClick={() => handleClick('BILL OF LADING')}
                            >
                                BILL OF LADING
                            </button>
                            <button
                                className={activeButton === 'SC BILL OF LADING' ? 'active' : ''}
                                onClick={() => handleClick('SC BILL OF LADING')}
                            >
                                SC BILL OF LADING
                            </button>
                            <button
                                className={activeButton === 'TRANSIT DATA' ? 'active' : ''}
                                onClick={() => handleClick('TRANSIT DATA')}
                            >
                                TRANSIT DATA
                            </button>
                            <button
                                className={activeButton === 'CARGO BL DATA' ? 'active' : ''}
                                onClick={() => handleClick('CARGO BL DATA')}
                            >
                                CARGO BL DATA
                            </button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="mapDiv">
                            <Image
                                width={600}
                                height={500}
                                alt=""
                                src={activeButton === "ALL DATA" ? "/alldata.png" : activeButton === "DETAILED DATA" ? "/detaileddata.png" : activeButton === "STATISTICAL DATA" ? "/statisticaldata.png" : activeButton === "MIRROR DATA" ? "/mirrordata.png" : activeButton === "BILL OF LADING" ? "/billoflading.png" : activeButton === "SC BILL OF LADING" ? "/scbilloflading.png" : activeButton === "TRANSIT DATA" ? "/transitdata.png" : "/cargobldata.png"} />
                            <div className="mt-7 max-md:max-w-full">
                                <div className="gap-5 max-md:flex-col max-md:gap-0">
                                    <div>
                                        <Row>

                                            {renderContent()}
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ImportExportData;
