import { Laugh } from "lucide-react";

const BirthdayRoastCard = () => (
  <div
    className="bg-gradient-to-r from-black/80 to-[#e09c2b]/20 backdrop-blur-lg rounded-none p-6 shadow-2xl border border-[#e09c2b]/40"
    style={{ fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
  >
    <h3
      className="text-2xl font-bold mb-4 flex items-center"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        textTransform: "uppercase",
      }}
    >
      <Laugh className="w-6 h-6 text-[#e09c2b] mr-2 animate-bounce" />
      Birthday Roast
    </h3>
    <p className="text-base text-orange-100 leading-relaxed">
      Dean, at 60 you've reached the perfect age - old enough to know better,
      but still young enough to do it anyway! You're like a classic car:
      vintage, well-maintained, and making weird noises! 🚗💨
    </p>
  </div>
);

export default BirthdayRoastCard;
