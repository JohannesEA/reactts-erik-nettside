import Button from "@mui/material/Button";
import { useState } from "react";
import Lottie from "lottie-react";
import troll from "./troll.json";

const HeroSection = () => {
  const [showTroll, setShowTroll] = useState<boolean>(false);

  return (
    <>
      <div className="hero-section">
        {!showTroll ? (
          <>
            <Button
              className="btn btn-primary"
              onClick={() => {
                setShowTroll(true);
              }}
              variant="contained"
            >
              Just send it
            </Button>
          </>
        ) : (
          <div
            className="troll"
            onClick={() => {
              setShowTroll(false);
            }}
          >
            <Lottie animationData={troll} loop={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;
