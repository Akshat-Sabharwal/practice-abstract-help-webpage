import { Button } from "../Button/Button";
import "./Navbar.modules.css";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="contents">
        <div className="logo">
          <img src="#" />
          <p>Abstract</p>
          <p>|</p>
          <p>Help Center</p>
        </div>
        <div className="buttons">
          <Button variant="outline" backgroundColor="white" color="white">
            Submit a Request
          </Button>
          <Button
            variant="fill"
            backgroundColor="var(--dark-accent)"
            color="white"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
