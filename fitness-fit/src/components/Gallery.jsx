import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const IMAGES_PER_PAGE = 8;

export function Gallery() {
  const images = Object.values(
    import.meta.glob("/src/gallery/*.{png,jpg,jpeg,webp}", {
      eager: true,
    })
  ).map((file, index) => ({
    id: index + 1,
    src: file.default,
    alt: `Viribus gym gallery image ${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, endIndex);

  return (
    <section id="gallery" data-aos="fade-up">
      {/* ✅ Full-width Hero Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-60 sm:h-80 md:h-96 flex flex-col items-center justify-center text-center">
        
        {/* ✅ Background Image */}
        <img
          src="/uploads/images/gallery-bg.jpg"
          alt="VIRIBUS gallery background"
          className="absolute inset-0 w-full h-full object-cover opacity-12"
        />

        {/* Overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold md:text-4xl text-white">
            Fitness <span className="text-red-500">Gallery</span>
          </h1>

     <p className="mt-3 text-gray-200 dark:text-gray-200 text-xs md:text-sm leading-relaxed">
  Explore our state-of-the-art facilities and energetic workout sessions.
</p>

 


          {/* ✅ Back to Home */}
          <Link
            to="/"
            className="inline-block mt-5 text-1xl font-bold text-red-500 hover:underline"
          >
            ← Home
          </Link>
        </div>
      </div>

      {/* ✅ Image Grid Container */}
      
<div className="container-section py-20 md:py-28">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
    {currentImages.map((image) => (
      <article
        key={image.id}
        className="group rounded-lg overflow-hidden border border-gray-300 dark:border-gray-800 bg-black/70 dark:bg-black/70 shadow-md transition hover:shadow-lg"
      >
        <div className="w-full overflow-hidden flex justify-center items-center">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="
              w-full h-auto object-contain
              max-h-40      /* ✅ smaller height for mobile */
              sm:max-h-56   /* ✅ medium screens */
              md:max-h-64   /* ✅ larger on desktop */
            "
          />
        </div>
      </article>
    ))}
  </div>

        {/* ✅ Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-800 disabled:opacity-40"
              aria-label="Previous page"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex gap-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-9 w-9 rounded-full text-sm font-medium flex items-center justify-center transition
                    ${
                      currentPage === i + 1
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-800 disabled:opacity-40"
              aria-label="Next page"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {startIndex + 1}–{Math.min(endIndex, images.length)} of{" "}
          {images.length} images
        </p>
      </div>
    </section>
  );
}
