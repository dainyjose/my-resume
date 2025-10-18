export const resumeData = {
  profile: {
    name: "Dainy Jose",
    occupation: "React Native Mobile Application Developer",
    location: "Bangalore, India",
    email: "dainyjose.mary@gmail.com",
    telephone: "+91 8075919623",
    image: "/src/assets/dainy_jose.jpg",
  },
  aboutMe: {
    label: "Profile",
    description:
      "React Native & Full-Stack Mobile Application Developer with 3+ years of experience building cross-platform apps using React Native (TypeScript, Expo Bare Workflow). Experienced in integrating APIs, payment gateways, real-time tracking, and app store deployments. Passionate about building scalable, high-performance mobile solutions",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    categories: {
      "Frontend & Mobile": [
        "React / React Native",
        "TypeScript",
        "JavaScript",
        "Redux",
        "HTML",
        "CSS",
        "Expo",
        "Vite",
      ],
      Backend: ["Node.js", "Express.js", "Python", "Firebase", "Cloudinary"],
      Database: ["MongoDB", "MySQL / SQL", "XAMPP"],
      Testing: ["Jest"],
      "Tools & Collaboration": [
        "Git / Git Bash",
        "npm",
        "Bun",
        "Bitbucket",
        "Postman",
        "Jira",
        "Figma",
        "Docker",
        "VS Code",
        "Android Studio",
        "Xcode",
      ],
      "Deployment & Hosting": ["Heroku", "Netlify", "Cloudflare", "cPanel"],
      "Platforms & OS": ["Android", "iOS", "Windows", "macOS"],
      "Deployment Stores": ["Play Store Deployment", "App Store Deployment"],
    },
    softSkills: [
      "Strong analytical and debugging skills",
      "Effective cross-functional communication",
      "Agile methodology experience",
      "Excellent time and task management",
    ],
  },

  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Visit Dainy Jose's LinkedIn profile",
        name: "linkedin",
        url: "https://www.linkedin.com/in/dainyjose/",
        className: "bxl-linkedin-square",
      },
      {
        label: "Visit Dainy Jose's profile on GitHub",
        name: "github",
        url: "https://github.com/dainyjose",
        className: "bxl-github",
      },
      {
        label: "Visit Dainy Jose's portfolio",
        name: "portfolio",
        url: "https://dainyjose.github.io/my-portfolio/",
        className: "bx-bookmark-heart",
      },
      {
        label: "Visit Dainy Jose's blogs on Dev.to",
        name: "dev",
        url: "https://dev.to/dainyjose",
        className: "bxl-dev-to",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "React Native Mobile Application Developer",
        period: "13/03/2024 - Present",
        company: "Soverg Private Limited",
        description: [
          "Integrated social authentication using Google, Facebook, and Apple Sign-In for seamless user onboarding.",

          "Implemented location-based features (geofencing, real-time tracking, personalized services) using React Native location modules.",

          "Integrated Razorpay and PayU payment gateways, handling secure transactions, webhooks, and error management.",

          "Designed and deployed real-time push notifications using Firebase Cloud Messaging (FCM) to enhance user engagement.",

          "Developed Redux and Context API-based state management for scalable and maintainable code.",

          "Implemented Firebase Crashlytics and Analytics for monitoring, debugging, and improving user experience.",

          "Wrote unit tests with Jest and React Native Testing Library to ensure code reliability.",

          "Manually deployed apps to Google Play Store and Apple App Store, managing builds, certificates, and store metadata, while maintaining version control with Git and Bitbucket.",

          "Collaborated with cross-functional teams using Trello, Jira, and Figma to translate designs and user stories into working applications.",
        ],
      },
      {
        title: "React Native Mobile Application Developer",
        period: "01/11/2022 - 29/02/2024",
        company: "Doctor(s) Note Private Limited",
        description: [
          "Developed React Native app and website from scratch using Expo, ReactJS, NodeJS, ExpressJS.",

          "Designed MongoDB database schemas and implemented secure JWT authentication.",

          "Integrated third-party APIs (SERP API) and Cloudinary for media handling.",

          "Tested performance across devices, ensured responsiveness and compatibility.",

          "Deployed applications to Heroku, Netlify, and configured hosting environments.",

          "Collaborated with cross-functional team for product-market fit.",
        ],
      },
      {
        title: "Developer Intern",
        period: "04/04/2022 - 03/10/2022",
        company: "Evenion Technologies Private Limited",
        description: [
          "Developed login and blog modules using ReactJS, HTML, CSS, and JavaScript.",

          "Implemented MySQL queries and optimized pages for speed, scalability, and security.",

          "Learned version control with Git & Subversion.",
        ],
      },
    ],
    academic: [
      {
        career: "Master of Computer Applications (MCA)",
        date: "2022",
        institution: "Jyoti Nivas Autonomous College, Bangalore",
        percentage: "66.72% ",
      },
      {
        career: "BSc. Mathematics",
        date: "2020",
        institution: "Providence Women's College, Calicut, Kerala ",
        percentage: "64.7% ",
      },
    ],
    projects: [
      {
        id: 1,
        title: "RN Expo Bare Template",
        description:
          "A boilerplate project setup with Expo bare workflow and TypeScript, including configured navigation, Redux, and environment management for faster project initialization.",
        technologies:
          "React Native | Expo | TypeScript | Redux | React Navigation",
        github: "https://github.com/dainyjose/rn-expo-typescript-bare-template",
      },
      {
        id: 2,
        title: "Location Sharing Server",
        description:
          "Backend service for real-time location sharing, supporting socket communication and REST APIs for seamless integration with mobile apps.",
        technologies: "Node.js | Express.js | Socket.io | MySQL | REST API",
        github: "https://github.com/dainyjose/Location-sharing-server-side",
      },
      {
        id: 3,
        title: "FCM Push Server",
        description:
          "A Node.js server setup for sending push notifications to mobile apps using Firebase Cloud Messaging, including topic-based and direct messaging support.",
        technologies: "Node.js | Firebase Cloud Messaging | Express.js",
        github: "https://github.com/dainyjose/firebase-cloud-messaging-node",
      },
      {
        id: 4,
        title: "Face Detection App",
        description:
          "A React Native proof-of-concept app for detecting faces in real-time using camera integration and ML-based detection libraries.",
        technologies: "React Native | Vision Camera | ML Kit | TypeScript",
        github: "https://github.com/dainyjose/face-detection-app",
      },
      {
        id: 5,
        title: "Tidio Chatbot Support",
        description:
          "Integration of Tidio chatbot into a React app, enabling automated support and real-time chat with users for better engagement.",
        technologies: "React Native | TypeScript | Tidio Chatbot",
        github: "https://github.com/dainyjose/tidio_chatbot_support",
      },
      {
        id: 6,
        title: "Search Using Fuse.js",
        description:
          "Implementation of fuzzy search functionality using Fuse.js to provide fast and flexible search across datasets in a React application.",
        technologies: "React Native | TypeScript | Fuse.js",
        github: "https://github.com/dainyjose/search_using_fuse_js",
      },
    ],
  },
  hobbies: ["Craft Making", "Coding", "Pet Keeping", "Gardening"],
  devBlogs: [
    {
      title: "Google Play’s 16KB Page Size Limit Explained",
      description:
        "Optimizing your Android builds for better performance and compliance with Play Store rules.",
      url: "https://dev.to/dainyjose/understanding-google-plays-16kb-page-size-requirement-for-android-apps-23k0",
    },
    {
      title: "Life of a React Native Developer",
      description:
        "Sharing lessons learned while building and publishing apps from scratch.",
      url: "https://dev.to/dainyjose/the-life-of-a-react-native-developer-from-code-to-app-store-24l7",
    },
    {
      title: "Push Notifications with Firebase + Notifee",
      description:
        "Step-by-step setup for implementing push notifications in React Native.",
      url: "https://dev.to/dainyjose/implementing-push-notifications-in-react-native-using-firebase-and-notifee-4a6p",
    },
  ],
};
