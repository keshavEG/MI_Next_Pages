'use client'
import { button } from "@nextui-org/theme";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";



function ImportExportData() {
    const [displayText, setDisplayText] = useState('195+ Countries Trade Data');
    const [activeButton, setActiveButton] = useState('ALL DATA');

    const handleClick = (text: SetStateAction<string>, classcss: SetStateAction<string>) => {
        console.log("Here is the data------> ", text)
        setDisplayText(text);
        setActiveButton(classcss);
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
                                onClick={() => handleClick('ALL DATA', 'ALL DATA')}
                            >
                                ALL DATA
                            </button>
                            <button
                                className={activeButton === 'DETAILED DATA' ? 'active' : ''}
                                onClick={() => handleClick('DETAILED DATA', 'DETAILED DATA')}
                            >
                                DETAILED DATA
                            </button>
                            <button
                                className={activeButton === 'STATISTICAL DATA' ? 'active' : ''}
                                onClick={() => handleClick('STATISTICAL DATA', 'STATISTICAL DATA')}
                            >
                                STATISTICAL DATA
                            </button>
                            <button
                                className={activeButton === 'MIRROR DATA' ? 'active' : ''}
                                onClick={() => handleClick('MIRROR DATA', 'MIRROR DATA')}
                            >
                                MIRROR DATA
                            </button>
                            <button
                                className={activeButton === 'BILL OF LADING' ? 'active' : ''}
                                onClick={() => handleClick('BILL OF LADING', 'BILL OF LADING')}
                            >
                                BILL OF LADING
                            </button>
                            <button
                                className={activeButton === 'SC BILL OF LADING' ? 'active' : ''}
                                onClick={() => handleClick('SC BILL OF LADING', 'SC BILL OF LADING')}
                            >
                                SC BILL OF LADING
                            </button>
                            <button
                                className={activeButton === 'TRANSIT DATA' ? 'active' : ''}
                                onClick={() => handleClick('TRANSIT DATA', 'TRANSIT DATA')}
                            >
                                TRANSIT DATA
                            </button>
                            <button
                                className={activeButton === 'CARGO BL DATA' ? 'active' : ''}
                                onClick={() => handleClick('CARGO BL DATA', 'CARGO BL DATA')}
                            >
                                CARGO BL DATA
                            </button>
                        </div>
                    </Col>
                    <Col md={9}>


                        <div className="mapDiv">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83badc114813cc0ef53eeae33628f5ee69b4b8070ace3dd56ac004ee609b510f?"
                                className="self-center max-w-full aspect-[1.85] w-[608px]"
                            />
                            <div className="mt-7 max-md:max-w-full">
                                <div className="gap-5 max-md:flex-col max-md:gap-0">

                                    <div>
                                        <Row>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            loading="lazy"
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            loading="lazy"
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            loading="lazy"
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            loading="lazy"
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            loading="lazy"
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            loading="lazy"
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="importExportDataDiv">
                                                    <div>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            alt=""
                                                            loading="lazy"
                                                            src="/arrow.png"
                                                        />
                                                    </div>
                                                    <p>{displayText}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default ImportExportData