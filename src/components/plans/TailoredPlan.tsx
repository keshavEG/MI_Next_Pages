import Image from 'next/image'
import React from 'react'
import { Button } from '@mui/material'

const TailoredPlan = () => {
    return (
        <div className='tailored-div'>
            <div className='tailored-heading-div'>
                <Image width={50} height={50} alt='' src="/tailored.png" />
                <h1 style={{ color: "white", textTransform: 'uppercase'}}>Tailored PLan</h1>
                <p style={{ color: "white" }}>Customize plan according to your specific business needs</p>
                <Button size='small' className='valuable-btn' variant="contained" sx={{
                    backgroundColor: '#f8992f',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#f8992f',
                    },
                }}>Schedule A Demo</Button>
            </div>
        </div>
    )
}

export default TailoredPlan