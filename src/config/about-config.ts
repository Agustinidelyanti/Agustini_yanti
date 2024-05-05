export type dataAbout = {
  photoGhaly: {
    style: string;
    src: string;
    alt: string;
  };

  sortBy: {
    education: object;
    certificate: object;
  };

  iconSkills: Array<{
    style: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
  }>;
};

export interface aboutTypes {
  style: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  description: string;
  imgLink: string;
  directLink: string;
  type?: string;
  eduTitle: string;
  major: string;
  skills: string[];
  key: number;
}

export const aboutConfig: dataAbout = {
  photoGhaly: {
    style: "rounded-md w-60 md:w-[900px]",
    src: "https://github.com/Agustinidelyanti/agustini/blob/9df493ce4c55544fd8ac596b881bee7da08df3b4/assets/WhatsApp%20Image%202024-05-04%20at%2011.25.17_b5e5a4db.jpg?raw=true",
    alt: "foto-profil-ghaly",
  },

  sortBy: {
    education: {
      type: "education",
      description: "Here is My Learning Journey",
      bootCamp: [
        {
          eduTitle: "STTI TANJUNG PINANG",
          major: "React and React Native for Frontend Developer",
          style: "pl-3 w-[180px]",
          skills: [
            "React.js",
            "React Native",
            "Next.js",
            "Redux",
            "Git",
            "TypeScript",
            "JavaScript",
            "Linux Command Line",
            "JSX",
            "ES6",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Atomic Design",
            "Chakra UI",
            "DaisyUI",
            "Deploy",
            "Consuming API",
            "+ 5",
          ],
          imgLink:
            "https://raw.githubusercontent.com/Agustinidelyanti/agustini/main/assets/Logo-STTI-Tanjungpinang.png",
          directLink: "",
        },
        // {
        //   eduTitle: "STT INDONESIA",
        //   major: "Frontend Engineer",
        //   style: "py-4 pl-4 max-w-[100px]",
        //   skills: [
        //     "React.js",
        //     "React Router DOM",
        //     "Redux",
        //     "JavaScript",
        //     "Git",
        //     "ES6",
        //     "Linux Command Line",
        //     "JSX",
        //     "HTML",
        //     "CSS",
        //     "Tailwind CSS",
        //     "JS-DOM",
        //     "Chakra UI",
        //     "Deployment",
        //     "Browser API",
        //     "Paas",
        //     "Consuming API",
        //     "+ 3",
        //   ],
        //   imgLink:
        //     "https://ibb.co/hg4n75Y",
        //   directLink: "h",
        // },
        // {
        //   eduTitle: "IPB University",
        //   major: "Major, Physics",
        //   style: "py-4 pl-4 max-w-[100px]",
        //   skills: [
        //     "Classical physics",
        //     "Modern physics",
        //     "Quantum physics",
        //     "Thermodynamics",
        //     "Electromagnetism",
        //     "Wave",
        //     "Mechanics",
        //     "Optics",
        //     "Electricity",
        //     "Particle physics",
        //     "Fluid mechanics",
        //     "+ 20",
        //   ],
        //   imgLink:
        //     "https://res.cloudinary.com/druckyjuu/image/upload/v1690187551/Projects/IPB_dg5ioj.png",
        //   directLink: "",
        // },
        // {
        //   eduTitle: "IPB University",
        //   major: "Minor, Information System (Computer Science)",
        //   style: "py-4 pl-4 max-w-[100px]",
        //   skills: [
        //     "Algoritms and Programming",
        //     "Database Systems",
        //     "Software Engineering",
        //     "Human and Computer Interaction",
        //     "Information System",
        //     "+ 10",
        //   ],
        //   imgLink:
        //     "https://res.cloudinary.com/druckyjuu/image/upload/v1690187551/Projects/IPB_dg5ioj.png",
        //   directLink: "",
        // },
      ],
    },

    ////SERTIFIKAT =============================================================================================
    certificate: {
      type: "certificate",
      description: "Here is My Licenses & Certifications",
      certificates: [
        {
          title: "Webinar Internasional Airlangga",
          description: "Recovery of post pandemic sosio-economic aspect towards SDGs 2030",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti1.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti1.png?raw=true",
        },
        {
          title: "Seminar",
          description: "Frontend Engineer",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti2.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti2.png?raw=true",
        },
        {
          title: "Seminar",
          description: "Coursera",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti3.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti3.png?raw=true",
        },
        {
          title: "Adobe Illustrator",
          description: "Coursera",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti4.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti4.png?raw=true",
        },
        {
          title: "React.js and React Native Styling Components",
          description: "Hacktiv8 Indonesia",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti5.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti5.png?raw=true",
        },
        {
          title: "ECMAScript 2015 (ES6)",
          description: "Hacktiv8 Indonesia",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti6.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti6.png?raw=true",
        },
        {
          title: "Software Engineering",
          description: "Ruangguru",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti7.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti7.png?raw=true",
        },
        {
          title: "Programming with JavaScript",
          description: "Ruangguru",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti8.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti8.png?raw=true",
        },
        {
          title: "Front-End Web Development With HTML & CSS",
          description: "Ruangguru",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti9.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/serti9.png?raw=true",
        },
        {
          title: "Global AI Bootcamp 2018",
          description: "Dicoding",
          imgLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/seri9.png?raw=true",
          directLink:
            "https://github.com/Agustinidelyanti/agustini/blob/main/assets/seri9.png?raw=true",
        },
        // {
        //   title: "___________________________",
        //   description: "Click button below for see more",
        //   imgLink:
        //     "https://res.cloudinary.com/druckyjuu/image/upload/v1690600078/Projects/See-more_h0fw8i.svg",
        //   directLink:
        //     "https://drive.google.com/drive/folders/1fYkBwt5mWVrWSvi8DP-unBbv9cqSaJWM?usp=sharing",
        // },
      ],
    },
  },

  iconSkills: [
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/fluency/48/000000/node-js.png",
      width: 50,
      height: 57,
      alt: "nodejs",
      title: "Node.js",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/color/48/null/git.png",
      width: 55,
      height: 57,
      alt: "git",
      title: "Git",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/color/48/null/python--v1.png",
      width: 55,
      height: 57,
      alt: "python",
      title: "Python",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://img.icons8.com/color/48/null/javascript--v1.png",
      width: 55,
      height: 57,
      alt: "javascript",
      title: "Javascript",
    },

    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/typeScript.svg",
      width: 42,
      height: 52,
      alt: "typescript",
      title: "typescript",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/react.svg",
      width: 47,
      height: 45,
      alt: "reactjs",
      title: "reactjs",
    },
    {
      style: "w-10 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/tailwind.svg",
      width: 50,
      height: 50,
      alt: "tailwindcss",
      title: "tailwindcss",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/framer.svg",
      width: 40,
      height: 40,
      alt: "framer",
      title: "framer",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://user-images.githubusercontent.com/60167960/226171904-03fca69e-dd4b-4e05-8276-dd4396f62907.svg",
      width: 45,
      height: 45,
      alt: "nextjs",
      title: "nextjs",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/vsc.svg",
      width: 45,
      height: 45,
      alt: "VSCode",
      title: "VSCode",
    },
    {
      style: "w-8 md:w-auto",
      src: "https://raw.githubusercontent.com/ghaly09/ghaly09/main/assets/figma.svg",
      width: 45,
      height: 45,
      alt: "figma",
      title: "figma",
    },
  ],
};
