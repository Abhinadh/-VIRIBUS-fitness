export function About() {
  return (
    <section
      id="about"
      className="container-section py-20 md:py-28"
      data-aos="fade-up"
      aria-label="About Viribus Fitness"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        
        <div className="w-full flex justify-center">
          <img
            src="/uploads/images/gallery-bg.jpg"
            alt="Award-winning fitness center with professional trainers at Viribus Gym"
            className="w-full max-h-[450px] rounded-2xl object-contain"
            loading="lazy"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-bold md:text-4xl">About Us</h2>

          <div className="space-y-4 text-lg md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed">
  <p>
    Our mission is to make fitness accessible, exciting, and truly life-changing. With dedicated trainers
    and dynamic workout programs, we empower you to build strength, flexibility, and endurance — at your
    pace, in your style. Together, we unlock the strongest version of you.
  </p>

  <p>
    Whether you’re just starting your fitness journey or pushing toward new personal records, we’re here
    to guide, support, and inspire you every step of the way.
  </p>
</div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Certified Trainers',
              'Personalized Plans',
              'Modern Equipment',
              'Holistic Wellness',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 dark:border-gray-800"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-600" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
