import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Gallery images configuration - Update this array with your actual images
const galleryImages = [
  { id: 1, filename: 'img1.jpg', alt: 'VIRIBUS Fitness Gym - Modern workout equipment and training area' },
  { id: 2, filename: 'img2.jpg', alt: 'VIRIBUS Gym - Group fitness class session with professional trainers' },
  { id: 3, filename: 'img3.jpg', alt: 'VIRIBUS Fitness Center - Weight training and strength conditioning area' },
  { id: 4, filename: 'img4.jpg', alt: 'VIRIBUS Gym - Cardio workout zone with treadmills and exercise bikes' },
  { id: 5, filename: 'img5.jpg', alt: 'VIRIBUS Fitness - Yoga and flexibility training session' },
  { id: 6, filename: 'img6.jpg', alt: 'VIRIBUS Gym - Personal training session with certified fitness coach' },
  { id: 7, filename: 'img7.jpg', alt: 'VIRIBUS Fitness Center - Functional training area with kettlebells and medicine balls' },
  { id: 8, filename: 'img8.jpg', alt: 'VIRIBUS Gym - High-intensity interval training (HIIT) workout class' },
  { id: 9, filename: 'img9.jpg', alt: 'VIRIBUS Fitness - Dance fitness and Zumba class in action' },
  { id: 10, filename: 'img10.jpg', alt: 'VIRIBUS Gym - Pilates and core strengthening session' },
  { id: 11, filename: 'img11.jpg', alt: 'VIRIBUS Fitness Center - CrossFit training and functional movement' },
  { id: 12, filename: 'img12.jpg', alt: 'VIRIBUS Gym - Boxing and martial arts training area' },
  { id: 13, filename: 'img13.jpg', alt: 'VIRIBUS Fitness - Stretching and recovery zone for post-workout' },
  { id: 14, filename: 'img14.jpg', alt: 'VIRIBUS Gym - Cycling and spinning class with energetic atmosphere' },
  { id: 15, filename: 'img15.jpg', alt: 'VIRIBUS Fitness Center - Resistance training and bodybuilding area' },
  { id: 16, filename: 'img16.jpg', alt: 'VIRIBUS Gym - Aerobics and dance fitness group session' },
  { id: 17, filename: 'img17.jpg', alt: 'VIRIBUS Fitness - Pre-workout warm-up and mobility exercises' },
  { id: 18, filename: 'img18.jpg', alt: 'VIRIBUS Gym - Post-workout cool-down and stretching routine' },
]

const IMAGES_PER_PAGE = 9

export function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE)
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE
  const endIndex = startIndex + IMAGES_PER_PAGE
  const currentImages = galleryImages.slice(startIndex, endIndex)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
  }

  return (
    <section id="gallery" className="container-section py-20 md:py-28" data-aos="fade-up">
      {/* SEO-Friendly Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Fitness <span className="text-red-600">Gallery</span>
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Explore our state-of-the-art facilities and energetic workout sessions.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {currentImages.map((image) => (
          <article
            key={image.id}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src={`/gallery/${image.filename}`}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="400"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            aria-label="Previous page"
          >
            <FiChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 rounded-full font-semibold transition ${
                  currentPage === page
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Page Info for SEO */}
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Showing {startIndex + 1}-{Math.min(endIndex, galleryImages.length)} of {galleryImages.length} images
      </div>
    </section>
  )
}
