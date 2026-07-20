export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  stay?: string;
  meals?: string;
  activityType?: "spiritual" | "safety" | "general";
}

export interface PackageInclusions {
  hotel: string | boolean;
  meals: string | boolean;
  transit: string | boolean;
  guide: string | boolean;
  darshan?: string | boolean;
}

export interface Package {
  id: string;
  title: string;
  destinationName?: string;
  destinations: string;
  location?: string | null;
  route?: string[];
  duration: string;
  price: number;
  rating?: number | null;
  reviewCount?: number | null;
  seatsLeft?: number | null;
  recentBookings?: number | null;
  verified?: boolean | null;
  image: string;
  altText?: string;
  tags: string[];
  inclusions: PackageInclusions;
  category: "Pilgrimage" | "Family" | "Heritage";
  subCategory?: "Hinduism" | "Buddhism" | "Christianity" | "Islam" | "Family";
  categoryLabel?: string;
  mainCategory?: "Pilgrimage" | "Family";
  region: "North India" | "South India" | "Char Dham" | "Maharashtra" | "Pan India" | "International";
  itinerary: ItineraryItem[];
  seniorFriendly: boolean;
  wheelchairAccess: boolean;
  vegMeals: boolean;
  bestSeason?: string;
  pace?: string;
  travellerType?: string;
  description?: string;
}

export const mockPackages: Package[] = [
  {
    "id": "family-alleppey-backwaters",
    "title": "Alleppey Backwaters Experience",
    "destinationName": "Alleppey Backwaters",
    "destinations": "Alleppey Backwaters (Alappuzha, Kerala)",
    "location": "Alappuzha, Kerala",
    "route": [
      "Alappuzha",
      "Alleppey Backwaters"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Alleppey Backwaters.jpg",
    "altText": "Alleppey Backwaters family tour destination in Alappuzha, Kerala",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 18500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Alleppey Backwaters",
        "description": "Arrival at Alappuzha, Kerala. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Alleppey Backwaters",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Alleppey Backwaters",
        "description": "Full day guided visit to Alleppey Backwaters. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Alleppey Backwaters",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-amber-fort",
    "title": "Amber Fort Experience",
    "destinationName": "Amber Fort",
    "destinations": "Amber Fort (Jaipur, Rajasthan)",
    "location": "Jaipur, Rajasthan",
    "route": [
      "Jaipur",
      "Amber Fort"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Amber Fort.jpg",
    "altText": "Amber Fort family tour destination in Jaipur, Rajasthan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 20000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Amber Fort",
        "description": "Arrival at Jaipur, Rajasthan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Amber Fort",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Amber Fort",
        "description": "Full day guided visit to Amber Fort. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Amber Fort",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-athirappilly-waterfalls",
    "title": "Athirappilly Waterfalls Experience",
    "destinationName": "Athirappilly Waterfalls",
    "destinations": "Athirappilly Waterfalls (Thrissur, Kerala)",
    "location": "Thrissur, Kerala",
    "route": [
      "Thrissur",
      "Athirappilly Waterfalls"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Athirappilly Waterfalls.jpg",
    "altText": "Athirappilly Waterfalls family tour destination in Thrissur, Kerala",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 21500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Athirappilly Waterfalls",
        "description": "Arrival at Thrissur, Kerala. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Athirappilly Waterfalls",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Athirappilly Waterfalls",
        "description": "Full day guided visit to Athirappilly Waterfalls. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Athirappilly Waterfalls",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-big-ben",
    "title": "Big Ben Experience",
    "destinationName": "Big Ben",
    "destinations": "Big Ben (London, United Kingdom)",
    "location": "London, United Kingdom",
    "route": [
      "London",
      "Big Ben"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Big Ben.jpg",
    "altText": "Big Ben family tour destination in London, United Kingdom",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 23000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Big Ben",
        "description": "Arrival at London, United Kingdom. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Big Ben",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Big Ben",
        "description": "Full day guided visit to Big Ben. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Big Ben",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-burj-khalifa",
    "title": "Burj Khalifa Experience",
    "destinationName": "Burj Khalifa",
    "destinations": "Burj Khalifa (Dubai, United Arab Emirates)",
    "location": "Dubai, United Arab Emirates",
    "route": [
      "Dubai",
      "Burj Khalifa"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Burj Khalifa.jpg",
    "altText": "Burj Khalifa family tour destination in Dubai, United Arab Emirates",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 24500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Burj Khalifa",
        "description": "Arrival at Dubai, United Arab Emirates. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Burj Khalifa",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Burj Khalifa",
        "description": "Full day guided visit to Burj Khalifa. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Burj Khalifa",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-chitrakote-waterfalls",
    "title": "Chitrakote Waterfalls Experience",
    "destinationName": "Chitrakote Waterfalls",
    "destinations": "Chitrakote Waterfalls (Bastar, Chhattisgarh)",
    "location": "Bastar, Chhattisgarh",
    "route": [
      "Bastar",
      "Chitrakote Waterfalls"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Chitrakote Waterfalls.jpg",
    "altText": "Chitrakote Waterfalls family tour destination in Bastar, Chhattisgarh",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 26000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Chitrakote Waterfalls",
        "description": "Arrival at Bastar, Chhattisgarh. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Chitrakote Waterfalls",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Chitrakote Waterfalls",
        "description": "Full day guided visit to Chitrakote Waterfalls. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Chitrakote Waterfalls",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-city-palace-udaipur",
    "title": "City Palace, Udaipur Experience",
    "destinationName": "City Palace, Udaipur",
    "destinations": "City Palace, Udaipur (Udaipur, Rajasthan)",
    "location": "Udaipur, Rajasthan",
    "route": [
      "Udaipur",
      "City Palace, Udaipur"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/City Palace, Udaipur.jpg",
    "altText": "City Palace, Udaipur family tour destination in Udaipur, Rajasthan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 27500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at City Palace, Udaipur",
        "description": "Arrival at Udaipur, Rajasthan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "City Palace, Udaipur",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of City Palace, Udaipur",
        "description": "Full day guided visit to City Palace, Udaipur. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "City Palace, Udaipur",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-colosseum",
    "title": "Colosseum Experience",
    "destinationName": "Colosseum",
    "destinations": "Colosseum (Rome, Italy)",
    "location": "Rome, Italy",
    "route": [
      "Rome",
      "Colosseum"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Colosseum.jpg",
    "altText": "Colosseum family tour destination in Rome, Italy",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 29000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Colosseum",
        "description": "Arrival at Rome, Italy. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Colosseum",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Colosseum",
        "description": "Full day guided visit to Colosseum. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Colosseum",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-dawki-river-umngot-river",
    "title": "Dawki River Experience",
    "destinationName": "Dawki River",
    "destinations": "Dawki River (West Jaintia Hills, Meghalaya)",
    "location": "West Jaintia Hills, Meghalaya",
    "route": [
      "West Jaintia Hills",
      "Dawki River"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Dawki River (Umngot River).webp",
    "altText": "Dawki River family tour destination in West Jaintia Hills, Meghalaya",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 18500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Dawki River",
        "description": "Arrival at West Jaintia Hills, Meghalaya. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Dawki River",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Dawki River",
        "description": "Full day guided visit to Dawki River. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Dawki River",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-disneyland-paris",
    "title": "Disneyland Paris Experience",
    "destinationName": "Disneyland Paris",
    "destinations": "Disneyland Paris (Marne-la-Vallée, France)",
    "location": "Marne-la-Vallée, France",
    "route": [
      "Marne-la-Vallée",
      "Disneyland Paris"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Disneyland Paris.webp",
    "altText": "Disneyland Paris family tour destination in Marne-la-Vallée, France",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 20000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Disneyland Paris",
        "description": "Arrival at Marne-la-Vallée, France. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Disneyland Paris",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Disneyland Paris",
        "description": "Full day guided visit to Disneyland Paris. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Disneyland Paris",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-dubai-miracle-garden",
    "title": "Dubai Miracle Garden Experience",
    "destinationName": "Dubai Miracle Garden",
    "destinations": "Dubai Miracle Garden (Dubai, United Arab Emirates)",
    "location": "Dubai, United Arab Emirates",
    "route": [
      "Dubai",
      "Dubai Miracle Garden"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Dubai Miracle Garden.jpg",
    "altText": "Dubai Miracle Garden family tour destination in Dubai, United Arab Emirates",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 21500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Dubai Miracle Garden",
        "description": "Arrival at Dubai, United Arab Emirates. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Dubai Miracle Garden",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Dubai Miracle Garden",
        "description": "Full day guided visit to Dubai Miracle Garden. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Dubai Miracle Garden",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-dudhsagar-falls",
    "title": "Dudhsagar Falls Experience",
    "destinationName": "Dudhsagar Falls",
    "destinations": "Dudhsagar Falls (Goa / Karnataka)",
    "location": "Goa / Karnataka",
    "route": [
      "Goa / Karnataka",
      "Dudhsagar Falls"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Dudhsagar Falls.jpg",
    "altText": "Dudhsagar Falls family tour destination in Goa / Karnataka",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 23000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Dudhsagar Falls",
        "description": "Arrival at Goa / Karnataka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Dudhsagar Falls",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Dudhsagar Falls",
        "description": "Full day guided visit to Dudhsagar Falls. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Dudhsagar Falls",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-eiffel-tower",
    "title": "Eiffel Tower Experience",
    "destinationName": "Eiffel Tower",
    "destinations": "Eiffel Tower (Paris, France)",
    "location": "Paris, France",
    "route": [
      "Paris",
      "Eiffel Tower"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Eiffel Tower.jpg",
    "altText": "Eiffel Tower family tour destination in Paris, France",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 24500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Eiffel Tower",
        "description": "Arrival at Paris, France. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Eiffel Tower",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Eiffel Tower",
        "description": "Full day guided visit to Eiffel Tower. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Eiffel Tower",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-gardens-by-the-bay",
    "title": "Gardens by the Bay Experience",
    "destinationName": "Gardens by the Bay",
    "destinations": "Gardens by the Bay (Singapore)",
    "location": "Singapore",
    "route": [
      "Singapore",
      "Gardens by the Bay"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Gardens by the Bay.jpg",
    "altText": "Gardens by the Bay family tour destination in Singapore",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 26000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Gardens by the Bay",
        "description": "Arrival at Singapore. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Gardens by the Bay",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Gardens by the Bay",
        "description": "Full day guided visit to Gardens by the Bay. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Gardens by the Bay",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-glacier-3000",
    "title": "Glacier 3000 Experience",
    "destinationName": "Glacier 3000",
    "destinations": "Glacier 3000 (Les Diablerets, Switzerland)",
    "location": "Les Diablerets, Switzerland",
    "route": [
      "Les Diablerets",
      "Glacier 3000"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Glacier 3000.jpg",
    "altText": "Glacier 3000 family tour destination in Les Diablerets, Switzerland",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 27500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Glacier 3000",
        "description": "Arrival at Les Diablerets, Switzerland. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Glacier 3000",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Glacier 3000",
        "description": "Full day guided visit to Glacier 3000. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Glacier 3000",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-gol-gumbaz",
    "title": "Gol Gumbaz Experience",
    "destinationName": "Gol Gumbaz",
    "destinations": "Gol Gumbaz (Vijayapura, Karnataka)",
    "location": "Vijayapura, Karnataka",
    "route": [
      "Vijayapura",
      "Gol Gumbaz"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Gol Gumbaz.jpg",
    "altText": "Gol Gumbaz family tour destination in Vijayapura, Karnataka",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 29000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Gol Gumbaz",
        "description": "Arrival at Vijayapura, Karnataka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Gol Gumbaz",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Gol Gumbaz",
        "description": "Full day guided visit to Gol Gumbaz. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Gol Gumbaz",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-hampi-monuments",
    "title": "Hampi Monuments Experience",
    "destinationName": "Hampi Monuments",
    "destinations": "Hampi Monuments (Vijayanagara, Karnataka)",
    "location": "Vijayanagara, Karnataka",
    "route": [
      "Vijayanagara",
      "Hampi Monuments"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Hampi Monuments.jpg",
    "altText": "Hampi Monuments family tour destination in Vijayanagara, Karnataka",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 18500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Hampi Monuments",
        "description": "Arrival at Vijayanagara, Karnataka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Hampi Monuments",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Hampi Monuments",
        "description": "Full day guided visit to Hampi Monuments. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Hampi Monuments",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-hawa-mahal",
    "title": "Hawa Mahal Experience",
    "destinationName": "Hawa Mahal",
    "destinations": "Hawa Mahal (Jaipur, Rajasthan)",
    "location": "Jaipur, Rajasthan",
    "route": [
      "Jaipur",
      "Hawa Mahal"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Hawa Mahal.jpg",
    "altText": "Hawa Mahal family tour destination in Jaipur, Rajasthan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 20000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Hawa Mahal",
        "description": "Arrival at Jaipur, Rajasthan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Hawa Mahal",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Hawa Mahal",
        "description": "Full day guided visit to Hawa Mahal. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Hawa Mahal",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-leaning-tower-of-pisa",
    "title": "Leaning Tower of Pisa Experience",
    "destinationName": "Leaning Tower of Pisa",
    "destinations": "Leaning Tower of Pisa (Pisa, Italy)",
    "location": "Pisa, Italy",
    "route": [
      "Pisa",
      "Leaning Tower of Pisa"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Leaning Tower of Pisa.webp",
    "altText": "Leaning Tower of Pisa family tour destination in Pisa, Italy",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 21500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Leaning Tower of Pisa",
        "description": "Arrival at Pisa, Italy. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Leaning Tower of Pisa",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Leaning Tower of Pisa",
        "description": "Full day guided visit to Leaning Tower of Pisa. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Leaning Tower of Pisa",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-living-root-bridges",
    "title": "Living Root Bridges Experience",
    "destinationName": "Living Root Bridges",
    "destinations": "Living Root Bridges (Cherrapunji, Meghalaya)",
    "location": "Cherrapunji, Meghalaya",
    "route": [
      "Cherrapunji",
      "Living Root Bridges"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Living Root Bridges.jpg",
    "altText": "Living Root Bridges family tour destination in Cherrapunji, Meghalaya",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 23000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Living Root Bridges",
        "description": "Arrival at Cherrapunji, Meghalaya. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Living Root Bridges",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Living Root Bridges",
        "description": "Full day guided visit to Living Root Bridges. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Living Root Bridges",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-london-eye",
    "title": "London Eye Experience",
    "destinationName": "London Eye",
    "destinations": "London Eye (London, United Kingdom)",
    "location": "London, United Kingdom",
    "route": [
      "London",
      "London Eye"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/London Eye.jpg",
    "altText": "London Eye family tour destination in London, United Kingdom",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 24500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at London Eye",
        "description": "Arrival at London, United Kingdom. Check in to hotel, relaxation, and evening orientation.",
        "stay": "London Eye",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of London Eye",
        "description": "Full day guided visit to London Eye. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "London Eye",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-marina-bay-sands-skypark",
    "title": "Marina Bay Sands SkyPark Experience",
    "destinationName": "Marina Bay Sands SkyPark",
    "destinations": "Marina Bay Sands SkyPark (Singapore)",
    "location": "Singapore",
    "route": [
      "Singapore",
      "Marina Bay Sands SkyPark"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Marina Bay Sands SkyPark.jpg",
    "altText": "Marina Bay Sands SkyPark family tour destination in Singapore",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 26000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Marina Bay Sands SkyPark",
        "description": "Arrival at Singapore. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Marina Bay Sands SkyPark",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Marina Bay Sands SkyPark",
        "description": "Full day guided visit to Marina Bay Sands SkyPark. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Marina Bay Sands SkyPark",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-mehrangarh-fort",
    "title": "Mehrangarh Fort Experience",
    "destinationName": "Mehrangarh Fort",
    "destinations": "Mehrangarh Fort (Jodhpur, Rajasthan)",
    "location": "Jodhpur, Rajasthan",
    "route": [
      "Jodhpur",
      "Mehrangarh Fort"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Mehrangarh Fort.jpg",
    "altText": "Mehrangarh Fort family tour destination in Jodhpur, Rajasthan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 27500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mehrangarh Fort",
        "description": "Arrival at Jodhpur, Rajasthan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mehrangarh Fort",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mehrangarh Fort",
        "description": "Full day guided visit to Mehrangarh Fort. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mehrangarh Fort",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-mount-fuji",
    "title": "Mount Fuji Experience",
    "destinationName": "Mount Fuji",
    "destinations": "Mount Fuji (Honshu, Japan)",
    "location": "Honshu, Japan",
    "route": [
      "Honshu",
      "Mount Fuji"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Mount Fuji.jpg",
    "altText": "Mount Fuji family tour destination in Honshu, Japan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 29000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mount Fuji",
        "description": "Arrival at Honshu, Japan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mount Fuji",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mount Fuji",
        "description": "Full day guided visit to Mount Fuji. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mount Fuji",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-mount-titlis",
    "title": "Mount Titlis Experience",
    "destinationName": "Mount Titlis",
    "destinations": "Mount Titlis (Engelberg, Switzerland)",
    "location": "Engelberg, Switzerland",
    "route": [
      "Engelberg",
      "Mount Titlis"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Mount Titlis.jpg",
    "altText": "Mount Titlis family tour destination in Engelberg, Switzerland",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 18500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mount Titlis",
        "description": "Arrival at Engelberg, Switzerland. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mount Titlis",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mount Titlis",
        "description": "Full day guided visit to Mount Titlis. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mount Titlis",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-munnar-tea-gardens",
    "title": "Munnar Tea Gardens Experience",
    "destinationName": "Munnar Tea Gardens",
    "destinations": "Munnar Tea Gardens (Munnar, Kerala)",
    "location": "Munnar, Kerala",
    "route": [
      "Munnar",
      "Munnar Tea Gardens"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Munnar Tea Gardens.jpg",
    "altText": "Munnar Tea Gardens family tour destination in Munnar, Kerala",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 20000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Munnar Tea Gardens",
        "description": "Arrival at Munnar, Kerala. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Munnar Tea Gardens",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Munnar Tea Gardens",
        "description": "Full day guided visit to Munnar Tea Gardens. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Munnar Tea Gardens",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-museum-of-the-future",
    "title": "Museum of the Future Experience",
    "destinationName": "Museum of the Future",
    "destinations": "Museum of the Future (Dubai, United Arab Emirates)",
    "location": "Dubai, United Arab Emirates",
    "route": [
      "Dubai",
      "Museum of the Future"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Museum of the Future.jpeg",
    "altText": "Museum of the Future family tour destination in Dubai, United Arab Emirates",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 21500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Museum of the Future",
        "description": "Arrival at Dubai, United Arab Emirates. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Museum of the Future",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Museum of the Future",
        "description": "Full day guided visit to Museum of the Future. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Museum of the Future",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-mysore-palace",
    "title": "Mysore Palace Experience",
    "destinationName": "Mysore Palace",
    "destinations": "Mysore Palace (Mysore, Karnataka)",
    "location": "Mysore, Karnataka",
    "route": [
      "Mysore",
      "Mysore Palace"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Mysore Palace.jpg",
    "altText": "Mysore Palace family tour destination in Mysore, Karnataka",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 23000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mysore Palace",
        "description": "Arrival at Mysore, Karnataka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mysore Palace",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mysore Palace",
        "description": "Full day guided visit to Mysore Palace. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mysore Palace",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-niagara-falls",
    "title": "Niagara Falls Experience",
    "destinationName": "Niagara Falls",
    "destinations": "Niagara Falls (Ontario, Canada / New York, USA)",
    "location": "Ontario, Canada / New York, USA",
    "route": [
      "Ontario",
      "Niagara Falls"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Niagara Falls.jpg",
    "altText": "Niagara Falls family tour destination in Ontario, Canada / New York, USA",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 24500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Niagara Falls",
        "description": "Arrival at Ontario, Canada / New York, USA. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Niagara Falls",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Niagara Falls",
        "description": "Full day guided visit to Niagara Falls. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Niagara Falls",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-nubra-valley",
    "title": "Nubra Valley Experience",
    "destinationName": "Nubra Valley",
    "destinations": "Nubra Valley (Ladakh)",
    "location": "Ladakh",
    "route": [
      "Ladakh",
      "Nubra Valley"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Nubra Valley.jpg",
    "altText": "Nubra Valley family tour destination in Ladakh",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 26000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Nubra Valley",
        "description": "Arrival at Ladakh. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Nubra Valley",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Nubra Valley",
        "description": "Full day guided visit to Nubra Valley. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Nubra Valley",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-palm-jumeirah",
    "title": "Palm Jumeirah Experience",
    "destinationName": "Palm Jumeirah",
    "destinations": "Palm Jumeirah (Dubai, United Arab Emirates)",
    "location": "Dubai, United Arab Emirates",
    "route": [
      "Dubai",
      "Palm Jumeirah"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Palm Jumeirah.jpg",
    "altText": "Palm Jumeirah family tour destination in Dubai, United Arab Emirates",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 27500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Palm Jumeirah",
        "description": "Arrival at Dubai, United Arab Emirates. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Palm Jumeirah",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Palm Jumeirah",
        "description": "Full day guided visit to Palm Jumeirah. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Palm Jumeirah",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-pangong-lake",
    "title": "Pangong Lake Experience",
    "destinationName": "Pangong Lake",
    "destinations": "Pangong Lake (Ladakh)",
    "location": "Ladakh",
    "route": [
      "Ladakh",
      "Pangong Lake"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Pangong Lake.jpg",
    "altText": "Pangong Lake family tour destination in Ladakh",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 29000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Pangong Lake",
        "description": "Arrival at Ladakh. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Pangong Lake",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Pangong Lake",
        "description": "Full day guided visit to Pangong Lake. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Pangong Lake",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-radhanagar-beach",
    "title": "Radhanagar Beach Experience",
    "destinationName": "Radhanagar Beach",
    "destinations": "Radhanagar Beach (Andaman & Nicobar Islands)",
    "location": "Andaman & Nicobar Islands",
    "route": [
      "Andaman & Nicobar Islands",
      "Radhanagar Beach"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "South India",
    "image": "/images/tourist-places/family/Radhanagar Beach.jpg",
    "altText": "Radhanagar Beach family tour destination in Andaman & Nicobar Islands",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 18500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Radhanagar Beach",
        "description": "Arrival at Andaman & Nicobar Islands. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Radhanagar Beach",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Radhanagar Beach",
        "description": "Full day guided visit to Radhanagar Beach. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Radhanagar Beach",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-rohtang-pass",
    "title": "Rohtang Pass Experience",
    "destinationName": "Rohtang Pass",
    "destinations": "Rohtang Pass (Manali, Himachal Pradesh)",
    "location": "Manali, Himachal Pradesh",
    "route": [
      "Manali",
      "Rohtang Pass"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Rohtang-Pass.jpg",
    "altText": "Rohtang Pass family tour destination in Manali, Himachal Pradesh",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 20000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Rohtang Pass",
        "description": "Arrival at Manali, Himachal Pradesh. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Rohtang Pass",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Rohtang Pass",
        "description": "Full day guided visit to Rohtang Pass. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Rohtang Pass",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-sentosa-island",
    "title": "Sentosa Island Experience",
    "destinationName": "Sentosa Island",
    "destinations": "Sentosa Island (Singapore)",
    "location": "Singapore",
    "route": [
      "Singapore",
      "Sentosa Island"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Sentosa Island.jpg",
    "altText": "Sentosa Island family tour destination in Singapore",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 21500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Sentosa Island",
        "description": "Arrival at Singapore. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Sentosa Island",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Sentosa Island",
        "description": "Full day guided visit to Sentosa Island. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Sentosa Island",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-swiss-alps-jungfraujoch",
    "title": "Swiss Alps Experience",
    "destinationName": "Swiss Alps",
    "destinations": "Swiss Alps (Bernese Oberland, Switzerland)",
    "location": "Bernese Oberland, Switzerland",
    "route": [
      "Bernese Oberland",
      "Swiss Alps"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Swiss Alps (Jungfraujoch).webp",
    "altText": "Swiss Alps family tour destination in Bernese Oberland, Switzerland",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 23000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Swiss Alps",
        "description": "Arrival at Bernese Oberland, Switzerland. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Swiss Alps",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Swiss Alps",
        "description": "Full day guided visit to Swiss Alps. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Swiss Alps",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-taj-mahal",
    "title": "Taj Mahal Experience",
    "destinationName": "Taj Mahal",
    "destinations": "Taj Mahal (Agra, Uttar Pradesh)",
    "location": "Agra, Uttar Pradesh",
    "route": [
      "Agra",
      "Taj Mahal"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "North India",
    "image": "/images/tourist-places/family/Taj Mahal.webp",
    "altText": "Taj Mahal family tour destination in Agra, Uttar Pradesh",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 24500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Taj Mahal",
        "description": "Arrival at Agra, Uttar Pradesh. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Taj Mahal",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Taj Mahal",
        "description": "Full day guided visit to Taj Mahal. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Taj Mahal",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-tokyo-disneyland",
    "title": "Tokyo Disneyland Experience",
    "destinationName": "Tokyo Disneyland",
    "destinations": "Tokyo Disneyland (Tokyo, Japan)",
    "location": "Tokyo, Japan",
    "route": [
      "Tokyo",
      "Tokyo Disneyland"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Tokyo Disneyland.jpg",
    "altText": "Tokyo Disneyland family tour destination in Tokyo, Japan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 26000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Tokyo Disneyland",
        "description": "Arrival at Tokyo, Japan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Tokyo Disneyland",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Tokyo Disneyland",
        "description": "Full day guided visit to Tokyo Disneyland. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Tokyo Disneyland",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-universal-studios-japan",
    "title": "Universal Studios Japan Experience",
    "destinationName": "Universal Studios Japan",
    "destinations": "Universal Studios Japan (Osaka, Japan)",
    "location": "Osaka, Japan",
    "route": [
      "Osaka",
      "Universal Studios Japan"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Universal Studios Japan.jpg",
    "altText": "Universal Studios Japan family tour destination in Osaka, Japan",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 27500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Universal Studios Japan",
        "description": "Arrival at Osaka, Japan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Universal Studios Japan",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Universal Studios Japan",
        "description": "Full day guided visit to Universal Studios Japan. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Universal Studios Japan",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "family-venice-grand-canal",
    "title": "Venice Grand Canal Experience",
    "destinationName": "Venice Grand Canal",
    "destinations": "Venice Grand Canal (Venice, Italy)",
    "location": "Venice, Italy",
    "route": [
      "Venice",
      "Venice Grand Canal"
    ],
    "mainCategory": "Family",
    "subCategory": "Family",
    "categoryLabel": "Family Tour",
    "category": "Family",
    "region": "International",
    "image": "/images/tourist-places/family/Venice Grand Canal.jpg",
    "altText": "Venice Grand Canal family tour destination in Venice, Italy",
    "duration": "4 Days / 3 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Family Friendly",
    "description": "A thoughtfully planned family tour offering comfort, guidance, and a memorable experience.",
    "price": 29000,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Family Tour",
      "Family Friendly"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Venice Grand Canal",
        "description": "Arrival at Venice, Italy. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Venice Grand Canal",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Venice Grand Canal",
        "description": "Full day guided visit to Venice Grand Canal. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Venice Grand Canal",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-adam-s-peak-sri-pada-sri-lanka",
    "title": "Adam’s Peak (Sri Pada) Journey",
    "destinationName": "Adam’s Peak (Sri Pada)",
    "destinations": "Adam’s Peak (Sri Pada) (Ratnapura, Sri Lanka)",
    "location": "Ratnapura, Sri Lanka",
    "route": [
      "Ratnapura",
      "Adam’s Peak (Sri Pada)"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Adam’s Peak (Sri Pada), Sri Lanka.jpg",
    "altText": "Adam’s Peak (Sri Pada) buddhist pilgrimage destination in Ratnapura, Sri Lanka",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Adam’s Peak (Sri Pada)",
        "description": "Arrival at Ratnapura, Sri Lanka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Adam’s Peak (Sri Pada)",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Adam’s Peak (Sri Pada)",
        "description": "Full day guided visit to Adam’s Peak (Sri Pada). Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Adam’s Peak (Sri Pada)",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-bodh-gaya-india",
    "title": "Bodh Gaya Journey",
    "destinationName": "Bodh Gaya",
    "destinations": "Bodh Gaya (Gaya, Bihar, India)",
    "location": "Gaya, Bihar, India",
    "route": [
      "Gaya",
      "Bodh Gaya"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Bodh Gaya, India.jpg",
    "altText": "Bodh Gaya buddhist pilgrimage destination in Gaya, Bihar, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Bodh Gaya",
        "description": "Arrival at Gaya, Bihar, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Bodh Gaya",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Bodh Gaya",
        "description": "Full day guided visit to Bodh Gaya. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Bodh Gaya",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-borobudur-temple-indonesia",
    "title": "Borobudur Temple Journey",
    "destinationName": "Borobudur Temple",
    "destinations": "Borobudur Temple (Magelang, Indonesia)",
    "location": "Magelang, Indonesia",
    "route": [
      "Magelang",
      "Borobudur Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Borobudur Temple, Indonesia.jpg",
    "altText": "Borobudur Temple buddhist pilgrimage destination in Magelang, Indonesia",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Borobudur Temple",
        "description": "Arrival at Magelang, Indonesia. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Borobudur Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Borobudur Temple",
        "description": "Full day guided visit to Borobudur Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Borobudur Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-dambulla-cave-temple-sri-lanka",
    "title": "Dambulla Cave Temple Journey",
    "destinationName": "Dambulla Cave Temple",
    "destinations": "Dambulla Cave Temple (Matale, Sri Lanka)",
    "location": "Matale, Sri Lanka",
    "route": [
      "Matale",
      "Dambulla Cave Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Dambulla Cave Temple, Sri Lanka.jpg",
    "altText": "Dambulla Cave Temple buddhist pilgrimage destination in Matale, Sri Lanka",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Dambulla Cave Temple",
        "description": "Arrival at Matale, Sri Lanka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Dambulla Cave Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Dambulla Cave Temple",
        "description": "Full day guided visit to Dambulla Cave Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Dambulla Cave Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-jokhang-temple-lhasa-tibet",
    "title": "Jokhang Temple, Lhasa Journey",
    "destinationName": "Jokhang Temple, Lhasa",
    "destinations": "Jokhang Temple, Lhasa (Lhasa, Tibet)",
    "location": "Lhasa, Tibet",
    "route": [
      "Lhasa",
      "Jokhang Temple, Lhasa"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Jokhang Temple, Lhasa, Tibet.jpg",
    "altText": "Jokhang Temple, Lhasa buddhist pilgrimage destination in Lhasa, Tibet",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Jokhang Temple, Lhasa",
        "description": "Arrival at Lhasa, Tibet. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Jokhang Temple, Lhasa",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Jokhang Temple, Lhasa",
        "description": "Full day guided visit to Jokhang Temple, Lhasa. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Jokhang Temple, Lhasa",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-kumano-kodo-japan",
    "title": "Kumano Kodo Journey",
    "destinationName": "Kumano Kodo",
    "destinations": "Kumano Kodo (Wakayama, Japan)",
    "location": "Wakayama, Japan",
    "route": [
      "Wakayama",
      "Kumano Kodo"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Kumano Kodo, Japan.jpg",
    "altText": "Kumano Kodo buddhist pilgrimage destination in Wakayama, Japan",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Kumano Kodo",
        "description": "Arrival at Wakayama, Japan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Kumano Kodo",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Kumano Kodo",
        "description": "Full day guided visit to Kumano Kodo. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Kumano Kodo",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-kushinagar-india",
    "title": "Kushinagar Journey",
    "destinationName": "Kushinagar",
    "destinations": "Kushinagar (Kushinagar, Uttar Pradesh, India)",
    "location": "Kushinagar, Uttar Pradesh, India",
    "route": [
      "Kushinagar",
      "Kushinagar"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Kushinagar, India.webp",
    "altText": "Kushinagar buddhist pilgrimage destination in Kushinagar, Uttar Pradesh, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Kushinagar",
        "description": "Arrival at Kushinagar, Uttar Pradesh, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Kushinagar",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Kushinagar",
        "description": "Full day guided visit to Kushinagar. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Kushinagar",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-lumbini-nepal",
    "title": "Lumbini Journey",
    "destinationName": "Lumbini",
    "destinations": "Lumbini (Rupandehi, Nepal)",
    "location": "Rupandehi, Nepal",
    "route": [
      "Rupandehi",
      "Lumbini"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Lumbini, Nepal.jpg",
    "altText": "Lumbini buddhist pilgrimage destination in Rupandehi, Nepal",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Lumbini",
        "description": "Arrival at Rupandehi, Nepal. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Lumbini",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Lumbini",
        "description": "Full day guided visit to Lumbini. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Lumbini",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-mahabodhi-temple-bagan-myanmar",
    "title": "Mahabodhi Temple, Bagan Journey",
    "destinationName": "Mahabodhi Temple, Bagan",
    "destinations": "Mahabodhi Temple, Bagan (Bagan, Myanmar)",
    "location": "Bagan, Myanmar",
    "route": [
      "Bagan",
      "Mahabodhi Temple, Bagan"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Mahabodhi Temple, Bagan, Myanmar.jpg",
    "altText": "Mahabodhi Temple, Bagan buddhist pilgrimage destination in Bagan, Myanmar",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mahabodhi Temple, Bagan",
        "description": "Arrival at Bagan, Myanmar. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mahabodhi Temple, Bagan",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mahabodhi Temple, Bagan",
        "description": "Full day guided visit to Mahabodhi Temple, Bagan. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mahabodhi Temple, Bagan",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-mount-kailash-tibet",
    "title": "Mount Kailash Journey",
    "destinationName": "Mount Kailash",
    "destinations": "Mount Kailash (Ngari, Tibet)",
    "location": "Ngari, Tibet",
    "route": [
      "Ngari",
      "Mount Kailash"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Mount Kailash, Tibet.webp",
    "altText": "Mount Kailash buddhist pilgrimage destination in Ngari, Tibet",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mount Kailash",
        "description": "Arrival at Ngari, Tibet. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mount Kailash",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mount Kailash",
        "description": "Full day guided visit to Mount Kailash. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mount Kailash",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-nalanda-india",
    "title": "Nalanda Journey",
    "destinationName": "Nalanda",
    "destinations": "Nalanda (Nalanda, Bihar, India)",
    "location": "Nalanda, Bihar, India",
    "route": [
      "Nalanda",
      "Nalanda"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Nalanda, India.jpg",
    "altText": "Nalanda buddhist pilgrimage destination in Nalanda, Bihar, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Nalanda",
        "description": "Arrival at Nalanda, Bihar, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Nalanda",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Nalanda",
        "description": "Full day guided visit to Nalanda. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Nalanda",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-rajgir-india",
    "title": "Rajgir Journey",
    "destinationName": "Rajgir",
    "destinations": "Rajgir (Nalanda, Bihar, India)",
    "location": "Nalanda, Bihar, India",
    "route": [
      "Nalanda",
      "Rajgir"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Rajgir, India.jpg",
    "altText": "Rajgir buddhist pilgrimage destination in Nalanda, Bihar, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Rajgir",
        "description": "Arrival at Nalanda, Bihar, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Rajgir",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Rajgir",
        "description": "Full day guided visit to Rajgir. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Rajgir",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-sarnath-india",
    "title": "Sarnath Journey",
    "destinationName": "Sarnath",
    "destinations": "Sarnath (Varanasi, Uttar Pradesh, India)",
    "location": "Varanasi, Uttar Pradesh, India",
    "route": [
      "Varanasi",
      "Sarnath"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Sarnath, India.jpg",
    "altText": "Sarnath buddhist pilgrimage destination in Varanasi, Uttar Pradesh, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Sarnath",
        "description": "Arrival at Varanasi, Uttar Pradesh, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Sarnath",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Sarnath",
        "description": "Full day guided visit to Sarnath. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Sarnath",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-shwedagon-pagoda-myanmar",
    "title": "Shwedagon Pagoda Journey",
    "destinationName": "Shwedagon Pagoda",
    "destinations": "Shwedagon Pagoda (Yangon, Myanmar)",
    "location": "Yangon, Myanmar",
    "route": [
      "Yangon",
      "Shwedagon Pagoda"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Shwedagon Pagoda, Myanmar.jpg",
    "altText": "Shwedagon Pagoda buddhist pilgrimage destination in Yangon, Myanmar",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Shwedagon Pagoda",
        "description": "Arrival at Yangon, Myanmar. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Shwedagon Pagoda",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Shwedagon Pagoda",
        "description": "Full day guided visit to Shwedagon Pagoda. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Shwedagon Pagoda",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "buddhism-tiger-s-nest-monastery-paro-taktsang-bhutan",
    "title": "Tiger’s Nest Monastery Journey",
    "destinationName": "Tiger’s Nest Monastery",
    "destinations": "Tiger’s Nest Monastery (Paro, Bhutan)",
    "location": "Paro, Bhutan",
    "route": [
      "Paro",
      "Tiger’s Nest Monastery"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Buddhism",
    "categoryLabel": "Buddhist Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Buddhism/Tiger’s Nest Monastery (Paro Taktsang), Bhutan.jpg",
    "altText": "Tiger’s Nest Monastery buddhist pilgrimage destination in Paro, Bhutan",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned buddhist pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Buddhist Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Tiger’s Nest Monastery",
        "description": "Arrival at Paro, Bhutan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Tiger’s Nest Monastery",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Tiger’s Nest Monastery",
        "description": "Full day guided visit to Tiger’s Nest Monastery. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Tiger’s Nest Monastery",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-basilica-of-our-lady-of-guadalupe-mexico",
    "title": "Basilica of Our Lady of Guadalupe Journey",
    "destinationName": "Basilica of Our Lady of Guadalupe",
    "destinations": "Basilica of Our Lady of Guadalupe (Mexico City, Mexico)",
    "location": "Mexico City, Mexico",
    "route": [
      "Mexico City",
      "Basilica of Our Lady of Guadalupe"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Basilica of Our Lady of Guadalupe, Mexico.jpg",
    "altText": "Basilica of Our Lady of Guadalupe christian pilgrimage destination in Mexico City, Mexico",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Basilica of Our Lady of Guadalupe",
        "description": "Arrival at Mexico City, Mexico. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Basilica of Our Lady of Guadalupe",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Basilica of Our Lady of Guadalupe",
        "description": "Full day guided visit to Basilica of Our Lady of Guadalupe. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Basilica of Our Lady of Guadalupe",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-basilica-of-saint-peter-vatican-city",
    "title": "Basilica of Saint Peter, Vatican City Journey",
    "destinationName": "Basilica of Saint Peter, Vatican City",
    "destinations": "Basilica of Saint Peter, Vatican City (Vatican City)",
    "location": "Vatican City",
    "route": [
      "Vatican City",
      "Basilica of Saint Peter, Vatican City"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Basilica of Saint Peter, Vatican City.jpg",
    "altText": "Basilica of Saint Peter, Vatican City christian pilgrimage destination in Vatican City",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Basilica of Saint Peter, Vatican City",
        "description": "Arrival at Vatican City. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Basilica of Saint Peter, Vatican City",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Basilica of Saint Peter, Vatican City",
        "description": "Full day guided visit to Basilica of Saint Peter, Vatican City. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Basilica of Saint Peter, Vatican City",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-bethlehem-palestine",
    "title": "Bethlehem Journey",
    "destinationName": "Bethlehem",
    "destinations": "Bethlehem (West Bank, Palestine)",
    "location": "West Bank, Palestine",
    "route": [
      "West Bank",
      "Bethlehem"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Bethlehem, Palestine.jpg",
    "altText": "Bethlehem christian pilgrimage destination in West Bank, Palestine",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Bethlehem",
        "description": "Arrival at West Bank, Palestine. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Bethlehem",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Bethlehem",
        "description": "Full day guided visit to Bethlehem. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Bethlehem",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-camino-de-santiago-spain",
    "title": "Camino de Santiago, Spain Journey",
    "destinationName": "Camino de Santiago, Spain",
    "destinations": "Camino de Santiago, Spain (Galicia, Spain)",
    "location": "Galicia, Spain",
    "route": [
      "Galicia",
      "Camino de Santiago, Spain"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Camino de Santiago, Spain.jpg",
    "altText": "Camino de Santiago, Spain christian pilgrimage destination in Galicia, Spain",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Camino de Santiago, Spain",
        "description": "Arrival at Galicia, Spain. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Camino de Santiago, Spain",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Camino de Santiago, Spain",
        "description": "Full day guided visit to Camino de Santiago, Spain. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Camino de Santiago, Spain",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-canterbury-cathedral-england",
    "title": "Canterbury Cathedral Journey",
    "destinationName": "Canterbury Cathedral",
    "destinations": "Canterbury Cathedral (Kent, England)",
    "location": "Kent, England",
    "route": [
      "Kent",
      "Canterbury Cathedral"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Canterbury Cathedral, England.jpg",
    "altText": "Canterbury Cathedral christian pilgrimage destination in Kent, England",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Canterbury Cathedral",
        "description": "Arrival at Kent, England. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Canterbury Cathedral",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Canterbury Cathedral",
        "description": "Full day guided visit to Canterbury Cathedral. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Canterbury Cathedral",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-church-of-the-holy-sepulchre-jerusalem-israel",
    "title": "Church of the Holy Sepulchre, Jerusalem Journey",
    "destinationName": "Church of the Holy Sepulchre, Jerusalem",
    "destinations": "Church of the Holy Sepulchre, Jerusalem (Jerusalem, Israel)",
    "location": "Jerusalem, Israel",
    "route": [
      "Jerusalem",
      "Church of the Holy Sepulchre, Jerusalem"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Church of the Holy Sepulchre, Jerusalem, Israel.jpg",
    "altText": "Church of the Holy Sepulchre, Jerusalem christian pilgrimage destination in Jerusalem, Israel",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Church of the Holy Sepulchre, Jerusalem",
        "description": "Arrival at Jerusalem, Israel. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Church of the Holy Sepulchre, Jerusalem",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Church of the Holy Sepulchre, Jerusalem",
        "description": "Full day guided visit to Church of the Holy Sepulchre, Jerusalem. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Church of the Holy Sepulchre, Jerusalem",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-el-santuario-de-chimayo-new-mexico-usa",
    "title": "El Santuario de Chimayo Journey",
    "destinationName": "El Santuario de Chimayo",
    "destinations": "El Santuario de Chimayo (New Mexico, USA)",
    "location": "New Mexico, USA",
    "route": [
      "New Mexico",
      "El Santuario de Chimayo"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/El Santuario de Chimayo, New Mexico, USA.jpg",
    "altText": "El Santuario de Chimayo christian pilgrimage destination in New Mexico, USA",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at El Santuario de Chimayo",
        "description": "Arrival at New Mexico, USA. Check in to hotel, relaxation, and evening orientation.",
        "stay": "El Santuario de Chimayo",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of El Santuario de Chimayo",
        "description": "Full day guided visit to El Santuario de Chimayo. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "El Santuario de Chimayo",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-f-tima-portugal",
    "title": "Fátima Journey",
    "destinationName": "Fátima",
    "destinations": "Fátima (Santarém, Portugal)",
    "location": "Santarém, Portugal",
    "route": [
      "Santarém",
      "Fátima"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Fátima, Portugal.jpg",
    "altText": "Fátima christian pilgrimage destination in Santarém, Portugal",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Fátima",
        "description": "Arrival at Santarém, Portugal. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Fátima",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Fátima",
        "description": "Full day guided visit to Fátima. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Fátima",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-lalibela-ethiopia",
    "title": "Lalibela Journey",
    "destinationName": "Lalibela",
    "destinations": "Lalibela (Amhara, Ethiopia)",
    "location": "Amhara, Ethiopia",
    "route": [
      "Amhara",
      "Lalibela"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Lalibela, Ethiopia.webp",
    "altText": "Lalibela christian pilgrimage destination in Amhara, Ethiopia",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Lalibela",
        "description": "Arrival at Amhara, Ethiopia. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Lalibela",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Lalibela",
        "description": "Full day guided visit to Lalibela. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Lalibela",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-mount-athos-greece",
    "title": "Mount Athos Journey",
    "destinationName": "Mount Athos",
    "destinations": "Mount Athos (Chalkidiki, Greece)",
    "location": "Chalkidiki, Greece",
    "route": [
      "Chalkidiki",
      "Mount Athos"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Mount Athos, Greece.jpg",
    "altText": "Mount Athos christian pilgrimage destination in Chalkidiki, Greece",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mount Athos",
        "description": "Arrival at Chalkidiki, Greece. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mount Athos",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mount Athos",
        "description": "Full day guided visit to Mount Athos. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mount Athos",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-old-city-jerusalem-israel",
    "title": "Old City Jerusalem Journey",
    "destinationName": "Old City Jerusalem",
    "destinations": "Old City Jerusalem (Jerusalem, Israel)",
    "location": "Jerusalem, Israel",
    "route": [
      "Jerusalem",
      "Old City Jerusalem"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Old City Jerusalem, Israel.jpg",
    "altText": "Old City Jerusalem christian pilgrimage destination in Jerusalem, Israel",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Old City Jerusalem",
        "description": "Arrival at Jerusalem, Israel. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Old City Jerusalem",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Old City Jerusalem",
        "description": "Full day guided visit to Old City Jerusalem. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Old City Jerusalem",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-sanctuary-of-our-lady-of-lourdes-france",
    "title": "Sanctuary of Our Lady of Lourdes Journey",
    "destinationName": "Sanctuary of Our Lady of Lourdes",
    "destinations": "Sanctuary of Our Lady of Lourdes (Hautes-Pyrénées, France)",
    "location": "Hautes-Pyrénées, France",
    "route": [
      "Hautes-Pyrénées",
      "Sanctuary of Our Lady of Lourdes"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Sanctuary of Our Lady of Lourdes, France.jpg",
    "altText": "Sanctuary of Our Lady of Lourdes christian pilgrimage destination in Hautes-Pyrénées, France",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Sanctuary of Our Lady of Lourdes",
        "description": "Arrival at Hautes-Pyrénées, France. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Sanctuary of Our Lady of Lourdes",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Sanctuary of Our Lady of Lourdes",
        "description": "Full day guided visit to Sanctuary of Our Lady of Lourdes. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Sanctuary of Our Lady of Lourdes",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-santiago-atitl-n-guatemala",
    "title": "Santiago Atitlán Journey",
    "destinationName": "Santiago Atitlán",
    "destinations": "Santiago Atitlán (Sololá, Guatemala)",
    "location": "Sololá, Guatemala",
    "route": [
      "Sololá",
      "Santiago Atitlán"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Santiago Atitlán, Guatemala.jpg",
    "altText": "Santiago Atitlán christian pilgrimage destination in Sololá, Guatemala",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Santiago Atitlán",
        "description": "Arrival at Sololá, Guatemala. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Santiago Atitlán",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Santiago Atitlán",
        "description": "Full day guided visit to Santiago Atitlán. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Santiago Atitlán",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-santu-rio-de-nossa-senhora-aparecida-brazil",
    "title": "Santuário de Nossa Senhora Aparecida Journey",
    "destinationName": "Santuário de Nossa Senhora Aparecida",
    "destinations": "Santuário de Nossa Senhora Aparecida (São Paulo, Brazil)",
    "location": "São Paulo, Brazil",
    "route": [
      "São Paulo",
      "Santuário de Nossa Senhora Aparecida"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Santuário de Nossa Senhora Aparecida, Brazil.jpg",
    "altText": "Santuário de Nossa Senhora Aparecida christian pilgrimage destination in São Paulo, Brazil",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Santuário de Nossa Senhora Aparecida",
        "description": "Arrival at São Paulo, Brazil. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Santuário de Nossa Senhora Aparecida",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Santuário de Nossa Senhora Aparecida",
        "description": "Full day guided visit to Santuário de Nossa Senhora Aparecida. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Santuário de Nossa Senhora Aparecida",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "christianity-vatican-city-italy",
    "title": "Vatican City Journey",
    "destinationName": "Vatican City",
    "destinations": "Vatican City (Vatican City, Italy)",
    "location": "Vatican City, Italy",
    "route": [
      "Vatican City",
      "Vatican City"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Christianity",
    "categoryLabel": "Christian Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Christianity/Vatican City, Italy.jpg",
    "altText": "Vatican City christian pilgrimage destination in Vatican City, Italy",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned christian pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Christian Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Vatican City",
        "description": "Arrival at Vatican City, Italy. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Vatican City",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Vatican City",
        "description": "Full day guided visit to Vatican City. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Vatican City",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-adam-s-peak-sri-pada-sri-lanka",
    "title": "Adam’s Peak (Sri Pada) Journey",
    "destinationName": "Adam’s Peak (Sri Pada)",
    "destinations": "Adam’s Peak (Sri Pada) (Ratnapura, Sri Lanka)",
    "location": "Ratnapura, Sri Lanka",
    "route": [
      "Ratnapura",
      "Adam’s Peak (Sri Pada)"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Adam’s Peak (Sri Pada), Sri Lanka.jpg",
    "altText": "Adam’s Peak (Sri Pada) hindu pilgrimage destination in Ratnapura, Sri Lanka",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Adam’s Peak (Sri Pada)",
        "description": "Arrival at Ratnapura, Sri Lanka. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Adam’s Peak (Sri Pada)",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Adam’s Peak (Sri Pada)",
        "description": "Full day guided visit to Adam’s Peak (Sri Pada). Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Adam’s Peak (Sri Pada)",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-badrinath-india",
    "title": "Badrinath Journey",
    "destinationName": "Badrinath",
    "destinations": "Badrinath (Chamoli, Uttarakhand, India)",
    "location": "Chamoli, Uttarakhand, India",
    "route": [
      "Chamoli",
      "Badrinath"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "Char Dham",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Badrinath, India.jpg",
    "altText": "Badrinath hindu pilgrimage destination in Chamoli, Uttarakhand, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Badrinath",
        "description": "Arrival at Chamoli, Uttarakhand, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Badrinath",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Badrinath",
        "description": "Full day guided visit to Badrinath. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Badrinath",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-dwarkadhish-temple-dwarka-india",
    "title": "Dwarkadhish Temple Journey",
    "destinationName": "Dwarkadhish Temple",
    "destinations": "Dwarkadhish Temple (Dwarka, Gujarat, India)",
    "location": "Dwarka, Gujarat, India",
    "route": [
      "Dwarka",
      "Dwarkadhish Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Dwarkadhish Temple (Dwarka), India.jpg",
    "altText": "Dwarkadhish Temple hindu pilgrimage destination in Dwarka, Gujarat, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Dwarkadhish Temple",
        "description": "Arrival at Dwarka, Gujarat, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Dwarkadhish Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Dwarkadhish Temple",
        "description": "Full day guided visit to Dwarkadhish Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Dwarkadhish Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-golden-temple-harmandir-sahib-amritsar-india",
    "title": "Golden Temple Journey",
    "destinationName": "Golden Temple",
    "destinations": "Golden Temple (Amritsar, Punjab, India)",
    "location": "Amritsar, Punjab, India",
    "route": [
      "Amritsar",
      "Golden Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Golden Temple (Harmandir Sahib), Amritsar, India.jpg",
    "altText": "Golden Temple hindu pilgrimage destination in Amritsar, Punjab, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Golden Temple",
        "description": "Arrival at Amritsar, Punjab, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Golden Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Golden Temple",
        "description": "Full day guided visit to Golden Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Golden Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-haridwar-rishikesh-india",
    "title": "Haridwar & Rishikesh Journey",
    "destinationName": "Haridwar & Rishikesh",
    "destinations": "Haridwar & Rishikesh (Uttarakhand, India)",
    "location": "Uttarakhand, India",
    "route": [
      "Uttarakhand",
      "Haridwar & Rishikesh"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "Char Dham",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Haridwar & Rishikesh, India.jpg",
    "altText": "Haridwar & Rishikesh hindu pilgrimage destination in Uttarakhand, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Haridwar & Rishikesh",
        "description": "Arrival at Uttarakhand, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Haridwar & Rishikesh",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Haridwar & Rishikesh",
        "description": "Full day guided visit to Haridwar & Rishikesh. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Haridwar & Rishikesh",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-jagannath-temple-puri-india",
    "title": "Jagannath Temple Journey",
    "destinationName": "Jagannath Temple",
    "destinations": "Jagannath Temple (Puri, Odisha, India)",
    "location": "Puri, Odisha, India",
    "route": [
      "Puri",
      "Jagannath Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Jagannath Temple (Puri), India.jpg",
    "altText": "Jagannath Temple hindu pilgrimage destination in Puri, Odisha, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Jagannath Temple",
        "description": "Arrival at Puri, Odisha, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Jagannath Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Jagannath Temple",
        "description": "Full day guided visit to Jagannath Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Jagannath Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-kashi-vishwanath-varanasi-india",
    "title": "Kashi Vishwanath Journey",
    "destinationName": "Kashi Vishwanath",
    "destinations": "Kashi Vishwanath (Varanasi, Uttar Pradesh, India)",
    "location": "Varanasi, Uttar Pradesh, India",
    "route": [
      "Varanasi",
      "Kashi Vishwanath"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Kashi Vishwanath (Varanasi), India.jpg",
    "altText": "Kashi Vishwanath hindu pilgrimage destination in Varanasi, Uttar Pradesh, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Kashi Vishwanath",
        "description": "Arrival at Varanasi, Uttar Pradesh, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Kashi Vishwanath",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Kashi Vishwanath",
        "description": "Full day guided visit to Kashi Vishwanath. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Kashi Vishwanath",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-kedarnath-india",
    "title": "Kedarnath Journey",
    "destinationName": "Kedarnath",
    "destinations": "Kedarnath (Rudraprayag, Uttarakhand, India)",
    "location": "Rudraprayag, Uttarakhand, India",
    "route": [
      "Rudraprayag",
      "Kedarnath"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "Char Dham",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Kedarnath, India.jpg",
    "altText": "Kedarnath hindu pilgrimage destination in Rudraprayag, Uttarakhand, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Kedarnath",
        "description": "Arrival at Rudraprayag, Uttarakhand, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Kedarnath",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Kedarnath",
        "description": "Full day guided visit to Kedarnath. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Kedarnath",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-mahakaleshwar-temple-ujjain-india",
    "title": "Mahakaleshwar Temple Journey",
    "destinationName": "Mahakaleshwar Temple",
    "destinations": "Mahakaleshwar Temple (Ujjain, Madhya Pradesh, India)",
    "location": "Ujjain, Madhya Pradesh, India",
    "route": [
      "Ujjain",
      "Mahakaleshwar Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Mahakaleshwar Temple (Ujjain), India.jpg",
    "altText": "Mahakaleshwar Temple hindu pilgrimage destination in Ujjain, Madhya Pradesh, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mahakaleshwar Temple",
        "description": "Arrival at Ujjain, Madhya Pradesh, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mahakaleshwar Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mahakaleshwar Temple",
        "description": "Full day guided visit to Mahakaleshwar Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mahakaleshwar Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-mount-kailash-tibet",
    "title": "Mount Kailash Journey",
    "destinationName": "Mount Kailash",
    "destinations": "Mount Kailash (Ngari, Tibet)",
    "location": "Ngari, Tibet",
    "route": [
      "Ngari",
      "Mount Kailash"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Mount Kailash, Tibet.webp",
    "altText": "Mount Kailash hindu pilgrimage destination in Ngari, Tibet",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "May – Oct",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mount Kailash",
        "description": "Arrival at Ngari, Tibet. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mount Kailash",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mount Kailash",
        "description": "Full day guided visit to Mount Kailash. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mount Kailash",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-rameswaram-india",
    "title": "Rameswaram Journey",
    "destinationName": "Rameswaram",
    "destinations": "Rameswaram (Ramanathapuram, Tamil Nadu, India)",
    "location": "Ramanathapuram, Tamil Nadu, India",
    "route": [
      "Ramanathapuram",
      "Rameswaram"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "South India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Rameswaram, India.jpg",
    "altText": "Rameswaram hindu pilgrimage destination in Ramanathapuram, Tamil Nadu, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Rameswaram",
        "description": "Arrival at Ramanathapuram, Tamil Nadu, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Rameswaram",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Rameswaram",
        "description": "Full day guided visit to Rameswaram. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Rameswaram",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-somnath-temple-india",
    "title": "Somnath Temple Journey",
    "destinationName": "Somnath Temple",
    "destinations": "Somnath Temple (Prabhas Patan, Gujarat, India)",
    "location": "Prabhas Patan, Gujarat, India",
    "route": [
      "Prabhas Patan",
      "Somnath Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Somnath Temple, India.jpg",
    "altText": "Somnath Temple hindu pilgrimage destination in Prabhas Patan, Gujarat, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Somnath Temple",
        "description": "Arrival at Prabhas Patan, Gujarat, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Somnath Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Somnath Temple",
        "description": "Full day guided visit to Somnath Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Somnath Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-tirupati-balaji-temple-india",
    "title": "Tirupati Balaji Temple Journey",
    "destinationName": "Tirupati Balaji Temple",
    "destinations": "Tirupati Balaji Temple (Tirupati, Andhra Pradesh, India)",
    "location": "Tirupati, Andhra Pradesh, India",
    "route": [
      "Tirupati",
      "Tirupati Balaji Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "South India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Tirupati Balaji Temple, India.webp",
    "altText": "Tirupati Balaji Temple hindu pilgrimage destination in Tirupati, Andhra Pradesh, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Tirupati Balaji Temple",
        "description": "Arrival at Tirupati, Andhra Pradesh, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Tirupati Balaji Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Tirupati Balaji Temple",
        "description": "Full day guided visit to Tirupati Balaji Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Tirupati Balaji Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-trimbakeshwar-temple-nashik-india",
    "title": "Trimbakeshwar Temple Journey",
    "destinationName": "Trimbakeshwar Temple",
    "destinations": "Trimbakeshwar Temple (Nashik, Maharashtra, India)",
    "location": "Nashik, Maharashtra, India",
    "route": [
      "Nashik",
      "Trimbakeshwar Temple"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "Maharashtra",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Trimbakeshwar Temple (Nashik), India.jpg",
    "altText": "Trimbakeshwar Temple hindu pilgrimage destination in Nashik, Maharashtra, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Trimbakeshwar Temple",
        "description": "Arrival at Nashik, Maharashtra, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Trimbakeshwar Temple",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Trimbakeshwar Temple",
        "description": "Full day guided visit to Trimbakeshwar Temple. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Trimbakeshwar Temple",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "hinduism-vaishno-devi-india",
    "title": "Vaishno Devi Journey",
    "destinationName": "Vaishno Devi",
    "destinations": "Vaishno Devi (Katra, Jammu & Kashmir, India)",
    "location": "Katra, Jammu & Kashmir, India",
    "route": [
      "Katra",
      "Vaishno Devi"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Hinduism",
    "categoryLabel": "Hindu Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Hinduism/Vaishno Devi, India.jpg",
    "altText": "Vaishno Devi hindu pilgrimage destination in Katra, Jammu & Kashmir, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned hindu pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Hindu Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Vaishno Devi",
        "description": "Arrival at Katra, Jammu & Kashmir, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Vaishno Devi",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Vaishno Devi",
        "description": "Full day guided visit to Vaishno Devi. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Vaishno Devi",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-ajmer-sharif-dargah-india",
    "title": "Ajmer Sharif Dargah Journey",
    "destinationName": "Ajmer Sharif Dargah",
    "destinations": "Ajmer Sharif Dargah (Ajmer, Rajasthan, India)",
    "location": "Ajmer, Rajasthan, India",
    "route": [
      "Ajmer",
      "Ajmer Sharif Dargah"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "North India",
    "image": "/images/tourist-places/pilgrimage/Islam/Ajmer Sharif Dargah, India.jpg",
    "altText": "Ajmer Sharif Dargah islamic pilgrimage destination in Ajmer, Rajasthan, India",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Ajmer Sharif Dargah",
        "description": "Arrival at Ajmer, Rajasthan, India. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Ajmer Sharif Dargah",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Ajmer Sharif Dargah",
        "description": "Full day guided visit to Ajmer Sharif Dargah. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Ajmer Sharif Dargah",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-al-aqsa-mosque-jerusalem-israel",
    "title": "Al Aqsa Mosque, Jerusalem Journey",
    "destinationName": "Al Aqsa Mosque, Jerusalem",
    "destinations": "Al Aqsa Mosque, Jerusalem (Jerusalem, Israel)",
    "location": "Jerusalem, Israel",
    "route": [
      "Jerusalem",
      "Al Aqsa Mosque, Jerusalem"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Al-Aqsa Mosque, Jerusalem, Israel.jpg",
    "altText": "Al Aqsa Mosque, Jerusalem islamic pilgrimage destination in Jerusalem, Israel",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Al Aqsa Mosque, Jerusalem",
        "description": "Arrival at Jerusalem, Israel. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Al Aqsa Mosque, Jerusalem",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Al Aqsa Mosque, Jerusalem",
        "description": "Full day guided visit to Al Aqsa Mosque, Jerusalem. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Al Aqsa Mosque, Jerusalem",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-al-azhar-mosque-cairo-egypt",
    "title": "Al Azhar Mosque, Cairo Journey",
    "destinationName": "Al Azhar Mosque, Cairo",
    "destinations": "Al Azhar Mosque, Cairo (Cairo, Egypt)",
    "location": "Cairo, Egypt",
    "route": [
      "Cairo",
      "Al Azhar Mosque, Cairo"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Al-Azhar Mosque, Cairo, Egypt.jpg",
    "altText": "Al Azhar Mosque, Cairo islamic pilgrimage destination in Cairo, Egypt",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Al Azhar Mosque, Cairo",
        "description": "Arrival at Cairo, Egypt. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Al Azhar Mosque, Cairo",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Al Azhar Mosque, Cairo",
        "description": "Full day guided visit to Al Azhar Mosque, Cairo. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Al Azhar Mosque, Cairo",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-al-masjid-al-qiblatayn-medina-saudi-arabia",
    "title": "Al Masjid al Qiblatayn, Medina Journey",
    "destinationName": "Al Masjid al Qiblatayn, Medina",
    "destinations": "Al Masjid al Qiblatayn, Medina (Medina, Saudi Arabia)",
    "location": "Medina, Saudi Arabia",
    "route": [
      "Medina",
      "Al Masjid al Qiblatayn, Medina"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Al-Masjid al-Qiblatayn, Medina, Saudi Arabia.jpg",
    "altText": "Al Masjid al Qiblatayn, Medina islamic pilgrimage destination in Medina, Saudi Arabia",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Al Masjid al Qiblatayn, Medina",
        "description": "Arrival at Medina, Saudi Arabia. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Al Masjid al Qiblatayn, Medina",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Al Masjid al Qiblatayn, Medina",
        "description": "Full day guided visit to Al Masjid al Qiblatayn, Medina. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Al Masjid al Qiblatayn, Medina",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-data-darbar-lahore-pakistan",
    "title": "Data Darbar, Lahore Journey",
    "destinationName": "Data Darbar, Lahore",
    "destinations": "Data Darbar, Lahore (Lahore, Pakistan)",
    "location": "Lahore, Pakistan",
    "route": [
      "Lahore",
      "Data Darbar, Lahore"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Data Darbar, Lahore, Pakistan.jpg",
    "altText": "Data Darbar, Lahore islamic pilgrimage destination in Lahore, Pakistan",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Data Darbar, Lahore",
        "description": "Arrival at Lahore, Pakistan. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Data Darbar, Lahore",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Data Darbar, Lahore",
        "description": "Full day guided visit to Data Darbar, Lahore. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Data Darbar, Lahore",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-dome-of-the-rock-jerusalem-israel",
    "title": "Dome of the Rock, Jerusalem Journey",
    "destinationName": "Dome of the Rock, Jerusalem",
    "destinations": "Dome of the Rock, Jerusalem (Jerusalem, Israel)",
    "location": "Jerusalem, Israel",
    "route": [
      "Jerusalem",
      "Dome of the Rock, Jerusalem"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Dome of the Rock, Jerusalem, Israel.jpg",
    "altText": "Dome of the Rock, Jerusalem islamic pilgrimage destination in Jerusalem, Israel",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Dome of the Rock, Jerusalem",
        "description": "Arrival at Jerusalem, Israel. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Dome of the Rock, Jerusalem",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Dome of the Rock, Jerusalem",
        "description": "Full day guided visit to Dome of the Rock, Jerusalem. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Dome of the Rock, Jerusalem",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-imam-ali-shrine-najaf-iraq",
    "title": "Imam Ali Shrine, Najaf Journey",
    "destinationName": "Imam Ali Shrine, Najaf",
    "destinations": "Imam Ali Shrine, Najaf (Najaf, Iraq)",
    "location": "Najaf, Iraq",
    "route": [
      "Najaf",
      "Imam Ali Shrine, Najaf"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Imam Ali Shrine, Najaf, Iraq.jpg",
    "altText": "Imam Ali Shrine, Najaf islamic pilgrimage destination in Najaf, Iraq",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Imam Ali Shrine, Najaf",
        "description": "Arrival at Najaf, Iraq. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Imam Ali Shrine, Najaf",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Imam Ali Shrine, Najaf",
        "description": "Full day guided visit to Imam Ali Shrine, Najaf. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Imam Ali Shrine, Najaf",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-imam-husayn-shrine-karbala-iraq",
    "title": "Imam Husayn Shrine, Karbala Journey",
    "destinationName": "Imam Husayn Shrine, Karbala",
    "destinations": "Imam Husayn Shrine, Karbala (Karbala, Iraq)",
    "location": "Karbala, Iraq",
    "route": [
      "Karbala",
      "Imam Husayn Shrine, Karbala"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Imam Husayn Shrine, Karbala, Iraq.jpg",
    "altText": "Imam Husayn Shrine, Karbala islamic pilgrimage destination in Karbala, Iraq",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 19300,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Imam Husayn Shrine, Karbala",
        "description": "Arrival at Karbala, Iraq. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Imam Husayn Shrine, Karbala",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Imam Husayn Shrine, Karbala",
        "description": "Full day guided visit to Imam Husayn Shrine, Karbala. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Imam Husayn Shrine, Karbala",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-imam-reza-shrine-mashhad-iran",
    "title": "Imam Reza Shrine, Mashhad Journey",
    "destinationName": "Imam Reza Shrine, Mashhad",
    "destinations": "Imam Reza Shrine, Mashhad (Mashhad, Iran)",
    "location": "Mashhad, Iran",
    "route": [
      "Mashhad",
      "Imam Reza Shrine, Mashhad"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Imam Reza Shrine, Mashhad, Iran.jpg",
    "altText": "Imam Reza Shrine, Mashhad islamic pilgrimage destination in Mashhad, Iran",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 20500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Imam Reza Shrine, Mashhad",
        "description": "Arrival at Mashhad, Iran. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Imam Reza Shrine, Mashhad",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Imam Reza Shrine, Mashhad",
        "description": "Full day guided visit to Imam Reza Shrine, Mashhad. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Imam Reza Shrine, Mashhad",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-mecca-saudi-arabia",
    "title": "Mecca Journey",
    "destinationName": "Mecca",
    "destinations": "Mecca (Makkah, Saudi Arabia)",
    "location": "Makkah, Saudi Arabia",
    "route": [
      "Makkah",
      "Mecca"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Mecca, Saudi Arabia.jpg",
    "altText": "Mecca islamic pilgrimage destination in Makkah, Saudi Arabia",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 21700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Mecca",
        "description": "Arrival at Makkah, Saudi Arabia. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Mecca",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Mecca",
        "description": "Full day guided visit to Mecca. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Mecca",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-medina-saudi-arabia",
    "title": "Medina Journey",
    "destinationName": "Medina",
    "destinations": "Medina (Saudi Arabia)",
    "location": "Saudi Arabia",
    "route": [
      "Saudi Arabia",
      "Medina"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Medina, Saudi Arabia.jpg",
    "altText": "Medina islamic pilgrimage destination in Saudi Arabia",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 22900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Medina",
        "description": "Arrival at Saudi Arabia. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Medina",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Medina",
        "description": "Full day guided visit to Medina. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Medina",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-old-city-jerusalem-israel",
    "title": "Old City Jerusalem Journey",
    "destinationName": "Old City Jerusalem",
    "destinations": "Old City Jerusalem (Jerusalem, Israel)",
    "location": "Jerusalem, Israel",
    "route": [
      "Jerusalem",
      "Old City Jerusalem"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Old City Jerusalem, Israel.jpg",
    "altText": "Old City Jerusalem islamic pilgrimage destination in Jerusalem, Israel",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 14500,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Old City Jerusalem",
        "description": "Arrival at Jerusalem, Israel. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Old City Jerusalem",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Old City Jerusalem",
        "description": "Full day guided visit to Old City Jerusalem. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Old City Jerusalem",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-quba-mosque-medina-saudi-arabia",
    "title": "Quba Mosque, Medina Journey",
    "destinationName": "Quba Mosque, Medina",
    "destinations": "Quba Mosque, Medina (Medina, Saudi Arabia)",
    "location": "Medina, Saudi Arabia",
    "route": [
      "Medina",
      "Quba Mosque, Medina"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Quba Mosque, Medina, Saudi Arabia.jpg",
    "altText": "Quba Mosque, Medina islamic pilgrimage destination in Medina, Saudi Arabia",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 15700,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Quba Mosque, Medina",
        "description": "Arrival at Medina, Saudi Arabia. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Quba Mosque, Medina",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Quba Mosque, Medina",
        "description": "Full day guided visit to Quba Mosque, Medina. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Quba Mosque, Medina",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-touba-senegal",
    "title": "Touba Journey",
    "destinationName": "Touba",
    "destinations": "Touba (Diourbel, Senegal)",
    "location": "Diourbel, Senegal",
    "route": [
      "Diourbel",
      "Touba"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Touba, Senegal.webp",
    "altText": "Touba islamic pilgrimage destination in Diourbel, Senegal",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 16900,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Touba",
        "description": "Arrival at Diourbel, Senegal. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Touba",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Touba",
        "description": "Full day guided visit to Touba. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Touba",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  },
  {
    "id": "islam-umayyad-mosque-damascus-syria",
    "title": "Umayyad Mosque, Damascus Journey",
    "destinationName": "Umayyad Mosque, Damascus",
    "destinations": "Umayyad Mosque, Damascus (Damascus, Syria)",
    "location": "Damascus, Syria",
    "route": [
      "Damascus",
      "Umayyad Mosque, Damascus"
    ],
    "mainCategory": "Pilgrimage",
    "subCategory": "Islam",
    "categoryLabel": "Islamic Pilgrimage",
    "category": "Pilgrimage",
    "region": "International",
    "image": "/images/tourist-places/pilgrimage/Islam/Umayyad Mosque, Damascus, Syria.jpg",
    "altText": "Umayyad Mosque, Damascus islamic pilgrimage destination in Damascus, Syria",
    "duration": "3 Days / 2 Nights",
    "bestSeason": "Oct – Mar",
    "pace": "Easy Paced",
    "travellerType": "Senior Friendly",
    "description": "A thoughtfully planned islamic pilgrimage offering comfort, guidance, and a memorable experience.",
    "price": 18100,
    "rating": null,
    "reviewCount": null,
    "seatsLeft": null,
    "recentBookings": null,
    "verified": null,
    "tags": [
      "Islamic Pilgrimage",
      "Curated Journey"
    ],
    "seniorFriendly": true,
    "wheelchairAccess": true,
    "vegMeals": true,
    "inclusions": {
      "hotel": "Verified Comfort Hotel",
      "meals": "Pure Veg Meals",
      "transit": "AC Transit / Private Coach",
      "guide": "Dedicated Tour Guide"
    },
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome at Umayyad Mosque, Damascus",
        "description": "Arrival at Damascus, Syria. Check in to hotel, relaxation, and evening orientation.",
        "stay": "Umayyad Mosque, Damascus",
        "meals": "Dinner Included",
        "activityType": "general"
      },
      {
        "day": 2,
        "title": "Guided Sightseeing & Exploration of Umayyad Mosque, Damascus",
        "description": "Full day guided visit to Umayyad Mosque, Damascus. Experience local heritage, cultural significance, and peaceful surroundings.",
        "stay": "Umayyad Mosque, Damascus",
        "meals": "Breakfast & Dinner Included",
        "activityType": "spiritual"
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning leisure followed by check-out and transfer for onward departure journey.",
        "stay": "N/A",
        "meals": "Breakfast Included",
        "activityType": "general"
      }
    ]
  }
];
