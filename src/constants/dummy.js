import { assets } from "."

export const customerReviewData = [
  {
    image: require("../../assets/images/person02.png"),
    name: "Mary Phiri",
    rating: "5",
    review: "The barbershop itself exuded a stylish and contemporary ambiance, with clean and well-maintained workstations. It was evident that attention to detail was a top priority here. The waiting area was comfortable and provided a variety of reading materials and refreshments to enjoy while I waited for my turn."
  },
  {
    image: require("../../assets/images/person01.png"),
    name: "Jane Star",
    rating: "4.8",
    review: "When it was my turn to get my haircut, I was paired with a talented barber who took the time to listen attentively to my requests and preferences. Their expertise and artistry were evident in every precise snip of the scissors. Not only did they masterfully execute the haircut I desired, but they also offered valuable advice and recommendations based on my hair type and face shape."
  },
  {
    image: require("../../assets/images/person03.png"),
    name: "Christabel Moon",
    rating: "4",
    review: "What truly set this barbershop apart was the overall experience. The barbers were engaging and ensured that I felt relaxed and comfortable throughout the entire process. They displayed excellent attention to detail, meticulously grooming my hair and beard with precision and care. The use of high-quality grooming products further enhanced the experience, leaving me feeling fresh and revitalized."
  },
  /* {
       image: require("../../assets/barbercut3.jpg"),
       name: "John Sakala",
       rating: "3.9",
       review: "The barbershop staff maintained a high level of cleanliness and hygiene. The equipment and tools were meticulously sanitized between customers, creating a safe and sanitary environment—an important aspect in today's world."
   },
   {
       image: require("../../assets/barbercut4.jpg"),
       name: "Timothy Mulenga",
       rating: "5",
       review: "The exceptional service I received at this barbershop made me feel like a valued customer. The staff's passion for their work and their commitment to customer satisfaction was evident in every interaction. It's rare to find a barbershop that consistently delivers such outstanding service, and I wholeheartedly recommend this establishment to anyone in need of exceptional grooming services."
   },
   {
       image: require("../../assets/barbercut1.jpg"),
       name: "Moses Daka",
       rating: "4.5",
       review: "From the moment I stepped through the door, I was greeted with warm smiles and a friendly atmosphere that instantly put me at ease. The level of professionalism and skill displayed by the barbers was truly exceptional, making it clear that this establishment takes great pride in their craft."
   },*/
]


const categoryData = [
  {
    id: 1,
    name: "Phones",
    cover: assets.slide1,
    brands: [
      'Apple',
      'Samsung',
      'Google',
      'OnePlus',
      'Xiaomi',
      'Huawei',
      'OPPO',
      'Vivo',
      'Sony',
      'LG',
      'Motorola',
      'Nokia',
      'Realme',
      'Asus',
      'Lenovo',
      'BlackBerry',
      'HTC',
      'Infinix',
      'Tecno',
      'Honor',
      'ZTE',
      'Alcatel',
      'Meizu',
      'Micromax',
      'Panasonic',
      'Gionee',
      'Lava',
      'LeEco',
      'Micromax',
      'Microsoft',
      'Sharp',
      'TCL',
      'Wiko',
      'YU',
      'ZUK',
    ]
  },
  {
    id: 2,
    name: "Computers",
    cover: assets.slide2,
    brands: [
      'Apple',
      'Dell',
      'HP',
      'Lenovo',
      'Asus',
      'Acer',
      'Microsoft',
      'MSI',
      'Samsung',
      'LG',
      'Sony',
      'Toshiba',
      'Razer',
      'Alienware',
      'Fujitsu',
      'Gateway',
      'Panasonic',
      'Chromebook',
    ]
  },
  {
    id: 3,
    name: "Headphones",
    cover: assets.slide3,
    brands: [
      'Sony',
      'Bose',
      'Sennheiser',
      'JBL',
      'AKG',
      'Audio-Technica',
      'Beats by Dre',
      'Skullcandy',
      'Shure',
      'Beyerdynamic',
      'Plantronics',
      'Jabra',
      'Bang & Olufsen',
      'Marshall',
      'SteelSeries',
      'HyperX',
      'Anker',
      'Razer',
      'Jaybird',
      'V-Moda',
    ]
  },
  {
    id: 4,
    name: "Speakers",
    cover: assets.slide1,
    brands: [
      'Bose',
      'JBL',
      'Sony',
      'Harman Kardon',
      'Sonos',
      'Bang & Olufsen',
      'Ultimate Ears',
      'Beats',
      'Yamaha',
      'Polk Audio',
      'Klipsch',
      'Marshall',
      'Sennheiser',
      'Audio-Technica',
      'Pioneer',
      'Denon',
      'LG',
      'Bowers & Wilkins',
    ]
  },
  {
    id: 5,
    name: "Earphones",
    cover: assets.slide2,
    brands: [
      'Apple',
      'Sony',
      'JBL',
      'Sennheiser',
      'Bose',
      'Skullcandy',
      'Beats',
      'Samsung',
      'Jabra',
      'Anker',
      'Audio-Technica',
      'Jaybird',
      'Plantronics',
      'Shure',
      'AKG',
      'Razer',
      'Beyerdynamic',
      'Panasonic',
      'TaoTronics',
    ]
  },
  {
    id: 6,
    name: "Accesories",
    cover: assets.slide3,
    brands: [
      'Chargers and Cables',
      'Phone Cases',
      'Screen Protectors',
      'Power Banks',
      'Headphones',
      'Bluetooth Speakers',
      'Wireless Earbuds',
      'Smartwatch Bands',
      'Camera Tripods',
      'External Hard Drives',
      'Memory Cards',
      'Laptop Bags and Sleeves',
      'Gaming Controllers',
      'USB Flash Drives',
      'HDMI Cables',
      'Adapters and Converters',
      'Keyboard and Mouse Sets',
    ]
  }
]

const promotions = [
  {
    id: 1,
    name: "Phones",
    cover: assets.banner4,
  },
  {
    id: 2,
    name: "Laptops",
    cover: assets.banner2,
  },
  {
    id: 3,
    name: "Headphones",
    cover: assets.banner3,
  }
]

const bannerData = [
  {
    id: 1,
    name: "Phones",
    cover: assets.banner1,
  },
  {
    id: 2,
    name: "Laptops",
    cover: assets.banner2,
  },
  {
    id: 3,
    name: "Headphones",
    cover: assets.banner3,
  }
]

const popularProducts = [
  {
    id: 1,
    manufacturer: "Apple",
    title: 'iPhone 12',
    rating: 3,
    price: 999,
    image: assets.slide3,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 2,
    manufacturer: "Apple",
    title: 'MacBook Pro',
    rating: 3,
    price: 199,
    image: assets.slide1,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 3,
    manufacturer: "Samsung",
    title: 'AirPods Pro',
    rating: 3,
    price: 249,
    image: assets.slide2,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  // Add more products as needed
];

const products = [
  {
    id: 1,
    manufacturer: "Apple",
    title: 'iPhone 12',
    rating: 3,
    price: 999,
    image: assets.slide3,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 2,
    manufacturer: "Apple",
    title: 'MacBook Pro',
    rating: 4,
    price: 199,
    image: assets.slide1,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 3,
    manufacturer: "Samsung",
    title: 'AirPods Pro',
    rating: 5,
    price: 249,
    image: assets.slide2,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 4,
    manufacturer: "Samsung",
    title: 'iPhone 12',
    rating: 2.8,
    price: 999,
    image: assets.slide3,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 5,
    manufacturer: "Samsung",
    title: 'MacBook Pro',
    rating: 3.6,
    price: 199,
    image: assets.slide1,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 6,
    manufacturer: "Samsung",
    title: 'AirPods Pro',
    rating: 4.3,
    price: 249,
    image: assets.slide2,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 7,
    manufacturer: "Samsung",
    title: 'iPhone 12',
    rating: 5,
    price: 999,
    image: assets.slide3,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 8,
    manufacturer: "Samsung",
    title: 'MacBook Pro',
    rating: 3.5,
    price: 199,
    image: assets.slide1,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  {
    id: 9,
    manufacturer: "Samsung",
    title: 'AirPods Pro',
    rating: 4.3,
    price: 249,
    image: assets.slide2,
    description: "A smartphone should have a fast and efficient processor, sufficient RAM, and ample storage capacity to handle multiple tasks, run apps smoothly, and store files.",
    specs: {
      ram: "2GB",
      storage: "4GB",
      screenSize: "",
      resolution: "2 x 4",
      batteryCapacity: "400Amp",
      camera: "200x150",
      connectivity: "5G"
    }
  },
  // Add more products as needed
];


export { categoryData, bannerData, popularProducts, promotions, products };
