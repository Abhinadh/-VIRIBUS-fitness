import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/pagination'

// Add your real Google reviews here (4+ star ratings only)
// Format: { name: 'Customer Name', text: 'Review text...', rating: 4 or 5, img: 'profile-image-url' }
const reviews = [
  // TODO: Replace these with real Google reviews from https://share.google/VhgAVvApWRF1DWBtU
  // Copy reviews with 4+ stars and paste below:
  {
    name: 'Aisha K',
    text: 'Amazing energy and trainers. I hit my goals in 3 months!',
    rating: 5,
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Rahul M',
    text: 'The classes are super engaging. Love the Zumba sessions!',
    rating: 5,
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Sophia L',
    text: 'Clean facility, great vibe, and flexible timings.',
    rating: 5,
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        i < rating ? (
          <BsStarFill key={i} className="h-4 w-4 text-yellow-400" />
        ) : (
          <FiStar key={i} className="h-4 w-4 text-gray-300" />
        )
      ))}
      <span className="ml-1 text-xs font-medium text-gray-600">{rating}.0</span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="container-section py-20 md:py-28" data-aos="fade-up">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">What Members Say</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Real stories. Real results.</p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.name}>
            <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img src={r.img} alt={`${r.name} - VIRIBUS member testimonial`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <h3 className="font-semibold">{r.name}</h3>
                    <p className="text-xs text-gray-500">Google Review</p>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <StarRating rating={r.rating} />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{r.text}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
