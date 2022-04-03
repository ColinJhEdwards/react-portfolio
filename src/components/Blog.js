import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <StlyedBlog>
      <div className="title">
        <h1>My blogs</h1>
      </div>
      <div className="blogs">
        <div className="thumbnail">
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
      </div>
    </StlyedBlog>
  );
};

const StlyedBlog = styled(motion.div)`
  min-height: 90vh;
  .title {
    text-align: center;
    margin: 2rem 0rem;
  }
  .blogs {
    min-height: 90vh;
    background: gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .thumbnail {
      display: flex;
      border: blue solid 2px;
      width: 90%;
      margin: 2rem 4rem;
      padding: 2rem 2rem 2rem 0rem;
      .image {
        font-size: 3rem;
        margin: 0rem 1rem;
      }
    }
  }
`;

export default Blog;
