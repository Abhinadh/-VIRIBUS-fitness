import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/pagination'

// ✅ Real Google reviews (no photos)
const reviews = [
  {
    name: 'Shalvin Vijayan',
    text: `VIRIBUS is a fantastic place to work out. The gym is clean, well-equipped and has a great atmosphere. 
Trainer Jithin Joy is amazing! He helps with the right exercises, proper form and keeps you motivated. 
Whether you’re a beginner or experienced, he makes workouts effective and fun. 
Highly recommend this gym and training with Jithin!`,
    rating: 5,
  },
  {
    name: 'Ananthu Krishna VM',
    text: `It's been 2 years I'm working out here. Friendly atmosphere — feels like our own gym 😌💖`,
    rating: 5,
  },
  {
    name: 'Nerein Baiju',
    text: `I've been coming to this gym for a year now and it's been a great experience. 
The trainers are supportive and the machines are good. Definitely the best gym in the area! 
It's clean, well-organized, and offers everything you need for a great workout. Highly recommend it!`,
    rating: 5,
  },
  {
    name: 'Nithin Varghese',
    text: `After being a member of this gym for over a year now, I can confidently say it has transformed my fitness journey. 
The staff members are friendly, knowledgeable, and supportive. Their guidance has helped me achieve my fitness goals. 
The personalized diet plan they provided complements the workouts perfectly. Highly recommend this gym for anyone 
looking for a long-term commitment to health and fitness in a positive environment.`,
    rating: 5,
  },
  {
    name: 'Hari Prasad',
    text: `I've been absolutely thrilled with my experience at Viribus! The trainers are top-notch, providing excellent guidance 
and support throughout my weight loss journey. The workout team is fantastic and makes the place feel like a second home. 
Highly recommend this gym for anyone looking to achieve their fitness goals! Worth every penny you spend here!`,
    rating: 5,
  },
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <BsStarFill key={i} className="h-4 w-4 text-yellow-400" />
        ) : (
          <FiStar key={i} className="h-4 w-4 text-gray-300" />
        )
      )}
      <span className="ml-1 text-xs font-medium text-gray-100">{rating}.0</span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container-section py-28 md:py-36 bg-gradient-to-b from-black to-red-900"
      data-aos="fade-up"
    >
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl tracking-wide">
          What Members Say
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Real stories. Real results.{' '}
          <span className="text-yellow-400 font-semibold">
            200+ positive feedbacks
          </span>.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 500, // ⏳ slower slide delay (2.5s)
          disableOnInteraction: false,
          reverseDirection: true, // 🔁 right-to-left direction
          pauseOnMouseEnter: true, // 🖱️ stop when hovered
        }}
        speed={1250} // 🐢 slower smooth transition
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.name}>
            <article className="h-full rounded-2xl border border-red-600 bg-red-600 text-white p-8 shadow-lg transition-transform duration-300 hover:scale-[1.03]">
              <div className="mb-3">
                <h3 className="font-bold text-xl">{r.name}</h3>
                <p className="text-xs text-gray-200">Google Review</p>
              </div>
              <div className="mb-3">
                <StarRating rating={r.rating} />
              </div>
              <p className="text-sm leading-relaxed text-gray-100">{r.text}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
