export function Plans() {
  const plans = [
    { name: 'Basic', price: 1000, features: ['Gym access', 'Group classes (2/wk)', 'Locker access'] },
    { name: 'Pro', price: 1500, features: ['All classes', 'Sauna access', 'Personal plan'], highlight: true },
    { name: 'Elite', price: 2000, features: ['Unlimited classes', 'PT (2/mo)', 'Priority support'] },
  ]

  return (
    <section id="plans" className="container-section py-20 md:py-28" data-aos="fade-up">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Membership Plans</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Flexible plans for every fitness journey.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 ${
              plan.highlight ? 'border-red-500 shadow-red-100 dark:shadow-red-900/10' : 'border-gray-200 shadow-sm'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 right-6 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                Popular
              </span>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">/mo</span>
            </div>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#contact" className="btn-primary w-full">Choose Plan</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
