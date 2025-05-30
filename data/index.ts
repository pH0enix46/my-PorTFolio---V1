// // //
export const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "About Me", link: "#aboutme" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[60vh] opacity-80",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/mdJoy.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with any time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tools",
    description: "I'm constantly trying to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[36vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Connect with me 💞",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 min-h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "My upcoming goal is to master all the skills I've learned by working in a real team environment. I believe real collaboration is the key to turning knowledge into true expertise",
    description: "Upcoming Goals",
    className: "md:col-span-3 md:row-span-2 min-h-[34vh]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "The Wild Oasis -Admin Panel",
    des: "This project focuses on React Query, Styled Components, React Hook Form, Supabase, advanced compound component patterns. It also includes authentication, dynamic charts, dark mode",
    img: "/img/my-project/wild-oasis-react.png",
    iconLists: [
      "/img/skill/react.png",
      "/img/skill/tailwind.png",
      "/img/skill/js.webp",
      "/img/skill/supabase.jpeg",
      "/img/skill/styled-component.png",
    ],
    link: "https://github.com/pH0enix46/The-Wild-Oasis--Modern-ADMIN-PANEL---REACT",
  },
  {
    id: 2,
    title: "The Wild Oasis -WEB APP",
    des: "This project focuses on Next.js `app` router, React Server Components, server actions, authentication with NextAuth, Google signin system and many more",
    img: "/img/my-project/wild-oasis-next.png",
    iconLists: [
      "/img/skill/nextjs.jpeg",
      "/img/skill/react.png",
      "/img/skill/auth.png",
      "/img/skill/tailwind.png",
      "/img/skill/js.webp",
      "/img/skill/supabase.jpeg",
    ],
    link: "https://github.com/pH0enix46/The-Wild-Oasis--Modern-WEB-APP---NEXT.JS",
  },
  {
    id: 3,
    title: "My university final year project",
    des: "Created an eCommerce platform for computer products, built with MERN stack, offering a smooth and interactive shopping experience",
    img: "/img/my-project/varsity.png",
    iconLists: [
      "/img/skill/react.png",
      "/img/skill/tailwind.png",
      "/img/skill/js.webp",
      "/img/skill/nodejs.png",
      "/img/skill/express.webp",
      "/img/skill/mongodb.svg",
    ],
    link: "https://github.com/pH0enix46/Final-year-project---UNIVERSITY",
  },
  {
    id: 4,
    title: "Natours Tours Guide",
    des: "Developed a secure, dynamic tour booking system with JWT authentication, login/logout functionality, Stripe payment integration, and user-specific access control",
    img: "/img/my-project/natours.png",
    iconLists: [
      "/img/skill/react.png",
      "/img/skill/tailwind.png",
      "/img/skill/js.webp",
      "/img/skill/nodejs.png",
      "/img/skill/express.webp",
      "/img/skill/mongodb.svg",
    ],
    link: "https://github.com/pH0enix46/Natours-Website---NODE-EXPRESS-MONGODB",
  },
  {
    id: 5,
    title: "Bankist App",
    des: "Developed a secure platform allowing users to log in, transfer money, take loans, and manage deposits and withdrawals, with sorting logic for easy transaction tracking",
    img: "/img/my-project/bankist.png",
    iconLists: ["/img/skill/js.webp", "/img/skill/sass.png"],
    link: "https://github.com/pH0enix46/Bankist-App---JAVASCRIPT",
  },
  {
    id: 6,
    title: "3D Solar System",
    des: "This project was originally created by Julian Garnier in 2012 under the MIT License. I converted it to Next.js in 2025, also under the MIT License",
    img: "/img/my-project/3d-solar-system.png",
    iconLists: [
      "/img/skill/js.webp",
      "/img/skill/nextjs.jpeg",
      "/img/skill/react.png",
    ],
    link: "https://github.com/pH0enix46/3D-Solar-System---NEXT.JS?tab=readme-ov-file",
  },
];

export const testimonials = [
  {
    quote:
      "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction",
    name: "Bill Gates",
    title: "CEO of Microsoft",
    img: "/img/famous_person/bill-gates.webp",
  },
  {
    quote:
      "The biggest risk is not taking any risk… In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks",
    name: "Mark Zuckerberg",
    title: "CEO of Facebook",
    img: "/img/famous_person/mark.avif",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do",
    name: "Steve Jobs",
    title: "CEO of Apple",
    img: "/img/famous_person/steve.jpg",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor",
    name: "Elon Musk",
    title: "CEO of Tesla",
    img: "/img/famous_person/elon.jpeg",
  },
  {
    quote:
      "The best programmers are the ones who can pick up new things quickly. It’s not about knowing every technology, it's about being able to understand new systems, and new paradigms, and adapting to them",
    name: "Gabe Newell",
    title: "President of Valve Corporation",
    img: "/img/famous_person/gabe.jpg",
  },
];
