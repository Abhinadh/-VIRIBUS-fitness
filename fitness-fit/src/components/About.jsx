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
            src="/uploads/images/awrded.jpg"
            alt="Award-winning fitness center with professional trainers at Viribus Gym"
            className="w-full max-h-[450px] rounded-2xl object-contain"
            loading="lazy"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-bold md:text-4xl">About Us</h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to make fitness accessible, engaging, and results-driven.
            Our world-class trainers and diverse programs help you build strength,
            flexibility, and endurance — your way.
          </p>

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
