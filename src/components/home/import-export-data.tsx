'use client';
import Image from "next/image";
import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { data, images } from "@/constants/importExportData";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ImportExportData() {
  const [activeButton, setActiveButton] = useState("ALL DATA");
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleClick = (classcss: string) => {
    setActiveButton(classcss);
  };

  const renderContent = () => {
    const activeData = data[activeButton];
    return activeData.map((item, index) => (
      <Col md={4} key={index}>
        <div className="importExportDataDiv">
          <div>
            <Image width={24} height={24} alt="" loading="lazy" src={item.imageSrc} />
          </div>
          <p>{item.text}</p>
        </div>
      </Col>
    ));
  };

  const renderAccordionContent = () => {
    return Object.keys(data).map((key, index) => (
      <Accordion
        key={key}
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}
        sx={{ backgroundColor: "white" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}bh-content`}
          id={`panel${index + 1}bh-header`}
        >
          <Typography className="typograph" sx={{ flexShrink: 0 }}>
            {key.replace(/_/g, ' ')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            {data[key].map((item, idx) => (
              <Col md={4} key={idx}>
                <div className="importExportDataDiv">
                  <div>
                    <Image width={24} height={24} alt="" loading="lazy" src={item.imageSrc} />
                  </div>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </AccordionDetails>
      </Accordion>
    ));
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
          <Col className="desktop-view" style={{ borderRight: "1px solid black" }} md={3}>
            <div className="importexportbuttons">
              {Object.keys(data).map((key) => (
                <button
                  key={key}
                  className={activeButton === key ? "active" : ""}
                  onClick={() => handleClick(key)}
                >
                  {key.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </Col>
          <Col className="desktop-view" md={9}>
            <div className="mapDiv">
              <Image width={600} height={500} alt="" src={images[activeButton]} />
              <div className="mt-7 max-md:max-w-full">
                <div className="gap-5 max-md:flex-col max-md:gap-0">
                  <div>
                    <Row>{renderContent()}</Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="mobile-view">
            <div>{renderAccordionContent()}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImportExportData;
