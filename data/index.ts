// // //
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    img: "/mdjoy.jpg",
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
    title: "Programming Languages",
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
      "I'm currently focusing on my university project, while also finishing up my Next.js course on Udemy",
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
    id: 2,
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
    id: 3,
    title: "Bankist App",
    des: "Developed a secure platform allowing users to log in, transfer money, take loans, and manage deposits and withdrawals, with sorting logic for easy transaction tracking",
    img: "/img/my-project/bankist.png",
    iconLists: ["/img/skill/js.webp", "/img/skill/sass.png"],
    link: "https://github.com/pH0enix46/Bankist-App---JAVASCRIPT",
  },
  {
    id: 4,
    title: "Forkify App",
    des: "This project allows users to search for their favorite recipes, visit the associated restaurants, and bookmark their top recipes to easily access and add their favorites recipe",
    img: "/img/my-project/forkify.png",
    iconLists: ["/img/skill/js.webp", "/img/skill/sass.png"],
    link: "https://github.com/pH0enix46/Forkify-App---JAVASCRIPT",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
