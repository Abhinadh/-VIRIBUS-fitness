import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  message: yup.string().optional(),
})

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500))
    alert(`Thank you, ${data.name}! We will reach out soon.`)
    reset()
  }

  return (
    <section id="contact" className="container-section py-20 md:py-28" data-aos="fade-up">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Join Us</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Book a free trial or ask a question.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950" placeholder="Your name" {...register('name')} />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950" placeholder="name@email.com" {...register('email')} />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Phone</label>
              <input className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950" placeholder="Optional" {...register('phone')} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm dark:border-gray-700 dark:bg-gray-950" rows={4} placeholder="Optional" {...register('message')} />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Submitting...' : 'Book Free Trial'}
            </button>
          </div>
        </form>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
          <iframe
            title="VIRIBUS GYM Location Map - Nalukettu, Koratty, Kerala"
            src="https://www.google.com/maps?q=VIRIBUS+GYM+opposite+MAMHSS+Nalukettu+Koratty+Kerala+680308&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 420 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}


