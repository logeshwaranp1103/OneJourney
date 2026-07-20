export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  tripName: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Ramesh & Savitri Iyer",
    age: 68,
    location: "Chennai",
    quote: "We were very anxious about traveling to Rameswaram because of my arthritis. OneJourney took care of everything—pre-arranged wheelchairs, zero walking in queues, and hotel just steps from the temple. A blessed experience!",
    rating: 5,
    avatarUrl: "/images/avatar_female_senior.png",
    tripName: "Divine South Yatra"
  },
  {
    id: "test-2",
    name: "Prof. Alok Sharma",
    age: 72,
    location: "New Delhi",
    quote: "The VIP Darshan in Kashi Vishwanath was organized seamlessly. As senior citizens, avoiding the chaotic queues made our pilgrimage peaceful and fully spiritual. The coordinator was exceptionally respectful and caring.",
    rating: 5,
    avatarUrl: "/images/avatar_male_senior.png",
    tripName: "Kashi Serenity Tour"
  },
  {
    id: "test-3",
    name: "Meenakshi Kulkarni",
    age: 62,
    location: "Mumbai",
    quote: "Our family group package to Somnath and Dwarka was excellently managed. Pure vegetarian food at all stops, comfortable AC transport with medical kits on-board. Recommended for anyone travelling with elders.",
    rating: 5,
    avatarUrl: "/images/avatar_female_young.png",
    tripName: "Gujarat Jyotirlinga Yatra"
  }
];
