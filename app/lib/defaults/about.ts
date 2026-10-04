/**
 * DEFAULT CONTENT for the About page.
 * Shown whenever the backend / database is unreachable or has no saved data.
 * Keep in sync with backend/src/pages/about.defaults.js
 */
export const defaultAbout = {
  seo: {
    title: "",
    description: "",
  },

  hero: {
    title: "I’m Mostafa Naguib",
    subtitle: "",
    desktopImage: "/assets/aboutPage.jpg",
    mobileImage: "/assets/aboutPage-mobile.jpg",
    overlayColor: "#000000",
    overlayOpacity: 0.57,
  },

  about: {
    visible: true,
    sectionBg: "#FFFFFF",
    cardBg: "#FFFFFF",
    heading: "About Me",
    image: "/assets/homeAbout.jpeg",
    imageAlt: "about image",
    headline: "Empowering Engineers. Building Leaders. Driving Professional Growth.",
    paragraphs: [
      {
        text: "With over 10 years of experience in business development and entrepreneurship, I combine engineering expertise with practical business knowledge to help engineers develop the skills they need to lead businesses and advance their professional careers.",
      },
      {
        text: "Through specialized courses and practical training, I help engineers understand how to lead teams, manage businesses, identify new opportunities, make effective business decisions, and build the mindset needed for long-term professional success.",
      },
      {
        text: "My mission is to bridge the gap between engineering expertise and business leadership — empowering engineers to become confident leaders, build successful businesses, and achieve sustainable professional growth.",
      },
    ],
  },

  history: {
    visible: true,
  },
};

export type AboutPageContent = typeof defaultAbout;
