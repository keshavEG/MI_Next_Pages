import React from 'react'
import FreeTrialButton from '../ui/FreeTrialButton'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const FirstComponent = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };


    return (
        <div>
            <div className='casestudies-header'>
                <h1>Case Studies</h1>
                <p>Check out the case studies below to see how companies like yours use ZoomInfo to achieve successful business outcomes.</p>
                <div className='free-btn'>
                    <FreeTrialButton onClick={handleClick}>
                        Free Trial
                    </FreeTrialButton>
                </div>
            </div>

            <div className='casestudies-video'>
                <Row>
                    <Col md={6} sm={12}>
                        <div>
                            <Image width={500} height={500} alt='' src='/videotv.png' />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className='casestudies-text-div'>
                            <h2 className='casestudies-video-text' style={{ color: '#767676'}}>With Market Inside, we more than doubled our activity; and our efficiency skyrocketed. Since then, we’ve grown our pipeline over 90% per year.</h2>
                            <Image className='arrowinternational-img' width={200} height={200} alt='' src='/arrowinternational.png' />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FirstComponent