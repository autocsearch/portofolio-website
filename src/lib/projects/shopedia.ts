const shopedia = {
  slug: "shopedia",
  overview: {
    title: "Shopedia - E-commerce Web",
    shortDescription: `
      A modern e-commerce platform (in progress) where sellers can manage products and users can browse and purchase items.
    `,
  },
  description: `
    Shopedia is a work-in-progress e-commerce platform inspired by modern online marketplaces. It's designed to allow sellers to manage product listings and buyers to browse, filter, and purchase items. The project features a product dashboard, cart logic, category filters, and payment flow integration — currently under development.
  `,
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Express.js", "Prisma ORM", "MySQL", "Cloudinary", "Multer", "Zod"],
  screenshots: [
    {
      title: "Admin Dashboard",
      image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // change to your real local or remote image path
      description: "Admin view where sellers manage products and track sales.",
    },
    {
      title: "Product Listing Page",
      image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // use real image from Unsplash or upload to public folder
      description: "Grid view for all available products with filters.",
    },
    {
      title: "Product Detail Page",
      image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Full details about a selected product, pricing, and purchase button.",
    },
    {
      title: "Checkout Flow",
      image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Simple checkout experience with cart summary and payment options.",
    },
  ],
};

export default shopedia;
