export interface FAQItem {
  question: string;
  answer: string;
}

export const mockFAQs: FAQItem[] = [
  {
    question: "How do you ensure safety and comfort for senior citizens?",
    answer: "Our senior citizen packages feature hotels located close to the temples, low walking distances, battery-operated carts/e-rickshaws where allowed, pre-booked VIP Darshan access to avoid long queues, and an experienced coordinator on-ground. Additionally, all transport vehicles are equipped with first-aid kits and we have emergency contacts with local doctors at every destination."
  },
  {
    question: "Are the meals provided pure vegetarian?",
    answer: "Yes, all meals provided during our tours are strictly pure vegetarian (Satvik) prepared without onion and garlic on request. We carefully select hygienically run, verified restaurants and ashrams to cater to our yatris."
  },
  {
    question: "Do you arrange wheelchair assistance at the temples?",
    answer: "Absolutely. Wheelchair assistance can be pre-arranged at the time of booking. Our dedicated coordinators will ensure that a helper and a wheelchair are ready at the temple entry drop-off points."
  },
  {
    question: "Can we customize a package for a private family group?",
    answer: "Yes, you can request a custom plan. Simply use our AI Trip Planner or click 'Request Custom Plan' to provide details about your group size, budget, specific mobility needs, and destination preferences, and our travel experts will curate a customized itinerary for you."
  },
  {
    question: "Is there any medical support available during the trip?",
    answer: "Our guides are first-aid certified, and we maintain an active database of local doctors and hospitals near our routing points. In case of any medical emergencies, we quickly facilitate clinical consultations."
  }
];
