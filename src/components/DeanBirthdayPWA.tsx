import { useState, useEffect, JSX } from "react";
import Carousel from "./Carousel";
import BirthdayRoastCard from "./BirthdayRoastCard";
import BirthdayPartyModeButton from "./BirthdayPartyModeButton";
import DeansLifeStats from "./DeansLifeStats";
import AchievementUnlocked from "./AchievementUnlocked";
import Footer from "./Footer";
const funnyMessages: string[] = [
  "60 years young and still causing trouble!",
  "They say age brings wisdom... we're still waiting!",
  "60 candles? Hope the fire department is on standby!",
  "You're not old, you're just... well-seasoned!",
  "60 and fabulous - like a fine wine or aged cheese!",
  "Congrats on reaching Level 60 in the game of life!",
  "At 60, you've officially earned the right to grunt when you stand up!",
  "Happy 60th! Time to start lying about your age... again!",
];

const DeanBirthdayPWA = (): JSX.Element => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<number>(0);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setCurrentMessage((prev) => (prev + 1) % funnyMessages.length);
    window.setTimeout(() => setShowConfetti(false), 4000);
  };

  // Auto-change funny message every 8 seconds
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funnyMessages.length);
    }, 8000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Responsive Balloon Header with Heading Section */}
        <div className="balloon-header-parent">
          <div className="balloon-header-bg">
            <img
              src="/BalloonImage.png"
              alt="Balloon Header"
              className="balloon-header-img"
            />
            <div className="balloon-header-gradient"></div>
          </div>
          {/* Overlay for black background */}
          <div className="balloon-header-overlay"></div>
          <div
            className="birthday-header-content"
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "100%",
              paddingLeft: "2rem",
              paddingBottom: "2rem",
              minWidth: "320px",
              maxWidth: "100%",
            }}
          >
            {/* Responsive image behavior for <=950px width */}
            <style>{`
              @media (max-width: 950px) {
                .birthday-header-bg {
                  background-size: 950px !important;
                  background-position: top right !important;
                }
              }
            `}</style>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-2 text-left main-header header-glow">
              Cheers to 60 Years
            </h1>
            <h2
              className="text-4xl md:text-5xl mb-2 text-left"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Happy Birthday Dad
            </h2>
            <p
              className="text-base italic text-orange-100 text-left"
              style={{
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                maxWidth: "35rem",
                fontSize: ".8rem",
              }}
            >
              "The secret of staying young is to live honestly, eat slowly, take
              your daughters on vacation and lie about your age."
            </p>
          </div>
        </div>

        {/* Enhanced Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: "2s",
                }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#d19c2b] via-[#d19c2b] to-[#d19c2b]"></div>
              </div>
            ))}
            {[...Array(50)].map((_, i) => (
              <div
                key={`balloon-${i}`}
                className="absolute animate-bounce text-[#d19c2b] text-3xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1}s`,
                  animationDuration: "3s",
                }}
              >
                🥳
              </div>
            ))}
          </div>
        )}

        {/* Funny Message Ticker */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 mb-20 mt-20">
          <div className="border-t border-b border-[#e09c2b] py-4 px-8 text-center shadow-2xl">
            <p
              className="text-xl md:text-2xl text-white animate-pulse"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textTransform: "uppercase",
              }}
            >
              {funnyMessages[currentMessage]}
            </p>
          </div>
        </div>

        {/* Main Content - single column, full width */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-8 flex flex-col items-stretch">
          {/* Photo Carousel at the top */}
          <Carousel />

          <div className="mt-8 space-y-6">
            <BirthdayRoastCard />
            <BirthdayPartyModeButton triggerConfetti={triggerConfetti} />
            <DeansLifeStats />
            <AchievementUnlocked />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DeanBirthdayPWA;
