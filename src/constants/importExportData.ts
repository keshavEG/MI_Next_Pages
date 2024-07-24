
interface Data {
    [key: string]: {
      text: string;
      imageSrc: string;
    }[];
  }
  
  export const data: Data = {
    "ALL DATA": [
      { text: "195+ Countries Trade Data", imageSrc: "/arrow.png" },
      { text: "33 Statistical Countries", imageSrc: "/arrow.png" },
      { text: "109 Suez Canal BL Countries", imageSrc: "/arrow.png" },
      { text: "29 Exclusive Countries", imageSrc: "/arrow.png" },
      { text: "184 Mirror Countries", imageSrc: "/arrow.png" },
      { text: "190 Transit Countries", imageSrc: "/arrow.png" },
      { text: "54 Detailed Countries", imageSrc: "/arrow.png" },
      { text: "2 Bill of Lading Countries", imageSrc: "/arrow.png" },
      { text: "190+ Cargo BL Countries", imageSrc: "/arrow.png" }
    ],
    "DETAILED DATA": [
      { text: "54 Detailed Countries", imageSrc: "/arrow.png" }
    ],
    "STATISTICAL DATA": [
      { text: "33 Statistical Countries", imageSrc: "/arrow.png" }
    ],
    "MIRROR DATA": [
      { text: "184 Mirror Countries", imageSrc: "/arrow.png" }
    ],
    "BILL OF LADING": [
      { text: "2 Bill of Lading Countries", imageSrc: "/arrow.png" }
    ],
    "SC BILL OF LADING": [
      { text: "109 Suez Canal BL Countries", imageSrc: "/arrow.png" }
    ],
    "TRANSIT DATA": [
      { text: "190 Transit Countries", imageSrc: "/arrow.png" }
    ],
    "CARGO BL DATA": [
      { text: "190+ Cargo BL Countries", imageSrc: "/arrow.png" }
    ]
  };
  
  export const images: { [key: string]: string } = {
    "ALL DATA": "/alldata.png",
    "DETAILED DATA": "/detaileddata.png",
    "STATISTICAL DATA": "/statisticaldata.png",
    "MIRROR DATA": "/mirrordata.png",
    "BILL OF LADING": "/billoflading.png",
    "SC BILL OF LADING": "/scbilloflading.png",
    "TRANSIT DATA": "/transitdata.png",
    "CARGO BL DATA": "/cargobldata.png"
  };
  