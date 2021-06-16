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
//Front end Demos
import mini3D from "../Images/projectImgs/mini3D.png";
import miniSVG from "../Images/projectImgs/miniSVG.png";
import miniSlide from "../Images/projectImgs/miniSlide.png";
import miniInput from "../Images/projectImgs/miniInput.png";
//Lyricity
import lyricity from "../Images/projectImgs/lyricityHome.png";
//Weather for me
import weather from "../Images/projectImgs/weatherHome.png";

export const ProjectData = () => {
  return [
    {
      id: 1,
      title: "Socks",
      Description:
        "Socks is a web-based application that allows users to save and view their current stock units.",
      code: "React",
      deploy: "https://socks-stocks.herokuapp.com/",
      repo: "https://github.com/ashley-ag/Socks",
      img: [
        socksHome,
        socksMarket,
        socksStocks,
        socksMobileHome,
        socksMobileMarket,
      ],
    },
    {
      id: 2,
      title: "Lee's Reptile Emporium",
      Description:
        "Lee's Reptile Emporium is your one stop online shop for new pets ranging from a one inch dart drog to a 14 foot python and everything in between.",
      code: "JavaScript",
      deploy: "https://lees-reptile-emporium.herokuapp.com/",
      repo: "https://github.com/mlcohan/LeesReptileEmporium",
      img: [
        leeHome,
        leeBrowse,
        leeCollection,
        leeReviews,
        leeMobileHome,
        leeMobileFrog,
      ],
    },
    {
      id: 3,
      title: "ToDo For Me",
      Description:
        "A simple todo list for creating a list of items you must comeplete with functioning local storage",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/todoforme/",
      repo: "https://github.com/ColinJhEdwards/todoforme",
      img: [todoHome, todoMobile],
    },
    {
      id: 4,
      title: "Front End Demos",
      Description:
        "I love working with HTML, CSS, and Javascript so I created a webpage for demonstrating cool tricks you can do with these languages.",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/front-end-demos/",
      repo: "https://github.com/ColinJhEdwards/front-end-demos",
      img: [mini3D, miniSVG, miniSlide, miniInput],
    },
    {
      id: 5,
      title: "Lyricity",
      Description:
        "This application is a web-based app that will allow a user to enter a song name and artist to search for the lyrics of the song, using music based APIs.",
      code: "JavaScript",
      deploy: "https://mlcohan.github.io/team9/",
      repo: "https://github.com/mlcohan/Lyricity",
      img: [lyricity],
    },
    {
      id: 6,
      title: "Weather For Me",
      Description:
        "A weather dashboard that allows users to search for specific cities and display the current weather along with a 5-day forecast.",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/weatherForMe/",
      repo: "https://github.com/ColinJhEdwards/weatherForMe",
      img: [weather],
    },
  ];
};
