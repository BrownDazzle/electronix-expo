import assets from "../constants/assets";

export const filterData = [{ name: "Hair Cut", image: require('../../assets/barbercut4.jpg'), id: "0", screen: "BookingScreen" },
{ name: "Shave", image: require("../../assets/barbercut3.jpg"), id: "1", screen: "PaymentScreen" },
{ name: "Saloon", image: require("../../assets/barbercut6.jpg"), id: "2", screen: "PaymentScreen" },
{ name: "Styling", image: require("../../assets/barbercut1.jpg"), id: "3", screen: "PaymentScreen" }

];

export const customerReviewData = [
    {
        image: require("../../assets/driver.png"),
        name: "John Phiri",
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
    {
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
    },
]

export const data = {
    id: "NFT-01",
    name: "Abstracto #312",
    creator: "Putri Intan",
    price: 4.25,
    category: 'T-Shirt',
    description:
        "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.headphone1,
    bids: [
        {
            id: "BID-11",
            name: "Jessica Tan",
            price: 4.25,
            image: assets.headphone2,
            date: "December 12, 2019 at 12:10 PM",
        },
        {
            id: "BID-12",
            name: "Jennifer Sia",
            price: 4.5,
            image: assets.headphone3,
            date: "December 27, 2019 at 1:50 PM",
        },
        {
            id: "BID-13",
            name: "Rosie Wong",
            price: 4.75,
            image: assets.headphone4,
            date: "December 31, 2019 at 3:50 PM",
        },
    ],
}

export const rideData = [
    { street: "32 Olivia Rd", area: "Klipfontein 83-Ir,Boksburg", id: "0" },
    { street: "Hughes Industrial Park", area: "Hughes,Boksburg", id: "1" },
    { street: "32 Olivia Road", area: " East Rand,Ekurhuleni,Gauteng,1459", id: "2" },
    { street: "Total Boksburg", area: "35 Atlas Rd,Anderbolt,Boksburg", id: "3" },
    { street: "179 8th Ave", area: "Bezuidenhout Valley,Johannesburg", id: "4" },
];

export const carTypeData = [
    {
        title: "Popular",
        data: [
            { name: "Uber Go", group: 2, price: 7, image: require('../../assets/uberGo.png'), note: "Affordable.compact rides", promotion: 5, time: "20:19", id: "0" },
            { name: "UberX", group: 3, price: 5.5, image: require('../../assets/uberX.png'), note: "Affordable everyday trips", promotion: 0, time: "20:20", id: "1" },
            { name: "Connect", group: 0, price: 12.6, image: require('../../assets/uberConnect.png'), note: "Send and receive packages", promotion: 10, time: "20:33", id: "2" }
        ]
    },

    {
        title: "Premium",
        data: [
            { name: "Black", group: 3, price: 17.4, image: require('../../assets/uberBlack.png'), note: "Premium trips in luxury cars", promotion: 0, time: "20:31", id: "3" },
            { name: "Van", group: 6, price: 22.3, image: require('../../assets/uberVan.png'), note: "Rides for groups up to 6", promotion: 12, time: "20:31", id: "4" },
        ]
    },

    {
        title: "More",
        data: [
            { name: "Assist", group: 3, price: 35.3, image: require('../../assets/uberAssist.png'), note: "Special assistance from certified drivers", promotion: 26, time: "20:25", id: "5" },
        ]
    },

];

export const requestData = [{
    name: "For Me", id: 0
},
{
    name: "For Someone", id: 1
}

]

export const rideOptions = [{ name: "Personal", icon: "account", id: "0" },
{ name: "Business", icon: "briefcase", id: "1" },

];

export const paymentOptions = [{ image: require('../../assets/visaIcon.png'), text: "Visa ...0476" },
{ image: require('../../assets/cashIcon.png'), text: "Cash" }]

export const availableServices = ["Uber Go", "UberX", "Uber connect", "Uber Black", "Uber Van", "Uber Assist"]

export const carsAround = [{ latitude: -26.207487, longitude: 28.236226 },
{ latitude: -26.202616, longitude: 28.227718 },
{ latitude: -26.202424, longitude: 28.236612 },
{ latitude: -26.208565, longitude: 28.237191 },
{ latitude: -26.203598, longitude: 28.239509 },
]
