import { useState, useEffect, JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { url: string; caption: string };

const photos: Photo[] = [
  { url: "/dad-aunts-uncles.jpeg", caption: "Dad with aunts and uncles" },
  { url: "/dad-beer.jpeg", caption: "Dad enjoying a cold one" },
  { url: "/dad-darcy-grandma.jpeg", caption: "Dad, Darcy, and Grandma" },
  { url: "/dad-darcyfamily.jpeg", caption: "Dad with Darcy's family" },
  { url: "/dad-darcykids.jpeg", caption: "Dad with Darcy's kids" },
  { url: "/dad-grandkids.jpeg", caption: "Dad and the grandkids" },
  { url: "/dad-grandkids2.jpeg", caption: "More fun with grandkids" },
  { url: "/dad-grandkids3.jpeg", caption: "Even more grandkids!" },
  { url: "/dad-grandma-morg.jpeg", caption: "Dad, Grandma, and Morg" },
  { url: "/dad-hairdye.jpeg", caption: "Dad's hair dye adventure" },
  { url: "/dad-heather.jpeg", caption: "Dad and Heather" },
  { url: "/dad-kyra.jpeg", caption: "Dad and Kyra" },
  { url: "/dad-kyra2.jpeg", caption: "Dad and Kyra again" },
  { url: "/dad-leslie.jpeg", caption: "Dad and Leslie" },
  { url: "/dad-madi.jpeg", caption: "Dad and Madi" },
  { url: "/dad-shit.jpeg", caption: "Dad being silly" },
];

const Carousel = (): JSX.Element => {
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const intervalId = window.setInterval(nextPhoto, 6000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div className="bg-white/20 backdrop-blur-lg rounded-md p-2 shadow-2xl border-2 border-black">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={photos[currentPhoto].url}
            alt={`Dean photo ${currentPhoto + 1}`}
            className="w-full h-[32rem] object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1"
            style={{ objectPosition: "top" }}
          />

          {/* Carousel Navigation */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#222] hover:bg-[#111] text-white p-3 rounded-none transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ boxShadow: "0 0 12px #222, 0 0 32px #111" }}
          >
            <ChevronLeft className="w-6 h-6 text-[#e09c2b]" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#222] hover:bg-[#111] text-white p-3 rounded-none transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ boxShadow: "0 0 12px #222, 0 0 32px #111" }}
          >
            <ChevronRight className="w-6 h-6 text-[#e09c2b]" />
          </button>

          {/* Photo Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPhoto
                    ? "bg-[#e09c2b] scale-125"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Photo Caption */}
        <p
          className="text-center text-orange-100 mt-4 text-lg font-semibold italic"
          style={{ fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
        >
          {photos[currentPhoto].caption}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
