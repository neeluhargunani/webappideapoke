import Royal from "../../assets/puffy_royal.png";
import Lux from "../../assets/puffy_lux.png";
import Cloud from "../../assets/puffy_cloud.png";
import Bedding from "../../assets/product_banner1.png"
import BedFrames from "../../assets/product_banner2.png"
import MatressClarity from "../../assets/MatressClarity.svg"
import USnews from "../../assets/USnews.svg"
import SleepDoctor from "../../assets/SleepDoctor.svg"
import People from "../../assets/People.svg"
import HGTV from "../../assets/HGTV.svg"
import CNet from "../../assets/CNet.svg"
import GoodHouseKeeping from "../../assets/GoodHouseKeeping.svg"
import Health from "../../assets/Health.svg"

export const awards = [
     { ico_image:MatressClarity,  alt: "MatressClarity"},
      { ico_image:USnews, alt: "USnews"},
      {  ico_image:SleepDoctor, alt: "SleepDoctor"},
      { ico_image:People,  alt: "People"  },
      {  ico_image: HGTV, alt: "HGTV" },
      {  ico_image:CNet, alt:"CNet" },
      {  ico_image:GoodHouseKeeping,  alt:"GoodHouseKeeping"},
      {  ico_image: Health, alt:"Health"},
 
    
      
    ];
   
    

export const puffy = [


  { title:"Puffy Royal", subtitle:"Hybrid", image:Royal , alt: "puffy royal", desc:"7-layer design with targeted support zones,luxurious cooling, and an ultra-plush feel.", cta:"/shopnow", ctaButton: 'Shop Now'},
  { title:"Puffy Lux", subtitle:"Hybrid", image:Lux, alt: "puffy lux", desc :"6-layer design with superior pressure relief, gel-infused cooling, and a medium-plush feel.",cta:"/shopnow", ctaButton: 'Shop Now'},
  { title:"Puffy Cloud Mattress",   image:Cloud , alt: "puffy cloud", desc:"5-layer all-foam design with gel-infused coolingand a medium-firm feel", cta:"/shopnow", ctaButton: 'Shop Now',},
 
];

export const product = [
  {
    bedding:[
      { title:"Bedding.", Heroimage: Bedding , alt: "bedding", desc:"Comforters, sheets pillows & more" , cta:"/shopBedding" , ctaButton: 'Shop Bedding'},

    ]
  },
   {
    bedframes:[
      { title:"Bed frames.", Heroimage:BedFrames, alt: "BedFrames", desc:"Adjustable bases, bed frames & foundations." , cta:"/shopBedFrames", ctaButton: 'Shop Bed Frames',},

    ]
   },
   ];
 


   export const Footerdata = [
 
    {
      title: 'Company',
      items: [
        { linkDest: '/', text: '  Gift Shop' },
        { linkDest: '/', text: ' Black Friday Mattress Sale' },
        {  linkDest: '/', text: '    Education Discount' },
        { linkDest: '/', text: ' Military Discount',  },
        { linkDest: '/', text: ' Healthcare Discount',  },
        { linkDest: '/', text: '   Affiliate Program' },
        {  linkDest: '/', text: ' Puffy Donations' },
        { linkDest: '/', text: ' Mattress Awards',  },
        { linkDest: '/', text: ' Dealer',  },
        { linkDest: '/', text: ' Store Locations',  },
        { linkDest: '/', text: '   Refer a Friend' },

      ],
    },
    {
      title: 'Resources',
      items: [
        { linkDest: '/', text: 'Sitemap' },
        { linkDest: '/', text: 'How Its Made' },
        {  linkDest: '/', text: 'Perfect Sleep' },
        { linkDest: '/', text: ' Mattress Layers',  },
        { linkDest: '/', text: ' Sleep Calculator',  },
        { linkDest: '/', text: '  Bedroom Decor' },
        {  linkDest: '/', text: ' Sleep & Wellness' },
        { linkDest: '/', text: ' Lux Comfort',  },
        { linkDest: '/', text: ' Puffy Blog',  },
      ],
    },
    {
      title: 'Compare',
      items: [
        { linkDest: '/', text: 'Compare Mattresses' },
        {  linkDest: '/', text: 'Mattress Quiz' },
        { linkDest: '/', text: ' Puffy vs Purple Mattress',  },
        { linkDest: '/', text: ' Puffy vs Nectar Mattress',  },
        { linkDest: '/', text: '  Puffy vs Casper Mattress' },
        {  linkDest: '/', text: ' Puffy vs Saatva Mattress' },
        { linkDest: '/', text: ' Puffy vs Leesa Mattress',  },
        { linkDest: '/', text: ' Puffy vs DreamCloud Mattress',  },
      ],
    },
    {
      title: ' Support',
      items: [
        { linkDest: '/', text: '  Accessibility' },
        {  linkDest: '/', text: ' Reviews' },
        { linkDest: '/', text: '  Contact Us',  },
        { linkDest: '/', text: ' FAQs',  },
        { linkDest: '/', text: '   Shipping Policy' },
        {  linkDest: '/', text: ' Return Policy' },
        { linkDest: '/', text: '  Puffy Warranty',  },
        { linkDest: '/', text: '  101-Night Sleep Trial',  },
        { linkDest: '/', text: '   Track Your Order',  },
        { linkDest: '/', text: '  Financing',  },
      ],
    },
  ];
