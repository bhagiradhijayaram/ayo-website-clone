import { useEffect, useState } from "react";
import Navbar from "../components/layout/Nabar";
import HeroSection from "../components/sections/HeroSection";
import WhyAyo from "../components/sections/WhyAyo";
import Disruption from "../components/sections/Disruption";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const targetDate = new Date("2025-12-25T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p>Time expired</p>;
  }

  return (
    <>
      <div className="bg-black text-white p-4 flex flex-col justify-center items-center m-2 rounded-xl">
        <h1 className="uppercase">Sleep better, feel Amazing, start now.</h1>
        <p className="font-semibold">
          This holiday: 15% OFF + FREE Expedited Shipping
        </p>
        <p>
          Use code CHRISTMAS – limited stock {String(timeLeft.days)}d{" "}
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </p>
      </div>
      <Navbar />
      <HeroSection />
      <ImageCarousel />
      <Disruption />
      <WhyAyo />
    </>
  );
};
export default Home;
