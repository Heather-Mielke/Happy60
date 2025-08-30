import React, { useState } from "react";

// List of all dad* images in public folder
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
  "dad-heather-leslie.JPG",
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
  "dad3.jpg",
];

const shuffleArray = (array: string[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const PhotoGridGallery: React.FC<{ shuffleKey?: number }> = ({
  shuffleKey,
}) => {
  const [enlarged, setEnlarged] = useState<string | null>(null);
  const [shuffledImages, setShuffledImages] = useState<string[]>(() =>
    shuffleArray(dadImages)
  );

  React.useEffect(() => {
    setShuffledImages(shuffleArray(dadImages));
  }, [shuffleKey]);

  return (
    <div>
      {/* Enlarged image modal */}
      {enlarged && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setEnlarged(null)}
        >
          <img
            src={`/${enlarged}`}
            alt={enlarged}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-[#d19c2b]"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      {/* Grid gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {shuffledImages.map((filename) => (
          <div
            key={filename}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setEnlarged(filename)}
          >
            <img
              src={`/${filename}`}
              alt={filename}
              className="w-full h-40 object-contain bg-black rounded-md border-2 border-[#d19c2b] shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGridGallery;
