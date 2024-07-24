import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button, ToggleButton } from '@mui/material';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionData = [
    {
        panel: 'panel1',
        title: 'Dive into Data Insights',
        content: 'Get insights into the export/import activities of 195+ countries. Navigate for uncharted territories for potential markets, their trading partners, products, HS Codes, trade routes, countries, ports, logistics firms, etc at our all-in-one dashboard.',
        image: '/first.png'
    },
    {
        panel: 'panel2',
        title: 'Conduct Smart Analysis',
        content: 'Analyze where the wind goes. Using our dashboard, get access raw data, and make careful analyses with various specifications such as country, HS code, Buyer, Supplier, Ports, and total values.',
        image: '/second.png'
    },
    {
        panel: 'panel3',
        title: 'Facilitates in Decision-Making',
        content: 'With better and right data, make informed decisions. Understand the workings of the global supply chain and business decisions with import-export trade data feeds from around the world.',
        image: '/third.png'
    }
];

const HowDataIsPrepared: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const getImageSrc = () => {
        const currentPanel = accordionData.find(item => item.panel === expanded);
        return currentPanel ? currentPanel.image : '/first.png';
    };

    return (
        <div className='datapre-div'>
            <section className="flex flex-col">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <h2 className="data-prep justify-center self-center text-3xl font-bold leading-10 text-gray-400 uppercase max-md:max-w-full">
                        {/* How This <span className="text-black">Data</span> Is Prepared? */}
                        How Does <span className="text-black">Data License</span> Help Your Organization ?
                    </h2>
                    <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col self-stretch pt-20 my-auto max-md:mt-10 max-md:max-w-full">
                                    <div className='panel-div'>
                                        {accordionData.map(({ panel, title, content }) => (
                                            <Accordion key={panel} expanded={expanded === panel} onChange={handleChange(panel)} sx={{ backgroundColor: 'white' }}>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${panel}bh-content`} id={`${panel}bh-header`}>
                                                    <Typography className='typograph' sx={{ flexShrink: 0 }}>
                                                        {title}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className='typo'>
                                                        {content}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Image width={600} height={600} alt='' src={getImageSrc()} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-accod flex gap-5 justify-between self-center mt-20 max-w-full w-[631px] max-md:flex-wrap max-md:mt-10">
                    {/* <Button variant="contained" sx={{ backgroundColor: '#666666', color: 'white', '&:hover': { backgroundColor: '#828282' } }}>
                        Records of over 190 countries
                    </Button> */}
                    {/* <ToggleButton value="web">Records of over 190 countries</ToggleButton> */}
                    <div className='record-div'>Records of over 190 countries</div>
                    <div className='record-div'>5 Different types of trade data</div>
                    {/* <Button variant="contained" sx={{ backgroundColor: '#666666', color: 'white', '&:hover': { backgroundColor: '#828282' } }}>
                        5 Different types of trade data
                    </Button> */}
                    {/* <ToggleButton value="web" disabled>5 Different types of trade data</ToggleButton> */}
                </div>
            </section>
        </div>
    );
};

export default HowDataIsPrepared;
