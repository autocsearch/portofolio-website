const nestchat = {
  slug: "nestchat",
  overview: {
    title: "NestChat - RealTime Chat App",
    shortDescription: `
      A real-time chat app using Google Auth and Redis pub/sub for fast, live conversations in a minimal interface.
    `,
  },
  description: `
    NestChat is a real-time messaging platform built with Next.js, designed for instant communication using Google authentication and Redis-based pub/sub architecture. Users can sign in with their Google accounts, connect with other users, and send real-time messages via a modern, responsive interface. The app ensures fast message delivery and automatic updates across clients.
  `,
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "NextAuth", "Redis", "Socket.io"],
  screenshots: [
    {
      title: "Login Page",
      image: "/ProjectImage/nestchat/login.jpg",
      description: "Google sign-in screen with NestChat branding.",
    },
    {
      title: "Chat Interface",
      image: "/ProjectImage/nestchat/chat-ui.jpg",
      description: "Clean real-time chat UI with message bubbles and live typing.",
    },
    {
      title: "dashboard",
      image: "/ProjectImage/nestchat/dashboard.jpg",
      description: "dashboard you could see your recent chat.",
    },
    {
      title: "friend request",
      image: "/ProjectImage/nestchat/friendRequest.jpg",
      description: "friend request ui.",
    },
    {
      title: "add friend",
      image: "/ProjectImage/nestchat/addFriend.jpg",
      description: "friend request ui.",
    },
  ],
};

export default nestchat;
