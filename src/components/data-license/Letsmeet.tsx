import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomersWorldwide from '../home/customers-worldwide'
import Image from 'next/image'

const Letsmeet = () => {
    return (
        <div className='letmeet-div'>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className='letmeet-left-div'>
                            <div>
                                <h3 style={{ color: '#a0a0a0' }}>Trusted By Clients All Over The World For <span style={{ color: 'black' }}>Global Supply Chain Solutions</span> </h3>
                            </div>
                            <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <Image
                                    loading="lazy"
                                    src="/wipag.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/alphagary.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/solvay.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/envalior.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/tecnar.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.43] w-[133px]"
                                />
                            </div>
                            <div className="customer-img-div flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <Image
                                    loading="lazy"
                                    src="/ampacet.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/mgg.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 self-start max-w-full aspect-[1.47] w-[133px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/sipol.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/vamp.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[134px]"
                                />
                                <Image
                                    loading="lazy"
                                    src="/ineos.png"
                                    width={100}
                                    height={100}
                                    alt=''
                                    className="shrink-0 max-w-full aspect-[1.45] w-[133px]"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className='letmeet-right-div'>
                            <div>
                                <h3 style={{ color: '#a0a0a0' }}>Explore Our Wide <span style={{ color: 'black' }}>Global Trade Database</span> </h3>
                            </div>
                            <main>
                                <section>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b927ce9bea9b4fb530b03be0825dc900d919857d1d35735ec9f03d3b5f43f2c0?apiKey=eb52322d8492475fa80e1000b081f742&"
                                        alt="Description of the image"
                                        className="w-full aspect-[0.68] max-w-[398px]"
                                    />
                                </section>
                            </main>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Letsmeet