import { Camera } from "lucide-react";

const DeansLifeStats = () => (
  <div
    className="bg-gradient-to-r from-black/90 to-white/10 backdrop-blur-lg rounded-none p-6 shadow-2xl border-2 border-[#e09c2b]/80"
    style={{ fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
  >
    <h3
      className="text-xl font-bold mb-4 flex items-center text-[#e09c2b] drop-shadow-lg"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        textTransform: "uppercase",
      }}
    >
      <Camera className="w-5 h-5 text-[#e09c2b] mr-2" />
      <span className="text-white ml-1">Dean's Life Stats</span>
    </h3>
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <div className="text-3xl font-extrabold text-[#e09c2b] animate-bounce drop-shadow-lg">
          60
        </div>
        <div className="text-sm text-white">Years of Awesome</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-[#e09c2b] animate-pulse drop-shadow-lg">
          21,900
        </div>
        <div className="text-sm text-white">Days of Fun</div>
      </div>
      <div>
        <div
          className="text-3xl font-extrabold text-[#e09c2b] animate-bounce drop-shadow-lg"
          style={{ animationDelay: "0.5s" }}
        >
          ∞
        </div>
        <div className="text-sm text-white">Vacations</div>
      </div>
    </div>
  </div>
);

export default DeansLifeStats;
