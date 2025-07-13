const oasis = {
  slug: "oasis",
  overview: {
    title: "Oasis - Property Rental Platform",
    shortDescription: `
      Oasis is a modern web platform that bridges property owners and travelers through 
      easy listing, smart search, and secure booking features. It supports dynamic pricing, 
      geolocation, multi-language, and wallet-based payments.
    `,
  },
  description: `
    Oasis enables users to browse, filter, and book properties with features like real-time 
    availability, wallet-based payments, and geolocation search. The admin side allows 
    multi-property listings and dynamic pricing, making it ideal for both single and multi-unit hosts.
  `,
  goals: [
    "Dual Authentication: Separate login/register for owners and users with social login.",
    "Smart Browsing: Search by destination, filters, and sort by price.",
    "Booking Comparison: Check availability and pricing across dates.",
    "Real-Time Availability: Instantly reflect availability changes.",
    "Dynamic Pricing: Adjust room prices for dates or peak seasons.",
    "Multi-Property Management: Owners can manage multiple listings.",
    "Ratings & Reviews: Users can review after their stay.",
    "Multi-language & Currency: English + Bahasa Indonesia, IDR/USD conversion.",
    "Digital Wallet: Store credits, view transactions, split payments.",
    "Geolocation Search: Find properties near the user's location.",
  ],
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Express.js", "Prisma ORM", "MySQL", "Cloudinary", "Multer", "Zod"],
  screenshots: [
    {
      title: "Tenant Dashboard",
      image: "/ProjectImages/ProjectDetail/tenantPage.jpg",
      description: "Overview for property owners to manage and monitor their listings in one place.",
    },
    {
      title: "Property Detail Page",
      image: "/ProjectImages/ProjectDetail/property-detail-page.jpg",
      description: "Full info about a selected property — images, availability, amenities, and more.",
    },
    {
      title: "Create Room",
      image: "/ProjectImages/ProjectDetail/create-room-picture.jpg",
      description: "Form to create rooms with pricing, capacity, and media for each listing.",
    },
    {
      title: "Geolocation Integration",
      image: "/ProjectImages/ProjectDetail/edit-property-page.jpg",
      description: "Automatically pin properties on the map with latitude/longitude input.",
    },
  ],
};

export default oasis;
