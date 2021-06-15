import leeImg from "../Images/Preview.png";

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
    },
    {
      id: 2,
      title: "Lee's Reptile Emporium",
      Description:
        "Lee's Reptile Emporium is your one stop online shop for new pets ranging from a one inch dart drog to a 14 foot python and everything in between.",
      code: "JavaScript",
      deploy: "https://lees-reptile-emporium.herokuapp.com/",
      repo: "https://github.com/mlcohan/LeesReptileEmporium",
      img: leeImg,
    },
    {
      id: 3,
      title: "ToDo For Me",
      Description:
        "A simple todo list for creating a list of items you must comeplete with functioning local storage",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/todoforme/",
      repo: "https://github.com/ColinJhEdwards/todoforme",
    },
    {
      id: 4,
      title: "Front End Demos",
      Description:
        "I love working with HTML, CSS, and Javascript so I created a webpage for demonstrating cool tricks you can do with these languages.",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/front-end-demos/",
      repo: "https://github.com/ColinJhEdwards/front-end-demos",
    },
    {
      id: 5,
      title: "Lyricity",
      Description:
        "This application is a web-based app that will allow a user to enter a song name and artist to search for the lyrics of the song, using music based APIs.",
      code: "JavaScript",
      deploy: "https://mlcohan.github.io/team9/",
      repo: "https://github.com/mlcohan/Lyricity",
    },
    {
      id: 6,
      title: "Weather For Me",
      Description:
        "A weather dashboard that allows users to search for specific cities and display the current weather along with a 5-day forecast.",
      code: "JavaScript",
      deploy: "https://colinjhedwards.github.io/weatherForMe/",
      repo: "https://github.com/ColinJhEdwards/weatherForMe",
    },
  ];
};
