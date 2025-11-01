import { motion } from 'framer-motion'
import { FiHeart, FiActivity, FiZap, FiUserCheck } from 'react-icons/fi'

const items = [
  { title: 'Gym', desc: 'Strength & conditioning equipment', icon: FiActivity, img: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Yoga', desc: 'Balance, flexibility, and calm', icon: FiHeart, img: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Zumba', desc: 'High-energy dance workouts', icon: FiZap, img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Personal Training', desc: '1:1 coaching to hit goals', icon: FiUserCheck, img: 'https://images.pexels.com/photos/7676402/pexels-photo-7676402.jpeg?auto=compress&cs=tinysrgb&w=1600' },
]

export function Programs() {
  return (
    <section id="programs" className="container-section py-20 md:py-28" data-aos="fade-up">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Programs</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Choose what moves you.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, desc, icon: Icon, img }) => (
          <motion.article
            key={title}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img src={img} alt={`${title} program at VIRIBUS - ${desc}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-50 p-2 text-red-600 dark:bg-red-900/30">
                  <Icon />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}


