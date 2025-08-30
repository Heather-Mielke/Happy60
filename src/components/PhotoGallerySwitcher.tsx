import React, { useState } from "react";
import PhotoGridGallery from "./PhotoGridGallery";
import ClassicCarousel from "./ClassicCarousel";

const PhotoGallerySwitcher: React.FC = () => {
  const [view, setView] = useState<"grid" | "carousel">("carousel");
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleSetView = (newView: "grid" | "carousel") => {
    setView(newView);
    if (newView === "grid") {
      setShuffleKey((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Switcher label/buttons */}
      <div className="flex justify-center items-center gap-4 py-4">
        <button
          className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-200 shadow-md border-2 border-[#d19c2b] focus:outline-none ${
            view === "grid"
              ? "bg-[#d19c2b] text-black"
              : "bg-black text-[#d19c2b] hover:bg-[#d19c2b] hover:text-black"
          }`}
          onClick={() => handleSetView("grid")}
        >
          Grid Gallery
        </button>
        <button
          className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-200 shadow-md border-2 border-[#d19c2b] focus:outline-none ${
            view === "carousel"
              ? "bg-[#d19c2b] text-black"
              : "bg-black text-[#d19c2b] hover:bg-[#d19c2b] hover:text-black"
          }`}
          onClick={() => handleSetView("carousel")}
        >
          Carousel
        </button>
      </div>
      {/* Gallery display */}
      <div className="mt-2">
        {view === "grid" ? (
          <PhotoGridGallery shuffleKey={shuffleKey} />
        ) : (
          <ClassicCarousel />
        )}
      </div>
    </div>
  );
};

export default PhotoGallerySwitcher;
