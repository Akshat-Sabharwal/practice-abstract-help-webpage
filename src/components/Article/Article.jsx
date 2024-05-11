import { FaArrowRight } from "react-icons/fa6";
import "./Article.modules.css";

export const Article = ({ title, text, image }) => {
  return (
    <div className="article">
      <div className="content">
        <img src={image} />
        <article>
          <p>{title}</p>
          <p>{text}</p>
          <span>
            <a>Learn More</a>
            <FaArrowRight />
          </span>
        </article>
      </div>
    </div>
  );
};
