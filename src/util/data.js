// Sweep images
import sweepHome from "../Images/projectImgs/Sweep/sweepHome.png";

// Lee's reptile emporium images
import leeHome from "../Images/projectImgs/LeeReptile/leeHome.png";

//Socks Images
import socksHome from "../Images/projectImgs/Socks/socksHome.png";

//Todo for me images
import todoHome from "../Images/projectImgs/Todo/todoHome.png";

//photographer portfoilo
import photoHome from "../Images/projectImgs/photographer/home.png";

//Aperture
import aperHome from "../Images/projectImgs/Aperture/aperHome.png";

//Murphy's images
import home from "../Images/projectImgs/Murphy/home.png";

// Inca images
import incaHome from "../Images/projectImgs/Inca/home.png";

// Yumtum Images
import yumHome from "../Images/projectImgs/yumtum/yumHome.png";

export const ProjectData = () => {
  return [
    {
      id: 1,
      title: "Yumtum",
      Description:
        "Yumtum is a web application full of food recipes that users can browse through, including vegetarian and vegan options. Users are also able to search for recipes.",
      longDesc:
        "Yumtum, short for Yummy in my Tummy, has the tastiest of recipes users can browse through. Users are able to browse a collection of recipes including vegetarian, vegan, and multiple cuisines such as American, Chinese, French, and more! Users are also able to search for specific recipes and view detailed instructions for selected recipes.",
      code: [
        "React ",
        "- TypeScript ",
        "- React Router Dom ",
        "- framer motion ",
        "- styled components",
      ],
      deploy: "https://colinjhedwards.github.io/yumtum/#/",
      repo: "https://github.com/ColinJhEdwards/yumtum",
      img: [yumHome],
    },
    {
      id: 2,
      title: "Sweep",
      Description:
        "Sweep is an online database of information related to movies. Users are able to browse a collection of movies including popular, top rated, and movies currently playing in theaters.",
      longDesc:
        "Sweep is an online database of information related to movies. Users are able to browse a collection of movies including popular, top rated, and movies currently playing in theaters. Users are also able to search for specific movies and view a variety of information such as the movies trailer, release date, description, actors, and more.",
      code: [
        "React ",
        "- redux ",
        "- axios ",
        "- bootstrap ",
        "- lazy load image",
        "- styled components",
      ],
      deploy: "https://colinjhedwards.github.io/Sweep/",
      repo: "https://github.com/ColinJhEdwards/Sweep",
      img: [sweepHome],
    },
    {
      id: 3,
      title: "Inca Wheels",
      Description:
        "Inca Wheels is an indigenous owned outdoor recreational vehicle rental company based in the Pacific Northwest. Their mission is to bring affordable access to the wonderous outdoors the Pacific Northwest has to offer for generations to come.",
      longDesc:
        "Inca Wheels is an indigenous owned outdoor recreational vehicle rental company based in the Pacific Northwest. Started as a way to help raise funds for the nonprofit Ruta Verde that focuses on Sustainable Development projects including the building of Community Forests in North America and creating sustainable food solutions in Peru. The Inca were honorable people that valued their surrounding environments at the core of their belief systems, and we hope to honor this ideology by creating a business that focuses on caring for the planet, not just profits.",
      code: [
        "React ",
        "- Google Maps API ",
        "- bootstrap ",
        "- framer motion ",
        "- styled components",
      ],
      deploy: "https://www.incawheels.com/",
      repo: "https://github.com/ColinJhEdwards/incawheels",
      img: [incaHome],
    },
    {
      id: 4,
      title: "Murphy's Music School",
      Description:
        "Murphy's Music School's mission is to bring their community together through the joys of music by providing a quality music education to students of all ages and skill levels.",
      longDesc:
        "Murphy's Music School's mission is to bring their community together through the joys of music by providing a quality music education to students of all ages and skill levels. The school has paved a new pathway in the industry of music education by offering lessons from experienced musicians and incorporating a performance-based education approach. Meaning the curriculum focuses on learning music concepts and applying them in a live performance.",
      code: [
        "React ",
        "- material ui ",
        "- bootstrap ",
        "- framer motion ",
        "- styled components",
      ],
      deploy: "https://colinjhedwards.github.io/murphy-music-school/",
      repo: "https://github.com/ColinJhEdwards/murphy-music-school",
      img: [home],
    },
  ];
};

export const minorProjectData = () => {
  return [
    {
      id: 1,
      title: "Socks",
      Description:
        "Socks is a web-based application that allows users to save and view their current stock units.",
      longDesc:
        "Socks is a web-based application that allows a user to sign into their account, log their current stock units and cryptocurrency shares. Socks is a great choice for new and experienced investors alike. With an auto-populating, personalized dashboard showing infographics depicting the current value of your personalized market standings, this app brings simple viewings to your ever-so complicated investment portfolio. With a combination of rise in diversity of the stock trading market and an overall leaning preference to keep track of financial data in an easy-to-use application on your smart phone, Socks has never come at a better time. At Socks, our promise to raise the bar on UI will give anyone the opportunity to understand where their investments land at just one glance. Create an account and start logging to find out for yourself!",
      code: [
        "React ",
        "- Firebase ",
        "- MongoDB ",
        "- styled components ",
        "- bootstrap ",
      ],
      deploy: "https://socks-stocks.herokuapp.com/",
      repo: "https://github.com/ashley-ag/Socks",
      img: [socksHome],
    },
    {
      id: 2,
      title: "Lee's Reptile Emporium",
      Description:
        "Lee's Reptile Emporium is your one stop online shop for new reptilian pets.",

      code: ["JavaScript", " - MySQL ", "- express", "- handlebars"],
      deploy: "https://lees-reptile-emporium.herokuapp.com/",
      repo: "https://github.com/mlcohan/LeesReptileEmporium",
      img: [leeHome],
    },
    {
      id: 3,
      title: "ToDo For Me",
      Description:
        "A simple todo list for creating a list of items you must complete with functioning local storage",
      longDesc:
        "A simple todo list for creating a list of items you must complete with functioning local storage",
      code: ["JavaScript"],
      deploy: "https://colinjhedwards.github.io/todoforme/",
      repo: "https://github.com/ColinJhEdwards/todoforme",
      img: [todoHome],
    },

    {
      id: 4,
      title: "Photographer Portfolio",
      Description:
        "A basic template for a professional photographers personal portfolio.",
      longDesc:
        "A basic template for a professional photographers personal portfolio.",
      code: ["JavaScript"],
      deploy: "https://colinjhedwards.github.io/photographer-portfolio/",
      repo: "https://github.com/ColinJhEdwards/photographer-portfolio",
      img: [photoHome],
    },
    {
      id: 5,
      title: "Aperture",
      Description:
        "Aperture provides free stock photos that users can search through and use for personal projects, allowing them to create stunning designs and projects.",
      longDesc:
        "Aperture provides free stock photos that users can search through and use for personal projects, allowing them to create stunning designs and projects. All photos are pulled from pexels api which supplies hundreds of thousands free stock photos. Vists Pexels website to contribue your photos!",
      code: ["JavaScript"],
      deploy: "https://colinjhedwards.github.io/Aperture/",
      repo: "https://github.com/ColinJhEdwards/Aperture",
      img: [aperHome],
    },
  ];
};
