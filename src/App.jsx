import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { content } from "./utils/content";
import { Article } from "./components/Article/Article";
import { Button } from "./components/Button/Button";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Button
        variant="fill"
        backgroundColor="var(--dark-accent)"
        color="white"
        className="fixed-button"
        overlay="true"
      >
        Help
      </Button>
      <Navbar />
      <div className="section-one">
        <div className="content">
          <p>How can we help?</p>
          <span>
            <input placeholder="Search" />
            <FaArrowRight className="arrow-icon" />
          </span>
        </div>
      </div>
      <div className="section-two">
        <div className="grid-container">
          {content.map((item) => (
            <Article title={item.title} text={item.text} image={item.image} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
