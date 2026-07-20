export interface Destination {
  id: string;
  name: string;
  location: string;
  mainCategory: "Family" | "Pilgrimage";
  faithCategory?: "Hinduism" | "Buddhism" | "Christianity" | "Islam";
  categoryBadge: string;
  image: string;
  description: string;
  altText: string;
}

export const destinationsData: Destination[] = [
  // ==================== FAMILY TOURS ====================
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Taj Mahal.webp",
    description: "A world-renowned architectural masterpiece and iconic family landmark.",
    altText: "Taj Mahal landmark in Agra, Uttar Pradesh"
  },
  {
    id: "amber-fort",
    name: "Amber Fort",
    location: "Jaipur, Rajasthan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Amber Fort.jpg",
    description: "A historic hilltop fort showcasing grand Rajput architecture.",
    altText: "Amber Fort in Jaipur, Rajasthan"
  },
  {
    id: "city-palace-udaipur",
    name: "City Palace",
    location: "Udaipur, Rajasthan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/City Palace, Udaipur.jpg",
    description: "A royal palace complex overlooking Lake Pichola.",
    altText: "City Palace in Udaipur, Rajasthan"
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Hawa Mahal.jpg",
    description: "The famous Palace of Winds featuring a unique honeycomb facade.",
    altText: "Hawa Mahal in Jaipur, Rajasthan"
  },
  {
    id: "mehrangarh-fort",
    name: "Mehrangarh Fort",
    location: "Jodhpur, Rajasthan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Mehrangarh Fort.jpg",
    description: "A majestic fortress standing high above the blue city of Jodhpur.",
    altText: "Mehrangarh Fort in Jodhpur, Rajasthan"
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    location: "Mysore, Karnataka",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Mysore Palace.jpg",
    description: "An opulent royal residence illuminated with breathtaking grandeur.",
    altText: "Mysore Palace in Mysore, Karnataka"
  },
  {
    id: "gol-gumbaz",
    name: "Gol Gumbaz",
    location: "Vijayapura, Karnataka",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Gol Gumbaz.jpg",
    description: "A historic mausoleum famous for its acoustic whispering gallery.",
    altText: "Gol Gumbaz in Vijayapura, Karnataka"
  },
  {
    id: "radhanagar-beach",
    name: "Radhanagar Beach",
    location: "Andaman & Nicobar Islands",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Radhanagar Beach.jpg",
    description: "Pristine white sand beach surrounded by turquoise ocean waters.",
    altText: "Radhanagar Beach in Andaman Islands"
  },
  {
    id: "athirappilly-waterfalls",
    name: "Athirappilly Waterfalls",
    location: "Thrissur, Kerala",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Athirappilly Waterfalls.jpg",
    description: "Cascading waterfall known as the Niagara of South India.",
    altText: "Athirappilly Waterfalls in Kerala"
  },
  {
    id: "munnar-tea-gardens",
    name: "Munnar Tea Gardens",
    location: "Munnar, Kerala",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Munnar Tea Gardens.jpg",
    description: "Lush green tea plantations blanketed in serene hill station mist.",
    altText: "Munnar Tea Gardens hill station in Kerala"
  },
  {
    id: "alleppey-backwaters",
    name: "Alleppey Backwaters",
    location: "Alappuzha, Kerala",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Alleppey Backwaters.jpg",
    description: "Tranquil backwater canals experienced through traditional houseboats.",
    altText: "Alleppey Backwaters houseboat experience in Kerala"
  },
  {
    id: "dudhsagar-falls",
    name: "Dudhsagar Falls",
    location: "Goa / Karnataka",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Dudhsagar Falls.jpg",
    description: "A four-tiered waterfall roaring through lush Western Ghats forest.",
    altText: "Dudhsagar Waterfalls in Western Ghats"
  },
  {
    id: "hampi-monuments",
    name: "Hampi Monuments",
    location: "Vijayanagara, Karnataka",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Hampi Monuments.jpg",
    description: "UNESCO World Heritage ancient ruins of the Vijayanagara Empire.",
    altText: "Hampi ancient temple monuments in Karnataka"
  },
  {
    id: "chitrakote-waterfalls",
    name: "Chitrakote Waterfalls",
    location: "Bastar, Chhattisgarh",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Chitrakote Waterfalls.jpg",
    description: "The widest waterfall in India, scenic and powerful year-round.",
    altText: "Chitrakote Waterfalls in Chhattisgarh"
  },
  {
    id: "living-root-bridges",
    name: "Living Root Bridges",
    location: "Cherrapunji, Meghalaya",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Living Root Bridges.jpg",
    description: "Bio-engineered natural bridges woven from living rubber tree roots.",
    altText: "Living Root Bridges in Meghalaya"
  },
  {
    id: "dawki-river",
    name: "Dawki River",
    location: "West Jaintia Hills, Meghalaya",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Dawki River (Umngot River).webp",
    description: "Crystal clear river waters where boats appear to float in air.",
    altText: "Dawki Umngot River in Meghalaya"
  },
  {
    id: "rohtang-pass",
    name: "Rohtang Pass",
    location: "Manali, Himachal Pradesh",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Rohtang-Pass.jpg",
    description: "High mountain pass offering snow-covered vistas and alpine adventure.",
    altText: "Rohtang Pass in Himachal Pradesh"
  },
  {
    id: "pangong-lake",
    name: "Pangong Lake",
    location: "Ladakh",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Pangong Lake.jpg",
    description: "High-altitude lake renowned for changing shades of blue.",
    altText: "Pangong Tso Lake in Ladakh"
  },
  {
    id: "nubra-valley",
    name: "Nubra Valley",
    location: "Ladakh",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Nubra Valley.jpg",
    description: "Cold desert mountain valley famous for double-humped Bactrian camels.",
    altText: "Nubra Valley mountain landscape in Ladakh"
  },
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    location: "Paris, France",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Eiffel Tower.jpg",
    description: "World-famous wrought-iron lattice tower overlooking Paris.",
    altText: "Eiffel Tower in Paris, France"
  },
  {
    id: "disneyland-paris",
    name: "Disneyland Paris",
    location: "Marne-la-Vallée, France",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Disneyland Paris.webp",
    description: "Enchanting family theme park filled with magic and entertainment.",
    altText: "Disneyland Paris castle theme park"
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps (Jungfraujoch)",
    location: "Bernese Oberland, Switzerland",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Swiss Alps (Jungfraujoch).webp",
    description: "Top of Europe mountain peak surrounded by eternal snow and glaciers.",
    altText: "Jungfraujoch Swiss Alps peak in Switzerland"
  },
  {
    id: "mount-titlis",
    name: "Mount Titlis",
    location: "Engelberg, Switzerland",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Mount Titlis.jpg",
    description: "Panoramic mountain resort featuring revolving cable cars and snow activities.",
    altText: "Mount Titlis cable car in Switzerland"
  },
  {
    id: "glacier-3000",
    name: "Glacier 3000",
    location: "Les Diablerets, Switzerland",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Glacier 3000.jpg",
    description: "High-altitude glacier destination featuring Peak Walk suspension bridge.",
    altText: "Glacier 3000 suspension bridge in Switzerland"
  },
  {
    id: "colosseum",
    name: "Colosseum",
    location: "Rome, Italy",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Colosseum.jpg",
    description: "Ancient Roman amphitheater showcasing millennia of historic legacy.",
    altText: "Colosseum amphitheater in Rome, Italy"
  },
  {
    id: "leaning-tower-pisa",
    name: "Leaning Tower of Pisa",
    location: "Pisa, Italy",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Leaning Tower of Pisa.webp",
    description: "Iconic tilted bell tower landmark in the Piazza dei Miracoli.",
    altText: "Leaning Tower of Pisa in Italy"
  },
  {
    id: "venice-grand-canal",
    name: "Venice Grand Canal",
    location: "Venice, Italy",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Venice Grand Canal.jpg",
    description: "Romantic waterway lined with Renaissance palaces and gondolas.",
    altText: "Venice Grand Canal in Italy"
  },
  {
    id: "london-eye",
    name: "London Eye",
    location: "London, United Kingdom",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/London Eye.jpg",
    description: "Giant observation wheel on the South Bank of the River Thames.",
    altText: "London Eye observation wheel in London, UK"
  },
  {
    id: "big-ben",
    name: "Big Ben",
    location: "London, United Kingdom",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Big Ben.jpg",
    description: "Iconic clock tower and parliament landmark at Westminster.",
    altText: "Big Ben clock tower in London, UK"
  },
  {
    id: "gardens-by-the-bay",
    name: "Gardens by the Bay",
    location: "Singapore",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Gardens by the Bay.jpg",
    description: "Futuristic botanical garden featuring illuminated Supertree structures.",
    altText: "Gardens by the Bay Supertrees in Singapore"
  },
  {
    id: "marina-bay-sands",
    name: "Marina Bay Sands SkyPark",
    location: "Singapore",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Marina Bay Sands SkyPark.jpg",
    description: "Skyline observation deck offering 360-degree city views.",
    altText: "Marina Bay Sands SkyPark in Singapore"
  },
  {
    id: "sentosa-island",
    name: "Sentosa Island",
    location: "Singapore",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Sentosa Island.jpg",
    description: "Island resort with tropical beaches, theme parks, and family attractions.",
    altText: "Sentosa Island resort in Singapore"
  },
  {
    id: "burj-khalifa",
    name: "Burj Khalifa",
    location: "Dubai, United Arab Emirates",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Burj Khalifa.jpg",
    description: "The world's tallest skyscraper rising high above downtown Dubai.",
    altText: "Burj Khalifa skyscraper in Dubai, UAE"
  },
  {
    id: "dubai-miracle-garden",
    name: "Dubai Miracle Garden",
    location: "Dubai, United Arab Emirates",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Dubai Miracle Garden.jpg",
    description: "Extravagant floral garden featuring millions of blooming flowers.",
    altText: "Dubai Miracle Garden floral park in UAE"
  },
  {
    id: "museum-of-the-future",
    name: "Museum of the Future",
    location: "Dubai, United Arab Emirates",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Museum of the Future.jpeg",
    description: "Architectural marvel showcasing futuristic innovation and technology.",
    altText: "Museum of the Future in Dubai, UAE"
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    location: "Dubai, United Arab Emirates",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Palm Jumeirah.jpg",
    description: "Man-made palm-shaped island with luxury resorts and beaches.",
    altText: "Palm Jumeirah island in Dubai, UAE"
  },
  {
    id: "universal-studios-japan",
    name: "Universal Studios Japan",
    location: "Osaka, Japan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Universal Studios Japan.jpg",
    description: "Thrilling theme park featuring immersive movie worlds and rides.",
    altText: "Universal Studios theme park in Osaka, Japan"
  },
  {
    id: "tokyo-disneyland",
    name: "Tokyo Disneyland",
    location: "Tokyo, Japan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Tokyo Disneyland.jpg",
    description: "Classic Disney kingdom filled with magical parades and attractions.",
    altText: "Tokyo Disneyland resort in Japan"
  },
  {
    id: "mount-fuji",
    name: "Mount Fuji",
    location: "Honshu, Japan",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Mount Fuji.jpg",
    description: "Sacred snow-capped volcano and national symbol of Japan.",
    altText: "Mount Fuji landmark in Japan"
  },
  {
    id: "niagara-falls",
    name: "Niagara Falls",
    location: "Ontario, Canada / New York, USA",
    mainCategory: "Family",
    categoryBadge: "Family Tour",
    image: "/images/tourist-places/family/Niagara Falls.jpg",
    description: "Massive waterfalls straddling the international border with spectacular views.",
    altText: "Niagara Falls waterfall landscape"
  },

  // ==================== PILGRIMAGE - HINDUISM ====================
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Rudraprayag, Uttarakhand, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Kedarnath, India.jpg",
    description: "Sacred Jyotirlinga shrine set against high Himalayan peaks.",
    altText: "Kedarnath temple pilgrimage in Uttarakhand, India"
  },
  {
    id: "badrinath",
    name: "Badrinath",
    location: "Chamoli, Uttarakhand, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Badrinath, India.jpg",
    description: "Revered Vishnu temple part of the sacred Char Dham circuit.",
    altText: "Badrinath temple pilgrimage in Uttarakhand, India"
  },
  {
    id: "rameswaram",
    name: "Rameswaram",
    location: "Ramanathapuram, Tamil Nadu, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Rameswaram, India.jpg",
    description: "Holy island pilgrimage site famous for its grand corridor pillars.",
    altText: "Rameswaram temple pilgrimage in Tamil Nadu, India"
  },
  {
    id: "jagannath-temple",
    name: "Jagannath Temple",
    location: "Puri, Odisha, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Jagannath Temple (Puri), India.jpg",
    description: "Ancient seaside temple famous for the annual Ratha Yatra festival.",
    altText: "Jagannath Temple pilgrimage in Puri, Odisha, India"
  },
  {
    id: "dwarkadhish-temple",
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Dwarkadhish Temple (Dwarka), India.jpg",
    description: "Sacred temple dedicated to Lord Krishna on the Arabian Sea coast.",
    altText: "Dwarkadhish Temple pilgrimage in Dwarka, Gujarat, India"
  },
  {
    id: "vaishno-devi",
    name: "Vaishno Devi",
    location: "Katra, Jammu & Kashmir, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Vaishno Devi, India.jpg",
    description: "Revered cave shrine nestled in the Trikuta Mountains.",
    altText: "Vaishno Devi temple pilgrimage in Katra, India"
  },
  {
    id: "somnath-temple",
    name: "Somnath Temple",
    location: "Prabhas Patan, Gujarat, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Somnath Temple, India.jpg",
    description: "The first among the twelve holy Jyotirlinga shrines by the sea.",
    altText: "Somnath Temple pilgrimage in Gujarat, India"
  },
  {
    id: "mahakaleshwar-temple",
    name: "Mahakaleshwar Temple",
    location: "Ujjain, Madhya Pradesh, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Mahakaleshwar Temple (Ujjain), India.jpg",
    description: "Sacred Swayambhu Jyotirlinga shrine on the banks of Kshipra River.",
    altText: "Mahakaleshwar Temple pilgrimage in Ujjain, India"
  },
  {
    id: "trimbakeshwar-temple",
    name: "Trimbakeshwar Temple",
    location: "Nashik, Maharashtra, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Trimbakeshwar Temple (Nashik), India.jpg",
    description: "Holy Jyotirlinga temple at the source of the Godavari River.",
    altText: "Trimbakeshwar Temple pilgrimage in Nashik, India"
  },
  {
    id: "haridwar-rishikesh",
    name: "Haridwar & Rishikesh",
    location: "Uttarakhand, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Haridwar & Rishikesh, India.jpg",
    description: "Gateway cities along the Ganges renowned for Ganga Aarti and ashrams.",
    altText: "Haridwar & Rishikesh pilgrimage in Uttarakhand, India"
  },
  {
    id: "tirupati-balaji",
    name: "Tirupati Balaji Temple",
    location: "Tirupati, Andhra Pradesh, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Tirupati Balaji Temple, India.webp",
    description: "World-famous Sri Venkateswara temple on the Seven Hills of Tirumala.",
    altText: "Tirupati Balaji Temple pilgrimage in Andhra Pradesh, India"
  },
  {
    id: "golden-temple-amritsar",
    name: "Golden Temple",
    location: "Amritsar, Punjab, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Golden Temple (Harmandir Sahib), Amritsar, India.jpg",
    description: "Sacred spiritual sanctuary known for its golden architecture and peaceful sarovar.",
    altText: "Golden Temple pilgrimage destination in Amritsar, India"
  },
  {
    id: "mount-kailash-hinduism",
    name: "Mount Kailash",
    location: "Ngari, Tibet",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Mount Kailash, Tibet.webp",
    description: "Revered holy mountain centerpiece of sacred parikrama.",
    altText: "Mount Kailash sacred mountain pilgrimage in Tibet"
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Hinduism",
    categoryBadge: "Hindu Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Hinduism/Kashi Vishwanath (Varanasi), India.jpg",
    description: "Historic Lord Shiva Jyotirlinga shrine in the ancient city of Kashi.",
    altText: "Kashi Vishwanath Temple pilgrimage in Varanasi, India"
  },

  // ==================== PILGRIMAGE - BUDDHISM ====================
  {
    id: "bodh-gaya",
    name: "Bodh Gaya",
    location: "Gaya, Bihar, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Bodh Gaya, India.jpg",
    description: "Sacred place of Lord Buddha's enlightenment under the Mahabodhi Tree.",
    altText: "Bodh Gaya Buddhist pilgrimage in Bihar, India"
  },
  {
    id: "sarnath",
    name: "Sarnath",
    location: "Varanasi, Uttar Pradesh, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Sarnath, India.jpg",
    description: "Holy site where Lord Buddha delivered his first sermon.",
    altText: "Sarnath Buddhist pilgrimage in Uttar Pradesh, India"
  },
  {
    id: "kushinagar",
    name: "Kushinagar",
    location: "Kushinagar, Uttar Pradesh, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Kushinagar, India.webp",
    description: "Revered pilgrimage site of Lord Buddha's Parinirvana.",
    altText: "Kushinagar Buddhist pilgrimage in India"
  },
  {
    id: "lumbini",
    name: "Lumbini",
    location: "Rupandehi, Nepal",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Lumbini, Nepal.jpg",
    description: "UNESCO World Heritage site and birthplace of Siddhartha Gautama.",
    altText: "Lumbini Buddhist birthplace pilgrimage in Nepal"
  },
  {
    id: "rajgir",
    name: "Rajgir",
    location: "Nalanda, Bihar, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Rajgir, India.jpg",
    description: "Ancient capital where Buddha taught at Vulture Peak.",
    altText: "Rajgir Buddhist pilgrimage in Bihar, India"
  },
  {
    id: "nalanda",
    name: "Nalanda",
    location: "Nalanda, Bihar, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Nalanda, India.jpg",
    description: "Ancient monastic university center of Buddhist learning.",
    altText: "Nalanda Buddhist monastic university ruins in India"
  },
  {
    id: "dambulla-cave-temple",
    name: "Dambulla Cave Temple",
    location: "Matale, Sri Lanka",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Dambulla Cave Temple, Sri Lanka.jpg",
    description: "Vast cave temple complex featuring historic Buddha statues and murals.",
    altText: "Dambulla Cave Temple in Sri Lanka"
  },
  {
    id: "mahabodhi-temple-bagan",
    name: "Mahabodhi Temple",
    location: "Bagan, Myanmar",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Mahabodhi Temple, Bagan, Myanmar.jpg",
    description: "Historic temple modelled after the original Mahabodhi shrine.",
    altText: "Mahabodhi Temple in Bagan, Myanmar"
  },
  {
    id: "borobudur-temple",
    name: "Borobudur Temple",
    location: "Magelang, Indonesia",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Borobudur Temple, Indonesia.jpg",
    description: "The world's largest Buddhist temple adorned with carved relief panels.",
    altText: "Borobudur Temple monument in Indonesia"
  },
  {
    id: "jokhang-temple",
    name: "Jokhang Temple",
    location: "Lhasa, Tibet",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Jokhang Temple, Lhasa, Tibet.jpg",
    description: "Spiritual heart of Tibetan Buddhism housing the Jowo Rinpoche statue.",
    altText: "Jokhang Temple in Lhasa, Tibet"
  },
  {
    id: "kumano-kodo",
    name: "Kumano Kodo",
    location: "Wakayama, Japan",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Kumano Kodo, Japan.jpg",
    description: "Ancient pilgrimage trails winding through sacred Japanese mountains.",
    altText: "Kumano Kodo sacred pilgrimage trail in Japan"
  },
  {
    id: "tigers-nest-monastery",
    name: "Tiger's Nest Monastery",
    location: "Paro, Bhutan",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Tiger's Nest Monastery (Paro Taktsang), Bhutan.jpg",
    description: "Cliffside monastery perched high above the Paro Valley.",
    altText: "Tiger's Nest Monastery in Paro, Bhutan"
  },
  {
    id: "shwedagon-pagoda",
    name: "Shwedagon Pagoda",
    location: "Yangon, Myanmar",
    mainCategory: "Pilgrimage",
    faithCategory: "Buddhism",
    categoryBadge: "Buddhist Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Buddhism/Shwedagon Pagoda, Myanmar.jpg",
    description: "Glowing golden stupa enshrining sacred Buddha relics.",
    altText: "Shwedagon Pagoda in Yangon, Myanmar"
  },

  // ==================== PILGRIMAGE - CHRISTIANITY ====================
  {
    id: "bethlehem",
    name: "Bethlehem",
    location: "West Bank, Palestine",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Bethlehem, Palestine.jpg",
    description: "Historic holy city revered as the birthplace of Jesus Christ.",
    altText: "Bethlehem Christian pilgrimage in Palestine"
  },
  {
    id: "church-holy-sepulchre",
    name: "Church of the Holy Sepulchre",
    location: "Jerusalem, Israel",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Church of the Holy Sepulchre, Jerusalem, Israel.jpg",
    description: "Sacred sanctuary encompassing Golgotha and the Empty Tomb.",
    altText: "Church of the Holy Sepulchre in Jerusalem, Israel"
  },
  {
    id: "basilica-saint-peter",
    name: "Basilica of Saint Peter",
    location: "Vatican City",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Basilica of Saint Peter, Vatican City.jpg",
    description: "Grand papal basilica and spiritual center of the Catholic world.",
    altText: "Basilica of Saint Peter in Vatican City"
  },
  {
    id: "our-lady-guadalupe",
    name: "Basilica of Our Lady of Guadalupe",
    location: "Mexico City, Mexico",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Basilica of Our Lady of Guadalupe, Mexico.jpg",
    description: "Major Marian shrine housing the sacred tilma of St. Juan Diego.",
    altText: "Basilica of Our Lady of Guadalupe in Mexico City"
  },
  {
    id: "canterbury-cathedral",
    name: "Canterbury Cathedral",
    location: "Kent, England",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Canterbury Cathedral, England.jpg",
    description: "Mother church of the worldwide Anglican Communion.",
    altText: "Canterbury Cathedral in England"
  },
  {
    id: "fatima",
    name: "Fátima",
    location: "Santarém, Portugal",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/FÁtima, Portugal.jpg",
    description: "World-famous sanctuary dedicated to Our Lady of Fátima.",
    altText: "Sanctuary of Fátima pilgrimage in Portugal"
  },
  {
    id: "lalibela",
    name: "Lalibela",
    location: "Amhara, Ethiopia",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Lalibela, Ethiopia.webp",
    description: "Monolithic rock-hewn churches carved directly into the earth.",
    altText: "Rock-hewn churches of Lalibela in Ethiopia"
  },
  {
    id: "santiago-atitlan",
    name: "Santiago Atitlán",
    location: "Sololá, Guatemala",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Santiago AtitlÁn, Guatemala.jpg",
    description: "Historic lakeside parish blend of faith and Maya tradition.",
    altText: "Santiago Atitlán church pilgrimage in Guatemala"
  },
  {
    id: "nossa-senhora-aparecida",
    name: "Santuário de Nossa Senhora Aparecida",
    location: "São Paulo, Brazil",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/SantuÁrio de Nossa Senhora Aparecida, Brazil.jpg",
    description: "The largest Marian shrine in the world dedicated to Brazil's patron saint.",
    altText: "Santuário de Nossa Senhora Aparecida in Brazil"
  },
  {
    id: "mount-athos",
    name: "Mount Athos",
    location: "Chalkidiki, Greece",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Mount Athos, Greece.jpg",
    description: "Autonomous monastic state housing twenty Eastern Orthodox monasteries.",
    altText: "Mount Athos Orthodox monasteries in Greece"
  },
  {
    id: "old-city-jerusalem-christianity",
    name: "Old City Jerusalem",
    location: "Jerusalem, Israel",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Old City Jerusalem, Israel.jpg",
    description: "Ancient walled city containing sacred sites of profound heritage.",
    altText: "Old City Jerusalem Christian pilgrimage in Israel"
  },
  {
    id: "our-lady-lourdes",
    name: "Sanctuary of Our Lady of Lourdes",
    location: "Hautes-Pyrénées, France",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Sanctuary of Our Lady of Lourdes, France.jpg",
    description: "Revered pilgrimage shrine famous for its healing Grotto water.",
    altText: "Sanctuary of Our Lady of Lourdes in France"
  },
  {
    id: "el-santuario-chimayo",
    name: "El Santuario de Chimayo",
    location: "New Mexico, USA",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/El Santuario de Chimayo, New Mexico, USA.jpg",
    description: "Historic adobe chapel renowned for its sacred holy dirt.",
    altText: "El Santuario de Chimayo in New Mexico, USA"
  },
  {
    id: "camino-de-santiago",
    name: "Camino de Santiago",
    location: "Galicia, Spain",
    mainCategory: "Pilgrimage",
    faithCategory: "Christianity",
    categoryBadge: "Christian Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Christianity/Camino de Santiago, Spain.jpg",
    description: "Famous network of pilgrim routes leading to Santiago de Compostela.",
    altText: "Camino de Santiago pilgrimage trail in Spain"
  },

  // ==================== PILGRIMAGE - ISLAM ====================
  {
    id: "mecca",
    name: "Mecca",
    location: "Makkah, Saudi Arabia",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Mecca, Saudi Arabia.jpg",
    description: "The holiest city in Islam and home of the Sacred Kaaba.",
    altText: "Holy Kaaba pilgrimage in Mecca, Saudi Arabia"
  },
  {
    id: "medina",
    name: "Medina",
    location: "Saudi Arabia",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Medina, Saudi Arabia.jpg",
    description: "The Prophet's city housing Al-Masjid an-Nabawi.",
    altText: "Medina holy city pilgrimage in Saudi Arabia"
  },
  {
    id: "al-aqsa-mosque",
    name: "Al-Aqsa Mosque",
    location: "Jerusalem, Israel",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Al-Aqsa Mosque, Jerusalem, Israel.jpg",
    description: "The third holiest site in Islam located on the Noble Sanctuary.",
    altText: "Al-Aqsa Mosque pilgrimage in Jerusalem, Israel"
  },
  {
    id: "dome-of-the-rock",
    name: "Dome of the Rock",
    location: "Jerusalem, Israel",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Dome of the Rock, Jerusalem, Israel.jpg",
    description: "Iconic golden-domed Islamic landmark overlooking Jerusalem.",
    altText: "Dome of the Rock in Jerusalem, Israel"
  },
  {
    id: "imam-reza-shrine",
    name: "Imam Reza Shrine",
    location: "Mashhad, Iran",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Imam Reza Shrine, Mashhad, Iran.jpg",
    description: "Vast spiritual complex and revered shrine in Mashhad.",
    altText: "Imam Reza Shrine pilgrimage in Mashhad, Iran"
  },
  {
    id: "imam-husayn-shrine",
    name: "Imam Husayn Shrine",
    location: "Karbala, Iraq",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Imam Husayn Shrine, Karbala, Iraq.jpg",
    description: "Sacred pilgrimage shrine visited by millions during Arba'een.",
    altText: "Imam Husayn Shrine pilgrimage in Karbala, Iraq"
  },
  {
    id: "imam-ali-shrine",
    name: "Imam Ali Shrine",
    location: "Najaf, Iraq",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Imam Ali Shrine, Najaf, Iraq.jpg",
    description: "Revered holy shrine of Imam Ali with magnificent golden dome.",
    altText: "Imam Ali Shrine pilgrimage in Najaf, Iraq"
  },
  {
    id: "al-masjid-al-qiblatayn",
    name: "Al-Masjid al-Qiblatayn",
    location: "Medina, Saudi Arabia",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Al-Masjid al-Qiblatayn, Medina, Saudi Arabia.jpg",
    description: "Historic mosque where the Qibla was commanded towards Mecca.",
    altText: "Al-Masjid al-Qiblatayn in Medina, Saudi Arabia"
  },
  {
    id: "quba-mosque",
    name: "Quba Mosque",
    location: "Medina, Saudi Arabia",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Quba Mosque, Medina, Saudi Arabia.jpg",
    description: "The first mosque built in Islamic history.",
    altText: "Quba Mosque pilgrimage in Medina, Saudi Arabia"
  },
  {
    id: "umayyad-mosque",
    name: "Umayyad Mosque",
    location: "Damascus, Syria",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Umayyad Mosque, Damascus, Syria.jpg",
    description: "One of the oldest and largest mosques in the world.",
    altText: "Umayyad Mosque in Damascus, Syria"
  },
  {
    id: "al-azhar-mosque",
    name: "Al-Azhar Mosque",
    location: "Cairo, Egypt",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Al-Azhar Mosque, Cairo, Egypt.jpg",
    description: "Historic mosque and world-renowned center of Islamic learning.",
    altText: "Al-Azhar Mosque in Cairo, Egypt"
  },
  {
    id: "data-darbar",
    name: "Data Darbar",
    location: "Lahore, Pakistan",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Data Darbar, Lahore, Pakistan.jpg",
    description: "Revered Sufi shrine complex located in historic Lahore.",
    altText: "Data Darbar shrine in Lahore, Pakistan"
  },
  {
    id: "ajmer-sharif-dargah",
    name: "Ajmer Sharif Dargah",
    location: "Ajmer, Rajasthan, India",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Ajmer Sharif Dargah, India.jpg",
    description: "Sacred Sufi shrine of Khwaja Moinuddin Chishti.",
    altText: "Ajmer Sharif Dargah in Rajasthan, India"
  },
  {
    id: "touba",
    name: "Touba",
    location: "Diourbel, Senegal",
    mainCategory: "Pilgrimage",
    faithCategory: "Islam",
    categoryBadge: "Islamic Pilgrimage",
    image: "/images/tourist-places/pilgrimage/Islam/Touba, Senegal.webp",
    description: "Spiritual center of the Mouride order featuring the Great Mosque of Touba.",
    altText: "Great Mosque of Touba in Senegal"
  }
];
