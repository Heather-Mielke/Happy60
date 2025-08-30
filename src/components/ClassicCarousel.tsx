import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dadImages = [
  "dad-all-fam.JPEG",
  "dad-aunts-uncles.jpeg",
  "dad-beer.jpeg",
  "dad-bryce-car.JPEG",
  "dad-bryce-madi-grandma.jpeg",
  "dad-bryce.jpeg",
  "dad-darc-grma.JPEG",
  "dad-darcy-grandma.jpeg",
  "dad-darcy.JPEG",
  "dad-darcy3.jpeg",
  "dad-darcyfamily.jpeg",
  "dad-darcykids.jpeg",
  "dad-daughters.jpeg",
  "dad-duck-lips.JPG",
  "dad-fam.jpeg",
  "dad-grandkids.jpeg",
  "dad-grandkids2.jpeg",
  "dad-grandkids3.jpeg",
  "dad-grandkids4.jpeg",
  "dad-grandma-morg.jpeg",
  "dad-hairdye.jpeg",
  "dad-heather.jpeg",
  "dad-kids-water.jpeg",
  "dad-kyra.jpeg",
  "dad-kyra2.jpeg",
  "dad-kyra4.jpeg",
  "dad-leslie.jpeg",
  "dad-madi-3.jpeg",
  "dad-madi-5.jpeg",
  "dad-madi.jpeg",
  "dad-madi2.JPEG",
  "dad-madi5.jpeg",
  "dad-mo.jpeg",
  "dad-mo2.JPEG",
  "dad-passed-out.jpeg",
  "dad-shit.jpeg",
  "dad-summer.jpeg",
  "dad-trista-darc.jpeg",
  "dad-trista-wedding.JPEG",
  "dad-trista.JPEG",
  "dad-us-fuji.JPG",
  "dad-vacation.jpeg",
  "dad2.jpeg",
];

const ClassicCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % dadImages.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + dadImages.length) % dadImages.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(nextPhoto, 6000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div className="bg-black/90 backdrop-blur-lg rounded-md p-2 shadow-2xl border-2 border-black">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={`/${dadImages[currentPhoto]}`}
            alt={`Dean photo ${currentPhoto + 1}`}
            className="w-full h-[32rem] object-contain object-center transition-all duration-700 hover:scale-110 hover:rotate-1 bg-black"
            style={{ objectPosition: "top" }}
          />
          {/* Carousel Navigation */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#222] hover:bg-[#111] text-white p-3 rounded-none transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ boxShadow: "0 0 12px #222, 0 0 32px #111" }}
          >
            <ChevronLeft className="w-6 h-6 text-[#d19c2b]" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#222] hover:bg-[#111] text-white p-3 rounded-none transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ boxShadow: "0 0 12px #222, 0 0 32px #111" }}
          >
            <ChevronRight className="w-6 h-6 text-[#d19c2b]" />
          </button>
          {/* Photo Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {dadImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentPhoto
                    ? "bg-[#d19c2b] scale-110"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicCarousel;
