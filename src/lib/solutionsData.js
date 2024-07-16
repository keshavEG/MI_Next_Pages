// lib/solutionsData.js
const getSolutionsData = () => {
  return [
    {
      id: "solution1",
      video: {
        videoSrcSet: "/importer_image.png",
        title: "Solution 1 Video",
        description: "Description for solution 1 video"
      },
      tabs: {
        heading: "Grow Your Business with Solution 1",
        tabs: {
          suppliers: {
            title: "Finding Suppliers",
            content: "Get access to worldwide suppliers as per your business needs and wants. Use our trade data to find them based on HS codes, country, location, and product description to negotiate trade value, units, and quantities for best-ever deals",
            image: "/finding_supplier_image.png"
          },
          competitors: {
            title: "Market Analysis",
            content: "Understand the top-selling commodities across the regions along with shipment records and analyze the market projection with Market Inside Platform. You can also understand the market value of top commodities based on weekly, monthly, quarterly, and yearly trade stats to identify the products. ",
            image: "/tracking_activity_importer.jpg"
          },
          activity: {
            title: "Tracking Sales Activity",
            content: "Know everything about your trade-related activities from ordering to shipping, country codes to HS codes, product descriptions to Seller details, etc. Using the Trade intelligence platform you can track suppliers' networks and analyze them by country to country for lasting growth. ",
            image: "/tracking_activity_importer.jpg"
          }
        }
      },
      insights: {
        heading: "Industry-Driven Insights for Solution 1",
        carouselItems: [
          {
            image: "/electronics_importer.png",
            title: "Electronics",
            content: "Is your electronic business ready to go global? Find out now with our global trade data about the market size. Build your business strategy by analyzing country-specific exports and forecast market growth. For instance, in 2022, electronics imports stood at USD 3.8 trillion. The EU will become the importer of Electronics goods in 2023."
          },
          {
            image: "/industrial_machinery_importer.png",
            title: "Pharmaceutical Industry",
            content: "The pharmaceutical industry is the most volatile industry, and the market direction changes with every global event. Make sure your top position in the market with our product-specific data using various parameters to get the market value. In 2023, the US, Belgium, and Germany became the biggest importers with USD 178, 73, and 71 Billion, respectively. "
          },
          {
            image: "/fuel_oil_importer.png",
            title: "Fuels And Oils",
            content: " In a world of fuel and oil, every drop brings trade prosperity. Let your business dive into opportunities by decoding demand and supply data. As per the market trend, the size of this industry will grow for the next two decades, from its current position of USD 4.3 trillion in 2022."
          },
          {
            image: "/fuel_oil_importer.png",
            title: "Others",
            content: " Get access to all top commodities using HS codes, product description and other parameters.Count all the most trending commodities at your fingertips with our global trade database. Analysis of the dynamic market indicates that Mineral fuels and oils trade stood at 8.3 trillion globally whereas Iron and steel valued at $1.1 trillion in 2022."
          },
          {
            image: "/fuel_oil_importer.png",
            title: "Agricultural Commodities",
            content: "The agricultural market shifts with every season. Fuel your business growth with data-driven strategies to understand the trade patterns based on season, top commodities, suppliers, etc. For instance,  the trade value for overall imported agricultural products crossed  USD 2 trillion in 2022, and the USA and China emerged as the largest importers in 202"
          }
        ]
      },
      links: {
        importers: "/importers",
        financialInstitutions: "/financial-institutions",
        consultingResearch: "/consulting-research",
        exporters: "/exporters",
        salesMarketing: "/sales-marketing",
        itConsulting: "/it-consulting"
      }
    },
    {
      id: "solution2",
      video: {
        videoSrcSet: "/importer_image.png",
        title: "Solution 2 Video",
        description: "Description for solution 2 video"
      },
      tabs: {
        heading: "Grow Your Business with Solution 2",
        tabs: {
          suppliers: {
            title: "Finding Suppliers",
            content: "Discover reliable suppliers for your business needs.",
            image: "/finding_supplier_image.png"
          },
          competitors: {
            title: "Trade Competitors",
            content: "Stay ahead of the competition by analyzing their trade activities.",
            image: "/tracking_activity_importer.jpg"
          },
          activity: {
            title: "Tracking Activity",
            content: "Monitor inbound and outbound shipments to ensure quality service.",
            image: "/tracking_activity_importer.jpg"
          },
        }
      },
      insights: {
        heading: "Industry-Driven Insights for Solution 2",
        carouselItems: [
          {
            image: "/electronics_importer.png",
            title: "Electronics",
            content: "Is your electronic business ready to go global? Find out now with our global trade data about the market size. Build your business strategy by analyzing country-specific exports and forecast market growth. For instance, in 2022, electronics imports stood at USD 3.8 trillion. The EU will become the importer of Electronics goods in 2023."
          },
          {
            image: "/industrial_machinery_importer.png",
            title: "Agriculture Commodities",
            content: "The agricultural market shifts with every season. Fuel your business growth with data-driven strategies to understand the trade patterns based on season, top commodities, suppliers, etc. For instance,  the trade value for overall imported agricultural products crossed  USD 2 trillion in 2022, and the USA and China emerged as the largest importers in 2023."
          },
          {
            image: "/fuel_oil_importer.png",
            title: "Fuels And Oils",
            content: "Petroleum and natural gas are the core industries that give 'fuel' or energy to different industries. Russia and Middle-East countries are the largest producers of oil in the world and export the highest to geographical locations such as China, the EU, and the USA."
          },
          {
            image: "/fuel_oil_importer.png",
            title: "Fuels And Oils",
            content: "Petroleum and natural gas are the core industries that give 'fuel' or energy to different industries. Russia and Middle-East countries are the largest producers of oil in the world and export the highest to geographical locations such as China, the EU, and the USA."
          }
        ]
      },
      links: {
        importers: "/importers",
        financialInstitutions: "/financial-institutions",
        consultingResearch: "/consulting-research",
        exporters: "/exporters",
        salesMarketing: "/sales-marketing",
        itConsulting: "/it-consulting"
      }
    }
    // Add more solutions as needed
  ];
};

export default getSolutionsData;
