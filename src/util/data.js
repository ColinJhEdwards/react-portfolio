// Sweep images
import sweepHome from "../Images/projectImgs/sweepHome.png";
import sweepHomeDetail from "../Images/projectImgs/sweepHomeDetail.png";
import sweepHomeDetail2 from "../Images/projectImgs/sweepHomeDetail2.png";
import sweepSearch from "../Images/projectImgs/sweepSearch.png";
import sweepSearch2 from "../Images/projectImgs/sweepSearch2.png";
import sweepSearchFail from "../Images/projectImgs/sweepSearchFail.png";
import sweepMobile1 from "../Images/projectImgs/sweepMobile1.png";
import sweepMobile2 from "../Images/projectImgs/sweepMobile2.png";
// Lee's reptile emporium images
import leeBrowse from "../Images/projectImgs/leeBrowse.png";
import leeCollection from "../Images/projectImgs/leeCollection.png";
import leeHome from "../Images/projectImgs/leeHome.png";
import leeMobileFrog from "../Images/projectImgs/leeMobileFrog.png";
import leeMobileHome from "../Images/projectImgs/leeMobileHome.png";
import leeReviews from "../Images/projectImgs/leeReviews.png";
//Socks Images
import socksHome from "../Images/projectImgs/socksHome.png";
import socksMarket from "../Images/projectImgs/socksMarket.png";
import socksStocks from "../Images/projectImgs/socksStocks.png";
import socksMobileHome from "../Images/projectImgs/socksMobileHome.png";
import socksMobileMarket from "../Images/projectImgs/socksMobileMarket.png";
//Todo for me images
import todoHome from "../Images/projectImgs/todoHome.png";
import todoMobile from "../Images/projectImgs/todoMobile.png";
//photographer portfoilo
import photoHome from "../Images/projectImgs/photographer/home.png";
import photoAbout from "../Images/projectImgs/photographer/about.png";
import photoGallery from "../Images/projectImgs/photographer/gallery.png";
import photoContact from "../Images/projectImgs/photographer/contact.png";
import photoMobHome from "../Images/projectImgs/photographer/mobileHome.png";
import photoMobAbout from "../Images/projectImgs/photographer/mobileAbout.png";
import photoMobGallery from "../Images/projectImgs/photographer/mobileGallery.png";
import photoMobContact from "../Images/projectImgs/photographer/mobileContact.png";
//Aperture
import aperHome from "../Images/projectImgs/aperHome.png";
import aperSearch from "../Images/projectImgs/aperSearch.png";
import aperMobile from "../Images/projectImgs/aperMobile.png";
//Murphy's images
import home from "../Images/projectImgs/Murphy/home.png";
import home1 from "../Images/projectImgs/Murphy/homeDetail1.png";
import home2 from "../Images/projectImgs/Murphy/homeDetail2.png";
import courses from "../Images/projectImgs/Murphy/courses.png";
import teachers from "../Images/projectImgs/Murphy/teachers.png";
import contact1 from "../Images/projectImgs/Murphy/contact1.png";
import contact2 from "../Images/projectImgs/Murphy/contact2.png";
import mobileHome from "../Images/projectImgs/Murphy/mobileHome.png";
import mobileHome2 from "../Images/projectImgs/Murphy/mobileHome2.png";
import mobileCourses from "../Images/projectImgs/Murphy/mobileCourses.png";
import mobileCourseDetail from "../Images/projectImgs/Murphy/mobileCourseDetail.png";
import mobileTeachers from "../Images/projectImgs/Murphy/mobileTeachers.png";
// Inca images
import incaHome from "../Images/projectImgs/Inca/home.png";
import incaVan from "../Images/projectImgs/Inca/theVan.png";
import incaDest from "../Images/projectImgs/Inca/destinations.png";
import incaMobHome from "../Images/projectImgs/Inca/mobileHome.png";
import incaMobileVan from "../Images/projectImgs/Inca/mobileVan.png";
import incaMobileDest from "../Images/projectImgs/Inca/mobileDestination.png";

export const ProjectData = () => {
  return [
    {
      id: 1,
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
      img: [incaHome, incaVan, incaDest],
      mobileImg: [incaMobHome, incaMobileVan, incaMobileDest],
    },
    {
      id: 2,
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
      deploy: "https://murphys-music-school.herokuapp.com/",
      repo: "https://github.com/ColinJhEdwards/murphy-music-school",
      img: [home, home1, home2, courses, teachers, contact1, contact2],
      mobileImg: [
        mobileHome,
        mobileHome2,
        mobileCourses,
        mobileCourseDetail,
        mobileTeachers,
      ],
    },
    {
      id: 3,
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
      deploy: "https://sweep-movies.herokuapp.com/",
      repo: "https://github.com/ColinJhEdwards/Sweep",
      img: [
        sweepHome,
        sweepHomeDetail,
        sweepHomeDetail2,
        sweepSearch,
        sweepSearch2,
        sweepSearchFail,
      ],
      mobileImg: [sweepMobile1, sweepMobile2],
    },
    {
      id: 4,
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
      img: [socksHome, socksMarket, socksStocks],
      mobileImg: [socksMobileHome, socksMobileMarket],
    },
    {
      id: 5,
      title: "Lee's Reptile Emporium",
      Description:
        "Lee's Reptile Emporium is your one stop online shop for new pets ranging from a one inch dart drog to a 14 foot python and everything in between.",
      longDesc:
        "Lee's Reptile Emporium is your one stop online shop for new pets ranging from a 14 foot python to a 1 inch dart frog and everything in between. This web-based app will allow the user to view their future scaly family member, add animals to their cart and learn more about all of the amazing ways to incorporate them into your life.",
      code: ["JavaScript"],
      deploy: "https://lees-reptile-emporium.herokuapp.com/",
      repo: "https://github.com/mlcohan/LeesReptileEmporium",
      img: [leeHome, leeBrowse, leeCollection, leeReviews],
      mobileImg: [leeMobileHome, leeMobileFrog],
    },
    {
      id: 6,
      title: "ToDo For Me",
      Description:
        "A simple todo list for creating a list of items you must complete with functioning local storage",
      longDesc:
        "A simple todo list for creating a list of items you must complete with functioning local storage",
      code: ["JavaScript"],
      deploy: "https://colinjhedwards.github.io/todoforme/",
      repo: "https://github.com/ColinJhEdwards/todoforme",
      img: [todoHome],
      mobileImg: [todoMobile],
    },
    {
      id: 7,
      title: "Photographer Portfolio",
      Description:
        "A basic template for a professional photographers personal portfolio.",
      longDesc:
        "A basic template for a professional photographers personal portfolio.",
      code: ["JavaScript"],
      deploy: "https://colinjhedwards.github.io/photographer-portfolio/",
      repo: "https://github.com/ColinJhEdwards/photographer-portfolio",
      img: [photoHome, photoAbout, photoGallery, photoContact],
      mobileImg: [
        photoMobHome,
        photoMobAbout,
        photoMobGallery,
        photoMobContact,
      ],
    },
    {
      id: 8,
      title: "Aperture",
      Description:
        "Aperture provides free stock photos that users can search through and use for personal projects, allowing them to create stunning designs and projects.",
      longDesc:
        "Aperture provides free stock photos that users can search through and use for personal projects, allowing them to create stunning designs and projects. All photos are pulled from pexels api which supplies hundreds of thousands free stock photos. Vists Pexels website to contribue your photos!",
      code: ["JavaScript"],
      deploy: "https://colinjhedwards.github.io/Aperture/",
      repo: "https://github.com/ColinJhEdwards/Aperture",
      img: [aperHome, aperSearch],
      mobileImg: [aperMobile],
    },
  ];
};
