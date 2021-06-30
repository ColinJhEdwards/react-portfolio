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
      title: "Sweep",
      Description:
        "Sweep is an online database of information related to movies. Users are able to browse a collection of movies including popular, top rated, and movies currently playing in theaters.",
      longDesc:
        "Sweep is an online database of information related to movies. Users are able to browse a collection of movies including popular, top rated, and movies currently playing in theaters. Users are also able to search for specific movies and view a variety of information such as the movies trailer, release date, description, actors, and more.",
      code: "React",
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
      id: 2,
      title: "Socks",
      Description:
        "Socks is a web-based application that allows users to save and view their current stock units.",
      longDesc:
        "Socks is a web-based application that allows a user to sign into their account, log their current stock units and cryptocurrency shares. Socks is a great choice for new and experienced investors alike. With an auto-populating, personalized dashboard showing infographics depicting the current value of your personalized market standings, this app brings simple viewings to your ever-so complicated investment portfolio. With a combination of rise in diversity of the stock trading market and an overall leaning preference to keep track of financial data in an easy-to-use application on your smart phone, Socks has never come at a better time. At Socks, our promise to raise the bar on UI will give anyone the opportunity to understand where their investments land at just one glance. Create an account and start logging to find out for yourself!",
      code: "React",
      deploy: "https://socks-stocks.herokuapp.com/",
      repo: "https://github.com/ashley-ag/Socks",
      img: [socksHome, socksMarket, socksStocks],
      mobileImg: [socksMobileHome, socksMobileMarket],
    },
    {
      id: 3,
      title: "Lee's Reptile Emporium",
      Description:
        "Lee's Reptile Emporium is your one stop online shop for new pets ranging from a one inch dart drog to a 14 foot python and everything in between.",
      longDesc:
        "Lee's Reptile Emporium is your one stop online shop for new pets ranging from a 14 foot python to a 1 inch dart frog and everything in between. This web-based app will allow the user to view their future scaly family member, add animals to their cart and learn more about all of the amazing ways to incorporate them into your life.",
      code: "JavaScript",
      deploy: "https://lees-reptile-emporium.herokuapp.com/",
      repo: "https://github.com/mlcohan/LeesReptileEmporium",
      img: [leeHome, leeBrowse, leeCollection, leeReviews],
      mobileImg: [leeMobileHome, leeMobileFrog],
    },
    {
      id: 4,
      title: "ToDo For Me",
      Description:
        "A simple todo list for creating a list of items you must complete with functioning local storage",
      longDesc:
        "A simple todo list for creating a list of items you must complete with functioning local storage",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/todoforme/",
      repo: "https://github.com/ColinJhEdwards/todoforme",
      img: [todoHome],
      mobileImg: [todoMobile],
    },
    {
      id: 5,
      title: "Mini Projects",
      Description:
        "I love working with HTML, CSS, and Javascript so I created a webpage for demonstrating cool tricks you can do with these languages.",
      longDesc:
        "I love working with HTML, CSS, and Javascript so I created a webpage for demonstrating cool tricks you can do with these languages.",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/front-end-demos/",
      repo: "https://github.com/ColinJhEdwards/front-end-demos",
      img: [mini3D, miniSVG, miniSlide, miniInput],
      mobileImg: [],
    },
    {
      id: 6,
      title: "Lyricity",
      Description:
        "This application is a web-based app that will allow a user to enter a song name and artist to search for the lyrics of the song, using music based APIs.",
      longDesc:
        "This application is a web-based app that will allow a user to enter a song name and artist to search for the lyrics of the song, using music based APIs.",
      code: "JavaScript",
      deploy: "https://mlcohan.github.io/team9/",
      repo: "https://github.com/mlcohan/Lyricity",
      img: [lyricity],
      mobileImg: [],
    },
    {
      id: 7,
      title: "Weather For Me",
      Description:
        "A weather dashboard that allows users to search for specific cities and display the current weather along with a 5-day forecast.",
      longDesc:
        "A weather dashboard that allows users to search for specific cities and display the current weather along with a 5-day forecast.",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/weatherForMe/",
      repo: "https://github.com/ColinJhEdwards/weatherForMe",
      img: [weather],
      mobileImg: [],
    },
  ];
};
