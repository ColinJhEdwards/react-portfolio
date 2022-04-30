(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{106:function(e,n,t){"use strict";t.r(n);var i,a,r,s,o,c,l,d,h,m,p,b,j,g,x,u,f,O,w=t(1),v=t.n(w),y=t(88),k=t.n(y),N=t(10),S=t(109),C=t(5),D=t(6),M=Object(D.a)(i||(i=Object(C.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    background: #000000;\n    font-family: 'Rubik', sans-serif;\n    color: white;\n}\n\na{\n    color: black;\n    text-decoration: none;\n    &:hover{\n        text-decoration: none;\n        color: gray;\n    }\n}\n\n\n"]))),I=t(92),z=t(107),E=t(0),J=function(e){var n=e.children,t=e.title,i=Object(w.useState)(!1),a=Object(I.a)(i,2),r=a[0],s=a[1];return Object(E.jsxs)(z.a.div,{onClick:function(){return s(!r)},layout:"position",children:[Object(E.jsxs)(z.a.div,{className:"words",children:[Object(E.jsx)("h1",{children:t}),Object(E.jsx)("h1",{children:Object(E.jsx)("span",{children:r?"-":"+"})})]}),r?n:""]})},P=t(108),R=D.b.div(a||(a=Object(C.a)(["\n  width: 90%;\n  margin: auto;\n  min-height: 60vh;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  .title {\n    min-height: 10vh;\n    text-align: center;\n    margin: 2rem 0rem;\n    h2 {\n      font-size: 3.5rem;\n    }\n  }\n  .lang,\n  .tech,\n  .study {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    margin: 2rem 4rem;\n  }\n  .words {\n    margin-bottom: 2rem;\n    border: 2px solid gray;\n    border-radius: 5px;\n    padding: 1rem 0rem;\n    transition: all ease 0.5s;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    &:hover {\n      background: #33333371;\n\n      h1 {\n        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);\n      }\n    }\n\n    h1 {\n      letter-spacing: 4px;\n      margin: 0rem 1rem;\n      color: #1f51ff;\n\n      span {\n        color: white;\n      }\n    }\n  }\n  .languages,\n  .tech1,\n  .studying {\n    color: gray;\n    margin: 1rem 0rem;\n    display: flex;\n    flex-wrap: wrap;\n\n    h2 {\n      margin-right: 1rem;\n    }\n  }\n\n  @media (max-width: 1024px) {\n    flex-direction: column;\n  }\n\n  @media (max-width: 440px) {\n    .words {\n      h1 {\n        font-size: 1.7rem;\n      }\n    }\n  }\n\n  @media (max-width: 414px) {\n    width: 90%;\n    margin: auto;\n    h1 {\n    }\n    .languages,\n    .tech1,\n    .studying {\n      h2 {\n        font-size: 1rem;\n      }\n    }\n  }\n"]))),A=function(){return Object(E.jsxs)(R,{children:[Object(E.jsx)("div",{className:"title",children:Object(E.jsx)("h2",{children:"Skills"})}),Object(E.jsxs)(P.a,{children:[Object(E.jsx)(J,{title:"Languages",children:Object(E.jsx)("div",{className:"lang",children:Object(E.jsxs)(z.a.div,{animate:{opacity:1,x:0},initial:{opacity:0,x:-100},transition:{duration:.5},className:"languages",children:[Object(E.jsx)("h2",{children:"<HTML5>"}),Object(E.jsx)("h2",{children:"<CSS>"}),Object(E.jsx)("h2",{children:"<JavaScript>"})]})})}),Object(E.jsx)(J,{title:"Technologies",children:Object(E.jsx)("div",{className:"tech",children:Object(E.jsxs)(z.a.div,{animate:{opacity:1,x:0},initial:{opacity:0,x:-100},transition:{duration:.5},className:"tech1",children:[Object(E.jsx)("h2",{children:"<React>"}),Object(E.jsx)("h2",{children:"<Redux>"}),Object(E.jsx)("h2",{children:"<Framer-Motion>"}),Object(E.jsx)("h2",{children:"<Styled Components>"}),Object(E.jsx)("h2",{children:"<Material-UI>"}),Object(E.jsx)("h2",{children:"<Bootstrap>"}),Object(E.jsx)("h2",{children:"<node.js>"}),Object(E.jsx)("h2",{children:"<jQuery>"}),Object(E.jsx)("h2",{children:"<MongoDB>"}),Object(E.jsx)("h2",{children:"<MySQL>"}),Object(E.jsx)("h2",{children:"<GIT>"}),Object(E.jsx)("h2",{children:"<Github>"})]})})}),Object(E.jsx)(J,{title:"Studying",children:Object(E.jsx)("div",{className:"study",children:Object(E.jsxs)(z.a.div,{animate:{opacity:1,x:0},initial:{opacity:0,x:-100},transition:{duration:.5},className:"studying",children:[Object(E.jsx)("h2",{children:"<Typescript>"}),Object(E.jsx)("h2",{children:"<Algorithms>"}),Object(E.jsx)("h2",{children:"<Test Driven Development>"})]})})})]})]})},F={hidden:{opacity:0},show:{opacity:1,transition:{duration:.5,when:"beforeChildren",staggerChildren:.25}},exit:{opacity:0,transition:{duration:.5}}},H={hidden:{y:"130%"},show:{y:"0%",transition:{duration:1}}},T={hidden:{y:"20%",opacity:0},show:{y:"0%",opacity:1,transition:{duration:1}}},_={hidden:{opacity:0},show:{opacity:1,transition:{duration:1}}},L={hidden:{opacity:0},show:{opacity:1,transition:{duration:1}},exit:{scale:0,transition:{duration:.5}}},B=Object(D.b)(z.a.div)(r||(r=Object(C.a)(["\n  min-height: 70vh;\n  width: 90%;\n  margin: auto;\n  margin-top: 5rem;\n  .text {\n    text-align: center;\n    font-size: 1.5rem;\n    header {\n      margin-bottom: 5rem;\n    }\n    p {\n      margin: 3rem 0rem;\n    }\n  }\n  .guitarVideo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    iframe {\n      width: 45%;\n      height: 35vh;\n      margin: 0rem 1rem;\n    }\n  }\n  @media (max-width: 789px) {\n    .guitarVideo {\n      iframe {\n        width: 100%;\n        margin-top: 1rem;\n      }\n    }\n  }\n"]))),U=function(){return Object(E.jsx)(B,{className:"aboutme",children:Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("header",{children:Object(E.jsx)("h2",{children:"When I'm not coding you can find me playing guitar"})}),Object(E.jsxs)("div",{className:"guitarVideo",children:[Object(E.jsx)("iframe",{src:"https://www.youtube.com/embed/3Fxx18mEK_o",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(E.jsx)("iframe",{src:"https://www.youtube.com/embed/gu3VyJkOCyQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})]})})},V=t.p+"static/media/Colin.f3012cc9.JPG",G=t(18),W=D.b.div(s||(s=Object(C.a)(["\n  min-height: 30vh;\n  width: 90%;\n  margin: auto;\n  .list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    .container {\n      width: 30%;\n      margin: 4rem 1rem;\n      padding: 1rem;\n      display: flex;\n      justify-content: flex-start;\n      transition: all ease 0.5s;\n      cursor: pointer;\n      border-radius: 5px;\n      &:hover {\n        background: #33333371;\n      }\n      i {\n        color: #1f51ff;\n        background: #27272788;\n        padding: 1rem;\n        border-radius: 15px;\n      }\n      .icon {\n        font-size: 2rem;\n        margin-right: 1rem;\n      }\n      .text {\n        p {\n          color: #c9c9c9;\n        }\n      }\n    }\n  }\n  .line {\n    height: 0.5px;\n    background: gray;\n    width: 90%;\n    margin: 1rem auto;\n  }\n  @media (max-width: 1185px) {\n    .list {\n      .container {\n        width: 40%;\n      }\n    }\n  }\n  @media (max-width: 900px) {\n    .list {\n      flex-direction: column;\n      .container {\n        width: 100%;\n        margin: 0rem;\n      }\n    }\n  }\n"]))),q=function(){return Object(E.jsxs)(W,{className:"otherSkills",children:[Object(E.jsxs)("div",{className:"list",children:[Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"icon",children:Object(E.jsx)("i",{class:"fa-solid fa-guitar"})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Guitarist"}),Object(E.jsx)("p",{children:"I am addicted to my guitar and studying music theory, check out my videos below!"})]})]}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"icon",children:Object(E.jsx)("i",{class:"fa-solid fa-paintbrush"})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Creative"}),Object(E.jsx)("p",{children:"I love art, music, and good design. Front-end development, to me, is fun!"})]})]}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"icon",children:Object(E.jsx)("i",{class:"fa-solid fa-person-running"})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Runner"}),Object(E.jsx)("p",{children:"I am an avid runner and have participated in events such as the Seattle Mud Run."})]})]}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"icon",children:Object(E.jsx)("i",{class:"fa-solid fa-people-group"})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Team Player"}),Object(E.jsx)("p",{children:"I work well independently but love being a part of a team working towards a goal."})]})]}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"icon",children:Object(E.jsx)("i",{class:"fa-solid fa-book"})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Inquisitive"}),Object(E.jsx)("p",{children:"I have a strong student mentality and am eager to learn more!"})]})]}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"icon",children:Object(E.jsx)("i",{class:"fa-solid fa-puzzle-piece"})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Problem Solver"}),Object(E.jsx)("p",{children:"I look forward to error messages in my console log \ud83d\ude08"})]})]})]}),Object(E.jsx)("div",{className:"line"})]})},Q=Object(D.b)(z.a.div)(o||(o=Object(C.a)(["\n  min-height: 90vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  position: relative;\n  overflow: hidden;\n  width: 90%;\n  margin: auto;\n  .aboutMe {\n    min-height: 80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 60rem;\n    h2,\n    h1 {\n      width: 100%;\n    }\n    h1 {\n      font-size: 8rem;\n      color: white;\n    }\n    #desc {\n      width: 90%;\n      color: gray;\n    }\n    span {\n      color: #1f51ff;\n    }\n    a {\n      color: #1f51ff;\n      transition: all ease 0.5s;\n      &:hover {\n        color: gray;\n      }\n    }\n    i {\n      font-size: 5rem;\n      margin: 1rem;\n    }\n  }\n  .me {\n    width: 20rem;\n    margin: 4rem 0rem;\n    img {\n      height: 300px;\n      border-radius: 360px;\n      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);\n      transition: all ease 0.5s;\n      &:hover {\n        transform: scale(1.2) rotate(5deg);\n      }\n    }\n  }\n  .line {\n    height: 0.5px;\n    background: gray;\n    width: 90%;\n    margin: 1rem auto;\n  }\n  @media (max-width: 1750px) {\n    .aboutMe,\n    h2 {\n      font-size: 1.2rem;\n    }\n  }\n  @media (max-width: 1422px) {\n    .me {\n      width: 15rem;\n      img {\n        height: 250px;\n      }\n    }\n  }\n  @media (max-width: 1350px) {\n    .aboutMe {\n      align-items: center;\n      h1 {\n        font-size: 2rem;\n      }\n      h2 {\n        margin: auto;\n        text-align: center;\n      }\n    }\n  }\n\n  @media (max-width: 594px) {\n    .social {\n      text-align: center;\n    }\n  }\n\n  @media (max-width: 414px) {\n    .aboutMe {\n      i {\n        font-size: 3rem;\n      }\n    }\n  }\n"]))),Y=Object(D.b)(z.a.div)(c||(c=Object(C.a)(["\n  width: 90%;\n  margin: auto;\n"]))),K=Object(D.b)(z.a.div)(l||(l=Object(C.a)(["\n  width: 90%;\n  margin: auto;\n"]))),X=Object(D.b)(z.a.div)(d||(d=Object(C.a)(["\n  width: 90%;\n  margin: auto;\n"]))),Z=D.b.div(h||(h=Object(C.a)(["\n  overflow: hidden;\n"]))),$=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(Q,{variants:F,initial:"hidden",animate:"show",exit:"exit",children:[Object(E.jsxs)("div",{className:"aboutMe",children:[Object(E.jsx)(Z,{children:Object(E.jsx)(z.a.h2,{variants:H,children:Object(E.jsx)("span",{children:"Hey! I'm-"})})}),Object(E.jsx)(Z,{children:Object(E.jsx)(z.a.h1,{variants:H,children:"Colin Edwards."})}),Object(E.jsx)(Z,{children:Object(E.jsxs)(z.a.h2,{variants:H,id:"desc",children:["Creative ",Object(E.jsx)("span",{children:"Front-End Developer"})," with a certificate in Fullstack Development. Passionate about creating beautiful websites, design, and music. Currently seeking a Junior Front-End Developer position."]})}),Object(E.jsx)(Z,{children:Object(E.jsxs)(z.a.div,{variants:H,className:"social",children:[Object(E.jsx)("a",{href:"https://github.com/ColinJhEdwards",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("i",{class:"fa-brands fa-github"})}),Object(E.jsx)("a",{href:"https://www.linkedin.com/in/colin-edwards-9a313a140/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("i",{class:"fa-brands fa-linkedin-in"})}),Object(E.jsx)("a",{href:"https://www.instagram.com/colinseecolindo/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("i",{class:"fa-brands fa-instagram"})}),Object(E.jsx)("a",{href:"https://open.spotify.com/user/colinjhedwards",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("i",{class:"fa-brands fa-spotify"})}),Object(E.jsx)("a",{href:"mailto: colinjhedwards@gmail.com",children:Object(E.jsx)("i",{class:"fa-solid fa-envelope"})})]})})]}),Object(E.jsx)(z.a.div,{className:"me",variants:_,children:Object(E.jsx)("img",{src:V,alt:"colin"})}),Object(E.jsx)(z.a.div,{variants:_,className:"line"})]}),Object(E.jsx)(Y,{className:"skills",variants:_,children:Object(E.jsx)(A,{})}),Object(E.jsx)(K,{className:"otherSkills",children:Object(E.jsx)(q,{})}),Object(E.jsx)(X,{className:"about",children:Object(E.jsx)(U,{})})]})},ee=t.p+"static/media/sweepHome.1394041c.png",ne=t.p+"static/media/sweepHomeDetail.65072f5d.png",te=t.p+"static/media/sweepHomeDetail2.1165fe4e.png",ie=t.p+"static/media/sweepSearch.c2087876.png",ae=t.p+"static/media/sweepSearch2.6934c21b.png",re=t.p+"static/media/sweepSearchFail.9ab8b91d.png",se=t.p+"static/media/sweepMobile1.9e37e5f6.png",oe=t.p+"static/media/sweepMobile2.c7e95e98.png",ce=t.p+"static/media/leeBrowse.a49680eb.png",le=t.p+"static/media/leeCollection.c59cb002.png",de=t.p+"static/media/leeHome.61fbd260.png",he=t.p+"static/media/leeMobileFrog.dfde36b7.png",me=t.p+"static/media/leeMobileHome.2f0768eb.png",pe=t.p+"static/media/leeReviews.f4f9d3b9.png",be=t.p+"static/media/socksHome.b0c3534a.png",je=t.p+"static/media/socksMarket.18e294a2.png",ge=t.p+"static/media/socksStocks.b2173d6f.png",xe=t.p+"static/media/socksMobileHome.d2ed7fc7.png",ue=t.p+"static/media/socksMobileMarket.dfe459ab.png",fe=t.p+"static/media/todoHome.929f8b1a.png",Oe=t.p+"static/media/todoMobile.6d262e34.png",we=t.p+"static/media/home.2b632a6d.png",ve=t.p+"static/media/about.730b7323.png",ye=t.p+"static/media/gallery.6a341009.png",ke=t.p+"static/media/contact.ca5ab8e3.png",Ne=t.p+"static/media/mobileHome.a209a763.png",Se=t.p+"static/media/mobileAbout.86f20d0a.png",Ce=t.p+"static/media/mobileGallery.97e128b8.png",De=t.p+"static/media/mobileContact.ba7474c7.png",Me=t.p+"static/media/aperHome.ab15e5f2.png",Ie=t.p+"static/media/aperSearch.46a0335a.png",ze=t.p+"static/media/aperMobile.9a72a235.png",Ee=t.p+"static/media/home.1ade2be9.png",Je=t.p+"static/media/homeDetail1.ee0789b1.png",Pe=t.p+"static/media/homeDetail2.e0c8b64e.png",Re=t.p+"static/media/courses.43449731.png",Ae=t.p+"static/media/teachers.f58ac9eb.png",Fe=t.p+"static/media/contact1.09045e6b.png",He=t.p+"static/media/contact2.ec429c2b.png",Te=t.p+"static/media/mobileHome.1e5a9cba.png",_e=t.p+"static/media/mobileHome2.973ca553.png",Le=t.p+"static/media/mobileCourses.0c5f9ff2.png",Be=t.p+"static/media/mobileCourseDetail.84be822c.png",Ue=t.p+"static/media/mobileTeachers.818accd5.png",Ve=t.p+"static/media/home.f8ba667f.png",Ge=t.p+"static/media/theVan.5c5247c6.png",We=t.p+"static/media/destinations.88385b9f.png",qe=t.p+"static/media/mobileHome.018a2d37.png",Qe=t.p+"static/media/mobileVan.3419e4c9.png",Ye=t.p+"static/media/mobileDestination.b35c927a.png",Ke=t(19),Xe=Object(D.b)(z.a.div)(m||(m=Object(C.a)(["\n  transition: all ease 0.5s;\n  width: 100%;\n  margin: 4rem auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      transform: scale(1.2);\n      .imgCover {\n        background: none;\n      }\n    }\n  }\n  .hide {\n    overflow: hidden;\n  }\n  .image {\n    border-radius: 5px;\n    position: relative;\n    width: 50%;\n    transition: all ease 0.5s;\n    img {\n      border-radius: 5px;\n      width: 100%;\n      margin: 0;\n      cursor: pointer;\n    }\n    .imgCover {\n      background: #010146b0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transition: all ease 0.5s;\n      pointer-events: none;\n    }\n  }\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n    position: absolute;\n    width: 50%;\n    right: 5%;\n    #desc {\n      background: #202020;\n      padding: 2rem;\n      border-radius: 5px;\n    }\n    h2,\n    p {\n      color: white;\n      text-shadow: 2px 2px black;\n      margin: 1rem;\n    }\n    h2 {\n      font-size: 1.5rem;\n    }\n    .line {\n      width: 60%;\n      height: 2px;\n      background: gray;\n      margin: 0rem 1rem;\n    }\n\n    .techUsed {\n      color: #b8b8b8;\n    }\n    p {\n      font-size: 0.8rem;\n    }\n    span {\n      margin-right: 5px;\n    }\n  }\n\n  .links {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-weight: bolder;\n    flex-wrap: wrap;\n    p {\n      font-size: 1rem;\n      text-decoration: none;\n      border-radius: 5px;\n      padding: 0.2rem 1rem;\n      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);\n      background: #1517bd;\n      transition: ease all 0.5s;\n      &:hover {\n        background: #07097e;\n      }\n    }\n  }\n\n  @media (max-width: 1300px) {\n    .content {\n      width: 60%;\n    }\n  }\n  @media (max-width: 1200px) {\n    flex-direction: column;\n    position: static;\n    border-radius: 5px;\n    .image {\n      width: 100%;\n      img {\n        border-radius: 0px;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n      }\n      .imgCover {\n        background: none;\n      }\n    }\n    .content {\n      position: static;\n      align-items: flex-start;\n      width: 100%;\n      transform: translateX(0);\n      background: #202020;\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px;\n      #desc {\n        padding: 0;\n      }\n    }\n  }\n"]))),Ze=D.b.div(p||(p=Object(C.a)(["\n  overflow: hidden;\n"]))),$e=function(e){var n=e.title,t=e.description,i=e.code,a=e.repo,r=e.deploy,s=(e.id,e.cover);return Object(E.jsx)(Ze,{children:Object(E.jsxs)(Xe,{variants:L,children:[Object(E.jsx)("div",{className:"hide",children:Object(E.jsxs)("div",{className:"image",children:[Object(E.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("img",{src:s,alt:"coverimg",loading:"lazy"})}),Object(E.jsx)("div",{className:"imgCover"})]})}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsxs)("h2",{children:[Object(E.jsx)(G.a,{icon:Ke.a})," ",n]}),Object(E.jsx)("div",{className:"line"}),Object(E.jsx)("p",{id:"desc",children:t}),Object(E.jsxs)("p",{className:"techUsed",children:[Object(E.jsx)("span",{style:{color:"JavaScript"===i[0]?"yellow":"#129dc7"},children:Object(E.jsx)(G.a,{icon:Ke.b})}),i]}),Object(E.jsxs)("div",{className:"links",children:[Object(E.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("p",{children:"Repository"})}),Object(E.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("p",{children:"Deployed Application"})})]})]})]})})},en=Object(D.b)(z.a.div)(b||(b=Object(C.a)(["\n  box-shadow: 0px 0px 4px 2px blue;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  transition: all ease 0.2s;\n  cursor: pointer;\n  &:hover {\n    transform: translateY(-20px);\n    .text {\n      h3 {\n        color: blue;\n      }\n    }\n  }\n  .icon {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    i,\n    #folder {\n      font-size: 2rem;\n    }\n    #folder {\n      color: blue;\n    }\n    i {\n      margin-left: 1rem;\n    }\n    a {\n      color: white;\n      transition: all ease 0.5s;\n      &:hover {\n        color: blue;\n      }\n    }\n  }\n  .text {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    p {\n      color: gray;\n    }\n    h3 {\n      transition: all ease 0.2s;\n    }\n  }\n"]))),nn=function(e){var n=e.title,t=e.description,i=e.code,a=e.repo,r=e.deploy;return Object(E.jsxs)(en,{variants:_,children:[Object(E.jsxs)("div",{className:"icon",children:[Object(E.jsx)(G.a,{icon:Ke.g,id:"folder"}),Object(E.jsxs)("div",{className:"links",children:[Object(E.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("i",{class:"fa-brands fa-github"})}),Object(E.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("i",{class:"fa-solid fa-arrow-up-right-from-square"})})]})]}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h3",{children:n}),Object(E.jsx)("p",{children:t}),Object(E.jsx)("p",{children:i})]})]})},tn=Object(D.b)(z.a.div)(j||(j=Object(C.a)(["\n  min-height: 90vh;\n  .title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 2rem 0rem;\n    text-align: center;\n  }\n  .projects {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: auto;\n  }\n\n  .minorProjects {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-column-gap: 3rem;\n    grid-row-gap: 3rem;\n    width: 80%;\n    margin: 2rem auto;\n  }\n"]))),an=function(){var e=[{id:1,title:"Inca Wheels",Description:"Inca Wheels is an indigenous owned outdoor recreational vehicle rental company based in the Pacific Northwest. Their mission is to bring affordable access to the wonderous outdoors the Pacific Northwest has to offer for generations to come.",longDesc:"Inca Wheels is an indigenous owned outdoor recreational vehicle rental company based in the Pacific Northwest. Started as a way to help raise funds for the nonprofit Ruta Verde that focuses on Sustainable Development projects including the building of Community Forests in North America and creating sustainable food solutions in Peru. The Inca were honorable people that valued their surrounding environments at the core of their belief systems, and we hope to honor this ideology by creating a business that focuses on caring for the planet, not just profits.",code:["React ","- Google Maps API ","- bootstrap ","- framer motion ","- styled components"],deploy:"https://www.incawheels.com/",repo:"https://github.com/ColinJhEdwards/incawheels",img:[Ve,Ge,We],mobileImg:[qe,Qe,Ye]},{id:2,title:"Murphy's Music School",Description:"Murphy's Music School's mission is to bring their community together through the joys of music by providing a quality music education to students of all ages and skill levels.",longDesc:"Murphy's Music School's mission is to bring their community together through the joys of music by providing a quality music education to students of all ages and skill levels. The school has paved a new pathway in the industry of music education by offering lessons from experienced musicians and incorporating a performance-based education approach. Meaning the curriculum focuses on learning music concepts and applying them in a live performance.",code:["React ","- material ui ","- bootstrap ","- framer motion ","- styled components"],deploy:"https://colinjhedwards.github.io/murphy-music-school/",repo:"https://github.com/ColinJhEdwards/murphy-music-school",img:[Ee,Je,Pe,Re,Ae,Fe,He],mobileImg:[Te,_e,Le,Be,Ue]},{id:3,title:"Sweep",Description:"Sweep is an online database of information related to movies. Users are able to browse a collection of movies including popular, top rated, and movies currently playing in theaters.",longDesc:"Sweep is an online database of information related to movies. Users are able to browse a collection of movies including popular, top rated, and movies currently playing in theaters. Users are also able to search for specific movies and view a variety of information such as the movies trailer, release date, description, actors, and more.",code:["React ","- redux ","- axios ","- bootstrap ","- lazy load image","- styled components"],deploy:"https://colinjhedwards.github.io/Sweep/",repo:"https://github.com/ColinJhEdwards/Sweep",img:[ee,ne,te,ie,ae,re],mobileImg:[se,oe]}],n=[{id:1,title:"Socks",Description:"Socks is a web-based application that allows users to save and view their current stock units.",longDesc:"Socks is a web-based application that allows a user to sign into their account, log their current stock units and cryptocurrency shares. Socks is a great choice for new and experienced investors alike. With an auto-populating, personalized dashboard showing infographics depicting the current value of your personalized market standings, this app brings simple viewings to your ever-so complicated investment portfolio. With a combination of rise in diversity of the stock trading market and an overall leaning preference to keep track of financial data in an easy-to-use application on your smart phone, Socks has never come at a better time. At Socks, our promise to raise the bar on UI will give anyone the opportunity to understand where their investments land at just one glance. Create an account and start logging to find out for yourself!",code:["React ","- Firebase ","- MongoDB ","- styled components ","- bootstrap "],deploy:"https://socks-stocks.herokuapp.com/",repo:"https://github.com/ashley-ag/Socks",img:[be,je,ge],mobileImg:[xe,ue]},{id:2,title:"Lee's Reptile Emporium",Description:"Lee's Reptile Emporium is your one stop online shop for new reptilian pets.",code:["JavaScript"," - MySQL ","- express","- handlebars"],deploy:"https://lees-reptile-emporium.herokuapp.com/",repo:"https://github.com/mlcohan/LeesReptileEmporium",img:[de,ce,le,pe],mobileImg:[me,he]},{id:3,title:"ToDo For Me",Description:"A simple todo list for creating a list of items you must complete with functioning local storage",longDesc:"A simple todo list for creating a list of items you must complete with functioning local storage",code:["JavaScript"],deploy:"https://colinjhedwards.github.io/todoforme/",repo:"https://github.com/ColinJhEdwards/todoforme",img:[fe],mobileImg:[Oe]},{id:4,title:"Photographer Portfolio",Description:"A basic template for a professional photographers personal portfolio.",longDesc:"A basic template for a professional photographers personal portfolio.",code:["JavaScript"],deploy:"https://colinjhedwards.github.io/photographer-portfolio/",repo:"https://github.com/ColinJhEdwards/photographer-portfolio",img:[we,ve,ye,ke],mobileImg:[Ne,Se,Ce,De]},{id:5,title:"Aperture",Description:"Aperture provides free stock photos that users can search through and use for personal projects, allowing them to create stunning designs and projects.",longDesc:"Aperture provides free stock photos that users can search through and use for personal projects, allowing them to create stunning designs and projects. All photos are pulled from pexels api which supplies hundreds of thousands free stock photos. Vists Pexels website to contribue your photos!",code:["JavaScript"],deploy:"https://colinjhedwards.github.io/Aperture/",repo:"https://github.com/ColinJhEdwards/Aperture",img:[Me,Ie],mobileImg:[ze]}];return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(tn,{variants:F,initial:"hidden",animate:"show",exit:"exit",children:[Object(E.jsx)("div",{className:"title",children:Object(E.jsx)("h2",{children:"Projects"})}),Object(E.jsx)(z.a.div,{className:"projects",children:e.map((function(e){return Object(E.jsx)($e,{id:e.id,title:e.title,description:e.Description,code:e.code,deploy:e.deploy,repo:e.repo,cover:e.img[0]},e.id)}))}),Object(E.jsxs)("div",{className:"title other",children:[Object(E.jsx)("h2",{children:"Other Noteworthy Projects"}),Object(E.jsx)("hr",{width:"60%",color:"gray"})]}),Object(E.jsx)("div",{className:"minorProjects",children:n.map((function(e){return Object(E.jsx)(nn,{id:e.id,title:e.title,description:e.Description,code:e.code,deploy:e.deploy,repo:e.repo},e.id)}))})]})})},rn=t.p+"static/media/Edwards_Resume.c0d7b2e1.pdf",sn=Object(D.b)(z.a.div)(g||(g=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 2rem 0rem;\n"]))),on=Object(D.b)(z.a.div)(x||(x=Object(C.a)(["\n  min-height: 80vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h2 {\n    margin: 2rem 0rem;\n  }\n  .icon,\n  i {\n    margin-right: 1rem;\n    color: gray;\n  }\n  a {\n    color: #1f51ff;\n    &:hover {\n      color: gray;\n      text-decoration: underline;\n    }\n  }\n  .image {\n    img {\n      height: 300px;\n      border-radius: 360px;\n      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);\n    }\n  }\n  @media (max-width: 1500px) {\n    h2 {\n      font-size: 1.5rem;\n    }\n    .contact {\n      h2 {\n        font-size: 1rem;\n      }\n    }\n  }\n"]))),cn=function(){return Object(E.jsxs)(z.a.div,{variants:F,initial:"hidden",animate:"show",exit:"exit",children:[Object(E.jsxs)(sn,{children:[Object(E.jsx)("h2",{children:"Let's Connect"}),Object(E.jsx)("hr",{width:"60%",color:"gray"})]}),Object(E.jsxs)(on,{variants:T,children:[Object(E.jsx)("div",{className:"image",children:Object(E.jsx)("img",{src:V,alt:"me"})}),Object(E.jsxs)("div",{className:"info",children:[Object(E.jsxs)("h2",{children:[Object(E.jsx)(G.a,{className:"icon",icon:Ke.i}),"Colin Edwards"]}),Object(E.jsx)("a",{href:rn,target:"_blank",rel:"noreferrer",children:Object(E.jsxs)("h2",{children:[Object(E.jsx)(G.a,{className:"icon",icon:Ke.f}),"Resume"]})}),Object(E.jsxs)("h2",{children:[Object(E.jsx)(G.a,{className:"icon",icon:Ke.h}),"Redmond, Washington"]})]}),Object(E.jsxs)("div",{className:"contact",children:[Object(E.jsx)("a",{href:"mailto: colinjhedwards@gmail.com",children:Object(E.jsxs)("h2",{children:[Object(E.jsx)(G.a,{className:"icon",icon:Ke.e}),"ColinJhEdwards@gmail.com"]})}),Object(E.jsx)("a",{href:"https://github.com/ColinJhEdwards",target:"_blank",rel:"noreferrer",children:Object(E.jsxs)("h2",{children:[Object(E.jsx)("i",{class:"fab fa-github-square"}),"Github"]})}),Object(E.jsx)("a",{href:"https://www.linkedin.com/in/colin-edwards-9a313a140/",target:"_blank",rel:"noreferrer",children:Object(E.jsxs)("h2",{children:[Object(E.jsx)("i",{className:"fab fa-linkedin"}),"Linkedin"]})})]})]})]})},ln=t(43),dn=D.b.div(u||(u=Object(C.a)(["\n  min-height: 10vh;\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 3rem;\n  background: black;\n  border-bottom: #474040 solid 1px;\n  position: relative;\n  a {\n    color: white;\n    text-decoration: none;\n    background: black;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    transition: ease all 0.5s;\n    &:hover {\n      background: #1f51ff;\n      color: white;\n    }\n  }\n  ul {\n    display: flex;\n    list-style: none;\n    align-items: center;\n    justify-content: space-around;\n    width: 40rem;\n  }\n  #logo {\n    font-size: 2rem;\n    font-weight: lighter;\n  }\n  li {\n    font-size: 1.5rem;\n    position: relative;\n    &:hover {\n      .line {\n        display: none;\n      }\n    }\n    .line {\n      height: 0.3rem;\n      background: #1f51ff;\n      width: 0;\n      position: absolute;\n      bottom: 4%;\n      left: 0%;\n    }\n  }\n  /* .burger {\n    position: absolute;\n    height: 5rem;\n    width: 5rem;\n    top: 10%;\n    right: 0;\n    .one,\n    .two,\n    .three {\n      background: white;\n      height: 0.5px;\n      width: 100%;\n      margin: 1rem 0rem;\n    }\n  } */\n  @media (max-width: 1300px) {\n    flex-direction: column;\n    padding: 0rem;\n    #logo {\n      display: inline-block;\n      margin: 1rem;\n    }\n    ul {\n      padding: 1rem;\n      justify-content: space-around;\n      width: 100%;\n      li {\n        padding: 0;\n        margin: 0rem 1rem;\n      }\n    }\n  }\n  @media (max-width: 500px) {\n    #logo {\n      font-size: 1.5rem;\n    }\n    li {\n      font-size: 1rem;\n    }\n  }\n  @media (max-width: 420px) {\n    ul {\n      li {\n        margin: 0rem;\n      }\n    }\n  }\n"]))),hn=function(){var e=Object(N.f)().pathname;return Object(E.jsxs)(dn,{children:[Object(E.jsx)("h1",{children:Object(E.jsxs)("a",{id:"logo",href:"https://github.com/ColinJhEdwards",target:"_blank",rel:"noreferrer",children:[Object(E.jsx)(G.a,{icon:Ke.c}),"Colin Edwards"]})}),Object(E.jsxs)("ul",{children:[Object(E.jsxs)("li",{children:[Object(E.jsx)(ln.b,{to:"/",children:"Home"}),Object(E.jsx)(z.a.div,{className:"line",transition:{duration:.75},initial:{width:"0%"},animate:{width:"/"===e?"100%":"0%"}})]}),Object(E.jsxs)("li",{children:[Object(E.jsx)(ln.b,{to:"/projects",children:"Projects"}),Object(E.jsx)(z.a.div,{className:"line",transition:{duration:.75},initial:{width:"0%"},animate:{width:"/projects"===e?"100%":"0%"}})]}),Object(E.jsxs)("li",{children:[Object(E.jsx)(ln.b,{to:"/blog",children:"Blog"}),Object(E.jsx)(z.a.div,{className:"line",transition:{duration:.75},initial:{width:"0%"},animate:{width:"/blog"===e?"100%":"0%"}})]}),Object(E.jsxs)("li",{children:[Object(E.jsx)(ln.b,{to:"/contact",children:"Contact"}),Object(E.jsx)(z.a.div,{className:"line",transition:{duration:.75},initial:{width:"0%"},animate:{width:"/contact"===e?"100%":"0%"}})]})]})]})},mn=D.b.footer(f||(f=Object(C.a)(["\n  min-height: 5vh;\n  background: black;\n  border-top: #474040 solid 1px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  h2 {\n    font-size: 1rem;\n    margin-bottom: 0px;\n  }\n"]))),pn=function(){return Object(E.jsx)(mn,{children:Object(E.jsx)("h2",{children:"\xa9 Colin Edwards 2021"})})},bn=Object(D.b)(z.a.div)(O||(O=Object(C.a)(["\n  min-height: 90vh;\n  *::-webkit-scrollbar {\n    width: 5px;\n  }\n  *::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  *::-webkit-scrollbar-thumb {\n    background-color: blue;\n    border-radius: 20px;\n    border: transparent;\n  }\n  .title {\n    text-align: center;\n    margin: 2rem 0rem;\n    p {\n      width: 50%;\n      margin: auto;\n      line-height: 40px;\n      color: #a8a8a8;\n    }\n    .line {\n      width: 60%;\n      margin: 1rem auto;\n      height: 0.1rem;\n      background: #a8a8a8;\n    }\n  }\n  .blogs {\n    height: 65vh;\n    width: 90%;\n    margin: auto;\n    overflow-y: scroll;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: space-around;\n    scrollbar-width: thin;\n    scrollbar-color: #6969dd #e0e0e0;\n    .thumbnail {\n      display: flex;\n      align-items: center;\n      box-shadow: 0px 0px 4px 2px blue;\n      width: 40%;\n      margin: 2rem 0rem;\n      padding: 2rem 0rem;\n      cursor: pointer;\n      transition: all 0.5s ease;\n      &:hover {\n        box-shadow: 0px 0px 4px 4px blue;\n      }\n      .image {\n        font-size: 3rem;\n        margin: 0rem 1rem;\n      }\n    }\n  }\n\n  @media (max-width: 940px) {\n    .blogs {\n      flex-direction: column;\n      flex-wrap: nowrap;\n      justify-content: flex-start;\n      align-items: center;\n      .thumbnail {\n        width: 90%;\n      }\n    }\n  }\n\n  @media (max-width: 850px) {\n    .title {\n      p {\n        width: 90%;\n        margin: auto;\n        line-height: 50px;\n        color: #a8a8a8;\n      }\n    }\n  }\n"]))),jn=function(){return Object(E.jsxs)(bn,{variants:F,initial:"hidden",animate:"show",exit:"exit",children:[Object(E.jsxs)("div",{className:"title",children:[Object(E.jsx)("h1",{children:"My Blog"}),Object(E.jsxs)("p",{children:["The early days of learning how to code can be daunting. ",Object(E.jsx)("br",{}),"In this blog I hope to cover topics that I struggled with, new technologies I work with, plus tips and tricks I've picked up during my coding journey in hopes of helping those embarking on this journey."]})]}),Object(E.jsx)("div",{className:"blogs",children:Object(E.jsxs)("div",{className:"thumbnail",children:[Object(E.jsx)("div",{className:"image",children:Object(E.jsx)(G.a,{icon:Ke.d})}),Object(E.jsxs)("div",{className:"text",children:[Object(E.jsx)("h2",{children:"Coming Soon"}),Object(E.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, autem."})]})]})})]})};var gn=function(){var e=Object(N.f)();return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(M,{}),Object(E.jsx)(hn,{}),Object(E.jsx)(S.a,{exitBeforeEnter:!0,children:Object(E.jsxs)(N.c,{location:e,children:[Object(E.jsx)(N.a,{path:"/",exact:!0,children:Object(E.jsx)($,{})}),Object(E.jsx)(N.a,{path:"/projects",children:Object(E.jsx)(an,{})}),Object(E.jsx)(N.a,{path:"/blog",children:Object(E.jsx)(jn,{})}),Object(E.jsx)(N.a,{path:"/contact",children:Object(E.jsx)(cn,{})})]},e.key)}),Object(E.jsx)(pn,{})]})},xn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,110)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),r(e),s(e)}))};t(105);k.a.render(Object(E.jsx)(v.a.StrictMode,{children:Object(E.jsx)(ln.a,{children:Object(E.jsx)(gn,{})})}),document.getElementById("root")),xn()}},[[106,1,2]]]);
//# sourceMappingURL=main.50f1f115.chunk.js.map