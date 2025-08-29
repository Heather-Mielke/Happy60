import { Gift } from "lucide-react";

const AchievementUnlocked = () => (
  <div
    className="bg-gradient-to-r from-black/90 to-white/10 backdrop-blur-lg rounded-none p-6 shadow-2xl border-2 border-[#e09c2b]/80 mt-8"
    style={{ fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
  >
    <h3
      className="text-xl font-bold mb-3 flex items-center text-[#e09c2b] drop-shadow-lg"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        textTransform: "uppercase",
      }}
    >
      <Gift className="w-5 h-5 text-[#e09c2b] mr-2 animate-bounce" />
      <span className="text-white ml-1">Achievement Unlocked!</span>
    </h3>
    <div className="space-y-2 text-white">
      <div className="flex items-center">
        <span className="text-[#e09c2b] mr-2">🏅</span>
        <span>Senior Discount</span>
      </div>
      <div className="flex items-center">
        <span className="text-[#e09c2b] mr-2">🏅</span>
        <span>Professional Bush Trimmer</span>
      </div>
      <div className="flex items-center">
        <span className="text-[#e09c2b] mr-2">🏅</span>
        <span>Vacation Level 60</span>
      </div>
    </div>
  </div>
);

export default AchievementUnlocked;
