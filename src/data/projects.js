const projects = [
  // FIXO
  {
    id: 1,
    isFinished: true,
    title: "Fixo – A Mobile Solution for Hiring Trusted Tradies in New Zealand",
    date: "2025",
    type: "Mobile App",
    duration: "4 months",
    team: ["Project Manager", "Developers", "UI/UX Designers", "QA Testers"],
    role: [
      "Lead UI/UX Designer",
      "User Research",
      "Prototyping",
      "Design System",
    ],
    keywords: [
      "Mobile Design",
      "User Research",
      "Prototype",
      "Wireframe",
      "Service Trade",
    ],
    description:
      "A mobile-first platform connecting New Zealand homeowners with local tradies. Designed the full UI system from scratch, including wireframes, high-fidelity prototypes, and a scalable component library in Figma. Focused on user-friendly flows for job posting, tradie discovery, and real-time scheduling. Incorporated user research insights and collaborated closely with the development team in an Agile environment to ensure pixel-perfect implementation across iOS and Android platforms.",
    challenge:
      "Homeowners in New Zealand often face difficulty finding trusted local tradespeople due to fragmented listings, lack of user reviews, and outdated interfaces. The goal was to create a seamless platform that connects users with verified tradies efficiently and with confidence.",
    solution:
      "Fixo was designed as a streamlined mobile app where users can easily post job requests, browse verified tradies, and schedule services. The solution focused on a clean UI, intuitive flows, and real-time booking features tailored to Kiwi homeowners.",

    features: [
      {
        img: "../assets/post-job.png",
        title: "Post A Job",
        description:
          "Users can quickly submit detailed job requests, selecting categories and specifying requirements. The design emphasized simplicity and guidance through form steps to reduce friction.",
      },
      {
        img: "../assets/book-tradie.png",
        title: "Find a Reliable Tradie",
        description:
          "Search and filter results based on location, reviews, and specialization. Each tradie profile was designed to show relevant credentials and previous work to build trust.",
      },
      {
        img: "../assets/schedule.png",
        title: "Schedule Work",
        description:
          "Integrated calendar and booking features allow users to set appointments directly with their chosen tradie. Designed with accessibility and responsive feedback in mind.",
      },
    ],
    design_process: "Agile UX",
    process: [
      {
        id: 1,
        title: "Planning & Research",
        description:
          "Conducted user and cultural research to define personas, map user needs, and plan sprint-aligned design goals.",
      },
      {
        id: 2,
        title: "Design & Prototyping",
        description:
          "Created wireframes, prototypes, and UI components in Figma based on sprint priorities and evolving requirements.",
      },
      {
        id: 3,
        title: "Collaboration & Handoff",
        description:
          "Worked closely with developers during sprints to align on implementation, ensuring smooth handoff and real-time feedback.",
      },
      {
        id: 4,
        title: "Usability Testing & Iteration",
        description:
          "Tested designs with dev QAs after each sprint and refined UI elements based on feedback to improve usability and clarity.",
      },
    ],
    logo: "../assets/mobile-app/fixo-logo.png",
    img: "../assets/mobile-app/fixo.png",
  },
  // THE PASTA --unfinished
  {
    id: 5,
    title: "The Pasta Place – Restaurant Landing Page",
    date: "2024",
    type: "Landing Page",
    duration: "1 week",
    team: ["UI/UX Designer"],
    keywords: ["Landing Page", "Visual Design", "Restaurant", "Responsive Web"],
    description:
      "A mouth‑watering single‑page website for an artisan pasta restaurant, crafted to showcase signature dishes, highlight daily specials, and drive online reservations through a clean, appetizing visual style.",

    challenge:
      "The restaurant relied on social media posts for marketing, which lacked a cohesive brand presence and offered no direct way to reserve tables or view the full menu. Customers frequently messaged staff for basic information, slowing service and reducing bookings.",

    solution:
      "Designed a responsive landing page with an enticing hero section, interactive menu gallery, and one‑click reservation form. The site features rich food photography, warm color tones, and clear calls‑to‑action to convert casual browsers into confirmed diners.",

    role: ["UI Designer", "UX Researcher"],

    features: [
      {
        img: "../assets/placeholder.png",
        title: "Hero Section with Quick Actions",
        description:
          "A visually rich hero banner with inviting imagery, paired with two primary CTAs — 'View Menu' and 'Reserve a Table' — allowing users to take immediate action upon landing.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Top Picks Carousel",
        description:
          "An auto-sliding carousel showcasing best-selling pasta dishes with vibrant images and brief descriptions to entice food lovers and highlight customer favorites.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Branch Locations",
        description:
          "Interactive section listing all available branches with maps, contact info, and store hours to help users easily find and visit the nearest location.",
      },
    ],

    design_process: "Design Thinking",

    process: [
      {
        id: 1,
        title: "Empathize",
        description:
          "Interviewed owners and frequent customers to uncover pain points around menu visibility and booking friction.",
      },
      {
        id: 2,
        title: "Define",
        description:
          "Framed the core problem: ‘How might we help diners discover dishes and book a table in under two minutes?’",
      },
      {
        id: 3,
        title: "Ideate",
        description:
          "Sketched multiple layout concepts, prioritizing food photography, brand color palette (warm creams & reds), and mobile‑first navigation.",
      },
      {
        id: 4,
        title: "Prototype & Test",
        description:
          "Built a high‑fidelity Figma prototype and ran hallway‑tests with five diners, iterating on CTA placement and menu card readability.",
      },
    ],

    logo: "../assets/landing-page/the-pasta/the-pasta-logo.png",
    img: "../assets/landing-page/the-pasta/the-pasta1.png",
  },

  // GCRAIT
  {
    id: 4,
    title:
      "GCRAIT – Global Conference on Robotics and Artificial Intelligence Technologies",
    date: "2024",
    type: "Landing Page",
    duration: "2 months",
    team: ["Organizers", "Developer", "UI/UX Designer"],
    keywords: ["School Event", "Collaboration", "User Flow"],
    description:
      "GCRAIT is the official landing page for a school-wide conference focused on innovations in robotics and artificial intelligence. The site was developed to centralize information about the event's activities, showcase featured talks and competitions, and guide participants through registration and submission requirements. Designed for both students and industry professionals, the platform ensured that all content was accessible, engaging, and easy to navigate.",
    challenge:
      "Information about the various activities, submission guidelines, and registration procedures were previously scattered across social media posts and documents, causing confusion for both participants and organizers. There was a need for a centralized, visually engaging platform to streamline communication and improve participant experience.",
    solution:
      "We designed a landing page that clearly outlined the conference details, including schedules, speaker profiles, competition mechanics, and submission guidelines. A clean layout with clear hierarchy and intuitive navigation was implemented to support quick access to key information and ensure a smooth onboarding experience for all attendees.",
    role: ["UI/UX Designer", "Information Architect", "UX Researcher"],
    features: [
      {
        img: "../assets/placeholder.png",
        title: "Robotalks",
        description:
          "An academic and industry-led talk series discussing the latest trends in robotics and artificial intelligence, featuring expert speakers from local institutions and international partners.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Sumobot",
        description:
          "A high-energy competition where student-built robots battle to push each other out of a ring, testing mechanical design, logic, and programming under pressure.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Mobot Race",
        description:
          "A line-tracing robot race that challenges participants to program autonomous mobile bots to follow complex track layouts accurately and quickly.",
      },
    ],
    design_process: "Design Thinking",
    process: [
      {
        id: 1,
        title: "Empathize",
        description:
          "Interviewed organizers, faculty, and participants to understand their needs, confusion points, and expectations about the event platform.",
      },
      {
        id: 2,
        title: "Define",
        description:
          "Mapped out core user journeys—registrants, competitors, and general visitors—to identify key pages and user flows needed on the site.",
      },
      {
        id: 3,
        title: "Ideate",
        description:
          "Created low-fidelity wireframes and layout sketches to explore multiple ways of presenting the event’s content in an intuitive and inviting way.",
      },
      {
        id: 4,
        title: "Prototype & Test",
        description:
          "Developed a clickable prototype and conducted rapid feedback sessions with stakeholders to iterate on design, layout, and content structure.",
      },
    ],
    logo: "../assets/landing-page/gcrait/gcrait-logo.png",
    img: "../assets/landing-page/gcrait/gcrait.png",
  },
  // Anifest --unfinished
  {
    id: 6,
    title: "Animation Festival 2025",
    date: "2025",
    type: "Landing Page",
    duration: "1 month",
    team: ["Organizers", "UI/UX Designer", "Developer"],
    keywords: [
      "School Event",
      "Design System",
      "International Collaboration",
      "Animation",
      "Visual Design",
    ],
    description:
      "The Animation Festival website serves as the central hub for a creative collaboration between our school and Korean academic partners. Designed to showcase student works and facilitate participation in workshops and competitions, the platform celebrates storytelling through various animation disciplines. It highlights key event segments while providing users with schedules, speaker features, and submission guidelines.",
    challenge:
      "Promotional materials and registration details were previously spread across multiple posters and chat groups, which led to confusion among students and international guests. There was no unified platform to showcase student talents or guide users through event participation efficiently.",
    solution:
      "We built a responsive and visually engaging landing page that aligned with the creative theme of the event. The design emphasized accessibility, intuitive navigation, and a modern aesthetic tailored to animation students and enthusiasts. The site included interactive sections for categories, event guidelines, submission forms, and updates from organizers.",
    role: ["UI/UX Designer", "Information Architect", "Visual Designer"],
    features: [
      {
        img: "../assets/placeholder.png",
        title: "2D Animation",
        description:
          "Highlights student-created 2D animation entries, from traditional frame-by-frame to vector-based storytelling, celebrating foundational techniques and expressive motion.",
      },
      {
        img: "../assets/placeholder.png",
        title: "3D Animation",
        description:
          "Showcases character modeling, rigging, and animated scenes created using 3D software, with contributions from both local and Korean student teams.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Digital Storyboarding",
        description:
          "An interactive section featuring digital storyboards that visualize narrative flow, timing, and camera movements behind each animation concept.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Digital Illustration",
        description:
          "A curated gallery of digital artworks and concept illustrations developed for the event, showcasing creativity, style, and character design from participants.",
      },
    ],
    design_process: "Design Thinking",
    process: [
      {
        id: 1,
        title: "Empathize",
        description:
          "Gathered insights from organizers, participants, and international partners to understand their needs, expectations, and technical constraints.",
      },
      {
        id: 2,
        title: "Define",
        description:
          "Identified major user flows—submission, information access, and browsing—and mapped out necessary content sections and layout priorities.",
      },
      {
        id: 3,
        title: "Ideate",
        description:
          "Sketched out wireframes and user flows, focusing on clarity, visual storytelling, and a creative yet functional interface structure.",
      },
      {
        id: 4,
        title: "Prototype & Test",
        description:
          "Developed prototypes for early feedback from students and faculty. Revised layout and visual style based on usability and branding feedback.",
      },
    ],
    logo: "../assets/landing-page/animation-fest/animation-fest-logo.png",
    img: "../assets/landing-page/animation-fest/animation-fest.png",
  },
  // ACCESS --unfinished
  {
    id: 7,
    title: "ACCESS PH – Interface Redesign for Software Services",
    date: "2024",
    type: "Redesign",
    duration: "1 month",
    team: ["Developer", "UI/UX Designer"],
    keywords: ["Interface Redesign", "User Flow", "Client Collaboration"],
    description:
      "Redesigned the corporate website of a local software development agency to enhance user navigation, layout clarity, and visual consistency. Delivered high-fidelity mockups aligned with modern UI trends and client expectations.",
    challenge:
      "The original website layout was outdated and cluttered, making it difficult for potential clients to understand the company’s services and navigate between sections. There was no visual hierarchy or clear call-to-action, leading to poor user engagement.",
    solution:
      "Worked closely with the developer to revamp the overall site structure. Created a modern layout with clean sections, stronger visual hierarchy, and more intuitive navigation. Streamlined content presentation and added clear CTAs to improve conversions.",
    role: ["UI Designer"],
    features: [
      {
        img: "../assets/placeholder.png",
        title: "Modern Clean Layout",
        description:
          "Introduced a minimalist design system with better spacing, typography, and consistent visual hierarchy to enhance readability and appeal.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Improved Navigation",
        description:
          "Redesigned the site structure and navigation bar to simplify the user journey and ensure better access to core service information.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Client-Aligned Mockups",
        description:
          "Presented interactive mockups for feedback, iterating on key sections to reflect the client’s branding, service strengths, and content priorities.",
      },
    ],
    design_process: "Design Thinking",
    process: [
      {
        id: 1,
        title: "Empathize",
        description:
          "Analyzed the client’s goals and current site pain points through feedback and manual walkthroughs.",
      },
      {
        id: 2,
        title: "Define",
        description:
          "Outlined key usability issues and created a problem statement centered on clarity and navigation improvement.",
      },
      {
        id: 3,
        title: "Ideate",
        description:
          "Sketched layout alternatives and evaluated different visual approaches based on current UI trends and user expectations.",
      },
      {
        id: 4,
        title: "Prototype & Test",
        description:
          "Built high-fidelity mockups in Figma and gathered client feedback for two rounds of revisions before final approval.",
      },
    ],
    logo: "../assets/redesign/access-logo.png",
    img: "../assets/landing-page/access/AccessPH.png",
  },
  // MEMOIRE --unfinished
  {
    id: 2,
    isFinished: true,
    title: "Memoire – Memory Photo & Video Sharing Platform",
    date: "2025",
    type: "Web App",
    duration: "Ongoing",
    team: ["Developer", "UI/UX Designer"],
    role: ["UX Research", "Sketch", "Prototyping", "Design System"],
    keywords: ["Web App", "Social Media", "Memory", "Album", "Maps"],
    description:
      "A digital scrapbook platform that lets users save, organize, and share photo and video memories tied to specific locations. It features a sleek interface with map-based albums, collaborative options, and print-ready layouts for memory preservation.",
    challenge:
      "Users often struggle to preserve and relive their travel and life memories in a way that feels both organized and emotionally engaging. Existing photo-sharing platforms lacked spatial storytelling, collaborative albums, or a focus on meaningful memory curation.",
    solution:
      "Memoire introduces an intuitive experience that organizes memories visually through maps, timelines, and customizable albums. It empowers users to upload, tag, and categorize their content by date and place, while also enabling collaborative album creation with family and friends.",
    features: [
      {
        img: "../assets/placeholder.png",
        title: "Map Integration",
        description:
          "Users can geotag photos and videos, allowing them to view and organize memories based on location. The map interface enhances storytelling and creates a visual journey of their experiences.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Social Media Platform",
        description:
          "Memoire includes lightweight social features such as likes, comments, and collaborative albums, enabling friends and family to contribute to shared memories while keeping the experience personal and focused.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Digital Photo Album",
        description:
          "Users can group content into themed digital albums, sort them by timeline or tags, and generate layouts suitable for viewing or printing—perfect for journaling, keepsakes, or gifts.",
      },
    ],
    design_process: "Agile UX",
    process: [
      {
        id: 1,
        title: "Planning & Research",
        description:
          "Conducted interviews and surveys to understand how users store and revisit personal media. Gathered insights into behaviors around memory sharing and collaboration with loved ones.",
      },
      {
        id: 2,
        title: "Design & Prototyping",
        description:
          "Sketched out low-fidelity wireframes and quickly moved into Figma for prototyping. Prioritized map-based user flows and streamlined album creation based on user journeys.",
      },
      {
        id: 3,
        title: "Collaboration & Handoff",
        description:
          "Worked hand-in-hand with the developer to ensure consistency across components. Held regular check-ins during sprints to adapt UI design based on technical feedback.",
      },
      {
        id: 4,
        title: "Usability Testing & Iteration",
        description:
          "Ran remote usability tests with early adopters and iterated on UI layouts, icon clarity, and navigation patterns to improve usability and emotional resonance.",
      },
    ],
    logo: "../assets/web-app/memoire-cover.png",
    img: "../assets/placeholder.png",
  },
  // FIDO --unfinished
  {
    id: 3,
    isFinished: false,
    title: "Fido – Adoption Platform for Animal Shelters in the Philippines",
    date: "2023",
    type: "Web App",
    duration: "2 months",
    team: ["Developer", "UI/UX Designer"],
    role: ["UI/UX Designer", "User Researcher", "Prototyping"],
    keywords: [
      "Web Design",
      "Animal Welfare",
      "Accessibility",
      "User Research",
    ],
    description:
      "Fido is a responsive web platform designed to connect users with adoptable pets from verified animal shelters across the Philippines. It promotes ethical adoption by making the process accessible, inclusive, and trustworthy. The platform features filterable pet listings, informative shelter profiles, and user-friendly navigation, all designed to streamline the adoption journey. By focusing on accessibility and clarity, Fido empowers users from diverse backgrounds to discover and adopt pets with confidence while helping shelters manage adoptions more efficiently.",
    challenge:
      "Many animal shelters in the Philippines rely on social media to find adopters, making the process inconsistent, hard to search, and inaccessible to users without tech-savvy skills. There was a need for a centralized, user-friendly platform to streamline pet discovery, improve trust, and support shelter operations.",
    solution:
      "We created a mobile-responsive adoption platform with filterable pet listings, detailed shelter profiles, and accessible UI components. The design focused on inclusive language, easy navigation, and WCAG-compliant interfaces to accommodate users from various backgrounds and abilities.",
    features: [
      {
        img: "../assets/placeholder.png",
        title: "Explore Adoptable Pets",
        description:
          "Users can browse a curated list of available pets across shelters with filters for species, age, size, and location. Each listing includes pet details, photos, and adoption readiness status.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Shelter Profiles & Ratings",
        description:
          "Each shelter has a dedicated profile page with contact info, social links, location map, reviews, and a list of currently available animals. This builds trust and transparency for users.",
      },
      {
        img: "../assets/placeholder.png",
        title: "Accessible & Inclusive Design",
        description:
          "From color contrast to button sizing, we ensured the design was WCAG-compliant. Visual hierarchy and clear CTAs guided users through the process regardless of device or ability.",
      },
    ],
    design_process: "Design Thinking",
    process: [
      {
        id: 1,
        title: "Empathize",
        description:
          "Conducted interviews with potential adopters and shelter staff to understand their needs, frustrations with current platforms, and goals for a better adoption experience.",
      },
      {
        id: 2,
        title: "Define",
        description:
          "Synthesized research findings to define key user personas and identified core problems like difficulty finding pets, lack of trust in shelters, and confusing adoption steps.",
      },
      {
        id: 3,
        title: "Ideate",
        description:
          "Brainstormed potential features and solutions including filterable listings, shelter ratings, and guided adoption steps, focusing on improving discoverability and trust.",
      },
      {
        id: 4,
        title: "Prototype",
        description:
          "Created wireframes and interactive prototypes in Figma, designed with accessibility in mind, and focused on clear CTAs, hierarchy, and mobile responsiveness.",
      },
      {
        id: 5,
        title: "Test",
        description:
          "Gathered user feedback from mock adoption scenarios. Iterated on layout, button placement, and flow clarity based on how users interacted with the platform.",
      },
    ],
    logo: "../assets/web-app/fido-logo.png",
    img: "../assets/placeholder.png",
  },
];

export default projects;
