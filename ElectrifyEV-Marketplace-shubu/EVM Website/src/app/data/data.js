import {FiBriefcase, FiKey, FiPhone, FiMail,FiMapPin, LuTrees ,FiShield, GoRocket, MdDirectionsCar  } from '../assets/icons/vander'

export const counterData = [
    {
        title:'Vehicle Sell',
        target: '1548'
    },
    {
        title:'Award Gained',
        target: '25'
    },
    {
        title:'Years Experience',
        target: '9'
    },
]
export const featureData =[
    {
        title:'Evaluate Your EV',
        description:'If the distribution of letters and words is random, the reader will not be distracted from making.',
        icon: MdDirectionsCar
    },
    {
        title:'Meeting with Agent',
        description:'If the distribution of letters and words is random, the reader will not be distracted from making.',
        icon: FiBriefcase 
    },
    {
        title:'Close the Deal',
        description:'If the distribution of letters and words is random, the reader will not be distracted from making.',
        icon: FiKey
    }
]

export const teamData = [
    {
        images:'/images/client/ev.jfif',
        name:'ElectrifyeV',
        designation:'Developer',
    }
    
]
export const review = [
    {
        id: '1',
        profile: "/images/client/01.jpg",
        name: 'Calvin Carlo',
        designation: "Manager",
        description: "ElectrifyeV made the processes so easy. Electrifyev instantly increased the amount of interest and ultimately saved us over $10,000."
    },
    {
        id: '2',
        profile:"/images/client/02.jpg",
        name: 'Christa Smith',
        designation: "Manager",
        description: 'I highly recommend ElectrifyeV as the new way to sell your vehicle "by owner". My vehicle sold in 24 hours for the asking price. Best $400 you could spend to sell your vehicle.'
    }, {
        id: '3',
        profile: "/images/client/03.jpg",
        name: 'Christa Smith',
        designation: "Manager",
        description: "My favorite part about selling my vehicle myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!"
    }, {
        id: '4',
        profile: "/images/client/04.jpg",
        name: 'Christa Smith',
        designation: "Manager",
        description: "Great experience all around! Easy to use and efficient."
    }
]
export const properties = [
   
    {
        id: 1,
        image: '/images/property/s1.jpeg',
        name: 'BMW',
        Model: "E-Tron",
        Type: 'Automatic',
        Range: '436km',
        price: 400000,
        detail: ['/images/property/single/s1.jpeg', '/images/property/single/2', '/images/property/single/3', '/images/property/single/4.jpg', '/images/property/single/5.jpg']
    },
    {
        id: 2,
        image: '/images/property/b1.jpeg',
        name: 'Scott Bike',
        Model: 'Solace',
        Type: 'Manual',
        Range: '70km',
        price: 47999,
        detail: ['/images/property/single/s1.jpeg', '/images/property/single/2', '/images/property/single/3', '/images/property/single/4.jpg', '/images/property/single/5.jpg']
    },
    {
        id: 3,
        image:'/images/property/s3.jpg',
        name: 'li05-moped',
        Model: 'EM050',
        Type: 'Automatic',
        Range: '100km',
        price: 50000,
        detail: ['/images/property/single/s1.jpeg', '/images/property/single/2', '/images/property/single/3', '/images/property/single/4.jpg', '/images/property/single/5.jpg']
    },
    {
        id: 4,
        image: "/images/property/Autonext.jpeg",
        name: 'Autonxt',
        Model: "Autonxt X45H2",
        Type: 'Automatic',
        Range: '45HP',
        price: 2000000
    },
    {
        id: 5,
        image: "/images/property/paigo.jpeg",
        name: 'Piaggio',
        Model: "Piaggio Ape E-City FX",
        Type: 'Automatic',
        Range: '150km',
        Battery: '7.5kwh',
        price: 326000
        
    },
    {
        id: 6,
        image: "/images/property/marut.png",
        name: 'Marut',
        Model: 'AG 365',
        Camera: "Digital",
        Battery: "4V",
        price: 500000,
    }
];



export const rentals = [
    {
        
        id: 1,
        image: "/images/property/s11.jpg",
        name: 'BMW',
        Model: "X6",
        Type: 'Automatic',
        Range: '436km',
        price: '120',
        Location: 'Pune',
        bodytype: 'SUV',
    },

    {
        
        id: 2,
        image: "/images/property/buysearch1.jpeg",
        name: 'Toyota',
        Model: 'bz4x',
        Type: 'Automatic',
        Range: '500km',
        price: '100',
        Location: 'Mumbai',
        bodytype: 'SUV',
    },
    {

    id: 3,
        image: "/images/property/buysearch2.jpeg",
        name: 'Honda',
        Model: ' NS1',
        Type: 'Automatic',
        Range: '100km',
        price: '70',
        Location: 'Pune',
        bodytype: 'Sedan',
},
{

        id: 4,
        image: "/images/property/buysearch3.jpeg",
        name: 'Nissan',
        Model: 'JUKE',
        Type: 'Automatic',
        Range: '200km',
        price: '80',
        Location: 'Pune',
        bodytype: 'Sedan',
},

{
    id: 5,
    image: "/images/property/buysearch4.jpeg",
    name: 'Honda',
    Model: 'HR',
    Type: 'Automatic',
    Range: '300km',
    price: '100',
    Location: 'Pune',
    bodytype: 'Hatchback',
},

{
    id: 6,
    image: '/images/property/s2.jpeg',
    name: 'BMW iX',
    Model:'E-Tron',
    Type: 'Automatic',
    Range: '436km',
    price: '90',
    Location: 'Pune',
    bodytype: 'SUV',
}
];



export const propertiesDetails = [
    {
        
        id: 1,
        image: "/images/property/s11.jpg",
        name: 'BMW',
        Model: "X6",
        Type: 'Automatic',
        Range: '436km',
        price: 400000,
        Location: 'Pune',
        bodytype: 'SUV',
        kilometersDriven: 300,
        colour: 'Red',
        registrationYear: 2013,
        numOfOwners: 1,
        registration: 'MH12',
        description: 'X6 features a powerful yet fuel-efficient engine, providing a smooth and exhilarating driving experience. With its automatic transmission and advanced features like ABS, airbags, and traction control, it ensures safety on the road. The sleek red exterior, while the premium leather interior offers comfort and elegance. This car has been meticulously maintained, with only 300 kilometers driven . A range of 436km on a single charge, making it ideal for both city driving and long trips. Whether you are cruising through urban streets or embarking on an adventure, this BMW X6 delivers style, performance, and reliability',
        images: [
            "/images/property/v.jpg",
            "/images/property/v.jpg",
            "/images/property/v1.jpg",
            "/images/property/bi.jpg",
            "/images/property/bin.jpg"
        ]
    },
    {
        
        id: 2,
        image: "/images/property/buysearch1.jpeg",
        name: 'Toyota',
        Model: 'bz4x',
        Type: 'Automatic',
        Range: '500km',
        price: 379999,
        Location: 'Mumbai',
        bodytype: 'SUV', 
        kilometersDriven: 500,
        colour: 'Silver',
        registrationYear: 2019,
        numOfOwners: 1,
        registration: 'MH04',
        description: 'This is Toyota bz4x',
        images: [
            "/images/property/toy1.jpg",
            "/images/property/toy2.jpg",
            "/images/property/toy3.jpg",
            "/images/property/toy4.jpg",
            "/images/property/toy5.jpg"
        ]

    },
    {
        id: 3,
        image: "/images/property/buysearch2.jpeg",
        name: 'Honda',
        Model: ' NS1',
        Type: 'Automatic',
        Range: '100km',
        price: 50000,
        Location: 'Pune',
        bodytype: 'Sedan',
        kilometersDriven: 400,
        colour: 'Blue',
        registrationYear: 2020,
        numOfOwners: 1,
        registration: 'MH12',
        description: 'This is Honda NS1',
        images: [
            "/images/property/buysearch2.jpeg",
            "/images/property/honda1.jpg",
            "/images/property/honda2.jpg",
            "/images/property/honda4.jpg",
            "/images/property/honda6.jpg"
        ]
        
    },
    {
        id: 4,
        image: "/images/property/buysearch3.jpeg",
        name: 'Nissan',
        Model: 'JUKE',
        Type: 'Automatic',
        Range: '200km',
        price: 47000,
        Location: 'Pune',
        bodytype: 'Sedan',
        kilometersDriven: 200,
        colour: 'Gold',
        registrationYear: 2019,
        numOfOwners: 1,
        registration: 'MH12',
        description: 'This is Nissan JUKE',
        images: [
            "/images/property/nissan1.jpg",
            "/images/property/nissan2.jpg",
            "/images/property/nissan3.jpg",
            "/images/property/nissan4.jpg",
            "/images/property/nissan5.jpg"
        ]
        
    },
    {
        id: 5,
        image: "/images/property/buysearch4.jpeg",
        name: 'Honda',
        Model: 'HR',
        Type: 'Automatic',
        Range: '300km',
        price: 50000,
        Location: 'Pune',
        bodytype: 'Hatchback',
        kilometersDriven: 300,
        colour: 'Grey',
        registrationYear: 2017,
        numOfOwners: 1,
        registration: 'MH12',
        description: 'This is Honda HR',
        images: [
            "/images/property/hr1.jpg",
            "/images/property/hr2.jpg",
            "/images/property/hr3.jpg",
            "/images/property/hr4.jpg",
            "/images/property/hr5.jpg"
        ]
    },
    {
        id: 6,
        image: '/images/property/s2.jpeg',
        name: 'BMW iX',
        Model:'E-Tron',
        Type: 'Automatic',
        Range: '436km',
        price: 500000,
        Location: 'Pune',
        bodytype: 'SUV',
        kilometersDriven: 600,
        colour: 'Silver',
        registrationYear: 2019,
        numOfOwners: 1,
        registration: 'MH12',
        description: 'This is Toyota bz4x',
        images: [
            "/images/property/ix1.jpg",
            "/images/property/ix2.jpg",
            "/images/property/ix3.jpg",
            "/images/property/ix4.jpg",
            "/images/property/ix5.jpg"
        ]
    }
];
export const BikeDetails = [
    {
        id: 1,
        image: '/images/property/b1.jpeg',
        name: 'Scott',
        Model: 'Solace',
        Type: 'Manual',
        Range: '70km',
        price: 47999,
        Location: 'Pune',
        bodytype: 'Mountain',
        colour: 'Orange',
        
    },
    {
        id: 2,
        image: '/images/property/b2.jpeg',
        name: 'Scott',
        Model: 'Strike',
        Type: 'Manual',
        Range: '80km',
        price: 19999,
        Location: 'Pune',
        bodytype: 'Folding',
        colour: 'Green',
    },
    {
        id: 3,
        image: "/images/property/p1.jpeg",
        name: 'Triumph',
        Model: 'e ',
        Type: 'Manual',
        Range: '70km',
        price: 40000,
        Location: 'Pune',
        bodytype: 'Mountain',
        colour: 'Silver',
        
    },
    {
        id: 4,
        image: "/images/property/p2.jpeg",
        name: 'motovolt',
        Model: 'JU',
        Type: 'Manual',
        Range: '90km',
        price: 47000,
        Location: 'Pune',
        bodytype: 'Folding',
        colour: 'Black',
    },
    {
        id: 5,
        image: "/images/property/p3.jpeg",
        name: 'Honda',
        Model: 'HR',
        Type: 'Manual',
        Range: '60km',
        price: 30000,
        Location: 'Pune',
        bodytype: 'Mountain',
        colour: 'White',
    },
    {
        id: 6,
        image: '/images/property/p4.jpeg',
        name: 'Kona',
        Model:'E-Tron',
        Type: 'Manual',
        Range: '36km',
        price: 500000,
        Location: 'Pune',
        bodytype: 'Sports',
        colour: 'Black',
    }
];
export const scooterDetails = [
    {
        id: 2,
        image: '/images/property/p5.jpeg',
        name: 'Hero',
        Model: 'x',
        Type: 'Automatic',
        Range: '100km',
        price: 47999,
        kilometersDriven: 100,
        Location: 'Pune',
        bodytype: 'Road',
        colour: 'Black',
        
    },
    {
        id: 5,
        image: '/images/property/s4.jpeg',
        name: 'Scooter',
        Model: 'EM055',
        Type: 'Automatic',
        Range: '400km',
        price: 45000,
        kilometersDriven: 200,
        Location: 'Mumbai',
        bodytype: 'Sports',
        colour: 'Orange',
        
    },
    {
        id: 4,
        image:'/images/property/s3.jpg',
        name: 'li05-moped',
        Model: 'EM050',
        Type: 'Automatic',
        Range: '100km',
        price: 50000,
        kilometersDriven: 300,
        Location: 'Pune',
        bodytype: 'Road',
        colour: 'Red',
        
        
    },
    {
        id: 4,
        image: "/images/property/p6.jpeg",
        name: 'ola',
        Model: 'JUKE',
        Type: 'Automatic',
        Range: '200km',
        price: 47000,
        kilometersDriven: 600,
        Location: 'Pune',
        bodytype: 'Sports',
        colour: 'Silver',
    },
    {
        id: 5,
        image: "/images/property/p7.jpeg",
        name: 'Honda',
        Model: 'HR',
        Type: 'Automatic',
        Range: '300km',
        price: 50000,
        kilometersDriven: 400,
        Location: 'Pune',
        bodytype: 'Road',
        colour: 'Grey',
    },
    {
        id: 6,
        image: '/images/property/p8.jpeg',
        name: 'ola',
        Model:'E-Tron',
        Type: 'Automatic',
        Range: '436km',
        price: 500000,
        kilometersDriven: 600,
        Location: 'Pune',
        bodytype: 'Sport',
        colour: 'Black',
    }
];

export const autoDetails = [
    {
        id: 1,
        image: "/images/property/paigo.jpeg",
        name: 'Piaggio',
        Model: "Piaggio Ape E-City FX",
        Type: 'Automatic',
        Range: '150km',
        Battery: '7.5kwh',
        price: 326000,
        Location: 'Pune',
        kilometersDriven: 300,
        colour: 'Grey',
    },
    {
        id: 2,
        image: "/images/property/Azul lite.jpeg",
        name: 'Azul',
        Model: 'Azul E-Lite',
        Type: 'Automatic',
        Range: '70km',
        Battery: '12kwh',
        price: 112000,
        Location: 'Mumbai',
        kilometersDriven: 500,
        colour: 'Red',
    },
    {
        id: 3,
        image: "/images/property/Grevers.jpg",
        name: 'Greaves',
        Model: 'Greaves ELP Auto',
        Type: 'Automatic',
        Range: '100km',
        Battery: '8kwh',
        price: 292000,
        Location: 'Delhi',
        kilometersDriven: 400,
        colour: 'Grey',
        
    },
    {
        id: 4,
        image: "/images/property/kinetic.jpeg",
        name: 'Kinetic Green',
        Model: 'Kinetic Green',
        Type: 'Automatic',
        Range: '100km',
        Battery: '140ah',
        price: 145000,
        Location: 'Bangolore',
        kilometersDriven: 200,
        colour: 'Blue',
        
    },
    {
        id: 5,
        image: "/images/property/alt green.jpeg",
        name: 'Altigreen',
        Model: 'Altigreen neEV',
        Type: 'Automatic',
        Range: '300km',
        Battery: '140ah',
        price: 370000,
        Location: 'Pune',
        kilometersDriven: 300,
        colour: 'Green',
    },
    {
        id: 6,
        image: '/images/property/omega.jpg',
        name: 'Omega Selki',
        Model:'rage +',
        Type: 'Automatic',
        Range: '151km',
        Battery: '10.8kwh',
        price: 370000,
        Location: 'Pune',
        kilometersDriven: 600,
        colour: 'White',
    }
];

export const tractorDetails = [
    {
        id: 1,
        image: "/images/property/Autonext.jpeg",
        name: 'Autonxt',
        Model: "Autonxt X45H2",
        Type: 'Automatic',
        Range: '45HP',
        price: 2000000,
        Location: 'Pune',
        kilometersDriven: 400,
        colour: 'Red',
    },
    {
        id: 2,
        image: "/images/property/sonalika.jpeg",
        name: 'Sonalika',
        Model: 'bz4x',
        Type: 'Automatic',
        Range: '75HP',
        price: 14500000,
        Location: 'Mumbai',
        kilometersDriven: 400,
        colour: 'Blue',
    },
    {
        id: 3,
        image: "/images/property/HAV.jpeg",
        name: 'HAV Tractors',
        Model: ' HAV 45 S1',
        Type: 'Automatic',
        Range: '44HP',
        price: 2000000,
        Location: 'Pune',
        kilometersDriven: 400,
        colour: 'Blue',
        
    },
    {
        id: 4,
        image: "/images/property/celestial.jpeg",
        name: 'Celestial',
        Model: 'Celestial 27 HP',
        Type: 'Automatic',
        Range: '27HP',
        price: 6000000,
        Location: 'Pune',
        kilometersDriven: 200,
        colour: 'Green',
        
    },
    {
        id: 5,
        image: "/images/property/tafe.jpeg",
        name: 'Tafe',
        Model: 'Tafe 59000 DI',
        Type: 'Automatic',
        Range: '60HP',
        price: 8000000,
        Location: 'Mumbai',
        kilometersDriven: 300,
        colour: 'Orange',
    },
    {
        id: 6,
        image: '/images/property/mahindra.jpeg',
        name: 'Mahindra EV',
        Model:'Mahindra OJA',
        Type: 'Automatic',
        Range: '32HP',
        price: 6550000,
        Location: 'Pune',
        kilometersDriven: 600,
        colour: 'Red',
    }
];

export const droneDetails = [
    {
        id: 1,
        image: "/images/property/garuda.jpg",
        name: 'Garuda',
        Model: "bag version",
        Camera: "1080px",
        Battery: "3.7V",
        price: 200000,
        Location: 'Pune',
        colour: 'Mulicolour',
    },
    {
        id: 2,
        image: "/images/property/ideaforge.jpg",
        name: 'Ideaforge',
        Model: 'Ninja Drone',
        Camera: "1080px",
        Battery: "4V",
        price: 500000,
        Location: 'Mumbai',
        colour: 'White',
    },
    {
        id: 3,
        image: "/images/property/marut.png",
        name: 'Marut',
        Model: 'AG 365',
        Camera: "Digital",
        Battery: "4V",
        price: 500000,
        Location: 'Delhi',
        colour: 'Grey',
    },
    {
        id: 4,
        image: "/images/property/ig.jpg",
        name: 'IG',
        Model: 'IG Drone Agri',
        Camera: "Digital",
        Battery: "4V",
        price: 600000,
        Location: 'Mumbai',
        colour: 'Grey',
        
    },
    {
        id: 5,
        image: "/images/property/tsaw.jpg",
        name: 'Tsaw',
        Model: 'Maruti 3.1',
        Camera: "Digital",
        Battery: "3V",
        price: 500000,
        Location: 'Pune',
        colour: 'Blue',
    },
    {
        id: 6,
        image: '/images/property/riyal.jpg',
        name: 'Riyal',
        Model: 'DR',
        Camera: "Integrated",
        Battery: "4V",
        price: 200000,
        Location: 'Mumbai',
        colour: 'Multicolour',
    }
];

export const blogList = [
    {
        id:1,
        title: "Skills That You Can Learn In The Real Estate Market",
        date: "13th Sep, 2023",
        type: 'Industrial',
        image: "/images/property/1.jpg"
    },
    {
        id:2,
        title: "Learn The Truth About Real Estate Industry",
        date: "29th Nov, 2023",
        type: 'Industrial',
        image: "/images/property/2.jpg"
    },
    {
        id:3,
        title: "10 Quick Tips About Business Development",
        date: "29th Dec, 2023",
        type: 'Industrial',
        image: "/images/property/3.jpg"
    },
    {
        id:4,
        title: "14 Common Misconceptions About Business Development",
        date: "13th March, 2023",
        type: 'Industrial',
        image:"/images/property/4.jpg"
    },
    {
        id:5,
        title: "10 Things Your Competitors Can Teach You About Real Estate",
        date: "5th May, 2023",
        type: 'Industrial',
        image: "/images/property/5.jpg"
    },
    {
        id:6,
        title: "Why We Love Real Estate",
        date: "19th June, 2023",
        type: 'Industrial',
        image: "/images/property/6.jpg"
    },
    {
        id:7,
        title: "Skills That You Can Learn In The Real Estate Market",
        date: "20th June, 2023",
        type: 'Industrial',
        image: "/images/property/6.jpg"
    },
    {
        id:8,
        title: "Learn The Truth About Real Estate Industry",
        date: "31st Aug, 2023",
        type: 'Industrial',
        image: "/images/property/5.jpg"
    },
    {
        id:9,
        title: "10 Quick Tips About Business Development",
        date: "1st Sep, 2023",
        type: 'Industrial',
        image: "/images/property/4.jpg"
    },
    {
        id:10,
        title: "14 Common Misconceptions About Business Development",
        date: "3rd March, 2023",
        type: 'Industrial',
        image:"/images/property/3.jpg"
    },
    {
        id:11,
        title: "10 Things Your Competitors Can Teach You About Real Estate",
        date: "3rd March, 2023",
        type: 'Industrial',
        image: "/images/property/2.jpg"
    },
    {
        id:12,
        title: "Why We Love Real Estate",
        date: "3rd March, 2023",
        type: 'Industrial',
        image: "/images/property/1.jpg"
    }
]
export const conatctDetails = [
    {
        title:'Phone',
        description:'The phrasal sequence of the is now so that many campaign and benefit',
        contact:'+152 534-468-854',
        Icon:FiPhone
    },
    {
        title:'Email',
        description:'The phrasal sequence of the is now so that many campaign and benefit',
        contact:'contact@example.com',
        Icon:FiMail
    },
    {
        title:'Location',
        description:'The phrasal sequence of the is now so that many campaign and benefit',
        contact:'Hinjewadi Phase1 ,Pune',
        Icon:FiMapPin
    },
]
export const accordion = [
    {
        title: 'How does it work ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        title: 'Do I need a designer to use Hously ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        title: 'What do I need to do to start selling ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        title: 'What happens when I receive an order ?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    }
]
export const feature = [
    {
        title:'Comfortable',
        description:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        icon:'mdi mdi-cards-heart',
    },
    {
        title:'Extra Security',
        description:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        icon:'mdi mdi-shield-sun',
    },
    {
        title:'Luxury',
        description:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        icon:'mdi mdi-star',
    },
    {
        title:'Best Price',
        description:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        icon:'mdi mdi-currency-usd',
    },
    {
        title:'Stratagic Location',
        description:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        icon:'mdi mdi-map-marker',
    },
    {
        title:'Efficient',
        description:"If the distribution of letters and words is random, the reader will not be distracted from making.",
        icon:'mdi mdi-chart-arc',
    }
]
export const listingData = [
    {
        image:"/images/property/residential.jpg",
        title:'Residential',
        noOfListing:46
    },
    {
        image:"/images/property/land.jpg",
        title:'Land',
        noOfListing:124
    },
    {
        image:"/images/property/commercial.jpg",
        title:'Commercial',
        noOfListing:265
    },
    {
        image:"/images/property/investment.jpg",
        title:'Industrial',
        noOfListing:452
    },
    {
        image:"/images/property/industrial.jpg",
        title:'Investment',
        noOfListing:12
    },
]
export const pricingPlan = [
    {
        title:'Basic',
        time:19,
        Icon:LuTrees ,
        fearures:['Full Access','Source Files','Free Appointments','Enhanced Security']
    },
    {
        title:'Premium',
        time:39,
        Icon:FiShield ,
        fearures:['Full Access','Source Files','Free Appointments','Enhanced Security']
    },
    {
        title:'Business',
        time:99,
        Icon:GoRocket,
        fearures:['Full Access','Source Files','Free Appointments','Enhanced Security']
    },

]

