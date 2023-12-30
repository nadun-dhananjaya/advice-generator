import ResponsiveImage from "../components/common/ResponsiveImage";
import PatternDividerDesktop from ".//..//images//pattern-divider-desktop.svg";
import PatternDividerMobile from ".//..//images//pattern-divider-desktop.svg";
import DiceIcon from ".//..//images//icon-dice.svg";
import HTTPHELPER from "../utils/HTTPHELPER";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://api.adviceslip.com/advice";
const AdvicePage = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const generateAdvice = () => {
    setIsLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        const { id, advice } = res.data.slip;
        setAdvice(advice);
        setAdviceId(id);
        setIsLoading(false);
        console.log(res.data.slip);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    generateAdvice();
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen min-h-screen px-4 bg-dark-blue">
        <div className="max-w-[34rem] rounded-[1rem] relative w-full transition-all duration-500 bg-dark-grayish-blue p-12">
          <h1 className="text-center  text-neon-green text-[13px] font-manrope font-ext">
            ADVICE #{adviceId}
          </h1>
          <p className="text-center mt-6 text-light-cyan text-[24px] md:text-[28px] leading-normal -tracking-[0.3px]">
            {advice}
          </p>
          <div className="mt-12 mb-4 ">
            <ResponsiveImage
              urls={{
                mobile: PatternDividerMobile,
                desktop: PatternDividerDesktop,
              }}
            />
          </div>
          <button
            onClick={generateAdvice}
            disabled={isLoading}
            className="absolute bottom-0 p-5 disabled:cursor-not-allowed  -translate-x-1/2 translate-y-1/2 rounded-full drop-shadow-[0_3px_3px_rgba(83, 255, 170, 0.5)] disabled:bg-[#baffdd] bg-neon-green left-1/2"
          >
            <img
              src={DiceIcon}
              className={`${isLoading ? "animate-spin" : ""}`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AdvicePage;
