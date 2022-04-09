import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { pageAnimation } from "../animations";

const Blog = () => {
  return (
    <StlyedBlog
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="title">
        <h1>My Blog</h1>
        <p>
          The early days of learning how to code can be daunting. <br />
          In this blog I hope to cover topics that I struggled with, new
          technologies I work with, plus tips and tricks I've picked up during
          my coding journey in hopes of helping those embarking on this journey.
        </p>
        <div className="line"></div>
      </div>
      <div className="blogs">
        <div className="thumbnail">
          <div className="image">
            <FontAwesomeIcon icon={faCube} />
          </div>
          <div className="text">
            <h2>Coming Soon</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              autem.
            </p>
          </div>
        </div>
        {/* <div className="thumbnail">
          <div className="image">
            <FontAwesomeIcon icon={faCube} />
          </div>
          <div className="text">
            <h2>Title</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              autem.
            </p>
          </div>
        </div>
        <div className="thumbnail">
          <div className="image">
            <FontAwesomeIcon icon={faCube} />
          </div>
          <div className="text">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="thumbnail">
          <div className="image">
            <FontAwesomeIcon icon={faCube} />
          </div>
          <div className="text">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="thumbnail">
          <div className="image">
            <FontAwesomeIcon icon={faCube} />
          </div>
          <div className="text">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="thumbnail">
          <div className="image">
            <FontAwesomeIcon icon={faCube} />
          </div>
          <div className="text">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div> */}
      </div>
    </StlyedBlog>
  );
};

const StlyedBlog = styled(motion.div)`
  min-height: 90vh;
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: transparent;
  }
  .title {
    text-align: center;
    margin: 2rem 0rem;
    p {
      width: 50%;
      margin: auto;
      line-height: 40px;
      color: #a8a8a8;
    }
    .line {
      width: 60%;
      margin: 1rem auto;
      height: 0.1rem;
      background: #a8a8a8;
    }
  }
  .blogs {
    height: 65vh;
    width: 90%;
    margin: auto;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    scrollbar-width: thin;
    scrollbar-color: #6969dd #e0e0e0;
    .thumbnail {
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 4px 2px blue;
      width: 40%;
      margin: 2rem 0rem;
      padding: 2rem 0rem;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        box-shadow: 0px 0px 4px 4px blue;
      }
      .image {
        font-size: 3rem;
        margin: 0rem 1rem;
      }
    }
  }

  @media (max-width: 940px) {
    .blogs {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      .thumbnail {
        width: 90%;
      }
    }
  }

  @media (max-width: 850px) {
    .title {
      p {
        width: 90%;
        margin: auto;
        line-height: 50px;
        color: #a8a8a8;
      }
    }
  }
`;

export default Blog;
