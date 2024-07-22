import React from 'react';
import DataPreparationStep from './DataPreparationStep';
import FreeTrialButton from '../ui/FreeTrialButton';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { Button } from '@mui/material';

interface DataStep {
    title: string;
    description?: string;
    expanded: boolean;
}

const dataSteps: DataStep[] = [
    { title: 'Retrieving Trade Records', expanded: false },
    { title: 'Assorting And Filtration', expanded: false },
    {
        title: 'Final Delivery To Users',
        description: 'The mine data process also pulls out any errors, and the final dataset is then exported into Excel formats—accessible from any device.',
        expanded: true
    }
];


const HowDataIsPrepared: React.FC = () => {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <div className='datapre-div'>
            <section className="flex flex-col">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <h2 className="data-prep justify-center self-center text-3xl font-bold leading-10 text-gray-400 uppercase max-md:max-w-full">
                        How This <span className="text-black">Data</span> Is Prepared?
                    </h2>
                    <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col self-stretch pt-20 my-auto max-md:mt-10 max-md:max-w-full">
                                    {/* <div className="flex flex-col px-6 pb-4 mt-6 rounded-xl bg-zinc-50 max-md:pl-5 max-md:max-w-full">
                                        <div className="flex z-10 flex-col mt-0">
                                            {dataSteps.map((step, index) => (
                                                <DataPreparationStep
                                                    key={index}
                                                    title={step.title}
                                                    description={step.description}
                                                    expanded={step.expanded}
                                                />
                                            ))}

                                        </div>
                                    </div> */}
                                    <div className='panel-div'>
                                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: 'white' }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >
                                                <Typography className='typograph' sx={{ flexShrink: 0 }}>
                                                    Retrieving Trade Records
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography className='typo'>
                                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                    Aliquam eget maximus est, id dignissim quam.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                            >
                                                <Typography className='typograph' sx={{ flexShrink: 0 }}>Assorting And Filtration</Typography>

                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography className='typo'>
                                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                                    laoreet.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3bh-content"
                                                id="panel3bh-header"
                                            >
                                                <Typography className='typograph' sx={{ flexShrink: 0 }}>
                                                    Final Delivery To Users
                                                </Typography>

                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography className='typo'>
                                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                            <div className="image-accor flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                                {/* <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c77c54d30fec410721e5e9270142daed4dd02d8c9abda589c28a647b4e620be?apiKey=eb52322d8492475fa80e1000b081f742&"
                                    alt="Data preparation process visualization"
                                    className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
                                /> */}
                                <Image width={600} height={600} alt='' src={expanded === 'panel1' ? '/first.png' : expanded === 'panel2' ? '/second.png' : '/third.png'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-accod flex gap-5 justify-between self-center mt-20 max-w-full w-[631px] max-md:flex-wrap max-md:mt-10">
                    <Button variant="contained" sx={{
                        backgroundColor: '#666666',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#828282',
                        },
                    }}>Records of over 190 countries</Button>
                    <Button variant="contained" sx={{
                        backgroundColor: '#666666',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#828282',
                        },
                    }}>5 Different types of trade data</Button>
                </div>
            </section>
        </div>
    );
};

export default HowDataIsPrepared;