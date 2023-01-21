import Button from "@mui/material/Button";
import { useState } from "react";

const HeroSection = () => {
  const [showTroll, setShowTroll] = useState<boolean>(false);

  return (
    <>
      <div className="hero-section">
        {!showTroll ? (
          <>
            <h1>Erik</h1>
            <Button
              onClick={() => {
                setShowTroll(true);
              }}
              variant="contained"
            >
              Just send it
            </Button>
          </>
        ) : (
          <img
            className="troll"
            onClick={() => {
              setShowTroll(false);
            }}
            src="https://images.genius.com/357a5fd671a74479e884e87d56937db7.1000x912x1.png"
            alt="troll"
          />
        )}
      </div>
    </>
  );
};

export default HeroSection;
